"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/Components/TestComp.js":
/*!***************************************!*\
  !*** ./assets/Components/TestComp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");


//import'./public/assets/css/styles.css';




gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger, gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__.ScrollToPlugin);
function TestComp() {
  var titleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var onLoad = function onLoad() {
    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
      onComplete: function onComplete() {
        console.log('animation terminée');
      }
    }).fromTo(".letter", {
      x: -100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      stagger: 0.33,
      delay: 0.7
    }).to(".title", {
      y: 45,
      delay: 0.7
    }).to(".letter", {
      margin: "0 5vw",
      delay: 0.8,
      duration: 0.5
    }).to(".letter", {
      margin: "0",
      delay: 0.8,
      duration: 0.5
    }).to(".letter", {
      x: -titleRef.current.clientWidth,
      delay: 1,
      duration: 2,
      rotate: -360
    }).to(window, {
      duration: 0.5,
      scrollTo: "#nextSection"
    }).to("#nextSection", {
      backgroundColor: "#000",
      color: "#fff",
      duration: 0.2
    }).to(".title", {
      y: 0
    }).to(".letter", {
      x: 0,
      delay: 1,
      duration: 2
    });
  };

  // const slideInTop = (elem, delay, duration) => {
  //   gsap.fromTo(
  //     elem,
  //     {
  //       opacity: 0,
  //       y: -200,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       delay: delay || 0.4,
  //       duration: duration || 0.6,
  //       scrollTrigger: {
  //         trigger: elem,
  //         start: "top center",
  //         end: "bottom center"
  //       }
  //     }
  //   )
  // }

  // const slideInLeft = (elem, delay, duration) => {
  //   gsap.fromTo(
  //     elem,
  //     {
  //       opacity: 0,
  //       x: -200,
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       delay: delay || 0.4,
  //       duration: duration || 0.6,
  //       scrollTrigger: {
  //         trigger: elem,
  //         start: "top center",
  //         end: "bottom center"
  //       }
  //     }
  //   )
  // }

  // const onEnter = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { backgroundColor: "#000", color: "#FFF" })
  // }

  // const onLeave = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { backgroundColor: "#FFF", color: "#000" })
  // }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onLoad();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    slideInTop("#box1-gsap");
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "TestComp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title",
    ref: titleRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "letter"
  }, "H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "letter"
  }, "A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "letter"
  }, "I"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "letter"
  }, "R")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "nextSection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "box1-gsap",
    className: "box-gsap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "images/Marie4.jpg",
    alt: "..."
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestComp);

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Components_TestComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/TestComp */ "./assets/Components/TestComp.js");



//import "./bootstrap.js";
//import "./Components/app.css";

