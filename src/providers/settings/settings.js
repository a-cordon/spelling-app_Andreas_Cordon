var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs/Observable";
import { of as observableOf } from 'rxjs/observable/of';
var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(storage) {
        this.storage = storage;
        /*TODO: reset to settings = null if not further needed (because of initial page)*/
        this.settings = {
            language: 'de',
            music: true,
            sound: true
        };
        this.observer = null;
    }
    /**
     * Load and observe settings.
     * @returns {Observable<Settings>}
     */
    SettingsProvider.prototype.load = function () {
        var _this = this;
        if (this.observer !== null &&
            this.settings !== null)
            return observableOf(this.settings);
        return new Observable(function (observer) {
            _this.observer = observer;
            _this.storage.get('settings').then(function (settings) {
                _this.settings = settings || {
                    language: 'de',
                    music: true,
                    sound: true
                };
                observer.next(_this.settings);
            });
        });
    };
    /**
     * Writes a settings object in the local storage
     * @param {Settings} settings
     */
    SettingsProvider.prototype.save = function (settings) {
        if (this.settings === null)
            return;
        // Update and write to storage
        void this.storage.set('settings', Object.assign(this.settings, settings));
        // Notify subscribers
        this.observer.next(this.settings);
    };
    SettingsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage])
    ], SettingsProvider);
    return SettingsProvider;
}());
export { SettingsProvider };
//# sourceMappingURL=settings.js.map