document.getElementById('get').onclick = () => {
  console.log('click');
  chrome.devtools.network.getHAR((log) => {
    log.entries.forEach((request) => {
      request.getContent((content, encoding) => {
        console.log(content, encoding)
      });
    });
  });
};
