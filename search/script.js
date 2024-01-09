const container = document.querySelector('.container');
const icon = document.querySelector('.search-icon');

icon.addEventListener('click', () => {
    container.classList.toggle('active');
})

const menu = document.querySelector('.menu');
const menuim = document.querySelector('.angle');
const menup = document.querySelector('.menu span');
const list = document.querySelector('.list');
const items = document.querySelectorAll('.list li');


menu.addEventListener('click', () => {
    list.classList.toggle('hide');
    menuim.classList.toggle('rotate');
})
items.forEach((item) => {
    item.addEventListener('click', () => {
        menup.innerHTML = item.innerHTML;
        menuim.classList.toggle('rotate');
        list.classList.toggle('hide');

    })
})