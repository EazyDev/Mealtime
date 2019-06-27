//window.open('http://www.reddit.com/r/mealtimevideos', '_blank');
axios.get('https://www.reddit.com/r/mealtimevideos/.json').then(function (res) {
    var children = res.data.data.children;
    var child = children[Math.floor(Math.random()*children.length)];
    var url = child.data.url;
    window.open(url, '_blank');
})
//chrome.tabs.create({"url": "http://google.com"});
