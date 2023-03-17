const showMoreContent = document.querySelector('.about');
const showMoreButton = showMoreContent.querySelector('.about__button');
const hiddenText = showMoreContent.querySelector('.about__additional-text');

const activateShowMore = () => {
  showMoreButton.addEventListener('click', () => {
    showMoreButton.classList.toggle('is-open');

    if (showMoreButton.classList.contains('is-open')) {
      showMoreButton.textContent = 'Свернуть';
      hiddenText.style.height = `${hiddenText.scrollHeight}px`;
    } else {
      showMoreButton.textContent = 'Подробнее';
      hiddenText.style.height = '0px';
    }
  });
};

export {activateShowMore};
