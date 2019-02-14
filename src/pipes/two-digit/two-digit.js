var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var TwoDigitPipe = /** @class */ (function () {
    function TwoDigitPipe() {
    }
    TwoDigitPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.pad(value, 2, 0);
    };
    TwoDigitPipe.prototype.pad = function (value, width, z) {
        z = z || '0';
        // casting value to a string
        value = value + '';
        return value.length >= width ? value : new Array(width - value.length + 1).join(z) + value;
    };
    TwoDigitPipe = __decorate([
        Pipe({
            name: 'twoDigit',
        })
    ], TwoDigitPipe);
    return TwoDigitPipe;
}());
export { TwoDigitPipe };
//# sourceMappingURL=two-digit.js.map