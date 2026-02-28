(function () {
  'use strict';

  var RECENT_COUNT = 10; // show this many papers by default (adjust to 8–12 as you like)
  var papersContainer = document.getElementById('papers');
  var showOlderWrap = document.getElementById('show-older-wrap');
  var btnShowOlder = document.getElementById('btn-show-older');

  if (!papersContainer || !showOlderWrap || !btnShowOlder) return;

  var paperRows = Array.from(papersContainer.querySelectorAll('.paper-row'));

  function getOlderRows() {
    return paperRows.filter(function (row) { return row.classList.contains('older'); });
  }
  var olderRows = [];
  var hasOlder = false;

  function setRecentVisibility(showOnlyRecent) {
    olderRows.forEach(function (row) {
      if (showOnlyRecent) {
        row.classList.remove('visible');
      } else {
        row.classList.add('visible');
      }
    });
    if (showOnlyRecent && hasOlder) {
      showOlderWrap.classList.remove('hidden');
      btnShowOlder.textContent = 'Show older publications';
    } else {
      showOlderWrap.classList.add('hidden');
    }
  }

  function markOlderRows() {
    paperRows.forEach(function (row, i) {
      row.classList.remove('older');
      if (i >= RECENT_COUNT) {
        row.classList.add('older');
        row.classList.remove('visible');
      }
    });
  }

  markOlderRows();
  olderRows = getOlderRows();
  hasOlder = olderRows.length > 0;
  if (!hasOlder) showOlderWrap.classList.add('hidden');

  btnShowOlder.addEventListener('click', function () {
    olderRows.forEach(function (row) { row.classList.add('visible'); });
    showOlderWrap.classList.add('hidden');
    btnShowOlder.textContent = 'Show older publications';
  });

  // Smooth scroll for anchor links (optional enhancement if CSS scroll-behavior isn’t enough)
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var id = a.getAttribute('href');
    if (id === '#') return;
    a.addEventListener('click', function (e) {
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  var lastUpdatedEl = document.getElementById('last-updated');
  if (lastUpdatedEl && document.lastModified) {
    var d = new Date(document.lastModified);
    lastUpdatedEl.textContent = d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  }
})();
