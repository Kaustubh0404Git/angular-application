"use strict";
(self["webpackChunkceh_landing"] = self["webpackChunkceh_landing"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _sections_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/header.component */ 1823);
/* harmony import */ var _sections_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/hero.component */ 4638);
/* harmony import */ var _sections_highlights_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/highlights.component */ 1475);
/* harmony import */ var _sections_curriculum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/curriculum.component */ 4241);
/* harmony import */ var _sections_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/about.component */ 599);
/* harmony import */ var _sections_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/register.component */ 2359);
/* harmony import */ var _sections_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/footer.component */ 8937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);








class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-hero")(3, "app-highlights")(4, "app-curriculum")(5, "app-about")(6, "app-register");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-footer");
        }
      },
      dependencies: [_sections_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _sections_hero_component__WEBPACK_IMPORTED_MODULE_1__.HeroComponent, _sections_highlights_component__WEBPACK_IMPORTED_MODULE_2__.HighlightsComponent, _sections_curriculum_component__WEBPACK_IMPORTED_MODULE_3__.CurriculumComponent, _sections_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _sections_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent, _sections_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = [
  // Single-page landing; routes kept for future extensibility
];

/***/ }),

/***/ 599:
/*!*********************************************!*\
  !*** ./src/app/sections/about.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AboutComponent {
  static {
    this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 0,
      consts: [["id", "about", "aria-labelledby", "about-title", 1, "section"], [1, "container"], ["id", "about-title", 2, "font-size", "clamp(1.6rem, 3.5vw, 2.2rem)"], [1, "card"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About the Program");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Certified Ethical Hacking (CEH)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " program is a comprehensive, lab\u2011driven training that prepares you to identify, exploit, and remediate security weaknesses\u2014ethically and legally. Guided by experienced practitioners, you will master reconnaissance, scanning, exploitation, and post\u2011exploitation techniques across networks, operating systems, and web applications. The curriculum blends theory with practical labs to ensure you can think like an attacker while acting as a defender. By the end of the program, you will be able to assess risks, execute controlled tests, document findings, and provide actionable remediation steps. This program aligns with EC\u2011Council\u2019s standards and culminates in an industry\u2011recognized certificate that validates your applied skills. Whether you are upskilling or pivoting into cybersecurity, CEH provides a clear, hands\u2011on path to becoming job\u2011ready. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4241:
/*!**************************************************!*\
  !*** ./src/app/sections/curriculum.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurriculumComponent: () => (/* binding */ CurriculumComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CurriculumComponent {
  static {
    this.ɵfac = function CurriculumComponent_Factory(t) {
      return new (t || CurriculumComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurriculumComponent,
      selectors: [["app-curriculum"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 37,
      vars: 0,
      consts: [["id", "curriculum", "aria-labelledby", "curriculum-title", 1, "section"], [1, "container"], ["id", "curriculum-title", 2, "font-size", "clamp(1.6rem, 3.5vw, 2.2rem)"], [1, "grid", "cols-2", 2, "margin-top", "1rem"], [1, "card"]],
      template: function CurriculumComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Curriculum Overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Six outcome\u2011oriented modules aligned to the CEH framework.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "article", 4)(8, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "01 \u2022 Information Security & Recon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Threat landscape, kill chain, OSINT, footprinting, and scanning strategies. Lab: mapping an attack surface.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "article", 4)(13, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "02 \u2022 Network Hacking & Sniffing");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ARP spoofing, MITM, Wi\u2011Fi attacks, packet analysis with Wireshark, and traffic manipulation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "article", 4)(18, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "03 \u2022 System Hacking & Privilege Escalation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password attacks, malware basics, persistence, Linux/Windows privilege escalation techniques.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "article", 4)(23, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "04 \u2022 Web App Hacking");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "OWASP Top 10, SQLi, XSS, auth flaws, SSRF. Lab: intercepting and exploiting requests with Burp Suite.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "article", 4)(28, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "05 \u2022 Vulnerability Assessment & Exploitation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Nmap, Nessus, Metasploit workflows, exploit selection, and post\u2011exploitation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "article", 4)(33, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "06 \u2022 Reporting & Defense");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Evidence collection, professional reporting, remediation guidance, and defensive hardening checklists.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 8937:
/*!**********************************************!*\
  !*** ./src/app/sections/footer.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  constructor() {
    this.year = new Date().getFullYear();
  }
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 33,
      vars: 1,
      consts: [["aria-labelledby", "footer-title", 1, "section"], [1, "container"], [1, "grid", "cols-2"], ["id", "footer-title"], ["href", "mailto:training@example.com"], ["href", "tel:+91 00000 00000"], ["href", "#", "aria-label", "LinkedIn"], ["href", "#", "aria-label", "Twitter/X"], ["href", "#", "aria-label", "YouTube"], ["href", "#", "aria-label", "Instagram"], [2, "margin-top", "1rem", "font-size", ".85rem", "opacity", ".8"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Get in Touch");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Email: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "training@example.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Phone: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+91 0123456789");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Address: 123 Cyber Park, Tech City, 560001 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div")(17, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Follow Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p")(20, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LinkedIn");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00B7 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00B7 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "YouTube");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u00B7 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Instagram");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.year, " CEH Program. EC\u2011Council certification trademarks are owned by their respective holders. ");
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 1823:
/*!**********************************************!*\
  !*** ./src/app/sections/header.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HeaderComponent {
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 20,
      vars: 0,
      consts: [[1, "header"], [1, "container"], ["href", "#", "aria-label", "Home", 1, "logo"], ["src", "assets/icon-shield.svg", "alt", "", "width", "32", "height", "32"], ["aria-label", "Primary"], [1, "nav-list"], ["href", "#highlights"], ["href", "#curriculum"], ["href", "#about"], ["href", "#register", "aria-label", "Register for the program", 1, "btn"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CEH Program");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 4)(7, "ul", 5)(8, "li")(9, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Highlights");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Curriculum");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
      },
      styles: ["\n\n    .header[_ngcontent-%COMP%] {\n      background: linear-gradient(90deg, #1e3c72, #2a5298);\n      color: #fff;\n      padding: 1rem 2rem;\n      box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n      position: sticky;\n      top: 0;\n      z-index: 100;\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    }\n\n    .container[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      max-width: 1200px;\n      margin: 0 auto;\n    }\n\n    \n\n    .logo[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      font-weight: bold;\n      font-size: 1.2rem;\n      text-decoration: none;\n      color: #fff;\n    }\n\n    .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      margin-right: 0.5rem;\n      transition: transform 0.3s ease;\n    }\n\n    .logo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n      transform: rotate(15deg);\n    }\n\n    \n\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n      display: flex;\n      list-style: none;\n      gap: 1.5rem;\n      margin: 0;\n      padding: 0;\n      align-items: center;\n    }\n\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      text-decoration: none;\n      color: #fff;\n      font-weight: 500;\n      padding: 0.5rem 0.8rem;\n      border-radius: 6px;\n      transition: background 0.3s, color 0.3s;\n    }\n\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 255, 255, 0.2);\n      color: #000000ff;\n    }\n\n    \n\n    .btn[_ngcontent-%COMP%] {\n      background: #bb2929ff;\n      color: #1e3c72;\n      font-weight: bold;\n      transition: transform 0.2s, box-shadow 0.2s;\n    }\n\n    .btn[_ngcontent-%COMP%]:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 4px 10px rgba(0,0,0,0.2);\n      color: #1e3c72;\n    }\n\n    \n\n    @media(max-width: 768px){\n      .container[_ngcontent-%COMP%] {\n        flex-direction: column;\n        gap: 1rem;\n      }\n\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n        flex-direction: column;\n        gap: 0.8rem;\n      }\n\n      .btn[_ngcontent-%COMP%] {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VjdGlvbnMvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0kscUJBQXFCO0lBQ3JCO01BQ0Usb0RBQW9EO01BQ3BELFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIscUNBQXFDO01BQ3JDLGdCQUFnQjtNQUNoQixNQUFNO01BQ04sWUFBWTtNQUNaLDREQUE0RDtJQUM5RDs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLGlCQUFpQjtNQUNqQixjQUFjO0lBQ2hCOztJQUVBLFNBQVM7SUFDVDtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixxQkFBcUI7TUFDckIsV0FBVztJQUNiOztJQUVBO01BQ0Usb0JBQW9CO01BQ3BCLCtCQUErQjtJQUNqQzs7SUFFQTtNQUNFLHdCQUF3QjtJQUMxQjs7SUFFQSxlQUFlO0lBQ2Y7TUFDRSxhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxTQUFTO01BQ1QsVUFBVTtNQUNWLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsdUNBQXVDO0lBQ3pDOztJQUVBO01BQ0Usb0NBQW9DO01BQ3BDLGdCQUFnQjtJQUNsQjs7SUFFQSxvQkFBb0I7SUFDcEI7TUFDRSxxQkFBcUI7TUFDckIsY0FBYztNQUNkLGlCQUFpQjtNQUNqQiwyQ0FBMkM7SUFDN0M7O0lBRUE7TUFDRSwyQkFBMkI7TUFDM0Isc0NBQXNDO01BQ3RDLGNBQWM7SUFDaEI7O0lBRUEsZUFBZTtJQUNmO01BQ0U7UUFDRSxzQkFBc0I7UUFDdEIsU0FBUztNQUNYOztNQUVBO1FBQ0Usc0JBQXNCO1FBQ3RCLFdBQVc7TUFDYjs7TUFFQTtRQUNFLFdBQVc7UUFDWCxrQkFBa0I7TUFDcEI7SUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC8qIEhlYWRlciBjb250YWluZXIgKi9cbiAgICAuaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFlM2M3MiwgIzJhNTI5OCk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgdG9wOiAwO1xuICAgICAgei1pbmRleDogMTAwO1xuICAgICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIC8qIExvZ28gKi9cbiAgICAubG9nbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAubG9nbyBpbWcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgIH1cblxuICAgIC5sb2dvOmhvdmVyIGltZyB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICAgfVxuXG4gICAgLyogTmF2aWdhdGlvbiAqL1xuICAgIG5hdiB1bCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGdhcDogMS41cmVtO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgbmF2IHVsIGxpIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcywgY29sb3IgMC4zcztcbiAgICB9XG5cbiAgICBuYXYgdWwgbGkgYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBjb2xvcjogIzAwMDAwMGZmO1xuICAgIH1cblxuICAgIC8qIFJlZ2lzdGVyIGJ1dHRvbiAqL1xuICAgIC5idG4ge1xuICAgICAgYmFja2dyb3VuZDogI2JiMjkyOWZmO1xuICAgICAgY29sb3I6ICMxZTNjNzI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBib3gtc2hhZG93IDAuMnM7XG4gICAgfVxuXG4gICAgLmJ0bjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgIGNvbG9yOiAjMWUzYzcyO1xuICAgIH1cblxuICAgIC8qIFJlc3BvbnNpdmUgKi9cbiAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBuYXYgdWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDAuOHJlbTtcbiAgICAgIH1cblxuICAgICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4638:
/*!********************************************!*\
  !*** ./src/app/sections/hero.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroComponent: () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function HeroComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
  }
  if (rf & 2) {
    const img_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + img_r1 + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === ctx_r2.currentIndex);
  }
}
class HeroComponent {
  constructor() {
    this.images = ['../../assets/hero1.jpg.jpg', '../../assets/hero2.jpg.jpg', '../../assets/hero1.jpg.jpg'];
    this.currentIndex = 0;
  }
  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 10000);
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  static {
    this.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 28,
      vars: 1,
      consts: [["id", "hero", 1, "section", "hero-bg"], [1, "hero-slider"], ["class", "slide", 3, "active", "backgroundImage", 4, "ngFor", "ngForOf"], [1, "overlay"], [1, "container"], [1, "kicker"], [2, "color", "var(--accent)"], [1, "cta-buttons"], ["href", "#register", 1, "btn"], ["href", "#curriculum", 1, "btn", "outline"], [1, "features"], [1, "card"], ["src", "assets/icon-labs.svg", "alt", "Labs", "width", "22", "height", "22"], ["src", "assets/icon-certificate.svg", "alt", "Certificate", "width", "22", "height", "22"], ["src", "assets/icon-clock.svg", "alt", "Hours", "width", "22", "height", "22"], [1, "slide"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeroComponent_div_2_Template, 1, 4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "EC-Council Certified");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cyber Security \u2013 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Certified Ethical Hacking (CEH) Program");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Become a job-ready ethical hacker with hands-on labs, real-world attack simulations, and expert mentorship. Learn to think like an attacker\u2014defend like a pro. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7)(14, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Register Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Explore Curriculum");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 10)(19, "li", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 20+ Guided Labs ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " EC-Council Certificate ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 80\u2013100 Hours ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".hero-slider[_ngcontent-%COMP%] {\n      position: relative;\n      min-height: 100vh;\n      overflow: hidden;\n    }\n    .slide[_ngcontent-%COMP%] {\n      position: absolute;\n      inset: 0;\n      background-size: cover;\n      background-position: center;\n      opacity: 0;\n      transition: opacity 1s ease-in-out;\n    }\n    .slide.active[_ngcontent-%COMP%] {\n      opacity: 1;\n      z-index: 0;\n    }\n    .overlay[_ngcontent-%COMP%] {\n      position: absolute;\n      inset: 0;\n      background: rgba(0,0,0,0.55);\n      z-index: 1;\n    }\n    .container[_ngcontent-%COMP%] {\n      position: relative;\n      z-index: 2;\n      padding: 2rem;\n      color: #fff;\n      text-align: left;\n      max-width: 1000px;\n    }\n    h1[_ngcontent-%COMP%] {\n      font-size: clamp(2rem, 4.5vw, 3.2rem);\n      max-width: 900px;\n      margin: 1rem 0;\n    }\n    p[_ngcontent-%COMP%] {\n      max-width: 720px;\n      margin-bottom: 1rem;\n      font-size: 1.1rem;\n    }\n    .cta-buttons[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 1rem;\n      margin: 1rem 0;\n    }\n    .btn[_ngcontent-%COMP%] {\n      background: var(--accent, #ff5722);\n      padding: .8rem 1.6rem;\n      border-radius: 6px;\n      color: #fff;\n      font-weight: 600;\n      text-decoration: none;\n      transition: 0.3s;\n    }\n    .btn[_ngcontent-%COMP%]:hover {\n      background: #e64a19;\n    }\n    .btn.outline[_ngcontent-%COMP%] {\n      background: none;\n      border: 1px solid rgba(255,255,255,.7);\n      box-shadow: none;\n    }\n    .features[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 1rem;\n      padding: 0;\n      margin-top: 1.5rem;\n      list-style: none;\n    }\n    .card[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: .6rem;\n      padding: .6rem 1rem;\n      background: rgba(255,255,255,0.1);\n      border-radius: 8px;\n      font-size: 0.95rem;\n      -webkit-backdrop-filter: blur(4px);\n              backdrop-filter: blur(4px);\n    }\n\n    \n\n    @media (max-width: 768px) {\n      .container[_ngcontent-%COMP%] { text-align: center; }\n      h1[_ngcontent-%COMP%] { font-size: clamp(1.6rem, 6vw, 2.5rem); }\n      .features[_ngcontent-%COMP%] { justify-content: center; }\n      .cta-buttons[_ngcontent-%COMP%] { justify-content: center; }\n    }\n    @media (max-width: 480px) {\n      p[_ngcontent-%COMP%] { font-size: 0.95rem; }\n      .btn[_ngcontent-%COMP%] { width: 100%; text-align: center; }\n      .features[_ngcontent-%COMP%] { flex-direction: column; align-items: center; }\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VjdGlvbnMvaGVyby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixRQUFRO01BQ1Isc0JBQXNCO01BQ3RCLDJCQUEyQjtNQUMzQixVQUFVO01BQ1Ysa0NBQWtDO0lBQ3BDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsVUFBVTtJQUNaO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLDRCQUE0QjtNQUM1QixVQUFVO0lBQ1o7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsYUFBYTtNQUNiLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxxQ0FBcUM7TUFDckMsZ0JBQWdCO01BQ2hCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxhQUFhO01BQ2IsZUFBZTtNQUNmLFNBQVM7TUFDVCxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxrQ0FBa0M7TUFDbEMscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLHFCQUFxQjtNQUNyQixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLHNDQUFzQztNQUN0QyxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGFBQWE7TUFDYixlQUFlO01BQ2YsU0FBUztNQUNULFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixtQkFBbUI7TUFDbkIsaUNBQWlDO01BQ2pDLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsa0NBQTBCO2NBQTFCLDBCQUEwQjtJQUM1Qjs7SUFFQSxrQkFBa0I7SUFDbEI7TUFDRSxhQUFhLGtCQUFrQixFQUFFO01BQ2pDLEtBQUsscUNBQXFDLEVBQUU7TUFDNUMsWUFBWSx1QkFBdUIsRUFBRTtNQUNyQyxlQUFlLHVCQUF1QixFQUFFO0lBQzFDO0lBQ0E7TUFDRSxJQUFJLGtCQUFrQixFQUFFO01BQ3hCLE9BQU8sV0FBVyxFQUFFLGtCQUFrQixFQUFFO01BQ3hDLFlBQVksc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUU7SUFDM0QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuaGVyby1zbGlkZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAuc2xpZGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaW5zZXQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIC5zbGlkZS5hY3RpdmUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICAgIC5vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGluc2V0OiAwO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjU1KTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICB9XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA0LjV2dywgMy4ycmVtKTtcbiAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgICAuY3RhLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogMXJlbTtcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCwgI2ZmNTcyMik7XG4gICAgICBwYWRkaW5nOiAuOHJlbSAxLjZyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIH1cbiAgICAuYnRuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlNjRhMTk7XG4gICAgfVxuICAgIC5idG4ub3V0bGluZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuNyk7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAuZmVhdHVyZXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogLjZyZW07XG4gICAgICBwYWRkaW5nOiAuNnJlbSAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgfVxuXG4gICAgLyogw7DCn8KTwrEgUmVzcG9uc2l2ZSAqL1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLmNvbnRhaW5lciB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgaDEgeyBmb250LXNpemU6IGNsYW1wKDEuNnJlbSwgNnZ3LCAyLjVyZW0pOyB9XG4gICAgICAuZmVhdHVyZXMgeyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgICAgLmN0YS1idXR0b25zIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBwIHsgZm9udC1zaXplOiAwLjk1cmVtOyB9XG4gICAgICAuYnRuIHsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgLmZlYXR1cmVzIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1475:
/*!**************************************************!*\
  !*** ./src/app/sections/highlights.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightsComponent: () => (/* binding */ HighlightsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HighlightsComponent {
  static {
    this.ɵfac = function HighlightsComponent_Factory(t) {
      return new (t || HighlightsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HighlightsComponent,
      selectors: [["app-highlights"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 43,
      vars: 0,
      consts: [["id", "highlights", "aria-labelledby", "highlights-title", 1, "section"], [1, "container"], ["id", "highlights-title", 2, "font-size", "clamp(1.6rem, 3.5vw, 2.2rem)"], [1, "grid", "cols-3", 2, "margin-top", "1rem"], [1, "card"], ["src", "assets/icon-shield.svg", "alt", "", "width", "36", "height", "36"], ["src", "assets/icon-labs.svg", "alt", "", "width", "36", "height", "36"], ["src", "assets/icon-mentor.svg", "alt", "", "width", "36", "height", "36"], ["src", "assets/icon-certificate.svg", "alt", "", "width", "36", "height", "36"], ["src", "assets/icon-briefcase.svg", "alt", "", "width", "36", "height", "36"], ["src", "assets/icon-clock.svg", "alt", "", "width", "36", "height", "36"]],
      template: function HighlightsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Program Highlights");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Key features designed to accelerate your cybersecurity career.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "article", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Offensive & Defensive Skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Master reconnaissance, scanning, exploitation, and defensive hardening across systems, networks, and web apps.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "article", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hands\u2011on Labs");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Practice in a safe, isolated lab with real tools\u2014Burp Suite, Metasploit, Wireshark, Nmap, and more.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "article", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mentor Support");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Weekly doubt\u2011clearing sessions and career guidance from experienced security practitioners.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "article", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "EC\u2011Council Certified");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Earn an industry\u2011recognized credential demonstrating applied ethical hacking competence.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "article", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Career\u2011Ready Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Build a portfolio: vulnerability assessment report, exploit write\u2011ups, and remediation playbooks.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "article", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Flexible Schedules");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Weekend or evening cohorts available; fully online with recorded sessions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 2359:
/*!************************************************!*\
  !*** ./src/app/sections/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);







function RegisterComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Seats are limited. Fill out the form and our team will contact you with schedules and next steps.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_form_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is required (min 3 characters). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_form_10_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_form_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_form_10_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please select a cohort. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_form_10_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9)(2, "div")(3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegisterComponent_form_10_div_6_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegisterComponent_form_10_div_11_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "div")(14, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RegisterComponent_form_10_div_17_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div")(19, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Preferred Cohort");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 18)(22, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Select a cohort");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Weekend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Weekday Evenings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Self-paced + Mentorship");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RegisterComponent_form_10_div_30_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div")(32, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Message (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22)(36, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.form.get("name")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.form.get("name")) == null ? null : tmp_2_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.form.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r1.form.get("email")) == null ? null : tmp_3_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.form.get("phone")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r1.form.get("phone")) == null ? null : tmp_4_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r1.form.get("cohort")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.form.get("cohort")) == null ? null : tmp_5_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.form.invalid || ctx_r1.submitted());
  }
}
function RegisterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25)(1, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u2705 You unlocked a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "5% discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " on your seat! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_div_11_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.processPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Cardholder Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Card Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 32)(16, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Expiry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " CVV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Pay Now & Save 5%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.paymentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.paymentForm.invalid);
  }
}
class RegisterComponent {
  constructor(fb) {
    this.fb = fb;
    this.submitted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.showPayment = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.form = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      cohort: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      message: ['']
    });
    this.paymentForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      card: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(16)]],
      expiry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      cvv: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(4)]]
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('Registration:', this.form.value);
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      icon: 'success',
      title: 'Registration Complete!',
      text: 'Proceed to payment to confirm your seat with 5% OFF.',
      confirmButtonText: 'OK'
    }).then(() => {
      this.submitted.set(true);
      this.form.disable();
      this.showPayment.set(true);
    });
  }
  processPayment() {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }
    console.log('Payment:', this.paymentForm.value);
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      icon: 'success',
      title: 'Payment Successful!',
      text: 'Your registration is confirmed and 5% discount applied!',
      confirmButtonText: 'Done'
    });
    this.paymentForm.disable();
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 3,
      consts: [["id", "register", "aria-labelledby", "register-title", 1, "section"], [1, "container"], [2, "background", "var(--accent, #b02867ff)", "color", "#11040aff", "padding", "1rem", "border-radius", "8px", "margin-bottom", "1rem", "text-align", "center", "font-weight", "600"], [2, "text-decoration", "underline"], ["id", "register-title", 2, "font-size", "clamp(1.6rem, 3.5vw, 2.2rem)"], [4, "ngIf"], ["class", "card", "style", "margin-top:1rem;", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "card", "style", "margin-top:2rem; max-width:500px; margin:auto; padding:2rem; border-radius:12px; background:#rgba(68, 62, 62, 1); box-shadow:0 4px 12px rgba(0,0,0,.1);", 4, "ngIf"], [1, "card", 2, "margin-top", "1rem", 3, "ngSubmit", "formGroup"], [1, "form-row", "two"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "Kaustubh Tilekar"], ["class", "error", 4, "ngIf"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "kaustubh@example.com"], ["for", "phone"], ["id", "phone", "type", "tel", "formControlName", "phone", "placeholder", "+91 98xxxxxxx"], ["for", "cohort"], ["id", "cohort", "formControlName", "cohort"], ["value", "", "disabled", ""], ["for", "message"], ["id", "message", "rows", "4", "formControlName", "message", "placeholder", "Share your background or goals"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "1rem", "margin-top", ".6rem"], ["type", "submit", 3, "disabled"], [1, "error"], [1, "card", 2, "margin-top", "2rem", "max-width", "500px", "margin", "auto", "padding", "2rem", "border-radius", "12px", "background", "#rgba(68, 62, 62, 1)", "box-shadow", "0 4px 12px rgba(0,0,0,.1)"], [2, "margin-bottom", "1rem", "font-size", "1.6rem"], [2, "background", "#f0fff4", "color", "#2e7d32", "padding", ".6rem 1rem", "border-radius", "6px", "margin-bottom", "1rem", "font-weight", "500"], [3, "ngSubmit", "formGroup"], [2, "display", "block", "margin-bottom", ".6rem"], ["type", "text", "formControlName", "name", "required", "", 2, "width", "100%", "padding", ".6rem", "margin-top", ".3rem", "border", "1px solid #7d7c7cff", "border-radius", "6px"], ["type", "text", "formControlName", "card", "maxlength", "16", "required", "", 2, "width", "100%", "padding", ".6rem", "margin-top", ".3rem", "border", "1px solid #7d7c7cff", "border-radius", "6px"], [2, "display", "flex", "gap", "1rem", "margin-bottom", ".6rem"], [2, "flex", "1"], ["type", "text", "formControlName", "expiry", "placeholder", "MM/YY", "required", "", 2, "width", "100%", "padding", ".6rem", "margin-top", ".3rem", "border", "1px solid #7d7c7cff", "border-radius", "6px"], ["type", "password", "formControlName", "cvv", "maxlength", "4", "required", "", 2, "width", "100%", "padding", ".6rem", "margin-top", ".3rem", "border", "1px solid #7d7c7cff", "border-radius", "6px"], ["type", "submit", 1, "btn", 2, "width", "100%", "margin-top", ".8rem", 3, "disabled"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \uD83C\uDF89 Limited seats \u2014 Book your seat today and get ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "10% OFF ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "on first enroll ! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Register Your Interest");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RegisterComponent_p_9_Template, 2, 0, "p", 5)(10, RegisterComponent_form_10_Template, 38, 6, "form", 6)(11, RegisterComponent_div_11_Template, 24, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showPayment());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showPayment());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPayment());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.routes */ 2181);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js */ 4124);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_2__);






(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_4__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_1__.routes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_4__.withInMemoryScrolling)({
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.provideAnimations)()]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map