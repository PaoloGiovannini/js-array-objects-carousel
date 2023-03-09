const arrayImmagini = [
    {
        image: 'img/1.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/2.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/3.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/4.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/5.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const listaImmaginiDom = document.querySelector('.listaImmagini');
const containerWrapperDom = document.querySelector('.container-wrap');

let contenutoDiapositive = "";
let containerWrapperContenuto = "";
/*
for (let i = 0; i < arrayImmagini.length; i++) {
    const contenutoContenitoreImmagine = `<div class="contenitoreImmagine">
                                <img class="foto" src="${arrayImmagini[i]}">
                            </div>`;
    const nuovoContenutoContainerWrap = `<div class="thumb-wrapper">
                                            <img src="${arrayImmagini[i]}" alt="">
                                        </div>`;
    contenutoDiapositive += contenutoContenitoreImmagine; //aggiungo contenuto appena creato
    containerWrapperContenuto += nuovoContenutoContainerWrap;
}*/

arrayImmagini.forEach((elemento)=>{
    let contenutoContenitoreImmagine = `<div class="contenitoreImmagine">
                    	<img class ="foto" src="${elemento.image}" alt="">
						<div class="position-absolute">
							<h2>
								${elemento.title}
							</h2>
							<span>
								${elemento.text}
							</span>
						</div>
                	</div>`;
    const nuovoContenutoContainerWrap = `<div class="thumb-wrapper">
                                            <img src="${elemento.image}" alt="">
                                        </div>`;
    contenutoDiapositive += contenutoContenitoreImmagine; //aggiungo contenuto appena creato
    containerWrapperContenuto += nuovoContenutoContainerWrap;
})

listaImmaginiDom.innerHTML = contenutoDiapositive; //lo mostro nell'html
containerWrapperDom.innerHTML = containerWrapperContenuto

const contenitoreImmagineDom = document.getElementsByClassName('contenitoreImmagine'); //array di classi
const thumbsWrapperDom = document.getElementsByClassName('thumb-wrapper');

let immagineCorrente = 0; //decido la mia immagine corrente

contenitoreImmagineDom[immagineCorrente].classList.add('block'); //nell'immagine dove mi trovo gli aggiungo la classe block per renderla visibile
thumbsWrapperDom[immagineCorrente].classList.add('corrente');


const successivoDom = document.getElementById('successivo'); 

const precedenteDom = document.getElementById('precedente');

successivoDom.addEventListener('click', 
    function() {
        if (immagineCorrente < contenitoreImmagineDom.length - 1) {

            contenitoreImmagineDom[immagineCorrente].classList.remove('block');
            thumbsWrapperDom[immagineCorrente].classList.remove('corrente');
            immagineCorrente++;
            contenitoreImmagineDom[immagineCorrente].classList.add('block');
            thumbsWrapperDom[immagineCorrente].classList.add('corrente');

        }else{
            contenitoreImmagineDom[immagineCorrente].classList.remove('block');
            thumbsWrapperDom[immagineCorrente].classList.remove('corrente');
            immagineCorrente = 0;
            contenitoreImmagineDom[immagineCorrente].classList.add('block');
            thumbsWrapperDom[immagineCorrente].classList.add('corrente');
        }
    }
);

precedenteDom.addEventListener('click', 
    function() {
        if (immagineCorrente > 0) {

            contenitoreImmagineDom[immagineCorrente].classList.remove('block');
            thumbsWrapperDom[immagineCorrente].classList.remove('corrente');
            immagineCorrente--;
            contenitoreImmagineDom[immagineCorrente].classList.add('block');
            thumbsWrapperDom[immagineCorrente].classList.add('corrente');
            

        }else{
            contenitoreImmagineDom[immagineCorrente].classList.remove('block');
            thumbsWrapperDom[immagineCorrente].classList.remove('corrente');
            immagineCorrente = 4;
            contenitoreImmagineDom[immagineCorrente].classList.add('block');
            thumbsWrapperDom[immagineCorrente].classList.add('corrente');
        }
    }
);



