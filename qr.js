window.onload = function() {
  chrome.tabs.getSelected(null, function(tab) {
    var main = document.getElementById('main');

    var info = document.createElement('p');
    info.innerHTML = tab.title + '<br>' + tab.url;
    main.appendChild(info);

    var img = document.createElement('img');
    img.src = 'http://chart.apis.google.com/chart?chs=150x150&cht=qr&chl='+ tab.url;
    main.appendChild(img);
  });
};
