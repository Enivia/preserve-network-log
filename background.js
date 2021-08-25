let enablePreserveRequestLog = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    enablePreserveRequestLog: enablePreserveRequestLog,
  });
  console.log(
    `Default enablePreserveRequestLog set to ${enablePreserveRequestLog}`
  );
});
