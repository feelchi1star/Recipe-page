import Ins from "./ins.js";
// Ingredients
var ingredient = [
  "1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)",

  "5 Tablespoons (70g) unsalted butter, melted",
  "1/4 cup (50g) granulated sugar",
];
var ingredient2 = [
  "four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature",
  "1 cup (200g) granulated sugar",
  "1 cup (240g) full-fat sour cream, at room temperature",
  "1 teaspoon pure vanilla extract",
  "2 teaspoons fresh lemon juice (optional, but recommended)",
  "3 large eggs, at room temperature",
  "topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) ",
];

class check {
  constructor(title, list) {
    this.title = title;
    this.list = list;
  }
}

var titleHead = ["Graham Cracker Crust", "Cheesecake"];
const First = new check(titleHead[0], ingredient);
const Second = new check(titleHead[1], ingredient2);
let t = "";
for (let x in First.list) {
  t +=
    `<form> <input type="checkbox" class="box" name="vehicle1" value="${First.list[x]}">` +
    First.list[x] +
    `<br />
                </form>`;
}
let g = "";
for (let z in Second.list) {
  g +=
    `<form> <input type="checkbox" class="box" name="vehicle1" value="${Second.list[z]}">` +
    Second.list[z] +
    `<br />
    </form>`;
}
// Ingredients DOM;
document.querySelector(".head-text2").innerHTML = Second.title;
document.querySelector(".head-text").innerHTML = First.title;
document.querySelector(".checkbox").innerHTML = t;
document.querySelector(".checkbox2").innerHTML = g;

// INSTRUCTION
let details = "";
let counters = 0;
for (let item = 1; item < Ins.length; item++) {
  counters = item;
  details += `
    <li>
      <div class="counter">${counters}</div>
      <div class="ins-details">
      ${Ins[item]}
      </div>
    </li>
  `;
}
document.querySelector(".list-wrap").innerHTML = details;
