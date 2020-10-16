import { gsap } from "gsap";
import ScrollMagic from "scrollmagic"
import * as Icon from '../assets/sprite.svg';


export const mouse = () => {

    gsap.set(".cursor", {xPercent: -50, yPercent: -50});

    let links = document.querySelectorAll('.nav');
    const linkArr = Array.from(links);
    let cursor = document.querySelector(".cursor");
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let mouse = { x: pos.x, y: pos.y };
    let speed = .5;

    let xSetting = gsap.quickSetter(cursor, "x", "px");
    let ySetting = gsap.quickSetter(cursor, "y", "px");
    
    window.addEventListener("mousemove", e => {    
      mouse.x = e.x;
      mouse.y = e.y;  
    });

    linkArr.forEach(nav => {
      nav.addEventListener('mousemove', () => {
        gsap.to('.cursor', {duration: .5, scale: 3.5, opacity: .4});
      });
    });

    linkArr.forEach(nav => {
      nav.addEventListener('mouseleave', () => {
        gsap.to('.cursor', {duration: .5, scale: .8, ease:"power2.out", opacity: 1});
      });
    });
    
    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;
      xSetting(pos.x);
      ySetting(pos.y);
    });
    
};

export const revealTitle = () => {

  let reveal = gsap.timeline({delay: 6});

  reveal.from("#headline", {scaleY: 0, transformOrigin: "0% 50%"})
  reveal.to("#headline", {duration: .75, scale: 1, transformOrigin:"50% bottom"})
  reveal.from("#mini_headline", {opacity: 0, y: 100 }, "text");
  reveal.to("#mini_headline", {opacity: 1, y: 10 });
};

// image zoom using linear easing
export const primaryAnimate = () => {
  let image = document.querySelectorAll('.img');
  let cursor = document.querySelector('.cursor');

  image.forEach( pic => {
    pic.addEventListener('mousemove', () => {
      cursor.classList.add('image_cursor');
      gsap.to(cursor, {duration: .5, scale: 3.5, opacity: .5});
      gsap.to(pic, {duration: 1, scale: 1.1, ease: "power1.out"});
    });
    
    pic.addEventListener('mouseleave', () => {
      cursor.classList.remove('image_cursor');
      gsap.to(cursor, {duration: .5, scale: .8, ease: "power1.in", opacity: 1});
      gsap.to(pic, {duration: 1, scale: 1});
    });
  });
};

// parallax effect
export const secondaryAnimate = () => {
  const controller = new ScrollMagic.Controller();

  const effect = gsap.timeline();
  effect.to('.main_secondary-content', {duration: 2, y: '-20%', ease: 'Power0.easeNone'})
  effect.pause();

  new ScrollMagic.Scene({
    triggerElement: '.main_secondary',
    triggerHook: 1,
    duration: '100%'
  })
  .on("enter", function (e) {
    effect.play();
})
.on("leave", function (e) {
    effect.reverse();
})

  .addTo(controller); 
};

//SVG ICONS
export const insertIcons = () => {
        const cart = document.getElementById('cart');
        const arrow = document.querySelector('.main_gallery-shop');
        const heart = document.querySelector('.main_footer--end-text');
        const social = document.getElementById('social');

        const rendered = `<svg class="main_heading-banner-account--icon">
                        <use xlink:href="${Icon}#icon-shopping-cart"></use>
                        </svg>`;

        cart.insertAdjacentHTML('beforeend', rendered);

        const arrowRender = `<svg class="main_gallery-shop--icon">
                            <use xlink:href="${Icon}#icon-arrow-long-right"></use>
                            </svg>`;
        
        arrow.insertAdjacentHTML('beforeend', arrowRender);

        const heartRender = `<svg class="main_footer--end-icon">
                            <use xlink:href="${Icon}#icon-heart"></use>
                            </svg>`;

        heart.insertAdjacentHTML('afterend', heartRender);

        const facebook = `<a href="#" class="nav"><svg class="main_footer-content--social-icon">
        <use xlink:href="${Icon}#icon-facebook-with-circle"></use>
        </svg></a>`;
        social.insertAdjacentHTML('beforeend', facebook);

        const linkedin = `<a href="#" class="nav"><svg class="main_footer-content--social-icon">
        <use xlink:href="${Icon}#icon-linkedin-with-circle"></use>
        </svg></a>`;
        social.insertAdjacentHTML('beforeend', linkedin);

        const twitter = `<a href="#" class="nav"><svg class="main_footer-content--social-icon">
        <use xlink:href="${Icon}#icon-twitter-with-circle"></use>
        </svg></a>`;
        social.insertAdjacentHTML('beforeend', twitter);

        const pinterest = ` <a href="#" class="nav"><svg class="main_footer-content--social-icon">
        <use xlink:href="${Icon}#icon-pinterest-with-circle"></use>
        </svg></a>`;
        social.insertAdjacentHTML('beforeend', pinterest);
      };