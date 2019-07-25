// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*! smooth-scroll v16.1.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n=r(a.hash);if("#"===n){if(!A.topOnEmptyHash)return;t=document.documentElement}else t=document.querySelector(n);(t=t||"#top"!==n?t:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(t,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));
},{}],"../node_modules/cp-classlist/dist/main.js":[function(require,module,exports) {
var define;
var global = arguments[3];
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"main.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cpClassList =
/*#__PURE__*/
function () {
  function cpClassList(el) {
    _classCallCheck(this, cpClassList);

    if (document.body.contains(el)) this.el = el;else throw new Error("Node Expected");
  }

  _createClass(cpClassList, [{
    key: "add",
    value: function add() {
      var lists = this.getList();

      for (var x = 0; x < arguments.length; x++) {
        if (lists.indexOf(x < 0 || arguments.length <= x ? undefined : arguments[x]) < 0) {
          lists.push(x < 0 || arguments.length <= x ? undefined : arguments[x]);
        }
      }

      this.el.className = lists.toString().replace(/,/g, " ");
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      var lists = this.getList();

      for (var x = 0; x < arguments.length; x++) {
        if (lists.indexOf(x < 0 || arguments.length <= x ? undefined : arguments[x]) >= 0) {
          lists.splice(lists.indexOf(x < 0 || arguments.length <= x ? undefined : arguments[x]), 1);
        }
      }

      this.el.className = lists.toString().replace(/,/g, " ");
      return this;
    }
  }, {
    key: "toggle",
    value: function toggle(className) {
      var lists = this.getList();
      if (lists.indexOf(className) >= 0) this.remove(className);else this.add(className);
      return this;
    }
  }, {
    key: "item",
    value: function item(index) {
      if (typeof index === "number") {
        var lists = this.getList();
        return lists[index] || false;
      } else throw new Error("Index should be an integer");
    }
  }, {
    key: "contains",
    value: function contains(className) {
      var lists = this.getList();
      if (lists.indexOf(className) >= 0) return true;else return false;
    }
  }, {
    key: "replace",
    value: function replace(oldClassName, newClassName) {
      var lists = this.getList();

      if (lists.indexOf(oldClassName) >= 0) {
        lists[lists.indexOf(oldClassName)] = newClassName;
        this.el.className = lists.toString().replace(/,/g, " ");
        return this;
      } else return false;
    }
  }, {
    key: "getList",
    value: function getList() {
      var classNames = this.el.className;
      return classNames.split(/\s+/g);
    }
  }]);

  return cpClassList;
}();

function classList(el) {
  return new cpClassList(el);
}

if (window) {
  window.cpClassList = classList;
}

module.exports = classList;
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "2529" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)

},{}],"js/scrollview.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! @license ScrollReveal v4.0.5

	Copyright 2018 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ScrollReveal = factory();
})(this, function () {
  'use strict';

  var defaults = {
    delay: 0,
    distance: '0',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    afterReset: function afterReset() {},
    afterReveal: function afterReveal() {},
    beforeReset: function beforeReset() {},
    beforeReveal: function beforeReveal() {}
  };

  function failure() {
    document.documentElement.classList.remove('sr');
    return {
      clean: function clean() {},
      destroy: function destroy() {},
      reveal: function reveal() {},
      sync: function sync() {},

      get noop() {
        return true;
      }

    };
  }

  function success() {
    document.documentElement.classList.add('sr');

    if (document.body) {
      document.body.style.height = '100%';
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        document.body.style.height = '100%';
      });
    }
  }

  var mount = {
    success: success,
    failure: failure
    /*! @license is-dom-node v1.0.4
    
    	Copyright 2018 Fisssion LLC.
    
    	Permission is hereby granted, free of charge, to any person obtaining a copy
    	of this software and associated documentation files (the "Software"), to deal
    	in the Software without restriction, including without limitation the rights
    	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    	copies of the Software, and to permit persons to whom the Software is
    	furnished to do so, subject to the following conditions:
    
    	The above copyright notice and this permission notice shall be included in all
    	copies or substantial portions of the Software.
    
    	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    	SOFTWARE.
    
    */

  };

  function isDomNode(x) {
    return _typeof(window.Node) === 'object' ? x instanceof window.Node : x !== null && _typeof(x) === 'object' && typeof x.nodeType === 'number' && typeof x.nodeName === 'string';
  }
  /*! @license is-dom-node-list v1.2.1
  
  	Copyright 2018 Fisssion LLC.
  
  	Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  
  	The above copyright notice and this permission notice shall be included in all
  	copies or substantial portions of the Software.
  
  	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  	SOFTWARE.
  
  */


  function isDomNodeList(x) {
    var prototypeToString = Object.prototype.toString.call(x);
    var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    return _typeof(window.NodeList) === 'object' ? x instanceof window.NodeList : x !== null && _typeof(x) === 'object' && typeof x.length === 'number' && regex.test(prototypeToString) && (x.length === 0 || isDomNode(x[0]));
  }
  /*! @license Tealight v0.3.6
  
  	Copyright 2018 Fisssion LLC.
  
  	Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  
  	The above copyright notice and this permission notice shall be included in all
  	copies or substantial portions of the Software.
  
  	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  	SOFTWARE.
  
  */


  function tealight(target, context) {
    if (context === void 0) {
      context = document;
    }

    if (target instanceof Array) {
      return target.filter(isDomNode);
    }

    if (isDomNode(target)) {
      return [target];
    }

    if (isDomNodeList(target)) {
      return Array.prototype.slice.call(target);
    }

    if (typeof target === "string") {
      try {
        var query = context.querySelectorAll(target);
        return Array.prototype.slice.call(query);
      } catch (err) {
        return [];
      }
    }

    return [];
  }

  function isObject(x) {
    return x !== null && x instanceof Object && (x.constructor === Object || Object.prototype.toString.call(x) === '[object Object]');
  }

  function each(collection, callback) {
    if (isObject(collection)) {
      var keys = Object.keys(collection);
      return keys.forEach(function (key) {
        return callback(collection[key], key, collection);
      });
    }

    if (collection instanceof Array) {
      return collection.forEach(function (item, i) {
        return callback(item, i, collection);
      });
    }

    throw new TypeError('Expected either an array or object literal.');
  }

  function logger(message) {
    var details = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      details[len] = arguments[len + 1];
    }

    if (this.constructor.debug && console) {
      var report = "%cScrollReveal: " + message;
      details.forEach(function (detail) {
        return report += "\n — " + detail;
      });
      console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
    }
  }

  function rinse() {
    var this$1 = this;

    var struct = function struct() {
      return {
        active: [],
        stale: []
      };
    };

    var elementIds = struct();
    var sequenceIds = struct();
    var containerIds = struct();
    /**
     * Take stock of active element IDs.
     */

    try {
      each(tealight('[data-sr-id]'), function (node) {
        var id = parseInt(node.getAttribute('data-sr-id'));
        elementIds.active.push(id);
      });
    } catch (e) {
      throw e;
    }
    /**
     * Destroy stale elements.
     */


    each(this.store.elements, function (element) {
      if (elementIds.active.indexOf(element.id) === -1) {
        elementIds.stale.push(element.id);
      }
    });
    each(elementIds.stale, function (staleId) {
      return delete this$1.store.elements[staleId];
    });
    /**
     * Take stock of active container and sequence IDs.
     */

    each(this.store.elements, function (element) {
      if (containerIds.active.indexOf(element.containerId) === -1) {
        containerIds.active.push(element.containerId);
      }

      if (element.hasOwnProperty('sequence')) {
        if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
          sequenceIds.active.push(element.sequence.id);
        }
      }
    });
    /**
     * Destroy stale containers.
     */

    each(this.store.containers, function (container) {
      if (containerIds.active.indexOf(container.id) === -1) {
        containerIds.stale.push(container.id);
      }
    });
    each(containerIds.stale, function (staleId) {
      var stale = this$1.store.containers[staleId].node;
      stale.removeEventListener('scroll', this$1.delegate);
      stale.removeEventListener('resize', this$1.delegate);
      delete this$1.store.containers[staleId];
    });
    /**
     * Destroy stale sequences.
     */

    each(this.store.sequences, function (sequence) {
      if (sequenceIds.active.indexOf(sequence.id) === -1) {
        sequenceIds.stale.push(sequence.id);
      }
    });
    each(sequenceIds.stale, function (staleId) {
      return delete this$1.store.sequences[staleId];
    });
  }

  function clean(target) {
    var this$1 = this;
    var dirty;

    try {
      each(tealight(target), function (node) {
        var id = node.getAttribute('data-sr-id');

        if (id !== null) {
          dirty = true;
          var element = this$1.store.elements[id];

          if (element.callbackTimer) {
            window.clearTimeout(element.callbackTimer.clock);
          }

          node.setAttribute('style', element.styles.inline.generated);
          node.removeAttribute('data-sr-id');
          delete this$1.store.elements[id];
        }
      });
    } catch (e) {
      return logger.call(this, 'Clean failed.', e.message);
    }

    if (dirty) {
      try {
        rinse.call(this);
      } catch (e) {
        return logger.call(this, 'Clean failed.', e.message);
      }
    }
  }

  function destroy() {
    var this$1 = this;
    /**
     * Remove all generated styles and element ids
     */

    each(this.store.elements, function (element) {
      element.node.setAttribute('style', element.styles.inline.generated);
      element.node.removeAttribute('data-sr-id');
    });
    /**
     * Remove all event listeners.
     */

    each(this.store.containers, function (container) {
      var target = container.node === document.documentElement ? window : container.node;
      target.removeEventListener('scroll', this$1.delegate);
      target.removeEventListener('resize', this$1.delegate);
    });
    /**
     * Clear all data from the store
     */

    this.store = {
      containers: {},
      elements: {},
      history: [],
      sequences: {}
    };
  }
  /*! @license Rematrix v0.3.0
  
  	Copyright 2018 Julian Lloyd.
  
  	Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  
  	The above copyright notice and this permission notice shall be included in
  	all copies or substantial portions of the Software.
  
  	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  	THE SOFTWARE.
  */

  /**
   * @module Rematrix
   */

  /**
   * Transformation matrices in the browser come in two flavors:
   *
   *  - `matrix` using 6 values (short)
   *  - `matrix3d` using 16 values (long)
   *
   * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
   * to expand short form matrices to their equivalent long form.
   *
   * @param  {array} source - Accepts both short and long form matrices.
   * @return {array}
   */


  function format(source) {
    if (source.constructor !== Array) {
      throw new TypeError('Expected array.');
    }

    if (source.length === 16) {
      return source;
    }

    if (source.length === 6) {
      var matrix = identity();
      matrix[0] = source[0];
      matrix[1] = source[1];
      matrix[4] = source[2];
      matrix[5] = source[3];
      matrix[12] = source[4];
      matrix[13] = source[5];
      return matrix;
    }

    throw new RangeError('Expected array with either 6 or 16 values.');
  }
  /**
   * Returns a matrix representing no transformation. The product of any matrix
   * multiplied by the identity matrix will be the original matrix.
   *
   * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
   *
   * @return {array}
   */


  function identity() {
    var matrix = [];

    for (var i = 0; i < 16; i++) {
      i % 5 == 0 ? matrix.push(1) : matrix.push(0);
    }

    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing the combined transformations
   * of both arguments.
   *
   * > **Note:** Order is very important. For example, rotating 45°
   * along the Z-axis, followed by translating 500 pixels along the
   * Y-axis... is not the same as translating 500 pixels along the
   * Y-axis, followed by rotating 45° along on the Z-axis.
   *
   * @param  {array} m - Accepts both short and long form matrices.
   * @param  {array} x - Accepts both short and long form matrices.
   * @return {array}
   */


  function multiply(m, x) {
    var fm = format(m);
    var fx = format(x);
    var product = [];

    for (var i = 0; i < 4; i++) {
      var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];

      for (var j = 0; j < 4; j++) {
        var k = j * 4;
        var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
        var result = row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];
        product[i + k] = result;
      }
    }

    return product;
  }
  /**
   * Attempts to return a 4x4 matrix describing the CSS transform
   * matrix passed in, but will return the identity matrix as a
   * fallback.
   *
   * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
   * `string` from computed styles) to its equivalent array format.
   *
   * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
   * @return {array}
   */


  function parse(source) {
    if (typeof source === 'string') {
      var match = source.match(/matrix(3d)?\(([^)]+)\)/);

      if (match) {
        var raw = match[2].split(', ').map(parseFloat);
        return format(raw);
      }
    }

    return identity();
  }
  /**
   * Returns a 4x4 matrix describing X-axis rotation.
   *
   * @param  {number} angle - Measured in degrees.
   * @return {array}
   */


  function rotateX(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[5] = matrix[10] = Math.cos(theta);
    matrix[6] = matrix[9] = Math.sin(theta);
    matrix[9] *= -1;
    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing Y-axis rotation.
   *
   * @param  {number} angle - Measured in degrees.
   * @return {array}
   */


  function rotateY(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[0] = matrix[10] = Math.cos(theta);
    matrix[2] = matrix[8] = Math.sin(theta);
    matrix[2] *= -1;
    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing Z-axis rotation.
   *
   * @param  {number} angle - Measured in degrees.
   * @return {array}
   */


  function rotateZ(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[0] = matrix[5] = Math.cos(theta);
    matrix[1] = matrix[4] = Math.sin(theta);
    matrix[4] *= -1;
    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing 2D scaling. The first argument
   * is used for both X and Y-axis scaling, unless an optional
   * second argument is provided to explicitly define Y-axis scaling.
   *
   * @param  {number} scalar    - Decimal multiplier.
   * @param  {number} [scalarY] - Decimal multiplier.
   * @return {array}
   */


  function scale(scalar, scalarY) {
    var matrix = identity();
    matrix[0] = scalar;
    matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;
    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing X-axis translation.
   *
   * @param  {number} distance - Measured in pixels.
   * @return {array}
   */


  function translateX(distance) {
    var matrix = identity();
    matrix[12] = distance;
    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing Y-axis translation.
   *
   * @param  {number} distance - Measured in pixels.
   * @return {array}
   */


  function translateY(distance) {
    var matrix = identity();
    matrix[13] = distance;
    return matrix;
  }

  var getPrefixedCssProp = function () {
    var properties = {};
    var style = document.documentElement.style;

    function getPrefixedCssProperty(name, source) {
      if (source === void 0) source = style;

      if (name && typeof name === 'string') {
        if (properties[name]) {
          return properties[name];
        }

        if (typeof source[name] === 'string') {
          return properties[name] = name;
        }

        if (typeof source["-webkit-" + name] === 'string') {
          return properties[name] = "-webkit-" + name;
        }

        throw new RangeError("Unable to find \"" + name + "\" style property.");
      }

      throw new TypeError('Expected a string.');
    }

    getPrefixedCssProperty.clearCache = function () {
      return properties = {};
    };

    return getPrefixedCssProperty;
  }();

  function style(element) {
    var computed = window.getComputedStyle(element.node);
    var position = computed.position;
    var config = element.config;
    /**
     * Generate inline styles
     */

    var inline = {};
    var inlineStyle = element.node.getAttribute('style') || '';
    var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
    inline.computed = inlineMatch ? inlineMatch.map(function (m) {
      return m.trim();
    }).join('; ') + ';' : '';
    inline.generated = inlineMatch.some(function (m) {
      return m.match(/visibility\s?:\s?visible/i);
    }) ? inline.computed : inlineMatch.concat(['visibility: visible']).map(function (m) {
      return m.trim();
    }).join('; ') + ';';
    /**
     * Generate opacity styles
     */

    var computedOpacity = parseFloat(computed.opacity);
    var configOpacity = !isNaN(parseFloat(config.opacity)) ? parseFloat(config.opacity) : parseFloat(computed.opacity);
    var opacity = {
      computed: computedOpacity !== configOpacity ? "opacity: " + computedOpacity + ";" : '',
      generated: computedOpacity !== configOpacity ? "opacity: " + configOpacity + ";" : ''
    };
    /**
     * Generate transformation styles
     */

    var transformations = [];

    if (parseFloat(config.distance)) {
      var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';
      /**
       * Let’s make sure our our pixel distances are negative for top and left.
       * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
       */

      var distance = config.distance;

      if (config.origin === 'top' || config.origin === 'left') {
        distance = /^-/.test(distance) ? distance.substr(1) : "-" + distance;
      }

      var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
      var value = ref[0];
      var unit = ref[1];

      switch (unit) {
        case 'em':
          distance = parseInt(computed.fontSize) * value;
          break;

        case 'px':
          distance = value;
          break;

        case '%':
          /**
           * Here we use `getBoundingClientRect` instead of
           * the existing data attached to `element.geometry`
           * because only the former includes any transformations
           * current applied to the element.
           *
           * If that behavior ends up being unintuitive, this
           * logic could instead utilize `element.geometry.height`
           * and `element.geoemetry.width` for the distaince calculation
           */
          distance = axis === 'Y' ? element.node.getBoundingClientRect().height * value / 100 : element.node.getBoundingClientRect().width * value / 100;
          break;

        default:
          throw new RangeError('Unrecognized or missing distance unit.');
      }

      if (axis === 'Y') {
        transformations.push(translateY(distance));
      } else {
        transformations.push(translateX(distance));
      }
    }

    if (config.rotate.x) {
      transformations.push(rotateX(config.rotate.x));
    }

    if (config.rotate.y) {
      transformations.push(rotateY(config.rotate.y));
    }

    if (config.rotate.z) {
      transformations.push(rotateZ(config.rotate.z));
    }

    if (config.scale !== 1) {
      if (config.scale === 0) {
        /**
         * The CSS Transforms matrix interpolation specification
         * basically disallows transitions of non-invertible
         * matrixes, which means browsers won't transition
         * elements with zero scale.
         *
         * That’s inconvenient for the API and developer
         * experience, so we simply nudge their value
         * slightly above zero; this allows browsers
         * to transition our element as expected.
         *
         * `0.0002` was the smallest number
         * that performed across browsers.
         */
        transformations.push(scale(0.0002));
      } else {
        transformations.push(scale(config.scale));
      }
    }

    var transform = {};

    if (transformations.length) {
      transform.property = getPrefixedCssProp('transform');
      /**
       * The default computed transform value should be one of:
       * undefined || 'none' || 'matrix()' || 'matrix3d()'
       */

      transform.computed = {
        raw: computed[transform.property],
        matrix: parse(computed[transform.property])
      };
      transformations.unshift(transform.computed.matrix);
      var product = transformations.reduce(multiply);
      transform.generated = {
        initial: transform.property + ": matrix3d(" + product.join(', ') + ");",
        final: transform.property + ": matrix3d(" + transform.computed.matrix.join(', ') + ");"
      };
    } else {
      transform.generated = {
        initial: '',
        final: ''
      };
    }
    /**
     * Generate transition styles
     */


    var transition = {};

    if (opacity.generated || transform.generated.initial) {
      transition.property = getPrefixedCssProp('transition');
      transition.computed = computed[transition.property];
      transition.fragments = [];
      var delay = config.delay;
      var duration = config.duration;
      var easing = config.easing;

      if (opacity.generated) {
        transition.fragments.push({
          delayed: "opacity " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
          instant: "opacity " + duration / 1000 + "s " + easing + " 0s"
        });
      }

      if (transform.generated.initial) {
        transition.fragments.push({
          delayed: transform.property + " " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
          instant: transform.property + " " + duration / 1000 + "s " + easing + " 0s"
        });
      }
      /**
       * The default computed transition property should be one of:
       * undefined || '' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
       */


      if (transition.computed && !transition.computed.match(/all 0s/)) {
        transition.fragments.unshift({
          delayed: transition.computed,
          instant: transition.computed
        });
      }

      var composed = transition.fragments.reduce(function (composition, fragment, i) {
        composition.delayed += i === 0 ? fragment.delayed : ", " + fragment.delayed;
        composition.instant += i === 0 ? fragment.instant : ", " + fragment.instant;
        return composition;
      }, {
        delayed: '',
        instant: ''
      });
      transition.generated = {
        delayed: transition.property + ": " + composed.delayed + ";",
        instant: transition.property + ": " + composed.instant + ";"
      };
    } else {
      transition.generated = {
        delayed: '',
        instant: ''
      };
    }

    return {
      inline: inline,
      opacity: opacity,
      position: position,
      transform: transform,
      transition: transition
    };
  }

  function animate(element, force) {
    if (force === void 0) force = {};
    var pristine = force.pristine || this.pristine;
    var delayed = element.config.useDelay === 'always' || element.config.useDelay === 'onload' && pristine || element.config.useDelay === 'once' && !element.seen;
    var shouldReveal = element.visible && !element.revealed;
    var shouldReset = !element.visible && element.revealed && element.config.reset;

    if (force.reveal || shouldReveal) {
      return triggerReveal.call(this, element, delayed);
    }

    if (force.reset || shouldReset) {
      return triggerReset.call(this, element);
    }
  }

  function triggerReveal(element, delayed) {
    var styles = [element.styles.inline.generated, element.styles.opacity.computed, element.styles.transform.generated.final];

    if (delayed) {
      styles.push(element.styles.transition.generated.delayed);
    } else {
      styles.push(element.styles.transition.generated.instant);
    }

    element.revealed = element.seen = true;
    element.node.setAttribute('style', styles.filter(function (s) {
      return s !== '';
    }).join(' '));
    registerCallbacks.call(this, element, delayed);
  }

  function triggerReset(element) {
    var styles = [element.styles.inline.generated, element.styles.opacity.generated, element.styles.transform.generated.initial, element.styles.transition.generated.instant];
    element.revealed = false;
    element.node.setAttribute('style', styles.filter(function (s) {
      return s !== '';
    }).join(' '));
    registerCallbacks.call(this, element);
  }

  function registerCallbacks(element, isDelayed) {
    var this$1 = this;
    var duration = isDelayed ? element.config.duration + element.config.delay : element.config.duration;
    var beforeCallback = element.revealed ? element.config.beforeReveal : element.config.beforeReset;
    var afterCallback = element.revealed ? element.config.afterReveal : element.config.afterReset;
    var elapsed = 0;

    if (element.callbackTimer) {
      elapsed = Date.now() - element.callbackTimer.start;
      window.clearTimeout(element.callbackTimer.clock);
    }

    beforeCallback(element.node);
    element.callbackTimer = {
      start: Date.now(),
      clock: window.setTimeout(function () {
        afterCallback(element.node);
        element.callbackTimer = null;

        if (element.revealed && !element.config.reset && element.config.cleanup) {
          clean.call(this$1, element.node);
        }
      }, duration - elapsed)
    };
  }

  var nextUniqueId = function () {
    var uid = 0;
    return function () {
      return uid++;
    };
  }();

  function sequence(element, pristine) {
    if (pristine === void 0) pristine = this.pristine;
    /**
     * We first check if the element should reset.
     */

    if (!element.visible && element.revealed && element.config.reset) {
      return animate.call(this, element, {
        reset: true
      });
    }

    var seq = this.store.sequences[element.sequence.id];
    var i = element.sequence.index;

    if (seq) {
      var visible = new SequenceModel(seq, 'visible', this.store);
      var revealed = new SequenceModel(seq, 'revealed', this.store);
      seq.models = {
        visible: visible,
        revealed: revealed
      };
      /**
       * If the sequence has no revealed members,
       * then we reveal the first visible element
       * within that sequence.
       *
       * The sequence then cues a recursive call
       * in both directions.
       */

      if (!revealed.body.length) {
        var nextId = seq.members[visible.body[0]];
        var nextElement = this.store.elements[nextId];

        if (nextElement) {
          cue.call(this, seq, visible.body[0], -1, pristine);
          cue.call(this, seq, visible.body[0], +1, pristine);
          return animate.call(this, nextElement, {
            reveal: true,
            pristine: pristine
          });
        }
      }
      /**
       * If our element isn’t resetting, we check the
       * element sequence index against the head, and
       * then the foot of the sequence.
       */


      if (!seq.blocked.head && i === [].concat(revealed.head).pop() && i >= [].concat(visible.body).shift()) {
        cue.call(this, seq, i, -1, pristine);
        return animate.call(this, element, {
          reveal: true,
          pristine: pristine
        });
      }

      if (!seq.blocked.foot && i === [].concat(revealed.foot).shift() && i <= [].concat(visible.body).pop()) {
        cue.call(this, seq, i, +1, pristine);
        return animate.call(this, element, {
          reveal: true,
          pristine: pristine
        });
      }
    }
  }

  function Sequence(interval) {
    var i = Math.abs(interval);

    if (!isNaN(i)) {
      this.id = nextUniqueId();
      this.interval = Math.max(i, 16);
      this.members = [];
      this.models = {};
      this.blocked = {
        head: false,
        foot: false
      };
    } else {
      throw new RangeError('Invalid sequence interval.');
    }
  }

  function SequenceModel(seq, prop, store) {
    var this$1 = this;
    this.head = [];
    this.body = [];
    this.foot = [];
    each(seq.members, function (id, index) {
      var element = store.elements[id];

      if (element && element[prop]) {
        this$1.body.push(index);
      }
    });

    if (this.body.length) {
      each(seq.members, function (id, index) {
        var element = store.elements[id];

        if (element && !element[prop]) {
          if (index < this$1.body[0]) {
            this$1.head.push(index);
          } else {
            this$1.foot.push(index);
          }
        }
      });
    }
  }

  function cue(seq, i, direction, pristine) {
    var this$1 = this;
    var blocked = ['head', null, 'foot'][1 + direction];
    var nextId = seq.members[i + direction];
    var nextElement = this.store.elements[nextId];
    seq.blocked[blocked] = true;
    setTimeout(function () {
      seq.blocked[blocked] = false;

      if (nextElement) {
        sequence.call(this$1, nextElement, pristine);
      }
    }, seq.interval);
  }

  function initialize() {
    var this$1 = this;
    rinse.call(this);
    each(this.store.elements, function (element) {
      var styles = [element.styles.inline.generated];

      if (element.visible) {
        styles.push(element.styles.opacity.computed);
        styles.push(element.styles.transform.generated.final);
        element.revealed = true;
      } else {
        styles.push(element.styles.opacity.generated);
        styles.push(element.styles.transform.generated.initial);
        element.revealed = false;
      }

      element.node.setAttribute('style', styles.filter(function (s) {
        return s !== '';
      }).join(' '));
    });
    each(this.store.containers, function (container) {
      var target = container.node === document.documentElement ? window : container.node;
      target.addEventListener('scroll', this$1.delegate);
      target.addEventListener('resize', this$1.delegate);
    });
    /**
     * Manually invoke delegate once to capture
     * element and container dimensions, container
     * scroll position, and trigger any valid reveals
     */

    this.delegate();
    /**
     * Wipe any existing `setTimeout` now
     * that initialization has completed.
     */

    this.initTimeout = null;
  }

  function isMobile(agent) {
    if (agent === void 0) agent = navigator.userAgent;
    return /Android|iPhone|iPad|iPod/i.test(agent);
  }

  function deepAssign(target) {
    var sources = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      sources[len] = arguments[len + 1];
    }

    if (isObject(target)) {
      each(sources, function (source) {
        each(source, function (data, key) {
          if (isObject(data)) {
            if (!target[key] || !isObject(target[key])) {
              target[key] = {};
            }

            deepAssign(target[key], data);
          } else {
            target[key] = data;
          }
        });
      });
      return target;
    } else {
      throw new TypeError('Target must be an object literal.');
    }
  }

  function reveal(target, options, syncing) {
    var this$1 = this;
    if (options === void 0) options = {};
    if (syncing === void 0) syncing = false;
    var containerBuffer = [];
    var sequence$$1;
    var interval = options.interval || defaults.interval;

    try {
      if (interval) {
        sequence$$1 = new Sequence(interval);
      }

      var nodes = tealight(target);

      if (!nodes.length) {
        throw new Error('Invalid reveal target.');
      }

      var elements = nodes.reduce(function (elementBuffer, elementNode) {
        var element = {};
        var existingId = elementNode.getAttribute('data-sr-id');

        if (existingId) {
          deepAssign(element, this$1.store.elements[existingId]);
          /**
           * In order to prevent previously generated styles
           * from throwing off the new styles, the style tag
           * has to be reverted to its pre-reveal state.
           */

          element.node.setAttribute('style', element.styles.inline.computed);
        } else {
          element.id = nextUniqueId();
          element.node = elementNode;
          element.seen = false;
          element.revealed = false;
          element.visible = false;
        }

        var config = deepAssign({}, element.config || this$1.defaults, options);

        if (!config.mobile && isMobile() || !config.desktop && !isMobile()) {
          if (existingId) {
            clean.call(this$1, element);
          }

          return elementBuffer; // skip elements that are disabled
        }

        var containerNode = tealight(config.container)[0];

        if (!containerNode) {
          throw new Error('Invalid container.');
        }

        if (!containerNode.contains(elementNode)) {
          return elementBuffer; // skip elements found outside the container
        }

        var containerId;
        {
          containerId = getContainerId(containerNode, containerBuffer, this$1.store.containers);

          if (containerId === null) {
            containerId = nextUniqueId();
            containerBuffer.push({
              id: containerId,
              node: containerNode
            });
          }
        }
        element.config = config;
        element.containerId = containerId;
        element.styles = style(element);

        if (sequence$$1) {
          element.sequence = {
            id: sequence$$1.id,
            index: sequence$$1.members.length
          };
          sequence$$1.members.push(element.id);
        }

        elementBuffer.push(element);
        return elementBuffer;
      }, []);
      /**
       * Modifying the DOM via setAttribute needs to be handled
       * separately from reading computed styles in the map above
       * for the browser to batch DOM changes (limiting reflows)
       */

      each(elements, function (element) {
        this$1.store.elements[element.id] = element;
        element.node.setAttribute('data-sr-id', element.id);
      });
    } catch (e) {
      return logger.call(this, 'Reveal failed.', e.message);
    }
    /**
     * Now that element set-up is complete...
     * Let’s commit any container and sequence data we have to the store.
     */


    each(containerBuffer, function (container) {
      this$1.store.containers[container.id] = {
        id: container.id,
        node: container.node
      };
    });

    if (sequence$$1) {
      this.store.sequences[sequence$$1.id] = sequence$$1;
    }
    /**
     * If reveal wasn't invoked by sync, we want to
     * make sure to add this call to the history.
     */


    if (syncing !== true) {
      this.store.history.push({
        target: target,
        options: options
      });
      /**
       * Push initialization to the event queue, giving
       * multiple reveal calls time to be interpreted.
       */

      if (this.initTimeout) {
        window.clearTimeout(this.initTimeout);
      }

      this.initTimeout = window.setTimeout(initialize.bind(this), 0);
    }
  }

  function getContainerId(node) {
    var collections = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      collections[len] = arguments[len + 1];
    }

    var id = null;
    each(collections, function (collection) {
      each(collection, function (container) {
        if (id === null && container.node === node) {
          id = container.id;
        }
      });
    });
    return id;
  }
  /**
   * Re-runs the reveal method for each record stored in history,
   * for capturing new content asynchronously loaded into the DOM.
   */


  function sync() {
    var this$1 = this;
    each(this.store.history, function (record) {
      reveal.call(this$1, record.target, record.options, true);
    });
    initialize.call(this);
  }

  var polyfill = function polyfill(x) {
    return (x > 0) - (x < 0) || +x;
  };

  var mathSign = Math.sign || polyfill;
  /*! @license miniraf v1.0.0
  
  	Copyright 2018 Fisssion LLC.
  
  	Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  
  	The above copyright notice and this permission notice shall be included in all
  	copies or substantial portions of the Software.
  
  	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  	SOFTWARE.
  
  */

  var polyfill$1 = function () {
    var clock = Date.now();
    return function (callback) {
      var currentTime = Date.now();

      if (currentTime - clock > 16) {
        clock = currentTime;
        callback(currentTime);
      } else {
        setTimeout(function () {
          return polyfill$1(callback);
        }, 0);
      }
    };
  }();

  var index = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || polyfill$1;

  function getGeometry(target, isContainer) {
    /**
     * We want to ignore padding and scrollbars for container elements.
     * More information here: https://goo.gl/vOZpbz
     */
    var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
    var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;
    var offsetTop = 0;
    var offsetLeft = 0;
    var node = target.node;

    do {
      if (!isNaN(node.offsetTop)) {
        offsetTop += node.offsetTop;
      }

      if (!isNaN(node.offsetLeft)) {
        offsetLeft += node.offsetLeft;
      }

      node = node.offsetParent;
    } while (node);

    return {
      bounds: {
        top: offsetTop,
        right: offsetLeft + width,
        bottom: offsetTop + height,
        left: offsetLeft
      },
      height: height,
      width: width
    };
  }

  function getScrolled(container) {
    var top, left;

    if (container.node === document.documentElement) {
      top = window.pageYOffset;
      left = window.pageXOffset;
    } else {
      top = container.node.scrollTop;
      left = container.node.scrollLeft;
    }

    return {
      top: top,
      left: left
    };
  }

  function isElementVisible(element) {
    if (element === void 0) element = {};
    var container = this.store.containers[element.containerId];

    if (!container) {
      return;
    }

    var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
    var viewOffset = element.config.viewOffset;
    var elementBounds = {
      top: element.geometry.bounds.top + element.geometry.height * viewFactor,
      right: element.geometry.bounds.right - element.geometry.width * viewFactor,
      bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
      left: element.geometry.bounds.left + element.geometry.width * viewFactor
    };
    var containerBounds = {
      top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
      right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
      bottom: container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
      left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
    };
    return elementBounds.top < containerBounds.bottom && elementBounds.right > containerBounds.left && elementBounds.bottom > containerBounds.top && elementBounds.left < containerBounds.right || element.styles.position === 'fixed';
  }

  function delegate(event, elements) {
    var this$1 = this;
    if (event === void 0) event = {
      type: 'init'
    };
    if (elements === void 0) elements = this.store.elements;
    index(function () {
      var stale = event.type === 'init' || event.type === 'resize';
      each(this$1.store.containers, function (container) {
        if (stale) {
          container.geometry = getGeometry.call(this$1, container, true);
        }

        var scroll = getScrolled.call(this$1, container);

        if (container.scroll) {
          container.direction = {
            x: mathSign(scroll.left - container.scroll.left),
            y: mathSign(scroll.top - container.scroll.top)
          };
        }

        container.scroll = scroll;
      });
      /**
       * Due to how the sequencer is implemented, it’s
       * important that we update the state of all
       * elements, before any animation logic is
       * evaluated (in the second loop below).
       */

      each(elements, function (element) {
        if (stale) {
          element.geometry = getGeometry.call(this$1, element);
        }

        element.visible = isElementVisible.call(this$1, element);
      });
      each(elements, function (element) {
        if (element.sequence) {
          sequence.call(this$1, element);
        } else {
          animate.call(this$1, element);
        }
      });
      this$1.pristine = false;
    });
  }

  function transformSupported() {
    var style = document.documentElement.style;
    return 'transform' in style || 'WebkitTransform' in style;
  }

  function transitionSupported() {
    var style = document.documentElement.style;
    return 'transition' in style || 'WebkitTransition' in style;
  }

  var version = "4.0.5";
  var boundDelegate;
  var boundDestroy;
  var boundReveal;
  var boundClean;
  var boundSync;
  var config;
  var debug;
  var instance;

  function ScrollReveal(options) {
    if (options === void 0) options = {};
    var invokedWithoutNew = typeof this === 'undefined' || Object.getPrototypeOf(this) !== ScrollReveal.prototype;

    if (invokedWithoutNew) {
      return new ScrollReveal(options);
    }

    if (!ScrollReveal.isSupported()) {
      logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
      return mount.failure();
    }

    var buffer;

    try {
      buffer = config ? deepAssign({}, config, options) : deepAssign({}, defaults, options);
    } catch (e) {
      logger.call(this, 'Invalid configuration.', e.message);
      return mount.failure();
    }

    try {
      var container = tealight(buffer.container)[0];

      if (!container) {
        throw new Error('Invalid container.');
      }
    } catch (e) {
      logger.call(this, e.message);
      return mount.failure();
    }

    config = buffer;

    if (!config.mobile && isMobile() || !config.desktop && !isMobile()) {
      logger.call(this, 'This device is disabled.', "desktop: " + config.desktop, "mobile: " + config.mobile);
      return mount.failure();
    }

    mount.success();
    this.store = {
      containers: {},
      elements: {},
      history: [],
      sequences: {}
    };
    this.pristine = true;
    boundDelegate = boundDelegate || delegate.bind(this);
    boundDestroy = boundDestroy || destroy.bind(this);
    boundReveal = boundReveal || reveal.bind(this);
    boundClean = boundClean || clean.bind(this);
    boundSync = boundSync || sync.bind(this);
    Object.defineProperty(this, 'delegate', {
      get: function get() {
        return boundDelegate;
      }
    });
    Object.defineProperty(this, 'destroy', {
      get: function get() {
        return boundDestroy;
      }
    });
    Object.defineProperty(this, 'reveal', {
      get: function get() {
        return boundReveal;
      }
    });
    Object.defineProperty(this, 'clean', {
      get: function get() {
        return boundClean;
      }
    });
    Object.defineProperty(this, 'sync', {
      get: function get() {
        return boundSync;
      }
    });
    Object.defineProperty(this, 'defaults', {
      get: function get() {
        return config;
      }
    });
    Object.defineProperty(this, 'version', {
      get: function get() {
        return version;
      }
    });
    Object.defineProperty(this, 'noop', {
      get: function get() {
        return false;
      }
    });
    return instance ? instance : instance = this;
  }

  ScrollReveal.isSupported = function () {
    return transformSupported() && transitionSupported();
  };

  Object.defineProperty(ScrollReveal, 'debug', {
    get: function get() {
      return debug || false;
    },
    set: function set(value) {
      return debug = typeof value === 'boolean' ? value : debug;
    }
  });
  ScrollReveal();
  return ScrollReveal;
});
},{}],"js/main.js":[function(require,module,exports) {
var SmoothScroll = require('smooth-scroll');

var cpList = require('cp-classlist');

var ScrollReveal = require("./scrollview");

new SmoothScroll('a[href*="#"]');
var mainNavbar = document.querySelector("nav#main-navbar");
var menuIcon = document.querySelector("nav#main-navbar .menu-icon");
var photoGallery = document.querySelector("section#photo-gallery");
var leftArrow = document.querySelector("#photo-gallery .arrows .left-arrow");
var rightArrow = document.querySelector("#photo-gallery .arrows .right-arrow");
var closeIcon = document.querySelector("#photo-gallery .arrows .close-icon");
var returnToTop = document.querySelector("#return-to-top"); //Handle Navbar responsive

menuIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  var list = cpList(mainNavbar);
  list.add("cover-navbar");
});
mainNavbar.addEventListener("click", function (e) {
  var list = cpList(e.currentTarget);
  list.remove("cover-navbar");
});
var oldScroll = 0;
window.addEventListener("scroll", function () {
  var list = cpList(mainNavbar);

  if (posTop() > 50) {
    cpList(returnToTop).add("active");

    if (posTop() < oldScroll) {
      list.add("fixed");
    } else list.remove("fixed");
  } else {
    cpList(returnToTop).remove("active");
    list.remove("fixed");
  }

  oldScroll = posTop() <= 0 ? 0 : posTop();
});

