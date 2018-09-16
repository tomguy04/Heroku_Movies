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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movie-list/movie-list.component.ts");
/* harmony import */ var src_app_new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/new-movie/new-movie.component */ "./src/app/new-movie/new-movie.component.ts");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./review-list/review-list.component */ "./src/app/review-list/review-list.component.ts");
/* harmony import */ var _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-review/new-review.component */ "./src/app/new-review/new-review.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    {
        path: 'movies',
        children: [
            {
                path: 'new',
                pathMatch: 'full',
                component: src_app_new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_3__["NewMovieComponent"]
            },
            {
                path: '',
                component: _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__["MovieListComponent"]
            },
            {
                path: ':id',
                component: _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_4__["ReviewListComponent"]
            },
            {
                path: ':review/:id',
                component: _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_5__["NewReviewComponent"]
            }
        ],
        // canActivate: [AuthenticationGuard],
        runGuardsAndResolvers: 'always',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ".wrapper{\r\n    border: 2px solid black;\r\n    padding: 5px;\r\n    margin: 0px;\r\n}\r\n\r\n.title{\r\n    padding-left: 10px;\r\n    margin:0px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'wrapper'>\n    <div class = 'title'><h1>Squishy Tomatoes</h1></div>\n    <router-outlet></router-outlet>\n</div>\n \n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movie-list/movie-list.component.ts");
