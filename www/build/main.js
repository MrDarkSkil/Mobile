webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.home = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.account = __WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/prost_m/EIP/Mobile/src/pages/main/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="home" tabTitle="Miroirs" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="account" tabTitle="Compte" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/prost_m/EIP/Mobile/src/pages/main/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MirrorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service_api_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MirrorProvider = /** @class */ (function () {
    function MirrorProvider(api) {
        this.api = api;
    }
    MirrorProvider.prototype.getMirrors = function (token) {
        return this.api.get(this.api.getApiUrl() + '/api/mirrors', token);
    };
    MirrorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service_api_service__["a" /* ApiServiceProvider */]])
    ], MirrorProvider);
    return MirrorProvider;
}());

//# sourceMappingURL=mirror.service.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lost_password_lost_password__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.registerPage = __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_3__main_tabs_tabs__["a" /* TabsPage */];
        this.lostPasswordPage = __WEBPACK_IMPORTED_MODULE_5__lost_password_lost_password__["a" /* LostPasswordPage */];
        this.email = null;
        this.password = null;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Connexion en cours...'
        });
        loading.present();
        this.auth.login(this.email, this.password).then(function (data) {
            loading.dismiss();
            _this.navCtrl.setRoot(_this.tabsPage);
        }).catch(function (data) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Erreur',
                subTitle: data,
                buttons: [{ text: 'Ok' }]
            });
            alert.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/prost_m/EIP/Mobile/src/pages/auth/login/login.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content class="login" padding no-bounce>\n    <div class="login-header" text-center>\n        <ion-img width="80" height="80" [cache]="true" src="/assets/imgs/elios.png"></ion-img>\n    </div>\n\n    <ion-list class="login-form" padding>\n        <h3 padding-left padding-top>Se connecter</h3>\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Mot de passe</ion-label>\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n\n        <ion-item class="login-form-buttons" no-lines>\n            <button [navPush]="registerPage" default ion-button item-right color="secondary" outline>S\'inscrire</button>\n            <button default ion-button item-right color="primary" (click)="login()">Envoyer</button>\n        </ion-item>\n\n        <div text-right padding-top padding-right padding-left>\n            <a [navPush]="lostPasswordPage" text-right>Mot de passe oublié ?</a>\n        </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/prost_m/EIP/Mobile/src/pages/auth/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_mirror_add_mirror__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mirror_mirror_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mirror_mirror_unlink_mirror_unlink_service__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, mirrorProvider, auth, mirrorUnlinkProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.mirrorProvider = mirrorProvider;
        this.auth = auth;
        this.mirrorUnlinkProvider = mirrorUnlinkProvider;
        this.loadingCtrl = loadingCtrl;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.refresh();
    };
    HomePage.prototype.navigate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_mirror_add_mirror__["a" /* AddMirrorPage */]);
    };
    HomePage.prototype.refresh = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.getUserToken().then(function (result) {
                var token = result;
                _this.mirrorProvider.getMirrors(token).then(function (mirrors) {
                    _this.mirrors = mirrors;
                    resolve('ok');
                });
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    HomePage.prototype.deleteMirror = function (mirror, id) {
        var _this = this;
        mirror.close();
        var loading = this.loadingCtrl.create({
            content: 'Chargement...'
        });
        loading.present();
        this.auth.getUserToken().then(function (result) {
            var token = result;
            _this.mirrorUnlinkProvider.unlinkMirror(id, token).then(function (result) {
                console.log('done');
                _this.refresh().then(function () {
                    loading.dismiss();
                });
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/prost_m/EIP/Mobile/src/pages/main/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mes miroirs</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="navigate()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list *ngIf="mirrors !== undefined">\n\n    <ion-item-sliding *ngFor="let mirror of mirrors" #slidingItem>\n      <ion-item>\n        <ion-avatar item-start>\n          <img class="img-os" src="">\n        </ion-avatar>\n        <div class="state" [style.background]="\'#27c295\'"></div>\n        <h2>{{ mirror.name }}</h2>\n        <p>{{ mirror.ip }}</p>\n        <ion-note item-end>\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-note>\n      </ion-item>\n\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteMirror(slidingItem, mirror.id)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/prost_m/EIP/Mobile/src/pages/main/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_mirror_mirror_service__["a" /* MirrorProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_mirror_mirror_unlink_mirror_unlink_service__["a" /* MirrorUnlinkProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMirrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_mirror_qr_code_add_mirror_qr_code__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mirror_mirror_link_mirror_link_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMirrorPage = /** @class */ (function () {
    function AddMirrorPage(navCtrl, toastCtrl, mirrorService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.mirrorService = mirrorService;
        this.loadingCtrl = loadingCtrl;
        this.qrcodePage = __WEBPACK_IMPORTED_MODULE_2__add_mirror_qr_code_add_mirror_qr_code__["a" /* AddMirrorQrCodePage */];
    }
    AddMirrorPage.prototype.linkMirror = function () {
        var _this = this;
        if (this.mirrorId) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            this.mirrorService.mirrorLink(this.mirrorId).then(function (result) {
                loading_1.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Votre miroir à été lié à votre compte!',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            })
                .catch(function (error) {
                loading_1.dismiss();
                console.log(error);
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Erreur: Veuillez remplir l\'id du miroir',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    AddMirrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-mirror',template:/*ion-inline-start:"/home/prost_m/EIP/Mobile/src/pages/main/add-mirror/add-mirror.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ajouter un miroir</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n\n  <p>Pour lier un nouveau miroir à votre compte, scannez son QRCode</p>\n\n  <button ion-button [navPush]="qrcodePage">Scanner QRCode</button>\n\n  <div class="mirror-input">\n    <p>Si vous n\'avez pas la possibilité de scanner le QRCode, veuillez rentrer l\'id du miroir directement:</p>\n\n    <ion-item>\n      <ion-label color="primary" stacked>ID du miroir</ion-label>\n      <ion-input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" [(ngModel)]="mirrorId"></ion-input>\n    </ion-item>\n\n    <ion-item no-border no-lines>\n      <button ion-button (click)="linkMirror()">Envoyer</button>\n    </ion-item>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/prost_m/EIP/Mobile/src/pages/main/add-mirror/add-mirror.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_mirror_mirror_link_mirror_link_service__["a" /* MirrorLinkProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AddMirrorPage);
    return AddMirrorPage;
}());

//# sourceMappingURL=add-mirror.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMirrorQrCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_qr_scanner__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mirror_mirror_link_mirror_link_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMirrorQrCodePage = /** @class */ (function () {
    function AddMirrorQrCodePage(qrScanner, navCtrl, mirrorService) {
        this.qrScanner = qrScanner;
        this.navCtrl = navCtrl;
        this.mirrorService = mirrorService;
    }
    AddMirrorQrCodePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.showCamera();
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                console.log('Camera Permission Given');
                _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('something has been scanned', text);
                    _this.mirrorService.mirrorLink(text).then(function (result) {
                        console.log('mirror linked');
                    })
                        .then(function (error) {
                        console.log('An error occurred', error);
                    });
                    _this.qrScanner.hide();
                    _this.scanSub.unsubscribe();
                    _this.hideCamera();
                    _this.navCtrl.pop();
                });
                _this.qrScanner.show();
            }
            else if (status.denied) {
                console.log('Camera permission denied');
            }
            else {
                console.log('Permission denied for this runtime.');
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    AddMirrorQrCodePage.prototype.ionViewWillLeave = function () {
        this.hideCamera();
    };
    AddMirrorQrCodePage.prototype.showCamera = function () {
        window.document.querySelector('ion-app').classList.add('cameraView');
    };
    AddMirrorQrCodePage.prototype.hideCamera = function () {
        window.document.querySelector('ion-app').classList.remove('cameraView');
    };
    AddMirrorQrCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-mirror-qr-code',template:/*ion-inline-start:"/home/prost_m/EIP/Mobile/src/pages/main/add-mirror/add-mirror-qr-code/add-mirror-qr-code.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>addMirrorQRCode</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/home/prost_m/EIP/Mobile/src/pages/main/add-mirror/add-mirror-qr-code/add-mirror-qr-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_qr_scanner__["a" /* QRScanner */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_mirror_mirror_link_mirror_link_service__["a" /* MirrorLinkProvider */]])
    ], AddMirrorQrCodePage);
    return AddMirrorQrCodePage;
}());

//# sourceMappingURL=add-mirror-qr-code.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetService = /** @class */ (function () {
    function GetService(http) {
        this.http = http;
    }
    GetService.prototype.submit = function (url, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(url, {
                headers: token ?
                    {
                        'Authorization': 'Bearer ' + token
                    } : {}
            }).subscribe(function (data) {
                resolve(data);
            }, function (result) {
                reject(JSON.stringify(result));
            });
        });
    };
    GetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GetService);
    return GetService;
}());

