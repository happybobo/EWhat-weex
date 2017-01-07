/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(102)
	var __weex_template__ = __webpack_require__(174)
	var __weex_style__ = __webpack_require__(175)
	var __weex_script__ = __webpack_require__(176)
	
	__weex_define__('@weex-component/7f259726c6c6cd5a05bfab66e2380917', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/7f259726c6c6cd5a05bfab66e2380917',undefined,undefined)

/***/ },

/***/ 86:
/***/ function(module, exports) {

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

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(103)
	var __weex_style__ = __webpack_require__(104)
	var __weex_script__ = __webpack_require__(105)
	
	__weex_define__('@weex-component/myheader', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },

/***/ 103:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "head"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "re"
	      ],
	      "events": {
	        "click": "back"
	      },
	      "attr": {
	        "src": function () {return this.resrc}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "src": function () {return this.titlesrc}
	      }
	    }
	  ]
	}

/***/ },

/***/ 104:
/***/ function(module, exports) {

	module.exports = {
	  "head": {
	    "flexDirection": "row",
	    "marginTop": 60
	  },
	  "re": {
	    "width": 100,
	    "height": 90,
	    "alignItems": "center",
	    "marginLeft": 20
	  },
	  "title": {
	    "width": 300,
	    "height": 80,
	    "alignItems": "center",
	    "marginLeft": 100
	  }
	}

/***/ },

/***/ 105:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
		data: function () {return {
			resrc: "http://d3.freep.cn/3tb_161223150449strt581068.png",
			titlesrc: ''
		}},
		methods: {
			back: function back() {
				this._parent.$emit('back', {});
			}
		}
	};}
	/* generated by weex-loader */


/***/ },

