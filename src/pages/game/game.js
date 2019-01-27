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
import { Timer } from "../../models/timer";
var GamePage = /** @class */ (function () {
    function GamePage() {
        this.level = 1;
        this.points = 0;
        /*TODO: initialise possibleLettersArray in constructor and add 'ä', 'ö' and 'ü' only if used language is 'de', OR get fitting letters from externally*/
        this.possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö', 'ü'];
        this.timer = new Timer();
        this.timerPlay();
        this.getLettersArray();
    }
    /*TODO: check if methods are ever used/needed*/
    GamePage.prototype.timerPlay = function () {
        this.timer.start();
    };
    GamePage.prototype.timerStop = function () {
        this.timer.stop();
    };
    GamePage.prototype.timerReset = function () {
        this.timer.reset();
    };
    /*TODO: error handling*/
    /*TODO: add correct letter*/
    GamePage.prototype.getLettersArray = function () {
        this.spellWord = 'Ameisenbär';
        this.letters = [];
        var letterIndex = 0;
        var _loop_1 = function () {
            var searchedLetter = this_1.spellWord.charAt(letterIndex);
            var randomLetter = this_1.possibleLetters[Math.floor(Math.random() * this_1.possibleLetters.length)];
            var letterExists = !!this_1.letters.find(function (letter) {
                return randomLetter === letter || searchedLetter === letter;
            });
            if (letterExists)
                return "continue";
            this_1.letters.push(searchedLetter);
            this_1.letters.push(randomLetter);
        };
        var this_1 = this;
        do {
            _loop_1();
        } while (this.letters.length < 5);
    };
    GamePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-game',
            templateUrl: 'game.html',
        }),
        __metadata("design:paramtypes", [])
    ], GamePage);
    return GamePage;
}());
export { GamePage };
//# sourceMappingURL=game.js.map