//# sourceMappingURL=get-service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.submit = function (url, token, body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(url, body, {
                headers: token ?
                    {
                        'Authorization': 'Bearer ' + token
                    } : {}
            }).subscribe(function (data) {
                resolve(data);
            }, function (result) {
                console.log(result);
                reject(JSON.stringify(result));
            });
        });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());

//# sourceMappingURL=post-service.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service_api_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(api, storage, loadingCtrl) {
        this.api = api;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
    }
    AuthServiceProvider.prototype.getUserToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('access_token').then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(null);
            });
        });
    };
    AuthServiceProvider.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.refreshUserToken(username, password)
                .then(function (data) {
                _this.storage.set('access_token', data.access_token);
                resolve(data);
            })
                .catch(function (data) {
                reject(data);
            });
        });
    };
    AuthServiceProvider.prototype.refreshUserToken = function (username, password) {
        if (username && password) {
            return this.api.post(this.api.getApiUrl() + '/oauth/token', null, {
                'grant_type': 'password',
                'client_id': '1',
                'client_secret': 'Rp52CEoYWjiIA0kRTTGspdbjee3tQxSaNCVn7J87',
                'username': username,
                'password': password
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                reject('L\'email ou le mot de passe ne peuvent être vides');
            });
        }
    };
    AuthServiceProvider.prototype.register = function (email, password, name) {
        if (email && password && password.length >= 6) {
            return this.api.post(this.api.getApiUrl() + '/api/register', null, {
                'name': name ? name : 'default',
                'email': email,
                'password': password,
                'password_confirmation': password
            });
        }
        else if (!email || !password) {
            return new Promise(function (resolve, reject) {
                reject('L\'email ou le mot de passe ne peuvent être vides');
            });
        }
        else if (password.length < 6) {
            return new Promise(function (resolve, reject) {
                reject('Le mot de passe doit faire au moins 6 caractères');
            });
        }
    };
    AuthServiceProvider.prototype.lostPassword = function (email) {
        if (email) {
            return this.api.post(this.api.getApiUrl() + '/api/password/email', null, {
                'email': email,
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                reject('Le champ d\'email est vide, veuillez le remplir');
            });
        }
    };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.remove('access_token').then(function (data) {
                resolve(data);
            }).catch(function (data) {
                reject(data);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MirrorUnlinkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service_api_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MirrorUnlinkProvider = /** @class */ (function () {
    function MirrorUnlinkProvider(api) {
        this.api = api;
    }
    MirrorUnlinkProvider.prototype.unlinkMirror = function (id, token) {
        return this.api.post(this.api.getApiUrl() + '/api/mirrors/' + id + '/unlink', token);
    };
    MirrorUnlinkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service_api_service__["a" /* ApiServiceProvider */]])
    ], MirrorUnlinkProvider);
    return MirrorUnlinkProvider;
}());