/* harmony import */ var _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-movie/new-movie.component */ "./src/app/new-movie/new-movie.component.ts");
/* harmony import */ var _object_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object.service */ "./src/app/object.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review-list/review-list.component */ "./src/app/review-list/review-list.component.ts");
/* harmony import */ var _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-review/new-review.component */ "./src/app/new-review/new-review.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







 // <-- Import FormsModule



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_4__["MovieListComponent"],
                _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_5__["NewMovieComponent"],
                _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_9__["ReviewListComponent"],
                _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_10__["NewReviewComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [_object_service__WEBPACK_IMPORTED_MODULE_6__["ObjectService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/movie-list/movie-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    border: 2px solid black;\r\n    margin: 5px;\r\n    padding: 10px;\r\n}\r\n\r\n.movielist{\r\n    vertical-align: top;\r\n    display: inline-block;\r\n}\r\n\r\n.jumbotron{\r\n    background-color: blue;\r\n    border: 5px solid black;\r\n    color: white;\r\n    \r\n}\r\n\r\n.table{\r\n    background-color: orange;\r\n    border: 5px solid;\r\n    color: black;\r\n}\r\n\r\nh1{\r\n    display: inline-block; \r\n    vertical-align: top;\r\n}\r\n\r\nbutton{\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/movie-list/movie-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\"> -->\n    <!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script> -->\n    <!-- <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\"></script> -->\n    \n    <!-- <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js\"></script> -->\n    <!-- <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script> -->\n    <!-- <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\" rel=\"stylesheet\"> -->\n\n    <!-- <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js\"> </script>\n    <script src=\"//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n    <script src=\"//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\"></script> -->\n\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n    \n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\" crossorigin=\"anonymous\"></script>\n    <link rel=\"stylesheet\" href=\"movie-list.component.css\">\n    <title>Document</title>\n</head>\n<body>\n\n\n<div class=\"container\">\n  <div class = 'jumbotron'>\n    <h1 *ngIf='movies[0]'>Movie List</h1>\n    <a [routerLink]=\"['/movies','new']\"><button type=\"button\" class=\"btn float-right\" >Add A new Movie</button></a>\n    <!-- <div class = 'add'><a [routerLink]=\"['/movies','new']\"><button>Add A new Movie</button></a></div> -->\n    <table class=\"table table-striped table-hover\">\n        <thead class = \"thead-medium\" >\n        <tr  *ngIf='movies[0]'>\n          <th>Movie Title</th>\n          <th>Available Actions</th>\n        </tr>\n      </thead>\n        <tr *ngFor='let movie of movies'>\n          <td><h3>{{movie?.title}}</h3></td>\n          <td>\n              <button type=\"button\" class=\"btn btn-info\" [routerLink]=\"['/movies',movie._id]\">Read Reviews</button> \n              <button type=\"button\" class=\"btn btn-primary\"[routerLink]=\"['/movies/review',movie._id]\">Write review</button>\n          </td>\n        </tr>\n      \n    </table>\n\n\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/movie-list/movie-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.ts ***!
  \****************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _object_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object.service */ "./src/app/object.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(_service) {
        this._service = _service;
        this.movies = [];
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('in movie-list read');
        this._service.getMovies().subscribe(function (movies) {
            _this.movies = movies,
                console.log('the movies in movie-list comp ', _this.movies);
        });
    };
    MovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/app/movie-list/movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [_object_service__WEBPACK_IMPORTED_MODULE_1__["ObjectService"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/movie.ts":
/*!**************************!*\
  !*** ./src/app/movie.ts ***!
  \**************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
        this.name = '';
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/new-movie/new-movie.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    border: 2px solid black;\r\n    margin: 5px;\r\n    padding: 10px;\r\n}    \r\n\r\n.submit {background-color: blue; color: white;}    \r\n\r\n.cancel {background-color: orange; color: white;}    \r\n\r\n.form-control{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}    \r\n\r\n.jumbotron{\r\n    \r\n    border: 5px solid black;\r\n    color: white;\r\n    background-color: orange;\r\n}    \r\n\r\n.form-group row{\r\n    padding: 0px;\r\n    margin :0px;\r\n   \r\n}    \r\n\r\n.col-sm-2 col-form-label{\r\n    padding: 0px;\r\n    margin :0px;\r\n}    \r\n\r\n.col-sm-10{\r\n    padding: 0px;\r\n    margin :0px;\r\n}    \r\n\r\n.form-control{\r\n    padding: 0px;\r\n    margin :0px;\r\n    \r\n}    \r\n\r\n.page-header{\r\n    background-color: blue;\r\n    color: black;\r\n}    \r\n\r\nbutton{\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/new-movie/new-movie.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf='registrationErrors.length'>\n  <ul class=\"alert alert-danger\">\n    <li *ngFor='let error of registrationErrors'>{{error}}</li>\n  </ul>\n</div> -->\n\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"new-movie.component.css\"> -->\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js\"> </script>\n    <script src=\"//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n    <script src=\"//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"movie-list.component.css\">\n\n    <title>Document</title>\n</head>\n<body>\n\n<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h3>Submit Your Movie and Your Review</h3>\n      <form name = 'user' (submit)=\"onSubmit(form)\" #form='ngForm'>\n        \n          <div class=\"form-group row\">\n              <label for=\"title\" class=\"col-sm-2 col-form-label\">Title : </label>\n              <div class=\"col-sm-10\">\n                  <input \n                  class=\"form-control\"\n                  type=\"text\"\n                  name=\"title\"\n                  required\n                  minlength=\"3\"\n                  [(ngModel)]=\"movie.title\"\n                  #title='ngModel'\n                  />\n              </div>\n          </div>\n          <div class = 'side'*ngIf='title.touched && title.invalid'>Movie must have a title, at least 3 characters</div><br>\n          \n          <div class=\"form-group row\">\n              <label for=\"name\" class=\"col-sm-2 col-form-label\">Your Name : </label>\n              <div class=\"col-sm-10\">\n              <input \n              type=\"text\"\n              name=\"name\"\n              required\n              minlength = \"3\"\n              [(ngModel)]=\"movie.name\"\n              #name='ngModel'\n              />\n            </div>\n          </div>\n          <div class = 'side'*ngIf='name.touched && name.invalid'>Your must provide your name, at least 3 characters</div><br>\n    \n          <div class=\"form-group row\">\n              <label for=\"stars\" class=\"col-sm-2 col-form-label\">Stars :</label>\n              <div class=\"col-sm-10\">\n              <select type = 'number' name=\"stars\" required [(ngModel)]=\"movie.stars\" #stars='ngModel' >\n              <option value=1>1</option>\n              <option value=2>2</option>\n              <option value=3>3</option>   \n              <option value=4>4</option> \n              <option value=5>5</option> \n            </select>\n          </div>\n        </div>\n        <div class = 'side'*ngIf='stars.touched && stars.invalid'>Stars are required</div><br>\n\n        <div class=\"form-group row\">\n            <label for=\"review\" class=\"col-sm-2 col-form-label\"> Your Review :</label>\n            <div class=\"col-sm-10\">\n            <input \n            type=\"string\"\n            name=\"review\"\n            minlength = \"3\"\n            required\n            [(ngModel)]=\"movie.review\"\n            #review='ngModel'\n            />\n           </div>\n         </div>\n\n          <div class = 'side'*ngIf='review.touched && review.invalid'>Review is Required, at least 3 characters</div><br>\n    \n         \n        <!-- <button class=\"submit\" type=\"submit\"  [disabled]=\"form.invalid\">Submit</button> -->\n        <button type=\"button\" class=\"btn btn-primary\" type ='submit' disabled  [disabled]=\"form.invalid\" >Submit</button>\n        <button type=\"button\" class=\"btn btn-info\" (click)='onCancel()'>Cancel</button>\n        \n      </form> \n    \n      </div>\n      </div>\n      <router-outlet></router-outlet>\n  </body>\n</html>    \n\n\n"

/***/ }),

