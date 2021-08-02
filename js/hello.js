const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/*opening nav*/
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*closing nav*/
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*nav closing after menu is clicked*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Opening work*/
const workContent = document.getElementsByClassName('work_content'),
      workHeader = document.querySelectorAll('.work_header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < workContent.length; i++) {
        workContent[i].className = 'work_content work_close'
    }
    if(itemClass === 'work_content work_close') {
        this.parentNode.className = 'work_content work_open'
    }
}

workHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-mode'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const wordChange = () => {
    const text = ["¡Hola!", "Bonjour!","안녕하세요!", "こんにちは!", "Hello!"];
    var counter = 0;
    const hello = document.getElementById("changeText");
    var inst = setInterval(change, 600);

    function change() {
    hello.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter=0;
    }
}
}

wordChange();
