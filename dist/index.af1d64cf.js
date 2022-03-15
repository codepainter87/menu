// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1qAf1":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "236c80a6af1d64cf";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"drotf":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) : typeof define === 'function' && define.amd ? define([
        'jquery'
    ], factory) : factory(global.$);
})(this, function($) {
    'use strict';
    $ = $ && 'default' in $ ? $['default'] : $;
    var gl;
    var $window = $(window); // There is only one window, so why not cache the jQuery-wrapped window?
    function isPercentage(str) {
        return str[str.length - 1] == '%';
    }
    /**
 *  Load a configuration of GL settings which the browser supports.
 *  For example:
 *  - not all browsers support WebGL
 *  - not all browsers support floating point textures
 *  - not all browsers support linear filtering for floating point textures
 *  - not all browsers support rendering to floating point textures
 *  - some browsers *do* support rendering to half-floating point textures instead.
 */ function loadConfig() {
        var canvas = document.createElement('canvas');
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) // Browser does not support WebGL.
        return null;
        // Load extensions
        var extensions = {
        };
        [
            'OES_texture_float',
            'OES_texture_half_float',
            'OES_texture_float_linear',
            'OES_texture_half_float_linear'
        ].forEach(function(name) {
            var extension = gl.getExtension(name);
            if (extension) extensions[name] = extension;
        });
        // If no floating point extensions are supported we can bail out early.
        if (!extensions.OES_texture_float) return null;
        var configs = [];
        function createConfig(type, glType, arrayType) {
            var name = 'OES_texture_' + type, nameLinear = name + '_linear', linearSupport = nameLinear in extensions, configExtensions = [
                name
            ];
            if (linearSupport) configExtensions.push(nameLinear);
            return {
                type: glType,
                arrayType: arrayType,
                linearSupport: linearSupport,
                extensions: configExtensions
            };
        }
        configs.push(createConfig('float', gl.FLOAT, Float32Array));
        if (extensions.OES_texture_half_float) configs.push(// Array type should be Uint16Array, but at least on iOS that breaks. In that case we
        // just initialize the textures with data=null, instead of data=new Uint16Array(...).
        // This makes initialization a tad slower, but it's still negligible.
        createConfig('half_float', extensions.OES_texture_half_float.HALF_FLOAT_OES, null));
        // Setup the texture and framebuffer
        var texture = gl.createTexture();
        var framebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        // Check for each supported texture type if rendering to it is supported
        var config = null;
        for(var i = 0; i < configs.length; i++){
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 32, 32, 0, gl.RGBA, configs[i].type, null);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
            if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) {
                config = configs[i];
                break;
            }
        }
        return config;
    }
    function createImageData(width, height) {
        try {
            return new ImageData(width, height);
        } catch (e) {
            // Fallback for IE
            var canvas = document.createElement('canvas');
            return canvas.getContext('2d').createImageData(width, height);
        }
    }
    function translateBackgroundPosition(value) {
        var parts = value.split(' ');
        if (parts.length === 1) switch(value){
            case 'center':
                return [
                    '50%',
                    '50%'
                ];
            case 'top':
                return [
                    '50%',
                    '0'
                ];
            case 'bottom':
                return [
                    '50%',
                    '100%'
                ];
            case 'left':
                return [
                    '0',
                    '50%'
                ];
            case 'right':
                return [
                    '100%',
                    '50%'
                ];
            default:
                return [
                    value,
                    '50%'
                ];
        }
        else return parts.map(function(part) {
            switch(value){
                case 'center':
                    return '50%';
                case 'top':
                case 'left':
                    return '0';
                case 'right':
                case 'bottom':
                    return '100%';
                default:
                    return part;
            }
        });
    }
    function createProgram(vertexSource, fragmentSource, uniformValues) {
        function compileSource(type, source) {
            var shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error('compile error: ' + gl.getShaderInfoLog(shader));
            return shader;
        }
        var program = {
        };
        program.id = gl.createProgram();
        gl.attachShader(program.id, compileSource(gl.VERTEX_SHADER, vertexSource));
        gl.attachShader(program.id, compileSource(gl.FRAGMENT_SHADER, fragmentSource));
        gl.linkProgram(program.id);
        if (!gl.getProgramParameter(program.id, gl.LINK_STATUS)) throw new Error('link error: ' + gl.getProgramInfoLog(program.id));
        // Fetch the uniform and attribute locations
        program.uniforms = {
        };
        program.locations = {
        };
        gl.useProgram(program.id);
        gl.enableVertexAttribArray(0);
        var match, name, regex = /uniform (\w+) (\w+)/g, shaderCode = vertexSource + fragmentSource;
        while((match = regex.exec(shaderCode)) != null){
            name = match[2];
            program.locations[name] = gl.getUniformLocation(program.id, name);
        }
        return program;
    }
    function bindTexture(texture, unit) {
        gl.activeTexture(gl.TEXTURE0 + (unit || 0));
        gl.bindTexture(gl.TEXTURE_2D, texture);
    }
    function extractUrl(value) {
        var urlMatch = /url\(["']?([^"']*)["']?\)/.exec(value);
        if (urlMatch == null) return null;
        return urlMatch[1];
    }
    function isDataUri(url) {
        return url.match(/^data:/);
    }
    var config1 = loadConfig();
    var transparentPixels = createImageData(32, 32);
    // Extend the css
    $('head').prepend('<style>.jquery-ripples { position: relative; z-index: 0; }</style>');
    // RIPPLES CLASS DEFINITION
    // =========================
    var Ripples = function(el, options) {
        var that = this;
        this.$el = $(el);
        // Init properties from options
        this.interactive = options.interactive;
        this.resolution = options.resolution;
        this.textureDelta = new Float32Array([
            1 / this.resolution,
            1 / this.resolution
        ]);
        this.perturbance = options.perturbance;
        this.dropRadius = options.dropRadius;
        this.crossOrigin = options.crossOrigin;
        this.imageUrl = options.imageUrl;
        // Init WebGL canvas
        var canvas = document.createElement('canvas');
        canvas.width = this.$el.innerWidth();
        canvas.height = this.$el.innerHeight();
        this.canvas = canvas;
        this.$canvas = $(canvas);
        this.$canvas.css({
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
        });
        this.$el.addClass('jquery-ripples').append(canvas);
        this.context = gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        // Load extensions
        config1.extensions.forEach(function(name) {
            gl.getExtension(name);
        });
        // Auto-resize when window size changes.
        this.updateSize = this.updateSize.bind(this);
        $(window).on('resize', this.updateSize);
        // Init rendertargets for ripple data.
        this.textures = [];
        this.framebuffers = [];
        this.bufferWriteIndex = 0;
        this.bufferReadIndex = 1;
        var arrayType = config1.arrayType;
        var textureData = arrayType ? new arrayType(this.resolution * this.resolution * 4) : null;
        for(var i = 0; i < 2; i++){
            var texture = gl.createTexture();
            var framebuffer = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, config1.linearSupport ? gl.LINEAR : gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, config1.linearSupport ? gl.LINEAR : gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.resolution, this.resolution, 0, gl.RGBA, config1.type, textureData);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
            this.textures.push(texture);
            this.framebuffers.push(framebuffer);
        }
        // Init GL stuff
        this.quad = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            1
        ]), gl.STATIC_DRAW);
        this.initShaders();
        this.initTexture();
        this.setTransparentTexture();
        // Load the image either from the options or CSS rules
        this.loadImage();
        // Set correct clear color and blend mode (regular alpha blending)
        gl.clearColor(0, 0, 0, 0);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        // Plugin is successfully initialized!
        this.visible = true;
        this.running = true;
        this.inited = true;
        this.destroyed = false;
        this.setupPointerEvents();
        // Init animation
        function step() {
            if (!that.destroyed) {
                that.step();
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
    };
    Ripples.DEFAULTS = {
        imageUrl: null,
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.03,
        interactive: true,
        crossOrigin: ''
    };
    Ripples.prototype = {
        // Set up pointer (mouse + touch) events
        setupPointerEvents: function() {
            var that = this;
            function pointerEventsEnabled() {
                return that.visible && that.running && that.interactive;
            }
            function dropAtPointer(pointer, big) {
                if (pointerEventsEnabled()) that.dropAtPointer(pointer, that.dropRadius * (big ? 1.5 : 1), big ? 0.14 : 0.01);
            }
            // Start listening to pointer events
            this.$el// Create regular, small ripples for mouse move and touch events...
            .on('mousemove.ripples', function(e) {
                dropAtPointer(e);
            }).on('touchmove.ripples touchstart.ripples', function(e) {
                var touches = e.originalEvent.changedTouches;
                for(var i = 0; i < touches.length; i++)dropAtPointer(touches[i]);
            })// ...and only a big ripple on mouse down events.
            .on('mousedown.ripples', function(e) {
                dropAtPointer(e, true);
            });
        },
        // Load the image either from the options or the element's CSS rules.
        loadImage: function() {
            var that = this;
            gl = this.context;
            var newImageSource = this.imageUrl || extractUrl(this.originalCssBackgroundImage) || extractUrl(this.$el.css('backgroundImage'));
            // If image source is unchanged, don't reload it.
            if (newImageSource == this.imageSource) return;
            this.imageSource = newImageSource;
            // Falsy source means no background.
            if (!this.imageSource) {
                this.setTransparentTexture();
                return;
            }
            // Load the texture from a new image.
            var image = new Image;
            image.onload = function() {
                gl = that.context;
                // Only textures with dimensions of powers of two can have repeat wrapping.
                function isPowerOfTwo(x) {
                    return (x & x - 1) == 0;
                }
                var wrapping = isPowerOfTwo(image.width) && isPowerOfTwo(image.height) ? gl.REPEAT : gl.CLAMP_TO_EDGE;
                gl.bindTexture(gl.TEXTURE_2D, that.backgroundTexture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapping);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapping);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                that.backgroundWidth = image.width;
                that.backgroundHeight = image.height;
                // Hide the background that we're replacing.
                that.hideCssBackground();
            };
            // Fall back to a transparent texture when loading the image failed.
            image.onerror = function() {
                gl = that.context;
                that.setTransparentTexture();
            };
            // Disable CORS when the image source is a data URI.
            image.crossOrigin = isDataUri(this.imageSource) ? null : this.crossOrigin;
            image.src = this.imageSource;
        },
        step: function() {
            gl = this.context;
            if (!this.visible) return;
            this.computeTextureBoundaries();
            if (this.running) this.update();
            this.render();
        },
        drawQuad: function() {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
            gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
            gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        },
        render: function() {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.viewport(0, 0, this.canvas.width, this.canvas.height);
            gl.enable(gl.BLEND);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.useProgram(this.renderProgram.id);
            bindTexture(this.backgroundTexture, 0);
            bindTexture(this.textures[0], 1);
            gl.uniform1f(this.renderProgram.locations.perturbance, this.perturbance);
            gl.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft);
            gl.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight);
            gl.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio);
            gl.uniform1i(this.renderProgram.locations.samplerBackground, 0);
            gl.uniform1i(this.renderProgram.locations.samplerRipples, 1);
            this.drawQuad();
            gl.disable(gl.BLEND);
        },
        update: function() {
            gl.viewport(0, 0, this.resolution, this.resolution);
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]);
            bindTexture(this.textures[this.bufferReadIndex]);
            gl.useProgram(this.updateProgram.id);
            this.drawQuad();
            this.swapBufferIndices();
        },
        swapBufferIndices: function() {
            this.bufferWriteIndex = 1 - this.bufferWriteIndex;
            this.bufferReadIndex = 1 - this.bufferReadIndex;
        },
        computeTextureBoundaries: function() {
            var backgroundSize = this.$el.css('background-size');
            var backgroundAttachment = this.$el.css('background-attachment');
            var backgroundPosition = translateBackgroundPosition(this.$el.css('background-position'));
            // Here the 'container' is the element which the background adapts to
            // (either the chrome window or some element, depending on attachment)
            var container;
            if (backgroundAttachment == 'fixed') {
                container = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
                container.width = $window.width();
                container.height = $window.height();
            } else {
                container = this.$el.offset();
                container.width = this.$el.innerWidth();
                container.height = this.$el.innerHeight();
            }
            // TODO: background-clip
            if (backgroundSize == 'cover') {
                var scale = Math.max(container.width / this.backgroundWidth, container.height / this.backgroundHeight);
                var backgroundWidth = this.backgroundWidth * scale;
                var backgroundHeight = this.backgroundHeight * scale;
            } else if (backgroundSize == 'contain') {
                var scale = Math.min(container.width / this.backgroundWidth, container.height / this.backgroundHeight);
                var backgroundWidth = this.backgroundWidth * scale;
                var backgroundHeight = this.backgroundHeight * scale;
            } else {
                backgroundSize = backgroundSize.split(' ');
                var backgroundWidth = backgroundSize[0] || '';
                var backgroundHeight = backgroundSize[1] || backgroundWidth;
                if (isPercentage(backgroundWidth)) backgroundWidth = container.width * parseFloat(backgroundWidth) / 100;
                else if (backgroundWidth != 'auto') backgroundWidth = parseFloat(backgroundWidth);
                if (isPercentage(backgroundHeight)) backgroundHeight = container.height * parseFloat(backgroundHeight) / 100;
                else if (backgroundHeight != 'auto') backgroundHeight = parseFloat(backgroundHeight);
                if (backgroundWidth == 'auto' && backgroundHeight == 'auto') {
                    backgroundWidth = this.backgroundWidth;
                    backgroundHeight = this.backgroundHeight;
                } else {
                    if (backgroundWidth == 'auto') backgroundWidth = this.backgroundWidth * (backgroundHeight / this.backgroundHeight);
                    if (backgroundHeight == 'auto') backgroundHeight = this.backgroundHeight * (backgroundWidth / this.backgroundWidth);
                }
            }
            // Compute backgroundX and backgroundY in page coordinates
            var backgroundX = backgroundPosition[0];
            var backgroundY = backgroundPosition[1];
            if (isPercentage(backgroundX)) backgroundX = container.left + (container.width - backgroundWidth) * parseFloat(backgroundX) / 100;
            else backgroundX = container.left + parseFloat(backgroundX);
            if (isPercentage(backgroundY)) backgroundY = container.top + (container.height - backgroundHeight) * parseFloat(backgroundY) / 100;
            else backgroundY = container.top + parseFloat(backgroundY);
            var elementOffset = this.$el.offset();
            this.renderProgram.uniforms.topLeft = new Float32Array([
                (elementOffset.left - backgroundX) / backgroundWidth,
                (elementOffset.top - backgroundY) / backgroundHeight
            ]);
            this.renderProgram.uniforms.bottomRight = new Float32Array([
                this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / backgroundWidth,
                this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / backgroundHeight
            ]);
            var maxSide = Math.max(this.canvas.width, this.canvas.height);
            this.renderProgram.uniforms.containerRatio = new Float32Array([
                this.canvas.width / maxSide,
                this.canvas.height / maxSide
            ]);
        },
        initShaders: function() {
            var vertexShader = [
                'attribute vec2 vertex;',
                'varying vec2 coord;',
                'void main() {',
                'coord = vertex * 0.5 + 0.5;',
                'gl_Position = vec4(vertex, 0.0, 1.0);',
                '}'
            ].join('\n');
            this.dropProgram = createProgram(vertexShader, [
                'precision highp float;',
                'const float PI = 3.141592653589793;',
                'uniform sampler2D texture;',
                'uniform vec2 center;',
                'uniform float radius;',
                'uniform float strength;',
                'varying vec2 coord;',
                'void main() {',
                'vec4 info = texture2D(texture, coord);',
                'float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);',
                'drop = 0.5 - cos(drop * PI) * 0.5;',
                'info.r += drop * strength;',
                'gl_FragColor = info;',
                '}'
            ].join('\n'));
            this.updateProgram = createProgram(vertexShader, [
                'precision highp float;',
                'uniform sampler2D texture;',
                'uniform vec2 delta;',
                'varying vec2 coord;',
                'void main() {',
                'vec4 info = texture2D(texture, coord);',
                'vec2 dx = vec2(delta.x, 0.0);',
                'vec2 dy = vec2(0.0, delta.y);',
                'float average = (',
                'texture2D(texture, coord - dx).r +',
                'texture2D(texture, coord - dy).r +',
                'texture2D(texture, coord + dx).r +',
                'texture2D(texture, coord + dy).r',
                ') * 0.25;',
                'info.g += (average - info.r) * 2.0;',
                'info.g *= 0.995;',
                'info.r += info.g;',
                'gl_FragColor = info;',
                '}'
            ].join('\n'));
            gl.uniform2fv(this.updateProgram.locations.delta, this.textureDelta);
            this.renderProgram = createProgram([
                'precision highp float;',
                'attribute vec2 vertex;',
                'uniform vec2 topLeft;',
                'uniform vec2 bottomRight;',
                'uniform vec2 containerRatio;',
                'varying vec2 ripplesCoord;',
                'varying vec2 backgroundCoord;',
                'void main() {',
                'backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);',
                'backgroundCoord.y = 1.0 - backgroundCoord.y;',
                'ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;',
                'gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);',
                '}'
            ].join('\n'), [
                'precision highp float;',
                'uniform sampler2D samplerBackground;',
                'uniform sampler2D samplerRipples;',
                'uniform vec2 delta;',
                'uniform float perturbance;',
                'varying vec2 ripplesCoord;',
                'varying vec2 backgroundCoord;',
                'void main() {',
                'float height = texture2D(samplerRipples, ripplesCoord).r;',
                'float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;',
                'float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;',
                'vec3 dx = vec3(delta.x, heightX - height, 0.0);',
                'vec3 dy = vec3(0.0, heightY - height, delta.y);',
                'vec2 offset = -normalize(cross(dy, dx)).xz;',
                'float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);',
                'gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;',
                '}'
            ].join('\n'));
            gl.uniform2fv(this.renderProgram.locations.delta, this.textureDelta);
        },
        initTexture: function() {
            this.backgroundTexture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, this.backgroundTexture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        },
        setTransparentTexture: function() {
            gl.bindTexture(gl.TEXTURE_2D, this.backgroundTexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, transparentPixels);
        },
        hideCssBackground: function() {
            // Check whether we're changing inline CSS or overriding a global CSS rule.
            var inlineCss = this.$el[0].style.backgroundImage;
            if (inlineCss == 'none') return;
            this.originalInlineCss = inlineCss;
            this.originalCssBackgroundImage = this.$el.css('backgroundImage');
            this.$el.css('backgroundImage', 'none');
        },
        restoreCssBackground: function() {
            // Restore background by either changing the inline CSS rule to what it was, or
            // simply remove the inline CSS rule if it never was inlined.
            this.$el.css('backgroundImage', this.originalInlineCss || '');
        },
        dropAtPointer: function(pointer, radius, strength) {
            var borderLeft = parseInt(this.$el.css('border-left-width')) || 0, borderTop = parseInt(this.$el.css('border-top-width')) || 0;
            this.drop(pointer.pageX - this.$el.offset().left - borderLeft, pointer.pageY - this.$el.offset().top - borderTop, radius, strength);
        },
        /**
	 *  Public methods
	 */ drop: function(x, y, radius, strength) {
            gl = this.context;
            var elWidth = this.$el.innerWidth();
            var elHeight = this.$el.innerHeight();
            var longestSide = Math.max(elWidth, elHeight);
            radius = radius / longestSide;
            var dropPosition = new Float32Array([
                (2 * x - elWidth) / longestSide,
                (elHeight - 2 * y) / longestSide
            ]);
            gl.viewport(0, 0, this.resolution, this.resolution);
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]);
            bindTexture(this.textures[this.bufferReadIndex]);
            gl.useProgram(this.dropProgram.id);
            gl.uniform2fv(this.dropProgram.locations.center, dropPosition);
            gl.uniform1f(this.dropProgram.locations.radius, radius);
            gl.uniform1f(this.dropProgram.locations.strength, strength);
            this.drawQuad();
            this.swapBufferIndices();
        },
        updateSize: function() {
            var newWidth = this.$el.innerWidth(), newHeight = this.$el.innerHeight();
            if (newWidth != this.canvas.width || newHeight != this.canvas.height) {
                this.canvas.width = newWidth;
                this.canvas.height = newHeight;
            }
        },
        destroy: function() {
            this.$el.off('.ripples').removeClass('jquery-ripples').removeData('ripples');
            // Make sure the last used context is garbage-collected
            gl = null;
            $(window).off('resize', this.updateSize);
            this.$canvas.remove();
            this.restoreCssBackground();
            this.destroyed = true;
        },
        show: function() {
            this.visible = true;
            this.$canvas.show();
            this.hideCssBackground();
        },
        hide: function() {
            this.visible = false;
            this.$canvas.hide();
            this.restoreCssBackground();
        },
        pause: function() {
            this.running = false;
        },
        play: function() {
            this.running = true;
        },
        set: function(property, value) {
            switch(property){
                case 'dropRadius':
                case 'perturbance':
                case 'interactive':
                case 'crossOrigin':
                    this[property] = value;
                    break;
                case 'imageUrl':
                    this.imageUrl = value;
                    this.loadImage();
                    break;
            }
        }
    };
    // RIPPLES PLUGIN DEFINITION
    // ==========================
    var old = $.fn.ripples;
    $.fn.ripples = function(option) {
        if (!config1) throw new Error('Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.');
        var args = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : undefined;
        return this.each(function() {
            var $this = $(this), data = $this.data('ripples'), options = $.extend({
            }, Ripples.DEFAULTS, $this.data(), typeof option == 'object' && option);
            if (!data && typeof option == 'string') return;
            if (!data) $this.data('ripples', data = new Ripples(this, options));
            else if (typeof option == 'string') Ripples.prototype[option].apply(data, args);
        });
    };
    $.fn.ripples.Constructor = Ripples;
    // RIPPLES NO CONFLICT
    // ====================
    $.fn.ripples.noConflict = function() {
        $.fn.ripples = old;
        return this;
    };
});

},{"jquery":"hgMhh"}]},["1qAf1","drotf"], "drotf", "parcelRequiredf5e")

//# sourceMappingURL=index.af1d64cf.js.map
