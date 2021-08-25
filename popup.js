let switchButton = document.querySelector('input[type=checkbox]');

chrome.storage.sync.get('enablePreserveRequestLog', (result) => {
  console.log(result.enablePreserveRequestLog);
  switchButton.checked = result.enablePreserveRequestLog;
});

switchButton.addEventListener('change', function () {
  if (this.checked) {
    chrome.storage.sync.set({ enablePreserveRequestLog: true });
    console.log('Checkbox is checked..');
  } else {
    chrome.storage.sync.set({ enablePreserveRequestLog: false });
    console.log('Checkbox is not checked..');
  }
});
