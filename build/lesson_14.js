/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

var _dropdown = __webpack_require__(15);

var _game = __webpack_require__(16);

(0, _dropdown.dropDown)(document.querySelector('#dropDownCountries'), ['USA', 'Canada', 'Kongo']);
(0, _dropdown.dropDown)(document.querySelector('#otherDropDown'), ['USD', 'CAD', 'EUR', 'UHR', 'GBP']);

var game = new _game.Game();

// document.addEventListener('keydown', (e) => {
//     console.log(e.code);
// })

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function dropDown(parentNode, options) {
    var btnTitle = void 0;
    var isExpand = false;

    function open() {
        parentNode.classList.add('drop-down-menu_expand');
        isExpand = true;
    }

    function close() {
        parentNode.classList.remove('drop-down-menu_expand');
        isExpand = false;
    }

    function toggle() {
        this.classList.add('hello');
        if (isExpand) {
            close();
        } else {
            open();
        }
    }

    function render() {
        parentNode.classList.add('drop-down');
        renderBtn();
        renderList();
    }

    function renderBtn() {
        btnTitle = document.createElement('button');
        btnTitle.classList.add('drop-down-menu__btn');
        btnTitle.textContent = 'TOGGLE';
        btnTitle.addEventListener('click', toggle);
        parentNode.appendChild(btnTitle);
    }

    function renderList() {
        var ul = document.createElement('ul');
        ul.classList.add('drop-down-menu__list');

        var _loop = function _loop(option) {
            var li = document.createElement('li');
            var btn = document.createElement('button');

            li.classList.add('drop-down-menu__item');
            btn.classList.add('drop-down-menu__option');
            btn.textContent = option;

            btn.addEventListener('click', function () {
                btnTitle.textContent = option;
                close();
            });

            li.appendChild(btn);
            ul.appendChild(li);
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var option = _step.value;

                _loop(option);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        parentNode.appendChild(ul);
    }

    render();
}

exports.dropDown = dropDown;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(17);

var _car = __webpack_require__(18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
    function Game() {
        var _this = this;

        var carCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
        var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector('body');

        _classCallCheck(this, Game);

        this.parent = parentNode;
        this.carCount = carCount;
        this.inititalize();
        window.startGame = function () {
            return _this.startGame();
        };
    }

    _createClass(Game, [{
        key: 'inititalize',
        value: function inititalize() {
            this.render();
            this.renderCars();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            this.gameField = document.createElement('div');
            this.button = document.createElement('button');
            this.gameField.classList.add('game');
            this.parent.appendChild(this.gameField);
            this.parent.appendChild(this.button);
            console.log(this.gameField.offsetLeft);
            this.button.textContent = 'Start Race';
            this.button.addEventListener('click', function () {
                _this2.startGame();
            });
            var clientRect = this.gameField.getBoundingClientRect();
            this.finishCoordinates = Math.ceil(clientRect.right - 40);
        }
    }, {
        key: 'renderCars',
        value: function renderCars() {
            this.cars = [];
            for (var i = 0; i < this.carCount; i++) {
                var car = new _car.Car(this.gameField, 2);
                this.cars.push(car);
            }
            console.log(this.cars);
        }
    }, {
        key: 'startGame',
        value: function startGame() {
            var _this3 = this;

            this.intervalIds = [];
            this.cars.forEach(function (car, i) {
                var interval = Math.ceil(Math.random() * 200);
                _this3.intervalIds.push(_this3.moveCar(car, i, interval));
            });
        }
    }, {
        key: 'moveCar',
        value: function moveCar(car, indexOfCar) {
            var _this4 = this;

            var timeInterval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

            return setInterval(function () {
                if (car.coordinates.left <= _this4.finishCoordinates) {
                    car.moveForward();
                    console.log(car.coordinates.left);
                } else {
                    _this4.intervalIds.forEach(function (id) {
                        clearInterval(id);
                    });
                    confirm('FINISHED: ' + indexOfCar);
                }
            }, timeInterval);
        }
    }]);

    return Game;
}();

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Car = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(19);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var imgUrl = __webpack_require__(20);

var Car = exports.Car = function () {
    function Car(parent, speed) {
        _classCallCheck(this, Car);

        this.parent = parent;
        this.speed = speed;
        this.coordinates = {
            left: 0
        };
        this.render();
    }

    _createClass(Car, [{
        key: 'render',
        value: function render() {
            this.domElement = document.createElement('img');
            this.domElement.classList.add('car');
            this.domElement.style.left = 0;
            this.domElement.src = imgUrl;
            this.parent.appendChild(this.domElement);
        }
    }, {
        key: 'moveForward',
        value: function moveForward() {
            var leftCoord = parseInt(this.domElement.style.left) + 1;
            this.domElement.style.left = leftCoord + 'px';
            this.coordinates.left = leftCoord;
        }
    }, {
        key: 'moveTop',
        value: function moveTop() {}
    }, {
        key: 'moveBottom',
        value: function moveBottom() {}
    }]);

    return Car;
}();

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "./assets/images/car.png";

/***/ })
/******/ ]);