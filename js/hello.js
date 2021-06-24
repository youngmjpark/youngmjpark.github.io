const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.navbar-nav li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('navbar-active');
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');

    });

}

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
}}


wordChange();
navSlide();