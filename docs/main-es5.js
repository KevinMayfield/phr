(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+hgv":
    /*!************************************************!*\
      !*** ./src/app/tracking/tracking.component.ts ***!
      \************************************************/

    /*! exports provided: TrackingComponent */

    /***/
    function hgv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrackingComponent", function () {
        return TrackingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @covalent/core/dialogs */
      "18Cx");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _covalent_flavored_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @covalent/flavored-markdown */
      "S0e2");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var TrackingComponent = /*#__PURE__*/function () {
        function TrackingComponent() {
          _classCallCheck(this, TrackingComponent);

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.basicFlavoredMarkdown = "\n   ## GP FHIR MedicationRequests\n\n   Some GP suppliers have patient facing services with the concept of tracking. This is centred around the FP10 and includes:\n   - Patient asking for a refill\n   - GP authorizing refill\n   - Patient is informed the FP10 is ready for collection.\n   \n   ## Pharmacy FHIR MedicationDispense\n   \n   This is centred around the delivery of the medication and includes:\n   - medication is ready for collection\n   - medication has been dispatched.\n   \n   ## Notes\n   \n   In both cases these medication fulfilment tasks appear to be decoupled from the clinical medicinal FHIR resources. \n   \n   They are seperate atomic actions.\n ";
        }

        _createClass(TrackingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ok",
          value: function ok(event) {
            this.closed.emit();
          }
        }]);

        return TrackingComponent;
      }();

      TrackingComponent.??fac = function TrackingComponent_Factory(t) {
        return new (t || TrackingComponent)();
      };

      TrackingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TrackingComponent,
        selectors: [["app-tracking"]],
        outputs: {
          closed: "closed"
        },
        decls: 9,
        vars: 3,
        consts: [[3, "title", "toolbarColor", "close"], ["mat-raised-button", "", 1, "text-upper", 3, "click"]],
        template: function TrackingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td-window-dialog", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("close", function TrackingComponent_Template_td_window_dialog_close_0_listener() {
              return ctx.closed.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td-flavored-markdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TrackingComponent_Template_button_click_5_listener() {
              return ctx.closed.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TrackingComponent_Template_button_click_7_listener($event) {
              return ctx.ok($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Ok ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("title", "Tracking (FHIR Task)")("toolbarColor", "accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.basicFlavoredMarkdown);
          }
        },
        directives: [_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_1__["??a"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _covalent_flavored_markdown__WEBPACK_IMPORTED_MODULE_3__["TdFlavoredMarkdownComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFja2luZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TrackingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tracking',
            templateUrl: './tracking.component.html',
            styleUrls: ['./tracking.component.scss']
          }]
        }], function () {
          return [];
        }, {
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Development\kevinmayfield\phr\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4U10":
    /*!**********************************************************************************!*\
      !*** ./src/app/prescription-order-detail/prescription-order-detail.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: PrescriptionOrderDetailComponent */

    /***/
    function U10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrescriptionOrderDetailComponent", function () {
        return PrescriptionOrderDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @covalent/core/dialogs */
      "18Cx");
      /* harmony import */


      var _service_nhsd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/nhsd.service */
      "nLgJ");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function PrescriptionOrderDetailComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Authored ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 120, "px");
        }
      }

      function PrescriptionOrderDetailComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.datepipe.transform(element_r32.authoredOn, "dd MMM yyyy HH:mm"), " ");
        }
      }

      function PrescriptionOrderDetailComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Medication ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrderDetailComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r33.concept, " ");
        }
      }

      function PrescriptionOrderDetailComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Dose ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 300, "px");
        }
      }

      function PrescriptionOrderDetailComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r34.dosageInstruction[0].text, " ");
        }
      }

      function PrescriptionOrderDetailComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Medication Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 300, "px");
        }
      }

      function PrescriptionOrderDetailComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r35.medicationCodeableConcept.coding[0].display, " ");
        }
      }

      function PrescriptionOrderDetailComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Quantity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrderDetailComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r36.dispenseRequest.quantity.value, " ");
        }
      }

      function PrescriptionOrderDetailComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Unit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrderDetailComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r37.dispenseRequest.quantity.unit, " ");
        }
      }

      function PrescriptionOrderDetailComponent_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 19);
        }
      }

      function PrescriptionOrderDetailComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 20);
        }
      }

      function PrescriptionOrderDetailComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Prepared ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 140, "px");
        }
      }

      function PrescriptionOrderDetailComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r39 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r15.datepipe.transform(element_r39.whenPrepared, "dd MMM yyyy HH:mm"), " ");
        }
      }

      function PrescriptionOrderDetailComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Medication ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrderDetailComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r40.concept, " ");
        }
      }

      function PrescriptionOrderDetailComponent_th_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Pharmacy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrderDetailComponent_td_35_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r43.actor.display);
        }
      }

      function PrescriptionOrderDetailComponent_td_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PrescriptionOrderDetailComponent_td_35_ng_template_2_Template, 2, 1, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", element_r41.performer);
        }
      }

      function PrescriptionOrderDetailComponent_th_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Medication Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrderDetailComponent_td_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r45.medicationCodeableConcept.coding[0].display, " ");
        }
      }

      function PrescriptionOrderDetailComponent_th_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Quantity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrderDetailComponent_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r46.quantity.value, " ");
        }
      }

      function PrescriptionOrderDetailComponent_th_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Unit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrderDetailComponent_td_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r47.quantity.unit, " ");
        }
      }

      function PrescriptionOrderDetailComponent_th_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrderDetailComponent_td_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r48.status, " ");
        }
      }

      function PrescriptionOrderDetailComponent_th_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrderDetailComponent_td_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "assignment_return");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Cancel Dispense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrderDetailComponent_tr_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 19);
        }
      }

      function PrescriptionOrderDetailComponent_tr_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 20);
        }
      }

      var PrescriptionOrderDetailComponent = /*#__PURE__*/function () {
        function PrescriptionOrderDetailComponent(_dialogService, nhsd, _viewContainerRef, task) {
          _classCallCheck(this, PrescriptionOrderDetailComponent);

          this._dialogService = _dialogService;
          this.nhsd = nhsd;
          this._viewContainerRef = _viewContainerRef;
          this.task = task;
          this.displayedColumns = ['authored', 'name', 'dosage', 'quantity', 'unit'];
          this.displayedDispenseColumns = ['prepared', 'performer', 'name', 'quantity', 'unit'];
          this.datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-GB');
          this.prescription = [];
          this.dispense = [];
        }

        _createClass(PrescriptionOrderDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.prescription);
            this.dispenseDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.dispense);
            this.nhsd.medicationRequest.subscribe(function (medicationRequest) {
              _this.prescription.push(medicationRequest);

              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.prescription);
            });
            this.nhsd.medicationDispense.subscribe(function (medicationDispense) {
              console.log(medicationDispense);

              _this.dispense.push(medicationDispense);

              _this.dispenseDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dispense);
            });
            var nTask = this.task.resource;

            if (nTask.input !== undefined && nTask.input.length > 0) {
              var _iterator = _createForOfIteratorHelper(nTask.input),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var taskInput = _step.value;

                  if (taskInput.valueReference !== undefined && taskInput.valueReference.reference !== undefined) {
                    console.log(taskInput.valueReference.display);
                    this.nhsd.getMedicationRequest(taskInput.valueReference.reference);
                    this.nhsd.getMedicationDispense(taskInput.valueReference.reference);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }]);

        return PrescriptionOrderDetailComponent;
      }();

      PrescriptionOrderDetailComponent.??fac = function PrescriptionOrderDetailComponent_Factory(t) {
        return new (t || PrescriptionOrderDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_nhsd_service__WEBPACK_IMPORTED_MODULE_5__["NhsdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      PrescriptionOrderDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PrescriptionOrderDetailComponent,
        selectors: [["app-prescription-order-detail"]],
        decls: 56,
        vars: 6,
        consts: [["mat-table", "", 3, "dataSource"], ["matColumnDef", "authored"], ["mat-header-cell", "", 3, "width", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "concept"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "dosage"], ["matColumnDef", "name"], ["matColumnDef", "quantity"], ["matColumnDef", "unit"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "prepared"], ["matColumnDef", "performer"], ["matColumnDef", "status"], ["matColumnDef", "cancel_dispense"], ["mat-button", "", "mat-dialog-close", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["ngFor", "", 3, "ngForOf"], ["mat-icon-button", "", "matTooltip", "This is the ETPWithdrawal interaction. Does not map well to FHIR "]],
        template: function PrescriptionOrderDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Medication Requests");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, PrescriptionOrderDetailComponent_th_5_Template, 2, 2, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, PrescriptionOrderDetailComponent_td_6_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](7, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, PrescriptionOrderDetailComponent_th_8_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, PrescriptionOrderDetailComponent_td_9_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](10, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, PrescriptionOrderDetailComponent_th_11_Template, 2, 2, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, PrescriptionOrderDetailComponent_td_12_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](13, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, PrescriptionOrderDetailComponent_th_14_Template, 2, 2, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, PrescriptionOrderDetailComponent_td_15_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](16, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, PrescriptionOrderDetailComponent_th_17_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, PrescriptionOrderDetailComponent_td_18_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](19, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, PrescriptionOrderDetailComponent_th_20_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, PrescriptionOrderDetailComponent_td_21_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, PrescriptionOrderDetailComponent_tr_22_Template, 1, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, PrescriptionOrderDetailComponent_tr_23_Template, 1, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Dispensing History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](27, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, PrescriptionOrderDetailComponent_th_28_Template, 2, 2, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, PrescriptionOrderDetailComponent_td_29_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](30, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, PrescriptionOrderDetailComponent_th_31_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, PrescriptionOrderDetailComponent_td_32_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](33, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, PrescriptionOrderDetailComponent_th_34_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, PrescriptionOrderDetailComponent_td_35_Template, 3, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](36, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, PrescriptionOrderDetailComponent_th_37_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, PrescriptionOrderDetailComponent_td_38_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](39, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, PrescriptionOrderDetailComponent_th_40_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, PrescriptionOrderDetailComponent_td_41_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](42, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, PrescriptionOrderDetailComponent_th_43_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, PrescriptionOrderDetailComponent_td_44_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](45, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, PrescriptionOrderDetailComponent_th_46_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, PrescriptionOrderDetailComponent_td_47_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](48, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, PrescriptionOrderDetailComponent_th_49_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, PrescriptionOrderDetailComponent_td_50_Template, 5, 0, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, PrescriptionOrderDetailComponent_tr_51_Template, 1, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, PrescriptionOrderDetailComponent_tr_52_Template, 1, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dispenseDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedDispenseColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedDispenseColumns);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzY3JpcHRpb24tb3JkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PrescriptionOrderDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-prescription-order-detail',
            templateUrl: './prescription-order-detail.component.html',
            styleUrls: ['./prescription-order-detail.component.scss']
          }]
        }], function () {
          return [{
            type: _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"]
          }, {
            type: _service_nhsd_service__WEBPACK_IMPORTED_MODULE_5__["NhsdService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5lyI":
    /*!********************************************!*\
      !*** ./src/app/orders/orders.component.ts ***!
      \********************************************/

    /*! exports provided: OrdersComponent */

    /***/
    function lyI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
        return OrdersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_nhsd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../service/nhsd.service */
      "nLgJ");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @covalent/core/dialogs */
      "18Cx");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _eps_orders_prescription_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../eps-orders/prescription-orders.component */
      "ApTV");
      /* harmony import */


      var _gp_diary_gp_diary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../gp-diary/gp-diary.component */
      "rmEv");
      /* harmony import */


      var _covalent_core_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @covalent/core/file */
      "0Y+T");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var OrdersComponent = /*#__PURE__*/function () {
        function OrdersComponent(nhsd, dialog, _dialogService) {
          _classCallCheck(this, OrdersComponent);

          this.nhsd = nhsd;
          this.dialog = dialog;
          this._dialogService = _dialogService;
          this.disabled = false;
        }

        _createClass(OrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.nhsd.error.subscribe(function (error) {
              var _a, _b;

              console.log(error);
              var operationOutcome = error;
              console.log((_a = operationOutcome.issue[0].details) === null || _a === void 0 ? void 0 : _a.text); // @ts-ignore

              var msg = (_b = operationOutcome.issue[0].details) === null || _b === void 0 ? void 0 : _b.text; // @ts-ignore

              var matDialogRef = _this2._dialogService.openAlert({
                title: 'Error',
                message: msg
              });

              matDialogRef.afterClosed().subscribe(function (result) {//console.log(matDialogRef.componentInstance.value);
              });
            });
          } // https://stackoverflow.com/questions/40214772/file-upload-in-angular

        }, {
          key: "selectEvent",
          value: function selectEvent(files) {
            var _this3 = this;

            if (files instanceof FileList) {
              console.log('is filelist');
            } else if (files instanceof File) {
              console.log('is file');
              var file = files;
              var fileReader = new FileReader(); // tslint:disable-next-line:only-arrow-functions typedef

              fileReader.onloadend = function (e) {
                if (typeof fileReader.result === 'string') {
                  var bundle = JSON.parse(fileReader.result);

                  _this3.nhsd.convertToTransaction(bundle);
                }
              };

              fileReader.readAsText(file);
            } else {
              console.log('not a file type');
            }
          }
        }]);

        return OrdersComponent;
      }();

      OrdersComponent.??fac = function OrdersComponent_Factory(t) {
        return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_nhsd_service__WEBPACK_IMPORTED_MODULE_1__["NhsdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_3__["TdDialogService"]));
      };

      OrdersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OrdersComponent,
        selectors: [["app-orders"]],
        decls: 10,
        vars: 1,
        consts: [["color", "primary", "accept", ".json,.xml", 3, "ngModel", "ngModelChange", "select"]],
        template: function OrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-prescription-orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-gp-diary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td-file-input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrdersComponent_Template_td_file_input_ngModelChange_5_listener($event) {
              return ctx.files = $event;
            })("select", function OrdersComponent_Template_td_file_input_select_5_listener($event) {
              return ctx.selectEvent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Choose a FHIR Bundle file...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.files);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _eps_orders_prescription_orders_component__WEBPACK_IMPORTED_MODULE_5__["PrescriptionOrdersComponent"], _gp_diary_gp_diary_component__WEBPACK_IMPORTED_MODULE_6__["GpDiaryComponent"], _covalent_core_file__WEBPACK_IMPORTED_MODULE_7__["TdFileInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-orders',
            templateUrl: './orders.component.html',
            styleUrls: ['./orders.component.scss']
          }]
        }], function () {
          return [{
            type: _service_nhsd_service__WEBPACK_IMPORTED_MODULE_1__["NhsdService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }, {
            type: _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_3__["TdDialogService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6uu6":
    /*!*****************************************!*\
      !*** ./src/app/service/auth.service.ts ***!
      \*****************************************/

    /*! exports provided: AuthService */

    /***/
    function uu6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Oauth2token = function Oauth2token() {
        _classCallCheck(this, Oauth2token);
      };

      var AuthService = /*#__PURE__*/function () {
        function AuthService(router, http) {
          _classCallCheck(this, AuthService);

          this.router = router;
          this.http = http;
          this.accessToken = undefined;
          this.tokenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.auth = false;
        }

        _createClass(AuthService, [{
          key: "performGetAccessToken",
          value: function performGetAccessToken(authCode) {
            var _this4 = this;

            // https://digital.nhs.uk/developer/guides-and-documentation/security-and-authorisation/user-restricted-restful-apis-nhs-cis2-combined-authentication-and-authorisation
            var bearerToken = ''; // 'Basic ' + btoa(environment.oauth2.client_id + ':' + environment.oauth2.client_secret);

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded'
            });
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].oauth2.token;
            var urlParams = new URLSearchParams({
              grant_type: 'authorization_code'
            }); // urlParams.append('client_id', environment.oauth2.client_id),
            // urlParams.append(  'client_secret', environment.oauth2.client_secret);

            urlParams.append('redirect_uri', document.baseURI + 'callback');

            if (typeof authCode === 'string') {
              urlParams.append('code', authCode);
            }

            this.postAny(url, urlParams.toString(), headers).subscribe(function (token) {
              // console.log(response);
              _this4.smartToken = token;
              console.log('OAuth2Token : ' + token);

              _this4.setAccessToken(token);
            }, function (error) {
              console.log(error);
            }, function () {// Emit event
            });
          } // tslint:disable-next-line:typedef

        }, {
          key: "postAny",
          value: function postAny(url, body, httpHeaders) {
            return this.http.post(url, body, {
              headers: httpHeaders
            });
          }
        }, {
          key: "setAccessToken",
          value: function setAccessToken(token) {
            // tslint:disable-next-line:new-parens
            var date = new Date(); // Create an expires at ..... don't know when we got the token

            token.expires_at = Math.round(new Date().valueOf() / 1000) + token.expires_in;
            localStorage.setItem('nhsdToken', JSON.stringify(token));
            this.accessToken = token.access_token;
            this.tokenChange.emit(token);
          }
        }, {
          key: "hasAccessToken",
          value: function hasAccessToken() {
            return this.getAccessToken() !== undefined;
          }
        }, {
          key: "getAccessToken",
          value: function getAccessToken() {
            if (localStorage.getItem('nhsdToken') !== undefined) {
              var token = JSON.parse(localStorage.getItem('nhsdToken'));
              var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();

              if (this.isTokenExpired(token)) {
                console.log('withings Token expired');
                this.accessToken = undefined; //  this.getRefreshToken();

                return undefined;
              }

              if (token !== undefined) {
                this.accessToken = token.access_token;
                return this.accessToken;
              }
            }

            return undefined;
          }
        }, {
          key: "deleteAccessToken",
          value: function deleteAccessToken() {
            this.accessToken = undefined;
            localStorage.removeItem('nhsdToken');
          }
        }, {
          key: "getTokenExpirationDate",
          value: function getTokenExpirationDate(decoded) {
            if (!decoded || !decoded.hasOwnProperty('expires_at')) {
              // Invalid format
              localStorage.removeItem('nhsdToken');
              return null;
            }

            var date = new Date(0);
            date.setUTCSeconds(decoded.expires_at);
            return date;
          }
        }, {
          key: "isTokenExpired",
          value: function isTokenExpired(token, offsetSeconds) {
            if (!token || token === '') {
              return true;
            }

            var date = this.getTokenExpirationDate(token);
            offsetSeconds = offsetSeconds || 0;
            console.log('nhsd token expiry date ' + date);

            if (date === null) {
              return false;
            }

            return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
          }
        }]);

        return AuthService;
      }();

      AuthService.??fac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        token: AuthService,
        factory: AuthService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ApTV":
    /*!*************************************************************!*\
      !*** ./src/app/eps-orders/prescription-orders.component.ts ***!
      \*************************************************************/

    /*! exports provided: PrescriptionOrdersComponent */

    /***/
    function ApTV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrescriptionOrdersComponent", function () {
        return PrescriptionOrdersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _prescription_order_detail_prescription_order_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../prescription-order-detail/prescription-order-detail.component */
      "4U10");
      /* harmony import */


      var _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../tracking/tracking.component */
      "+hgv");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _service_nhsd_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../service/nhsd.service */
      "nLgJ");
      /* harmony import */


      var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @covalent/core/dialogs */
      "18Cx");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function PrescriptionOrdersComponent_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 80, "px");
        }
      }

      function PrescriptionOrdersComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r20.status, " ");
        }
      }

      function PrescriptionOrdersComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Medications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrdersComponent_td_10_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r23.valueReference.display);
        }
      }

      function PrescriptionOrdersComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PrescriptionOrdersComponent_td_10_ng_template_2_Template, 2, 1, "ng-template", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", element_r21.input);
        }
      }

      function PrescriptionOrdersComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Pharmacy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrdersComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r25.owner == null ? null : element_r25.owner.identifier.value, " ");
        }
      }

      function PrescriptionOrdersComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Requester ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 120, "px");
        }
      }

      function PrescriptionOrdersComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r26.requester.display, " ");
        }
      }

      function PrescriptionOrdersComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Authored ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 120, "px");
        }
      }

      function PrescriptionOrdersComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r9.datepipe.transform(element_r27.authoredOn, "dd MMM yyyy HH:mm"), " ");
        }
      }

      function PrescriptionOrdersComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Order No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrdersComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r28.identifier[0].value, " ");
        }
      }

      function PrescriptionOrdersComponent_th_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 120, "px");
        }
      }

      function PrescriptionOrdersComponent_td_25_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "remove_shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrdersComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PrescriptionOrdersComponent_td_25_button_1_Template, 4, 0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", element_r29.status == "accepted");
        }
      }

      function PrescriptionOrdersComponent_th_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 50, "px");
        }
      }

      function PrescriptionOrdersComponent_td_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PrescriptionOrdersComponent_td_28_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var element_r31 = ctx.$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r32.view(element_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "inventory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrdersComponent_th_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Tracking ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 50, "px");
        }
      }

      function PrescriptionOrdersComponent_td_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PrescriptionOrdersComponent_td_31_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r35.tracking($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " local_shipping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionOrdersComponent_tr_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 25);
        }
      }

      function PrescriptionOrdersComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 26);
        }
      }

      var PrescriptionOrdersComponent = /*#__PURE__*/function () {
        function PrescriptionOrdersComponent(hapi, dialog, _dialogService) {
          _classCallCheck(this, PrescriptionOrdersComponent);

          this.hapi = hapi;
          this.dialog = dialog;
          this._dialogService = _dialogService;
          this.datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-GB');
          this.displayedColumns = ['authoredOn', 'status', 'requester', 'pharmacy', 'medications', 'order_number', 'view_order', 'track_order'];
          this.data = [];
        }

        _createClass(PrescriptionOrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
            this.hapi.queryTasks();
            this.hapi.taskChange.subscribe(function () {
              _this5.data = _this5.hapi.getTasks();
              _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this5.data);
              _this5.dataSource.sort = _this5.sort;
            });
          }
        }, {
          key: "view",
          value: function view(resource) {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.data = {
              id: 1,
              resource: resource
            };
            this.dialog.open(_prescription_order_detail_prescription_order_detail_component__WEBPACK_IMPORTED_MODULE_4__["PrescriptionOrderDetailComponent"], dialogConfig);
          }
        }, {
          key: "tracking",
          value: function tracking(event) {
            var _this$_dialogService$ = this._dialogService.openDraggable({
              component: _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_5__["TrackingComponent"],
              dragHandleSelectors: ['mat-toolbar'],
              config: {
                panelClass: ['td-window-dialog']
              }
            }),
                matDialogRef = _this$_dialogService$.matDialogRef,
                dragRefSubject = _this$_dialogService$.dragRefSubject;

            matDialogRef.componentInstance.closed.subscribe(function () {
              return matDialogRef.close();
            });
          }
        }]);

        return PrescriptionOrdersComponent;
      }();

      PrescriptionOrdersComponent.??fac = function PrescriptionOrdersComponent_Factory(t) {
        return new (t || PrescriptionOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_nhsd_service__WEBPACK_IMPORTED_MODULE_7__["NhsdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_8__["TdDialogService"]));
      };

      PrescriptionOrdersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PrescriptionOrdersComponent,
        selectors: [["app-prescription-orders"]],
        viewQuery: function PrescriptionOrdersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 34,
        vars: 3,
        consts: [["mat-table", "", "matSort", "", "matSortActive", "authoredOn", "matSortDirection", "desc", "width", "100%", 3, "dataSource"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", 3, "width", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "medications"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "pharmacy"], ["matColumnDef", "requester"], ["mat-header-cell", "", 3, "width", 4, "matHeaderCellDef"], ["matColumnDef", "authoredOn"], ["matColumnDef", "order_number"], ["matColumnDef", "return_order"], ["matColumnDef", "view_order"], ["matColumnDef", "track_order"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["ngFor", "", 3, "ngForOf"], ["color", "warn", "mat-icon-button", "", 4, "ngIf"], ["color", "warn", "mat-icon-button", ""], ["color", "accent", "mat-icon-button", "", "matTooltip", "Prescription Order Details", 3, "click"], ["color", "accent", "matTooltip", "Tracking", "mat-icon-button", ""], [3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function PrescriptionOrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "EPS Prescription Orders (FHIR Task)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, PrescriptionOrdersComponent_th_6_Template, 2, 2, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, PrescriptionOrdersComponent_td_7_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, PrescriptionOrdersComponent_th_9_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, PrescriptionOrdersComponent_td_10_Template, 3, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, PrescriptionOrdersComponent_th_12_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, PrescriptionOrdersComponent_td_13_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](14, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, PrescriptionOrdersComponent_th_15_Template, 2, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, PrescriptionOrdersComponent_td_16_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](17, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, PrescriptionOrdersComponent_th_18_Template, 2, 2, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, PrescriptionOrdersComponent_td_19_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](20, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, PrescriptionOrdersComponent_th_21_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, PrescriptionOrdersComponent_td_22_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](23, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, PrescriptionOrdersComponent_th_24_Template, 2, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, PrescriptionOrdersComponent_td_25_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](26, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, PrescriptionOrdersComponent_th_27_Template, 2, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, PrescriptionOrdersComponent_td_28_Template, 4, 0, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](29, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, PrescriptionOrdersComponent_th_30_Template, 2, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, PrescriptionOrdersComponent_td_31_Template, 4, 0, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, PrescriptionOrdersComponent_tr_32_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, PrescriptionOrdersComponent_tr_33_Template, 1, 0, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzY3JpcHRpb24tb3JkZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PrescriptionOrdersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-prescription-orders',
            templateUrl: './prescription-orders.component.html',
            styleUrls: ['./prescription-orders.component.scss']
          }]
        }], function () {
          return [{
            type: _service_nhsd_service__WEBPACK_IMPORTED_MODULE_7__["NhsdService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }, {
            type: _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_8__["TdDialogService"]
          }];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        oauth2: {
          token: 'https://int.api.service.nhs.uk/oauth2-no-smartcard/token',
          auth: 'https://int.api.service.nhs.uk/oauth2-no-smartcard/authorize',
          cookie_domain: 'localhost',
          logonUrl: 'http://localhost:4200/ccri-logon'
        },
        virtually: 'https://test-emis.virtually.healthcare/R4',
        virtuallyt: 'http://127.0.0.1:8180/R4',
        nhsd: 'https://server.fire.ly/r4',
        hapibase: 'http://hapi.fhir.org/baseR4',
        firelybase: 'https://server.fire.ly/r4'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DiAt":
    /*!************************************************!*\
      !*** ./src/app/callback/callback.component.ts ***!
      \************************************************/

    /*! exports provided: CallbackComponent */

    /***/
    function DiAt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallbackComponent", function () {
        return CallbackComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/auth.service */
      "6uu6");

      var CallbackComponent = /*#__PURE__*/function () {
        function CallbackComponent(route, auth, router) {
          _classCallCheck(this, CallbackComponent);

          this.route = route;
          this.auth = auth;
          this.router = router;
          this.authCode = '';
        } // tslint:disable-next-line:typedef


        _createClass(CallbackComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.auth.tokenChange.subscribe(function () {
              _this6.router.navigateByUrl('/');
            });
            this.route.queryParamMap.subscribe(function (params) {
              console.log(params);
              var code = params.get('code'); // var state = params.get('state');

              _this6.auth.performGetAccessToken(code);
            });
          }
        }]);

        return CallbackComponent;
      }();

      CallbackComponent.??fac = function CallbackComponent_Factory(t) {
        return new (t || CallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      CallbackComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CallbackComponent,
        selectors: [["app-callback"]],
        decls: 1,
        vars: 0,
        template: function CallbackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "callback done\n");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxsYmFjay5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CallbackComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-callback',
            templateUrl: './callback.component.html',
            styleUrls: ['./callback.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'phr';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @covalent/dynamic-forms */
      "+N0m");
      /* harmony import */


      var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @covalent/core/layout */
      "YGdM");
      /* harmony import */


      var _covalent_core_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @covalent/core/steps */
      "N8Dl");
      /* harmony import */


      var _covalent_highlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @covalent/highlight */
      "PiqB");
      /* harmony import */


      var _covalent_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @covalent/markdown */
      "oAfj");
      /* harmony import */


      var _covalent_echarts_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @covalent/echarts/base */
      "jLN3");
      /* harmony import */


      var _covalent_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @covalent/http */
      "Ojde");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./main/main.component */
      "wlho");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @covalent/core/data-table */
      "6809");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./orders/orders.component */
      "5lyI");
      /* harmony import */


      var _gp_prescriptions_prescription_refill_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./gp-prescriptions/prescription-refill.component */
      "ytM1");
      /* harmony import */


      var _prescription_order_detail_prescription_order_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./prescription-order-detail/prescription-order-detail.component */
      "4U10");
      /* harmony import */


      var _covalent_core_message__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @covalent/core/message */
      "cM7e");
      /* harmony import */


      var _eps_orders_prescription_orders_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./eps-orders/prescription-orders.component */
      "ApTV");
      /* harmony import */


      var _callback_callback_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./callback/callback.component */
      "DiAt");
      /* harmony import */


      var _service_auth_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./service/auth-guard */
      "mMVW");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _covalent_core_file__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @covalent/core/file */
      "0Y+T");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _gp_diary_gp_diary_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./gp-diary/gp-diary.component */
      "rmEv");
      /* harmony import */


      var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @covalent/core/dialogs */
      "18Cx");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _diary_entry_diary_entry_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./diary-entry/diary-entry.component */
      "hrfk");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "1yaQ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./tracking/tracking.component */
      "+hgv");
      /* harmony import */


      var _covalent_flavored_markdown__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @covalent/flavored-markdown */
      "S0e2");
      /* harmony import */


      var _medications_medications_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./medications/medications.component */
      "cylq");
      /* harmony import */


      var _covalent_core_media__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @covalent/core/media */
      "3dAa"); // @ts-ignore


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"], {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MAT_DATE_LOCALE"],
          useValue: 'en-GB'
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_5__["CovalentLayoutModule"], _covalent_core_steps__WEBPACK_IMPORTED_MODULE_6__["CovalentStepsModule"], // (optional) Additional Covalent Modules imports
        _covalent_http__WEBPACK_IMPORTED_MODULE_10__["CovalentHttpModule"].forRoot(), _covalent_highlight__WEBPACK_IMPORTED_MODULE_7__["CovalentHighlightModule"], _covalent_markdown__WEBPACK_IMPORTED_MODULE_8__["CovalentMarkdownModule"], _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_4__["CovalentDynamicFormsModule"], _covalent_echarts_base__WEBPACK_IMPORTED_MODULE_9__["CovalentBaseEchartsModule"], _covalent_core_message__WEBPACK_IMPORTED_MODULE_27__["CovalentMessageModule"], _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_35__["CovalentDialogsModule"], _covalent_flavored_markdown__WEBPACK_IMPORTED_MODULE_43__["CovalentFlavoredMarkdownModule"], _covalent_core_media__WEBPACK_IMPORTED_MODULE_45__["CovalentMediaModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_16__["CovalentDataTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _covalent_core_file__WEBPACK_IMPORTED_MODULE_32__["CovalentFileModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_40__["MatMomentDateModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_24__["OrdersComponent"], _gp_prescriptions_prescription_refill_component__WEBPACK_IMPORTED_MODULE_25__["PrescriptionRefillComponent"], _eps_orders_prescription_orders_component__WEBPACK_IMPORTED_MODULE_28__["PrescriptionOrdersComponent"], _gp_diary_gp_diary_component__WEBPACK_IMPORTED_MODULE_34__["GpDiaryComponent"], _callback_callback_component__WEBPACK_IMPORTED_MODULE_29__["CallbackComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"], _prescription_order_detail_prescription_order_detail_component__WEBPACK_IMPORTED_MODULE_26__["PrescriptionOrderDetailComponent"], _diary_entry_diary_entry_component__WEBPACK_IMPORTED_MODULE_37__["DiaryEntryComponent"], _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_42__["TrackingComponent"], _medications_medications_component__WEBPACK_IMPORTED_MODULE_44__["MedicationsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_5__["CovalentLayoutModule"], _covalent_core_steps__WEBPACK_IMPORTED_MODULE_6__["CovalentStepsModule"], _covalent_http__WEBPACK_IMPORTED_MODULE_10__["CovalentHttpModule"], _covalent_highlight__WEBPACK_IMPORTED_MODULE_7__["CovalentHighlightModule"], _covalent_markdown__WEBPACK_IMPORTED_MODULE_8__["CovalentMarkdownModule"], _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_4__["CovalentDynamicFormsModule"], _covalent_echarts_base__WEBPACK_IMPORTED_MODULE_9__["CovalentBaseEchartsModule"], _covalent_core_message__WEBPACK_IMPORTED_MODULE_27__["CovalentMessageModule"], _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_35__["CovalentDialogsModule"], _covalent_flavored_markdown__WEBPACK_IMPORTED_MODULE_43__["CovalentFlavoredMarkdownModule"], _covalent_core_media__WEBPACK_IMPORTED_MODULE_45__["CovalentMediaModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_16__["CovalentDataTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _covalent_core_file__WEBPACK_IMPORTED_MODULE_32__["CovalentFileModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_40__["MatMomentDateModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_24__["OrdersComponent"], _gp_prescriptions_prescription_refill_component__WEBPACK_IMPORTED_MODULE_25__["PrescriptionRefillComponent"], _eps_orders_prescription_orders_component__WEBPACK_IMPORTED_MODULE_28__["PrescriptionOrdersComponent"], _gp_diary_gp_diary_component__WEBPACK_IMPORTED_MODULE_34__["GpDiaryComponent"], _callback_callback_component__WEBPACK_IMPORTED_MODULE_29__["CallbackComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"], _prescription_order_detail_prescription_order_detail_component__WEBPACK_IMPORTED_MODULE_26__["PrescriptionOrderDetailComponent"], _diary_entry_diary_entry_component__WEBPACK_IMPORTED_MODULE_37__["DiaryEntryComponent"], _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_42__["TrackingComponent"], _medications_medications_component__WEBPACK_IMPORTED_MODULE_44__["MedicationsComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_5__["CovalentLayoutModule"], _covalent_core_steps__WEBPACK_IMPORTED_MODULE_6__["CovalentStepsModule"], // (optional) Additional Covalent Modules imports
            _covalent_http__WEBPACK_IMPORTED_MODULE_10__["CovalentHttpModule"].forRoot(), _covalent_highlight__WEBPACK_IMPORTED_MODULE_7__["CovalentHighlightModule"], _covalent_markdown__WEBPACK_IMPORTED_MODULE_8__["CovalentMarkdownModule"], _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_4__["CovalentDynamicFormsModule"], _covalent_echarts_base__WEBPACK_IMPORTED_MODULE_9__["CovalentBaseEchartsModule"], _covalent_core_message__WEBPACK_IMPORTED_MODULE_27__["CovalentMessageModule"], _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_35__["CovalentDialogsModule"], _covalent_flavored_markdown__WEBPACK_IMPORTED_MODULE_43__["CovalentFlavoredMarkdownModule"], _covalent_core_media__WEBPACK_IMPORTED_MODULE_45__["CovalentMediaModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_16__["CovalentDataTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _covalent_core_file__WEBPACK_IMPORTED_MODULE_32__["CovalentFileModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_40__["MatMomentDateModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]],
            entryComponents: [_prescription_order_detail_prescription_order_detail_component__WEBPACK_IMPORTED_MODULE_26__["PrescriptionOrderDetailComponent"]],
            providers: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"], {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MAT_DATE_LOCALE"],
              useValue: 'en-GB'
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "cylq":
    /*!******************************************************!*\
      !*** ./src/app/medications/medications.component.ts ***!
      \******************************************************/

    /*! exports provided: MedicationsComponent */

    /***/
    function cylq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicationsComponent", function () {
        return MedicationsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _gp_prescriptions_prescription_refill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../gp-prescriptions/prescription-refill.component */
      "ytM1");

      var MedicationsComponent = /*#__PURE__*/function () {
        function MedicationsComponent() {
          _classCallCheck(this, MedicationsComponent);
        }

        _createClass(MedicationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MedicationsComponent;
      }();

      MedicationsComponent.??fac = function MedicationsComponent_Factory(t) {
        return new (t || MedicationsComponent)();
      };

      MedicationsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MedicationsComponent,
        selectors: [["app-medications"]],
        decls: 3,
        vars: 0,
        consts: [["source", "EPS"], ["source", "GP"]],
        template: function MedicationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-prescription-refill", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-prescription-refill", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _gp_prescriptions_prescription_refill_component__WEBPACK_IMPORTED_MODULE_2__["PrescriptionRefillComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MedicationsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-medications',
            templateUrl: './medications.component.html',
            styleUrls: ['./medications.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ejU6":
    /*!****************************************!*\
      !*** ./src/app/service/FhirService.ts ***!
      \****************************************/

    /*! exports provided: FhirService */

    /***/
    function ejU6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FhirService", function () {
        return FhirService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! uuid */
      "4USb");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth.service */
      "6uu6");

      var FhirService = /*#__PURE__*/function () {
        function FhirService(http, auth) {
          _classCallCheck(this, FhirService);

          this.http = http;
          this.auth = auth;
          this.medicationRequests = [];
          this.medicationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.taskChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.tasks = [];
        }

        _createClass(FhirService, [{
          key: "getTasks",
          value: function getTasks() {
            return this.tasks;
          }
        }, {
          key: "queryTasks",
          value: function queryTasks() {
            var _this7 = this;

            var headers = this.getHeaders(); // tslint:disable-next-line:typedef

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].virtually + '/Task?patient=137', {
              headers: headers
            }).subscribe(function (result) {
              var bundle = result;

              if (bundle.entry !== undefined && bundle.entry.length > 0) {
                console.log('Task found.');
                _this7.tasks = [];

                var _iterator2 = _createForOfIteratorHelper(bundle.entry),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var entry = _step2.value;

                    _this7.tasks.push(entry.resource);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                _this7.taskChange.emit({});
              } else {
                console.log('Task not found.');
              }
            });
          }
        }, {
          key: "getMedicationRequests",
          value: function getMedicationRequests() {
            return this.medicationRequests;
          }
        }, {
          key: "queryMedicationRequests",
          value: function queryMedicationRequests() {
            var _this8 = this;

            var headers = this.getHeaders(); // tslint:disable-next-line:typedef

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].virtually + '/MedicationRequest?patient=137&date=2019-01-01', {
              headers: headers
            }).subscribe(function (result) {
              var bundle = result;

              if (bundle.entry !== undefined && bundle.entry.length > 0) {
                _this8.medicationRequests = [];

                var _iterator3 = _createForOfIteratorHelper(bundle.entry),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var entry = _step3.value;

                    _this8.medicationRequests.push(entry.resource);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                _this8.medicationChange.emit({});
              } else {
                console.log('Medication not found.');
              }
            });
          }
        }, {
          key: "postTask",
          value: function postTask(task) {
            var _a;

            var headers = this.getHeaders();
            var taskUrn = 'urn:uuid:' + Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
            var bundle = {
              type: 'message',
              resourceType: 'Bundle',
              identifier: {
                system: 'https://tools.ietf.org/html/rfc4122',
                value: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])()
              },
              entry: [{
                fullUrl: 'urn:uuid:' + Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
                resource: {
                  resourceType: 'QuestionnaireResponse',
                  extension: [{
                    url: 'http://fhir.virtuallyhealthcare.co.uk/Location',
                    valueReference: {
                      reference: 'Location/4884'
                    }
                  }, {
                    url: 'http://fhir.virtuallyhealthcare.co.uk/LocationType',
                    extension: [{
                      url: 'ID',
                      valueString: '1672871000006114'
                    }, {
                      url: 'GUID',
                      valueString: '357EFD4F-7912-DE6E-13B8-D3FACED28522'
                    }, {
                      url: 'Name',
                      valueString: 'G.P.Surgery'
                    }]
                  }],
                  identifier: {
                    system: 'urn:uuid',
                    value: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])()
                  },
                  status: 'completed',
                  subject: {
                    reference: 'Patient/137'
                  },
                  encounter: {
                    display: 'Patient Facing Application'
                  },
                  authored: new Date().toISOString(),
                  author: {
                    reference: 'Practitioner/4620'
                  },
                  item: [{
                    linkId: 'task',
                    item: [{
                      linkId: 'task-type',
                      text: 'Task',
                      answer: [{
                        valueReference: {
                          reference: taskUrn
                        }
                      }]
                    }]
                  }]
                }
              }]
            };
            var taskEntry = {
              fullUrl: taskUrn,
              resource: task
            };
            (_a = bundle.entry) === null || _a === void 0 ? void 0 : _a.push(taskEntry);
            console.log(bundle);
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].virtually + '/$process-message', JSON.stringify(bundle), {
              headers: this.getHeaders()
            }).subscribe(function (result) {
              console.log('done post to virtually');
              console.log(result);
            }, function (error) {
              console.log(error.error);
            });
          }
        }, {
          key: "getHeaders",
          value: function getHeaders() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/fhir+json');
            headers = headers.append('Accept', 'application/fhir+json'); // headers = headers.append("Authorization", "Bearer "+this.auth.getAccessToken());

            return headers;
          }
        }]);

        return FhirService;
      }();

      FhirService.??fac = function FhirService_Factory(t) {
        return new (t || FhirService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
      };

      FhirService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: FhirService,
        factory: FhirService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FhirService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hrfk":
    /*!******************************************************!*\
      !*** ./src/app/diary-entry/diary-entry.component.ts ***!
      \******************************************************/

    /*! exports provided: DiaryEntryComponent */

    /***/
    function hrfk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiaryEntryComponent", function () {
        return DiaryEntryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @covalent/dynamic-forms */
      "+N0m");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! uuid */
      "4USb");
      /* harmony import */


      var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @covalent/core/dialogs */
      "18Cx");
      /* harmony import */


      var _service_FhirService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/FhirService */
      "ejU6");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["diaryForm"];

      var DragRef = function DragRef() {
        _classCallCheck(this, DragRef);
      };

      var DiaryEntryComponent = /*#__PURE__*/function () {
        function DiaryEntryComponent(dialogService, document, task, fhir) {
          _classCallCheck(this, DiaryEntryComponent);

          this.dialogService = dialogService;
          this.document = document;
          this.task = task;
          this.fhir = fhir;
          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.formElements = [{
            name: 'valueLabelSelect',
            hint: 'this is a SNOMED concept (procedure codes)',
            label: 'diary/task reason',
            type: _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__["TdDynamicElement"].Select,
            selections: [{
              label: 'Renewal of prescription',
              value: '103742009'
            }, {
              label: 'Review of medication',
              value: '182836005'
            }, {
              label: 'Asthma medication review',
              value: '394720003'
            }],
            "default": '103742009',
            required: true
          }, {
            name: 'description',
            label: 'Notes',
            type: _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__["TdDynamicType"].Text,
            "default": '',
            required: true
          }, {
            name: 'dateInput',
            label: 'Select a due by date',
            hint: 'this is a datepicker hint',
            type: _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__["TdDynamicType"].Date,
            "default": new Date(),
            required: true,
            min: new Date(2021, 11, 1).setHours(0, 0, 0, 0)
          }];
        }

        _createClass(DiaryEntryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.task);

            if (this.task.reasonCode !== undefined && this.task.reasonCode.coding !== undefined) {
              this.formElements[0]["default"] = this.task.reasonCode.coding[0].code;
            }

            if (this.task.note !== undefined) {
              var _iterator4 = _createForOfIteratorHelper(this.task.note),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var annotation = _step4.value;
                  this.formElements[1]["default"] += annotation.text + ' ';
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          }
        }, {
          key: "ok",
          value: function ok(event) {
            if (this.diaryForm !== undefined && this.diaryForm.form.value.dateInput !== undefined) {
              var newTask = {
                resourceType: 'Task',
                status: 'ready',
                identifier: [{
                  system: 'https://tools.ietf.org/html/rfc4122',
                  value: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])()
                }],
                intent: 'order',
                code: {
                  coding: [{
                    system: 'http://hl7.org/fhir/CodeSystem/task-code',
                    code: 'fulfill',
                    display: 'Fulfill the focal request'
                  }]
                },
                "for": {
                  reference: 'Patient/137'
                },
                requester: {
                  reference: 'Practitioner/4620'
                },
                authoredOn: new Date().toISOString()
              };

              switch (this.diaryForm.form.value.valueLabelSelect) {
                case '103742009':
                  newTask.reasonCode = {
                    coding: [{
                      system: 'http://snomed.info/sct',
                      code: '103742009',
                      display: 'Renewal of prescription'
                    }]
                  };
                  break;

                case '182836005':
                  newTask.reasonCode = {
                    coding: [{
                      system: 'http://snomed.info/sct',
                      code: '182836005',
                      display: 'Review of medication'
                    }]
                  };
                  break;

                case '394720003':
                  newTask.reasonCode = {
                    coding: [{
                      system: 'http://snomed.info/sct',
                      code: '394720003',
                      display: 'Asthma medication review'
                    }]
                  };
                  break;
              }

              if (this.diaryForm.form.value.dateInput !== undefined) {
                var expDate = this.diaryForm.form.value.dateInput;
                console.log(expDate.toISOString());
                newTask.authoredOn = expDate.toISOString();
              }

              newTask.note = [{
                text: this.diaryForm.form.value.description
              }];
              console.log(newTask);
              this.fhir.postTask(newTask);
              this.closed.emit();
            }
          }
        }]);

        return DiaryEntryComponent;
      }();

      DiaryEntryComponent.??fac = function DiaryEntryComponent_Factory(t) {
        return new (t || DiaryEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_5__["TdDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_FhirService__WEBPACK_IMPORTED_MODULE_6__["FhirService"]));
      };

      DiaryEntryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DiaryEntryComponent,
        selectors: [["app-diary-entry"]],
        viewQuery: function DiaryEntryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.diaryForm = _t.first);
          }
        },
        outputs: {
          closed: "closed"
        },
        decls: 9,
        vars: 3,
        consts: [[3, "title", "toolbarColor", "close"], [3, "elements"], ["diaryForm", ""], ["mat-raised-button", "", 1, "text-upper", 3, "click"]],
        template: function DiaryEntryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td-window-dialog", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("close", function DiaryEntryComponent_Template_td_window_dialog_close_0_listener() {
              return ctx.closed.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "td-dynamic-forms", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DiaryEntryComponent_Template_button_click_5_listener() {
              return ctx.closed.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DiaryEntryComponent_Template_button_click_7_listener($event) {
              return ctx.ok($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Ok ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("title", "Create Diary Entry (FHIR Task)")("toolbarColor", "accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("elements", ctx.formElements);
          }
        },
        directives: [_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_5__["??a"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__["TdDynamicFormsComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFyeS1lbnRyeS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DiaryEntryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-diary-entry',
            templateUrl: './diary-entry.component.html',
            styleUrls: ['./diary-entry.component.scss']
          }]
        }], function () {
          return [{
            type: _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_5__["TdDialogService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _service_FhirService__WEBPACK_IMPORTED_MODULE_6__["FhirService"]
          }];
        }, {
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          diaryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['diaryForm', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "mMVW":
    /*!***************************************!*\
      !*** ./src/app/service/auth-guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function mMVW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "6uu6");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, auth) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.auth = auth;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return true;
            /*
            if (this.auth.hasAccessToken()) {
              return true;
            } else {
                console.log('Auth');
                this.router.navigate(['login']);
                return false;
            }
             */
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.??fac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nLgJ":
    /*!*****************************************!*\
      !*** ./src/app/service/nhsd.service.ts ***!
      \*****************************************/

    /*! exports provided: NhsdService */

    /***/
    function nLgJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NhsdService", function () {
        return NhsdService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var NhsdService = /*#__PURE__*/function () {
        function NhsdService(http) {
          _classCallCheck(this, NhsdService);

          this.http = http;
          this.medicationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.medicationRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.medicationDispense = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.medicationRequests = [];
          this.taskChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.tasks = [];
        }

        _createClass(NhsdService, [{
          key: "getTasks",
          value: function getTasks() {
            return this.tasks;
          }
        }, {
          key: "getMedicationRequests",
          value: function getMedicationRequests() {
            return this.medicationRequests;
          }
        }, {
          key: "queryTasks",
          value: function queryTasks() {
            var _this9 = this;

            var headers = this.getHeaders(); // tslint:disable-next-line:typedef

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].nhsd + '/Task?patient.identifier=9876543210', {
              headers: headers
            }).subscribe(function (result) {
              var _a;

              var bundle = result;

              if (bundle.entry !== undefined && bundle.entry.length > 0) {
                console.log('Task found.');
                _this9.tasks = [];

                var _iterator5 = _createForOfIteratorHelper(bundle.entry),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var entry = _step5.value;

                    if (((_a = entry.resource) === null || _a === void 0 ? void 0 : _a.resourceType) === 'Task') {
                      _this9.tasks.push(entry.resource);
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                _this9.taskChange.emit({});
              } else {
                console.log('Task not found.');
              }
            });
          }
        }, {
          key: "convertToTransaction",
          value: function convertToTransaction(bundle) {
            var _this10 = this;

            var _a, _b, _c, _d, _e, _f, _g;

            var newBundle = {
              resourceType: 'Bundle',
              type: 'transaction',
              entry: []
            };
            var task = {
              resourceType: 'Task',
              status: 'ready',
              intent: 'order',
              code: {
                coding: [{
                  system: 'http://hl7.org/fhir/CodeSystem/task-code',
                  code: 'fulfill',
                  display: 'Fulfill the focal request'
                }]
              },
              input: []
            };
            var prescriptionorder = false;

            if (bundle.entry !== undefined && bundle.entry.length > 0) {
              var practitionerRole = '';

              var _iterator6 = _createForOfIteratorHelper(bundle.entry),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _entry2 = _step6.value;
                  var _resource = _entry2.resource;

                  if ((_resource === null || _resource === void 0 ? void 0 : _resource.resourceType) === 'Patient') {
                    task["for"] = {
                      reference: _entry2.fullUrl
                    };
                  }

                  if ((_resource === null || _resource === void 0 ? void 0 : _resource.resourceType) === 'MessageHeader') {
                    console.log('MessageHeader');
                    var medicationHeader = _resource;

                    if (((_a = medicationHeader.eventCoding) === null || _a === void 0 ? void 0 : _a.code) === 'prescription-order') {
                      prescriptionorder = true;
                    }
                  }

                  if ((_resource === null || _resource === void 0 ? void 0 : _resource.resourceType) === 'MedicationDispense') {
                    console.log('MedicationDispene');
                    var medicationDispense = _resource;

                    if (((_b = medicationDispense.subject) === null || _b === void 0 ? void 0 : _b.identifier) !== undefined) {
                      medicationDispense.subject.reference = 'Patient?identifier=' + medicationDispense.subject.identifier.system + '|' + medicationDispense.subject.identifier.value;
                    }

                    if (medicationDispense.authorizingPrescription !== undefined && medicationDispense.authorizingPrescription.length > 0) {
                      var _iterator8 = _createForOfIteratorHelper(medicationDispense.authorizingPrescription),
                          _step8;

                      try {
                        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                          var ident = _step8.value;

                          if (ident.identifier !== undefined) {
                            ident.reference = 'MedicationRequest?identifier=' + ident.identifier.system + '|' + ident.identifier.value;
                          }
                        }
                      } catch (err) {
                        _iterator8.e(err);
                      } finally {
                        _iterator8.f();
                      }
                    }
                  } // tslint:disable-next-line:no-conditional-assignment


                  if ((_resource === null || _resource === void 0 ? void 0 : _resource.resourceType) === 'MedicationRequest') {
                    var medicationRequest = _resource;

                    if (task.identifier === undefined) {
                      task.identifier = [];
                      task.identifier.push(medicationRequest.groupIdentifier);
                    }

                    task.requester = medicationRequest.requester;
                    practitionerRole = (_c = medicationRequest.requester) === null || _c === void 0 ? void 0 : _c.reference;
                    task.authoredOn = medicationRequest.authoredOn;

                    if (medicationRequest.dispenseRequest !== undefined && medicationRequest.dispenseRequest.performer !== undefined) {
                      task.owner = medicationRequest.dispenseRequest.performer;
                      task.status = 'requested';
                    }

                    var input = {
                      type: {
                        coding: [{
                          system: 'http://snomed.info/sct',
                          code: '16076005',
                          display: 'Prescription'
                        }]
                      },
                      valueReference: {
                        type: 'MedicationRequest',
                        reference: _entry2.fullUrl,
                        display: (_d = medicationRequest === null || medicationRequest === void 0 ? void 0 : medicationRequest.medicationCodeableConcept) === null || _d === void 0 ? void 0 : _d.coding[0].display
                      }
                    };
                    (_e = task.input) === null || _e === void 0 ? void 0 : _e.push(input);
                  }

                  if ((_resource === null || _resource === void 0 ? void 0 : _resource.identifier) !== undefined) {
                    var identifier = '';

                    if ((_resource === null || _resource === void 0 ? void 0 : _resource.identifier.length) !== undefined) {
                      identifier = this.getIdentifier(_resource === null || _resource === void 0 ? void 0 : _resource.identifier[0]);
                    } else {
                      identifier = this.getIdentifier(_resource === null || _resource === void 0 ? void 0 : _resource.identifier);
                    } // @ts-ignore


                    _entry2.request = {
                      method: 'PUT',
                      url: (_resource === null || _resource === void 0 ? void 0 : _resource.resourceType) + '?identifier=' + identifier
                    };
                    (_f = newBundle.entry) === null || _f === void 0 ? void 0 : _f.push(_entry2);
                  } else {// remove resource
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              if (practitionerRole !== '') {
                console.log(practitionerRole);

                var _iterator7 = _createForOfIteratorHelper(bundle.entry),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var entry = _step7.value;

                    if (entry.fullUrl === practitionerRole) {
                      var resource = entry.resource;

                      if (resource.resourceType === 'PractitionerRole') {
                        // @ts-ignore
                        task.requester.display = resource.practitioner.display; // @ts-ignore

                        if (task.requester.display === undefined) {
                          // @ts-ignore
                          task.requester.display = resource.identifier[0].value;
                        }
                      }
                    }
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }

              if (prescriptionorder) {
                console.log(task);
                var _entry = {
                  resource: task,
                  request: {
                    method: 'PUT',
                    url: 'Task?identifier=' + this.getIdentifier(task.identifier[0])
                  }
                };
                (_g = newBundle.entry) === null || _g === void 0 ? void 0 : _g.push(_entry);
              }

              console.log(newBundle);
              this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].nhsd, JSON.stringify(newBundle), {
                headers: this.getHeaders()
              }).subscribe(function (result) {
                console.log('done post to hapi');
                console.log(result);

                _this10.medicationChange.emit({});
              }, function (error) {
                _this10.error.emit(error.error);
              });
            } else {}
          }
        }, {
          key: "getMedicationRequest",
          value: function getMedicationRequest(url) {
            var _this11 = this;

            var headers = this.getHeaders();
            this.http.get(url, {
              'headers': headers
            }).subscribe(function (medicationRequest) {
              var _a;

              if (medicationRequest.resourceType === 'Bundle') {
                console.log('Found a Bundle');
                var bundle = medicationRequest;

                if (bundle.entry !== undefined && bundle.entry.length > 0) {
                  _this11.medicationRequests = [];

                  var _iterator9 = _createForOfIteratorHelper(bundle.entry),
                      _step9;

                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                      var entry = _step9.value;

                      if (((_a = entry.resource) === null || _a === void 0 ? void 0 : _a.resourceType) === 'MedicationRequest') {
                        _this11.medicationRequests.push(entry.resource);
                      }
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }
                } else {
                  console.log('Medication not found.');
                }

                _this11.medicationRequest.emit(medicationRequest);
              } else {
                _this11.medicationRequest.emit(medicationRequest);
              }
            });
          }
        }, {
          key: "getMedicationDispense",
          value: function getMedicationDispense(url) {
            var _this12 = this;

            var headers = this.getHeaders();
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].nhsd + '/MedicationDispense?prescription=' + url, {
              'headers': headers
            }).subscribe(function (resource) {
              var _a;

              var bundle = resource;

              if (bundle.entry !== undefined) {
                var _iterator10 = _createForOfIteratorHelper(bundle.entry),
                    _step10;

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var entry = _step10.value;

                    if (((_a = entry.resource) === null || _a === void 0 ? void 0 : _a.resourceType) === 'MedicationDispense') {
                      _this12.medicationDispense.emit(entry.resource);
                    }
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
              }
            });
          }
        }, {
          key: "getHeaders",
          value: function getHeaders() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/fhir+json');
            headers = headers.append('Accept', 'application/fhir+json');
            return headers;
          }
        }, {
          key: "getIdentifier",
          value: function getIdentifier(identifier) {
            if (identifier.system !== undefined) {
              return identifier.system + '|' + identifier.value;
            } else {
              return identifier.value;
            }
          }
        }]);

        return NhsdService;
      }();

      NhsdService.??fac = function NhsdService_Factory(t) {
        return new (t || NhsdService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      NhsdService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: NhsdService,
        factory: NhsdService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NhsdService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rmEv":
    /*!************************************************!*\
      !*** ./src/app/gp-diary/gp-diary.component.ts ***!
      \************************************************/

    /*! exports provided: GpDiaryComponent */

    /***/
    function rmEv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GpDiaryComponent", function () {
        return GpDiaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _diary_entry_diary_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../diary-entry/diary-entry.component */
      "hrfk");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _service_FhirService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/FhirService */
      "ejU6");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @covalent/core/dialogs */
      "18Cx");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function GpDiaryComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 80, "px");
        }
      }

      function GpDiaryComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r26.status, " ");
        }
      }

      function GpDiaryComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Medications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function GpDiaryComponent_td_14_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r29.valueReference.display);
        }
      }

      function GpDiaryComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, GpDiaryComponent_td_14_ng_template_2_Template, 2, 1, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", element_r27.input);
        }
      }

      function GpDiaryComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Pharmacy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function GpDiaryComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r31.owner == null ? null : element_r31.owner.identifier.value, " ");
        }
      }

      function GpDiaryComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Requester ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function GpDiaryComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r32.requester.display, " ");
        }
      }

      function GpDiaryComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Authored ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function GpDiaryComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r33 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r9.datepipe.transform(element_r33.authoredOn, "dd MMM yyyy HH:mm"), " ");
        }
      }

      function GpDiaryComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " When ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 120, "px");
        }
      }

      function GpDiaryComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r34 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r11.datepipe.transform(element_r34.executionPeriod.start, "dd MMM yyyy HH:mm"), " ");
        }
      }

      function GpDiaryComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Reason ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 240, "px");
        }
      }

      function GpDiaryComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r35.reasonCode.coding[0].display, " ");
        }
      }

      function GpDiaryComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Notes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function GpDiaryComponent_td_32_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r36.note[0].text, " ");
        }
      }

      function GpDiaryComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, GpDiaryComponent_td_32_span_1_Template, 2, 1, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", element_r36.note !== undefined);
        }
      }

      function GpDiaryComponent_th_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Order No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function GpDiaryComponent_td_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r39.identifier[0].value, " ");
        }
      }

      function GpDiaryComponent_th_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 120, "px");
        }
      }

      function GpDiaryComponent_td_38_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "remove_shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function GpDiaryComponent_td_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, GpDiaryComponent_td_38_button_1_Template, 4, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", element_r40.status == "accepted");
        }
      }

      function GpDiaryComponent_th_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " View Order ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 120, "px");
        }
      }

      function GpDiaryComponent_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "inventory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function GpDiaryComponent_th_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Track Package ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 120, "px");
        }
      }

      function GpDiaryComponent_td_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "local_shipping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Tracking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function GpDiaryComponent_tr_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 30);
        }
      }

      function GpDiaryComponent_tr_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 31);
        }
      }

      var GpDiaryComponent = /*#__PURE__*/function () {
        function GpDiaryComponent(fhir, dialog, _dialogService) {
          _classCallCheck(this, GpDiaryComponent);

          this.fhir = fhir;
          this.dialog = dialog;
          this._dialogService = _dialogService;
          this.datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-GB');
          this.displayedColumns = ['when', 'status', 'reason', 'notes'];
          this.data = [];
        }

        _createClass(GpDiaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
            this.fhir.queryTasks();
            this.fhir.taskChange.subscribe(function () {
              _this13.data = _this13.fhir.getTasks();
              _this13.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this13.data);
              _this13.dataSource.sort = _this13.sort;
            });
          }
        }, {
          key: "diary",
          value: function diary() {
            var task = {
              status: 'ready',
              intent: 'proposal',
              resourceType: 'Task',
              reasonCode: {
                coding: [{
                  code: '182836005'
                }]
              }
            };

            var _this$_dialogService$2 = this._dialogService.openDraggable({
              component: _diary_entry_diary_entry_component__WEBPACK_IMPORTED_MODULE_3__["DiaryEntryComponent"],
              dragHandleSelectors: ['mat-toolbar'],
              config: {
                panelClass: ['td-window-dialog'],
                data: task
              }
            }),
                matDialogRef = _this$_dialogService$2.matDialogRef,
                dragRefSubject = _this$_dialogService$2.dragRefSubject;

            matDialogRef.componentInstance.closed.subscribe(function () {
              return matDialogRef.close();
            });
          }
        }]);

        return GpDiaryComponent;
      }();

      GpDiaryComponent.??fac = function GpDiaryComponent_Factory(t) {
        return new (t || GpDiaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_FhirService__WEBPACK_IMPORTED_MODULE_5__["FhirService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_7__["TdDialogService"]));
      };

      GpDiaryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: GpDiaryComponent,
        selectors: [["app-gp-diary"]],
        viewQuery: function GpDiaryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 47,
        vars: 3,
        consts: [["layout", "row", "layout-align", "start center", "flex", ""], ["flex", ""], ["mat-mini-fab", "", "matTooltip", "Add diary etry/task", "aria-label", "Example icon button with a heart icon", 3, "click"], ["mat-table", "", "matSort", "", "matSortActive", "when", "matSortDirection", "desc", "width", "100%", 3, "dataSource"], ["matColumnDef", "status"], ["mat-header-cell", "", 3, "width", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "medications"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "pharmacy"], ["matColumnDef", "requester"], ["matColumnDef", "authored"], ["matColumnDef", "when"], ["mat-header-cell", "", "mat-sort-header", "", 3, "width", 4, "matHeaderCellDef"], ["matColumnDef", "reason"], ["matColumnDef", "notes"], ["matColumnDef", "order_number"], ["matColumnDef", "return_order"], ["matColumnDef", "view_order"], ["matColumnDef", "track_order"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["ngFor", "", 3, "ngForOf"], ["mat-header-cell", "", "mat-sort-header", ""], [4, "ngIf"], ["color", "warn", "mat-icon-button", "", 4, "ngIf"], ["color", "warn", "mat-icon-button", ""], ["color", "accent", "mat-icon-button", "", "routerLink", "/details/123453-ABCDFE-12345"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function GpDiaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "GP Diary Entries (FHIR Task)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GpDiaryComponent_Template_button_click_5_listener() {
              return ctx.diary();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "add_shopping_cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](9, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, GpDiaryComponent_th_10_Template, 2, 2, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, GpDiaryComponent_td_11_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, GpDiaryComponent_th_13_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, GpDiaryComponent_td_14_Template, 3, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](15, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, GpDiaryComponent_th_16_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, GpDiaryComponent_td_17_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](18, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, GpDiaryComponent_th_19_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, GpDiaryComponent_td_20_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](21, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, GpDiaryComponent_th_22_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, GpDiaryComponent_td_23_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](24, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, GpDiaryComponent_th_25_Template, 2, 2, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, GpDiaryComponent_td_26_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](27, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, GpDiaryComponent_th_28_Template, 2, 2, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, GpDiaryComponent_td_29_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](30, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, GpDiaryComponent_th_31_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, GpDiaryComponent_td_32_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](33, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, GpDiaryComponent_th_34_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, GpDiaryComponent_td_35_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](36, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, GpDiaryComponent_th_37_Template, 2, 2, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, GpDiaryComponent_td_38_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](39, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, GpDiaryComponent_th_40_Template, 2, 2, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, GpDiaryComponent_td_41_Template, 5, 0, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](42, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, GpDiaryComponent_th_43_Template, 2, 2, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, GpDiaryComponent_td_44_Template, 5, 0, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, GpDiaryComponent_tr_45_Template, 1, 0, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, GpDiaryComponent_tr_46_Template, 1, 0, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncC1kaWFyeS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GpDiaryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-gp-diary',
            templateUrl: './gp-diary.component.html',
            styleUrls: ['./gp-diary.component.scss']
          }]
        }], function () {
          return [{
            type: _service_FhirService__WEBPACK_IMPORTED_MODULE_5__["FhirService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_7__["TdDialogService"]
          }];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main/main.component */
      "wlho");
      /* harmony import */


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders/orders.component */
      "5lyI");
      /* harmony import */


      var _callback_callback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./callback/callback.component */
      "DiAt");
      /* harmony import */


      var _service_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./service/auth-guard */
      "mMVW");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _medications_medications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./medications/medications.component */
      "cylq");

      var routes = [{
        path: '',
        canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        children: [{
          path: '',
          component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"]
        }, {
          path: 'tasks',
          component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"]
        }, {
          path: 'medications',
          component: _medications_medications_component__WEBPACK_IMPORTED_MODULE_7__["MedicationsComponent"]
        }]
      }, {
        path: 'callback',
        component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_4__["CallbackComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent() {
          _classCallCheck(this, LoginComponent);

          this.callback = document.baseURI + 'callback';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// window.location.href = environment.oauth2.auth + '?client_id=' + environment.oauth2.client_id +
            //    '&response_type=code&redirect_uri=' + this.callback + '&state=123';
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)();
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 1,
        vars: 0,
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Redirecting to login\n");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "wlho":
    /*!****************************************!*\
      !*** ./src/app/main/main.component.ts ***!
      \****************************************/

    /*! exports provided: MainComponent */

    /***/
    function wlho(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _covalent_core_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @covalent/core/media */
      "3dAa");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @covalent/core/layout */
      "YGdM");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(media, router) {
          _classCallCheck(this, MainComponent);

          this.media = media;
          this.router = router;
          this.opened = false;
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClick",
          value: function onClick(route) {
            this.router.navigateByUrl(route);
          }
        }]);

        return MainComponent;
      }();

      MainComponent.??fac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_covalent_core_media__WEBPACK_IMPORTED_MODULE_1__["TdMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 33,
        vars: 2,
        consts: [["recordsMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/tasks"], ["mat-menu-item", "", "routerLink", "/medications"], ["sidenavWidth", "280px", 1, "layout-nav-demo"], ["flex", "", "sidenavTitle", "Menu"], ["navigationRoute", "/", "mode", "side", 3, "opened"], ["td-sidenav-content", ""], ["td-toolbar-content", "", "layout", "row", "layout-align", "start center", "flex", ""], ["flex", ""], ["mat-button", "", "disabled", "true", "matTooltip", "Orders"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["layout", "row", "layout-align", "start center"], [1, "mat-caption"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-menu", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "gavel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Task Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "sanitizer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Medications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td-layout", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td-navigation-drawer", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td-layout-nav-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " stuff ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Codename: Danube");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "add_shopping_cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Basket");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "td-layout-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Copyright \xA9 2021 Virtually Healthcare and Mayfield IS. All rights reserved");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("opened", ctx.opened);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_5__["TdLayoutComponent"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_5__["TdNavigationDrawerComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_5__["TdLayoutNavListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_5__["TdLayoutFooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.scss']
          }]
        }], function () {
          return [{
            type: _covalent_core_media__WEBPACK_IMPORTED_MODULE_1__["TdMediaService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ytM1":
    /*!*******************************************************************!*\
      !*** ./src/app/gp-prescriptions/prescription-refill.component.ts ***!
      \*******************************************************************/

    /*! exports provided: PrescriptionRefillComponent */

    /***/
    function ytM1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrescriptionRefillComponent", function () {
        return PrescriptionRefillComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _diary_entry_diary_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../diary-entry/diary-entry.component */
      "hrfk");
      /* harmony import */


      var _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../tracking/tracking.component */
      "+hgv");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _service_FhirService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../service/FhirService */
      "ejU6");
      /* harmony import */


      var _service_nhsd_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../service/nhsd.service */
      "nLgJ");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @covalent/core/dialogs */
      "18Cx");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function PrescriptionRefillComponent_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Medication ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionRefillComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r22.concept, " ");
        }
      }

      function PrescriptionRefillComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Medication Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 140, "px");
        }
      }

      function PrescriptionRefillComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r23.medicationCodeableConcept.coding[0].display, " ");
        }
      }

      function PrescriptionRefillComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 80, "px");
        }
      }

      function PrescriptionRefillComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r24.status, " ");
        }
      }

      function PrescriptionRefillComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Authored ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 120, "px");
        }
      }

      function PrescriptionRefillComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r7.datepipe.transform(element_r25.authoredOn, "dd MMM yyyy"), " ");
        }
      }

      function PrescriptionRefillComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Dose ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 180, "px");
        }
      }

      function PrescriptionRefillComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r26.dosageInstruction[0].text, " ");
        }
      }

      function PrescriptionRefillComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Unit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 80, "px");
        }
      }

      function PrescriptionRefillComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r27.dispenseRequest.quantity.unit, " ");
        }
      }

      function PrescriptionRefillComponent_th_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Quantity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 80, "px");
        }
      }

      function PrescriptionRefillComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", element_r28.dispenseRequest.quantity.value, " \xA0 ", element_r28.dispenseRequest.quantity.unit, " ");
        }
      }

      function PrescriptionRefillComponent_th_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 40, "px");
        }
      }

      function PrescriptionRefillComponent_td_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PrescriptionRefillComponent_td_28_span_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r34);

            var element_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r32.refill(element_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "repeat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", element_r29.courseOfTherapyType.coding[0].display);
        }
      }

      function PrescriptionRefillComponent_td_28_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PrescriptionRefillComponent_td_28_span_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var element_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r36.refill(element_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "arrow_right_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", element_r29.courseOfTherapyType.coding[0].display);
        }
      }

      function PrescriptionRefillComponent_td_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PrescriptionRefillComponent_td_28_span_1_Template, 4, 1, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PrescriptionRefillComponent_td_28_span_2_Template, 4, 1, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", element_r29.courseOfTherapyType.coding[0].code.startsWith("continuous"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !element_r29.courseOfTherapyType.coding[0].code.startsWith("continuous"));
        }
      }

      function PrescriptionRefillComponent_th_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Reorder ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 50, "px");
        }
      }

      function PrescriptionRefillComponent_td_31_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PrescriptionRefillComponent_td_31_span_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);

            var element_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r42.refill(element_r40);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "add_shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionRefillComponent_td_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PrescriptionRefillComponent_td_31_span_1_Template, 4, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r40 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r17.source === "EPS" || element_r40.courseOfTherapyType.coding[0].code === "continuous");
        }
      }

      function PrescriptionRefillComponent_th_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Tracking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", 50, "px");
        }
      }

      function PrescriptionRefillComponent_td_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PrescriptionRefillComponent_td_34_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r47);

            var element_r45 = ctx.$implicit;

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r46.tracking(element_r45);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "local_shipping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PrescriptionRefillComponent_tr_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 24);
        }
      }

      function PrescriptionRefillComponent_tr_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 25);
        }
      }

      var PrescriptionRefillComponent = /*#__PURE__*/function () {
        function PrescriptionRefillComponent(fhir, nhsd, dialog, _dialogService) {
          _classCallCheck(this, PrescriptionRefillComponent);

          this.fhir = fhir;
          this.nhsd = nhsd;
          this.dialog = dialog;
          this._dialogService = _dialogService;
          this.source = 'GP';
          this.displayedColumns = ['authoredOn', 'status', 'name', 'courseOfTherapy', 'dose', 'quantity', 'reorder_medication', 'track_order'];
          this.prescription = [];
          this.datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-GB');
        }

        _createClass(PrescriptionRefillComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.prescription);

            if (this.source === 'GP') {
              this.fhir.queryMedicationRequests();
              this.fhir.medicationChange.subscribe(function () {
                _this14.prescription = _this14.fhir.getMedicationRequests();
                _this14.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this14.prescription);
                _this14.dataSource.sort = _this14.sort;
              });
            } else {
              this.nhsd.getMedicationRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].nhsd + '/MedicationRequest?patient.identifier=9876543210');
              this.nhsd.medicationRequest.subscribe(function () {
                _this14.prescription = _this14.nhsd.getMedicationRequests();
                _this14.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this14.prescription);
                _this14.dataSource.sort = _this14.sort;
              });
            }
          } // tslint:disable-next-line:typedef

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.sort !== undefined) {
              this.sort.sortChange.subscribe(function (event) {
                console.log(event);
              });
            } else {
              console.log('SORT UNDEFINED');
            }
          }
        }, {
          key: "tracking",
          value: function tracking(event) {
            var _this$_dialogService$3 = this._dialogService.openDraggable({
              component: _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_4__["TrackingComponent"],
              dragHandleSelectors: ['mat-toolbar'],
              config: {
                panelClass: ['td-window-dialog']
              }
            }),
                matDialogRef = _this$_dialogService$3.matDialogRef,
                dragRefSubject = _this$_dialogService$3.dragRefSubject;

            matDialogRef.componentInstance.closed.subscribe(function () {
              return matDialogRef.close();
            });
          }
        }, {
          key: "refill",
          value: function refill(resource) {
            var _a, _b, _c, _d;

            var task = {
              status: 'ready',
              intent: 'proposal',
              resourceType: 'Task',
              note: [],
              reasonCode: {
                coding: [{
                  code: '103742009'
                }]
              }
            };

            if (resource.medicationCodeableConcept !== undefined && resource.medicationCodeableConcept.coding !== undefined && resource.medicationCodeableConcept.coding[0].display !== undefined) {
              // @ts-ignore
              task.note = [{
                text: resource.medicationCodeableConcept.coding[0].display + ' (' + this.datepipe.transform(resource.authoredOn, 'dd MMM yyyy') + ')'
              }];
            }

            if (this.source === 'EPS') {
              (_a = task.note) === null || _a === void 0 ? void 0 : _a.push({
                text: 'EPS prescription number ' + ((_b = resource.groupIdentifier) === null || _b === void 0 ? void 0 : _b.value) + ' '
              });

              if (((_c = resource.requester) === null || _c === void 0 ? void 0 : _c.display) !== undefined) {
                (_d = task.note) === null || _d === void 0 ? void 0 : _d.push({
                  text: 'Prescriber ' + resource.requester.display
                });
              }
            }

            var _this$_dialogService$4 = this._dialogService.openDraggable({
              component: _diary_entry_diary_entry_component__WEBPACK_IMPORTED_MODULE_3__["DiaryEntryComponent"],
              dragHandleSelectors: ['mat-toolbar'],
              config: {
                panelClass: ['td-window-dialog'],
                data: task
              }
            }),
                matDialogRef = _this$_dialogService$4.matDialogRef,
                dragRefSubject = _this$_dialogService$4.dragRefSubject;

            matDialogRef.componentInstance.closed.subscribe(function () {
              return matDialogRef.close();
            });
          }
        }]);

        return PrescriptionRefillComponent;
      }();

      PrescriptionRefillComponent.??fac = function PrescriptionRefillComponent_Factory(t) {
        return new (t || PrescriptionRefillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_FhirService__WEBPACK_IMPORTED_MODULE_7__["FhirService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_nhsd_service__WEBPACK_IMPORTED_MODULE_8__["NhsdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_10__["TdDialogService"]));
      };

      PrescriptionRefillComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PrescriptionRefillComponent,
        selectors: [["app-prescription-refill"]],
        viewQuery: function PrescriptionRefillComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        inputs: {
          source: "source"
        },
        decls: 37,
        vars: 4,
        consts: [["matSort", "", "matSortActive", "status", "matSortDirection", "asc", "mat-table", "", "width", "100%", 3, "dataSource"], ["matColumnDef", "concept"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", 3, "width", 4, "matHeaderCellDef"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", 3, "width", 4, "matHeaderCellDef"], ["matColumnDef", "authoredOn"], ["matColumnDef", "dose"], ["matColumnDef", "unit"], ["matColumnDef", "quantity"], ["matColumnDef", "courseOfTherapy"], ["matColumnDef", "reorder_medication"], ["matColumnDef", "track_order"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], [4, "ngIf"], ["color", "accent", "mat-icon-button", "", 3, "matTooltip", "click"], ["color", "accent", "mat-icon-button", "", "matTooltip", "Reorder Medication", 3, "click"], ["color", "accent", "mat-icon-button", "", "matTooltip", "Tracking", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function PrescriptionRefillComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, PrescriptionRefillComponent_th_6_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, PrescriptionRefillComponent_td_7_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, PrescriptionRefillComponent_th_9_Template, 2, 2, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, PrescriptionRefillComponent_td_10_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, PrescriptionRefillComponent_th_12_Template, 2, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, PrescriptionRefillComponent_td_13_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](14, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, PrescriptionRefillComponent_th_15_Template, 2, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, PrescriptionRefillComponent_td_16_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](17, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, PrescriptionRefillComponent_th_18_Template, 2, 2, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, PrescriptionRefillComponent_td_19_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](20, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, PrescriptionRefillComponent_th_21_Template, 2, 2, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, PrescriptionRefillComponent_td_22_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](23, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, PrescriptionRefillComponent_th_24_Template, 2, 2, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, PrescriptionRefillComponent_td_25_Template, 2, 2, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](26, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, PrescriptionRefillComponent_th_27_Template, 2, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, PrescriptionRefillComponent_td_28_Template, 3, 2, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](29, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, PrescriptionRefillComponent_th_30_Template, 2, 2, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, PrescriptionRefillComponent_td_31_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](32, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, PrescriptionRefillComponent_th_33_Template, 2, 2, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, PrescriptionRefillComponent_td_34_Template, 4, 0, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, PrescriptionRefillComponent_tr_35_Template, 1, 0, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, PrescriptionRefillComponent_tr_36_Template, 1, 0, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.source, " Medication Record (FHIR MedicationRequest)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzY3JpcHRpb24tcmVmaWxsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PrescriptionRefillComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-prescription-refill',
            templateUrl: './prescription-refill.component.html',
            styleUrls: ['./prescription-refill.component.scss']
          }]
        }], function () {
          return [{
            type: _service_FhirService__WEBPACK_IMPORTED_MODULE_7__["FhirService"]
          }, {
            type: _service_nhsd_service__WEBPACK_IMPORTED_MODULE_8__["NhsdService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
          }, {
            type: _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_10__["TdDialogService"]
          }];
        }, {
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map