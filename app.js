

const pumpLength = document.querySelector('#pump-length');
const pumpWidth = document.querySelector('#pump-width');

const penisLength = document.querySelector('#penis-length');
const penisWidth = document.querySelector('#penis-width');

const pumpImage = document.querySelector('#pump-image');

const penisImage = document.querySelector('.visual');



//changing of pump size for input length

    pumpLength.oninput = function () {
        if( pumpLength.value == '12' && pumpWidth.value == '1.75'){
            pumpImage.src = '/img/12inch/12-175.png';
        } else if(pumpLength.value == '12' && pumpWidth.value == '1.93'){
            pumpImage.src = "/img/12inch/12-193.png";
        } else if(pumpLength.value == '12' && pumpWidth.value == '2.32'){
            pumpImage.src = "/img/12inch/12-232.png";
        } else if(pumpLength.value == '12' && pumpWidth.value == '2.5'){
            pumpImage.src = "/img/12inch/12-25.png";
        } else if(pumpLength.value == '9' && pumpWidth.value == '1.75'){
            pumpImage.src = "/img/9inch/9-175.png";
        }  else if(pumpLength.value == '9' && pumpWidth.value == '1.93'){
            pumpImage.src = "/img/9inch/9-193.png";
        }  else if(pumpLength.value == '9' && pumpWidth.value == '2.32'){
            pumpImage.src = "/img/9inch/9-232.png";
        }  else if(pumpLength.value == '9' && pumpWidth.value == '2.5'){
            pumpImage.src = "/img/9inch/25.png";
        }
    };

    //changing of pump size for input width

    pumpWidth.oninput = function (){
        if( pumpLength.value == '12' && pumpWidth.value == '1.75'){
            pumpImage.src = 'https://sharedalbums.b-cdn.net/cd02e24c-4bf8-49a4-8388-782428b5d229.png?class=display';
        } else if(pumpLength.value == '12' && pumpWidth.value == '1.93'){
            pumpImage.src = "https://sharedalbums.b-cdn.net/6dd48a8e-8e48-40f1-8a47-f8ea6ca1aada.png?class=display";
        } else if(pumpLength.value == '12' && pumpWidth.value == '2.32'){
            pumpImage.src = "https://sharedalbums.b-cdn.net/c482b253-7f9a-4610-8013-8e58f7438247.png?class=display";
        } else if(pumpLength.value == '12' && pumpWidth.value == '2.5'){
            pumpImage.src = "https://sharedalbums.b-cdn.net/66a6ad44-4e0d-42d4-8552-8ecaea84a6a3.png?class=display";
        } else if(pumpLength.value == '9' && pumpWidth.value == '1.75'){
            pumpImage.src = "https://sharedalbums.b-cdn.net/45b41e18-e77d-489f-9175-1862d7ea6ac0.png?class=display";
        }  else if(pumpLength.value == '9' && pumpWidth.value == '1.93'){
            pumpImage.src = "https://sharedalbums.b-cdn.net/6ab8a089-4069-4e85-bd37-e3e7c540be12.png?class=display";
        }  else if(pumpLength.value == '9' && pumpWidth.value == '2.32'){
            pumpImage.src = "https://sharedalbums.b-cdn.net/9b54cf73-2594-41c1-b4a4-55be1a0c7c85.png?class=display";
        }  else if(pumpLength.value == '9' && pumpWidth.value == '2.5'){
            pumpImage.src = "https://sharedalbums.b-cdn.net/2e3b545f-e5b9-46ed-aa8f-f3ac4dbfa1d1.png?class=display";
        }
    };
    

    //changing penis size by input length

    penisLength.oninput = function(){

        penisImage.style.height = `${penisLength.value * 30}px`;
        
    };

    //changing penis width by input width

    penisWidth.oninput = function(){
        
        penisImage.style.width = `${penisWidth.value * 42}px`;
    }