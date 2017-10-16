var kontrole = document.querySelectorAll('.kontrolni_dugmici');
for(var i=0; i<kontrole.length; i++){
    kontrole[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slajdovi .slika');
var currentSlide = 0;
var slideInterval = setInterval(sledecaSlika,2000);



function sledecaSlika(){
    idiNaSliku(currentSlide+1);
}

function prethodnaSlika(){
    idiNaSliku(currentSlide-1);
}

function idiNaSliku(n){    // omogućava prebacivanje na sledeću sliku
    slides[currentSlide].className = 'slika';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slika sada_se_prikazuje';
}


var playing = true;
var pauseButton = document.getElementById('pauza');

function pauzirajSlideshow(){
    pauseButton.innerHTML = '&#9658;'; // puštanje 
    playing = false;
    clearInterval(slideInterval);
}

function pustiSlideshow(){
    pauseButton.innerHTML = '&#10074;&#10074;'; // pauza
    playing = true;
    slideInterval = setInterval(sledecaSlika,2000);
}

pauseButton.onclick = function(){
    if(playing){ pauzirajSlideshow(); }
    else{ pustiSlideshow(); }
};

var next = document.getElementById('sledece');
var previous = document.getElementById('prethodno');

next.onclick = function(){
    pauzirajSlideshow();
    sledecaSlika();
};
previous.onclick = function(){
    pauzirajSlideshow();
    prethodnaSlika();
};