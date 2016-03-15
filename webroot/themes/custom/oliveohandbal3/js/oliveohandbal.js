var mygallery=new fadeSlideShow({
    wrapperid: "fadeshow1",
    dimensions: [785, 200],
    imagearray: [
        ["/themes/custom/oliveohandbal3/images/background3.jpg"],
        ["/themes/custom/oliveohandbal3/images/background2.jpg"],
        ["/themes/custom/oliveohandbal3/images/background4.jpg"],
        ["/themes/custom/oliveohandbal3/images/background1.jpg"],
        ["/themes/custom/oliveohandbal3/images/background5.jpg"],
        ["/themes/custom/oliveohandbal3/images/background6.jpg"],
        ["/themes/custom/oliveohandbal3/images/background7.jpg"],
        ["/themes/custom/oliveohandbal3/images/background8.jpg"]
    ],
    displaymode: {type:'auto', pause:9500, /* 9500  */ cycles:0, wraparound:false},
    persist: false,
    fadeduration: 700, /* 700 */
    descreveal: "ondemand",
    togglerid: ""
});

var dropdown=new TINY.dropdown.init("dropdown", {id:'menu', active:'menuhover'});