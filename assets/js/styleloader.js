(function (document) {
  define([], function() {
    var styleLoader = function(url) {
      var callback = function() {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        var head = document.getElementsByTagName('head')[0];
        var stylesheet = document.getElementsByTagName('link')[0];
        head.insertBefore(link, stylesheet);
      };
      var raf = requestAnimationFrame || mozRequestAnimationFrame ||
        webkitRequestAnimationFrame || msRequestAnimationFrame;

      if (raf) {
        raf(callback);
        return
      }
      callback();
    };

    return styleLoader;
  });
}(document));
