    //nav//   
const menuHamburguer = document.querySelector('.hamburguer');
const lineOne = document.querySelector('.line1');
const lineTwo = document.querySelector('.line2');
const lineThree = document.querySelector('.line3');
const navList = document.querySelector('.nav-list');
const navContain = document.querySelector('.nav-contain');
const logo = document.querySelector('.logo');

menuHamburguer.addEventListener('click', () => {
    lineOne.classList.toggle('activeline1');
    lineTwo.classList.toggle('activeline2');
    lineThree.classList.toggle('activeline3');
    navList.classList.toggle('nav-menu-visible');
    navContain.classList.toggle('nav-contain-visible');  
    logo.classList.toggle('logo-activo');  
});
//nav//   

//slide//
const slideContain = document.querySelector('.slide-contain');
const punto = document.querySelectorAll('.punto');
let sliderSections = document.querySelectorAll('.slide-master');
let sliderSectionsLast = sliderSections[sliderSections.length - 1];
const left = document.querySelector('#btn-left');
const right = document.querySelector('#btn-right');

slideContain.insertAdjacentElement('afterbegin', sliderSectionsLast );

function Next() { 
    let sliderSectionsFirts = document.querySelectorAll('.slide-master')[0];      
    slideContain.style.transform = 'translateX(-66.666%)';
    slideContain.style.transition = 'all 0.5s ease-in-out';    

    setTimeout(() => {
        slideContain.style.transition = 'none';
        slideContain.insertAdjacentElement('beforeend', sliderSectionsFirts);
        slideContain.style.transform  = 'translateX(-33.333%)'; 
},500);
}

function Prev() { 
    let sliderSections = document.querySelectorAll('.slide-master');
    let sliderSectionsLast = sliderSections[sliderSections.length - 1];    
    slideContain.style.transform = 'translateX(0%)';
    slideContain.style.transition = 'all 0.5s ease-in-out'; 

    setTimeout(() => {
        slideContain.style.transition = 'none';
        slideContain.insertAdjacentElement('afterbegin', sliderSectionsLast);        
        slideContain.style.transform = 'translateX(-33.333%)';
},500);
}

setInterval (function () {
    Next(); 
},30000);

right.addEventListener('click', function() { 
    Next() 
});

left.addEventListener('click', function() { 
    Prev() 
});
//slide//
















      
  
    









