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
    ApiService.prototype.postHistory = function (histo) {
        return this.http.post('/history/', histo);
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
/* harmony import */ var _historyadd_historyadd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./historyadd/historyadd.component */ "./src/app/historyadd/historyadd.component.ts");








var routes = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_4__["PatientRegisterComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: "home/home/det/:id", component: _homedetails_homedetails_component__WEBPACK_IMPORTED_MODULE_6__["HomedetailsComponent"] },
    { path: "history/add", component: _historyadd_historyadd_component__WEBPACK_IMPORTED_MODULE_7__["HistoryaddComponent"] }
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
/* harmony import */ var _historyadd_historyadd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./historyadd/historyadd.component */ "./src/app/historyadd/historyadd.component.ts");














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
                _homedetails_homedetails_component__WEBPACK_IMPORTED_MODULE_12__["HomedetailsComponent"],
                _historyadd_historyadd_component__WEBPACK_IMPORTED_MODULE_13__["HistoryaddComponent"]
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

/***/ "./src/app/historyadd/historyadd.component.css":
/*!*****************************************************!*\
  !*** ./src/app/historyadd/historyadd.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnlhZGQvaGlzdG9yeWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/historyadd/historyadd.component.html":
/*!******************************************************!*\
  !*** ./src/app/historyadd/historyadd.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add\">\n  <div class=\"\">\n    <form class=\"\" #addForm=\"ngForm\">\n      <input type=\"text\" name=\"text\" [(ngModel)]=\"HistDetails.text\">\n      <input type=\"number\" name=\"text\" [(ngModel)]=\"HistDetails.patient\">\n      <button type=\"button\" (click)=\"postHistory()\" name=\"button\">Add</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/historyadd/historyadd.component.ts":
/*!****************************************************!*\
  !*** ./src/app/historyadd/historyadd.component.ts ***!
  \****************************************************/