var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("testcomp"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_TestComp__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/***/ }),

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_gsap_ScrollToPlugin_js-node_modules_gsap_ScrollTrigger_js-node_modules_g-6a8535"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLEVBQUV6QjtFQUFTLGdCQUNsQ1IsMERBQUE7SUFBTWdDLFNBQVMsRUFBQztFQUFRLEdBQUMsR0FBTyxDQUFDLGVBQ2pDaEMsMERBQUE7SUFBTWdDLFNBQVMsRUFBQztFQUFRLEdBQUMsR0FBTyxDQUFDLGVBQ2pDaEMsMERBQUE7SUFBTWdDLFNBQVMsRUFBQztFQUFRLEdBQUMsR0FBTyxDQUFDLGVBQ2pDaEMsMERBQUE7SUFBTWdDLFNBQVMsRUFBQztFQUFRLEdBQUMsR0FBTyxDQUU5QixDQUFDLGVBQ0xoQywwREFBQTtJQUFTa0MsRUFBRSxFQUFDO0VBQWEsZ0JBQ3ZCbEMsMERBQUE7SUFBS2tDLEVBQUUsRUFBQyxXQUFXO0lBQUNGLFNBQVMsRUFBQztFQUFVLGdCQUN0Q2hDLDBEQUFBO0lBQUttQyxHQUFHLEVBQUMsbUJBQW1CO0lBQUNDLEdBQUcsRUFBQztFQUFLLENBQU0sQ0FDekMsQ0FHRSxDQUdOLENBQUM7QUFFVjtBQUNBLGlFQUFlN0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDM0pHO0FBQ2M7QUFDSztBQUM3QztBQUNBOztBQUVBLElBQU0rQixJQUFJLEdBQUdELHdEQUFtQixDQUFDRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyRUgsSUFBSSxDQUFDSSxNQUFNLGVBQUMxQywwREFBQSxDQUFDTyw0REFBUSxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNQekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9UZXN0Q29tcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvYXBwLmNzcz8wYzEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCcuLi9jc3MvYXBwLmNzcyc7XG4vL2ltcG9ydCcuL3B1YmxpYy9hc3NldHMvY3NzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIlxuaW1wb3J0IHsgU2Nyb2xsVG9QbHVnaW4gfSBmcm9tICdnc2FwL1Njcm9sbFRvUGx1Z2luJ1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIsIFNjcm9sbFRvUGx1Z2luKVxuXG5mdW5jdGlvbiBUZXN0Q29tcCgpIHtcblxuICBjb25zdCB0aXRsZVJlZiA9IHVzZVJlZigpXG5cbiAgY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xuICAgIGdzYXAudGltZWxpbmUoe1xuICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYW5pbWF0aW9uIHRlcm1pbsOpZScpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC5mcm9tVG8oXCIubGV0dGVyXCIsXG4gICAgICB7XG4gICAgICAgIHg6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBzdGFnZ2VyOiAwLjMzLFxuICAgICAgICBkZWxheTogMC43XG4gICAgICB9ICAgICAgXG4gICAgKVxuICAgIC50byhcIi50aXRsZVwiLCB7XG4gICAgICB5OiA0NSxcbiAgICAgIGRlbGF5OiAwLjdcbiAgICB9KVxuICAgIC50byhcIi5sZXR0ZXJcIiwge1xuICAgICAgbWFyZ2luOiBcIjAgNXZ3XCIsXG4gICAgICBkZWxheTogMC44LFxuICAgICAgZHVyYXRpb246IDAuNVxuICAgIH0pXG4gICAgLnRvKFwiLmxldHRlclwiLCB7XG4gICAgICBtYXJnaW46IFwiMFwiLFxuICAgICAgZGVsYXk6IDAuOCxcbiAgICAgIGR1cmF0aW9uOiAwLjVcbiAgICB9KVxuICAgIC50byhcIi5sZXR0ZXJcIiwge1xuICAgICAgeDogLXRpdGxlUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgsXG4gICAgICBkZWxheTogMSxcbiAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgcm90YXRlOiAtMzYwXG4gICAgfSlcbiAgICAudG8od2luZG93LCB7ICAgICAgXG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgc2Nyb2xsVG86IFwiI25leHRTZWN0aW9uXCJcbiAgICB9KVxuICAgIC50byhcIiNuZXh0U2VjdGlvblwiLCB7ICAgICAgXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgZHVyYXRpb246IDAuMlxuICAgIH0pXG4gICAgLnRvKFwiLnRpdGxlXCIsIHtcbiAgICAgIHk6IDBcbiAgICAgIFxuICAgIH0pXG4gICAgLnRvKFwiLmxldHRlclwiLCB7XG4gICAgICB4OiAwLFxuICAgICAgZGVsYXk6IDEsXG4gICAgICBkdXJhdGlvbjogMlxuICAgIH0pXG4gIH1cblxuICAvLyBjb25zdCBzbGlkZUluVG9wID0gKGVsZW0sIGRlbGF5LCBkdXJhdGlvbikgPT4ge1xuICAvLyAgIGdzYXAuZnJvbVRvKFxuICAvLyAgICAgZWxlbSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgb3BhY2l0eTogMCxcbiAgLy8gICAgICAgeTogLTIwMCxcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIG9wYWNpdHk6IDEsXG4gIC8vICAgICAgIHk6IDAsXG4gIC8vICAgICAgIGRlbGF5OiBkZWxheSB8fCAwLjQsXG4gIC8vICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiB8fCAwLjYsXG4gIC8vICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgLy8gICAgICAgICB0cmlnZ2VyOiBlbGVtLFxuICAvLyAgICAgICAgIHN0YXJ0OiBcInRvcCBjZW50ZXJcIixcbiAgLy8gICAgICAgICBlbmQ6IFwiYm90dG9tIGNlbnRlclwiXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICApXG4gIC8vIH1cblxuICAvLyBjb25zdCBzbGlkZUluTGVmdCA9IChlbGVtLCBkZWxheSwgZHVyYXRpb24pID0+IHtcbiAgLy8gICBnc2FwLmZyb21UbyhcbiAgLy8gICAgIGVsZW0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIG9wYWNpdHk6IDAsXG4gIC8vICAgICAgIHg6IC0yMDAsXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICBvcGFjaXR5OiAxLFxuICAvLyAgICAgICB4OiAwLFxuICAvLyAgICAgICBkZWxheTogZGVsYXkgfHwgMC40LFxuICAvLyAgICAgICBkdXJhdGlvbjogZHVyYXRpb24gfHwgMC42LFxuICAvLyAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gIC8vICAgICAgICAgdHJpZ2dlcjogZWxlbSxcbiAgLy8gICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gIC8vICAgICAgICAgZW5kOiBcImJvdHRvbSBjZW50ZXJcIlxuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgKVxuICAvLyB9XG5cbiAgLy8gY29uc3Qgb25FbnRlciA9ICh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xuICAvLyAgIGdzYXAudG8oY3VycmVudFRhcmdldCwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLCBjb2xvcjogXCIjRkZGXCIgfSlcbiAgLy8gfVxuXG4gIC8vIGNvbnN0IG9uTGVhdmUgPSAoeyBjdXJyZW50VGFyZ2V0IH0pID0+IHtcbiAgLy8gICBnc2FwLnRvKGN1cnJlbnRUYXJnZXQsIHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZcIiwgY29sb3I6IFwiIzAwMFwiIH0pXG4gIC8vIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG9uTG9hZCgpO1xuICB9LCBbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzbGlkZUluVG9wKFwiI2JveDEtZ3NhcFwiKTtcbiAgfSwgW10pXG5cblxuXG4gIFxuICByZXR1cm4gKFxuICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJUZXN0Q29tcFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCIgcmVmPXt0aXRsZVJlZn0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldHRlclwiPkg8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldHRlclwiPkE8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldHRlclwiPkk8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldHRlclwiPlI8L3NwYW4+XG4gICAgICAgIFxuICAgICAgPC9oMT5cbiAgICAgIDxzZWN0aW9uIGlkPVwibmV4dFNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBpZD1cImJveDEtZ3NhcFwiIGNsYXNzTmFtZT1cImJveC1nc2FwXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvTWFyaWU0LmpwZ1wiIGFsdD1cIi4uLlwiPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgIFxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgXG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFRlc3RDb21wO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgVGVzdENvbXAgZnJvbSBcIi4vQ29tcG9uZW50cy9UZXN0Q29tcFwiO1xuLy9pbXBvcnQgXCIuL2Jvb3RzdHJhcC5qc1wiO1xuLy9pbXBvcnQgXCIuL0NvbXBvbmVudHMvYXBwLmNzc1wiO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3Rjb21wXCIpKTtcbnJvb3QucmVuZGVyKDxUZXN0Q29tcCAvPik7XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJTY3JvbGxUb1BsdWdpbiIsInJlZ2lzdGVyUGx1Z2luIiwiVGVzdENvbXAiLCJ0aXRsZVJlZiIsIm9uTG9hZCIsInRpbWVsaW5lIiwib25Db21wbGV0ZSIsImNvbnNvbGUiLCJsb2ciLCJmcm9tVG8iLCJ4Iiwib3BhY2l0eSIsInN0YWdnZXIiLCJkZWxheSIsInRvIiwieSIsIm1hcmdpbiIsImR1cmF0aW9uIiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwicm90YXRlIiwid2luZG93Iiwic2Nyb2xsVG8iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInNsaWRlSW5Ub3AiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicmVmIiwiaWQiLCJzcmMiLCJhbHQiLCJSZWFjdERPTSIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=