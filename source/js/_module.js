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

}
document.addEventListener('DOMContentLoaded', initModule);