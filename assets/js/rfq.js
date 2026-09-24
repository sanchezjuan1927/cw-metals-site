/* CW Metals Inc. — RFQ forms: posts to an n8n webhook that emails the request (with drawings) */
(function () {
  'use strict';
  var RFQ_ENDPOINT = 'https://jsanchez-systems.app.n8n.cloud/webhook/cw-metals-rfq';
  var RFQ_EMAIL = 'estimating@cwmetalsinc.com';
  var MAX_MB = 15;

  document.querySelectorAll('#quote-form, form[aria-label="Request for Quote form"]').forEach(function (form) {
    var status = form.querySelector('.form-status');
    var btn = form.querySelector('button[type="submit"]');
    var fileInput = form.querySelector('input[type="file"]');

    function show(kind, html) {
      if (!status) return;
      status.className = 'form-status ' + kind;
      status.innerHTML = html;
    }
    function mailto(fd) {
      var lines = [];
      fd.forEach(function (v, k) { if (typeof v === 'string' && v && k !== 'website') lines.push(k + ': ' + v); });
      return 'mailto:' + RFQ_EMAIL + '?subject=' + encodeURIComponent('RFQ — ' + (fd.get('company') || '')) +
        '&body=' + encodeURIComponent(lines.join('\n') + '\n\n(Please attach your drawings to this email.)');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true, first = null;
      form.querySelectorAll('[required]').forEach(function (f) {
        var bad = !String(f.value || '').trim() || (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        f.style.borderColor = bad ? 'rgba(239,68,68,0.6)' : '';
        f.style.boxShadow = bad ? '0 0 0 3px rgba(239,68,68,0.1)' : '';
        if (bad) { ok = false; first = first || f; }
      });
      if (!ok) { if (first) first.focus(); return; }
      var total = 0;
      if (fileInput && fileInput.files) Array.prototype.forEach.call(fileInput.files, function (f) { total += f.size; });
      if (total > MAX_MB * 1048576) {
        show('err', 'Your files add up to more than ' + MAX_MB + ' MB. Please send fewer files, or email <a href="mailto:' + RFQ_EMAIL + '">' + RFQ_EMAIL + '</a> with a Dropbox / Google Drive / Procore link.');
        return;
      }

      var fd = new FormData(form);
      fd.append('page', window.location.pathname);
      var label = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      fetch(RFQ_ENDPOINT, { method: 'POST', body: fd })
        .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); })
        .then(function () {
          form.reset();
          var fl = form.querySelector('[id$="file-list"]'); if (fl) { fl.innerHTML = ''; fl.classList.add('hidden'); }
          show('ok', '<strong>Thank you — your request is in.</strong> Our estimating team will respond within 24 business hours.');
          if (btn) { btn.innerHTML = label; btn.disabled = false; }
        })
        .catch(function () {
          show('err', 'We couldn’t send the form from this page. Please <a href="' + mailto(fd) + '">email your request to ' + RFQ_EMAIL + '</a> or call <a href="tel:9174167906">917-416-7906</a>.');
          if (btn) { btn.innerHTML = label; btn.disabled = false; }
        });
    });
    form.querySelectorAll('[required]').forEach(function (f) {
      f.addEventListener('input', function () { f.style.borderColor = ''; f.style.boxShadow = ''; });
    });
  });
})();
