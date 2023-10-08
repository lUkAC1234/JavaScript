let text = document.querySelector('.text');
let input = document.getElementById('input');
let btn = document.getElementById('btn');
let body = document.body


btn.addEventListener('click', () => {
    text.textContent = input.value + ' ' + 'changed'

    text.style.color = 'red';
})