document.addEventListener('DOMContentLoaded', function() {
const pumpLength = document.querySelector('#pump-length');
const pumpWidth = document.querySelector('#pump-width');

const penisLength = document.querySelector('#penis-length');
const penisWidth = document.querySelector('#penis-width');

const pumpImage = document.querySelector('#pump-image');

const penisImage = document.querySelector('.visual');

const countLength = document.querySelector('.countLength');
const countWidth = document.querySelector('.countWidth');
const penisDiam = document. querySelector('#diam_value');

const correct = document.querySelector('.status__correct');
const wrong = document.querySelector('.status__wrong');







//changing of pump size for input length

    pumpLength.oninput = function () {
        if( pumpLength.value == '12' && pumpWidth.value == '1.75'){
            pumpImage.src = 'https://cdn.shopify.com/s/files/1/0682/2700/6773/files/12-175.png?v=1681195962';
        } else if(pumpLength.value == '12' && pumpWidth.value == '1.93'){
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/12-193.png?v=1681195961";
        } else if(pumpLength.value == '12' && pumpWidth.value == '2.32'){
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/12-232.png?v=1681195961";
        } else if(pumpLength.value == '12' && pumpWidth.value == '2.5'){
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/12-25.png?v=1681195962";
        } else if(pumpLength.value == '9' && pumpWidth.value == '1.75'){
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/9-175.png?v=1681195923";
            penisImage.style.height = `${penisLength.value * 37}px`;
        }  else if(pumpLength.value == '9' && pumpWidth.value == '1.93'){
            penisImage.style.height = `${penisLength.value * 37}px`;
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/12-193.png?v=1681195961";
        }  else if(pumpLength.value == '9' && pumpWidth.value == '2.32'){
            penisImage.style.height = `${penisLength.value * 37}px`;
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/9-232.png?v=1681195944";
        }  else if(pumpLength.value == '9' && pumpWidth.value == '2.5'){
            penisImage.style.height = `${penisLength.value * 37}px`;
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/9-25.png?v=1681195878";
        }


        const lengthMeasure = pumpLength.value - penisLength.value;
        const widthMeasure = pumpWidth.value - penisWidth.value;

        if (lengthMeasure < 2 || (widthMeasure < 0.5 || widthMeasure > 1)){
            correct.classList.add('hidden');
            wrong.classList.remove('hidden');
        } else if(lengthMeasure >= 2 || (widthMeasure >= 0.5 || widthMeasure <= 1)){
            correct.classList.remove('hidden');
            wrong.classList.add('hidden');
        }

        if(pumpLength.value == '9'){
            
            penisLength.max = 9;
            penisLength.value = 9;
            
        }else if(pumpLength.value == '12'){
            
            penisLength.max = 12;
        } 

        
    };

    //changing of pump size for input width

    pumpWidth.oninput = function (){
        if( pumpLength.value == '12' && pumpWidth.value == '1.75'){
            pumpImage.src = 'https://cdn.shopify.com/s/files/1/0682/2700/6773/files/12-175.png?v=1681195962';
        } else if(pumpLength.value == '12' && pumpWidth.value == '1.93'){
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/12-193.png?v=1681195961";
        } else if(pumpLength.value == '12' && pumpWidth.value == '2.32'){
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/12-232.png?v=1681195961";
        } else if(pumpLength.value == '12' && pumpWidth.value == '2.5'){
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/12-25.png?v=1681195962";
        } else if(pumpLength.value == '9' && pumpWidth.value == '1.75'){
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/9-175.png?v=1681195923";
        }  else if(pumpLength.value == '9' && pumpWidth.value == '1.93'){
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/9-193.png?v=1681195961";
        }  else if(pumpLength.value == '9' && pumpWidth.value == '2.32'){
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/9-232.png?v=1681195944";
        }  else if(pumpLength.value == '9' && pumpWidth.value == '2.5'){
            pumpImage.src = "https://cdn.shopify.com/s/files/1/0682/2700/6773/files/9-25.png?v=1681195878";
        }


        const lengthMeasure = pumpLength.value - penisLength.value;
        const widthMeasure = pumpWidth.value - penisWidth.value;

        if (lengthMeasure < 2 || (widthMeasure < 0.5 || widthMeasure > 1)){
            correct.classList.add('hidden');
            wrong.classList.remove('hidden');
        } else if(lengthMeasure >= 2 || (widthMeasure >= 0.5 || widthMeasure <= 1)){
            correct.classList.remove('hidden');
            wrong.classList.add('hidden');
        }
        
    };
    

    //changing penis size by input length

    penisLength.oninput = function(){
        if(pumpLength.value == '9'){
            penisImage.style.height = `${penisLength.value * 30}px`;
            penisLength.max = 9;
        }else if(pumpLength.value == '12'){
            penisImage.style.height = `${penisLength.value * 30}px`;
            penisLength.max = 12;
        }
        
        

        // change to cm and back
        const switcher = document.getElementById("switcher");
        if (switcher.checked) {
            
            countLength.innerHTML = `${(penisLength.value * 2.54).toFixed(2)} cm`;
        } else{
            countLength.innerHTML = `${penisLength.value} inch`;
        }

        //showing the correct or wrong sizes
        
        const lengthMeasure = pumpLength.value - penisLength.value;
        const widthMeasure = pumpWidth.value - penisWidth.value;

        if (lengthMeasure < 2 || (widthMeasure < 0.5 || widthMeasure > 1)){
            correct.classList.add('hidden');
            wrong.classList.remove('hidden');
        } else if(lengthMeasure >= 2 || (widthMeasure >= 0.5 || widthMeasure <= 1)){
            correct.classList.remove('hidden');
            wrong.classList.add('hidden');
        }

        
        
    };

    //changing penis width by input width

    penisWidth.oninput = function(){
        
        penisImage.style.width = `${penisWidth.value * 42}px`;

        const circumference = Math.PI * penisWidth.value;

        penisDiam.innerHTML = `${penisWidth.value}`;
        
        
        // change to cm and back
        const switcher = document.getElementById("switcher");
        if (switcher.checked) {
            const circumference = Math.PI * penisWidth.value;
            countWidth.innerHTML = `${(circumference.toFixed(2) * 2.54).toFixed(2)} cm`;
        } else{
            countWidth.innerHTML = `${circumference.toFixed(2)} inches`;
        }
        



        //showing the correct or wrong sizes


        const lengthMeasure = pumpLength.value - penisLength.value;
        const widthMeasure = pumpWidth.value - penisWidth.value;
        if (lengthMeasure < 2 || (widthMeasure < 0.5 || widthMeasure > 1)){
            correct.classList.add('hidden');
            wrong.classList.remove('hidden');
        } else if(lengthMeasure >= 2 || (widthMeasure >= 0.5 || widthMeasure <= 1)){
            correct.classList.remove('hidden');
            wrong.classList.add('hidden');
        }
    }

    
//toggle switcher



  const switcher = document.getElementById("switcher");
  const activeLabel = document.querySelector(".active-label");
  const inactiveLabel = document.querySelector(".inactive-label");
  
  switcher.addEventListener("change", function() {
    if (this.checked) {
        
      activeLabel.style.color = "#ccc";
      inactiveLabel.style.color = "#2196F3";
      // Add code to convert inches to cm
      
      //circum
      const circumference = Math.PI * penisWidth.value;
      countWidth.innerHTML = `${(circumference.toFixed(2) * 2.54).toFixed(2)} cm`;
      //length penis
      countLength.innerHTML = `${(penisLength.value * 2.54).toFixed(2)} cm`;

        //pump to cm
      const tocm = document.querySelectorAll('.tocm');
      
      tocm.forEach(item =>{
        
        const value = item.textContent.trim();
        const newValue = (parseFloat(value) * 2.54).toFixed(2);
        item.textContent = `${newValue} cm`;
        
      });
      
    } else {

        const tocm = document.querySelectorAll('.tocm');
      
      tocm.forEach(item =>{
        
        const value = item.textContent.trim();
        const newValue = (parseFloat(value) / 2.54).toFixed(2);
        item.textContent = `${newValue} inch`;
        
      });


      activeLabel.style.color = "#2196F3";
      inactiveLabel.style.color = "#ccc";
      // Add code to convert cm to inches
      
      //circum
      const circumference = Math.PI * penisWidth.value;
      countWidth.innerHTML = `${circumference.toFixed(2)} inches`;
      //length penis
      countLength.innerHTML = `${penisLength.value} inch`;
    }
    
    // Add code to visually show that the toggle switcher has switched
    const slider = document.querySelector(".slider");
    slider.classList.toggle("switched");
  });







    
    
  });
  

