import { Timer } from "../../models/timer";
var GamePage = /** @class */ (function () {
    function GamePage() {
        this.level = 1;
        this.points = 0;
        /*TODO: initialise possibleLettersArray in constructor and add 'ä', 'ö' and 'ü' only if used language is 'de', OR get fitting letters from externally*/
        this.possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö', 'ü'];
        this.timer = new Timer();
        this.spellWord = 'Ameisenbär';
        this.letterIndex = 0;
        this.timerPlay();
        this.getLettersArray();
    }
    /**
     * Returns the needed letter
     */
    GamePage.prototype.getSearchedLetter = function () {
        return {
            letter: this.spellWord.charAt(this.letterIndex).toUpperCase(),
            disabled: false
        };
    };
    /*TODO: check if methods are ever used/needed*/
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
    /*TODO: check if all parameters are needed here*/
    GamePage.prototype.onLetterClicked = function (event, index, letter) {
        if (this.getSearchedLetter() === letter) {
            ++this.points;
            ++this.letterIndex;
            this.getLettersArray();
        }
        else {
            --this.points;
        }
    };
    return GamePage;
}());
export { GamePage };
//# sourceMappingURL=game.js.map