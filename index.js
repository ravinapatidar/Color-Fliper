let redBtn = document.querySelector('.redbtn');
let bluebtn = document.querySelector('.bluebtn');
let pinkbtn = document.querySelector('.pinkbtn');
let greybtn = document.querySelector('.greybtn');
let container = document.querySelector('.container');


redBtn.addEventListener("click", () => {
    container.style.backgroundColor = 'red';
});
bluebtn.addEventListener("click", () => {
    container.style.backgroundColor = 'blue';
});
pinkbtn.addEventListener("click", () => {
    container.style.backgroundColor = 'pink';
});
greybtn.addEventListener("click", () => {
    container.style.backgroundColor = 'grey';
});



let randbtn = document.querySelector('.rnd-color-btn');

let color = ['orange','#283618','#dda15e','#003049','#780000','#669bbc','#e9c46a','#3a5a40','#588157','#219ebc','#03045e','#a53860','#450920','#ffa5ab','#ff006e','#3a86ff','#006d77','#e29578','#edf6f9','#0d1b2a'];

randbtn.addEventListener('click', () => {
     let randomeColor = color[Math.floor(Math.random()*color.length)];
    container.style.backgroundColor = randomeColor;
    randbtn.style.backgroundColor = randomeColor;
});


