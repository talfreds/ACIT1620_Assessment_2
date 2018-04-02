/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

hair.addEventListener('click', function(){
    changeHair();
    
});


eyes.addEventListener('click', function(){
    changeEyes();
    
});

nose.addEventListener('click', function(){
    changeNose();
    
});

mouth.addEventListener('click', function(){
    changeMouth();
    
});

function changeHair() {
    hair.src='img/hair'+hairI+'.png';
    hairI++;
    
    if (hairI >= 4)  {
        hairI = 1;
    }
    
}

function changeEyes() {
    eyes.src='img/eyes'+eyesI+'.png';
    eyesI++;
    if (eyesI > 3)  {
        eyesI = 1;
    }
}

function changeNose() {
    
    nose.src='img/nose'+noseI+'.png';
    noseI++;    
    if (noseI >= 4)  {
        noseI = 1;
    }
}
function changeMouth() {
    
    mouth.src='img/mouth'+mouthI+'.png';
    mouthI++;
    if (mouthI >= 4)  {
        mouthI = 1;
    }
}
