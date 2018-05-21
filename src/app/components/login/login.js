"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { AuthService } from './auth.service';
var LoginComponent = /** @class */ (function () {
    //    public authService: {
    //        isLoggedIn: true
    //}
    function LoginComponent(router) {
        this.router = router;
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (true ? 'in' : 'out');
    };
    LoginComponent.prototype.login = function () {
        this.message = 'Trying to log in ...';
        //this.authService.login().subscribe(() => {
        this.setMessage();
        //    if (this.authService.isLoggedIn) {
        //        // Get the redirect URL from our auth service
        //        // If no redirect has been set, use the default
        //        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        //        // Set our navigation extras object
        //        // that passes on our global query params and fragment
        //        let navigationExtras: NavigationExtras = {
        //            queryParamsHandling: 'preserve',
        //            preserveFragment: true
        //        };
        //        // Redirect the user
        //        this.router.navigate([redirect], navigationExtras);
        //    }
        //});
    };
    LoginComponent.prototype.logout = function () {
        //this.authService.logout();
        this.setMessage();
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>LOGIN</h2>\n    <p>{{message}}</p>\n    <p>\n      <button kendoButton (click)=\"login()\"  >Login</button>\n      <button kendoButton (click)=\"logout()\" >Logout</button>\n    </p>"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map