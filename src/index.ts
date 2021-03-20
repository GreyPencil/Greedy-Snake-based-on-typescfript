// console.log(123);
import './style/index.less';

//def class food
class Food {
    element: HTMLElement;

    constructor() {
        //! means this must not error
        this.element = document.getElementById('food')!;
    }

    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    change() {

        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }

}


//Test
/*const food = new Food();
console.log(food.X, food.Y);
food.change();
console.log(food.X, food.Y);*/

class ScorePanel {
    score = 0;
    level = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;

    constructor(maxLevel: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;

    }

    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';

        if(this.score % 10 == 0){
            this.levelUp();
        }

    }

    levelUp() {
        if (this.level < this.maxLevel) {

            this.levelEle.innerHTML = ++this.level + '';
        }
    }

}

//Test
const scorePanel = new ScorePanel();
scorePanel.addScore();
scorePanel.addScore();
