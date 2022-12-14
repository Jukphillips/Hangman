const desc = document.getElementById('desc');
const alphaBtn = document.getElementById("alphabets")
const chooseCat = document.getElementById('chooseCat');
const buttonHint = document.getElementById('hint');
const reset = document.getElementById('reset');
const choosenCate = document.getElementById('submitBtn')
const catergorySubmitBtn = document.getElementById('submitBtn')
const dropDownList = document.getElementById('dropDown')
const gameDisplay = document.getElementById('gameDisplay')
let lives = 10;
let response = '';
let hint = '';
let chooseObj;
let wordDisplay = [];
let usedLets = []
let chosBtnPres = '';
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


function beganGame(){
    console.log(chooseObj)
    removeDisplayItems()
    displayGameText()
    alphabetGenerator()
    game()


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
    gameDisplay.textContent = "The choosen catergory is " + chooseObj.catergory

    // then display underscore anwser portion seen in sandbox version
    let d = document.createElement("div")
    let wordArray = chooseObj.word.split("")
    console.log(wordArray[1])
    console.log(chooseObj.word.length)

    for (var i = 0; i < chooseObj.word.length; i++){
        if (wordArray[i] !== "-"){
            wordDisplay.push("_")
        } else {
            wordDisplay.push(" ")
        }
    
    }
    console.log(wordDisplay)
    d.innerHTML = wordDisplay.join(" ")
    gameDisplay.appendChild(d)

    // display lives
    let l = document.createElement("p")
    l.innerHTML = 'You have ' + lives + ' left';
    gameDisplay.appendChild(l)

    //give hangman a canvas a border
    return

}

function alphabetGenerator() {
    // generator our on site alphabet buttons so users can either type buttons or press the button on 
    // website. When characters press buttons they'll change to x out versions of said character 
    const alpha = Array.from(Array(26)).map((e,i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode((x)))

    //prints out an innerHtml script to add buttons with all our alphabet letters individually to our app
    alphabet.forEach(function(letter){
        alphaBtn.innerHTML += '<button class="test" id="'  + letter + '">'+ letter + '</button'
    })
    
}
 


function game(){
    alphaBtn.addEventListener("click", function btnPress(event){
        document.getElementById(event.path[0].id).className = "usedLet"
        chosBtnPres = event.path[0].innerHTML
        console.log(chosBtnPres)
    } )
    // --connect buttons and keystrokes to an eventlistener that compares the values you pressed to those in our choose(n)Obj.
    
    // if the value is the same then we will dislay that letter over our anwser _'s and grey out the choosen button. we'd 
    // also whenever our correct guesses equal the lenght of choosenOBj.lenght then we commence gameOver()  

    //if the value is different then we will grey out that letter/stop listening to that value letter(turn off eventlistener)
    // we will began creating our hangman drawing using drawHangman()
    // we will remove one life


}



printCatergory()
// figure out how to randomly select a word from one of our catergories that's equals our selected 

// take response from cate variable and compare it to our select value variable. output should be all the objects that 
// equate to our selected word. we then randomly sort through that selection to get a word and hint combination. 

// after this we will remove h4 id=desc from display and replace with 'Your chosen catergory is _catergorySelected_'
// Also generate click alphabet so user's without a keyboard or mobile users can expeience high level of acesscibility