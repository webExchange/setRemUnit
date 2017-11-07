# setRemUnit
移动端的rem适配，可以解决1px问题，窗口变化会自动缩放
根据淘宝适配方案自己写了一点，rem可以除以10，一般设计图为750时候，rem为75px;方便计算，当然你可以用less或sass转换工具

```
win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    });
```

这个函数监控的是页面是否缓存中读取的, event上有persisted属性，返回布尔值，为true证明是从缓存中读取
还没有加入媒体查询控制字体大小，所以还要继续完善