/***/ "./src/app/new-movie/new-movie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.ts ***!
  \**************************************************/
/*! exports provided: NewMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMovieComponent", function() { return NewMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie */ "./src/app/movie.ts");
/* harmony import */ var _object_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../object.service */ "./src/app/object.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthService } from '../../auth.service';


var NewMovieComponent = /** @class */ (function () {
    function NewMovieComponent(
    // private _auth: AuthService, 
    _router, _service) {
        this._router = _router;
        this._service = _service;
        this.movie = new _movie__WEBPACK_IMPORTED_MODULE_2__["Movie"]();
        this.registrationErrors = [];
    }
    NewMovieComponent.prototype.ngOnInit = function () {
    };
    NewMovieComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        event.preventDefault();
        var value = formData.value, valid = formData.valid;
        console.log('submitted', this.movie);
        this._service.createMovie(this.movie).subscribe(function (movie) {
            console.log('created movie in new-movie afer controller', movie);
            // now create the review
            _this._service.createReview(movie).subscribe(function (review) {
                console.log('create review in register', review);
                formData.reset();
            });
            _this.movie = new _movie__WEBPACK_IMPORTED_MODULE_2__["Movie"]();
            _this._router.navigateByUrl("/");
        });
    };
    NewMovieComponent.prototype.onCancel = function () {
        this._router.navigateByUrl("/");
    };
    NewMovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-movie',
            template: __webpack_require__(/*! ./new-movie.component.html */ "./src/app/new-movie/new-movie.component.html"),
            styles: [__webpack_require__(/*! ./new-movie.component.css */ "./src/app/new-movie/new-movie.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _object_service__WEBPACK_IMPORTED_MODULE_3__["ObjectService"]])
    ], NewMovieComponent);
    return NewMovieComponent;
}());



/***/ }),

/***/ "./src/app/new-review/new-review.component.css":
/*!*****************************************************!*\
  !*** ./src/app/new-review/new-review.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    border: 2px solid black;\r\n    margin: 5px;\r\n    padding: 10px;\r\n}\r\n.submit {background-color: blue; color: white;}\r\n.cancel {background-color: orange; color: white;}\r\n.jumbotron {\r\n    border: 5px solid black;\r\n    background-color : orange;\r\n    color : white;\r\n    }\r\nbutton {\r\n    margin: 5px;\r\n}"

/***/ }),

/***/ "./src/app/new-review/new-review.component.html":
/*!******************************************************!*\
  !*** ./src/app/new-review/new-review.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"register.component.css\">\n    <title>Document</title>\n</head>\n<body>\n    <div class=\"container\">\n        <span class=\"border\">\n        <div class=\"jumbotron\">\n            <h3>Add a review for {{myMovie?.title}}</h3>\n            <form name = 'review' (submit)=\"onSubmit(form)\" #form='ngForm'>\n            \n                <div class=\"form-group row\">\n                    <label for=\"name\" class=\"col-sm-2 col-form-label\">Your name : </label>\n                    <div class=\"col-sm-10\">\n                        <input \n                        type=\"text\"\n                        name=\"name\"\n                        required\n                        minlength=\"3\"\n                        [(ngModel)]=\"movie.name\"\n                        #name='ngModel'\n                        />\n                    </div>\n                </div>\n                \n                <div class = 'side'*ngIf='name.touched && name.invalid'>Your must provide your name, at least 3 characters</div><br>\n                \n\n                <div class=\"form-group row\">\n                    <label for=\"name\" class=\"col-sm-2 col-form-label\">Stars : </label>\n                    <div class=\"col-sm-10\">\n                        <select type = 'number' value=1 name=\"stars\" required [(ngModel)]=\"movie.stars\" #stars='ngModel' >\n                            <option value=1>1</option>\n                            <option value=2>2</option>\n                            <option value=3>3</option>   \n                            <option value=4>4</option> \n                            <option value=5>5</option> \n                        </select>\n                    </div>\n                </div>\n                <div class = 'side'*ngIf='stars.touched && stars.invalid'>Stars are required</div><br>\n            \n\n                <div class=\"form-group row\">\n                    <label for=\"name\" class=\"col-sm-2 col-form-label\">Review : </label>\n                    <div class=\"col-sm-10\">\n                        <input \n                        type=\"string\"\n                        name=\"review\"\n                        minlength=\"3\"\n                        required\n                        [(ngModel)]=\"movie.review\"\n                        #review='ngModel'\n                        />\n                    </div>\n                </div>\n\n                <div class = 'side'*ngIf='review.touched && review.invalid'>Review is required, at least 3 characters</div><br>\n            \n                <button type=\"button\" class=\"btn btn-primary\" type ='submit' disabled  [disabled]=\"form.invalid\" >Submit</button>\n                <button type=\"button\" class=\"btn btn-info\" (click)='onCancel()'>Cancel</button>\n                \n            </form> \n    \n      </div>\n    </span>\n      </div>\n      <router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/new-review/new-review.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-review/new-review.component.ts ***!
  \****************************************************/
