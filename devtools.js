// chrome.devtools.panels.create(
//   'PreserveNetworkLog',
//   '',
//   '/panel.html',
//   function (panel) {
//     chrome.devtools.network.onRequestFinished.addListener(function (request) {
//       chrome.storage.sync.get('enablePreserveRequestLog', (result) => {
//         console.log(result.enablePreserveRequestLog);
//         if (result.enablePreserveRequestLog) {
//           request.getContent((content, encoding) => {
//             console.log(content);
//           });
//         }
//       });
//     });
//   }
// );

chrome.devtools.network.onRequestFinished.addListener(function (request) {
  chrome.storage.sync.get('enablePreserveRequestLog', (result) => {
    console.log(result.enablePreserveRequestLog);
    if (result.enablePreserveRequestLog) {
      request.getContent((content, encoding) => {
        console.log(content);
      });
    }
  });
});
