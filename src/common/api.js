var stream
__weex_define__('@weex-temp/api', function (__weex_require__) {
    stream = __weex_require__('@weex-module/stream')
});
var navigate
__weex_define__('@weex-temp/api', function (__weex_require__) {
    navigate = __weex_require__('@weex-module/navigator')
});

var apiURL = {
    baseurl: 'http://139.129.128.77:3000',
   // baseurl: 'http://192.168.3.164:3000',
    getRandom:'/food/weather',
    getResult:'/food/suggest',
    getInvite:'/food/treat',
    getWeather:'http://route.showapi.com/9-5?showapi_appid=29691&showapi_sign=4b5c31bf9ba34d1a93f8651ad0bc3c1b&from=5',
    getLogin:'/users/login',
    getRegister:'/users/signup',
    editUserInfo:'/users/editInfo',
    getCuteData:'/food/heatList',
    choiceLove:'/users/iLoveIt',
};
function postData(url,msg,callback) {
    stream.fetch({
        method: 'POST',
        url: url,
        headers:{'Content-Type':'application/json; charset=utf-8'},
        body:JSON.stringify(msg)
    }, function (retdata) {
        callback(retdata);
    });
}
function getData(url,callback) {
    stream.fetch({
        method: 'GET',
        url: url,
    }, function (retdata) {
        callback(retdata);
    });
}
exports.getRandom = function (msg,callback) {
    postData(apiURL.baseurl + apiURL.getRandom,msg,callback);
};
exports.getResult = function (msg,callback) {
    postData(apiURL.baseurl + apiURL.getResult,msg,callback);
};
exports.getInvite=function(msg,callback){
    postData(apiURL.baseurl+apiURL.getInvite,msg,callback)
};
exports.getWeather=function(msg,callback){
    getData(apiURL.getWeather+'&lng='+msg.lng+'&lat='+msg.lat,callback);
};
exports.getLogin=function(msg,callback){
    postData(apiURL.baseurl+apiURL.getLogin,msg,callback);
};
exports.getRegister=function(msg,callback){
    postData(apiURL.baseurl+apiURL.getRegister,msg,callback);
};
exports.editUserInfo=function(msg,callback){
    postData(apiURL.baseurl+apiURL.editUserInfo,msg,callback);
};
exports.getCuteData=function(msg,callback){
    postData(apiURL.baseurl+apiURL.getCuteData,msg,callback);
};
exports.getHungryData=function(msg,callback){
    postData(apiURL.baseurl+apiURL.getCuteData,msg,callback);
};
exports.getFriendData=function(msg,callback){
    postData(apiURL.baseurl+apiURL.getCuteData,msg,callback);
};
exports.getPartyData=function(msg,callback){
    postData(apiURL.baseurl+apiURL.getCuteData,msg,callback);
};
exports.choiceLove=function(msg,callback){
    postData(apiURL.baseurl+apiURL.choiceLove,msg,callback);
}

exports.apiURL =apiURL;
exports.navigator =function(baseurl,tourl,callback){
    var params = {
      'url': baseurl + tourl,
      'animated': 'true'
    };
    navigate.push(params, callback);
}
exports.getBaseUrl = function (bundleUrl, isnav) {
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    }
    else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    }
    else {
        var host = 'localhost:8080';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        if (typeof window === 'object') {
            nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
        } else {
            nativeBase = 'http://' + host + '/dist/';
        }
    }
    return nativeBase;
};