/*! exports provided: NewReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReviewComponent", function() { return NewReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _object_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object.service */ "./src/app/object.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie */ "./src/app/movie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewReviewComponent = /** @class */ (function () {
    function NewReviewComponent(_service, _activatedRoute, _router) {
        this._service = _service;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.movie = new _movie__WEBPACK_IMPORTED_MODULE_3__["Movie"]();
    }
    NewReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.movieId = (params['id']);
            console.log('create review component recd movieId ', _this.movieId);
        });
        //to get the movie name to display
        this._service.getMovie(this.movieId).subscribe(function (movie) {
            console.log('movie came back to review-list', movie);
            _this.myMovie = movie;
        });
    };
    NewReviewComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        event.preventDefault();
        var value = formData.value, valid = formData.valid;
        console.log('submitted', this.movie);
        this.movie._id = this.movieId;
        console.log('the movie with id and review data attached ', this.movie._id);
        //now create the review
        this._service.createReview(this.movie).subscribe(function (review) {
            console.log('create review in register', review);
            formData.reset();
            _this._router.navigateByUrl("/movies/" + _this.movieId);
        });
        formData.reset();
    };
    NewReviewComponent.prototype.onCancel = function () {
        this._router.navigateByUrl("/");
    };
    NewReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-review',
            template: __webpack_require__(/*! ./new-review.component.html */ "./src/app/new-review/new-review.component.html"),
            styles: [__webpack_require__(/*! ./new-review.component.css */ "./src/app/new-review/new-review.component.css")]
        }),
        __metadata("design:paramtypes", [_object_service__WEBPACK_IMPORTED_MODULE_1__["ObjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewReviewComponent);
    return NewReviewComponent;
}());



/***/ }),

/***/ "./src/app/object.service.ts":
/*!***********************************!*\
  !*** ./src/app/object.service.ts ***!
  \***********************************/
/*! exports provided: ObjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectService", function() { return ObjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjectService = /** @class */ (function () {
    function ObjectService(_http) {
        this._http = _http;
    }
    //Get a list of reviews
    ObjectService.prototype.getReviews = function (id) {
        console.log('in get reviews service');
        return this._http.get("api/reviews/" + id);
    };
    //Delete review
    ObjectService.prototype.deleteReview = function (id) {
        console.log('in delete review service');
        return this._http.delete("api/review/" + id);
    };
    //Delete movie
    ObjectService.prototype.deleteMovie = function (id) {
        console.log('in delete service');
        return this._http.delete("api/movie/" + id);
    };
    //Get a movie
    ObjectService.prototype.getMovie = function (movieId) {
        console.log('service get a Movie');
        return this._http.get("api/movie/" + movieId);
    };
    //Create Review
    ObjectService.prototype.createReview = function (review) {
        console.log('service create review', review);
        return this._http.post('/api/review', review);
    };
    //Create Movie
    ObjectService.prototype.createMovie = function (movie) {
        console.log('service create movie', movie);
        return this._http.post('/api/movie', movie);
    };
    //get all the movies
    ObjectService.prototype.getMovies = function () {
        console.log('service getMovies');
        return this._http.get('/api/movies');
    };
    ObjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ObjectService);
    return ObjectService;
}());



/***/ }),

/***/ "./src/app/review-list/review-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/review-list/review-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    border: 2px solid black;\r\n    margin: 5px;\r\n    padding: 10px;\r\n}\r\n.title{\r\n    padding-left: 10px;\r\n    margin:0px;\r\n}\r\n.button {background-color: red; color: white;}\r\n.jumbotron{\r\n    background-color: blue;\r\n    border: 5px solid;\r\n    color: white;\r\n    \r\n}\r\n.table{\r\n    background-color: orange;\r\n    border: 5px solid;\r\n    color: black;\r\n}\r\nh1{\r\n    display: inline-block; \r\n    vertical-align: top;\r\n}\r\nh3{\r\n    display: inline-block; \r\n    vertical-align: top;\r\n}\r\n"

/***/ }),

