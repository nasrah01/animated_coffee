import './sass/main.scss';
import * as Preloader from './js/preloader';
import * as landing from './js/landing';

const appController = () => {

    // preloader begins
    Preloader.preloadAnimation();

   // gsap animation for landing page
    landing.insertIcons();
    landing.mouse();
    landing.revealTitle();
    landing.primaryAnimate();
    landing.secondaryAnimate();
};

appController();