//# sourceMappingURL=mirror-unlink.service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams, loadingCtrl, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.loginPage = __WEBPACK_IMPORTED_MODULE_2__auth_login_login__["a" /* LoginPage */];
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        //
    };
    AccountPage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Déconnexion',
            message: 'Êtes vous sûr de vouloir vous déconnecter ?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                },
                {
                    text: 'Confirmer',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Déconnexion ...'
                        });
                        loading.present();
                        _this.auth.logout().then(function () {
                            /*this.tabBarElement.style.display = 'none';*/
                            loading.dismiss();
                            _this.navCtrl.setRoot(_this.loginPage);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/home/prost_m/EIP/Mobile/src/pages/main/account/account.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mon compte</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/prost_m/EIP/Mobile/src/pages/main/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthServiceProvider */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, loadingCtrl, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.email = null;
        this.password = null;
        this.password_confirmation = null;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        //
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Inscription en cours...'
        });
        loading.present();
        if (this.password != this.password_confirmation) {
            loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Erreur',
                subTitle: 'Les mots de passes ne correspondent pas entre eux',
                buttons: [{ text: 'Ok' }]
            });
            alert_1.present();
        }
        else {
            this.auth.register(this.email, this.password).then(function (data) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Succès',
                    subTitle: 'Vous êtes inscrit avec succès !',
                    buttons: [{
                            text: 'Yeeeees',
                            handler: function () {
                                _this.navCtrl.pop();
                            }
                        }]
                });
                alert.present();
            }).catch(function (error) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Erreur',
                    subTitle: error,
                    buttons: [{ text: 'Ok' }]
                });
                alert.present();
            });
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/prost_m/EIP/Mobile/src/pages/auth/register/register.html"*/'<ion-header>\n\n\n</ion-header>\n\n\n<ion-content class="register" padding no-bounce>\n  <div class="register-header" text-center>\n    <ion-img width="80" height="80" [cache]="true" src="/assets/imgs/elios.png"></ion-img>\n  </div>\n\n  <ion-list class="register-form" padding>\n    <h3 padding-left padding-top>S\'inscrire</h3>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Mot de passe</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Répétez le mot de passe</ion-label>\n      <ion-input type="password" [(ngModel)]="password_confirmation"></ion-input>\n    </ion-item>\n\n    <ion-item class="register-form-buttons" no-lines>\n      <button navPop default ion-button item-left color="secondary" outline><ion-icon name="arrow-dropleft"></ion-icon></button>\n      <button default ion-button item-right color="primary" (click)="register()">Envoyer</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/prost_m/EIP/Mobile/src/pages/auth/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LostPasswordPage = /** @class */ (function () {
    function LostPasswordPage(navCtrl, navParams, loadingCtrl, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.email = null;
    }
    LostPasswordPage.prototype.ionViewDidLoad = function () {
        //
    };
    LostPasswordPage.prototype.lostPassword = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Envoi en cours...'
        });
        loading.present();
        this.auth.lostPassword(this.email).then(function (data) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Succès',
                subTitle: 'Vous allez recevoir un email pour réinitialiser votre mot de passe !',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            _this.navCtrl.pop();
                        }
                    }]
            });
            alert.present();
        }).catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Erreur',
                subTitle: error,
                buttons: [{ text: 'Ok' }]
            });
            alert.present();
        });
    };
    LostPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth-lost-password',template:/*ion-inline-start:"/home/prost_m/EIP/Mobile/src/pages/auth/lost-password/lost-password.html"*/'<ion-header>\n\n</ion-header>\n\n\n<ion-content class="register" padding no-bounce>\n    <div class="register-header" text-center>\n        <ion-img width="80" height="80" [cache]="true" src="/assets/imgs/elios.png"></ion-img>\n    </div>\n\n    <ion-list class="register-form" padding>\n        <h3 padding-left padding-top>Mot de passe oublié</h3>\n\n        <div padding>\n            Indiquez votre email pour recevoir un mail permettant de redéfinir un mot de passe\n        </div>\n\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n\n        <ion-item class="register-form-buttons" no-lines>\n            <button navPop default ion-button item-left color="secondary" outline>\n                <ion-icon name="arrow-dropleft"></ion-icon>\n            </button>\n            <button default ion-button item-right color="primary" (click)="lostPassword()">Envoyer</button>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/prost_m/EIP/Mobile/src/pages/auth/lost-password/lost-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LostPasswordPage);
    return LostPasswordPage;
}());