/***/ "./src/app/review-list/review-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/review-list/review-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"style.css\"> -->\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js\"> </script>\n    <script src=\"//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n    <script src=\"//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"movie-list.component.css\">\n\n    <title>Document</title>\n</head>\n<body>\n\n\n<div class=\"container\">\n  <div class = 'jumbotron'>\n\n      <h3 *ngIf='myMovie'>Reviews for {{myMovie?.title}}</h3>\n      <div class=\"btn-group  float-right\">\n          <button type=\"button\" class=\"btn btn-default \"><span class=\"glyphicon glyphicon-home\"></span><a [routerLink]=\"['/']\">Home</a>\n          </button>  \n          <button type=\"button\" class=\"btn btn-danger \" (click)='onDelete(myMovie?._id)'>Delete Movie</button>\n        </div>\n\n      <table class=\"table table-striped table-hover\">\n          <thead class = \"thead-medium\" >\n            <tr>\n              <th>Reviewer</th>\n              <th>Stars</th>\n              <th>Reviews</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tr *ngFor='let review of myReviews'>\n            <td>{{review.name}}</td>\n            <td>{{review.stars}}</td>\n            <td>{{review.review}}</td>\n            <td><button type=\"button\" class=\"btn btn-danger \" (click)='onDeleteReview(review._id)'>Delete</button></td>\n          </tr>  \n\n            <!-- <tr *ngFor='let review of myMovie?.reviews'>\n              <td>{{review.name}}</td>\n              <td>{{review.stars}}</td>\n              <td>{{review.review}}</td>\n              <td><button type=\"button\" class=\"btn btn-danger \" (click)='onDeleteReview(review._id)'>Delete Review</button></td> -->\n            <!-- </tr> -->\n        </table>\n    </div>\n  </div>\n</body>\n</html>\n\n  \n"

/***/ }),

/***/ "./src/app/review-list/review-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/review-list/review-list.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListComponent", function() { return ReviewListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _object_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object.service */ "./src/app/object.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewListComponent = /** @class */ (function () {
    function ReviewListComponent(_service, _activatedRoute, _router) {
        this._service = _service;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.movies = [];
        this.myReviews = [];
        // override the route reuse strategy
        // this._router.routeReuseStrategy.shouldReuseRoute = function(){
        //    return false;
        //   }
        //   this._router.events.subscribe((evt) => {
        //     if (evt instanceof NavigationEnd) {
        //        // trick the Router into believing it's last link wasn't previously loaded
        //        this._router.navigated = false;
        //        // if you need to scroll back to top, here is the right place
        //        window.scrollTo(0, 0);
        //     }
        // });
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.movieId = (params['id']);
            console.log('reviewlist component recd movieId ', _this.movieId);
        });
        this._service.getMovie(this.movieId).subscribe(function (movie) {
            console.log('movie came back to review-list', movie);
            _this.myMovie = movie;
            console.log('this.myMovie ', _this.myMovie);
        });
        this._service.getReviews(this.movieId).subscribe(function (reviews) {
            console.log('reviews came back to review-list', reviews);
            _this.myReviews = reviews;
            console.log('this.myReviews', _this.myReviews);
        });
    };
    //   this._service.getMovies().subscribe(
    //     movies => {
    //       this.movies = movies,
    //       console.log('the bikes in read comp ', this.movies)
    //     }
    //   );
    // }
    ReviewListComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log('delete movie', id);
        this._service.deleteMovie(id)
            .subscribe(function (returnedMovie) {
            console.log('Returned Movie to delete ', returnedMovie);
            _this.movies = _this.movies.filter(function (p) { return p._id !== returnedMovie._id; });
            console.log(_this.movies);
            _this._router.navigateByUrl("/");
        });
    };
    ReviewListComponent.prototype.onDeleteReview = function (id) {
        var _this = this;
        console.log('delete review', id);
        this._service.deleteReview(id)
            .subscribe(function (returnedReview) {
            console.log('Returned Review to delete ', returnedReview);
            _this.myReviews = _this.myReviews.filter(function (p) { return p._id !== returnedReview._id; });
            //  console.log(this.movies);
            // this._router.navigateByUrl(`/movies/${this.movieId}`)
        });
    };
    ReviewListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-list',
            template: __webpack_require__(/*! ./review-list.component.html */ "./src/app/review-list/review-list.component.html"),
            styles: [__webpack_require__(/*! ./review-list.component.css */ "./src/app/review-list/review-list.component.css")]
        }),
        __metadata("design:paramtypes", [_object_service__WEBPACK_IMPORTED_MODULE_1__["ObjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReviewListComponent);
    return ReviewListComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\glenr\Documents\Angular_Projects\Movies-Heroku\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map