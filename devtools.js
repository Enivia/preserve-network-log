chrome.devtools.network.onRequestFinished.addListener(function (request) {
  request.getContent((content, encoding) => {
    console.log(content);
  });
});
