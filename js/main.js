
const mobile_menu = document.getElementById('mobile_menu');
const bar_icon = document.querySelector('.bar_icon');

bar_icon.addEventListener('click', () => {
    mobile_menu.classList.toggle('active');
})