/*! exports provided: HistoryaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryaddComponent", function() { return HistoryaddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var HistoryaddComponent = /** @class */ (function () {
    function HistoryaddComponent(api) {
        this.api = api;
        this.HistDetails = { text: "", patient: 0 };
    }
    HistoryaddComponent.prototype.ngOnInit = function () {
    };
    HistoryaddComponent.prototype.postHistory = function (histData) {
        this.api.postHistory(this.HistDetails).subscribe(function (data) {
            console.log("added successfully");
        });
    };
    HistoryaddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-historyadd',
            template: __webpack_require__(/*! ./historyadd.component.html */ "./src/app/historyadd/historyadd.component.html"),
            styles: [__webpack_require__(/*! ./historyadd.component.css */ "./src/app/historyadd/historyadd.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HistoryaddComponent);
    return HistoryaddComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home{\n  margin: 0;\n  padding: 0;\n  background-color: rgba(245, 0.2, 0.156, 0.5);\n  background-attachment: fixed;\n  height: 100%;\n  background-size: 100%;\n  font-family: exo, sans-serif;\n}\n.topnav-centered  {\n  float: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.topnav-right {\n  float: right;\n}\n.hos{\n  background-color: #f2f2f2;\n  text-align: center;\n  width: 868px;\n  margin: auto;\n  /* margin-left: 300px; */\n  margin-top: 29px;\n  padding: 1em;\n  height: 100%;\n}\n.hos .pls{\n  padding: 100px;\n}\n.hos .pls img{\n  float: right;\n  width: 300px;\n  height: 250px;\n  border-radius: 4px;\n}\n.hos .pls h6{\n  font-style: italic;\n}\n.hos .homes{\n  clear: right;\n}\n.registration{\n  padding-top: 10px;\n}\n.registration .form-group{\n  text-align: center;\n  margin: 3px solid red;\n  background-color: rgba(150, 190, 249, 0.5);\n}\n.registration .form-group input{\n  margin-top: 30px;\n  width: 60%;\n  border-radius: 4px;\n  padding: 12px 20px;\n  margin: 16px 0;\n  box-sizing: border-box;\n}\n.registration .form-group button{\n  width: 40%;\n  border-radius: 12px;\n  background-color: #f44336;\n  color: white;\n  text-align: center;\n}\n.navigation{\n  position: fixed;\n  background-color: #111;\n  overflow: hidden;\n  top: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.navigation ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #111;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n.navigation ul li{\n  float: right;\n  border-right: 1px solid #bbb;\n}\n.navigation ul li:last-child{\n  border-right: none;\n}\n.navigation ul li a{\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n.navigation ul li a:hover{\n  background-color: #1ab1c1;\n}\n.footer{\n  margin-top: 400px;\n}\nhtml{\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDRDQUE0QztFQUM1Qyw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQztFQUNDLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWV7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDAuMiwgMC4xNTYsIDAuNSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBmb250LWZhbWlseTogZXhvLCBzYW5zLXNlcmlmO1xufVxuLnRvcG5hdi1jZW50ZXJlZCAge1xuICBmbG9hdDogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50b3BuYXYtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5ob3N7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDg2OHB4O1xuICBtYXJnaW46IGF1dG87XG4gIC8qIG1hcmdpbi1sZWZ0OiAzMDBweDsgKi9cbiAgbWFyZ2luLXRvcDogMjlweDtcbiAgcGFkZGluZzogMWVtO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaG9zIC5wbHN7XG4gIHBhZGRpbmc6IDEwMHB4O1xufVxuLmhvcyAucGxzIGltZ3tcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ob3MgLnBscyBoNntcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmhvcyAuaG9tZXN7XG4gIGNsZWFyOiByaWdodDtcbn1cbi5yZWdpc3RyYXRpb257XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnJlZ2lzdHJhdGlvbiAuZm9ybS1ncm91cHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDNweCBzb2xpZCByZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUwLCAxOTAsIDI0OSwgMC41KTtcbn1cbi5yZWdpc3RyYXRpb24gLmZvcm0tZ3JvdXAgaW5wdXR7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDE2cHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5yZWdpc3RyYXRpb24gLmZvcm0tZ3JvdXAgYnV0dG9ue1xuICB3aWR0aDogNDAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uYXZpZ2F0aW9ue1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiAubmF2aWdhdGlvbiB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2aWdhdGlvbiB1bCBsaXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmJiO1xufVxuLm5hdmlnYXRpb24gdWwgbGk6bGFzdC1jaGlsZHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLm5hdmlnYXRpb24gdWwgbGkgYXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uYXZpZ2F0aW9uIHVsIGxpIGE6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWIxYzE7XG59XG4uZm9vdGVye1xuICBtYXJnaW4tdG9wOiA0MDBweDtcbn1cbmh0bWx7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <div class=\"navigation\">\n    <ul>\n      <li style=\"float:left\"><a routerLink=\"/home\">Home</a></li>\n      <li><a routerLink=\"\">hs</a></li>\n      <div class=\"topnav-centered\">\n        <input type=\"text\" (keyup)=\"onKeyUp($event)\"  placeholder=\"Enter patient no here\" name=\"search\"><button (click)=\"getSearch()\" name=\"button\"><i class=\"fas fa-search\"></i></button>\n      </div>\n      <li><a routerLink=\"/register\">Add Patient</a></li>\n    </ul>\n  </div>\n  <div class=\"hos\">\n    <!-- <button type=\"button\" (click)=\"toggle()\"  id=\"bt\">{{buttonName}}</button> -->\n    <div class=\"pls\" *ngFor=\"let p of pls \">\n      <h6>Name is {{p.name}}</h6>\n      <img src=\"{{p.pic}}\" alt=\"patients image\" class=\"img-responsive\">\n      <p> Age : {{p.age}}</p>\n      <div class=\"\" >\n        <table>\n          <thead>\n            <th> Diagnosis </th>\n            <th> Created </th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let hi of p.history\">\n              <td>{{hi.text}}</td>\n              <td>{{hi.created}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- <p>{{hi.text}}</p> -->\n      </div>\n    </div>\n    <hr>\n    <div class=\"homes\" *ngFor=\"let h of homes\">\n      <h5>Announcements</h5>\n      <a routerLink=\"home/det/{{h.id}}\">\n      <h6>{{h.name }}</h6>\n      </a>\n      <p>{{h.text }}</p>\n      <p>{{h.pub_date | date }}</p>\n    </div>\n    <div class=\"footer\">\n      <p>hello there, this is one of those times</p>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var HomeComponent = /** @class */ (function () {
    // yourForm : FormGroup;
    // selectedFile = null;
    // onFileSelected(event){
    //   this.selectedFile = event.target.files[0]
    // }
    function HomeComponent(api, http, router) {
        this.api = api;
        this.http = http;
        this.router = router;
        this.show = false;
        this.buttonName = 'Show';
        this.homes = [];
        this.pls = [];
        // this.yourForm = this.fb.group({
        //   name: [''],
        //   age: [''],
        //   pic: [''],
        //   email: ['']
        // });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getHome();
    };
    HomeComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show) {
            this.buttonName = "Hide";
        }
        else {
            this.buttonName = "show";
        }
    };
    HomeComponent.prototype.goToUrl = function () {
        this.router.navigate(['/history/add']);
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
        this.search = event.target.value;
        this.found = false;
    };
    HomeComponent.prototype.getSearch = function () {
        var _this = this;
        this.http.get('/ps/', { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('search', this.search) }).subscribe(function (data) {
            console.log(data);
            _this.pls = data;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "h1 {\n    font-weight: bold;\n    margin: 0;\n}\n\np {\n    font-size: 14px;\n    font-weight: 100;\n    line-height: 20px;\n    letter-spacing: 0.5px;\n    margin: 20px 0 30px;\n}\n\nspan {\n    font-size: 12px;\n}\n\na {\n    color: #333;\n    font-size: 14px;\n    text-decoration: none;\n    margin: 15px 0;\n}\n\nbutton {\n    border-radius: 20px;\n    border: 1px solid #ff4b2b;\n    background-color: #ff4b2b;\n    color: #ffffff;\n    font-size: 12px;\n    font-weight: bold;\n    padding: 12px 45px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    transition: -webkit-transform 80ms ease-in;\n    transition: transform 80ms ease-in;\n    transition: transform 80ms ease-in, -webkit-transform 80ms ease-in;\n}\n\nbutton:active {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n}\n\nbutton:focus {\n    outline: none;\n}\n\nbutton.ghost {\n    background-color: transparent;\n    border-color: #ffffff;\n}\n\nform {\n    background-color: #ffffff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 0 50px;\n    height: 100%;\n    text-align: center;\n}\n\ninput {\n    background-color: #eee;\n    border: none;\n    padding: 12px 15px;\n    margin: 8px 0;\n    width: 100%;\n}\n\n.social-container {\n    margin: 20px 0;\n}\n\n.social-container a {\n    border: 1px solid #dddddd;\n    border-radius: 50%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 5px;\n    height: 40px;\n    width: 40px;\n}\n\n.container {\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    position: relative;\n    overflow: hidden;\n    width: 768px;\n    max-width: 100%;\n    min-height: 480px;\n    /* max-height: 100%; */\n    margin: auto;\n    /* margin-right:  190px;\n    border-right: 1px solid gray;\n    padding: 1em; */\n    /* height: 100%; */\n}\n\n.form-container {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    transition: all 0.6s ease-in-out;\n}\n\n.sign-in-container {\n    left: 0;\n    width: 50%;\n    z-index: 2;\n}\n\n.sign-up-container {\n    left: 0;\n    width: 50%;\n    opacity: 0;\n    z-index: 1;\n}\n\n.container.right-panel-active .sign-in-container {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n}\n\n.container.right-panel-active .sign-up-container {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 1;\n    z-index: 5;\n    -webkit-animation: show 0.6s;\n            animation: show 0.6s;\n}\n\n@-webkit-keyframes show {\n    0%,\n    49.99% {\n        opacity: 0;\n        z-index: 1;\n    }\n\n    50%,\n    100% {\n        opacity: 1;\n        z-index: 5;\n    }\n}\n\n@keyframes show {\n    0%,\n    49.99% {\n        opacity: 0;\n        z-index: 1;\n    }\n\n    50%,\n    100% {\n        opacity: 1;\n        z-index: 5;\n    }\n}\n\n.overlay-container {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n    transition: -webkit-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n    z-index: 100;\n}\n\n.container.right-panel-active .overlay-container {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n}\n\n.overlay {\n    background: #ff416c;\n    background: linear-gradient(to right, #ff4b2b, #ff416c);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 0 0;\n    color: #ffffff;\n    position: relative;\n    left: -100%;\n    height: 100%;\n    width: 200%;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    transition: -webkit-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n\n.container.right-panel-active .overlay {\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%);\n}\n\n.overlay-panel {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 0 40px;\n    text-align: center;\n    top: 0;\n    height: 100%;\n    width: 50%;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    transition: -webkit-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n\n.overlay-left {\n    -webkit-transform: translateX(-20%);\n            transform: translateX(-20%);\n}\n\n.container.right-panel-active .overlay-left {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n\n.overlay-right {\n    right: 0;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n\n.container.right-panel-active .overlay-right {\n    -webkit-transform: translateX(20%);\n            transform: translateX(20%);\n}\n\n.nots{\n  clear: both;\n  padding-top: 20px;\n  text-align: center;\n}\n\n.notss{\n  border-radius: 4px;\n  color: rgb(89, 242, 0.5);\n}\n\n.nots input{\n  width: 30%;\n  margin: auto;\n }\n\nbody{\n  background-color: rgba(245, 0.2, 0.156, 0.5);\n  height: 100%;\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QiwwQ0FBa0M7SUFBbEMsa0NBQWtDO0lBQWxDLGtFQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDRFQUE0RTtJQUM1RSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1o7O21CQUVlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksT0FBTztJQUNQLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsVUFBVTtJQUNWLDRCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTs7UUFFSSxVQUFVO1FBQ1YsVUFBVTtJQUNkOztJQUVBOztRQUVJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7QUFDSjs7QUFaQTtJQUNJOztRQUVJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7O0lBRUE7O1FBRUksVUFBVTtRQUNWLFVBQVU7SUFDZDtBQUNKOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsOENBQXNDO0lBQXRDLHNDQUFzQztJQUF0QywwRUFBc0M7SUFDdEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFFbkIsdURBQXVEO0lBQ3ZELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qiw4Q0FBc0M7SUFBdEMsc0NBQXNDO0lBQXRDLDBFQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qiw4Q0FBc0M7SUFBdEMsc0NBQXNDO0lBQXRDLDBFQUFzQztBQUMxQzs7QUFFQTtJQUNJLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGdDQUF3QjtZQUF4Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBtYXJnaW46IDIwcHggMCAzMHB4O1xufVxuXG5zcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbmEge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY0YjJiO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjRiMmI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEycHggNDVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b24uZ2hvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbn1cblxuZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc29jaWFsLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5zb2NpYWwtY29udGFpbmVyIGEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG4uY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogNzY4cHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDQ4MHB4O1xuICAgIC8qIG1heC1oZWlnaHQ6IDEwMCU7ICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8qIG1hcmdpbi1yaWdodDogIDE5MHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gICAgcGFkZGluZzogMWVtOyAqL1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbn1cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zaWduLWluLWNvbnRhaW5lciB7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5zaWduLXVwLWNvbnRhaW5lciB7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24taW4tY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLXVwLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogNTtcbiAgICBhbmltYXRpb246IHNob3cgMC42cztcbn1cblxuQGtleWZyYW1lcyBzaG93IHtcbiAgICAwJSxcbiAgICA0OS45OSUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIDUwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICB9XG59XG4ub3ZlcmxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY0MTZjO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0YjJiLCAjZmY0MTZjKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjRiMmIsICNmZjQxNmMpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuLm92ZXJsYXktcGFuZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LWxlZnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktbGVmdCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4ub3ZlcmxheS1yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yaWdodCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG59XG4ubm90c3tcbiAgY2xlYXI6IGJvdGg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubm90c3N7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHJnYig4OSwgMjQyLCAwLjUpO1xufVxuLm5vdHMgaW5wdXR7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogYXV0bztcbiB9XG5ib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMC4yLCAwLjE1NiwgMC41KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">\n    <!-- <link rel=\"stylesheet\" href=\"a.css\"> -->\n  </head>\n  <body>\n    <div class=\"container\" id=\"container\">\n        <div class=\"form-container sign-up-container\">\n            <!-- Sign Up form code goes here -->\n    <form #regForm=\"ngForm\">\n       <h1>Create Account</h1>\n       <div class=\"social-container\">\n           <a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n           <a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n           <a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n       </div>\n       <span>or use your email for registration</span>\n       <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"regDetails.username\" required  name=\"username\" />\n       <input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"regDetails.email\" required name=\"email\" />\n       <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"regDetails.password\" required name=\"password\" />\n       <button (click)=\"registers()\">Sign Up</button>\n   </form>\n        </div>\n        <div class=\"form-container sign-in-container\">\n            <!-- Sign In form code goes here -->\n        <form #logForm=\"ngForm\">\n        <h1>Sign in</h1>\n        <div class=\"social-container\">\n            <a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n            <a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n            <a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n        </div>\n        <span>or use your account</span>\n        <input type=\"text\" placeholder=\"username\" [(ngModel)]=\"logDetails.username\" required name=\"username\" />\n        <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"logDetails.password\" required name=\"login\"/>\n        <a href=\"#\">Forgot your password?</a>\n        <button (click)=\"logsIn()\">Sign In</button>\n    </form>\n        </div>\n        <div class=\"overlay-container\">\n            <!-- The overlay code goes here -->\n            <div class=\"overlay\">\n        <div class=\"overlay-panel overlay-left\">\n            <h1>Welcome Back!</h1>\n            <p>\n                To continue please login.\n            </p>\n            <button class=\"ghost\" id=\"signIn\">Sign In</button>\n        </div>\n        <div class=\"overlay-panel overlay-right\">\n            <h1>Hello, u a Doctor</h1>\n            <p>Enter your  details and start journey with us</p>\n            <button class=\"ghost\" id=\"signUp\">Sign Up</button>\n        </div>\n    </div>\n        </div>\n    </div>\n    <div class=\"nots\">\n      <div class=\"form-group\">\n        <input type=\"email\" name=\"\" value=\"\" placeholder=\"enter your email here...\"><button  class=\"notss\" type=\"button\" name=\"button\">Signup</button>\n      </div>\n      <div class=\"social-container\">\n        <a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n        <a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n        <a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n      </div>\n      <div class=\"footer\">\n        <p> manulangat productions</p>\n        <p>0740415950</p>\n      </div>\n      </div>\n  </body>\n</html>\n"

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

module.exports = "body{\n  margin: 0;\n  padding: 0;\n  background: url(/assets/img/pic1.jpg);\n  background-size: cover;\n  background-position: center;\n  font-family: sans-serif;\n}\n.registration{\n  /* margin-top: 27px; */\n  width: 420px;\n  height: 420px;\n  background: #000;\n  color: #fff;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  box-sizing: border-box;\n  padding: 70px 30px;\n}\n.avatar{\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  position: absolute;\n  top: 50px;\n  left: calc(50% -50px);\n}\nh1{\n  margin: 0;\n  padding: 0 0 20px;\n  text-align: center;\n  font-size: 22px;\n}\n.registration p {\n  margin: 0;\n  padding: 0;\n  font-weight: bold;\n}\n.registration input{\n  width: 100%;\n  margin-bottom: 20px;\n}\n.registration input[type=\"text\"],input[type=\"number\"]{\n  border: none;\n  border-bottom: 1px solid #fff;\n  background: transparent;\n  outline: none;\n  height: 40px;\n  color: #fff;\n  font-size: 16px;\n}\n.registration input[type=\"submit\"]{\n  border: none;\n  outline: none;\n  height: 40px;\n  background: #fb2525;\n  color: #fff;\n  font-size: 18px;\n  border-radius: 20px;\n}\n.registration input[type=\"submit\"]:hover{\n  cursor: pointer;\n  background: #ffc107;\n  color: #000;\n}\n/* .form-group{\n  height: 100%;\n  width: 768px;\n  margin: auto;\n  margin-top: 50px;\n  text-align: center;\n  margin: 3px solid red;\n  background-color: rgba(150, 190, 249, 0.5);\n}\n.form-group input{\n  /* padding-top: 40px; */\n/* margin-top: 30px;\n  width: 60%;\n  border-radius: 4px;\n  padding: 12px 20px;\n  margin: 16px 0;\n  box-sizing: border-box;\n} */\n/* .form-group input:focus{\n  background-color: lightblue;\n  border: 3px solid #555;\n}\n.form-group button{\n  border-radius: 12px;\n  background-color: #f44336;\n  color: white;\n  text-align: center;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1yZWdpc3Rlci9wYXRpZW50LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQix1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBOzs7Ozs7Ozs7O3lCQVV5QjtBQUN2Qjs7Ozs7O0dBTUM7QUFDSDs7Ozs7Ozs7O0dBU0ciLCJmaWxlIjoic3JjL2FwcC9wYXRpZW50LXJlZ2lzdGVyL3BhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3BpYzEuanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbi5yZWdpc3RyYXRpb257XG4gIC8qIG1hcmdpbi10b3A6IDI3cHg7ICovXG4gIHdpZHRoOiA0MjBweDtcbiAgaGVpZ2h0OiA0MjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNzBweCAzMHB4O1xufVxuLmF2YXRhcntcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtNTBweCk7XG59XG5oMXtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ucmVnaXN0cmF0aW9uIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlZ2lzdHJhdGlvbiBpbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucmVnaXN0cmF0aW9uIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJudW1iZXJcIl17XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucmVnaXN0cmF0aW9uIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmIyNTI1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLnJlZ2lzdHJhdGlvbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmMxMDc7XG4gIGNvbG9yOiAjMDAwO1xufVxuLyogLmZvcm0tZ3JvdXB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDc2OHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAzcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MCwgMTkwLCAyNDksIDAuNSk7XG59XG4uZm9ybS1ncm91cCBpbnB1dHtcbiAgLyogcGFkZGluZy10b3A6IDQwcHg7ICovXG4gIC8qIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDE2cHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn0gKi9cbi8qIC5mb3JtLWdyb3VwIGlucHV0OmZvY3Vze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM1NTU7XG59XG4uZm9ybS1ncm91cCBidXR0b257XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/patient-register/patient-register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/patient-register/patient-register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"registration\">\n    <img src=\"/assets/pic2.png\" alt=\"an image\" class=\"avatar\">\n    <h1>Add new patient</h1>\n    <div class=\"form-group\">\n      <form [formGroup]=\"yourForm\">\n        <p>Full Names</p>\n        <input type=\"text\" placeholder=\"Enter  name\" name=\"name\" formControlName=\"name\" /><br>\n        <p>Patients Age</p>\n        <input type=\"number\" placeholder=\"age ....\" name=\"age\" formControlName=\"age\" /><br>\n        <p>Patients Email</p>\n        <input type=\"email\" placeholder=\"enter email...\" name=\"email\" formControlName=\"email\" /><br>\n        <input type=\"file\" name=\"pic\" (change)=\"onFileSelected($event)\"><br>\n        <input type=\"submit\" (click)=\"createPat()\" value=\"Sign Up\">\n        <!-- <button (click)=\"createPat()\"> Add patient</button> -->\n      </form>\n    </div>\n  </div>\n</body>\n"

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