/* ! Card zoom on scroll animation */

const lastCard = document.querySelector('.card.scroll');
const spacer = document.querySelector('.card-spacer');
const pinnedSections = gsap.utils.toArray('.pinned');

pinnedSections.forEach((section, index, sections) => {
  let card = section.querySelector(".card-content");

  let nextSection = sections[index + 1] || lastCard;
  let endScalePoint = 'top+=${nextSection.offsetTop - section.offsetTop} top';

  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: 
      index === sections.length 
      ? '+=${lastCard.offsetHeight / 2]' 
      : spacer.offsetTop - window.innerHeight,
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });

  gsap.fromTo (card, {scale: 1}, {
    scale: 0.5,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end:  endScalePoint,
      scrub: 1,
    },

  });

});
  
