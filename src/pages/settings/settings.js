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
import { IonicPage } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { SettingsProvider } from "../../providers/settings/settings";
var SettingsPage = /** @class */ (function () {
    function SettingsPage(translateService, settingsService) {
        var _this = this;
        this.translateService = translateService;
        this.settingsService = settingsService;
        this.translateService.stream('Languages').subscribe(function (labels) {
            _this.languages = [
                {
                    name: labels['DE'],
                    code: 'de'
                },
                {
                    name: labels['EN'],
                    code: 'en'
                }
            ];
        });
        this.isMusicActive = true;
        this.isSoundActive = true;
    }
    SettingsPage.prototype.setLanguage = function (language) {
        this.settingsService.save({ language: language });
    };
    /**
     * @TODO: storage does not work
     * Toggles music and writes it to local storage
     * @param event
     */
    SettingsPage.prototype.toggleMusic = function (event) {
        this.isMusicActive = event;
        // this.settingsService.save({music: event});
    };
    /**
     * @TODO: storage does not work
     * Toggles sound and writes it to local storage
     * @param event
     */
    SettingsPage.prototype.toggleSound = function (event) {
        this.isSoundActive = event;
        // this.settingsService.save({sound: event});
    };
    SettingsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-settings',
            templateUrl: 'settings.html',
        }),
        __metadata("design:paramtypes", [TranslateService,
            SettingsProvider])
    ], SettingsPage);
    return SettingsPage;
}());
export { SettingsPage };
//# sourceMappingURL=settings.js.map