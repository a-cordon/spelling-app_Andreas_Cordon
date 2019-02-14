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
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Timer } from "../../models/timer";
var GamePage = /** @class */ (function () {
    function GamePage(modalCtrl, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.level = 1;
        this.points = 0;
        /*TODO: initialise possibleLettersArray in constructor and add 'ä', 'ö' and 'ü' only if used language is 'de', OR get fitting letters from externally*/
        this.possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö', 'ü'];
        this.timer = new Timer();
        this.spellWordIndex = 0;
        this.letterIndex = 0;
        this.getSearchedWords();
        this.timerPlay();
        this.getLettersArray();
    }
    /**
     * Loads the array of searched words with the related image
     */
    GamePage.prototype.getSearchedWords = function () {
        this.spellWord = [
            { image: '', spellword: 'a' },
            { image: '', spellword: 'b' },
            { image: '', spellword: 'c' },
            { image: '', spellword: 'd' }
        ];
    };
    /**
     * Returns the needed letter
     */
    GamePage.prototype.getSearchedLetter = function () {
        return {
            letter: this.spellWord[this.spellWordIndex].spellword.charAt(this.letterIndex).toUpperCase(),
            disabled: false
        };
    };
    /**
     * Starts the timer
     */
    GamePage.prototype.timerPlay = function () {
        this.timer.start();
    };
    /**
     * Stops the timer
     */
    GamePage.prototype.timerStop = function () {
        this.timer.stop();
    };
    /**
     * Resets the timer
     */
    GamePage.prototype.timerReset = function () {
        this.timer.reset();
    };
    /**
     * Resets the points counter
     */
    GamePage.prototype.resetPoints = function () {
        this.points = 0;
    };
    /*TODO: error handling*/
    /**
     * Creates a shuffled array of the needed letter and 4 random letters
     */
    GamePage.prototype.getLettersArray = function () {
        this.letters = [];
        this.letters.push(this.getSearchedLetter());
        var _loop_1 = function () {
            var randomLetter = this_1.possibleLetters[Math.floor(Math.random() * this_1.possibleLetters.length)].toUpperCase();
            var letterExists = !!this_1.letters.find(function (letter) {
                return randomLetter === letter.letter;
            });
            if (letterExists || randomLetter === this_1.getSearchedLetter().letter)
                return "continue";
            this_1.letters.push({ letter: randomLetter, disabled: false });
        };
        var this_1 = this;
        do {
            _loop_1();
        } while (this.letters.length < 5);
        this.shuffleLetterArray(this.letters);
    };
    /**
     * @TODO: keep position of letter if it is a double-letter
     * Shuffles array in place, so the searched letter is not always in first place
     * @param letters
     */
    GamePage.prototype.shuffleLetterArray = function (letters) {
        var j, x, i;
        for (i = letters.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = letters[i];
            letters[i] = letters[j];
            letters[j] = x;
        }
        return letters;
    };
    /**
     * Takes a letter, compares it to the searched letter and initiates further action
     * @param letter
     */
    GamePage.prototype.onLetterClicked = function (letter) {
        var _this = this;
        if (this.getSearchedLetter().letter === letter.letter) {
            ++this.points;
            if (this.letterIndex !== this.spellWord[this.spellWordIndex].spellword.length - 1) {
                ++this.letterIndex;
            }
            else {
                if (this.spellWordIndex !== this.spellWord.length - 1) {
                    ++this.spellWordIndex;
                    ++this.level;
                    this.letterIndex = 0;
                }
                else {
                    this.timerStop();
                    var winnerModal = this.modalCtrl.create('WinnerPage', {
                        points: this.points,
                        timerMinutes: this.timer.minutes,
                        timerSeconds: this.timer.seconds
                    });
                    winnerModal.onWillDismiss(function (newGame) {
                        _this.timerReset();
                        _this.resetPoints();
                        newGame === true ? _this.navCtrl.setRoot('GamePage') : _this.navCtrl.setRoot('StartPage');
                    });
                    void winnerModal.present();
                }
            }
            this.getLettersArray();
        }
        else {
            letter.disabled = true;
            --this.points;
        }
    };
    GamePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-game',
            templateUrl: 'game.html',
        }),
        __metadata("design:paramtypes", [ModalController,
            NavController])
    ], GamePage);
    return GamePage;
}());
export { GamePage };
//# sourceMappingURL=game.js.map