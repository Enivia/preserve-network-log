chrome.devtools.panels.create(
  'PreserveNetworkLog',
  '',
  '/panel.html',
  function (panel) {
    chrome.devtools.network.onRequestFinished.addListener(function (request) {
      // console.log(request);
      // request.getContent();
      // request.getContent((content, encoding) => {
      //   console.log(JSON.parse(content));
      // });
    });
  }
);