/***/ 174:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "image",
	      "style": {
	        "height": function () {return this.deviceHeight},
	        "width": 750
	      },
	      "attr": {
	        "src": "http://d2.freep.cn/3tb_170104102348j6mx581068.jpg"
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "position": "absolute",
	        "top": 0,
	        "right": 0,
	        "bottom": 0,
	        "left": 0
	      },
	      "children": [
	        {
	          "type": "myheader",
	          "attr": {
	            "titlesrc": function () {return this.titlesrc}
	          },
	          "style": {
	            "marginTop": 20
	          }
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.imgurl},
	            "resize": "cover"
	          },
	          "classList": [
	            "image"
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "text-border"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "marginTop": 40,
	                "marginLeft": 50,
	                "flexDirection": "row",
	                "alignItems": "center"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "text-title"
	                  ],
	                  "attr": {
	                    "value": function () {return this.title}
	                  }
	                },
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.loveimg}
	                  },
	                  "classList": [
	                    "loveimg"
	                  ],
	                  "shown": function () {return this.showlove},
	                  "events": {
	                    "click": "loveClick"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "marginTop": 20,
	                "marginLeft": 50,
	                "paddingRight": 50,
	                "height": 300
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "text-content"
	                  ],
	                  "attr": {
	                    "value": function () {return this.content}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "text-content"
	                  ],
	                  "style": {
	                    "marginTop": 30
	                  },
	                  "attr": {
	                    "value": function () {return this.benefit}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "btn-border"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "bars"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "btn-bg"
	                  ],
	                  "style": {
	                    "marginLeft": 80,
	                    "backgroundColor": function () {return this.btnbg[0].bg}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "text-btn"
	                      ],
	                      "attr": {
	                        "value": "首选"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "btn-bg"
	                  ],
	                  "style": {
	                    "backgroundColor": function () {return this.btnbg[1].bg}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "text-btn"
	                      ],
	                      "attr": {
	                        "value": "其次"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "btn-bg"
	                  ],
	                  "style": {
	                    "backgroundColor": function () {return this.btnbg[2].bg}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "text-btn"
	                      ],
	                      "attr": {
	                        "value": "最后的纠结"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 175:
/***/ function(module, exports) {

	module.exports = {
	  "image": {
	    "width": 600,
	    "height": 360,
	    "borderRadius": 30,
	    "marginTop": 30,
	    "marginLeft": 70
	  },
	  "text-border": {
	    "marginTop": 30,
	    "marginLeft": 70,
	    "marginBottom": 50,
	    "width": 600,
	    "height": 470,
	    "backgroundColor": "rgba(0,0,0,0.3)",
	    "borderRadius": 30
	  },
	  "btn-border": {
	    "position": "fixed",
	    "bottom": 0,
	    "width": 750,
	    "height": 100,
	    "backgroundColor": "rgba(0,0,0,0.3)"
	  },
	  "text-title": {
	    "fontSize": 35,
	    "fontWeight": "bold",
	    "fontFamily": "Microsoft Yahei",
	    "color": "#F0F8FF"
	  },
	  "text-content": {
	    "fontSize": 27,
	    "fontFamily": "Microsoft Yahei",
	    "color": "#F0F8FF"
	  },
	  "bars": {
	    "flexDirection": "row",
	    "position": "absolute",
	    "bottom": 10
	  },
	  "btn-bg": {
	    "width": 160,
	    "height": 70,
	    "borderRadius": 15,
	    "marginLeft": 50,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "text-btn": {
	    "fontSize": 25,
	    "fontFamily": "Microsoft Yahei",
	    "color": "#F0F8FF"
	  },
	  "loveimg": {
	    "width": 55,
	    "height": 55,
	    "position": "absolute",
	    "right": 30,
	    "bottom": 1
	  }
	}

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var apis = __webpack_require__(86);
	var Storage = __weex_require__('@weex-module/storage');
	module.exports = {
	    data: function () {return {
	        btnbg: [{ bg: 'rgba(255,255,255,0.25)' }, { bg: 'rgba(255,255,255,0.25)' }, { bg: '#FF4040' }],
	        showlove: false,
	        id: '',
	        loveimg: 'http://d3.freep.cn/3tb_170103175358b9wj581068.png',
	        imgurl: 'http://preview.quanjing.com/fodrm010/fod-367942.jpg',
	        content: '这里需要说一堆不知道说啥所以凑够一百字来测试哈哈哈哈',
	        title: '好吃的',
	        benefit: '很好有营养不说了',
	        titlesrc: 'http://d2.freep.cn/3tb_1612251431435jrn581068.png'
	
	    }},
	    methods: {
	        onSecondClick: function onSecondClick() {
	            apis.navigator(this.baseURL, 'module/showresult2.js', function () {});
	        },
	        onFirstClick: function onFirstClick() {
	            apis.navigator(this.baseURL, 'module/showresult1.js', function () {});
	        },
	        loveClick: function loveClick() {
	            var self = this;
	            if (self.loveimg == 'http://d3.freep.cn/3tb_170103175358b9wj581068.png') {
	                self.loveimg = 'http://d3.freep.cn/3tb_1701031753581asn581068.png';
	                var msg = {};
	                msg.condition = {};
	                msg.condition.foodId = self.id;
	                apis.choiceLove(msg, function (retback) {
	                    console.log(retback);
	                });
	            } else self.loveimg = 'http://d3.freep.cn/3tb_170103175358b9wj581068.png';
	        }
	    },
	    created: function created() {
	        var self = this;
	
	        this.$getConfig(function (config) {
	            self.deviceHeight = 750 / config.env.deviceWidth * config.env.deviceHeight;
	            self.imgHeight = self.deviceHeight - 120;
	        }.bind(this));
	
	        var bundleUrl = this.$getConfig().bundleUrl;
	        this.baseURL = apis.getBaseUrl(bundleUrl, true);
	
	        Storage.getItem('result3', function (e) {
	            var result3 = JSON.parse(e.data);
	            console.log(result3);
	            self.title = result3.name;
	            self.content = result3.describe;
	            self.imgurl = apis.apiURL.baseurl + '/images/db/' + result3.image[0];
	            self.benefit = result3.benefit;
	        });
	
	        Storage.getItem('username', function (e) {
	            if (e.data != 'null') {
	                self.showlove = true;
	            }
	        });
	
	        this.$on('back', function () {
	            apis.navigator(self.baseURL, 'module/home.js', function () {});
	        });
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDBiMzAwNDZlZDYzMGY2YzVkZjc/NjBmYyoqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9zaG93dGFiMy53ZT8zM2M5Iiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXBpLmpzP2MzYjUqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL215aGVhZGVyLndlPzFhNDcqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL215aGVhZGVyLndlP2YxMjgqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9teWhlYWRlci53ZT82NmY5KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvbXloZWFkZXIud2U/NTM0MioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvc2hvd3RhYjMud2U/Yjg0NyoiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9zaG93dGFiMy53ZT8wNWZmKiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL3Nob3d0YWIzLndlPzBiZjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFD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QTtnQ0FDQTsyQkFDQTtpQ0FDQTs2Q0FDQTt5REFDQTtpQ0FDQTtBQUNBO0FBRUEsbUNBQ0E7QUFFQTtBQXJCQTtpQ0FzQkE7b0JBRUE7OzJDQUNBOzJFQUNBO2tEQUNBO2dCQUVBOzsyQ0FDQTttREFFQTs7aURBQ0E7d0NBQ0E7eUJBQ0E7a0NBQ0E7b0NBQ0E7K0VBQ0E7b0NBQ0E7QUFFQTs7a0RBQ0E7bUNBQ0E7aUNBQ0E7QUFDQTtBQUVBOztzQ0FDQTt5RUFDQTtBQUNBO0FBQ0E7QUFsRUEiLCJmaWxlIjoibW9kdWxlXFxzaG93dGFiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQwYjMwMDQ2ZWQ2MzBmNmM1ZGY3IiwicmVxdWlyZShcIi4vbXloZWFkZXIud2VcIilcbnZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc2hvd3RhYjMud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc2hvd3RhYjMud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vc2hvd3RhYjMud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvN2YyNTk3MjZjNmM2Y2Q1YTA1YmZhYjY2ZTIzODA5MTcnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvN2YyNTk3MjZjNmM2Y2Q1YTA1YmZhYjY2ZTIzODA5MTcnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlL3Nob3d0YWIzLndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAyMyIsInZhciBzdHJlYW1cclxuX193ZWV4X2RlZmluZV9fKCdAd2VleC10ZW1wL2FwaScsIGZ1bmN0aW9uIChfX3dlZXhfcmVxdWlyZV9fKSB7XHJcbiAgICBzdHJlYW0gPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvc3RyZWFtJylcclxufSk7XHJcbnZhciBuYXZpZ2F0ZVxyXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAvYXBpJywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcclxuICAgIG5hdmlnYXRlID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL25hdmlnYXRvcicpXHJcbn0pO1xyXG5cclxudmFyIGFwaVVSTCA9IHtcclxuICAgIGJhc2V1cmw6ICdodHRwOi8vMTM5LjEyOS4xMjguNzc6MzAwMCcsXHJcbiAgIC8vIGJhc2V1cmw6ICdodHRwOi8vMTkyLjE2OC4zLjE2NDozMDAwJyxcclxuICAgIGdldFJhbmRvbTonL2Zvb2Qvd2VhdGhlcicsXHJcbiAgICBnZXRSZXN1bHQ6Jy9mb29kL3N1Z2dlc3QnLFxyXG4gICAgZ2V0SW52aXRlOicvZm9vZC90cmVhdCcsXHJcbiAgICBnZXRXZWF0aGVyOidodHRwOi8vcm91dGUuc2hvd2FwaS5jb20vOS01P3Nob3dhcGlfYXBwaWQ9Mjk2OTEmc2hvd2FwaV9zaWduPTRiNWMzMWJmOWJhMzRkMWE5M2Y4NjUxYWQwYmMzYzFiJmZyb209NScsXHJcbiAgICBnZXRMb2dpbjonL3VzZXJzL2xvZ2luJyxcclxuICAgIGdldFJlZ2lzdGVyOicvdXNlcnMvc2lnbnVwJyxcclxuICAgIGVkaXRVc2VySW5mbzonL3VzZXJzL2VkaXRJbmZvJyxcclxuICAgIGdldEN1dGVEYXRhOicvZm9vZC9oZWF0TGlzdCcsXHJcbiAgICBjaG9pY2VMb3ZlOicvdXNlcnMvaUxvdmVJdCcsXHJcbn07XHJcbmZ1bmN0aW9uIHBvc3REYXRhKHVybCxtc2csY2FsbGJhY2spIHtcclxuICAgIHN0cmVhbS5mZXRjaCh7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KG1zZylcclxuICAgIH0sIGZ1bmN0aW9uIChyZXRkYXRhKSB7XHJcbiAgICAgICAgY2FsbGJhY2socmV0ZGF0YSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXREYXRhKHVybCxjYWxsYmFjaykge1xyXG4gICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgfSwgZnVuY3Rpb24gKHJldGRhdGEpIHtcclxuICAgICAgICBjYWxsYmFjayhyZXRkYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0UmFuZG9tID0gZnVuY3Rpb24gKG1zZyxjYWxsYmFjaykge1xyXG4gICAgcG9zdERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwuZ2V0UmFuZG9tLG1zZyxjYWxsYmFjayk7XHJcbn07XHJcbmV4cG9ydHMuZ2V0UmVzdWx0ID0gZnVuY3Rpb24gKG1zZyxjYWxsYmFjaykge1xyXG4gICAgcG9zdERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwuZ2V0UmVzdWx0LG1zZyxjYWxsYmFjayk7XHJcbn07XHJcbmV4cG9ydHMuZ2V0SW52aXRlPWZ1bmN0aW9uKG1zZyxjYWxsYmFjayl7XHJcbiAgICBwb3N0RGF0YShhcGlVUkwuYmFzZXVybCthcGlVUkwuZ2V0SW52aXRlLG1zZyxjYWxsYmFjaylcclxufTtcclxuZXhwb3J0cy5nZXRXZWF0aGVyPWZ1bmN0aW9uKG1zZyxjYWxsYmFjayl7XHJcbiAgICBnZXREYXRhKGFwaVVSTC5nZXRXZWF0aGVyKycmbG5nPScrbXNnLmxuZysnJmxhdD0nK21zZy5sYXQsY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldExvZ2luPWZ1bmN0aW9uKG1zZyxjYWxsYmFjayl7XHJcbiAgICBwb3N0RGF0YShhcGlVUkwuYmFzZXVybCthcGlVUkwuZ2V0TG9naW4sbXNnLGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRSZWdpc3Rlcj1mdW5jdGlvbihtc2csY2FsbGJhY2spe1xyXG4gICAgcG9zdERhdGEoYXBpVVJMLmJhc2V1cmwrYXBpVVJMLmdldFJlZ2lzdGVyLG1zZyxjYWxsYmFjayk7XHJcbn07XHJcbmV4cG9ydHMuZWRpdFVzZXJJbmZvPWZ1bmN0aW9uKG1zZyxjYWxsYmFjayl7XHJcbiAgICBwb3N0RGF0YShhcGlVUkwuYmFzZXVybCthcGlVUkwuZWRpdFVzZXJJbmZvLG1zZyxjYWxsYmFjayk7XHJcbn07XHJcbmV4cG9ydHMuZ2V0Q3V0ZURhdGE9ZnVuY3Rpb24obXNnLGNhbGxiYWNrKXtcclxuICAgIHBvc3REYXRhKGFwaVVSTC5iYXNldXJsK2FwaVVSTC5nZXRDdXRlRGF0YSxtc2csY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldEh1bmdyeURhdGE9ZnVuY3Rpb24obXNnLGNhbGxiYWNrKXtcclxuICAgIHBvc3REYXRhKGFwaVVSTC5iYXNldXJsK2FwaVVSTC5nZXRDdXRlRGF0YSxtc2csY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldEZyaWVuZERhdGE9ZnVuY3Rpb24obXNnLGNhbGxiYWNrKXtcclxuICAgIHBvc3REYXRhKGFwaVVSTC5iYXNldXJsK2FwaVVSTC5nZXRDdXRlRGF0YSxtc2csY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldFBhcnR5RGF0YT1mdW5jdGlvbihtc2csY2FsbGJhY2spe1xyXG4gICAgcG9zdERhdGEoYXBpVVJMLmJhc2V1cmwrYXBpVVJMLmdldEN1dGVEYXRhLG1zZyxjYWxsYmFjayk7XHJcbn07XHJcbmV4cG9ydHMuY2hvaWNlTG92ZT1mdW5jdGlvbihtc2csY2FsbGJhY2spe1xyXG4gICAgcG9zdERhdGEoYXBpVVJMLmJhc2V1cmwrYXBpVVJMLmNob2ljZUxvdmUsbXNnLGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0cy5hcGlVUkwgPWFwaVVSTDtcclxuZXhwb3J0cy5uYXZpZ2F0b3IgPWZ1bmN0aW9uKGJhc2V1cmwsdG91cmwsY2FsbGJhY2spe1xyXG4gICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgJ3VybCc6IGJhc2V1cmwgKyB0b3VybCxcclxuICAgICAgJ2FuaW1hdGVkJzogJ3RydWUnXHJcbiAgICB9O1xyXG4gICAgbmF2aWdhdGUucHVzaChwYXJhbXMsIGNhbGxiYWNrKTtcclxufVxyXG5leHBvcnRzLmdldEJhc2VVcmwgPSBmdW5jdGlvbiAoYnVuZGxlVXJsLCBpc25hdikge1xyXG4gICAgYnVuZGxlVXJsID0gbmV3IFN0cmluZyhidW5kbGVVcmwpO1xyXG4gICAgdmFyIG5hdGl2ZUJhc2U7XHJcbiAgICB2YXIgaXNBbmRyb2lkQXNzZXRzID0gYnVuZGxlVXJsLmluZGV4T2YoJ2ZpbGU6Ly9hc3NldHMvJykgPj0gMDtcclxuXHJcbiAgICB2YXIgaXNpT1NBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovLy8nKSA+PSAwICYmIGJ1bmRsZVVybC5pbmRleE9mKCdXZWV4RGVtby5hcHAnKSA+IDA7XHJcbiAgICBpZiAoaXNBbmRyb2lkQXNzZXRzKSB7XHJcbiAgICAgICAgbmF0aXZlQmFzZSA9ICdmaWxlOi8vYXNzZXRzL2Rpc3QvJztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzaU9TQXNzZXRzKSB7XHJcbiAgICAgICAgbmF0aXZlQmFzZSA9IGJ1bmRsZVVybC5zdWJzdHJpbmcoMCwgYnVuZGxlVXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBob3N0ID0gJ2xvY2FsaG9zdDo4MDgwJztcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IC9cXC9cXC8oW15cXC9dKz8pXFwvLy5leGVjKGJ1bmRsZVVybCk7XHJcbiAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBob3N0ID0gbWF0Y2hlc1sxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5q2k5aSE6ZyA5rOo5oSP5LiA5LiLLHRhYmJhciDnlKjnmoTnm7TmjqXmmK9qc2J1bmRsZSDnmoTot6/lvoQs5L2G5pivbmF2aWdhdG9y5piv55u05o6l6Lez6L2s5Yiw5paw6aG16Z2i5LiK55qELlxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gaXNuYXYgPyAnaHR0cDovLycgKyBob3N0ICsgJy9pbmRleC5odG1sP3BhZ2U9Li9kaXN0LycgOiAnL2Rpc3QvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvZGlzdC8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuYXRpdmVCYXNlO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi9hcGkuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9teWhlYWRlci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9teWhlYWRlci53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9teWhlYWRlci53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9teWhlYWRlcicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlL215aGVhZGVyLndlXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgOCA5IDEwIDExIDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJoZWFkXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyZVwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiYmFja1wiXG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJlc3JjfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0aXRsZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlc3JjfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL21vZHVsZS9teWhlYWRlci53ZVxuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDUgOCA5IDEwIDExIDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaGVhZFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogNjBcbiAgfSxcbiAgXCJyZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJoZWlnaHRcIjogOTAsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDIwXG4gIH0sXG4gIFwidGl0bGVcIjoge1xuICAgIFwid2lkdGhcIjogMzAwLFxuICAgIFwiaGVpZ2h0XCI6IDgwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAxMDBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL21vZHVsZS9teWhlYWRlci53ZVxuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDUgOCA5IDEwIDExIDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIiwiPHRlbXBsYXRlPlxyXG5cdCAgPGRpdiBjbGFzcz1cImhlYWRcIj5cclxuXHQgICAgPGltYWdlIGNsYXNzPVwicmVcIiBvbmNsaWNrPVwiYmFja1wiIHNyYz1cInt7cmVzcmN9fVwiPjwvaW1hZ2U+XHJcblx0ICAgIDxpbWFnZSBjbGFzcz1cInRpdGxlXCIgc3JjPVwie3t0aXRsZXNyY319XCI+PC9pbWFnZT5cclxuICAgICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuIFx0LmhlYWR7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzttYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnJle1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O2hlaWdodDo5MHB4O2FsaWduLWl0ZW1zOiBjZW50ZXI7bWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgICAgICB3aWR0aDogMzAwcHg7aGVpZ2h0OjgwcHg7YWxpZ24taXRlbXM6IGNlbnRlcjttYXJnaW4tbGVmdDoxMDBweDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdCA+XHJcblx0bW9kdWxlLmV4cG9ydHMgPXtcclxuXHRcdGRhdGE6e1xyXG5cdFx0XHRyZXNyYzpcImh0dHA6Ly9kMy5mcmVlcC5jbi8zdGJfMTYxMjIzMTUwNDQ5c3RydDU4MTA2OC5wbmdcIixcclxuXHRcdFx0dGl0bGVzcmM6JydcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0YmFjazpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgIHRoaXMuX3BhcmVudC4kZW1pdCgnYmFjaycse30pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD4+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS9teWhlYWRlci53ZT9iNDA4YTQ2MiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGV2aWNlSGVpZ2h0fSxcbiAgICAgICAgXCJ3aWR0aFwiOiA3NTBcbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBcImh0dHA6Ly9kMi5mcmVlcC5jbi8zdGJfMTcwMTA0MTAyMzQ4ajZteDU4MTA2OC5qcGdcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICAgIFwidG9wXCI6IDAsXG4gICAgICAgIFwicmlnaHRcIjogMCxcbiAgICAgICAgXCJib3R0b21cIjogMCxcbiAgICAgICAgXCJsZWZ0XCI6IDBcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcIm15aGVhZGVyXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlc3JjfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcIm1hcmdpblRvcFwiOiAyMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbWd1cmx9LFxuICAgICAgICAgICAgXCJyZXNpemVcIjogXCJjb3ZlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImltYWdlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRleHQtYm9yZGVyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogNDAsXG4gICAgICAgICAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IDUwLFxuICAgICAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubG92ZWltZ31cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG92ZWltZ1wiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2hvd2xvdmV9LFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwibG92ZUNsaWNrXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1hcmdpblRvcFwiOiAyMCxcbiAgICAgICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjogNTAsXG4gICAgICAgICAgICAgICAgXCJwYWRkaW5nUmlnaHRcIjogNTAsXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMzAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogMzBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iZW5lZml0fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuLWJvcmRlclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJhcnNcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJidG4tYmdcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjogODAsXG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5idG5iZ1swXS5iZ31cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6aaW6YCJXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJ0bi1iZ1wiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5idG5iZ1sxXS5iZ31cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5YW25qyhXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJ0bi1iZ1wiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5idG5iZ1syXS5iZ31cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5pyA5ZCO55qE57qg57uTXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9tb2R1bGUvc2hvd3RhYjMud2Vcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIDIzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogNjAwLFxuICAgIFwiaGVpZ2h0XCI6IDM2MCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAzMCxcbiAgICBcIm1hcmdpblRvcFwiOiAzMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogNzBcbiAgfSxcbiAgXCJ0ZXh0LWJvcmRlclwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMzAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDcwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDUwLFxuICAgIFwid2lkdGhcIjogNjAwLFxuICAgIFwiaGVpZ2h0XCI6IDQ3MCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4zKVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDMwXG4gIH0sXG4gIFwiYnRuLWJvcmRlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MCxcbiAgICBcImhlaWdodFwiOiAxMDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMylcIlxuICB9LFxuICBcInRleHQtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzUsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIk1pY3Jvc29mdCBZYWhlaVwiLFxuICAgIFwiY29sb3JcIjogXCIjRjBGOEZGXCJcbiAgfSxcbiAgXCJ0ZXh0LWNvbnRlbnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjcsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiTWljcm9zb2Z0IFlhaGVpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNGMEY4RkZcIlxuICB9LFxuICBcImJhcnNcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDEwXG4gIH0sXG4gIFwiYnRuLWJnXCI6IHtcbiAgICBcIndpZHRoXCI6IDE2MCxcbiAgICBcImhlaWdodFwiOiA3MCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxNSxcbiAgICBcIm1hcmdpbkxlZnRcIjogNTAsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidGV4dC1idG5cIjoge1xuICAgIFwiZm9udFNpemVcIjogMjUsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiTWljcm9zb2Z0IFlhaGVpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNGMEY4RkZcIlxuICB9LFxuICBcImxvdmVpbWdcIjoge1xuICAgIFwid2lkdGhcIjogNTUsXG4gICAgXCJoZWlnaHRcIjogNTUsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiAzMCxcbiAgICBcImJvdHRvbVwiOiAxXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9tb2R1bGUvc2hvd3RhYjMud2Vcbi8vIG1vZHVsZSBpZCA9IDE3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIDIzIiwiXHJcbjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICA8aW1hZ2Ugc3R5bGU9XCJoZWlnaHQ6e3tkZXZpY2VIZWlnaHR9fTt3aWR0aDo3NTBweDtcIiBzcmM9XCJodHRwOi8vZDIuZnJlZXAuY24vM3RiXzE3MDEwNDEwMjM0OGo2bXg1ODEwNjguanBnXCI+PC9pbWFnZT5cclxuICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1wiPlxyXG4gICAgICAgIDxteWhlYWRlciB0aXRsZXNyYz1cInt7dGl0bGVzcmN9fSBcIiBzdHlsZT1cIm1hcmdpbi10b3A6MjBweDtcIj48L215aGVhZGVyPlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCJ7e2ltZ3VybH19XCIgcmVzaXplPVwiY292ZXJcIiBjbGFzcz1cImltYWdlXCI+PC9pbWFnZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib3JkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6NDBweDttYXJnaW4tbGVmdDo1MHB4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0ZXh0LXRpdGxlXCIgdmFsdWU9XCJ7e3RpdGxlfX1cIj48L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwie3tsb3ZlaW1nfX1cIiBjbGFzcz1cImxvdmVpbWdcIiBpZj1cInNob3dsb3ZlXCIgb25jbGljaz1cImxvdmVDbGlja1wiPjwvaW1hZ2U+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6MjBweDttYXJnaW4tbGVmdDo1MHB4O3BhZGRpbmctcmlnaHQ6NTBweDtoZWlnaHQ6MzAwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRleHQtY29udGVudFwiIHZhbHVlPVwie3tjb250ZW50fX1cIj48L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRleHQtY29udGVudFwiIHN0eWxlPVwibWFyZ2luLXRvcDozMHB4O1wiIHZhbHVlPVwie3tiZW5lZml0fX1cIj48L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWJnXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogODBweDsgYmFja2dyb3VuZC1jb2xvcjp7e2J0bmJnWzBdLmJnfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRleHQtYnRuXCIgPummlumAiTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1iZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp7e2J0bmJnWzFdLmJnfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRleHQtYnRuXCIgPuWFtuasoTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1iZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp7e2J0bmJnWzJdLmJnfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRleHQtYnRuXCIgPuacgOWQjueahOe6oOe7kzwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG5cclxuICAgLmltYWdle1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICBoZWlnaHQ6MzYwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czozMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4OyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIH1cclxuICAgIC50ZXh0LWJvcmRlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4OyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICBoZWlnaHQ6NDcwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czozMDtcclxuXHJcbiAgICB9XHJcbiAgICAuYnRuLWJvcmRlcntcclxuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICB3aWR0aDogNzUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgfVxyXG4gICAgLnRleHQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O2ZvbnQtd2VpZ2h0OiBib2xkO2ZvbnQtZmFtaWx5OiBNaWNyb3NvZnQgWWFoZWk7Y29sb3I6I0YwRjhGRjtcclxuXHJcbiAgICB9XHJcbiAgICAudGV4dC1jb250ZW50e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjdweDtmb250LWZhbWlseTogTWljcm9zb2Z0IFlhaGVpO2NvbG9yOiNGMEY4RkY7XHJcbiAgICB9XHJcbiAgICAuYmFyc3tcclxuICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICBib3R0b206IDEwO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1iZ3tcclxuICAgICAgICB3aWR0aDoxNjBweDtcclxuICAgICAgICBoZWlnaHQ6NzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjE1O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1idG57XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O2ZvbnQtZmFtaWx5OiBNaWNyb3NvZnQgWWFoZWk7Y29sb3I6I0YwRjhGRjtcclxuICAgIH1cclxuICAgIC5sb3ZlaW1ne1xyXG4gICAgICAgIHdpZHRoOiA1NXB4O2hlaWdodDo1NXB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMzBweDtib3R0b206MXB4O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgdmFyIGFwaXMgPSByZXF1aXJlKCcuLi9jb21tb24vYXBpJyk7XHJcbiAgICB2YXIgU3RvcmFnZSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdG9yYWdlJyk7XHJcbiAgICBtb2R1bGUuZXhwb3J0cz17XHJcbiAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIGJ0bmJnOlt7Ymc6J3JnYmEoMjU1LDI1NSwyNTUsMC4yNSknfSxcclxuICAgICAgICAgICAgICAgIHtiZzoncmdiYSgyNTUsMjU1LDI1NSwwLjI1KSd9LFxyXG4gICAgICAgICAgICAgICAge2JnOicjRkY0MDQwJ31dLFxyXG4gICAgICAgICAgICBzaG93bG92ZTpmYWxzZSxcclxuICAgICAgICAgICAgaWQ6JycsXHJcbiAgICAgICAgICAgIGxvdmVpbWc6J2h0dHA6Ly9kMy5mcmVlcC5jbi8zdGJfMTcwMTAzMTc1MzU4Yjl3ajU4MTA2OC5wbmcnLFxyXG4gICAgICAgICAgICBpbWd1cmw6J2h0dHA6Ly9wcmV2aWV3LnF1YW5qaW5nLmNvbS9mb2RybTAxMC9mb2QtMzY3OTQyLmpwZycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+i/memHjOmcgOimgeivtOS4gOWghuS4jeefpemBk+ivtOWVpeaJgOS7peWHkeWkn+S4gOeZvuWtl+adpea1i+ivleWTiOWTiOWTiOWTiCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiflpb3lkIPnmoQnLFxyXG4gICAgICAgICAgICBiZW5lZml0Oiflvojlpb3mnInokKXlhbvkuI3or7TkuoYnLFxyXG4gICAgICAgICAgICB0aXRsZXNyYzonaHR0cDovL2QyLmZyZWVwLmNuLzN0Yl8xNjEyMjUxNDMxNDM1anJuNTgxMDY4LnBuZycsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczp7XHJcbiAgICAgICAgICAgIG9uU2Vjb25kQ2xpY2s6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGFwaXMubmF2aWdhdG9yKHRoaXMuYmFzZVVSTCwnbW9kdWxlL3Nob3dyZXN1bHQyLmpzJyxmdW5jdGlvbigpe30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkZpcnN0Q2xpY2s6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGFwaXMubmF2aWdhdG9yKHRoaXMuYmFzZVVSTCwnbW9kdWxlL3Nob3dyZXN1bHQxLmpzJyxmdW5jdGlvbigpe30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb3ZlQ2xpY2s6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmPXRoaXM7XHJcbiAgICAgICAgICAgICAgICBpZihzZWxmLmxvdmVpbWc9PSdodHRwOi8vZDMuZnJlZXAuY24vM3RiXzE3MDEwMzE3NTM1OGI5d2o1ODEwNjgucG5nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb3ZlaW1nPSdodHRwOi8vZDMuZnJlZXAuY24vM3RiXzE3MDEwMzE3NTM1ODFhc241ODEwNjgucG5nJztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbXNnPXt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG1zZy5jb25kaXRpb249e307XHJcbiAgICAgICAgICAgICAgICAgICAgbXNnLmNvbmRpdGlvbi5mb29kSWQ9c2VsZi5pZDtcclxuICAgICAgICAgICAgICAgICAgICBhcGlzLmNob2ljZUxvdmUobXNnLGZ1bmN0aW9uKHJldGJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXRiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG92ZWltZz0naHR0cDovL2QzLmZyZWVwLmNuLzN0Yl8xNzAxMDMxNzUzNThiOXdqNTgxMDY4LnBuZyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kZ2V0Q29uZmlnKGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kZXZpY2VIZWlnaHQgPSA3NTAgLyBjb25maWcuZW52LmRldmljZVdpZHRoICogY29uZmlnLmVudi5kZXZpY2VIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmltZ0hlaWdodCA9IHNlbGYuZGV2aWNlSGVpZ2h0IC0gMTIwO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGJ1bmRsZVVybCA9IHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybDtcclxuICAgICAgICAgICAgdGhpcy5iYXNlVVJMID0gYXBpcy5nZXRCYXNlVXJsKGJ1bmRsZVVybCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBTdG9yYWdlLmdldEl0ZW0oJ3Jlc3VsdDMnLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDM9SlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Myk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRpdGxlID0gcmVzdWx0My5uYW1lO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb250ZW50ID0gcmVzdWx0My5kZXNjcmliZTtcclxuICAgICAgICAgICAgICAgIHNlbGYuaW1ndXJsID0gYXBpcy5hcGlVUkwuYmFzZXVybCsnL2ltYWdlcy9kYi8nICsgcmVzdWx0My5pbWFnZVswXTtcclxuICAgICAgICAgICAgICAgIHNlbGYuYmVuZWZpdCA9IHJlc3VsdDMuYmVuZWZpdDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGlmKGUuZGF0YSE9J251bGwnKXtcclxuICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd2xvdmU9dHJ1ZTsgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgIHRoaXMuJG9uKCdiYWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgIGFwaXMubmF2aWdhdG9yKHNlbGYuYmFzZVVSTCwnbW9kdWxlL2hvbWUuanMnLGZ1bmN0aW9uKCl7fSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS9zaG93dGFiMy53ZT82MDYzNzk1ZSJdLCJzb3VyY2VSb290IjoiIn0=