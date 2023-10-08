/* TESTING TEXT STYLE CHANGERS */

// let text = document.querySelector('.text');
// let input = document.getElementById('input');
// let btn = document.getElementById('btn');
// let body = document.body


// btn.addEventListener('click', () => {
//     text.textContent = input.value + ' ' + 'changed'
//     text.style.color = 'red';
    
//     if (input.value === '') {
//         text.textContent = '...';
//         text.style.color = 'unset';
//         setTimeout(() =>{
//             body.style.background = 'red';
//         }, 500) 
//     }
//     else {
//         body.style.background = 'unset';
//     }
// })

/* TESTING IMAGE CHANGER FUNCTION */

// let input = document.getElementById('fileChanger');
// let img = document.getElementById('img');

// input.addEventListener('change', (event) => {
//     img.src = URL.createObjectURL(event.target.files[0]);
// });

/* TESTING Calculation */

// let inputFirst = document.getElementById('inputFirst')
// let inputSecond = document.getElementById('inputSecond')
// let btn = document.getElementById('btn')
// let result = document.getElementById('result')

// btn.addEventListener('click', () => {
//     value1 =  parseFloat(inputFirst.value);
//     value2 =  parseFloat(inputSecond.value);
//     sum = value1 + value2;
//     result.textContent = 'Result' + ': ' + sum;
// })