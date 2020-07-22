let toggleState = 'hidden';

function toggleNav() {
    let burger = document.querySelector('.burger-container');
    let sidebar = document.querySelector('.sidebar');

    if (toggleState === 'hidden') {
    sidebar.style.width = '200px';
    toggleState = 'visible';
    } else {
    sidebar.style.width = '0px';
    toggleState = 'hidden';
    }
}

function toggleMenu() {
    let burger = document.querySelector('.burger-container');
    let sidebar = document.querySelector('.sidebar');
    let menuLi = document.querySelector('.menu-li');
    let menu = document.querySelector('.menu');
    let contactLi = document.querySelector('.contact-li');
    let contact = document.querySelector('.contact');
    let home = document.querySelector('.home');

    menu.style.display = 'block';
    contact.style.display = 'none';
    home.style.marginTop = 'calc(-100vh + 5rem)';
    sidebar.style.width = '0px';
    toggleState = 'hidden';
}

function toggleContact() {
    let burger = document.querySelector('.burger-container');
    let sidebar = document.querySelector('.sidebar');
    let menuLi = document.querySelector('.menu-li');
    let menu = document.querySelector('.menu');
    let contactLi = document.querySelector('.contact-li');
    let contact = document.querySelector('.contact');
    let home = document.querySelector('.home');

    menu.style.display = 'none'
    contact.style.display = 'block';
    home.style.marginTop = 'calc(-100vh + 5rem)';
    sidebar.style.width = '0px';
    toggleState = 'hidden';
}

function toggleYelp() {
    let burger = document.querySelector('.burger-container');
    let sidebar = document.querySelector('.sidebar');
    let menuLi = document.querySelector('.menu-li');
    let menu = document.querySelector('.menu');
    let contactLi = document.querySelector('.contact-li');
    let contact = document.querySelector('.contact');
    let home = document.querySelector('.home');
    let yelpLi = document.querySelector('.yelp-li')

    menu.style.display = 'none'
    contact.style.display = 'none';
    home.style.marginTop = '0';
    sidebar.style.width = '0px';
    toggleState = 'hidden';
}

function toggleLogo() {
    let burger = document.querySelector('.burger-container');
    let sidebar = document.querySelector('.sidebar');
    let menuLi = document.querySelector('.menu-li');
    let menu = document.querySelector('.menu');
    let contactLi = document.querySelector('.contact-li');
    let contact = document.querySelector('.contact');
    let home = document.querySelector('.home');

    menu.style.display = 'none'
    contact.style.display = 'none';
    home.style.marginTop = '0';
    sidebar.style.width = '0px';
    toggleState = 'hidden';
}