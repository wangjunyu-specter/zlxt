(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["matching-matching-module"],{

/***/ "./src/app/matching/business/business.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/matching/business/business.component.ts ***!
  \*********************************************************/
/*! exports provided: BusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessComponent", function() { return BusinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sharedmodule/imgtitle/imgtitle.component */ "./src/app/sharedmodule/imgtitle/imgtitle.component.ts");
/* harmony import */ var _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sharedmodule/right-button/right-button.component */ "./src/app/sharedmodule/right-button/right-button.component.ts");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _sharedmodule_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sharedmodule/viewer/viewer.component */ "./src/app/sharedmodule/viewer/viewer.component.ts");







const _c0 = function () { return { "marginTop.px": 100 }; };
const _c1 = function () { return { "width.%": 90 }; };
class BusinessComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    setBack() {
        this.router.navigate(['/matching']);
    }
}
BusinessComponent.ɵfac = function BusinessComponent_Factory(t) { return new (t || BusinessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BusinessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusinessComponent, selectors: [["app-business"]], decls: 23, vars: 6, consts: [[1, "business-content"], [1, "page-title-box"], [3, "title"], [3, "name", "isclick"], [1, "content-cd", 3, "ngStyle.xs"], [1, "title"], [1, "three-box", 3, "ngStyle.xs"]], template: function BusinessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-imgtitle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-right-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isclick", function BusinessComponent_Template_app_right_button_isclick_3_listener() { return ctx.setBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u6210\u90FD\u4E2D\u8FBE\u6295\u8D44\u6709\u9650\u516C\u53F8\u6210\u7ACB\u4E8E2010\u5E74\uFF0C\u7531\u6210\u90FD\u4E30\u5FB7\u4F01\u4E1A\u53D1\u5C55\uFF08\u96C6\u56E2\uFF09\u6709\u9650\u516C\u53F8\u3001\u4E2D\u56FD\u6210\u8FBE\u5DE5\u7A0B\u6709\u9650\u516C\u53F8\u5171\u540C\u51FA\u8D44\u7EC4\u5EFA\u800C\u6210\uFF0C\u6CE8\u518C\u8D44\u91D1\u4EBA\u6C11\u5E01\u634C\u4EDF\u4E07\u5143\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u4E30\u5FB7\u96C6\u56E2\u7684\u524D\u8EAB\u662F\u6210\u90FD\u9752\u5E74\u623F\u5730\u4EA7\u5F00\u53D1\u516C\u53F8\uFF0C30\u5E74\u6765\uFF0C\u7ACB\u8DB3\u6210\u90FD\uFF0C\u4E3A\u6210\u90FD\u5E02\u573A\u5949\u732E\u4E86\u4E30\u5FB7\u56FD\u9645\u5E7F\u573A\u3001\u4E30\u5FB7\u4E07\u745E\u4E2D\u5FC3\u3001\u91D1\u6C99\u4E07\u745E\u4E2D\u5FC3\u3001\u4E30\u5FB7\u7F8A\u897F\u4E2D\u5FC3\u7B49\u9AD8\u54C1\u8D28\u5546\u52A1\u7A7A\u95F4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u4E2D\u56FD\u6210\u8FBE\u5DE5\u7A0B\u6709\u9650\u516C\u53F8\u662F\u4E2D\u56FD\u5316\u5B66\u5DE5\u7A0B\u96C6\u56E2\u516C\u53F8\u4E0B\u5C5E\u5B50\u516C\u53F8\uFF0C\u521B\u7ACB\u4E8E20\u4E16\u7EAA50\u5E74\u4EE3\uFF0C\u516C\u53F8\u62E5\u6709\u96C4\u539A\u7684\u8D44\u91D1\u5B9E\u529B\u548C\u4E30\u5BCC\u7684\u6295\u8D44\u7ECF\u9A8C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u201C\u4E30\u5FB7\u6210\u8FBE\u4E2D\u5FC3\u201D\u9879\u76EE\u4E3A\u6210\u90FD\u4E2D\u8FBE\u6295\u8D44\u6709\u9650\u516C\u53F8\u5728\u9752\u7F8A\u533A\u6253\u9020\u7684\u9AD8\u7AEF\u5546\u52A1\u7EFC\u5408\u4F53\uFF0C\u662F\u6210\u90FD\u5E02\u91CD\u70B9\u9879\u76EE\u53CA\u9752\u7F8A\u533A\u91CD\u70B9\u9879\u76EE\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u697C\u5B87\u57FA\u672C\u60C5\u51B5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u4E30\u5FB7\u6210\u8FBE\u4E2D\u5FC3\u4F4D\u4E8E\u6210\u90FD\u5E02\u9752\u7F8A\u533A\u9F13\u697C\u5357\u885799\u53F7\uFF0C\u897F\u4E34\u6210\u90FD\u5E02\u533A\u4E3B\u5E72\u9053\u987A\u57CE\u5927\u8857\uFF0C\u4E1C\u4E34\u9F13\u697C\u5357\u8857\uFF0C\u5317\u4FA7\u4E3A\u4E16\u8D38\u4E2D\u5FC3\u5927\u53A6\uFF0C\u5357\u4FA7\u4E3A\u539F\u6210\u8FBE\u516C\u53F8\u804C\u5DE5\u4F4F\u5B85\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u9884\u8BA1\u7AE3\u5DE5\u65F6\u95F4\u4E3A2019\u5E746\u6708\u3002\u7528\u5730\u9762\u79EF\u7EA61.18\u4E07\u5E73\u65B9\u7C73\uFF0C\u5EFA\u7B51\u603B\u9762\u79EF\u4E3A17.20\u4E07\u5E73\u65B9\u7C73\uFF0C\u75314\u5C42\u5730\u4E0B\u5BA4\uFF0C1\u680B\u7EFC\u5408\u697C\u53CA1\u680B\u4F4F\u5B85\u7EC4\u6210\u3002\u4F4F\u5B85\u5730\u4E0A\u603B\u5C42\u65706\u5C42\uFF0C\u7EFC\u5408\u697C\u5730\u4E0A\u603B\u5C42\u657047\u5C42\uFF0C\u5176\u4E2D1-5\u5C42\u4E3A\u5546\u4E1A\u7528\u623F\uFF0C6-47\u5C42\u4E3A\u7532\u7EA7\u5199\u5B57\u697C\u3002\u5730\u4E0B4\u5C42\uFF0C\u542B\u505C\u8F66\u4F4D749\u4E2A\uFF0C\u7535\u68AF31\u90E8\u3002\u529E\u516C\u697C\u53EF\u79DF\u552E\u9762\u79EF\u4E3A99515.18\u33A1\uFF0C\u5546\u4E1A\u53EF\u79DF\u552E\u9762\u79EF\u4E3A16660.67\u33A1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u4EA7\u6743\u65B9\u4E3A\u6210\u90FD\u4E2D\u8FBE\u6295\u8D44\u6709\u9650\u516C\u53F8\uFF0C\u7269\u4E1A\u516C\u53F8\u73B0\u4E3A\u6210\u90FD\u5229\u4E30\u7269\u4E1A\u6709\u9650\u516C\u53F8\uFF0C\u76EE\u524D\u9879\u76EE\u5728\u5EFA\u8BBE\u4E2D\uFF0C\u5C1A\u672A\u5BF9\u5916\u62DB\u5546\u53CA\u51FA\u552E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "ptfw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "\u8FD4\u56DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [_sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_2__["ImgtitleComponent"], _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_3__["RightButtonComponent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultStyleDirective"], _sharedmodule_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ViewerComponent"]], styles: [".page-title-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.3rem;\n  left: 0.3rem;\n  width: calc(100% - .3rem);\n}\n\n.business-content[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #484747;\n  line-height: 30px;\n  position: relative;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-image: url('hxzs2.jpg');\n}\n\n.business-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-indent: 2em;\n  margin-top: 20px;\n}\n\n.business-content[_ngcontent-%COMP%]   .content-cd[_ngcontent-%COMP%] {\n  margin-top: 1.7rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  padding: 1px 0;\n}\n\n.business-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.business-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.three-box[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 30px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC/pobnnm64v56ef6LWB57O757ufL3pseHQvc3JjL2FwcC9tYXRjaGluZy9idXNpbmVzcy9idXNpbmVzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0Y2hpbmcvYnVzaW5lc3MvYnVzaW5lc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDRUY7O0FEREU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURBQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvbWF0Y2hpbmcvYnVzaW5lc3MvYnVzaW5lc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10aXRsZS1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLjNyZW07XG4gIGxlZnQ6IC4zcmVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gLjNyZW0pO1xufVxuLmJ1c2luZXNzLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjNDg0NzQ3O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmppbWcvaHh6czIuanBnKTtcbiAgcCB7XG4gICAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC5jb250ZW50LWNkIHtcbiAgICBtYXJnaW4tdG9wOiAxLjdyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgcGFkZGluZzogMXB4IDA7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi50aHJlZS1ib3gge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDMwcHggYXV0bztcbn0iLCIucGFnZS10aXRsZS1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC4zcmVtO1xuICBsZWZ0OiAwLjNyZW07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAuM3JlbSk7XG59XG5cbi5idXNpbmVzcy1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzQ4NDc0NztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iamltZy9oeHpzMi5qcGcpO1xufVxuLmJ1c2luZXNzLWNvbnRlbnQgcCB7XG4gIHRleHQtaW5kZW50OiAyZW07XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYnVzaW5lc3MtY29udGVudCAuY29udGVudC1jZCB7XG4gIG1hcmdpbi10b3A6IDEuN3JlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIHBhZGRpbmc6IDFweCAwO1xufVxuLmJ1c2luZXNzLWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYnVzaW5lc3MtY29udGVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRocmVlLWJveCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusinessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-business',
                templateUrl: './business.component.html',
                styleUrls: ['./business.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/matching/matching-home/matching-home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/matching/matching-home/matching-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: MatchingHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchingHomeComponent", function() { return MatchingHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MatchingHomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MatchingHomeComponent.ɵfac = function MatchingHomeComponent_Factory(t) { return new (t || MatchingHomeComponent)(); };
MatchingHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatchingHomeComponent, selectors: [["app-matching-home"]], decls: 1, vars: 0, template: function MatchingHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGNoaW5nL21hdGNoaW5nLWhvbWUvbWF0Y2hpbmctaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchingHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-matching-home',
                templateUrl: './matching-home.component.html',
                styleUrls: ['./matching-home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/matching/matching-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/matching/matching-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MatchingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchingRoutingModule", function() { return MatchingRoutingModule; });
/* harmony import */ var _propertyservices_propertyservices_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propertyservices/propertyservices.component */ "./src/app/matching/propertyservices/propertyservices.component.ts");
/* harmony import */ var _business_business_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business/business.component */ "./src/app/matching/business/business.component.ts");
/* harmony import */ var _matching_matching_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matching/matching.component */ "./src/app/matching/matching/matching.component.ts");
/* harmony import */ var _matching_home_matching_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matching-home/matching-home.component */ "./src/app/matching/matching-home/matching-home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 10:12:46
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-26 22:44:28
 * @Description: file content
 */







