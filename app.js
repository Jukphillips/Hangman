const desc = document.getElementById('desc');
const chooseCat = document.getElementById('chooseCat');
const buttonHint = document.getElementById('hint');
const reset = document.getElementById('reset');
const choosenCate = document.getElementById('submitBtn')
const catergorySubmitBtn = document.getElementById('submitBtn')
const dropDownList = document.getElementById('dropDown')
let lives = 10;
let response = '';
let hint = '';
let chooseObj;
let wordDisplay = [];
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
    hint: "Domestic v8 sports car brand"
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

function beganGame(){
    console.log(chooseObj)
    removeDisplayItems()
    displayGameText()
    alphabetGenerator()
    // removing html elements from page to display game. This will generate several other funtions including  removedisplayItems(),
    //displayGameText() , alphabetGenerator(), game(), 
}

// removes catergory selection and game rules from the screen. 
function removeDisplayItems() {
    desc.style.display = 'none';
    dropDownList.style.display = 'none';
    
}

function displayGameText() {
    //first display choosen catergory
    // then display underscore anwser portion seens in sandbox version
    // display lives
    let wordArray = chooseObj.word.split("")
}

function alphabetGenerator() {
    // generator our on site alphabet buttons so users can either type buttons or press the button on 
    // website. When characters press buttons they'll change to x out versions of said character 
}

// compares question array objects to selected catergory and randomly chooses a question/hint pair in catergory to began game
function selectCatergory() {
    event.preventDefault();
    console.log(chooseCat.value)
    console.log(cate) 
    let element;  
    if (cate.hasOwnProperty(chooseCat.value)){
        element  = cate[chooseCat.value]
        let randomObj = Math.floor(Math.random() * element.length)
        chooseObj = element[randomObj]
        beganGame()
        
    } else {
        alert('error')
    };    
}





printCatergory()
// figure out how to randomly select a word from one of our catergories that's equals our selected 

// take response from cate variable and compare it to our select value variable. output should be all the objects that 
// equate to our selected word. we then randomly sort through that selection to get a word and hint combination. 

// after this we will remove h4 id=desc from display and replace with 'Your chosen catergory is _catergorySelected_'
// Also generate click alphabet so user's without a keyboard or mobile users can expeience high level of acesscibility