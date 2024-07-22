'use client';

export * from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import styles from './ConnectedGrid.module.scss';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

export default function ConnectedGrid({ gridContent }) {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const gridItems = document.querySelectorAll(`.${styles.gridItem}`);

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
      gridItems.forEach((item) => {
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
            item.querySelector(`.${styles.gridItemImg}`),
            {
              scale: 0,
              transformOrigin: `${originX}% 0%`,
            },
            {
              scale: 1,
            }
          )
          .fromTo(
            item.querySelector(`.${styles.gridItemImgInner}`),
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
            item.querySelector(`.${styles.gridItemCaptionCustom}`),
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

    initSmoothScrolling();
    scroll();
  });

  return (
    <div className={styles.grid}>
      {Object.keys(gridContent.images).map((key, index) => (
        <figure
          key={`projectImage${index}`}
          className={styles.gridItem}
          style={gridContent.images[key].style}
        >
          <div className={styles.gridItemImg}>
            <div className={styles.gridItemImgInner}></div>
            <Image
              src={gridContent.images[key].src}
              alt={gridContent.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes='(max-width: 1024px) 100vw, 50vw'
              priority
            />
          </div>
          {gridContent.images[key].caption && (
            <figcaption
              className={styles.gridItemCaptionCustom}
              style={{ left: 'calc(100vw / ( 8 / 4))' }}
            >
              <p>
                {gridContent.images[key].caption}
              </p>
            </figcaption>
          )}
        </figure>
      ))}

      {/* <figure
        className={styles.gridItem}
        style={{ '--r': 1, '--c': 1, '--s': 4 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            // style={{ backgroundImage: 'url(/1.jpg)' }}
          ></div>
          <Image src='/projects/masarycka-restaurant/1.jpg' alt='test' fill />
        </div>
        <figcaption
          className={styles.gridItemCaptionCustom}
          style={{ left: 'calc(100vw / ( 8 / 4))' }}
        >
          <p>
            Masarycka stands proudly as a recipient of prestigious awards, a
            testament to its exceptional design and culinary excellence. This
            revered establishment seamlesly blends the grandeur of the historic
            Imperial Restaurant with the contemporary allure of a modern station
            eatery, creating a truly unique dining defstination.
          </p>
        </figcaption>
      </figure>
      <figure
        className={styles.gridItem}
        style={{ '--r': 2, '--c': 5, '--s': 3 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/2.jpg)' }}
          ></div>
        </div>
        <figcaption className={styles.gridItemCaption}>
          <h3>Desert Serenity Suites</h3> <span>2022</span>
        </figcaption>
      </figure>
      <figure
        className={styles.gridItem}
        style={{ '--r': 3, '--c': 3, '--s': 2 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/3.jpg)' }}
          ></div>
        </div>
        <figcaption className={styles.gridItemCaption}>
          <h3>Sandscape Elegance</h3> <span>2024</span>
        </figcaption>
      </figure>
      <figure
        className={styles.gridItem}
        style={{ '--r': 4, '--c': 1, '--s': 2 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/4.jpg)' }}
          ></div>
        </div>
        <figcaption
          className={styles.gridItemCaptionCustom}
          style={{ left: 'calc(100vw / ( 8 / 2))' }}
        >
          <h3>Dune Mirage Retreat</h3> <span>2021</span>
          <p>
            Masarycka stands proudly as a recipient of prestigious awards, a
            testament to its exceptional design and culinary excellence. This
            revered establishment seamlesly blends the grandeur of the...
          </p>
        </figcaption>
      </figure>
      <figure
        className={styles.gridItem}
        style={{ '--r': 5, '--c': 3, '--s': 5 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/5.jpg)' }}
          ></div>
        </div>
        <figcaption className={styles.gridItemCaption}>
          <h3>Sahara Luxury Oasis</h3> <span>2023</span>
        </figcaption>
      </figure>
      <figure className={styles.gridItem} style={{ '--r': 6, '--c': 2 }}>
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/6.jpg)' }}
          ></div>
        </div>
        <figcaption className={styles.gridItemCaption}>
          <h3>Arabian Haven</h3> <span>2022</span>
        </figcaption>
      </figure>
      <figure
        className={styles.gridItem}
        style={{ '--r': 7, '--c': 3, '--s': 3 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/7.jpg)' }}
          ></div>
        </div>
        <figcaption className={styles.gridItemCaption}>
          <h3>Desert Dreamscape Lodges</h3> <span>2024</span>
        </figcaption>
      </figure>
      <figure
        className={styles.gridItem}
        style={{ '--r': 8, '--c': 6, '--s': 2 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/8.jpg)' }}
          ></div>
        </div>
        <figcaption className={styles.gridItemCaption}>
          <h3>Golden Sands Interiors</h3> <span>2021</span>
        </figcaption>
      </figure>
      <figure
        className={styles.gridItem}
        style={{ '--r': 9, '--c': 1, '--s': 5 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/9.jpg)' }}
          ></div>
        </div>
        <figcaption className={styles.gridItemCaption}>
          <h3>Desert Mirage Suites</h3> <span>2023</span>
        </figcaption>
      </figure>
      <figure
        className={styles.gridItem}
        style={{ '--r': 10, '--c': 6, '--s': 3 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/10.jpg)' }}
          ></div>
        </div>
        <figcaption className={styles.gridItemCaption}>
          <h3>Oasis Tranquility</h3> <span>2022</span>
        </figcaption>
      </figure>
      <figure
        className={styles.gridItem}
        style={{ '--r': 11, '--c': 4, '--s': 2 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/11.jpg)' }}
          ></div>
        </div>
        <figcaption className={styles.gridItemCaption}>
          <h3>Desert Zen Retreat</h3> <span>2024</span>
        </figcaption>
      </figure>
      <figure
        className={styles.gridItem}
        style={{ '--r': 12, '--c': 1, '--s': 3 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/12.jpg)' }}
          ></div>
        </div>
        <figcaption className={styles.gridItemCaption}>
          <h3>Sandscape Luxury</h3> <span>2021</span>
        </figcaption>
      </figure>
      <figure
        className={styles.gridItem}
        style={{ '--r': 13, '--c': 4, '--s': 5 }}
      >
        <div className={styles.gridItemImg}>
          <div
            className={styles.gridItemImgInner}
            style={{ backgroundImage: 'url(/13.jpg)' }}
          ></div>
        </div>
        <figcaption className={styles.gridItemCaption}>
          <h3>Desert Elegance Escapes</h3> <span>2023</span>
        </figcaption>
      </figure> */}
    </div>
  );
}
