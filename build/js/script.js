"use strict";

var _yourEyes = {};

function initModule() {
  console.log('hello ZIR');

  function menu() {
    var menuElement = document.getElementById('headerMenu');

    function handlerMenu(event) {
      if (event.target.nodeName === 'A' && !!event.target.nextElementSibling && event.target.nextElementSibling.nodeName === 'UL') {
        if (!!_yourEyes.lastAHover) {
          _yourEyes.lastAHover.nextElementSibling.classList.remove('menu-hover');
        }

        _yourEyes.lastAHover = event.target;

        _yourEyes.lastAHover.nextElementSibling.classList.add('menu-hover');

        console.dir(_yourEyes.lastAHover);
      }
    }

    function leveHandlerMenu(event) {
      // console.log('leveHandlerMenu', event.target);
      if (!!_yourEyes.lastAHover) {// _yourEyes.lastAHover.nextElementSibling.classList.remove('menu-hover');
      }
    }

    menuElement.addEventListener('mouseover', handlerMenu);
    menuElement.addEventListener('mouseout', leveHandlerMenu);
  }

  menu();
  _yourEyes.menuOpen = true;

  function menuOpen() {
    var fragment = document.createDocumentFragment();
    var headerElement = document.getElementById('header');
    var gamburgElement = headerElement.querySelector('.gamburg');
    var languige = headerElement.querySelector('.header__top-lang').cloneNode(true);
    fragment.appendChild(languige);
    var menu = headerElement.querySelector('.header__menu-box').cloneNode(true);
    fragment.appendChild(menu);
    var buttonOrd = headerElement.querySelector('.header__order').cloneNode(true);
    fragment.appendChild(buttonOrd);
    var headerPhoneBox = headerElement.querySelector('.header__phone-box').cloneNode(true);
    fragment.appendChild(headerPhoneBox);
    var headerTime = headerElement.querySelector('.header__time').cloneNode(true);
    fragment.appendChild(headerTime);
    var headerTopSocial = headerElement.querySelector('.header__top-social').cloneNode(true);
    fragment.appendChild(headerTopSocial);
    var krestik = headerElement.querySelector('#gamburg').cloneNode(true);
    krestik.querySelector('.gamburg').classList.add('open');
    fragment.appendChild(krestik);
    var menuBox = headerElement.querySelector('.mobil-menu__box');
    menuBox.appendChild(fragment);
    _yourEyes.menuOpen = true;
    menuBox.classList.toggle('open');
    krestik.addEventListener('click', function () {
      krestik.querySelector('.gamburg').classList.remove('open');
      menuBox.classList.remove('open');
      menuBox.innerHTML = '';
    });
  }

  if (!!document.getElementById('gamburg')) {
    document.getElementById('gamburg').addEventListener('click', menuOpen);
  }
}

document.addEventListener('DOMContentLoaded', initModule);
//# sourceMappingURL=script.js.map
