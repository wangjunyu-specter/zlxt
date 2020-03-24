(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/*
 * @Author: wjy-mac
 * @Date: 2020-03-23 15:53:34
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-23 16:01:05
 * @Description: file content
 */





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/*
 * @Author: wjy-mac
 * @Date: 2020-03-23 15:53:34
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-23 16:03:52
 * @Description: file content
 */






class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 14, vars: 0, consts: [[1, "home-box"], [1, "img-item"], [1, "item"], ["src", "../../../assets/bjimg/index_left.png", "alt", ""], [1, "container-gq"], [1, "dot"], [1, "pulse"], [1, "pulse1"], ["src", "../../../assets/bjimg/index_right.png", "alt", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.home-box[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: url('zlxt_index_01.png');\n  background-size: 100% 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  \n  \n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%] {\n  margin-top: -2%;\n  width: auto;\n  height: 35%;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  flex-direction: row;\n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-of-type {\n  margin-right: 3%;\n}\n.home-box[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n@-webkit-keyframes warn {\n  0% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0;\n  }\n  25% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.1;\n  }\n  50% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5);\n    opacity: 0.3;\n  }\n  75% {\n    transform: scale(0.8);\n    -webkit-transform: scale(0.8);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0;\n  }\n}\n@keyframes warn {\n  0% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0;\n  }\n  25% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.1;\n  }\n  50% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5);\n    opacity: 0.3;\n  }\n  75% {\n    transform: scale(0.8);\n    -webkit-transform: scale(0.8);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes warn1 {\n  0% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0;\n  }\n  25% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.1;\n  }\n  50% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.3;\n  }\n  75% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(0.8);\n    -webkit-transform: scale(0.8);\n    opacity: 0;\n  }\n}\n@keyframes warn1 {\n  0% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0;\n  }\n  25% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.1;\n  }\n  50% {\n    transform: scale(0.3);\n    -webkit-transform: scale(0.3);\n    opacity: 0.3;\n  }\n  75% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(0.8);\n    -webkit-transform: scale(0.8);\n    opacity: 0;\n  }\n}\n.home-box[_ngcontent-%COMP%]   .container-gq[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  left: 50%;\n  top: 50%;\n  margin-left: -30px;\n  margin-top: -30px;\n}\n.home-box[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  left: 14px;\n  top: 14px;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border: 1px solid #33ccff;\n  border-radius: 50%;\n  background-color: #33ccff;\n  \n  z-index: 2;\n}\n.home-box[_ngcontent-%COMP%]   .pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  left: 0;\n  top: 0;\n  border: 1px solid #3399ff;\n  border-radius: 50%;\n  z-index: 1;\n  opacity: 0;\n  -webkit-animation: warn 2s ease-out;\n  animation: warn 2s ease-out;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  box-shadow: 1px 1px 30px #3399ff;\n  \n}\n.home-box[_ngcontent-%COMP%]   .pulse1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  left: 0;\n  top: 0;\n  border: 1px solid #3399ff;\n  border-radius: 50%;\n  z-index: 1;\n  opacity: 0;\n  -webkit-animation: warn1 2s ease-out;\n  animation: warn1 2s ease-out;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  box-shadow: 1px 1px 30px #3399ff;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvd2p5L0Rlc2t0b3Av56ef6LWB57O757ufL3pseHQvc3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFvRkUsZUFBQTtFQWNBLHlCQUFBO0VBcUJBLHlCQUFBO0FEbEhKO0FDSkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FETUo7QUNMSTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtBRE9OO0FDTk07RUFDRSxnQkFBQTtBRFFSO0FDTk07RUFFRSxZQUFBO0FET1I7QUNIRTtFQUNFO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtJQUNBLFVBQUE7RURLRjtFQ0hFO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtJQUNBLFlBQUE7RURLRjtFQ0hFO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtJQUNBLFlBQUE7RURLRjtFQ0hFO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtJQUNBLFlBQUE7RURLRjtFQ0hFO0lBQ0EsbUJBQUE7SUFDQSwyQkFBQTtJQUNBLFVBQUE7RURLRjtBQUNGO0FDOUJFO0VBQ0U7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsVUFBQTtFREtGO0VDSEU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREtGO0VDSEU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREtGO0VDSEU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREtGO0VDSEU7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0EsVUFBQTtFREtGO0FBQ0Y7QUNISTtFQUNBO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtJQUNBLFVBQUE7RURLRjtFQ0hFO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtJQUNBLFlBQUE7RURLRjtFQ0hFO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtJQUNBLFlBQUE7RURLRjtFQ0hFO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtJQUNBLFlBQUE7RURLRjtFQ0hFO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtJQUNBLFVBQUE7RURLRjtBQUNGO0FDOUJJO0VBQ0E7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsVUFBQTtFREtGO0VDSEU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREtGO0VDSEU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREtGO0VDSEU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFREtGO0VDSEU7SUFDQSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsVUFBQTtFREtGO0FBQ0Y7QUNISTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURLSjtBQ0ZJO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUEwQix1QkFBQTtFQUMxQixVQUFBO0FES0o7QUNGSTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBR0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO0VBRUEsMkJBQUE7RUFDQSwyQ0FBQTtFQUVBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFBa0MsU0FBQTtBREt0QztBQ0ZJO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFHQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFFQSw0QkFBQTtFQUNBLDJDQUFBO0VBRUEsbUNBQUE7RUFDQSxnQ0FBQTtFQUFrQyxTQUFBO0FES3RDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaG9tZS1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iamltZy96bHh0X2luZGV4XzAxLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyog5L+d5oyB5aSn5bCP5LiN5Y+Y55qE5bCP5ZyG54K5ICovXG4gIC8qIOS6p+eUn+WKqOeUu++8iOWQkeWkluaJqeaVo+WPmOWkp++8ieeahOWchuWciCDnrKzkuIDkuKrlnIYgKi9cbiAgLyog5Lqn55Sf5Yqo55S777yI5ZCR5aSW5omp5pWj5Y+Y5aSn77yJ55qE5ZyG5ZyIIOesrOS6jOS4quWchiAqL1xufVxuLmhvbWUtYm94IC5pbWctaXRlbSB7XG4gIG1hcmdpbi10b3A6IC0yJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uaG9tZS1ib3ggLmltZy1pdGVtIC5pdGVtIHtcbiAgZmxleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUtYm94IC5pbWctaXRlbSAuaXRlbTpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cbi5ob21lLWJveCAuaW1nLWl0ZW0gLml0ZW0gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuQGtleWZyYW1lcyB3YXJuIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgd2FybjEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5ob21lLWJveCAuY29udGFpbmVyLWdxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuLmhvbWUtYm94IC5kb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBsZWZ0OiAxNHB4O1xuICB0b3A6IDE0cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzY2NmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNjY2ZmO1xuICAvKiDlrp7lv4PlnIYg77yM5aaC5p6c5rKh5pyJ6L+Z5Liq5bCx5piv5LiA5Liq5bCP5ZyG5ZyIICovXG4gIHotaW5kZXg6IDI7XG59XG4uaG9tZS1ib3ggLnB1bHNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzk5ZmY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2FybiAycyBlYXNlLW91dDtcbiAgLW1vei1hbmltYXRpb246IHdhcm4gMnMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogd2FybiAycyBlYXNlLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMzBweCAjMzM5OWZmO1xuICAvKiDpmLTlvbHmlYjmnpwgKi9cbn1cbi5ob21lLWJveCAucHVsc2UxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzk5ZmY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2FybjEgMnMgZWFzZS1vdXQ7XG4gIC1tb3otYW5pbWF0aW9uOiB3YXJuMSAycyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiB3YXJuMSAycyBlYXNlLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMzBweCAjMzM5OWZmO1xuICAvKiDpmLTlvbHmlYjmnpwgKi9cbn0iLCIuaG9tZS1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iamltZy96bHh0X2luZGV4XzAxLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmltZy1pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAtMiU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAzNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC5pdGVtIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgICAgfVxuICAgICAgaW1nIHtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgd2FybiB7XG4gICAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgICBvcGFjaXR5OiAwLjA7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIH1cbiAgICA3NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDAuMDtcbiAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgd2FybjEge1xuICAgIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgb3BhY2l0eTogMC4wO1xuICAgIH1cbiAgICAyNSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgICBvcGFjaXR5OiAwLjE7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICB9XG4gICAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgb3BhY2l0eTogMC4wO1xuICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lci1ncSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIH1cbiAgICAvKiDkv53mjIHlpKflsI/kuI3lj5jnmoTlsI/lnIbngrkgKi9cbiAgICAuZG90IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBsZWZ0OiAxNHB4O1xuICAgIHRvcDogMTRweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzNjY2ZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzNjY2ZmOyAvKiDlrp7lv4PlnIYg77yM5aaC5p6c5rKh5pyJ6L+Z5Liq5bCx5piv5LiA5Liq5bCP5ZyG5ZyIICovXG4gICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgLyog5Lqn55Sf5Yqo55S777yI5ZCR5aSW5omp5pWj5Y+Y5aSn77yJ55qE5ZyG5ZyIIOesrOS4gOS4quWchiAqL1xuICAgIC5wdWxzZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzM5OWZmO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHdhcm4gMnMgZWFzZS1vdXQ7XG4gICAgLW1vei1hbmltYXRpb246IHdhcm4gMnMgZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uOiB3YXJuIDJzIGVhc2Utb3V0O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDMwcHggIzMzOTlmZjsgLyog6Zi05b2x5pWI5p6cICovXG4gICAgfVxuICAgIC8qIOS6p+eUn+WKqOeUu++8iOWQkeWkluaJqeaVo+WPmOWkp++8ieeahOWchuWciCDnrKzkuozkuKrlnIYgKi9cbiAgICAucHVsc2UxIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzk5ZmY7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogd2FybjEgMnMgZWFzZS1vdXQ7XG4gICAgLW1vei1hbmltYXRpb246IHdhcm4xIDJzIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbjogd2FybjEgMnMgZWFzZS1vdXQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMzBweCAjMzM5OWZmOyAvKiDpmLTlvbHmlYjmnpwgKi9cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map