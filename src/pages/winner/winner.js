var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
var WinnerPage = /** @class */ (function () {
    function WinnerPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.points = navParams.get('points') || null;
        // Ensures that the time is always shown with two digits
        this.minutes = navParams.get('timerMinutes') === undefined ? null : ("0" + navParams.get('timerMinutes')).slice(-2);
        this.seconds = navParams.get('timerSeconds') === undefined ? null : ("0" + navParams.get('timerSeconds')).slice(-2);
    }
    /**
     * Closes this overlay and starts a new game if it is set to 'true'
     * @param newGame
     */
    WinnerPage.prototype.dismissModal = function (newGame) {
        if (newGame === void 0) { newGame = false; }
        void this.viewCtrl.dismiss(newGame);
    };
    WinnerPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-winner',
            templateUrl: 'winner.html',
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController])
    ], WinnerPage);
    return WinnerPage;
}());
export { WinnerPage };
//# sourceMappingURL=winner.js.map