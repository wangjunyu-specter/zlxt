function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["matching-matching-module"], {
  /***/
  "./src/app/matching/business/business.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/matching/business/business.component.ts ***!
    \*********************************************************/

  /*! exports provided: BusinessComponent */

  /***/
  function srcAppMatchingBusinessBusinessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusinessComponent", function () {
      return BusinessComponent;
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


    var _sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../sharedmodule/imgtitle/imgtitle.component */
    "./src/app/sharedmodule/imgtitle/imgtitle.component.ts");
    /* harmony import */


    var _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../sharedmodule/right-button/right-button.component */
    "./src/app/sharedmodule/right-button/right-button.component.ts");
    /* harmony import */


    var _sharedmodule_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../sharedmodule/viewer/viewer.component */
    "./src/app/sharedmodule/viewer/viewer.component.ts");

    var BusinessComponent =
    /*#__PURE__*/
    function () {
      function BusinessComponent(router) {
        _classCallCheck(this, BusinessComponent);

        this.router = router;
      }

      _createClass(BusinessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setBack",
        value: function setBack() {
          this.router.navigate(['/matching']);
        }
      }]);

      return BusinessComponent;
    }();

    BusinessComponent.ɵfac = function BusinessComponent_Factory(t) {
      return new (t || BusinessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    BusinessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BusinessComponent,
      selectors: [["app-business"]],
      decls: 23,
      vars: 2,
      consts: [[1, "business-content"], [1, "page-title-box"], [3, "title"], [3, "name", "isclick"], [1, "content-cd"], [1, "title"], [1, "three-box"]],
      template: function BusinessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-imgtitle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-right-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isclick", function BusinessComponent_Template_app_right_button_isclick_3_listener() {
            return ctx.setBack();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "ptfw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "\u8FD4\u56DE");
        }
      },
      directives: [_sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_2__["ImgtitleComponent"], _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_3__["RightButtonComponent"], _sharedmodule_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__["ViewerComponent"]],
      styles: [".page-title-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.3rem;\n  left: 0.3rem;\n  width: calc(100% - .3rem);\n}\n\n.business-content[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #484747;\n  line-height: 30px;\n  position: relative;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-image: url('hxzs2.jpg');\n}\n\n.business-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-indent: 2em;\n  margin-top: 20px;\n}\n\n.business-content[_ngcontent-%COMP%]   .content-cd[_ngcontent-%COMP%] {\n  margin-top: 1.7rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  padding: 1px 0;\n}\n\n.business-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.business-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.three-box[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 30px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC/np5/otYHns7vnu58vemx4dC9zcmMvYXBwL21hdGNoaW5nL2J1c2luZXNzL2J1c2luZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXRjaGluZy9idXNpbmVzcy9idXNpbmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNFRjs7QURERTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9tYXRjaGluZy9idXNpbmVzcy9idXNpbmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAuM3JlbTtcbiAgbGVmdDogLjNyZW07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAuM3JlbSk7XG59XG4uYnVzaW5lc3MtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICM0ODQ3NDc7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iamltZy9oeHpzMi5qcGcpO1xuICBwIHtcbiAgICB0ZXh0LWluZGVudDogMmVtO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLmNvbnRlbnQtY2Qge1xuICAgIG1hcmdpbi10b3A6IDEuN3JlbTtcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICBwYWRkaW5nOiAxcHggMDtcbiAgfVxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuLnRocmVlLWJveCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufSIsIi5wYWdlLXRpdGxlLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjNyZW07XG4gIGxlZnQ6IDAuM3JlbTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIC4zcmVtKTtcbn1cblxuLmJ1c2luZXNzLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjNDg0NzQ3O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JqaW1nL2h4enMyLmpwZyk7XG59XG4uYnVzaW5lc3MtY29udGVudCBwIHtcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5idXNpbmVzcy1jb250ZW50IC5jb250ZW50LWNkIHtcbiAgbWFyZ2luLXRvcDogMS43cmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgcGFkZGluZzogMXB4IDA7XG59XG4uYnVzaW5lc3MtY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5idXNpbmVzcy1jb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udGhyZWUtYm94IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusinessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-business',
          templateUrl: './business.component.html',
          styleUrls: ['./business.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/matching/matching-home/matching-home.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/matching/matching-home/matching-home.component.ts ***!
    \*******************************************************************/

  /*! exports provided: MatchingHomeComponent */

  /***/
  function srcAppMatchingMatchingHomeMatchingHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchingHomeComponent", function () {
      return MatchingHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MatchingHomeComponent =
    /*#__PURE__*/
    function () {
      function MatchingHomeComponent() {
        _classCallCheck(this, MatchingHomeComponent);
      }

      _createClass(MatchingHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MatchingHomeComponent;
    }();

    MatchingHomeComponent.ɵfac = function MatchingHomeComponent_Factory(t) {
      return new (t || MatchingHomeComponent)();
    };

    MatchingHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatchingHomeComponent,
      selectors: [["app-matching-home"]],
      decls: 1,
      vars: 0,
      template: function MatchingHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGNoaW5nL21hdGNoaW5nLWhvbWUvbWF0Y2hpbmctaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchingHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-matching-home',
          templateUrl: './matching-home.component.html',
          styleUrls: ['./matching-home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/matching/matching-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/matching/matching-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: MatchingRoutingModule */

  /***/
  function srcAppMatchingMatchingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchingRoutingModule", function () {
      return MatchingRoutingModule;
    });
    /* harmony import */


    var _propertyservices_propertyservices_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./propertyservices/propertyservices.component */
    "./src/app/matching/propertyservices/propertyservices.component.ts");
    /* harmony import */


    var _business_business_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./business/business.component */
    "./src/app/matching/business/business.component.ts");
    /* harmony import */


    var _matching_matching_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./matching/matching.component */
    "./src/app/matching/matching/matching.component.ts");
    /* harmony import */


    var _matching_home_matching_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./matching-home/matching-home.component */
    "./src/app/matching/matching-home/matching-home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /*
     * @Author: wjy-mac
     * @Date: 2020-03-26 10:12:46
     * @LastEditors: wjy-mac
     * @LastEditTime: 2020-03-26 22:44:28
     * @Description: file content
     */


    var routes = [{
      path: '',
      component: _matching_home_matching_home_component__WEBPACK_IMPORTED_MODULE_3__["MatchingHomeComponent"],
      children: [{
        path: '',
        component: _matching_matching_component__WEBPACK_IMPORTED_MODULE_2__["MatchingComponent"]
      }, {
        path: 'propertyservices',
        component: _propertyservices_propertyservices_component__WEBPACK_IMPORTED_MODULE_0__["PropertyservicesComponent"]
      }, {
        path: 'business',
        component: _business_business_component__WEBPACK_IMPORTED_MODULE_1__["BusinessComponent"]
      }]
    }];

    var MatchingRoutingModule = function MatchingRoutingModule() {
      _classCallCheck(this, MatchingRoutingModule);
    };

    MatchingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: MatchingRoutingModule
    });
    MatchingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function MatchingRoutingModule_Factory(t) {
        return new (t || MatchingRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatchingRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatchingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/matching/matching.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/matching/matching.module.ts ***!
    \*********************************************/

  /*! exports provided: MatchingModule */

  /***/
  function srcAppMatchingMatchingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchingModule", function () {
      return MatchingModule;
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


    var _matching_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./matching-routing.module */
    "./src/app/matching/matching-routing.module.ts");
    /* harmony import */


    var _matching_matching_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./matching/matching.component */
    "./src/app/matching/matching/matching.component.ts");
    /* harmony import */


    var _propertyservices_propertyservices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./propertyservices/propertyservices.component */
    "./src/app/matching/propertyservices/propertyservices.component.ts");
    /* harmony import */


    var _matching_home_matching_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./matching-home/matching-home.component */
    "./src/app/matching/matching-home/matching-home.component.ts");
    /* harmony import */


    var _business_business_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./business/business.component */
    "./src/app/matching/business/business.component.ts");
    /* harmony import */


    var _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../sharedmodule/sharedmodule.module */
    "./src/app/sharedmodule/sharedmodule.module.ts");
    /*
     * @Author: wjy-mac
     * @Date: 2020-03-26 10:12:46
     * @LastEditors: wjy-mac
     * @LastEditTime: 2020-03-26 10:51:10
     * @Description: file content
     */


    var MatchingModule = function MatchingModule() {
      _classCallCheck(this, MatchingModule);
    };

    MatchingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatchingModule
    });
    MatchingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatchingModule_Factory(t) {
        return new (t || MatchingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _matching_routing_module__WEBPACK_IMPORTED_MODULE_2__["MatchingRoutingModule"], _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_7__["SharedmoduleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatchingModule, {
        declarations: [_matching_matching_component__WEBPACK_IMPORTED_MODULE_3__["MatchingComponent"], _propertyservices_propertyservices_component__WEBPACK_IMPORTED_MODULE_4__["PropertyservicesComponent"], _matching_home_matching_home_component__WEBPACK_IMPORTED_MODULE_5__["MatchingHomeComponent"], _business_business_component__WEBPACK_IMPORTED_MODULE_6__["BusinessComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _matching_routing_module__WEBPACK_IMPORTED_MODULE_2__["MatchingRoutingModule"], _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_7__["SharedmoduleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_matching_matching_component__WEBPACK_IMPORTED_MODULE_3__["MatchingComponent"], _propertyservices_propertyservices_component__WEBPACK_IMPORTED_MODULE_4__["PropertyservicesComponent"], _matching_home_matching_home_component__WEBPACK_IMPORTED_MODULE_5__["MatchingHomeComponent"], _business_business_component__WEBPACK_IMPORTED_MODULE_6__["BusinessComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _matching_routing_module__WEBPACK_IMPORTED_MODULE_2__["MatchingRoutingModule"], _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_7__["SharedmoduleModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/matching/matching/matching.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/matching/matching/matching.component.ts ***!
    \*********************************************************/

  /*! exports provided: MatchingComponent */

  /***/
  function srcAppMatchingMatchingMatchingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchingComponent", function () {
      return MatchingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MatchingComponent =
    /*#__PURE__*/
    function () {
      function MatchingComponent(router) {
        _classCallCheck(this, MatchingComponent);

        this.router = router;
      }

      _createClass(MatchingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @Author: wjy-mac
         * @description: 跳转页面
         * @Date: 2020-03-26 10:22:13
         * @param {type} path 路由地址
         * @return:
         */

      }, {
        key: "openPage",
        value: function openPage(path) {
          this.router.navigate([path]);
        }
      }]);

      return MatchingComponent;
    }();

    MatchingComponent.ɵfac = function MatchingComponent_Factory(t) {
      return new (t || MatchingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MatchingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatchingComponent,
      selectors: [["app-matching"]],
      decls: 18,
      vars: 0,
      consts: [[1, "list-content"], [1, "img-content"], [1, "item"], [1, "img-box"], [3, "click"], ["src", "../../../assets/lsimg/js_03.png", "alt", ""], [1, "name"], [1, "name1"], ["src", "../../../assets/lsimg/js_04.png", "alt", ""]],
      template: function MatchingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchingComponent_Template_div_click_4_listener() {
            return ctx.openPage("/matching/propertyservices");
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchingComponent_Template_div_click_12_listener() {
            return ctx.openPage("/matching/business");
          });

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
        }
      },
      styles: [".list-content[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: url('zlxt_index_01.jpg');\n  background-size: 100% 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 23%;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: -2px 2px 5px #616060;\n  border: 2px solid #decbba;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: 2px solid #281f16;\n  border-radius: 10px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n  background-image: linear-gradient(#eabe8e, #84844e, #000);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  position: relative;\n  z-index: 2;\n  line-height: 30px;\n  font-size: 0.33rem;\n  font-weight: 500;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 30px;\n  margin-top: -30px;\n  position: relative;\n  z-index: 1;\n  font-size: 0.331rem;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC/np5/otYHns7vnu58vemx4dC9zcmMvYXBwL21hdGNoaW5nL21hdGNoaW5nL21hdGNoaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXRjaGluZy9tYXRjaGluZy9tYXRjaGluZy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy93ankvRGVza3RvcC/np5/otYHns7vnu58vemx4dC9zcmMvYXBwL2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0FGO0FEQ0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDRSxVQUFBO0FDRU47QURETTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0dSO0FERlE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0lWO0FERE07RUFDRSxXQUFBO0FDR1I7QURETTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUV0Q04seURBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkZpQ2dDO0VFaENoQyxrQkZnQ3VCO0VFL0J2QixnQkYrQnNDO0FDV3hDO0FEVE07RUFDRSxrQkFBQTtFRTdCTiwrQkFBQTtFQUNBLGlCRjZCa0M7RUU1QmxDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRHlDRiIsImZpbGUiOiJzcmMvYXBwL21hdGNoaW5nL21hdGNoaW5nL21hdGNoaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY29sb3Iuc2Nzcyc7XG4ubGlzdC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYmppbWcvemx4dF9pbmRleF8wMS5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5pbWctY29udGVudCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIC5pdGVtIHtcbiAgICAgIHdpZHRoOiAyMyU7XG4gICAgICAuaW1nLWJveCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAtMnB4IDJweCA1cHggIzYxNjA2MDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RlY2JiYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjgxZjE2O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBAaW5jbHVkZSBiZ2NvbG9yKDAuMzNyZW0sIDMwcHgsIDUwMCk7XG4gICAgICB9XG4gICAgICAubmFtZTEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIEBpbmNsdWRlIGJnY29sb3J5eSgwLjMzcmVtLCAzMHB4LCA1MDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi5saXN0LWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iamltZy96bHh0X2luZGV4XzAxLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saXN0LWNvbnRlbnQgLmltZy1jb250ZW50IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5saXN0LWNvbnRlbnQgLmltZy1jb250ZW50IC5pdGVtIHtcbiAgd2lkdGg6IDIzJTtcbn1cbi5saXN0LWNvbnRlbnQgLmltZy1jb250ZW50IC5pdGVtIC5pbWctYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IDVweCAjNjE2MDYwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGVjYmJhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmxpc3QtY29udGVudCAuaW1nLWNvbnRlbnQgLml0ZW0gLmltZy1ib3ggZGl2IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzI4MWYxNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5saXN0LWNvbnRlbnQgLmltZy1jb250ZW50IC5pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxpc3QtY29udGVudCAuaW1nLWNvbnRlbnQgLml0ZW0gLm5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZWFiZThlLCAjODQ4NDRlLCAjMDAwKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDAuMzNyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubGlzdC1jb250ZW50IC5pbWctY29udGVudCAuaXRlbSAubmFtZTEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDAuMzMxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufSIsIkBtaXhpbiBiZ2NvbG9yKCRmb250LCAkaGVpZ2h0LCAkd2lkdGgpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNlYWJlOGUsICM4NDg0NGUsICMwMDApO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQ7XG4gIGZvbnQtd2VpZ2h0OiAkd2lkdGg7XG5cbn1cblxuQG1peGluIGJnY29sb3J5eSgkZm9udCwgJGhlaWdodCwgJHdpZHRoKSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG4gIG1hcmdpbi10b3A6IC0kaGVpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogJGZvbnQgKyAwLjAwMXJlbTtcbiAgZm9udC13ZWlnaHQ6ICR3aWR0aCArIDIwMDtcblxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-matching',
          templateUrl: './matching.component.html',
          styleUrls: ['./matching.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/matching/propertyservices/propertyservices.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/matching/propertyservices/propertyservices.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PropertyservicesComponent */

  /***/
  function srcAppMatchingPropertyservicesPropertyservicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyservicesComponent", function () {
      return PropertyservicesComponent;
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


    var _sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../sharedmodule/imgtitle/imgtitle.component */
    "./src/app/sharedmodule/imgtitle/imgtitle.component.ts");
    /* harmony import */


    var _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../sharedmodule/right-button/right-button.component */
    "./src/app/sharedmodule/right-button/right-button.component.ts");
    /* harmony import */


    var _sharedmodule_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../sharedmodule/viewer/viewer.component */
    "./src/app/sharedmodule/viewer/viewer.component.ts");

    var PropertyservicesComponent =
    /*#__PURE__*/
    function () {
      function PropertyservicesComponent(router) {
        _classCallCheck(this, PropertyservicesComponent);

        this.router = router;
      }

      _createClass(PropertyservicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setBack",
        value: function setBack() {
          this.router.navigate(['/matching']);
        }
      }]);

      return PropertyservicesComponent;
    }();

    PropertyservicesComponent.ɵfac = function PropertyservicesComponent_Factory(t) {
      return new (t || PropertyservicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    PropertyservicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PropertyservicesComponent,
      selectors: [["app-propertyservices"]],
      decls: 21,
      vars: 2,
      consts: [[1, "propertyservices-content"], [1, "page-title-box"], [3, "title"], [3, "name", "isclick"], [1, "content-cd"], [1, "three-box"]],
      template: function PropertyservicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-imgtitle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-right-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isclick", function PropertyservicesComponent_Template_app_right_button_isclick_3_listener() {
            return ctx.setBack();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "wyfw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "\u8FD4\u56DE");
        }
      },
      directives: [_sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_2__["ImgtitleComponent"], _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_3__["RightButtonComponent"], _sharedmodule_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__["ViewerComponent"]],
      styles: [".page-title-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.3rem;\n  left: 0.3rem;\n  width: calc(100% - .3rem);\n}\n\n.propertyservices-content[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #484747;\n  line-height: 30px;\n  position: relative;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-image: url('hxzs2.jpg');\n}\n\n.propertyservices-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-indent: 2em;\n  margin-top: 20px;\n}\n\n.propertyservices-content[_ngcontent-%COMP%]   .content-cd[_ngcontent-%COMP%] {\n  margin-top: 1.7rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  padding: 1px 0;\n}\n\n.propertyservices-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.propertyservices-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.three-box[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 30px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC/np5/otYHns7vnu58vemx4dC9zcmMvYXBwL21hdGNoaW5nL3Byb3BlcnR5c2VydmljZXMvcHJvcGVydHlzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0Y2hpbmcvcHJvcGVydHlzZXJ2aWNlcy9wcm9wZXJ0eXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQ0VGOztBRERFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL21hdGNoaW5nL3Byb3BlcnR5c2VydmljZXMvcHJvcGVydHlzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAuM3JlbTtcbiAgbGVmdDogLjNyZW07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAuM3JlbSk7XG59XG4ucHJvcGVydHlzZXJ2aWNlcy1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzQ4NDc0NztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JqaW1nL2h4enMyLmpwZyk7XG4gIHAge1xuICAgIHRleHQtaW5kZW50OiAyZW07XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAuY29udGVudC1jZCB7XG4gICAgbWFyZ2luLXRvcDogMS43cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgIHBhZGRpbmc6IDFweCAwO1xuICB9XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG4udGhyZWUtYm94IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59IiwiLnBhZ2UtdGl0bGUtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuM3JlbTtcbiAgbGVmdDogMC4zcmVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gLjNyZW0pO1xufVxuXG4ucHJvcGVydHlzZXJ2aWNlcy1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzQ4NDc0NztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iamltZy9oeHpzMi5qcGcpO1xufVxuLnByb3BlcnR5c2VydmljZXMtY29udGVudCBwIHtcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wcm9wZXJ0eXNlcnZpY2VzLWNvbnRlbnQgLmNvbnRlbnQtY2Qge1xuICBtYXJnaW4tdG9wOiAxLjdyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nOiAxcHggMDtcbn1cbi5wcm9wZXJ0eXNlcnZpY2VzLWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucHJvcGVydHlzZXJ2aWNlcy1jb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udGhyZWUtYm94IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyservicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-propertyservices',
          templateUrl: './propertyservices.component.html',
          styleUrls: ['./propertyservices.component.scss']
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
//# sourceMappingURL=matching-matching-module-es5.js.map