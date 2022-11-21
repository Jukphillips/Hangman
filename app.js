const desc = document.getElementById('desc');
const chooseCat = document.getElementById('chooseCat');
const buttonHint = document.getElementById('hint');
const reset = document.getElementById('reset');
const choosenCate = document.getElementById('submitBtn')
const catergorySubmitBtn = document.getElementById('submitBtn')
let lives = 10;
let response = '';
let hint = '';
const hangman = document.getElementById("hangStick")

// create a seperate catergory array that also connects to question objects that 
// contain both the question and hint. 
let questions = [
{
    catergory: "Social",
    word: "Twitter",
    hint: "Bought by the richest person in the world"
},
{
    catergory: "Cars",
    word: "Porsche",
    hint: "Best german performance brand"    
}, 
{
    catergory: "Cars",
    word: "Ford Mustang",
    hint: "Domestic v8 brand"
},
{ 
    catergory: "Food",
    word: "Pizza",
    hint: "",
},
];

// Takes our question array and seperates the catergories into individual non-repeating strings
// so we can select them in printCatergory()
const cate = questions.reduce((cate, item) => {
    const catergory = (cate[item.catergory] || [])
    catergory.push(item);
    cate[item.catergory] = catergory;
    return cate;
    
}, {});

// gathers the catergries names and prints each unique catergory to our dorp-down menu on html
// will allow for us to add local storage editing so users can add their own questions
//makes program more dynamic
function printCatergory() {
const arrCate = Object.getOwnPropertyNames(cate)
for( let i = 0; i < arrCate.length; i++) {
    let z = arrCate[i];    
    let f = document.createElement('option')
    f.setAttribute("value", z)
    f.textContent = z
    chooseCat.appendChild(f) 
}
};

function selectCatergory() {
    console.log(chooseCat.value)
    event.preventDefault();
}


printCatergory()
// figure out how to randomly select a word from one of our catergories that's equals our 