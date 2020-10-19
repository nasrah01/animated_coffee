import {gsap} from "gsap";

const load = document.querySelector('.preload');

const text = () => {
 let content = `<div class="preload_cont"><div class="preload_head">Addis Coffee</div></div>
                <div class="preload_line"></div>
                <div class="preload_cont"><div class="preload_text">Good from the ground up</div></div>`;

      load.insertAdjacentHTML("beforeend", content);
};

const textAnimate = () => {
   text();

   const reveal = gsap.timeline({delay: .5});

   reveal.from(".preload_line", { scaleX: 0, transformOrigin: "top center" });
   reveal.from(".preload_head", { duration: 0.75, y: 45 }, "text");
   reveal.from(".preload_text", { duration: 0.75, y: -45 }, "text");
   reveal.to(".preload_head, .preload_text, .preload_line", {duration: 2, opacity: 0, ease:"none"}, ">2");
}; 

export const preloadAnimation = () => {
   textAnimate();
   // preloader will ease out and the main page has a sliding reveal 
   const main = document.querySelector('.main');

   // settimeout for the transition between preload and main page
   window.addEventListener('load', () => {
      setTimeout( () => {
         gsap.timeline()
         .set(main, {className: 'main'})
         .to(load, {yPercent: 100, ease: 'Power4.easeInOut', duration: 1})
         .set(load, {className: 'hidden'}, '+=1')
      }, 5000)
   });
};
