

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
            pumpImage.src = "/img/9inch/9-25.png";
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