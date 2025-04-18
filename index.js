
/* document.querySelector('.selected').addEventListener('click', function () {
    const options = document.querySelector('.options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.options li').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('.selected').textContent = item.textContent;
        document.querySelector('.options').style.display = 'none';
    });
}); */

const menu = document.querySelector('.header-nav');
console.log(menu);
const menuBtn = document.querySelector('.burger-menu');

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active-menu')
        menuBtn.classList.toggle('active-menu')
        body.classList.toggle('lock')
    })

    menu.querySelectorAll('.nav-menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active-menu')
            menuBtn.classList.remove('active-menu')
            body.classList.remove('lock')
        })
    })
}

const openPopUpCall = document.getElementById('open_popup');
const closePopUp = document.querySelector('.popup__close');
const popUpCall = document.querySelector('.popup-call');

openPopUpCall.addEventListener('click', function(e){
    e.preventDefault();
    popUpCall.classList.add('active-pop-up__call')
})

closePopUp.addEventListener('click', () => {
    popUpCall.classList.remove('active-pop-up__call')
})

