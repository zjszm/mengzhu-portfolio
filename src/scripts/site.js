import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initSite() {
  gsap.registerPlugin(ScrollTrigger);
  const reveals = document.querySelectorAll('.reveal');
  gsap.fromTo('.hero-copy', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
  gsap.fromTo('.hero-art', { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, delay: 0.1, ease: 'power3.out' });
  reveals.forEach((element) => gsap.fromTo(element, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%' } }));
  gsap.to('.shape-main', { y: -18, rotation: 5, duration: 3.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.shape-small', { y: 16, rotation: -8, duration: 4.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
}