const routes = [
    {
        path: '',
        component: _matching_home_matching_home_component__WEBPACK_IMPORTED_MODULE_3__["MatchingHomeComponent"],
        children: [
            { path: '', component: _matching_matching_component__WEBPACK_IMPORTED_MODULE_2__["MatchingComponent"] },
            { path: 'propertyservices', component: _propertyservices_propertyservices_component__WEBPACK_IMPORTED_MODULE_0__["PropertyservicesComponent"] },
            { path: 'business', component: _business_business_component__WEBPACK_IMPORTED_MODULE_1__["BusinessComponent"] }
        ]
    }
];
class MatchingRoutingModule {
}
MatchingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MatchingRoutingModule });
MatchingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function MatchingRoutingModule_Factory(t) { return new (t || MatchingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatchingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatchingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/matching/matching.module.ts":
/*!*********************************************!*\
  !*** ./src/app/matching/matching.module.ts ***!
  \*********************************************/
/*! exports provided: MatchingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchingModule", function() { return MatchingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _matching_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matching-routing.module */ "./src/app/matching/matching-routing.module.ts");
/* harmony import */ var _matching_matching_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matching/matching.component */ "./src/app/matching/matching/matching.component.ts");
/* harmony import */ var _propertyservices_propertyservices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./propertyservices/propertyservices.component */ "./src/app/matching/propertyservices/propertyservices.component.ts");
/* harmony import */ var _matching_home_matching_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matching-home/matching-home.component */ "./src/app/matching/matching-home/matching-home.component.ts");
/* harmony import */ var _business_business_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./business/business.component */ "./src/app/matching/business/business.component.ts");
/* harmony import */ var _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedmodule/sharedmodule.module */ "./src/app/sharedmodule/sharedmodule.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 10:12:46
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-06 22:12:00
 * @Description: file content
 */










