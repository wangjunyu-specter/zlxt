function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home/home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /*
     * @Author: wjy-mac
     * @Date: 2020-03-23 15:53:34
     * @LastEditors: wjy-mac
     * @LastEditTime: 2020-03-24 15:38:42
     * @Description: file content
     */


    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home/home.component.ts");
    /*
     * @Author: wjy-mac
     * @Date: 2020-03-23 15:53:34
     * @LastEditors: wjy-mac
     * @LastEditTime: 2020-03-24 17:14:06
     * @Description: file content
     */


    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /*
     * @Author: wjy-mac
     * @Date: 2020-03-23 23:42:37
     * @LastEditors: wjy-mac
     * @LastEditTime: 2020-03-25 00:03:20
     * @Description: file content
     */


    var _c0 = function _c0() {
      return {
        "marginRight.%": 1
      };
    };

    var _c1 = function _c1() {
      return {
        "left.%": 50
      };
    };

    var _c2 = function _c2() {
      return {
        "marginLeft.%": 1
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @Author: wjy-mac
         * @description: 跳转页面
         * @Date: 2020-03-25 00:00:23
         * @param {type}
         * @return:
         */

      }, {
        key: "open",
        value: function open(path) {
          this.router.navigate([path]);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 14,
      vars: 8,
      consts: [[1, "home-box"], [1, "img-item"], [1, "item", 3, "click"], ["src", "../../../assets/bjimg/index_left.png", "alt", "", 3, "ngStyle.sm"], [1, "container-gq", 3, "ngStyle.sm"], [1, "dot"], [1, "pulse"], [1, "pulse1"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_2_listener() {
            return ctx.open("about");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_8_listener() {
            return ctx.open("aboutcd");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        }
      },
      directives: [_angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"]],
      styles: ["@charset \"UTF-8\";\n.home-box[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: url('zlxt_index_01.png');\n  background-size: 100% 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  \n  \n  \n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%] {\n  margin-top: -2%;\n  width: auto;\n  max-width: 100%;\n  height: 35%;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  flex-direction: row;\n  overflow: hidden;\n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 50%;\n  position: relative;\n  box-sizing: border-box;\n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-of-type {\n  text-align: right;\n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-of-type   img[_ngcontent-%COMP%] {\n  margin-right: 11%;\n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-of-type   .container-gq[_ngcontent-%COMP%] {\n  left: 65%;\n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-of-type   img[_ngcontent-%COMP%] {\n  margin-left: 11%;\n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-of-type   .container-gq[_ngcontent-%COMP%] {\n  left: 45%;\n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n@-webkit-keyframes warn {\n  0% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0;\n  }\n  25% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.1;\n  }\n  50% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5);\n    opacity: 0.3;\n  }\n  75% {\n    transform: scale(0.8);\n    -webkit-transform: scale(0.8);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0;\n  }\n}\n@keyframes warn {\n  0% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0;\n  }\n  25% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.1;\n  }\n  50% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5);\n    opacity: 0.3;\n  }\n  75% {\n    transform: scale(0.8);\n    -webkit-transform: scale(0.8);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes warn1 {\n  0% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0;\n  }\n  25% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.1;\n  }\n  50% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.3;\n  }\n  75% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(0.8);\n    -webkit-transform: scale(0.8);\n    opacity: 0;\n  }\n}\n@keyframes warn1 {\n  0% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0;\n  }\n  25% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.1;\n  }\n  50% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.3;\n  }\n  75% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(0.8);\n    -webkit-transform: scale(0.8);\n    opacity: 0;\n  }\n}\n.home-box[_ngcontent-%COMP%]   .container-gq[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  top: 50%;\n  margin-left: -30px;\n  margin-top: -30px;\n}\n.home-box[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  left: 14px;\n  top: 14px;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border: 1px solid #33ccff;\n  border-radius: 50%;\n  background-color: #33ccff;\n  \n  z-index: 2;\n}\n.home-box[_ngcontent-%COMP%]   .pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  left: 0;\n  top: 0;\n  border: 1px solid #3399ff;\n  border-radius: 50%;\n  z-index: 1;\n  opacity: 0;\n  -webkit-animation: warn 2s ease-out;\n  animation: warn 2s ease-out;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  box-shadow: 1px 1px 30px #3399ff;\n  \n}\n.home-box[_ngcontent-%COMP%]   .pulse1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  left: 0;\n  top: 0;\n  border: 1px solid #3399ff;\n  border-radius: 50%;\n  z-index: 1;\n  opacity: 0;\n  -webkit-animation: warn1 2s ease-out;\n  animation: warn1 2s ease-out;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  box-shadow: 1px 1px 30px #3399ff;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS9FOlxcd2p5XFxwcm9qZWN0XFx6bHh0L3NyY1xcYXBwXFxob21lXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBdUdFLGVBQUE7RUFjQSx5QkFBQTtFQXFCQSx5QkFBQTtBRHJJSjtBQ0pFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRE1KO0FDTEk7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QURPTjtBQ05NO0VBQ0UsaUJBQUE7QURRUjtBQ05RO0VBQ0UsaUJBQUE7QURRVjtBQ05RO0VBQ0UsU0FBQTtBRFFWO0FDSlE7RUFDRSxnQkFBQTtBRE1WO0FDSlE7RUFDRSxTQUFBO0FETVY7QUNITTtFQUVFLFlBQUE7QURJUjtBQ0FFO0VBQ0U7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsVUFBQTtFREVGO0VDQUU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREVGO0VDQUU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREVGO0VDQUU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREVGO0VDQUU7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0EsVUFBQTtFREVGO0FBQ0Y7QUMzQkU7RUFDRTtJQUNBLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSxVQUFBO0VERUY7RUNBRTtJQUNBLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSxZQUFBO0VERUY7RUNBRTtJQUNBLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSxZQUFBO0VERUY7RUNBRTtJQUNBLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSxZQUFBO0VERUY7RUNBRTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VERUY7QUFDRjtBQ0FJO0VBQ0E7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsVUFBQTtFREVGO0VDQUU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREVGO0VDQUU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREVGO0VDQUU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREVGO0VDQUU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsVUFBQTtFREVGO0FBQ0Y7QUMzQkk7RUFDQTtJQUNBLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSxVQUFBO0VERUY7RUNBRTtJQUNBLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSxZQUFBO0VERUY7RUNBRTtJQUNBLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSxZQUFBO0VERUY7RUNBRTtJQUNBLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSxZQUFBO0VERUY7RUNBRTtJQUNBLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSxVQUFBO0VERUY7QUFDRjtBQ0FJO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEQ0o7QUNFSTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFBMEIsdUJBQUE7RUFDMUIsVUFBQTtBRENKO0FDRUk7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUdBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsMkNBQUE7RUFFQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQWtDLFNBQUE7QURDdEM7QUNFSTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBR0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBRUEsNEJBQUE7RUFDQSwyQ0FBQTtFQUVBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFBa0MsU0FBQTtBREN0QyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmhvbWUtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYmppbWcvemx4dF9pbmRleF8wMS5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIOS/neaMgeWkp+Wwj+S4jeWPmOeahOWwj+WchueCuSAqL1xuICAvKiDkuqfnlJ/liqjnlLvvvIjlkJHlpJbmianmlaPlj5jlpKfvvInnmoTlnIblnIgg56ys5LiA5Liq5ZyGICovXG4gIC8qIOS6p+eUn+WKqOeUu++8iOWQkeWkluaJqeaVo+WPmOWkp++8ieeahOWchuWciCDnrKzkuozkuKrlnIYgKi9cbn1cbi5ob21lLWJveCAuaW1nLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAtMiU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaG9tZS1ib3ggLmltZy1pdGVtIC5pdGVtIHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmhvbWUtYm94IC5pbWctaXRlbSAuaXRlbTpmaXJzdC1vZi10eXBlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uaG9tZS1ib3ggLmltZy1pdGVtIC5pdGVtOmZpcnN0LW9mLXR5cGUgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMSU7XG59XG4uaG9tZS1ib3ggLmltZy1pdGVtIC5pdGVtOmZpcnN0LW9mLXR5cGUgLmNvbnRhaW5lci1ncSB7XG4gIGxlZnQ6IDY1JTtcbn1cbi5ob21lLWJveCAuaW1nLWl0ZW0gLml0ZW06bGFzdC1vZi10eXBlIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMSU7XG59XG4uaG9tZS1ib3ggLmltZy1pdGVtIC5pdGVtOmxhc3Qtb2YtdHlwZSAuY29udGFpbmVyLWdxIHtcbiAgbGVmdDogNDUlO1xufVxuLmhvbWUtYm94IC5pbWctaXRlbSAuaXRlbSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5Aa2V5ZnJhbWVzIHdhcm4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyB3YXJuMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmhvbWUtYm94IC5jb250YWluZXItZ3Ege1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuLmhvbWUtYm94IC5kb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBsZWZ0OiAxNHB4O1xuICB0b3A6IDE0cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzY2NmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNjY2ZmO1xuICAvKiDlrp7lv4PlnIYg77yM5aaC5p6c5rKh5pyJ6L+Z5Liq5bCx5piv5LiA5Liq5bCP5ZyG5ZyIICovXG4gIHotaW5kZXg6IDI7XG59XG4uaG9tZS1ib3ggLnB1bHNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzk5ZmY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2FybiAycyBlYXNlLW91dDtcbiAgLW1vei1hbmltYXRpb246IHdhcm4gMnMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogd2FybiAycyBlYXNlLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMzBweCAjMzM5OWZmO1xuICAvKiDpmLTlvbHmlYjmnpwgKi9cbn1cbi5ob21lLWJveCAucHVsc2UxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzk5ZmY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2FybjEgMnMgZWFzZS1vdXQ7XG4gIC1tb3otYW5pbWF0aW9uOiB3YXJuMSAycyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiB3YXJuMSAycyBlYXNlLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMzBweCAjMzM5OWZmO1xuICAvKiDpmLTlvbHmlYjmnpwgKi9cbn0iLCIuaG9tZS1ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iamltZy96bHh0X2luZGV4XzAxLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLmltZy1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IC0yJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLml0ZW0ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItZ3Ege1xyXG4gICAgICAgICAgbGVmdDogNjUlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItZ3Ege1xyXG4gICAgICAgICAgbGVmdDogNDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIC8vIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyB3YXJuIHtcclxuICAgIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xyXG4gICAgb3BhY2l0eTogMC4wO1xyXG4gICAgfVxyXG4gICAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgfVxyXG4gICAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMC4wO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyB3YXJuMSB7XHJcbiAgICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxuICAgIH1cclxuICAgIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcclxuICAgIG9wYWNpdHk6IDAuMTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWdxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgLy8gbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIH1cclxuICAgIC8qIOS/neaMgeWkp+Wwj+S4jeWPmOeahOWwj+WchueCuSAqL1xyXG4gICAgLmRvdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBsZWZ0OiAxNHB4O1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzM2NjZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzNjY2ZmOyAvKiDlrp7lv4PlnIYg77yM5aaC5p6c5rKh5pyJ6L+Z5Liq5bCx5piv5LiA5Liq5bCP5ZyG5ZyIICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgLyog5Lqn55Sf5Yqo55S777yI5ZCR5aSW5omp5pWj5Y+Y5aSn77yJ55qE5ZyG5ZyIIOesrOS4gOS4quWchiAqL1xyXG4gICAgLnB1bHNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzk5ZmY7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogd2FybiAycyBlYXNlLW91dDtcclxuICAgIC1tb3otYW5pbWF0aW9uOiB3YXJuIDJzIGVhc2Utb3V0O1xyXG4gICAgYW5pbWF0aW9uOiB3YXJuIDJzIGVhc2Utb3V0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMzBweCAjMzM5OWZmOyAvKiDpmLTlvbHmlYjmnpwgKi9cclxuICAgIH1cclxuICAgIC8qIOS6p+eUn+WKqOeUu++8iOWQkeWkluaJqeaVo+WPmOWkp++8ieeahOWchuWciCDnrKzkuozkuKrlnIYgKi9cclxuICAgIC5wdWxzZTEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzOTlmZjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB3YXJuMSAycyBlYXNlLW91dDtcclxuICAgIC1tb3otYW5pbWF0aW9uOiB3YXJuMSAycyBlYXNlLW91dDtcclxuICAgIGFuaW1hdGlvbjogd2FybjEgMnMgZWFzZS1vdXQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzMHB4ICMzMzk5ZmY7IC8qIOmYtOW9seaViOaenCAqL1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map