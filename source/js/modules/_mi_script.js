var _yourEyes = {};

function initModule() {
    console.log('hello ZIR');

    function menu() {
        let menuElement = document.getElementById('headerMenu');

        function handlerMenu(event) {
            if(event.target.nodeName === 'A' 
                &&  !!event.target.nextElementSibling 
                &&  event.target.nextElementSibling.nodeName === 'UL') {
                    if(!!_yourEyes.lastAHover){
                        _yourEyes.lastAHover.nextElementSibling.classList.remove('menu-hover');
                    }

                    _yourEyes.lastAHover = event.target;

                    _yourEyes.lastAHover.nextElementSibling.classList.add('menu-hover');
                
                console.dir(_yourEyes.lastAHover);
            }
        }

        function leveHandlerMenu(event) {
            // console.log('leveHandlerMenu', event.target);
            if(!!_yourEyes.lastAHover){
                // _yourEyes.lastAHover.nextElementSibling.classList.remove('menu-hover');
            }
        }
        menuElement.addEventListener('mouseover', handlerMenu);
        menuElement.addEventListener('mouseout', leveHandlerMenu);
    }
    menu();
    _yourEyes.menuOpen = true;
    
    function menuOpen() {


        
        var fragment = document.createDocumentFragment();
        let headerElement = document.getElementById('header');
        let gamburgElement = headerElement.querySelector('.gamburg');
        let languige = headerElement.querySelector('.header__top-lang').cloneNode(true);
        fragment.appendChild(languige);
        let menu = headerElement.querySelector('.header__menu-box').cloneNode(true);
        fragment.appendChild(menu);
        let buttonOrd = headerElement.querySelector('.header__order').cloneNode(true);
        fragment.appendChild(buttonOrd);
        let headerPhoneBox = headerElement.querySelector('.header__phone-box').cloneNode(true);
        fragment.appendChild(headerPhoneBox);
        let headerTime = headerElement.querySelector('.header__time').cloneNode(true);
        fragment.appendChild(headerTime);
        let headerTopSocial = headerElement.querySelector('.header__top-social').cloneNode(true);
        fragment.appendChild(headerTopSocial);
        let krestik = headerElement.querySelector('#gamburg').cloneNode(true);
        krestik.querySelector('.gamburg').classList.add('open');
        
        fragment.appendChild(krestik);

        let menuBox = headerElement.querySelector('.mobil-menu__box');

        menuBox.appendChild(fragment);
                
        _yourEyes.menuOpen = true;
        
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

}
document.addEventListener('DOMContentLoaded', initModule);