//# sourceMappingURL=lost-password.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_main_module__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_providers_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_mirror_mirror_link_mirror_link_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_mirror_mirror_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_mirror_mirror_unlink_mirror_unlink_service__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_main_module__["a" /* MainModule */],
                __WEBPACK_IMPORTED_MODULE_9__providers_providers_module__["a" /* ProvidersModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_mirror_mirror_link_mirror_link_service__["a" /* MirrorLinkProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_mirror_mirror_service__["a" /* MirrorProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_mirror_mirror_unlink_mirror_unlink_service__["a" /* MirrorUnlinkProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auth_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_tabs_tabs__["a" /* TabsPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_5__pages_auth_login_login__["a" /* LoginPage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.auth.getUserToken().then(function (data) {
                console.log('Token: ' + data);
                if (data) {
                    _this.page = _this.tabsPage;
                }
                else {
                    _this.page = _this.loginPage;
                }
            }).catch(function (data) {
                console.log('Token: ' + data);
                _this.page = _this.loginPage;
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/prost_m/EIP/Mobile/src/app/app.html"*/'<ion-nav [root]="page"></ion-nav>\n'/*ion-inline-end:"/home/prost_m/EIP/Mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth_service__["a" /* AuthServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lost_password_lost_password__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_4__lost_password_lost_password__["a" /* LostPasswordPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__lost_password_lost_password__["a" /* LostPasswordPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_4__lost_password_lost_password__["a" /* LostPasswordPage */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_mirror_add_mirror__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_qr_scanner__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_mirror_add_mirror_qr_code_add_mirror_qr_code__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_mirror_mirror_link_mirror_link_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_5__add_mirror_add_mirror__["a" /* AddMirrorPage */],
                __WEBPACK_IMPORTED_MODULE_7__add_mirror_add_mirror_qr_code_add_mirror_qr_code__["a" /* AddMirrorQrCodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__add_mirror_add_mirror__["a" /* AddMirrorPage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__add_mirror_add_mirror_qr_code_add_mirror_qr_code__["a" /* AddMirrorQrCodePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_5__add_mirror_add_mirror__["a" /* AddMirrorPage */],
                __WEBPACK_IMPORTED_MODULE_7__add_mirror_add_mirror_qr_code_add_mirror_qr_code__["a" /* AddMirrorQrCodePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_8__providers_mirror_mirror_link_mirror_link_service__["a" /* MirrorLinkProvider */]
            ]
        })
    ], MainModule);
    return MainModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service_api_service_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mirror_mirror_module__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProvidersModule = /** @class */ (function () {
    function ProvidersModule() {
    }
    ProvidersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__api_service_api_service_module__["a" /* ApiServiceModule */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__mirror_mirror_module__["a" /* MirrorModule */]
            ]
        })
    ], ProvidersModule);
    return ProvidersModule;
}());

