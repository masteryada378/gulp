var _yourEyes = {};
function initModule() {
    console.log('hello ZIR');


    function closeModal() {
        document.querySelector('.modal-form').classList.remove('open');
        document.querySelector('.cart-win__dashboard').classList.remove('open');

    }
    function openModal() {
        console.log('jdj')
        document.querySelector('.modal-form').classList.add('open');
        document.querySelector('.cart-win__dashboard').classList.add('open');
        document.querySelector('.cart-win__dashboard').addEventListener('click', closeModal);
        document.getElementById('modalFormClose').addEventListener('click', closeModal);

    }



    function menu() {
        let menuElement = document.querySelector('.mobil-menu__box');
        // let menuElement = document.getElementById('headerMenu');

        function cubSender(){
            let menuElementAtr = document.getElementById('headerMenu');

            for (let i = 0; i < menuElementAtr.children.length; i++) {
                if(menuElementAtr.children[i].children.length > 1 ) {
                    menuElementAtr.children[i].classList.add('full');
                }
            }

        }
        cubSender();


        function handlerMenu(event) {
            if(event.target.nodeName === 'A' 
                &&  !!event.target.nextElementSibling 
                &&  event.target.nextElementSibling.nodeName === 'UL') {
                    event.preventDefault();

                    
                    if(!!_yourEyes.lastAHover && (_yourEyes.lastAHover != event.target) ){
                        _yourEyes.lastAHover.nextElementSibling.classList.remove('menu-hover');
                        _yourEyes.lastParent.classList.remove('p-li-hover');
                    }
                    _yourEyes.lastAHover = event.target;
                    _yourEyes.lastParent = event.target.parentNode;
                    
                    _yourEyes.lastAHover.nextElementSibling.classList.toggle('menu-hover');
                    _yourEyes.lastParent.classList.toggle('p-li-hover');
            }
        }
        let searchIcon = document.getElementById('menuSearch');
        let searchSVG = searchIcon.getElementsByTagName('svg')[0];
        let searchInput = searchIcon.getElementsByTagName('input')[0];
        function searchFocus() {
            searchInput.focus();
        }
        searchSVG.addEventListener('click', searchFocus);
        menuElement.addEventListener('click', handlerMenu);
    }
    menu();
    _yourEyes.menuOpen = true;
    
    function menuOpen() {


        
        let fragment = document.createDocumentFragment();
        let headerElement = document.getElementById('header');
        let gamburgElement = headerElement.querySelector('.gamburg');
        let languige = headerElement.querySelector('.header__top-lang').cloneNode(true);
        let menu = headerElement.querySelector('.header__menu-box').cloneNode(true);
        let buttonOrd = headerElement.querySelector('.header__order').cloneNode(true);
        
        buttonOrd.addEventListener('click', openModal);
        
        let headerPhoneBox = headerElement.querySelector('.header__phone-box').cloneNode(true);
        let headerTime = headerElement.querySelector('.header__time').cloneNode(true);
        let headerTopSocial = headerElement.querySelector('.header__top-social').cloneNode(true);
        let krestik = headerElement.querySelector('#gamburg').cloneNode(true);
        fragment.appendChild(languige);
        fragment.appendChild(menu);
        fragment.appendChild(buttonOrd);
        fragment.appendChild(headerPhoneBox);
        fragment.appendChild(headerTime);
        fragment.appendChild(headerTopSocial);
        krestik.querySelector('.gamburg').classList.add('open');
        fragment.appendChild(krestik);
        let menuBox = headerElement.querySelector('.mobil-menu__box');
        menuBox.appendChild(fragment);
        _yourEyes.menuOpen = true;
      
        // gamburgElement.classList.toggle('open');
      
        menuBox.classList.toggle('open');

        krestik.addEventListener('click', function(){
            console.log('1')

            // krestik.querySelector('.gamburg').classList.remove('open');

            menuBox.classList.remove('open');

            menuBox.innerHTML = '';
        });
    }
    
    if(!!document.getElementById('gamburg')){
        document.getElementById('gamburg').addEventListener('click', menuOpen)
    }

    function initMask(element) {
    let phone = element;
    
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
    let allMaskPhone = document.querySelectorAll('.inputMaska');
    for (var i = 0; i < allMaskPhone.length; i++) {
        initMask(allMaskPhone[i]);
    }
    
    function initFormFront(element) {
        let dozTru = true;
        let forma = element;
        
        if(!!forma){
            let inputName = forma.querySelector('.inputName');
            let inputPhone = forma.querySelector('.inputMaska');
            let inputText = forma.querySelector('.inputText');
            let inputButton = forma.querySelector('.buttonS');

            inputButton.addEventListener('click', function(eventS){

                if(!!inputPhone.value.match(/^([+]?[0-9\s-\(\)]{3,25})*$/i)){
                    inputPhone.classList.remove('invalid');
                } else {
                    inputPhone.classList.add('invalid');
                }

                if(inputName.value.length < 4){
                    inputName.classList.add('invalid');
                } else {
                    inputName.classList.remove('invalid');
                }
                if (!!inputText){
                    if(inputText.value.length < 4){
                        inputText.classList.add('invalid');
                    } else {
                        inputText.classList.remove('invalid');
                    }
                }
                
                if(dozTru){
                    // eventS.preventDefault();
                }
            })
        }
        
        

    }
    let initFormFrontElement = document.querySelector('.form-order__box');
    initFormFront(initFormFrontElement);
    let initModal = document.querySelector('.modal-form__box');
    initFormFront(initModal);
    let initModalSimple = document.querySelector('.twocolpage__forma');
    initFormFront(initModalSimple);
    function initFormSlider(element) {
        let dozTru = true;
        let forma = element;
        
        if(!!forma){
            let inputName = forma.querySelector('.inputName');
            let inputPhone = forma.querySelector('.inputMaska');
            let inputText = forma.querySelector('.inputText');
            let inputButton = forma.querySelector('.buttonS');


            inputButton.addEventListener('click', function(eventS){
                if(!!inputPhone.value.match(/^([+]?[0-9\s-\(\)]{3,25})*$/i)){
                    inputPhone.classList.remove('invalid');
                    eventS.preventDefault();
                } else {
                    eventS.preventDefault();
                    inputPhone.classList.add('invalid');
                }
            })
        }
    }
    let elementsForm = document.querySelectorAll('.formSlider')
    for (var i = 0; i < elementsForm.length; i++) {
        initFormSlider(elementsForm[i]);
    }


    let elementsOrd = document.querySelectorAll('.openOrd')
    for (var i = 0; i < elementsOrd.length; i++) {
        elementsOrd[i].addEventListener('click',openModal)
    }

    function twocolNavBlock () {
        let textEl = document.querySelector('.twocolpage__nav-text');
        let priceEl = document.querySelector('.twocolpage__nav-price');
        let reviewsEl = document.querySelector('.twocolpage__nav-reviews');

        let textBtn = document.getElementById('twocolpageNavText'); 
        let priceBtn = document.getElementById('twocolpageNavPrice'); 
        let reviewsBtn = document.getElementById('twocolpageNavReviews');

        textBtn.addEventListener('click', function(){
            textBtn.classList.add('active');
            reviewsBtn.classList.remove('active');
            priceBtn.classList.remove('active');
            
            textEl.classList.add('active');
            priceEl.classList.remove('active');
            reviewsEl.classList.remove('active');
        })
        priceBtn.addEventListener('click', function(){
            priceBtn.classList.add('active');
            reviewsBtn.classList.remove('active');
            textBtn.classList.remove('active');
            
            
            priceEl.classList.add('active');
            textEl.classList.remove('active');
            reviewsEl.classList.remove('active');
        })
        reviewsBtn.addEventListener('click', function(){
            reviewsBtn.classList.add('active');
            priceBtn.classList.remove('active');
            textBtn.classList.remove('active');
            
            reviewsEl.classList.add('active');
            textEl.classList.remove('active');
            priceEl.classList.remove('active');
        })

    }
    if(!!document.getElementById('twocolpageNavText')){
        twocolNavBlock();
    }

}
document.addEventListener('DOMContentLoaded', initModule);