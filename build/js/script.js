"use strict";

var _yourEyes = {};

function initModule() {
  console.log('hello ZIR');

  function closeModal() {
    document.querySelector('.modal-form').classList.remove('open');
    document.querySelector('.cart-win__dashboard').classList.remove('open');
  }

  function openModal() {
    console.log('jdj');
    document.querySelector('.modal-form').classList.add('open');
    document.querySelector('.cart-win__dashboard').classList.add('open');
    document.querySelector('.cart-win__dashboard').addEventListener('click', closeModal);
    document.getElementById('modalFormClose').addEventListener('click', closeModal);
  }

  function menu() {
    var menuElement = document.querySelector('.mobil-menu__box'); // let menuElement = document.getElementById('headerMenu');

    function cubSender() {
      var menuElementAtr = document.getElementById('headerMenu');

      for (var _i = 0; _i < menuElementAtr.children.length; _i++) {
        console.log(menuElementAtr.children[_i].children.length);

        if (menuElementAtr.children[_i].children.length > 1) {
          menuElementAtr.children[_i].classList.add('full');
        }
      }
    }

    cubSender();

    function handlerMenu(event) {
      if (event.target.nodeName === 'A' && !!event.target.nextElementSibling && event.target.nextElementSibling.nodeName === 'UL') {
        event.preventDefault();

        if (!!_yourEyes.lastAHover && _yourEyes.lastAHover != event.target) {
          _yourEyes.lastAHover.nextElementSibling.classList.remove('menu-hover');
        }

        _yourEyes.lastAHover = event.target;

        _yourEyes.lastAHover.nextElementSibling.classList.toggle('menu-hover');
      }
    }

    menuElement.addEventListener('click', handlerMenu);
  }

  menu();
  _yourEyes.menuOpen = true;

  function menuOpen() {
    var fragment = document.createDocumentFragment();
    var headerElement = document.getElementById('header');
    var gamburgElement = headerElement.querySelector('.gamburg');
    var languige = headerElement.querySelector('.header__top-lang').cloneNode(true);
    var menu = headerElement.querySelector('.header__menu-box').cloneNode(true);
    var buttonOrd = headerElement.querySelector('.header__order').cloneNode(true);
    buttonOrd.addEventListener('click', openModal);
    var headerPhoneBox = headerElement.querySelector('.header__phone-box').cloneNode(true);
    var headerTime = headerElement.querySelector('.header__time').cloneNode(true);
    var headerTopSocial = headerElement.querySelector('.header__top-social').cloneNode(true);
    var krestik = headerElement.querySelector('#gamburg').cloneNode(true);
    fragment.appendChild(languige);
    fragment.appendChild(menu);
    fragment.appendChild(buttonOrd);
    fragment.appendChild(headerPhoneBox);
    fragment.appendChild(headerTime);
    fragment.appendChild(headerTopSocial);
    krestik.querySelector('.gamburg').classList.add('open');
    fragment.appendChild(krestik);
    var menuBox = headerElement.querySelector('.mobil-menu__box');
    menuBox.appendChild(fragment);
    _yourEyes.menuOpen = true;
    gamburgElement.classList.toggle('open');
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

  function initMask(element) {
    var phone = element;

    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    }

    function mask(event) {
      var matrix = this.defaultValue,
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
      def.length >= val.length && (val = def);
      matrix = matrix.replace(/[_\d]/g, function (a) {
        return val.charAt(i++) || "_";
      });
      this.value = matrix;
      i = matrix.lastIndexOf(val.substr(-1));
      i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
      setCursorPosition(i, this);
    }

    phone.addEventListener("input", mask, false);
  }

  var allMaskPhone = document.querySelectorAll('.inputMaska');

  for (var i = 0; i < allMaskPhone.length; i++) {
    initMask(allMaskPhone[i]);
  }

  function initFormFront(element) {
    var dozTru = true;
    var forma = element;

    if (!!forma) {
      var inputName = forma.querySelector('.inputName');
      var inputPhone = forma.querySelector('.inputMaska');
      var inputText = forma.querySelector('.inputText');
      var inputButton = forma.querySelector('.buttonS');
      inputButton.addEventListener('click', function (eventS) {
        if (!!inputPhone.value.match(/^([+]?[0-9\s-\(\)]{3,25})*$/i)) {
          inputPhone.classList.remove('invalid');
        } else {
          inputPhone.classList.add('invalid');
        }

        if (inputName.value.length < 4) {
          inputName.classList.add('invalid');
        } else {
          inputName.classList.remove('invalid');
        }

        if (!!inputText) {
          if (inputText.value.length < 4) {
            inputText.classList.add('invalid');
          } else {
            inputText.classList.remove('invalid');
          }
        }

        if (dozTru) {// eventS.preventDefault();
        }
      });
    }
  }

  var initFormFrontElement = document.querySelector('.form-order__box');
  initFormFront(initFormFrontElement);
  var initModal = document.querySelector('.modal-form__box');
  initFormFront(initModal);
  var initModalSimple = document.querySelector('.twocolpage__forma');
  initFormFront(initModalSimple);

  function initFormSlider(element) {
    var dozTru = true;
    var forma = element;

    if (!!forma) {
      var inputName = forma.querySelector('.inputName');
      var inputPhone = forma.querySelector('.inputMaska');
      var inputText = forma.querySelector('.inputText');
      var inputButton = forma.querySelector('.buttonS');
      inputButton.addEventListener('click', function (eventS) {
        if (!!inputPhone.value.match(/^([+]?[0-9\s-\(\)]{3,25})*$/i)) {
          inputPhone.classList.remove('invalid');
          eventS.preventDefault();
        } else {
          eventS.preventDefault();
          inputPhone.classList.add('invalid');
        }
      });
    }
  }

  var elementsForm = document.querySelectorAll('.formSlider');

  for (var i = 0; i < elementsForm.length; i++) {
    initFormSlider(elementsForm[i]);
  }

  var elementsOrd = document.querySelectorAll('.openOrd');
  console.log(elementsOrd);

  for (var i = 0; i < elementsOrd.length; i++) {
    console.log(elementsOrd[i]);
    elementsOrd[i].addEventListener('click', openModal);
  }

  function twocolNavBlock() {
    var textEl = document.querySelector('.twocolpage__nav-text');
    var priceEl = document.querySelector('.twocolpage__nav-price');
    var reviewsEl = document.querySelector('.twocolpage__nav-reviews');
    var textBtn = document.getElementById('twocolpageNavText');
    var priceBtn = document.getElementById('twocolpageNavPrice');
    var reviewsBtn = document.getElementById('twocolpageNavReviews');
    textBtn.addEventListener('click', function () {
      textBtn.classList.add('active');
      reviewsBtn.classList.remove('active');
      priceBtn.classList.remove('active');
      textEl.classList.add('active');
      priceEl.classList.remove('active');
      reviewsEl.classList.remove('active');
    });
    priceBtn.addEventListener('click', function () {
      priceBtn.classList.add('active');
      reviewsBtn.classList.remove('active');
      textBtn.classList.remove('active');
      priceEl.classList.add('active');
      textEl.classList.remove('active');
      reviewsEl.classList.remove('active');
    });
    reviewsBtn.addEventListener('click', function () {
      reviewsBtn.classList.add('active');
      priceBtn.classList.remove('active');
      textBtn.classList.remove('active');
      reviewsEl.classList.add('active');
      textEl.classList.remove('active');
      priceEl.classList.remove('active');
    });
  }

  if (!!document.getElementById('twocolpageNavText')) {
    twocolNavBlock();
  }
}

document.addEventListener('DOMContentLoaded', initModule);
//# sourceMappingURL=script.js.map