function posTop() {
  return typeof window.pageYOffset != 'undefined' ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
} // LIGHTBOX LOGIC


photoGallery.addEventListener("click", function (_ref) {
  var target = _ref.target;

  if (cpList(target).contains("image") || cpList(target.parentElement).contains("image")) {
    cpList(photoGallery).add("lightbox");
    cpList(cpList(target).contains("image") ? target : target.parentElement).add("active");
  }
});
leftArrow.addEventListener("click", function () {
  // GET IMAGE WITH ACTIVE CLASSNAME
  var activeImg = document.querySelector("section#photo-gallery .image.active");
  cpList(activeImg).remove("active");

  if (activeImg.previousElementSibling) {
    cpList(activeImg.previousElementSibling).add("active");
  } else {
    // GET LAST CHILD AND ADD
    var nodes = document.querySelectorAll("section#photo-gallery .image");
    cpList(nodes[nodes.length - 1]).add("active");
  }
});
rightArrow.addEventListener("click", function () {
  // GET IMAGE WITH ACTIVE CLASSNAME
  var activeImg = document.querySelector("section#photo-gallery .image.active");
  cpList(activeImg).remove("active");

  if (activeImg.nextElementSibling) {
    cpList(activeImg.nextElementSibling).add("active");
  } else {
    // GET FIRST CHILD AND ADD
    cpList(document.querySelectorAll("section#photo-gallery .image")[0]).add("active");
  }
});
closeIcon.addEventListener("click", function () {
  cpList(document.querySelector("section#photo-gallery .image.active")).remove("active");
  cpList(photoGallery).remove("lightbox");
}); // WAIT FOR IMAGES TO LOAD BEFORE BRINGING BACK PAGE

var imgs = document.querySelectorAll("img");
var len = imgs.length;
var counter = 0;

for (var i = 0; i < len; i++) {
  var myImage = new Image();
  myImage.src = imgs[i].src;
  myImage.onload = incrementCounter;
}

function incrementCounter() {
  counter++;

  if (counter === len - 1) {
    cpList(document.querySelector("body .loader")).remove("active");
    cpList(document.querySelector("body .page")).add("active");
    ScrollReveal().reveal('main #kesfet, #black-series, #one-cikanlar,#newsletter ,footer ', {
      duration: 1000,
      reset: true
    });
  }
}
},{"smooth-scroll":"../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js","cp-classlist":"../node_modules/cp-classlist/dist/main.js","./scrollview":"js/scrollview.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35877" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.map