const showMoreContent = document.querySelector('.about');
const showMoreButton = showMoreContent.querySelector('.about__button');
const hiddenText = showMoreContent.querySelector('.about__additional-text');
const hiddenTextMobile = showMoreContent.querySelector('.about__text-hidden');
const mediaQuery = window.matchMedia('(max-width: 767px)');

const activateShowMore = () => {
  showMoreButton.addEventListener('click', () => {
    showMoreButton.classList.toggle('is-open');

    if (showMoreButton.classList.contains('is-open')) {
      showMoreButton.textContent = 'Свернуть';
      hiddenText.style.height = `${hiddenText.scrollHeight}px`;
    } else {
      showMoreButton.textContent = 'Подробнее';
      hiddenTextMobile.style.display = null;
      hiddenText.style.height = '0px';
    }

    if (showMoreButton.classList.contains('is-open') && mediaQuery.matches) {
      hiddenTextMobile.style.display = 'inline';
    }
  });
};

export {activateShowMore};
