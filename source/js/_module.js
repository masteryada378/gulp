var _yourEyes = {};
function initModule() {
    console.log('hello ZIR');
    function menu() {
        let menuElement = document.querySelector('.mobil-menu__box');
        // let menuElement = document.getElementById('headerMenu');
        function handlerMenu(event) {
            if(event.target.nodeName === 'A' 
                &&  !!event.target.nextElementSibling 
                &&  event.target.nextElementSibling.nodeName === 'UL') {
                    event.preventDefault();
                    
                    if(!!_yourEyes.lastAHover && (_yourEyes.lastAHover != event.target) ){
                        console.log('1')
                        _yourEyes.lastAHover.nextElementSibling.classList.remove('menu-hover');
                    }
                    _yourEyes.lastAHover = event.target;
                    _yourEyes.lastAHover.nextElementSibling.classList.toggle('menu-hover');
                    console.log('2')
            }
        }
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
        gamburgElement.classList.toggle('open');
        menuBox.classList.toggle('open');

        krestik.addEventListener('click', function(){
            krestik.querySelector('.gamburg').classList.remove('open');
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
        console.log(forma);
        
        if(!!forma){
            let inputName = forma.querySelector('.inputName');
            let inputPhone = forma.querySelector('.inputMaska');
            let inputText = forma.querySelector('.inputText');
            let inputButton = forma.querySelector('.buttonS');
            console.log(inputName,inputPhone,inputText);

            


            inputButton.addEventListener('click', function(eventS){
                console.log(eventS);

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
                if(inputText.value.length < 4){
                    inputText.classList.add('invalid');
                } else {
                    inputText.classList.remove('invalid');
                }
                
                if(dozTru){
                    // eventS.preventDefault();
                }
            })
        }
        
        

    }
    let initFormFrontElement = document.querySelector('.form-order__box');
    initFormFront(initFormFrontElement);


    function initFormSlider(element) {
        let dozTru = true;
        let forma = element;
        console.log(forma);
        
        if(!!forma){
            let inputName = forma.querySelector('.inputName');
            let inputPhone = forma.querySelector('.inputMaska');
            let inputText = forma.querySelector('.inputText');
            let inputButton = forma.querySelector('.buttonS');
            console.log(inputName,inputPhone,inputText);

            


            inputButton.addEventListener('click', function(eventS){
                if(!!inputPhone.value.match(/^([+]?[0-9\s-\(\)]{3,25})*$/i)){
                    console.log('if');
                    inputPhone.classList.remove('invalid');
                    eventS.preventDefault();
                } else {
                    eventS.preventDefault();
                    console.log('else');
                    inputPhone.classList.add('invalid');
                }
            })
        }
    }
    let elementsForm = document.querySelectorAll('.formSlider')
    for (var i = 0; i < elementsForm.length; i++) {
        initFormSlider(elementsForm[i]);
    }


}
document.addEventListener('DOMContentLoaded', initModule);