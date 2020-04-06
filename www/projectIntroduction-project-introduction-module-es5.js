function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projectIntroduction-project-introduction-module"], {
  /***/
  "./src/app/projectIntroduction/introduce-list/introduce-list.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/projectIntroduction/introduce-list/introduce-list.component.ts ***!
    \********************************************************************************/

  /*! exports provided: IntroduceListComponent */

  /***/
  function srcAppProjectIntroductionIntroduceListIntroduceListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroduceListComponent", function () {
      return IntroduceListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["projectcontent"];
    };

    var _c1 = function _c1() {
      return ["scenery"];
    };

    var IntroduceListComponent =
    /*#__PURE__*/
    function () {
      function IntroduceListComponent() {
        _classCallCheck(this, IntroduceListComponent);
      }

      _createClass(IntroduceListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroduceListComponent;
    }();

    IntroduceListComponent.ɵfac = function IntroduceListComponent_Factory(t) {
      return new (t || IntroduceListComponent)();
    };

    IntroduceListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntroduceListComponent,
      selectors: [["app-introduce-list"]],
      decls: 18,
      vars: 4,
      consts: [[1, "list-content"], [1, "img-content"], ["routerLinkActive", "router-link-active", 1, "item", 3, "routerLink"], [1, "img-box"], ["src", "../../../assets/lsimg/js_03.png", "alt", ""], [1, "name"], [1, "name1"], ["src", "../../../assets/lsimg/js_05.png", "alt", ""]],
      template: function IntroduceListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u9879\u76EE\u4ECB\u7ECD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u9879\u76EE\u4ECB\u7ECD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u914D\u5957\u3001\u666F\u89C2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u914D\u5957\u3001\u666F\u89C2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".list-content[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: url('zlxt_index_01.jpg');\n  background-size: 100% 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 23%;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: -2px 2px 5px #616060;\n  border: 2px solid #decbba;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: 2px solid #281f16;\n  border-radius: 10px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n  background-image: linear-gradient(#eabe8e, #84844e, #000);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  position: relative;\n  z-index: 2;\n  line-height: 30px;\n  font-size: 0.33rem;\n  font-weight: 500;\n}\n.list-content[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 30px;\n  margin-top: -30px;\n  position: relative;\n  z-index: 1;\n  font-size: 0.331rem;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC/np5/otYHns7vnu58vemx4dC9zcmMvYXBwL3Byb2plY3RJbnRyb2R1Y3Rpb24vaW50cm9kdWNlLWxpc3QvaW50cm9kdWNlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RJbnRyb2R1Y3Rpb24vaW50cm9kdWNlLWxpc3QvaW50cm9kdWNlLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvd2p5L0Rlc2t0b3Av56ef6LWB57O757ufL3pseHQvc3JjL2FwcC9jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBRENFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREFJO0VBQ0UsVUFBQTtBQ0VOO0FERE07RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNHUjtBREZRO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNJVjtBRERNO0VBQ0UsV0FBQTtBQ0dSO0FERE07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VFdENOLHlEQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJGaUNnQztFRWhDaEMsa0JGZ0N1QjtFRS9CdkIsZ0JGK0JzQztBQ1d4QztBRFRNO0VBQ0Usa0JBQUE7RUU3Qk4sK0JBQUE7RUFDQSxpQkY2QmtDO0VFNUJsQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUR5Q0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0SW50cm9kdWN0aW9uL2ludHJvZHVjZS1saXN0L2ludHJvZHVjZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY29sb3Iuc2Nzcyc7XG4ubGlzdC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYmppbWcvemx4dF9pbmRleF8wMS5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5pbWctY29udGVudCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIC5pdGVtIHtcbiAgICAgIHdpZHRoOiAyMyU7XG4gICAgICAuaW1nLWJveCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAtMnB4IDJweCA1cHggIzYxNjA2MDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RlY2JiYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjgxZjE2O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBAaW5jbHVkZSBiZ2NvbG9yKDAuMzNyZW0sIDMwcHgsIDUwMCk7XG4gICAgICB9XG4gICAgICAubmFtZTEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIEBpbmNsdWRlIGJnY29sb3J5eSgwLjMzcmVtLCAzMHB4LCA1MDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi5saXN0LWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iamltZy96bHh0X2luZGV4XzAxLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saXN0LWNvbnRlbnQgLmltZy1jb250ZW50IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5saXN0LWNvbnRlbnQgLmltZy1jb250ZW50IC5pdGVtIHtcbiAgd2lkdGg6IDIzJTtcbn1cbi5saXN0LWNvbnRlbnQgLmltZy1jb250ZW50IC5pdGVtIC5pbWctYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IDVweCAjNjE2MDYwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGVjYmJhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmxpc3QtY29udGVudCAuaW1nLWNvbnRlbnQgLml0ZW0gLmltZy1ib3ggZGl2IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzI4MWYxNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5saXN0LWNvbnRlbnQgLmltZy1jb250ZW50IC5pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxpc3QtY29udGVudCAuaW1nLWNvbnRlbnQgLml0ZW0gLm5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZWFiZThlLCAjODQ4NDRlLCAjMDAwKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDAuMzNyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubGlzdC1jb250ZW50IC5pbWctY29udGVudCAuaXRlbSAubmFtZTEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDAuMzMxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufSIsIkBtaXhpbiBiZ2NvbG9yKCRmb250LCAkaGVpZ2h0LCAkd2lkdGgpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNlYWJlOGUsICM4NDg0NGUsICMwMDApO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQ7XG4gIGZvbnQtd2VpZ2h0OiAkd2lkdGg7XG5cbn1cblxuQG1peGluIGJnY29sb3J5eSgkZm9udCwgJGhlaWdodCwgJHdpZHRoKSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG4gIG1hcmdpbi10b3A6IC0kaGVpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogJGZvbnQgKyAwLjAwMXJlbTtcbiAgZm9udC13ZWlnaHQ6ICR3aWR0aCArIDIwMDtcblxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroduceListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-introduce-list',
          templateUrl: './introduce-list.component.html',
          styleUrls: ['./introduce-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projectIntroduction/project-introduction-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/projectIntroduction/project-introduction-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ProjectIntroductionRoutingModule */

  /***/
  function srcAppProjectIntroductionProjectIntroductionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectIntroductionRoutingModule", function () {
      return ProjectIntroductionRoutingModule;
    });
    /* harmony import */


    var _projectintroduction_content_projectintroduction_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./projectintroduction-content/projectintroduction-content.component */
    "./src/app/projectIntroduction/projectintroduction-content/projectintroduction-content.component.ts");
    /* harmony import */


    var _scenery_scenery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./scenery/scenery.component */
    "./src/app/projectIntroduction/scenery/scenery.component.ts");
    /* harmony import */


    var _introduce_list_introduce_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./introduce-list/introduce-list.component */
    "./src/app/projectIntroduction/introduce-list/introduce-list.component.ts");
    /* harmony import */


    var _project_introduction_project_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./project-introduction/project-introduction.component */
    "./src/app/projectIntroduction/project-introduction/project-introduction.component.ts");
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
     * @Date: 2020-03-25 00:08:56
     * @LastEditors: wjy-mac
     * @LastEditTime: 2020-04-02 11:08:50
     * @Description: file content
     */


    var routes = [{
      path: '',
      component: _project_introduction_project_introduction_component__WEBPACK_IMPORTED_MODULE_3__["ProjectIntroductionComponent"],
      children: [{
        path: '',
        component: _introduce_list_introduce_list_component__WEBPACK_IMPORTED_MODULE_2__["IntroduceListComponent"]
      }, {
        path: 'scenery',
        component: _scenery_scenery_component__WEBPACK_IMPORTED_MODULE_1__["SceneryComponent"]
      }, {
        path: 'projectcontent',
        component: _projectintroduction_content_projectintroduction_content_component__WEBPACK_IMPORTED_MODULE_0__["ProjectintroductionContentComponent"]
      }]
    }];

    var ProjectIntroductionRoutingModule = function ProjectIntroductionRoutingModule() {
      _classCallCheck(this, ProjectIntroductionRoutingModule);
    };

    ProjectIntroductionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ProjectIntroductionRoutingModule
    });
    ProjectIntroductionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function ProjectIntroductionRoutingModule_Factory(t) {
        return new (t || ProjectIntroductionRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProjectIntroductionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ProjectIntroductionRoutingModule, [{
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
  "./src/app/projectIntroduction/project-introduction.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/projectIntroduction/project-introduction.module.ts ***!
    \********************************************************************/

  /*! exports provided: ProjectIntroductionModule */

  /***/
  function srcAppProjectIntroductionProjectIntroductionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectIntroductionModule", function () {
      return ProjectIntroductionModule;
    });
    /* harmony import */


    var _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../sharedmodule/sharedmodule.module */
    "./src/app/sharedmodule/sharedmodule.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _project_introduction_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./project-introduction-routing.module */
    "./src/app/projectIntroduction/project-introduction-routing.module.ts");
    /* harmony import */


    var _project_introduction_project_introduction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./project-introduction/project-introduction.component */
    "./src/app/projectIntroduction/project-introduction/project-introduction.component.ts");
    /* harmony import */


    var _introduce_list_introduce_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./introduce-list/introduce-list.component */
    "./src/app/projectIntroduction/introduce-list/introduce-list.component.ts");
    /* harmony import */


    var _scenery_scenery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./scenery/scenery.component */
    "./src/app/projectIntroduction/scenery/scenery.component.ts");
    /* harmony import */


    var _projectintroduction_content_projectintroduction_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projectintroduction-content/projectintroduction-content.component */
    "./src/app/projectIntroduction/projectintroduction-content/projectintroduction-content.component.ts");
    /*
     * @Author: wjy-mac
     * @Date: 2020-03-25 22:58:07
     * @LastEditors: wjy-mac
     * @LastEditTime: 2020-04-02 10:40:00
     * @Description: file content
     */


    var ProjectIntroductionModule = function ProjectIntroductionModule() {
      _classCallCheck(this, ProjectIntroductionModule);
    };

    ProjectIntroductionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProjectIntroductionModule
    });
    ProjectIntroductionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ProjectIntroductionModule_Factory(t) {
        return new (t || ProjectIntroductionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _project_introduction_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectIntroductionRoutingModule"], _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_0__["SharedmoduleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectIntroductionModule, {
        declarations: [_project_introduction_project_introduction_component__WEBPACK_IMPORTED_MODULE_4__["ProjectIntroductionComponent"], _introduce_list_introduce_list_component__WEBPACK_IMPORTED_MODULE_5__["IntroduceListComponent"], _scenery_scenery_component__WEBPACK_IMPORTED_MODULE_6__["SceneryComponent"], _projectintroduction_content_projectintroduction_content_component__WEBPACK_IMPORTED_MODULE_7__["ProjectintroductionContentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _project_introduction_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectIntroductionRoutingModule"], _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_0__["SharedmoduleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectIntroductionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_project_introduction_project_introduction_component__WEBPACK_IMPORTED_MODULE_4__["ProjectIntroductionComponent"], _introduce_list_introduce_list_component__WEBPACK_IMPORTED_MODULE_5__["IntroduceListComponent"], _scenery_scenery_component__WEBPACK_IMPORTED_MODULE_6__["SceneryComponent"], _projectintroduction_content_projectintroduction_content_component__WEBPACK_IMPORTED_MODULE_7__["ProjectintroductionContentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _project_introduction_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectIntroductionRoutingModule"], _sharedmodule_sharedmodule_module__WEBPACK_IMPORTED_MODULE_0__["SharedmoduleModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projectIntroduction/project-introduction/project-introduction.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/projectIntroduction/project-introduction/project-introduction.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ProjectIntroductionComponent */

  /***/
  function srcAppProjectIntroductionProjectIntroductionProjectIntroductionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectIntroductionComponent", function () {
      return ProjectIntroductionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProjectIntroductionComponent =
    /*#__PURE__*/
    function () {
      function ProjectIntroductionComponent() {
        _classCallCheck(this, ProjectIntroductionComponent);
      }

      _createClass(ProjectIntroductionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectIntroductionComponent;
    }();

    ProjectIntroductionComponent.ɵfac = function ProjectIntroductionComponent_Factory(t) {
      return new (t || ProjectIntroductionComponent)();
    };

    ProjectIntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectIntroductionComponent,
      selectors: [["app-project-introduction"]],
      decls: 1,
      vars: 0,
      template: function ProjectIntroductionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RJbnRyb2R1Y3Rpb24vcHJvamVjdC1pbnRyb2R1Y3Rpb24vcHJvamVjdC1pbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectIntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project-introduction',
          templateUrl: './project-introduction.component.html',
          styleUrls: ['./project-introduction.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projectIntroduction/projectintroduction-content/projectintroduction-content.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/projectIntroduction/projectintroduction-content/projectintroduction-content.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: ProjectintroductionContentComponent */

  /***/
  function srcAppProjectIntroductionProjectintroductionContentProjectintroductionContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectintroductionContentComponent", function () {
      return ProjectintroductionContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../sharedmodule/imgtitle/imgtitle.component */
    "./src/app/sharedmodule/imgtitle/imgtitle.component.ts");
    /* harmony import */


    var _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../sharedmodule/right-button/right-button.component */
    "./src/app/sharedmodule/right-button/right-button.component.ts");

    var ProjectintroductionContentComponent =
    /*#__PURE__*/
    function () {
      function ProjectintroductionContentComponent() {
        _classCallCheck(this, ProjectintroductionContentComponent);
      }

      _createClass(ProjectintroductionContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectintroductionContentComponent;
    }();

    ProjectintroductionContentComponent.ɵfac = function ProjectintroductionContentComponent_Factory(t) {
      return new (t || ProjectintroductionContentComponent)();
    };

    ProjectintroductionContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectintroductionContentComponent,
      selectors: [["app-projectintroduction-content"]],
      decls: 107,
      vars: 2,
      consts: [[1, "projectionContent"], [1, "page-title-box"], [3, "title"], [3, "name"], [1, "projectionContentbox"], [1, "item"], [1, "box"], [1, "title"], [1, "small-title"]],
      template: function ProjectintroductionContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-imgtitle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-right-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u591A\u7EF4\u4EA4\u901A \u9AD8\u6548\u5546\u52A1\u901A\u52E4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "FCC\u5730\u5904\u5929\u5E9C\u5E7F\u573A\u6838\u5FC3\u533A\u57DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u5929\u5E9C\u5E7F\u573A\u7AD9-\u5730\u94C11\u30012\u53F7\u7EBF\uFF0C\u53CC\u7EBF\u5FEB\u6377\u6362\u4E58");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u7D27\u90BB\u9AA1\u9A6C\u5E02-\u5730\u94C11\u30014\u300110\uFF08\u89C4\u5212\uFF09\u300118\uFF08\u89C4\u5212\uFF09\u53F7\u7EBF\uFF0C\u5B9E\u73B0TOD\u6A21\u5F0F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u8DDD\u6210\u90FD\u56FD\u9645\u53CC\u6D41\u673A\u573A\u8F66\u7A0B\u7EA630\u5206\u949F\uFF1B\u5730\u94C118\u53F7\u7EBF\u76F4\u8FBE\u65B0\u5929\u5E9C\u56FD\u9645\u673A\u573A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u8DDD\u6210\u90FD\u5317\u7AD9\u8F66\u7A0B\u7EA615\u5206\u949F\uFF1B\u8DDD\u6210\u90FD\u4E1C\u7AD9\u3001\u5357\u7AD9\u8F66\u7A0B\u7EA625\u5206\u949F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u5546\u52A1\u901A\u52E4\u5FEB\u6377\u9AD8\u6548");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u4E94\u5927\u5546\u5708 \u7E41\u534E\u6301\u7EED\u5347\u7EA7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "FCC\u5C79\u7ACB\u4E8E\u5929\u5E9C\u5E7F\u573A\uFF0C\u5730\u5904\u9752\u7F8A\u533A\u6838\u5FC3\u5730\u5E26");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u6625\u7199\u8DEF\u3001\u76D0\u5E02\u53E3\u3001\u592A\u53E4\u91CC\u3001\u9AA1\u9A6C\u5E02\u3001\u592A\u5347\u8DEF\u7B49\u4E94\u5927\u7E41\u534E\u5546\u5708\u73AF\u7ED5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u4E16\u754C500\u5F3A\u4E91\u96C6\u56F4\u7ED5\uFF1B\u5404\u91D1\u878D\u673A\u6784\u603B\u90E8\u843D\u5B50\u4E4B\u5904");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u4F17\u591A\u5546\u52A1\u3001\u5546\u4E1A\u8D44\u6E90\u6C47\u805A\uFF0C\u9AD8\u7AEF\u4EBA\u624D\u835F\u8403");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u5929\u5E9C\u5E7F\u573A 210\u7C73\u5546\u52A1\u65B0\u5730\u6807");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "FCC\u5C79\u7ACB\u4E8E\u5929\u5E9C\u5E7F\u573A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u4EE5210\u7C73\u5730\u7EA7\u5DE8\u7B51\uFF0C\u5237\u65B0\u5929\u5E9C\u5E7F\u573A\u5929\u9645\u7EBF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u4E8EFCC\uFF0C\u53EF\u4EE5\u4FEF\u77B0\u6574\u4E2A\u6210\u90FD\u4E2D\u5FC3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u897F\u4FA7\u548C\u5357\u9762\u89C6\u91CE\u5F00\u9614\uFF0C\u8EAB\u5904CBD\u5374\u53EF\u5750\u89C2\u5F00\u9614\u666F\u89C2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u518D\u9020\u6210\u90FDCBD\u533A\u57DF\u56FD\u9645\u5546\u52A1\u65B0\u5730\u6807");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u94C2\u91D1\u7EA7\u5C0A\u8363 \u7F8E\u56FDLEED\u6700\u9AD8\u7B49\u7EA7\u8BA4\u8BC1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u300A\u7EFF\u8272\u5EFA\u7B51\u8BC4\u4F30\u4F53\u7CFB\u300B \uFF08Leadership in Energy & Environment Design Building Rating System\uFF09\uFF0C \u7B80\u79F0LEED,\u7531\u7F8E\u56FD\u7EFF\u8272\u5EFA\u7B51\u59D4\u5458\u4F1A\u8BC4\u5B9A\uFF0C \u662F\u76EE\u524D\u4E16\u754C\u4E0A\u5BF9\u5EFA\u7B51 \u3001\u73AF\u4FDD\u3001\u7EFF\u8272\u53CA\u53EF\u6301\u7EED\u6027\u8BC4\u4F30\u6807\u51C6\u4E2D \u6700\u5B8C\u5584\u3001\u6700\u6709\u5F71\u54CD\u529B\u7684\u6807\u51C6\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "FCC\u5DF2\u7ECF\u987A\u5229\u83B7\u5F97LEED V4\u65B0\u5EFA\u5EFA\u7B51\u94C2\u91D1\u7EA7\u9884\u8BA4\u8BC1\uFF0C \u6210\u4E3A\u56DB\u5DDD\u7701\u7B2C\u4E00\u4E2A\u83B7\u5F97LEED V4\u7248\u672C\u65B0\u5EFA\u5EFA\u7B51\u94C2\u91D1\u7EA7\u9884\u8BA4\u8BC1\u7684\u9879\u76EE\uFF1B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u6BD4\u80A9\u4E0A\u6D77\u4E0A\u6D77\u73AF\u7403\u91D1\u878D\u4E2D\u5FC3\u548C\u6052\u751F\u94F6\u884C\u5927\u53A6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u5168\u7CFB\u9AD8\u7AEF\u914D\u7F6E \u4E3A\u884C\u4E1A\u5854\u5C16\u91CF\u8EAB\u5B9A\u5236");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "10.8\u7C73\u6311\u9AD8\uFF0C\u5EFA\u9762\u79EF\u7EA61200m2 \u5FB7\u7CFB\u6781\u7B80\u4E3B\u4E49\u98CE\u683C\u7CBE\u88C5\u5927\u5802\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "31\u90E8\u5FB7\u56FD\u8482\u68EE\u514B\u864F\u4F2F\u9AD8\u901F\u7535\u68AF\uFF0C\u667A\u80FD\u6D3E\u68AF\u7CFB\u7EDF\uFF0C6\u7C73/\u79D2\u950B\u901F\u4FDD\u969C\u9AD8\u6548\u7545\u8FBE\uFF0C \u53E6\u914D\u7F6E\u6709VIP\u7535\u68AF\uFF0C\u9884\u7559\u5C0A\u4EAB\u7A7A\u95F4\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u7F8E\u56FD\u7EA6\u514B\u4E2D\u592E\u7A7A\u8C03&\u65B0\u98CE\u7CFB\u7EDF\uFF0C\u7A7A\u6C14\u51C0\u5316\u7B49\u7EA7\u8FBE\u5230\u6B27\u6D32\u6807\u51C6H11\u7EA7\u3002 \uFF08\u22650.5\u5FAE\u7C73\uFF0C\u51C0\u5316\u7387\u8FBE\u523095%\u81F399.9%\uFF09");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u5E02\u653F\u53CC\u7535\u6E90\u4F9B\u7535\uFF0C\u4E3B\u7535\u6E90\u4E0E\u5907\u7528\u7535\u6E90\u7686\u4E3A13450KVA\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u914D\u7535\u7BB1\u67DC\u91C7\u7528\u56FD\u9645\u54C1\u724C\u897F\u95E8\u5B50\u539F\u88C5\u6216\u6388\u6743\u67DC\uFF0C\u786E\u4FDD\u4F9B\u7535\u7CFB\u7EDF\u7A33\u5B9A\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u667A\u80FD\u5B89\u9632\u7CFB\u7EDF\uFF0C\u5168\u697C\u4E00\u5361\u901A\u4F53\u7CFB\uFF0C\u8BBE\u5907\u697C\u5B87\u81EA\u63A7\u7CFB\u7EDF\u53CAIBMS\u7CFB\u7EDF\u7B49\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u6BCF\u5C42\u90E8\u5206\u6237\u578B\u5185\u9884\u7559\u4E0A\u4E0B\u6C34\u70B9\u4F4D\uFF0C\u4FBF\u4E8E\u4F01\u4E1A\u5185\u90E8\u8BBE\u7F6E\u72EC\u7ACB\u8336\u6C34\u95F4\u3001\u536B\u751F\u95F4\uFF0C\u63D0\u5347\u529E\u516C\u4F53\u9A8C\u3002 \u8D85\u9AD8\u4EA4\u4ED8\u6807\u51C6\uFF1A\u5929\u82B1\u3001\u5730\u677F\u3001\u5899\u9762\u5E26\u7A97\u5E18\u3001\u5730\u6BEF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u5229\u4E30\u7269\u4E1A \u5168\u65B9\u4F4D\u5C0A\u8363\u670D\u52A1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u5229\u4E30\u7269\u4E1A\uFF0C25\u5E74\u4E13\u4E1A\u79EF\u6DC0\uFF0C\u7B51\u5C31\u884C\u4E1A\u5178\u8303\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u7CFB\u56FD\u5BB6\u7269\u4E1A\u7BA1\u7406\u4E00\u7EA7\u8D44\u8D28\u4F01\u4E1A\uFF0C \u4E13\u4E1A\u4ECE\u4E8B\u57CE\u5E02\u7EFC\u5408\u4F53\u3001\u5546\u52A1\u5199\u5B57\u697C\u3001\u653F\u5E9C\u673A\u5173\u529E\u516C\u697C\u3001\u9AD8\u6863\u4F4F\u5B85\u7B49\u7269\u4E1A\u7BA1\u7406\u4E0E\u670D\u52A1\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u73B0\u4E3A\u4E2D\u56FD\u7269\u4E1A\u7BA1\u7406\u534F\u4F1A\u7406\u4E8B\u4F1A\u5355\u4F4D\u3001\u56DB\u5DDD\u7701\u623F\u534F\u7269\u4E1A\u7BA1\u7406\u4E13\u59D4\u4F1A\u7406\u4E8B\u5355\u4F4D\u3001 \u6210\u90FD\u5E02\u7269\u4E1A\u7BA1\u7406\u534F\u4F1A\u526F\u4F1A\u957F\u5355\u4F4D\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u8363\u83B7\u6210\u90FD\u9996\u6279\u201C\u7269\u4E1A\u670D\u52A1\u54C1\u724C\u4F01\u4E1A\u201D\u3001\u6210\u90FD\u5E02\u201C\u5341\u4F73\u7269\u4E1A\u670D\u52A1\u4F01\u4E1A\u201D\uFF0C \u4E1A\u4E3B\u6EE1\u610F\u7387\u8FBE\u523090%\u4EE5\u4E0A\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u5229\u4E30\u7269\u4E1A\u4E3A\u5BA2\u6237\u63D0\u4F9B\u5B9A\u5236\u7EA7\u7684\u4E13\u5C5E\u5546\u52A1\u670D\u52A1\u548C\u4FE1\u606F\u4F9B\u5E94\uFF0C \u4E0D\u5B9A\u671F\u7EC4\u7EC7\u5708\u5C42\u3001\u8DE8\u754C\u6D3B\u52A8\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u591A\u53D1\u5C55\u3001\u5408\u4F5C\u673A\u4F1A\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u4E30\u5FB7&\u6210\u8FBE\u8054\u8882\u5DE8\u732E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u4E30\u5FB7&\u6210\u8FBE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u8054\u8882\u5DE8\u4F5C\uFF0C\u732E\u793C\u6210\u90FD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u643A\u624B\u5F00\u53D1\u4EE5\u9AD8\u7AEF\u4EA7\u54C1\u54C1\u8D28\u7684\u5168\u65B0\u5546\u52A1\u914D\u5957\uFF0C \u5320\u5FC3\u6210\u5C31\u6210\u90FDCBD\u96C6\u7FA4\u5B9E\u529B\u5854\u5C16\u5546\u52A1\u7A7A\u95F4\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u4E30\u5FB7\u96C6\u56E2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u4EE5\u4E30\u5BCC\u7ECF\u9A8C\u4E3A\u56FD\u9645\u540D\u4F01\u8D34\u8EAB\u6253\u9020\u4F18\u8D28\u5546\u52A1\u7A7A\u95F4 \u6210\u529F\u5F00\u53D1\u4E30\u5FB7\u56FD\u9645\u5E7F\u573A\u3001\u4E30\u5FB7\u4E07\u745E\u4E2D\u5FC3\u7B49\u8BF8\u591A\u5546\u52A1\u7A7A\u95F4\uFF0C\u5171\u4EAB\u5546\u52A1\u6210\u5C31\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u4E2D\u56FD\u6210\u8FBE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u96B6\u5C5E\u4E2D\u56FD\u5316\u5B66\u5DE5\u7A0B\u96C6\u56E2\u516C\u53F8\uFF0C\u521B\u7ACB\u4E8E20\u4E16\u7EAA50\u5E74\u4EE3\u3002 \u516C\u53F8\u62E5\u6709\u96C4\u539A\u7684\u8D44\u91D1\u5B9E\u529B\u548C\u4E30\u5BCC\u7684\u6295\u8D44\u7ECF\u9A8C\uFF0C\u4E1A\u52A1\u904D\u53CA\u5168\u7403\u591A\u4E2A\u56FD\u5BB6\u548C\u5730\u533A\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "xmjs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "\u8FD4\u56DE");
        }
      },
      directives: [_sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_1__["ImgtitleComponent"], _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_2__["RightButtonComponent"]],
      styles: [".page-title-box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0.3rem;\n  left: 0.3rem;\n  width: calc(100% - .3rem);\n  z-index: 1000;\n}\n.projectionContent[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 30px;\n  font-weight: 400;\n  width: 70%;\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 50px;\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .small-title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-bottom: 30px;\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-of-type {\n  top: 0;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-image: url('hxzs2.jpg');\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(2) {\n  top: 100%;\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(3) {\n  top: 200%;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-image: url('hxzs2.jpg');\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(4) {\n  top: 300%;\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(5) {\n  top: 400%;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-image: url('hxzs2.jpg');\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(6) {\n  top: 500%;\n}\n.projectionContent[_ngcontent-%COMP%]   .projectionContentbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-of-type(7) {\n  top: 600%;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-image: url('hxzs2.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC/np5/otYHns7vnu58vemx4dC9zcmMvYXBwL3Byb2plY3RJbnRyb2R1Y3Rpb24vcHJvamVjdGludHJvZHVjdGlvbi1jb250ZW50L3Byb2plY3RpbnRyb2R1Y3Rpb24tY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdEludHJvZHVjdGlvbi9wcm9qZWN0aW50cm9kdWN0aW9uLWNvbnRlbnQvcHJvamVjdGludHJvZHVjdGlvbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFBQTtBQU9DO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDQTtFQUNFLGdCQUFBO0FDRUY7QURERTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0VKO0FEREk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHTjtBREZNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDSVI7QURGTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0lSO0FERk07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNJUjtBREZNO0VBQ0UsbUJBQUE7QUNJUjtBREZNO0VBQ0UsTUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNJUjtBREZNO0VBQ0UsU0FBQTtBQ0lSO0FERk07RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQ0lSO0FERk07RUFDRSxTQUFBO0FDSVI7QURGTTtFQUNFLFNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDSVI7QURGTTtFQUNFLFNBQUE7QUNJUjtBREZNO0VBQ0UsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RJbnRyb2R1Y3Rpb24vcHJvamVjdGludHJvZHVjdGlvbi1jb250ZW50L3Byb2plY3RpbnRyb2R1Y3Rpb24tY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiB3anktbWFjXG4gKiBARGF0ZTogMjAyMC0wNC0wMiAxMTowODoxMVxuICogQExhc3RFZGl0b3JzOiB3anktbWFjXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA0LTAyIDExOjM4OjIyXG4gKiBARGVzY3JpcHRpb246IGZpbGUgY29udGVudFxuICovXG4gLnBhZ2UtdGl0bGUtYm94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IC4zcmVtO1xuICBsZWZ0OiAuM3JlbTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIC4zcmVtKTtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5wcm9qZWN0aW9uQ29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIC5wcm9qZWN0aW9uQ29udGVudGJveCB7XG4gICAgLy8gcGFkZGluZzogMXB4IDFweCA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOjAgO1xuICAgIGxlZnQ6IDA7XG4gICAgLml0ZW0ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLmJveCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICB9XG4gICAgICAuc21hbGwtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JqaW1nL2h4enMyLmpwZyk7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgfVxuICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgIHRvcDogMjAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JqaW1nL2h4enMyLmpwZyk7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDQpIHtcbiAgICAgICAgdG9wOiAzMDAlO1xuICAgICAgfVxuICAgICAgJjpudGgtb2YtdHlwZSg1KSB7XG4gICAgICAgIHRvcDogNDAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JqaW1nL2h4enMyLmpwZyk7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDYpIHtcbiAgICAgICAgdG9wOiA1MDAlO1xuICAgICAgfVxuICAgICAgJjpudGgtb2YtdHlwZSg3KSB7XG4gICAgICAgIHRvcDogNjAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JqaW1nL2h4enMyLmpwZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLypcbiAqIEBBdXRob3I6IHdqeS1tYWNcbiAqIEBEYXRlOiAyMDIwLTA0LTAyIDExOjA4OjExXG4gKiBATGFzdEVkaXRvcnM6IHdqeS1tYWNcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDQtMDIgMTE6Mzg6MjJcbiAqIEBEZXNjcmlwdGlvbjogZmlsZSBjb250ZW50XG4gKi9cbi5wYWdlLXRpdGxlLWJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwLjNyZW07XG4gIGxlZnQ6IDAuM3JlbTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIC4zcmVtKTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnByb2plY3Rpb25Db250ZW50IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5wcm9qZWN0aW9uQ29udGVudCAucHJvamVjdGlvbkNvbnRlbnRib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5wcm9qZWN0aW9uQ29udGVudCAucHJvamVjdGlvbkNvbnRlbnRib3ggLml0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2plY3Rpb25Db250ZW50IC5wcm9qZWN0aW9uQ29udGVudGJveCAuaXRlbSAuYm94IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2lkdGg6IDcwJTtcbn1cbi5wcm9qZWN0aW9uQ29udGVudCAucHJvamVjdGlvbkNvbnRlbnRib3ggLml0ZW0gLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLnByb2plY3Rpb25Db250ZW50IC5wcm9qZWN0aW9uQ29udGVudGJveCAuaXRlbSAuc21hbGwtdGl0bGUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ucHJvamVjdGlvbkNvbnRlbnQgLnByb2plY3Rpb25Db250ZW50Ym94IC5pdGVtIHAge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnByb2plY3Rpb25Db250ZW50IC5wcm9qZWN0aW9uQ29udGVudGJveCAuaXRlbTpmaXJzdC1vZi10eXBlIHtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JqaW1nL2h4enMyLmpwZyk7XG59XG4ucHJvamVjdGlvbkNvbnRlbnQgLnByb2plY3Rpb25Db250ZW50Ym94IC5pdGVtOm50aC1vZi10eXBlKDIpIHtcbiAgdG9wOiAxMDAlO1xufVxuLnByb2plY3Rpb25Db250ZW50IC5wcm9qZWN0aW9uQ29udGVudGJveCAuaXRlbTpudGgtb2YtdHlwZSgzKSB7XG4gIHRvcDogMjAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iamltZy9oeHpzMi5qcGcpO1xufVxuLnByb2plY3Rpb25Db250ZW50IC5wcm9qZWN0aW9uQ29udGVudGJveCAuaXRlbTpudGgtb2YtdHlwZSg0KSB7XG4gIHRvcDogMzAwJTtcbn1cbi5wcm9qZWN0aW9uQ29udGVudCAucHJvamVjdGlvbkNvbnRlbnRib3ggLml0ZW06bnRoLW9mLXR5cGUoNSkge1xuICB0b3A6IDQwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmppbWcvaHh6czIuanBnKTtcbn1cbi5wcm9qZWN0aW9uQ29udGVudCAucHJvamVjdGlvbkNvbnRlbnRib3ggLml0ZW06bnRoLW9mLXR5cGUoNikge1xuICB0b3A6IDUwMCU7XG59XG4ucHJvamVjdGlvbkNvbnRlbnQgLnByb2plY3Rpb25Db250ZW50Ym94IC5pdGVtOm50aC1vZi10eXBlKDcpIHtcbiAgdG9wOiA2MDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JqaW1nL2h4enMyLmpwZyk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectintroductionContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projectintroduction-content',
          templateUrl: './projectintroduction-content.component.html',
          styleUrls: ['./projectintroduction-content.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projectIntroduction/scenery/scenery.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/projectIntroduction/scenery/scenery.component.ts ***!
    \******************************************************************/

  /*! exports provided: SceneryComponent */

  /***/
  function srcAppProjectIntroductionScenerySceneryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SceneryComponent", function () {
      return SceneryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../sharedmodule/imgtitle/imgtitle.component */
    "./src/app/sharedmodule/imgtitle/imgtitle.component.ts");
    /* harmony import */


    var _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../sharedmodule/right-button/right-button.component */
    "./src/app/sharedmodule/right-button/right-button.component.ts");

    var SceneryComponent =
    /*#__PURE__*/
    function () {
      function SceneryComponent() {
        _classCallCheck(this, SceneryComponent);
      }

      _createClass(SceneryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SceneryComponent;
    }();

    SceneryComponent.ɵfac = function SceneryComponent_Factory(t) {
      return new (t || SceneryComponent)();
    };

    SceneryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SceneryComponent,
      selectors: [["app-scenery"]],
      decls: 65,
      vars: 2,
      consts: [[1, "scenery"], [1, "page-title-box"], [3, "title"], [3, "name"], ["src", "../../../assets/jg/1.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/2.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/4.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/5.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/6.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/7.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/8.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/9.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/10.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/11.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/12.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/13.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/14.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/16.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/17.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/18.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/19.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/20.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/22.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/23.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/24.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/25.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/26.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/28.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/30.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/32.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/33.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/34.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/35.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/36.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/37.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/38.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/40.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/42.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/43.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/45.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/47.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/48.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/50.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/51.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/52.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/53.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/54.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/55.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/56.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/57.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/58.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/59.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/60.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/61.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/62.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/63.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/64.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/65.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/66.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/69.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/70.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/71.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/72.png", "alt", "", "srcset", ""], ["src", "../../../assets/jg/73.png", "alt", "", "srcset", ""]],
      template: function SceneryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-imgtitle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-right-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "ptjg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "\u8FD4\u56DE");
        }
      },
      directives: [_sharedmodule_imgtitle_imgtitle_component__WEBPACK_IMPORTED_MODULE_1__["ImgtitleComponent"], _sharedmodule_right_button_right_button_component__WEBPACK_IMPORTED_MODULE_2__["RightButtonComponent"]],
      styles: [".page-title-box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0.3rem;\n  left: 0.3rem;\n  width: calc(100% - .3rem);\n}\n\n.scenery[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-image: url('hxzs2.jpg');\n}\n\n.scenery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 76%;\n  margin: 40px 13%;\n}\n\n.scenery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC/np5/otYHns7vnu58vemx4dC9zcmMvYXBwL3Byb2plY3RJbnRyb2R1Y3Rpb24vc2NlbmVyeS9zY2VuZXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0SW50cm9kdWN0aW9uL3NjZW5lcnkvc2NlbmVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDRUY7O0FEREU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURGSTtFQUNFLGlCQUFBO0FDSU4iLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0SW50cm9kdWN0aW9uL3NjZW5lcnkvc2NlbmVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlLWJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAuM3JlbTtcbiAgbGVmdDogLjNyZW07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAuM3JlbSk7XG59XG4uc2NlbmVyeSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iamltZy9oeHpzMi5qcGcpO1xuICBpbWcge1xuICAgIHdpZHRoOiA3NiU7XG4gICAgbWFyZ2luOiA0MHB4IDEzJTtcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgfVxuICB9XG59IiwiLnBhZ2UtdGl0bGUtYm94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDAuM3JlbTtcbiAgbGVmdDogMC4zcmVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gLjNyZW0pO1xufVxuXG4uc2NlbmVyeSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmppbWcvaHh6czIuanBnKTtcbn1cbi5zY2VuZXJ5IGltZyB7XG4gIHdpZHRoOiA3NiU7XG4gIG1hcmdpbjogNDBweCAxMyU7XG59XG4uc2NlbmVyeSBpbWc6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SceneryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-scenery',
          templateUrl: './scenery.component.html',
          styleUrls: ['./scenery.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=projectIntroduction-project-introduction-module-es5.js.map