const menu = document.querySelector('.menu')
const navMenu = document.querySelector('.nav-menu')
const navItem = document.querySelectorAll('.nav-item')

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

navItem.forEach(item => item.addEventListener('click', () => {
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');
}))