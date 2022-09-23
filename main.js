// EXAMINE THE DOCUMENT OBJECTS.
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.forms[0]);
// console.log(document.all[24]);
// document.all[24].textContent = "you self check am nah?"
// console.log(document);
// console.log(document.all[]);
// GET ELEMENTS BY ID

// VARIABLES DECLARATIONS
let togg = document.body;
let ale = document.querySelector("#night");
let items = document.querySelector(".list-item");
let imag = document.querySelector("#imagery");
let imgBtn = document.querySelector("#img-btn");
let soccer = document.querySelector("#baller");
let wordly = document.querySelector(".word");
let textInput = document.querySelector("#test")
// console.log(items.childNodes);


// THIS TOGGLES THE DARKMODE AND ALSOCHANGE THE ICON
ale.addEventListener("click", function() {
    if(ale.src.match("icons/half-moon-svgrepo-com.svg")){
        ale.src = "icons/sunset-svgrepo-com.svg";
    } else {
        ale.src = "icons/half-moon-svgrepo-com.svg";
    }
    togg.classList.toggle('switch-clr');
    swiDashboard.classList.toggle("poli-sci-swi");
    textInput.classList.toggle("input-bg");
})

// CHANGE IMAGE
imgBtn.addEventListener('click', function(){
    if (imag.style.display === "block"){
        imag.style.display = "none";
        imgBtn.textContent = "show image";
    } else {
        imag.style.display = "block";
        imgBtn.textContent = "Hide Image";
    }
})

// DESIGN OF THE ITEM LIST
let numB = document.querySelectorAll(".numb:nth-child(odd)");
let numBr = document.querySelectorAll(".numb:nth-child(even");
for (let b = 0; b < numB.length; b++) {
    numB[b].style.backgroundColor = "#14213d";
    numBr[b].style.backgroundColor = "#fca311";
}

//  CHANGE IMAGE ON CLICK
 soccer.addEventListener("click", function(){
    if(soccer.src.match('images/bubble-gum-social-media.gif')) {
        soccer.src = "images/bubble-gum-workflow.gif";
    } else {
       soccer.src = 'images/bubble-gum-social-media.gif';
    }
 })

//  TOP ICONS
let twitter = document.querySelector("#twi");
let mail = document.querySelector("#envelope");

twitter.addEventListener("click", function(){
    if(twitter.src.match("icons/twitter-social-media-bird-animal-svgrepo-com.svg")) {
        twitter.src = "icons/instagram-social-media-photo-camera-picture-image-svgrepo-com.svg";
    } else {
        twitter.src = "icons/twitter-social-media-bird-animal-svgrepo-com.svg";
    }
})

// ICONS MANIPULATION
mail.addEventListener("click", function(){
    if(mail.src.match("icons/email-letter-mail-message-envelope-email-address-svgrepo-com.svg")){
        mail.src = "icons/message-notification-email-chat-mail-talk-svgrepo-com.svg";
    } else {
        mail.src = "icons/email-letter-mail-message-envelope-email-address-svgrepo-com.svg"
    }
})
// function show() {
//     let hide = document.querySelector(".poly-note")
//     if (hide.style.display === "none") {
//         hide.style.display = "block";
//     } else {
//         hide.style.display = "none";
//     }
// }

// JQUERY TOGGLE
// $(document).ready(function(){
//     $(".dom-btn").click(function(){
//         $(".poly-note").fadeToggle(200);
//     })
// })

// let lead = "oga"
// let heading = document.getElementById("olori");
// heading.textContent = "nah still me bro";
// console.log(heading);
// // heading.style.border = "2px solid white";
// heading.style.display = "inline-block";

// GET ELEMENTS BY CLASS
// let listing = document.getElementsByClassName('list-item');
// console.log(listing);
// listing[3].textContent = 'asiwaju';
// // listing[3].style.backgroundColor = "yellow";
// for (let i = 0; i < listing.length; i++) {
//     listing[i].style.backgroundColor = "#495057";
// }

// QUERY SELECTOR
// let note = document.querySelector('.poly-note');
// let func = function(k) {
//     note.style.backgroundColor = "#495057";
// }

// ADD VALUE TO THE INPUT
// let test = document.querySelector('input');
// test.value = "wetin you want?";

// PSEUDO CLASS WITH SELECTOR
// let pseudo = document.querySelectorAll('.list-item');
// has to be the all query selector for the array to work. even tho it does work on getelementby
// pseudo[2].textContent = 'i am the second on the list';
// console.log(pseudo);

// var even = document.querySelectorAll('.list-item:nth-child(even)');
// var odd = document.querySelectorAll('.list-item:nth-child(odd)');
// for (var x = 0; x < even.length; x++){
//     even[x].style.backgroundColor = "#495057";
//     odd[x].style.backgroundColor = "#fca311"
// };


// TRAVERSING THE DOM
// let parenting = document.querySelector('.poly-sci');
// let parenting = document.querySelector('.poly-note');
// console.log(parenting.parentNode);
// // using .parentNode logs the parent of the element selected
// parenting.parentNode.style.backgroundColor = '#14213d';
// parenting.parentNode.style.borderRadius = '5px';

// THIS WILL GET THE VARIABLES PARENT
// console.log(parenting.parentElement);
// // using .parentNode logs the parent of the element selected
// parenting.parentElement.style.backgroundColor = '#14213d';
// parenting.parentElement.style.borderRadius = '5px';

// THIS WILL YOU GET THE VARIABLES CHILDREN
// console.log(parenting.children);

// let m = document.querySelector(".doming-ul");
// m.nextSibling.style.backgroundColor = '#14213d';
// m.children[1].style.backgroundColor = "yellow";
// console.log(m.nextElementSibling);
// console.log(m.previousElementSibling);
// picks the next element to the variable
// the children syntax picks the ul list children

// CREATING AN ELEMENT 
// function myFunc(num, num1) {
//     return num + num1;
// }
// console.log(myFunc(20, 30));

// // FUNCTION EXPRESSION
// let funcy = function() {
//     console.log(19);
// }
// funcy()

// // ARROW FUNCTION
// const weed = () => {
//     console.log("Too Loud")
// }
// weed()

// // CREATE A NEW DIV
// var newDiv = document.createElement('div');
// // ADD CLASS
// newDiv.className = "newestDiv"
// // ADD ID
// newDiv.id = 'new-div';
// // ADD TEXT. NEED TO CREATE A VARIABLE FOR THE TEXT
// let newTxt = document.createTextNode("a new div created from js DOM");
// // add the text variable to the new div
// newDiv.appendChild(newTxt);

// console.log(newDiv);
