'use client';

export * from 'lenis/react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function ConnectedGrid() {
  useEffect(() => {
    // const grid = document.querySelector('.grid');
    const gridItems = document.querySelectorAll('.grid__item');

    const initSmoothScrolling = () => {
      let lenis = new Lenis({
        lerp: 0.15,
        smoothWheel: true,
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const scroll = () => {
      const viewportHeight = window.innerHeight;
      const endValue = viewportHeight / 2;

      gridItems.forEach((item, index) => {
        const previousElementSibling = item.previousElementSibling;
        const isLeftSide =
          previousElementSibling &&
          item.offsetLeft + item.offsetWidth <=
            previousElementSibling.offsetLeft + 1;

        const originX = isLeftSide ? 100 : 0;

        gsap
          .timeline({
            defaults: {
              //duration: 1,
              ease: 'power4',
            },
            scrollTrigger: {
              trigger: item,
              start: 'top bottom-=15%',
              end: '+=100%',
              scrub: true,
            },
          })
          .fromTo(
            item.querySelector('.grid__item-img'),
            {
              scale: 0,
              transformOrigin: `${originX}% 0%`,
            },
            {
              scale: 1,
            }
          )
          .fromTo(
            item.querySelector('.grid__item-img-inner'),
            {
              scale: 5,
              transformOrigin: `${originX}% 0%`,
            },
            {
              scale: 1,
            },
            0
          )
          .fromTo(
            item.querySelector('.grid__item-caption'),
            {
              xPercent: () => (isLeftSide ? 100 : -100),
              opacity: 0,
            },
            {
              ease: 'power1',
              xPercent: 0,
              opacity: 1,
            },
            0
          );
      });
    };

    // preloadImages('.grid__item-img-inner').then(() => {
    initSmoothScrolling();
    scroll();
    document.body.classList.remove('loading');
    // });
  }, []);

  return (
    <main>
      <div className='grid'>
        <figure className='grid__item' style={{ '--r': 1, '--c': 1, '--s': 4 }}>
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(1.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption_custom' style={{left: 'calc(100vw / ( 8 / 4))'}}>
            <p>
              Masarycka stands proudly as a recipient of prestigious awards, a
              testament to its exceptional design and culinary excellence. This
              revered establishment seamlesly blends the grandeur of the
              historic Imperial Restaurant with the contemporary allure of a
              modern station eatery, creating a truly unique dining
              defstination.
            </p>
          </figcaption>
        </figure>
        <figure className='grid__item' style={{ '--r': 2, '--c': 5, '--s': 3 }}>
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(2.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption'>
            <h3>Desert Serenity Suites</h3> <span>2022</span>
          </figcaption>
        </figure>
        <figure className='grid__item' style={{ '--r': 3, '--c': 3, '--s': 2 }}>
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(3.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption'>
            <h3>Sandscape Elegance</h3> <span>2024</span>
          </figcaption>
        </figure>
        <figure className='grid__item' style={{ '--r': 4, '--c': 1, '--s': 2 }}>
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(4.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption_custom' style={{left: 'calc(100vw / ( 8 / 2))'}}>
            {/* <h3>Dune Mirage Retreat</h3> <span>2021</span> */}
            <p>
              Masarycka stands proudly as a recipient of prestigious awards, a
              testament to its exceptional design and culinary excellence. This
              revered establishment seamlesly blends the grandeur of the...
            </p>
          </figcaption>
        </figure>
        <figure className='grid__item' style={{ '--r': 5, '--c': 3, '--s': 5 }}>
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(5.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption'>
            <h3>Sahara Luxury Oasis</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure className='grid__item' style={{ '--r': 6, '--c': 2 }}>
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(6.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption'>
            <h3>Arabian Haven</h3> <span>2022</span>
          </figcaption>
        </figure>
        <figure className='grid__item' style={{ '--r': 7, '--c': 3, '--s': 3 }}>
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(7.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption'>
            <h3>Desert Dreamscape Lodges</h3> <span>2024</span>
          </figcaption>
        </figure>
        <figure className='grid__item' style={{ '--r': 8, '--c': 6, '--s': 2 }}>
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(8.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption'>
            <h3>Golden Sands Interiors</h3> <span>2021</span>
          </figcaption>
        </figure>
        <figure className='grid__item' style={{ '--r': 9, '--c': 1, '--s': 5 }}>
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(9.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption'>
            <h3>Desert Mirage Suites</h3> <span>2023</span>
          </figcaption>
        </figure>
        <figure
          className='grid__item'
          style={{ '--r': 10, '--c': 6, '--s': 3 }}
        >
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(10.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption'>
            <h3>Oasis Tranquility</h3> <span>2022</span>
          </figcaption>
        </figure>
        <figure
          className='grid__item'
          style={{ '--r': 11, '--c': 4, '--s': 2 }}
        >
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(11.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption'>
            <h3>Desert Zen Retreat</h3> <span>2024</span>
          </figcaption>
        </figure>
        <figure
          className='grid__item'
          style={{ '--r': 12, '--c': 1, '--s': 3 }}
        >
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(12.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption'>
            <h3>Sandscape Luxury</h3> <span>2021</span>
          </figcaption>
        </figure>
        <figure
          className='grid__item'
          style={{ '--r': 13, '--c': 4, '--s': 5 }}
        >
          <div className='grid__item-img'>
            <div
              className='grid__item-img-inner'
              style={{ backgroundImage: 'url(13.jpg)' }}
            ></div>
          </div>
          <figcaption className='grid__item-caption'>
            <h3>Desert Elegance Escapes</h3> <span>2023</span>
          </figcaption>
        </figure>
      </div>
    </main>
  );
}