class MatchingModule {
}
MatchingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatchingModule });
MatchingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatchingModule_Factory(t) { return new (t || MatchingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _matching_routing_module__WEBPACK_IMPORTED_MODULE_2__["MatchingRoutingModule"],
            _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_7__["SharedmoduleModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatchingModule, { declarations: [_matching_matching_component__WEBPACK_IMPORTED_MODULE_3__["MatchingComponent"],
        _propertyservices_propertyservices_component__WEBPACK_IMPORTED_MODULE_4__["PropertyservicesComponent"],
        _matching_home_matching_home_component__WEBPACK_IMPORTED_MODULE_5__["MatchingHomeComponent"],
        _business_business_component__WEBPACK_IMPORTED_MODULE_6__["BusinessComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _matching_routing_module__WEBPACK_IMPORTED_MODULE_2__["MatchingRoutingModule"],
        _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_7__["SharedmoduleModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _matching_matching_component__WEBPACK_IMPORTED_MODULE_3__["MatchingComponent"],
                    _propertyservices_propertyservices_component__WEBPACK_IMPORTED_MODULE_4__["PropertyservicesComponent"],
                    _matching_home_matching_home_component__WEBPACK_IMPORTED_MODULE_5__["MatchingHomeComponent"],
                    _business_business_component__WEBPACK_IMPORTED_MODULE_6__["BusinessComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _matching_routing_module__WEBPACK_IMPORTED_MODULE_2__["MatchingRoutingModule"],
                    _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_7__["SharedmoduleModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/matching/matching/matching.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/matching/matching/matching.component.ts ***!
  \*********************************************************/
/*! exports provided: MatchingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchingComponent", function() { return MatchingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");




const _c0 = function () { return { "flexDirection": "column", "justifyContent": "center", "alignItems": "center;" }; };
const _c1 = function () { return { "width.%": 29 }; };
const _c2 = function () { return { "width.%": 33 }; };
const _c3 = function () { return { "width.%": 50, "textAlign": "center" }; };
const _c4 = function () { return { "width.%": 70, "marginBottom.px": 20 }; };
const _c5 = function () { return { "width.%": 65, "display": "inline-block" }; };
const _c6 = function () { return { "fontSize.px": 20, "marginTop.px": 20 }; };
const _c7 = function () { return { "fontSize.px": 17, "marginTop.px": 20 }; };
const _c8 = function () { return { "fontSize.px": 20 }; };
const _c9 = function () { return { "fontSize.px": 17.2 }; };
const _c10 = function () { return { "width.%": 70 }; };
class MatchingComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    /**
     * @Author: wjy-mac
     * @description: 跳转页面
     * @Date: 2020-03-26 10:22:13
     * @param {type} path 路由地址
     * @return:
     */
    openPage(path) {
        this.router.navigate([path]);
    }
}
MatchingComponent.ɵfac = function MatchingComponent_Factory(t) { return new (t || MatchingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MatchingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatchingComponent, selectors: [["app-matching"]], decls: 18, vars: 38, consts: [[1, "list-content"], [1, "img-content", 3, "ngStyle.xs"], [1, "item", 3, "ngStyle.lg", "ngStyle.md", "ngStyle.sm", "ngStyle.xs"], [1, "img-box", 3, "ngStyle.sm"], [3, "click"], ["src", "../../../assets/lsimg/js_03.png", "alt", ""], [1, "name", 3, "ngStyle.xs", "ngStyle.sm"], [1, "name1", 3, "ngStyle.xs", "ngStyle.sm"], ["src", "../../../assets/lsimg/js_04.png", "alt", ""]], template: function MatchingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchingComponent_Template_div_click_4_listener() { return ctx.openPage("/matching/propertyservices"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u7269\u4E1A\u670D\u52A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u7269\u4E1A\u670D\u52A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchingComponent_Template_div_click_12_listener() { return ctx.openPage("/matching/business"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u5546\u4E1A\u914D\u5957");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u5546\u4E1A\u914D\u5957");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.lg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1))("ngStyle.md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2))("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3))("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c6))("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c8))("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.lg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1))("ngStyle.md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c2))("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c3))("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c6))("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c8))("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c9));
    } }, directives: [_angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"]], styles: [".list-content[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: url('zlxt_index_01.jpg');\n  background-size: 100% 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: -2px 2px 5px #616060;\n  border: 2px solid #decbba;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: 2px solid #281f16;\n  border-radius: 10px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n  background-image: linear-gradient(#eabe8e, #84844e, #000);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  position: relative;\n  z-index: 2;\n  line-height: 30px;\n  font-size: 27px;\n  font-weight: 500;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 30px;\n  margin-top: -30px;\n  position: relative;\n  z-index: 1;\n  font-size: 27.2px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC/pobnnm64v56ef6LWB57O757ufL3pseHQvc3JjL2FwcC9tYXRjaGluZy9tYXRjaGluZy9tYXRjaGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0Y2hpbmcvbWF0Y2hpbmcvbWF0Y2hpbmcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvd2p5L0Rlc2t0b3Av6aG555uuL+enn+i1geezu+e7ny96bHh0L3NyYy9hcHAvY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUY7QURDRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURBSTtFQUNFLFVBQUE7QUNFTjtBRERNO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDR1I7QURGUTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDSVY7QURETTtFQUNFLFdBQUE7QUNHUjtBRERNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFRXRDTix5REFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCRmlDNkI7RUVoQzdCLGVGZ0N1QjtFRS9CdkIsZ0JGK0JtQztBQ1dyQztBRFRNO0VBQ0Usa0JBQUE7RUU3Qk4sK0JBQUE7RUFDQSxpQkY2QitCO0VFNUIvQixpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUR5Q0YiLCJmaWxlIjoic3JjL2FwcC9tYXRjaGluZy9tYXRjaGluZy9tYXRjaGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2NvbG9yLnNjc3MnO1xuLmxpc3QtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JqaW1nL3pseHRfaW5kZXhfMDEuanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuaW1nLWNvbnRlbnQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAuaXRlbSB7XG4gICAgICB3aWR0aDogMzUlO1xuICAgICAgLmltZy1ib3gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogLTJweCAycHggNXB4ICM2MTYwNjA7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZWNiYmE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzI4MWYxNjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubmFtZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgQGluY2x1ZGUgYmdjb2xvcigyN3B4LCAzMHB4LCA1MDApO1xuICAgICAgfVxuICAgICAgLm5hbWUxIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBAaW5jbHVkZSBiZ2NvbG9yeXkoMjdweCwgMzBweCwgNTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIubGlzdC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYmppbWcvemx4dF9pbmRleF8wMS5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubGlzdC1jb250ZW50IC5pbWctY29udGVudCB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4ubGlzdC1jb250ZW50IC5pbWctY29udGVudCAuaXRlbSB7XG4gIHdpZHRoOiAzNSU7XG59XG4ubGlzdC1jb250ZW50IC5pbWctY29udGVudCAuaXRlbSAuaW1nLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAtMnB4IDJweCA1cHggIzYxNjA2MDtcbiAgYm9yZGVyOiAycHggc29saWQgI2RlY2JiYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5saXN0LWNvbnRlbnQgLmltZy1jb250ZW50IC5pdGVtIC5pbWctYm94IGRpdiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyODFmMTY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGlzdC1jb250ZW50IC5pbWctY29udGVudCAuaXRlbSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5saXN0LWNvbnRlbnQgLmltZy1jb250ZW50IC5pdGVtIC5uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2VhYmU4ZSwgIzg0ODQ0ZSwgIzAwMCk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmxpc3QtY29udGVudCAuaW1nLWNvbnRlbnQgLml0ZW0gLm5hbWUxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAyNy4ycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59IiwiQG1peGluIGJnY29sb3IoJGZvbnQsICRoZWlnaHQsICR3aWR0aCkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2VhYmU4ZSwgIzg0ODQ0ZSwgIzAwMCk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBsaW5lLWhlaWdodDogJGhlaWdodDtcbiAgZm9udC1zaXplOiAkZm9udDtcbiAgZm9udC13ZWlnaHQ6ICR3aWR0aDtcblxufVxuXG5AbWl4aW4gYmdjb2xvcnl5KCRmb250LCAkaGVpZ2h0LCAkd2lkdGgpIHtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xuICBsaW5lLWhlaWdodDogJGhlaWdodDtcbiAgbWFyZ2luLXRvcDogLSRoZWlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAkZm9udCArIDAuMnB4O1xuICBmb250LXdlaWdodDogJHdpZHRoICsgMjAwO1xuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-matching',
                templateUrl: './matching.component.html',
                styleUrls: ['./matching.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/matching/propertyservices/propertyservices.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/matching/propertyservices/propertyservices.component.ts ***!
  \*************************************************************************/
/*! exports provided: PropertyservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyservicesComponent", function() { return PropertyservicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sharedmodule/imgtitle/imgtitle.component */ "./src/app/sharedmodule/imgtitle/imgtitle.component.ts");
/* harmony import */ var _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sharedmodule/right-button/right-button.component */ "./src/app/sharedmodule/right-button/right-button.component.ts");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _sharedmodule_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sharedmodule/viewer/viewer.component */ "./src/app/sharedmodule/viewer/viewer.component.ts");







const _c0 = function () { return { "marginTop.px": 100 }; };
const _c1 = function () { return { "width.%": 90 }; };
class PropertyservicesComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    setBack() {
        this.router.navigate(['/matching']);
    }
}
PropertyservicesComponent.ɵfac = function PropertyservicesComponent_Factory(t) { return new (t || PropertyservicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PropertyservicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PropertyservicesComponent, selectors: [["app-propertyservices"]], decls: 21, vars: 6, consts: [[1, "propertyservices-content"], [1, "page-title-box"], [3, "title"], [3, "name", "isclick"], [1, "content-cd", 3, "ngStyle.xs"], [1, "three-box", 3, "ngStyle.xs"]], template: function PropertyservicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-imgtitle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-right-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isclick", function PropertyservicesComponent_Template_app_right_button_isclick_3_listener() { return ctx.setBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u6210\u90FD\u4E2D\u8FBE\u6295\u8D44\u6709\u9650\u516C\u53F8\u6210\u7ACB\u4E8E2010\u5E74\uFF0C\u7531\u6210\u90FD\u4E30\u5FB7\u4F01\u4E1A\u53D1\u5C55\uFF08\u96C6\u56E2\uFF09\u6709\u9650\u516C\u53F8\u3001\u4E2D\u56FD\u6210\u8FBE\u5DE5\u7A0B\u6709\u9650\u516C\u53F8\u5171\u540C\u51FA\u8D44\u7EC4\u5EFA\u800C\u6210\uFF0C\u6CE8\u518C\u8D44\u91D1\u4EBA\u6C11\u5E01\u634C\u4EDF\u4E07\u5143\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u4E30\u5FB7\u96C6\u56E2\u7684\u524D\u8EAB\u662F\u6210\u90FD\u9752\u5E74\u623F\u5730\u4EA7\u5F00\u53D1\u516C\u53F8\uFF0C30\u5E74\u6765\uFF0C\u7ACB\u8DB3\u6210\u90FD\uFF0C\u4E3A\u6210\u90FD\u5E02\u573A\u5949\u732E\u4E86\u4E30\u5FB7\u56FD\u9645\u5E7F\u573A\u3001\u4E30\u5FB7\u4E07\u745E\u4E2D\u5FC3\u3001\u91D1\u6C99\u4E07\u745E\u4E2D\u5FC3\u3001\u4E30\u5FB7\u7F8A\u897F\u4E2D\u5FC3\u7B49\u9AD8\u54C1\u8D28\u5546\u52A1\u7A7A\u95F4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u4E2D\u56FD\u6210\u8FBE\u5DE5\u7A0B\u6709\u9650\u516C\u53F8\u662F\u4E2D\u56FD\u5316\u5B66\u5DE5\u7A0B\u96C6\u56E2\u516C\u53F8\u4E0B\u5C5E\u5B50\u516C\u53F8\uFF0C\u521B\u7ACB\u4E8E20\u4E16\u7EAA50\u5E74\u4EE3\uFF0C\u516C\u53F8\u62E5\u6709\u96C4\u539A\u7684\u8D44\u91D1\u5B9E\u529B\u548C\u4E30\u5BCC\u7684\u6295\u8D44\u7ECF\u9A8C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u201C\u4E30\u5FB7\u6210\u8FBE\u4E2D\u5FC3\u201D\u9879\u76EE\u4E3A\u6210\u90FD\u4E2D\u8FBE\u6295\u8D44\u6709\u9650\u516C\u53F8\u5728\u9752\u7F8A\u533A\u6253\u9020\u7684\u9AD8\u7AEF\u5546\u52A1\u7EFC\u5408\u4F53\uFF0C\u662F\u6210\u90FD\u5E02\u91CD\u70B9\u9879\u76EE\u53CA\u9752\u7F8A\u533A\u91CD\u70B9\u9879\u76EE\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u4E30\u5FB7\u6210\u8FBE\u4E2D\u5FC3\u4F4D\u4E8E\u6210\u90FD\u5E02\u9752\u7F8A\u533A\u9F13\u697C\u5357\u885799\u53F7\uFF0C\u897F\u4E34\u6210\u90FD\u5E02\u533A\u4E3B\u5E72\u9053\u987A\u57CE\u5927\u8857\uFF0C\u4E1C\u4E34\u9F13\u697C\u5357\u8857\uFF0C\u5317\u4FA7\u4E3A\u4E16\u8D38\u4E2D\u5FC3\u5927\u53A6\uFF0C\u5357\u4FA7\u4E3A\u539F\u6210\u8FBE\u516C\u53F8\u804C\u5DE5\u4F4F\u5B85\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u9884\u8BA1\u7AE3\u5DE5\u65F6\u95F4\u4E3A2019\u5E746\u6708\u3002\u7528\u5730\u9762\u79EF\u7EA61.18\u4E07\u5E73\u65B9\u7C73\uFF0C\u5EFA\u7B51\u603B\u9762\u79EF\u4E3A17.20\u4E07\u5E73\u65B9\u7C73\uFF0C\u75314\u5C42\u5730\u4E0B\u5BA4\uFF0C1\u680B\u7EFC\u5408\u697C\u53CA1\u680B\u4F4F\u5B85\u7EC4\u6210\u3002\u4F4F\u5B85\u5730\u4E0A\u603B\u5C42\u65706\u5C42\uFF0C\u7EFC\u5408\u697C\u5730\u4E0A\u603B\u5C42\u657047\u5C42\uFF0C\u5176\u4E2D1-5\u5C42\u4E3A\u5546\u4E1A\u7528\u623F\uFF0C6-47\u5C42\u4E3A\u7532\u7EA7\u5199\u5B57\u697C\u3002\u5730\u4E0B4\u5C42\uFF0C\u542B\u505C\u8F66\u4F4D749\u4E2A\uFF0C\u7535\u68AF31\u90E8\u3002\u529E\u516C\u697C\u53EF\u79DF\u552E\u9762\u79EF\u4E3A99515.18\u33A1\uFF0C\u5546\u4E1A\u53EF\u79DF\u552E\u9762\u79EF\u4E3A16660.67\u33A1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u4EA7\u6743\u65B9\u4E3A\u6210\u90FD\u4E2D\u8FBE\u6295\u8D44\u6709\u9650\u516C\u53F8\uFF0C\u7269\u4E1A\u516C\u53F8\u73B0\u4E3A\u6210\u90FD\u5229\u4E30\u7269\u4E1A\u6709\u9650\u516C\u53F8\uFF0C\u76EE\u524D\u9879\u76EE\u5728\u5EFA\u8BBE\u4E2D\uFF0C\u5C1A\u672A\u5BF9\u5916\u62DB\u5546\u53CA\u51FA\u552E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "wyfw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "\u8FD4\u56DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [_sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_2__["ImgtitleComponent"], _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_3__["RightButtonComponent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultStyleDirective"], _sharedmodule_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ViewerComponent"]], styles: [".page-title-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.3rem;\n  left: 0.3rem;\n  width: calc(100% - .3rem);\n}\n\n.propertyservices-content[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #484747;\n  line-height: 30px;\n  position: relative;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-image: url('hxzs2.jpg');\n}\n\n.propertyservices-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-indent: 2em;\n  margin-top: 20px;\n}\n\n.propertyservices-content[_ngcontent-%COMP%]   .content-cd[_ngcontent-%COMP%] {\n  margin-top: 1.7rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  padding: 1px 0;\n}\n\n.propertyservices-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.propertyservices-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.three-box[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 30px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC/pobnnm64v56ef6LWB57O757ufL3pseHQvc3JjL2FwcC9tYXRjaGluZy9wcm9wZXJ0eXNlcnZpY2VzL3Byb3BlcnR5c2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hdGNoaW5nL3Byb3BlcnR5c2VydmljZXMvcHJvcGVydHlzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNFRjs7QURERTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9tYXRjaGluZy9wcm9wZXJ0eXNlcnZpY2VzL3Byb3BlcnR5c2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10aXRsZS1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLjNyZW07XG4gIGxlZnQ6IC4zcmVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gLjNyZW0pO1xufVxuLnByb3BlcnR5c2VydmljZXMtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICM0ODQ3NDc7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iamltZy9oeHpzMi5qcGcpO1xuICBwIHtcbiAgICB0ZXh0LWluZGVudDogMmVtO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLmNvbnRlbnQtY2Qge1xuICAgIG1hcmdpbi10b3A6IDEuN3JlbTtcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICBwYWRkaW5nOiAxcHggMDtcbiAgfVxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuLnRocmVlLWJveCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufSIsIi5wYWdlLXRpdGxlLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjNyZW07XG4gIGxlZnQ6IDAuM3JlbTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIC4zcmVtKTtcbn1cblxuLnByb3BlcnR5c2VydmljZXMtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICM0ODQ3NDc7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmppbWcvaHh6czIuanBnKTtcbn1cbi5wcm9wZXJ0eXNlcnZpY2VzLWNvbnRlbnQgcCB7XG4gIHRleHQtaW5kZW50OiAyZW07XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucHJvcGVydHlzZXJ2aWNlcy1jb250ZW50IC5jb250ZW50LWNkIHtcbiAgbWFyZ2luLXRvcDogMS43cmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgcGFkZGluZzogMXB4IDA7XG59XG4ucHJvcGVydHlzZXJ2aWNlcy1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnByb3BlcnR5c2VydmljZXMtY29udGVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRocmVlLWJveCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyservicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-propertyservices',
                templateUrl: './propertyservices.component.html',
                styleUrls: ['./propertyservices.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=matching-matching-module-es2015.js.map