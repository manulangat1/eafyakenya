(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var httpOption = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        // 'Content-Type': 'multipart/form-data'
        "Accept": "application/json"
    })
};
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.login = function (user) {
        return this.http.post('/login/', JSON.stringify(user), httpOptions);
    };
    ApiService.prototype.register = function (auser) {
        return this.http.post('/register/', auser);
    };
    ApiService.prototype.getPatient = function () {
        return this.http.get('/patients/');
    };
    ApiService.prototype.createPatient = function (pat) {
        return this.http.post('/createpatient/', pat);
    };
    ApiService.prototype.getHome = function () {
        return this.http.get('/home/');
    };
    ApiService.prototype.getHomeById = function (id) {
        return this.http.get('/home/' + id + '/');
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-register/patient-register.component */ "./src/app/patient-register/patient-register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _homedetails_homedetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homedetails/homedetails.component */ "./src/app/homedetails/homedetails.component.ts");







var routes = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_4__["PatientRegisterComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: "home/home/det/:id", component: _homedetails_homedetails_component__WEBPACK_IMPORTED_MODULE_6__["HomedetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_xsrfinterceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-xsrfinterceptor */ "./src/app/http-xsrfinterceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _buttons_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buttons.directive */ "./src/app/buttons.directive.ts");
/* harmony import */ var _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patient-register/patient-register.component */ "./src/app/patient-register/patient-register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _homedetails_homedetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homedetails/homedetails.component */ "./src/app/homedetails/homedetails.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _buttons_directive__WEBPACK_IMPORTED_MODULE_9__["ButtonsDirective"],
                _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_10__["PatientRegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _homedetails_homedetails_component__WEBPACK_IMPORTED_MODULE_12__["HomedetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
                    cookieName: 'csrftoken',
                    headerName: 'X-CSRFTOKEN'
                })
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _http_xsrfinterceptor__WEBPACK_IMPORTED_MODULE_5__["HttpXSRFInterceptor"], multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buttons.directive.ts":
/*!**************************************!*\
  !*** ./src/app/buttons.directive.ts ***!
  \**************************************/
/*! exports provided: ButtonsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsDirective", function() { return ButtonsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonsDirective = /** @class */ (function () {
    function ButtonsDirective(elem) {
        this.elem = elem;
    }
    ButtonsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appButtons]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ButtonsDirective);
    return ButtonsDirective;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home{\n  margin: 0;\n  padding: 0;\n  background-color: rgb(0,255,255);\n  height: 100%;\n}\n.hos{\n  /* text-align: center; */\n  /* width: 600px; */\n  margin-top: 29px;\n  margin-right:  290px;\n  border-right: 3px solid gray;\n  padding: 1em;\n}\n.anno{\n  float: right;\n  width: 200px;\n  margin: 0;\n  /* padding: em; */\n}\n/* input{\n  text-align: center;\n  margin-right: 50%;\n} */\nhr {\n  color: #111;\n}\n.navigation ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #f133f3;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n.navigation ul li{\n  float: left;\n  border-right: 1px solid #bbb;\n}\n.navigation ul li:last-child{\n  border-right: none;\n}\n.navigation ul li a{\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n.navigation ul li a:hover{\n  background-color: #111;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7QUFDQTs7O0dBR0c7QUFDSDtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21le1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDI1NSwyNTUpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaG9ze1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gIC8qIHdpZHRoOiA2MDBweDsgKi9cbiAgbWFyZ2luLXRvcDogMjlweDtcbiAgbWFyZ2luLXJpZ2h0OiAgMjkwcHg7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5hbm5ve1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwO1xuICAvKiBwYWRkaW5nOiBlbTsgKi9cbn1cbi8qIGlucHV0e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNTAlO1xufSAqL1xuaHIge1xuICBjb2xvcjogIzExMTtcbn1cbi5uYXZpZ2F0aW9uIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTMzZjM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXZpZ2F0aW9uIHVsIGxpe1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JiYjtcbn1cbi5uYXZpZ2F0aW9uIHVsIGxpOmxhc3QtY2hpbGR7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5uYXZpZ2F0aW9uIHVsIGxpIGF7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2aWdhdGlvbiB1bCBsaSBhOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <div class=\"navigation\">\n    <ul>\n      <li><a routerLink=\"/home\">Home</a></li>\n      <li><a href=\"#\">hs</a></li>\n      <li><input type=\"text\" (keyup)=\"onKeyUp($event)\"  placeholder=\"Enter patient no here\" name=\"q\"><button (click)=\"getSearch()\" name=\"button\">Search</button></li>\n      <!-- <input type=\"text\" (keyup)=\"onKeyUp($event)\"  placeholder=\"Enter patient no here\" name=\"q\"><button (click)=\"getSearch()\" name=\"button\">Search</button> -->\n    </ul>\n  </div>\n  <div class=\"anno\">\n    <h1>hello there</h1>\n    <p>\n      this is it??????????????????????????????????????????\n    </p>\n  </div>\n  <div class=\"hos\">\n    <div *ngFor='let h of homes'>\n      <a routerLink=\"home/det/{{h.id}}\">\n      <h6>{{h.name}}</h6>\n      </a>\n      <p>{{h.text}}</p>\n      <p>posted on: {{h.pub_date | date}}</p>\n      <hr>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(api, http) {
        this.api = api;
        this.http = http;
        this.homes = [];
        this.name = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getHome();
    };
    HomeComponent.prototype.getHome = function () {
        var _this = this;
        this.api.getHome().subscribe(function (data) {
            _this.homes = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.onKeyUp = function (event) {
        this.name = event.target.value;
    };
    HomeComponent.prototype.getSearch = function () {
        this.http.get('/patient/search/?name=${this.name}').subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/homedetails/homedetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/homedetails/homedetails.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVkZXRhaWxzL2hvbWVkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homedetails/homedetails.component.html":
/*!********************************************************!*\
  !*** ./src/app/homedetails/homedetails.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>{{p.name}}</h6>\n<p>{{p.text}}</p>\n"

/***/ }),

/***/ "./src/app/homedetails/homedetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/homedetails/homedetails.component.ts ***!
  \******************************************************/
/*! exports provided: HomedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomedetailsComponent", function() { return HomedetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var HomedetailsComponent = /** @class */ (function () {
    function HomedetailsComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.id = this.route.snapshot.params['id'];
        this.p = {};
    }
    HomedetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getHomeById(this.id).subscribe(function (data) {
            _this.p = data;
            console.log(data);
        });
    };
    HomedetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homedetails',
            template: __webpack_require__(/*! ./homedetails.component.html */ "./src/app/homedetails/homedetails.component.html"),
            styles: [__webpack_require__(/*! ./homedetails.component.css */ "./src/app/homedetails/homedetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomedetailsComponent);
    return HomedetailsComponent;
}());



/***/ }),

/***/ "./src/app/http-xsrfinterceptor.ts":
/*!*****************************************!*\
  !*** ./src/app/http-xsrfinterceptor.ts ***!
  \*****************************************/
/*! exports provided: HttpXSRFInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXSRFInterceptor", function() { return HttpXSRFInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

// export class HttpXSRFInterceptor {
// }


var HttpXSRFInterceptor = /** @class */ (function () {
    function HttpXSRFInterceptor(tokenExtractor) {
        this.tokenExtractor = tokenExtractor;
    }
    HttpXSRFInterceptor.prototype.intercept = function (req, next) {
        var headerName = 'X-CSRFToken';
        var token = this.tokenExtractor.getToken();
        if (token !== null && !req.headers.has(headerName)) {
            req = req.clone({ headers: req.headers.set(headerName, token) });
        }
        return next.handle(req);
    };
    HttpXSRFInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpXsrfTokenExtractor"]])
    ], HttpXSRFInterceptor);
    return HttpXSRFInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    font-weight: bold;\n    margin: 0;\n}\n\np {\n    font-size: 14px;\n    font-weight: 100;\n    line-height: 20px;\n    letter-spacing: 0.5px;\n    margin: 20px 0 30px;\n}\n\nspan {\n    font-size: 12px;\n}\n\na {\n    color: #333;\n    font-size: 14px;\n    text-decoration: none;\n    margin: 15px 0;\n}\n\nbutton {\n    border-radius: 20px;\n    border: 1px solid #ff4b2b;\n    background-color: #ff4b2b;\n    color: #ffffff;\n    font-size: 12px;\n    font-weight: bold;\n    padding: 12px 45px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    transition: -webkit-transform 80ms ease-in;\n    transition: transform 80ms ease-in;\n    transition: transform 80ms ease-in, -webkit-transform 80ms ease-in;\n}\n\nbutton:active {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n}\n\nbutton:focus {\n    outline: none;\n}\n\nbutton.ghost {\n    background-color: transparent;\n    border-color: #ffffff;\n}\n\nform {\n    background-color: #ffffff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 0 50px;\n    height: 100%;\n    text-align: center;\n}\n\ninput {\n    background-color: #eee;\n    border: none;\n    padding: 12px 15px;\n    margin: 8px 0;\n    width: 100%;\n}\n\n.social-container {\n    margin: 20px 0;\n}\n\n.social-container a {\n    border: 1px solid #dddddd;\n    border-radius: 50%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 5px;\n    height: 40px;\n    width: 40px;\n}\n\n.container {\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    position: relative;\n    overflow: hidden;\n    width: 768px;\n    max-width: 100%;\n    min-height: 480px;\n    margin-right:  190px;\n    border-right: 1px solid gray;\n    padding: 1em;\n    /* height: 100%; */\n}\n\n.form-container {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    transition: all 0.6s ease-in-out;\n}\n\n.sign-in-container {\n    left: 0;\n    width: 50%;\n    z-index: 2;\n}\n\n.sign-up-container {\n    left: 0;\n    width: 50%;\n    opacity: 0;\n    z-index: 1;\n}\n\n.container.right-panel-active .sign-in-container {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n}\n\n.container.right-panel-active .sign-up-container {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 1;\n    z-index: 5;\n    -webkit-animation: show 0.6s;\n            animation: show 0.6s;\n}\n\n@-webkit-keyframes show {\n    0%,\n    49.99% {\n        opacity: 0;\n        z-index: 1;\n    }\n\n    50%,\n    100% {\n        opacity: 1;\n        z-index: 5;\n    }\n}\n\n@keyframes show {\n    0%,\n    49.99% {\n        opacity: 0;\n        z-index: 1;\n    }\n\n    50%,\n    100% {\n        opacity: 1;\n        z-index: 5;\n    }\n}\n\n.overlay-container {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n    transition: -webkit-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n    z-index: 100;\n}\n\n.container.right-panel-active .overlay-container {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n}\n\n.overlay {\n    background: #ff416c;\n    background: linear-gradient(to right, #ff4b2b, #ff416c);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 0 0;\n    color: #ffffff;\n    position: relative;\n    left: -100%;\n    height: 100%;\n    width: 200%;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    transition: -webkit-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n\n.container.right-panel-active .overlay {\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%);\n}\n\n.overlay-panel {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 0 40px;\n    text-align: center;\n    top: 0;\n    height: 100%;\n    width: 50%;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    transition: -webkit-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n\n.overlay-left {\n    -webkit-transform: translateX(-20%);\n            transform: translateX(-20%);\n}\n\n.container.right-panel-active .overlay-left {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n\n.overlay-right {\n    right: 0;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n\n.container.right-panel-active .overlay-right {\n    -webkit-transform: translateX(20%);\n            transform: translateX(20%);\n}\n\n.registers {\n  border: 1px solid #ff146d;\n  background-color: lightblue;\n  border-radius: 10px;\n  text-align: center;\n  width: 470px;\n  float: right;\n  height: 100%;\n}\n\n.registers p{\n  font-style: italic;\n  line-height: 28px;\n}\n\n.register p a{\n  text-decoration: none;\n  color: #ddf12c;\n}\n\n.register p a:hover{\n  color: #aa12ff;\n  cursor: pointer;\n}\n\nbody{\n  background-color: rgba(245, 0.2, 0.156, 0.5);\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QiwwQ0FBa0M7SUFBbEMsa0NBQWtDO0lBQWxDLGtFQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDRFQUE0RTtJQUM1RSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLE9BQU87SUFDUCxVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksT0FBTztJQUNQLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFVBQVU7SUFDViw0QkFBb0I7WUFBcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7O1FBRUksVUFBVTtRQUNWLFVBQVU7SUFDZDs7SUFFQTs7UUFFSSxVQUFVO1FBQ1YsVUFBVTtJQUNkO0FBQ0o7O0FBWkE7SUFDSTs7UUFFSSxVQUFVO1FBQ1YsVUFBVTtJQUNkOztJQUVBOztRQUVJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7QUFDSjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDhDQUFzQztJQUF0QyxzQ0FBc0M7SUFBdEMsMEVBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBRW5CLHVEQUF1RDtJQUN2RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsOENBQXNDO0lBQXRDLHNDQUFzQztJQUF0QywwRUFBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixZQUFZO0lBQ1osVUFBVTtJQUNWLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsOENBQXNDO0lBQXRDLHNDQUFzQztJQUF0QywwRUFBc0M7QUFDMUM7O0FBRUE7SUFDSSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFFBQVE7SUFDUixnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5Qjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgbWFyZ2luOiAyMHB4IDAgMzBweDtcbn1cblxuc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5hIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNGIyYjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjJiO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMnB4IDQ1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uLmdob3N0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG59XG5cbmZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNvY2lhbC1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4uc29jaWFsLWNvbnRhaW5lciBhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDc2OHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0ODBweDtcbiAgICBtYXJnaW4tcmlnaHQ6ICAxOTBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG59XG4uZm9ybS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2lnbi1pbi1jb250YWluZXIge1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uc2lnbi11cC1jb250YWluZXIge1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLWluLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi11cC1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDU7XG4gICAgYW5pbWF0aW9uOiBzaG93IDAuNnM7XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG4gICAgMCUsXG4gICAgNDkuOTklIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICA1MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgfVxufVxuLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogI2ZmNDE2YztcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNGIyYiwgI2ZmNDE2Yyk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0YjJiLCAjZmY0MTZjKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG59XG5cbi5vdmVybGF5LXBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4ub3ZlcmxheS1sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLm92ZXJsYXktcmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xufVxuLnJlZ2lzdGVycyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjE0NmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDcwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnJlZ2lzdGVycyBwe1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnJlZ2lzdGVyIHAgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2RkZjEyYztcbn1cbi5yZWdpc3RlciBwIGE6aG92ZXJ7XG4gIGNvbG9yOiAjYWExMmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5ib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMC4yLCAwLjE1NiwgMC41KTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n    <title></title>\n    <!-- <link rel=\"stylesheet\" href=\"a.css\"> -->\n  </head>\n  <body>\n    <div class=\"registers\">\n      <p>Hello there....</p>\n      <p>U a patient.... Register to the eafya System <a routerLink=\"/register\">here</a></p>\n    </div>\n    <div class=\"container\" id=\"container\">\n        <div class=\"form-container sign-up-container\">\n            <!-- Sign Up form code goes here -->\n    <form #regForm=\"ngForm\">\n       <h1>Create Account</h1>\n       <div class=\"social-container\">\n           <a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n           <a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n           <a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n       </div>\n       <span>or use your email for registration</span>\n       <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"regDetails.username\" required  name=\"username\" />\n       <input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"regDetails.email\" required name=\"email\" />\n       <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"regDetails.password\" required name=\"password\" />\n       <button (click)=\"registers()\">Sign Up</button>\n   </form>\n        </div>\n        <div class=\"form-container sign-in-container\">\n            <!-- Sign In form code goes here -->\n        <form #logForm=\"ngForm\">\n        <h1>Sign in</h1>\n        <div class=\"social-container\">\n            <a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n            <a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n            <a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n        </div>\n        <span>or use your account</span>\n        <input type=\"text\" placeholder=\"username\" [(ngModel)]=\"logDetails.username\" required name=\"username\" />\n        <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"logDetails.password\" required name=\"login\"/>\n        <a href=\"#\">Forgot your password?</a>\n        <button (click)=\"logsIn()\">Sign In</button>\n    </form>\n        </div>\n        <div class=\"overlay-container\">\n            <!-- The overlay code goes here -->\n            <div class=\"overlay\">\n        <div class=\"overlay-panel overlay-left\">\n            <h1>Welcome Back!</h1>\n            <p>\n                To continue please login.\n            </p>\n            <button class=\"ghost\" id=\"signIn\">Sign In</button>\n        </div>\n        <div class=\"overlay-panel overlay-right\">\n            <h1>Hello, u a Doctor</h1>\n            <p>Enter your  details and start journey with us</p>\n            <button class=\"ghost\" id=\"signUp\">Sign Up</button>\n        </div>\n    </div>\n        </div>\n    </div>\n    <!-- <script src=\"a.js\" type=\"text/javascript\" charset=\"utf-8\"></script> -->\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




window.onload = function () {
    var signUpButton = document.getElementById('signUp');
    var signInButton = document.getElementById('signIn');
    var container = document.getElementById('container');
    signUpButton.addEventListener('click', function () {
        container.classList.add('right-panel-active');
    });
    signInButton.addEventListener('click', function () {
        container.classList.remove('right-panel-active');
    });
};
var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.regDetails = { username: "", email: "", password: "" };
        this.logDetails = { username: "", password: "" };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logsIn = function (logData) {
        var _this = this;
        this.api.login(this.logDetails).subscribe(function (data) {
            console.log("log in successfull");
            _this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent.prototype.registers = function (regData) {
        this.api.register(this.regDetails).subscribe(function (data) {
            console.log("registered successfully");
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "regDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "logDetails", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/patient-register/patient-register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/patient-register/patient-register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcmVnaXN0ZXIvcGF0aWVudC1yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient-register/patient-register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/patient-register/patient-register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration\">\n  <form [formGroup]=\"yourForm\">\n    <input type=\"text\" name=\"name\" formControlName=\"name\" />\n    <input type=\"number\" name=\"age\" formControlName=\"age\" />\n    <input type=\"email\" name=\"email\" formControlName=\"email\" />\n    <input type=\"file\" name=\"pic\" (change)=\"onFileSelected($event)\">\n    <button type=\"button\" (click)=\"createPat()\">Sign Up</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/patient-register/patient-register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/patient-register/patient-register.component.ts ***!
  \****************************************************************/
/*! exports provided: PatientRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRegisterComponent", function() { return PatientRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PatientRegisterComponent = /** @class */ (function () {
    // @Input() patDetails = {name:"",age:0,email:""}
    function PatientRegisterComponent(fb, api, route, router) {
        this.fb = fb;
        this.api = api;
        this.route = route;
        this.router = router;
        this.selectedFile = null;
        this.yourForm = this.fb.group({
            name: [''],
            age: [''],
            pic: [''],
            email: ['']
        });
    }
    PatientRegisterComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    PatientRegisterComponent.prototype.ngOnInit = function () {
    };
    PatientRegisterComponent.prototype.createPat = function (patData) {
        var fd = new FormData();
        fd.append('name', this.yourForm.get('name').value);
        fd.append('age', this.yourForm.get('age').value);
        fd.append('email', this.yourForm.get('email').value);
        fd.append('pic', this.selectedFile, this.selectedFile.name);
        // this.patDetails['pic'] = "this.selectedFile,this.selectedFile.name"
        this.api.createPatient(fd).subscribe(function (data) {
            console.log("successfulll...");
        }, function (err) {
            console.log(err);
        });
    };
    PatientRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-register',
            template: __webpack_require__(/*! ./patient-register.component.html */ "./src/app/patient-register/patient-register.component.html"),
            styles: [__webpack_require__(/*! ./patient-register.component.css */ "./src/app/patient-register/patient-register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PatientRegisterComponent);
    return PatientRegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/manulangat/Desktop/web/final/eafyakenya/eafya/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map