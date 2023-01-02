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
let textInput = document.querySelector("#test");
let swiDashboard = document.querySelector(".board")
let butn = document.querySelector(".butting");

// window.addEventListener("scroll", () => {
//     // added an event listener to the page and a scroll
//     let changeSize = document.querySelector("#play");
//     const currentScroll = window.pageYOffset;
//    if (currentScroll >= 170) {
//     changeSize.style.fontSize = "25px";
//     changeSize.style.textAlign = "left";
//    } else {
//     changeSize.style.fontSize = "50px";
//     changeSize.style.textAlign = "center";
//    }
//     // lastScroll = currentScroll;

//     let head = document.querySelector("header");
//     let currentScroller = window.pageYOffset;
//     if (currentScroller >= 300) {
//         head.classList.add('hide-header')
//     } else {
//         head.classList.remove('hide-header')
//     }
//     console.log(currentScroller);
// })

let heading = document.querySelector("header");
// heading is equal to header
let lastScrollY = 0;
// last scroll is the smallest number
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        // 0 will surely be less than any given pixel.
        heading.classList.add("scroll-header");
        // console.log(lastScrollY);
        // add the class
    } else {
        heading.classList.remove("scroll-header");
    }
    lastScrollY = window.scrollY;
})

// for each
const ololade = "mmwtv";
const asakeTracks = ["Dull", "joha", "Nzaza", "Dupe", "Muse"]; 
asakeTracks.forEach((trackNumber, trackName, allTracks) => {
    // console.log(allTracks);
})


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


//  CHANGE IMAGE ON CLICK
 soccer.addEventListener("mouseover", function(){
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
});


let modalOpen = document.querySelector('#open-modal');
let modal = document.querySelector('#modal');
let modalClose = document.querySelector('#modal-close');

modalOpen.addEventListener("click", function() {
    modal.showModal();
})

modalClose.addEventListener("click", function() {
    modal.close();
})

// --------------DO WHILE------------
let result = '';
let i = 0;

do {
    i += 1;
    // i used to be 0 but now it is 1
    result = result + i;
    // result was undefine but now it is I which is 1
    // 
} while (i < 5);
// now the condition.if its true it runs the code
console.log("we the best " + result);

var cupsOfSugarNeeded = 3;
var cupsAdded = 0;
do {
    cupsAdded++
  //   this is the code that keeps repeating till the condition is met
    console.log(cupsAdded);
  //   if (cupsAdded >= 2) {
  //     break
  //   }
  } while (cupsAdded < cupsOfSugarNeeded);
  console.log(cupsAdded);
//   -------------------


//   -------------------------
  var years = 0;
  var language = 4;
  do {
    // years += 0;
    years++;
    console.log(`My experience from year ${years}`);
  } while (years < language);
  console.log(`my year ${years} was the litest tho`);


let airplaneMode = () => {
    console.log("please, do not disturb this user");
}

airplaneMode()

const busyAsFuck = airplaneMode;
busyAsFuck()

let sleeping = busyAsFuck;
sleeping()
console.log(sleeping.name.length);

// Vanilla-----------------
const clickableDiv = document.querySelectorAll(".top-div");
clickableDiv.forEach(clickableDiv => {
    clickableDiv.addEventListener("click", (e) => {
       const bottom = e.target.nextElementSibling;
       bottom.classList.toggle("hideShow")
    })
})
// line 195. top div is added to a variable
// line 196. looping through all top-divs with with the forEach
// line 197. adding an event listener to all top div but with an e parameter
// line 198. declare a variable for the bottom div using the nextElementSibling and a parameter to iterate through
// line 199. toggle class


const moreLess = document.querySelectorAll('.show-more');
moreLess.forEach(moreLess => {
    moreLess.addEventListener('click', (i) => {
        const moreView = i.target.previousElementSibling;
        moreView.classList.toggle('more-display')
        moreLess.textContent = "read less"
    })
})


//   EXAMPLE
const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

  let totalSalary = 0;
  staffsDetails.forEach(({name, salary, age}) =>{
    if (salary != 4000) {
        // totalSalary += salary;
    }
    console.log(name);
  })

//   MAP
 const paidFees = [300, 378, 275, 274, 287, 854];
 const doubleFee = paidFees.map(paidFee => {
    return paidFee * 2;
 })
 console.log(doubleFee);

//  ------------------------------
const stringsAndNumbers = ['Airpod', 15, 90, 'Iphone', 54, 'Dress'];
const numbers = stringsAndNumbers.filter(number => {
    return typeof number === 'number';
})
console.log(numbers)
const strings = stringsAndNumbers.filter(string => {
    return typeof string === 'string'
})
console.log(strings);

// .FILTER()
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(smallNumber => {
  return smallNumber < 250;
})
console.log(randomNumbers);
console.log(smallNumbers);


//   const amountOfPhones = [23, 34, 24];
//   amountOfPhones.forEach((amountOfPhone) => {
//     let iye = 0;
//     iye += amountOfPhone;
//     console.log(iye);
//   });

// $(document).ready(function(){
//     $('.show-more').click(function(){
//         $(this).text("Show Less")
//         $('.more').toggle();
//         $('.dots').toggle()
//     })
// })

// // ---------------------
// $(document).ready(function(){
//     $('.addUp').click(function(){
//         $('ul').append('<li class="ordered">Diaz</li>')
//     })
// })

// $(document).ready(function(){
//     $('.addUp').click(function(){
//         $('.foden').remove()
//     })
// })




// let ent = document.querySelector(".enter");
// ent.addEventListener("click", () => {
//     let answer = document.getElementById("mailer").value;
//     // document.getElementsByClassName("info").innerHTML = answer;
//     console.log(answer);
// })


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

// console.log(newDiv)
