var prev = document.getElementById('preview'),
    colori = document.getElementById('inputC'),
    rinputs = document.getElementsByClassName('rinputs'),
    numb = document.getElementById('numb'),
    rangeb = document.getElementById('rangeb'),
    r1 = document.getElementById('r1'),
    r2 = document.getElementById('r2'),
    r3 = document.getElementById('r3'),
    r4 = document.getElementById('r4'),
    hair = document.getElementById('hair'),
    eyes = document.getElementById('eyes'),
    nose = document.getElementById('nose'),
    mouth = document.getElementById('mouth'),
    hairI = 2,
    eyesI = 2,
    noseI = 2,
    mouthI = 2,
    disp = document.getElementById('display'),
    plusb = document.getElementById('plusb'),
    randomb = document.getElementById('randomb'),
    count = 1;


hair.src='img/hair1.png';
eyes.src='img/eyes1.png';
nose.src='img/nose1.png';
mouth.src='img/mouth1.png';


hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

randomb.addEventListener('click', function(){
    randomFace();
    
});

plusb.addEventListener('click', function(){
    createFace();
    
});



colori.addEventListener('change', function(){
    prev.style.backgroundColor = this.value;
    
});

r1.addEventListener('change', function(){
    hair.style.width = this.value+'%';
    
});

r2.addEventListener('change', function(){
    eyes.style.width = this.value+'%';
    
});

r3.addEventListener('change', function(){
    nose.style.width = this.value+'%';
    
});

r4.addEventListener('change', function(){
    mouth.style.width = this.value+'%';
    
});

rangeb.addEventListener('click', function(){
    changeType('range');
    
});

numb.addEventListener('click', function(){
    changeType('number');
    
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeType(input) {
    console.log()
    r1.type=input;
    r2.type=input;
    r3.type=input;
    r4.type=input;
}



function randomFace()   {
    hairI = Math.floor(Math.random() * 3) + 1;
    eyesI = Math.floor(Math.random() * 3) + 1;
    noseI = Math.floor(Math.random() * 3) + 1;
    mouthI = Math.floor(Math.random() * 3) + 1;
    hair.src='img/hair'+hairI+'.png';
    eyes.src='img/eyes'+eyesI+'.png';
    nose.src='img/nose'+noseI+'.png';
    mouth.src='img/mouth'+mouthI+'.png';
    prev.style.backgroundColor = getRandomColor();
    
    r1.value = Math.floor(Math.random() * 70);
    r2.value = Math.floor(Math.random() * 40);
    r3.value = Math.floor(Math.random() * 30);
    r4.value = Math.floor(Math.random() * 35);
}

function createFace()   {
    
    var face = document.createElement('div'),
        fhair = document.createElement('img'),
        fmouth = document.createElement('img'),
        fnose = document.createElement('img'),
        feyes = document.createElement('img');
    
    face.style.width = '100px';
    face.style.height = '100px';
    
    fhair.src = hair.src;
    fmouth.src = mouth.src;
    fnose.src = nose.src;
    feyes.src = eyes.src;
    
    face.style.backgroundColor = prev.style.backgroundColor;
    
    fhair.style.width = hair.style.width;
    fmouth.style.width = mouth.style.width;
    fnose.style.width = nose.style.width;
    feyes.style.width = eyes.style.width;
    
    fhair.style.top = hair.style.top;
    fmouth.style.top = mouth.style.top;
    fnose.style.top = nose.style.top;
    feyes.style.top = eyes.style.top;
    
    fhair.className = 'nitems';
    fmouth.className = 'nitems';
    fnose.className = 'nitems';
    feyes.className = 'nitems';
    face.className = 'face';
        face.appendChild(fhair);
    face.appendChild(fmouth);
    face.appendChild(fnose);
    face.appendChild(feyes);
    
    disp.appendChild(face); 

    face.addEventListener('click', function(){
     
    disp.removeChild(face);
    
    });

}

autocreateS.addEventListener('click', function(){
    
    timer = setInterval(function(){
          
    randomFaces();
    }, 500);
});

autocreateE.addEventListener('click', function(){
        
    clearInterval(timer);
    
});

function randomFaces()   {
    
    var face = document.createElement('div'),
        fhair = document.createElement('img'),
        fmouth = document.createElement('img'),
        fnose = document.createElement('img'),
        feyes = document.createElement('img'),
        hairw = 0,
        mouthw = 0,
        nosew = 0,
        eyesw = 0;
    
    hairI = Math.floor(Math.random() * 3) + 1;
    eyesI = Math.floor(Math.random() * 3) + 1;
    noseI = Math.floor(Math.random() * 3) + 1;
    mouthI = Math.floor(Math.random() * 3) + 1;
    
    face.style.width = '100px';
    face.style.height = '100px';
    

    fhair.src='img/hair'+hairI+'.png';
    feyes.src='img/eyes'+eyesI+'.png';
    fnose.src='img/nose'+noseI+'.png';
    fmouth.src='img/mouth'+mouthI+'.png';
    face.style.backgroundColor = getRandomColor();
    
    hairw = Math.floor(Math.random() * 70);
    mouthw = Math.floor(Math.random() * 40);
    nosew = Math.floor(Math.random() * 30);
    eyesw = Math.floor(Math.random() * 35);
    
    fhair.style.width = hairw + '%';
    fmouth.style.width = mouthw + '%';
    fnose.style.width = nosew + '%';
    feyes.style.width = eyesw + '%';
    
    
    fhair.style.top = hair.style.top;
    fmouth.style.top = mouth.style.top;
    fnose.style.top = nose.style.top;
    feyes.style.top = eyes.style.top;
    
    fhair.className = 'nitems';
    fmouth.className = 'nitems';
    fnose.className = 'nitems';
    feyes.className = 'nitems';
    face.className = 'face';
    
        face.appendChild(fhair);
    face.appendChild(fmouth);
    face.appendChild(fnose);
    face.appendChild(feyes);
    
    disp.appendChild(face); 
    
    face.addEventListener('click', function(){
     
    disp.removeChild(face);
    
    });
    
    document.getElementById('settings').addEventListener('click', function(){
     
    r1.value = hairw;
    r2.value = mouthw;
    r3.value = nosew;
    r4.value = eyesw;
    hair.src='img/hair'+hairI+'.png';
    eyes.src='img/eyes'+eyesI+'.png';
    nose.src='img/nose'+noseI+'.png';
    mouth.src='img/mouth'+mouthI+'.png';      
    
    prev.style.backgroundColor = face.style.backgroundColor
    });


}