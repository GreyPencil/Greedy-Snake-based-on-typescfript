// console.log(123);
import './style/index.less';
import Food from './modules/food';
import ScorePanel from "./modules/scorePanel";

//Test
const food = new Food();
console.log(food.X, food.Y);
food.change();
console.log(food.X, food.Y);

//Test
const scorePanel = new ScorePanel();
scorePanel.addScore();
scorePanel.addScore();