//# sourceMappingURL=providers.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_get_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_post_service__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ApiServiceModule = /** @class */ (function () {
    function ApiServiceModule() {
    }
    ApiServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__http_get_service__["a" /* GetService */],
                __WEBPACK_IMPORTED_MODULE_4__http_post_service__["a" /* PostService */]
            ]
        })
    ], ApiServiceModule);
    return ApiServiceModule;
}());

//# sourceMappingURL=api-service.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MirrorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mirror_service__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MirrorModule = /** @class */ (function () {
    function MirrorModule() {
    }
    MirrorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__mirror_service__["a" /* MirrorProvider */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthServiceProvider */]
            ]
        })
    ], MirrorModule);
    return MirrorModule;
}());

//# sourceMappingURL=mirror.module.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_get_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_post_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiServiceProvider = /** @class */ (function () {
    function ApiServiceProvider(platform, getService, postService) {
        this.platform = platform;
        this.getService = getService;
        this.postService = postService;
        this.apiUrl = '/api';
        if (this.platform.is('cordova') == true) {
            this.apiUrl = 'http://dev.elios-mirror.com';
        }
    }
    ApiServiceProvider.prototype.getApiUrl = function () {
        return (this.apiUrl);
    };
    ApiServiceProvider.prototype.get = function (url, token) {
        return (this.getService.submit(url, token));
    };
    ApiServiceProvider.prototype.post = function (url, token, body) {
        return (this.postService.submit(url, token, body));
    };
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__http_get_service__["a" /* GetService */], __WEBPACK_IMPORTED_MODULE_2__http_post_service__["a" /* PostService */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MirrorLinkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MirrorLinkProvider = /** @class */ (function () {
    function MirrorLinkProvider(http, api, auth) {
        var _this = this;
        this.http = http;
        this.api = api;
        this.auth = auth;
        this.auth.getUserToken().then(function (result) {
            _this.token = result;
        });
    }
    MirrorLinkProvider.prototype.mirrorLink = function (mirrorId) {
        return this.api.post(this.api.getApiUrl() + '/api/mirrors/' + mirrorId + '/link', this.token, null);
    };
    MirrorLinkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthServiceProvider */]])
    ], MirrorLinkProvider);
    return MirrorLinkProvider;
}());

//# sourceMappingURL=mirror-link.service.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map