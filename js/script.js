document.body.onload = () => {
    let preloader = document.querySelector('#page_preloader')
    if (!preloader.classList.contains('done')) {
        preloader.classList.add('done')
    }
}

const headerBurger = document.querySelector('.header_burger');
const headerMenu = document.querySelector('.header_menu');
const body = document.querySelector('body')
const headerLink = document.querySelector('.header_link')

function clickBurger() {
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active');
    body.classList.toggle('lock');
}

function clickHeaderLink() {
    headerMenu.classList.remove('active');
    headerBurger.classList.remove('active');
    body.classList.remove('lock');
}

const tabClick = document.querySelectorAll('.list')
const tabsItems = document.querySelectorAll('.cards')

tabClick.forEach(function (item) {
    item.addEventListener('click', function () {
        let curentBtn = item
        let tabId = curentBtn.getAttribute('data-tab')
        let curentTab = document.querySelector(tabId)



        tabClick.forEach(function (item) {
            item.classList.remove('active')
        })

        tabsItems.forEach(function (item) {
            item.classList.remove('active')
        })

        curentBtn.classList.add('active')
        curentTab.classList.add('active')
    })
})

const popupCopytxt = document.querySelector('.popup_copytxt')

function copyToClipboard(text) {
    var copytext = document.createElement('input')
    if (typeof text == 'undefined') copytext.value = window.location.href
    else copytext.value = text
    document.body.appendChild(copytext)
    copytext.select()
    document.execCommand('copy')
    document.body.removeChild(copytext)
}

document.querySelector('.btn_share').addEventListener('click', function () {
    copyToClipboard("https://timurzubcenko.github.io/Portfolio/")    // текст нужно писать обязательно в кавычках
    popupCopytxt.classList.add('active')
});

window.addEventListener('scroll', function () {
    popupCopytxt.classList.remove('active')
})

const btnFollow = document.querySelector('#btn')

function clickFollow() {
    window.scroll({
        top: 10000,
        behavior: "smooth",
    })
}

AOS.init();
