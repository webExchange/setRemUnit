(function (win, doc) {
    var docEl = doc.documentElement;
    
    function setRemUnit() {
        var dpr, scale;
        if (win.devicePixelRatio) {
            dpr = win.devicePixelRatio;
            scale = 1 / dpr;
        } else {
            dpr = 1;
            scale = 1 / dpr;
        }

        // 先缩放
        var metaEl = doc.querySelector('meta[name = "viewport"]');
        if(!metaEl){
            metaEl = doc.createElement('meta');
            doc.head.appendChild(metaEl);
        }
        metaEl.setAttribute('name', "viewport");
        metaEl.setAttribute('content', "width = device-width, user-scalable = no, initial-scale = " + scale + ", minimum-scale = " + scale + ", maximum-scale = " + scale);
        var docWidth = docEl.clientWidth;

        // 调整页面缩放
        var rem = (docWidth / 750) * 100;
        docEl.style.fontSize = rem + 'px';
    }

    win.addEventListener('resize', function () {
        //setRemUnit();
    }, false);
    // 页面从缓存中读取
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    });

    setRemUnit();
})(window, document);
