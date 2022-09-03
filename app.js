//Creating a timeline 
const tl = gsap.timeline({
    defaults: {duration:0.75, ease:Power3.easeOut},
}); 

tl.fromTo('.hero-img', {scale: 1.3, borderRadius: "0rem"},{
    scale: 1,
    borderRadius: "2rem",
    dely: 0.35, 
    //longer duration applied as elastic easing make the elements move relatively quickly
    duration: 2.5,
    ease: "elastic.out(1.5,1)"
}
); 

//Animating the subheding and each of the words seperately 
//Will start running within when the previous animation is at the 20%
//CTA will run in the order one after the another 
tl.fromTo('.cta1', {x:"100%", opacity: 0.5}, {x:0, opacity: 1}, "<20%"); 
tl.fromTo('.cta3', {x:"-100%", opacity: 0.5}, {x:0, opacity: 1}, "<20%"); 
tl.fromTo('.cta2', {y:"100%", opacity: 0.5}, {y:0, opacity: 1}, "<20%"); 

tl.fromTo('.cta4', {x:"100%", opacity: 0.5}, {x:0, opacity: 1}, "<20%"); 
tl.fromTo('.cta6', {x:"-100%", opacity: 0.5}, {x:0, opacity: 1}, "<20%"); 
tl.fromTo('.cta5', {y:"100%", opacity: 0.5}, {y:0, opacity: 1}, "<20%"); 

//button animation 
//Adding < symbol to sync up the animation with a previous (cta5) animation so they finish at the same time
tl.fromTo('.cta-btn', {y:20, opacity: 0}, {y:0, opacity: 1}, "<")


//Split text alterative 
const logo = document.querySelector('.logo'); 
//grabbing each of the letters
const letters = logo.textContent.split("");

//clearing the h1 content
logo.textContent = "";

//adding the letters and generating a span element for each of the letter
letters.forEach(letter => {
    logo.innerHTML += '<span class="letter">' + letter + '<span>'; 
}); 

//Animating each letter for the logo
gsap.set('.letter', {display: 'inline-block'}); 
//Adding stagger property to animate each letter seperately 
gsap.fromTo('.letter', {y:'100%'}, {y:0, delay: 2, stagger: 0.05, ease: 'back.out(3)'})
