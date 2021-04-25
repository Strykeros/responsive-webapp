function toggleMenu(){
    let menu = document.querySelector("aside");
    let menuButton = document.querySelector(".menu-button");

    menu.classList.toggle("hide");

    // change icon of "menuButton" on-click
    menuButton.innerHTML = "close";
    if(menu.classList.contains("hide")){
        menuButton.innerHTML = "menu";
    } else{
        menuButton.innerHTML = "close";
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {Scroll()};

// Get the header
let header = document.getElementById("myHeader");

// Get the offset position of the navbar
let sticky = header.offsetTop;
//let sticky2 = aside.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function Scroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    
  } else {
    header.classList.remove("sticky");
  }
} 



let salesFigure = 120000;

let expensesFigure = 4000;
let enrollementsFigure = 3000;
let growthFigure = 23.7;
let currency = "&euro;"
let percent = "&#37;"




/* FUNCTIONS (methods)*/

function refreshFigures(){

    let salesFigureElement = document.querySelector(".figure.sales");

    let expensefig = document.querySelector(".figure.expensesales");

    let enrollmentsfig = document.querySelector(".figure.enrollmentsales");

    let growthfig = document.querySelector(".figure.growthsales");

    salesFigureElement.innerHTML = currency + " " + salesFigure.toLocaleString();

    expensefig.innerHTML = currency + " " + expensesFigure.toLocaleString();

    enrollmentsfig.innerHTML = enrollementsFigure.toLocaleString();

    growthfig.innerHTML = "+" + growthFigure + " " + percent;
}

function createDiv(parent){
    let newDiv = document.createElement("div");
    parent.append(newDiv);
    return newDiv;
}

function createCourse(name, price, expense, enrollment){
   let course = {
     "name": name,
     "price": price,
     "expense": expense,
     "enrollment": enrollment
   };
   return course;
}

let courseList = [
  createCourse("Basic WebTech", 180, 120, 400),
  createCourse("Advanced WebTech", 240, 160, 300),
  createCourse("Pro WebTech", 160, 120, 100)

];

console.log(courseList);

function createBtn(parent, element){
  let btn = document.createElement("i");
  btn.classList.add("material-icons", "expand-course-button");
  var text = document.createTextNode("add_circle");
  btn.appendChild(text);
  parent.append(btn);
  btn.addEventListener("click", function(event){
    toggleCourse(element, btn)
  });
  return btn;
}

/**
 * Creates an HTML div element with all information about a course.
 * @param {{}} course JSON object with all the information about a course.
 * @param {number} no Ordinal numeration.
 */
function createCourseDiv(course, no) {
  let section = document.querySelector(".course-list");
  let container = createDiv(section);
  container.classList.add("course", "hide");

  // TASK: Recreate the first row with javascript
  // We want to use the number and course name from variables
  let row1 = createDiv(container);
  let row1_1 = createDiv(row1);
  row1_1.innerHTML = "#" + no;
  let row1_2 = createDiv(row1);
  row1_2.innerHTML = course["name"];
  let row1_3 = createDiv(row1);
  createBtn(row1_3, container);


  // TASK: Create the row for Price.
  // TASK: Fill the second row with text
  let row2 = createDiv(container);
  let row2_1 = createDiv(row2);
  row2_1.innerHTML = "Price";
  let row2_2 = createDiv(row2);
  row2_2.innerHTML = "&euro; " + course["price"];

  let row3 = createDiv(container);
  let row3_1 = createDiv(row3);
  row3_1.innerHTML = "Expense";
  let row3_2 = createDiv(row3);
  row3_2.innerHTML = "&euro; " + course["expense"];

  let row4 = createDiv(container);
  let row4_1 = createDiv(row4);
  row4_1.innerHTML = "Enrollments";
  let row4_2 = createDiv(row4);
  row4_2.innerHTML = course["enrollment"];

}

function toggleCourse(course, button){

  course.classList.toggle("hide");

  if(course.classList.contains("hide")){
    button.innerHTML = "add_circle";
  } else{
    button.innerHTML = "remove_circle";
  }
}

createCourseDiv(courseList[0], "1");
createCourseDiv(courseList[1], "2");
createCourseDiv(courseList[2], "3");


