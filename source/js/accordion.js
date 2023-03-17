const accordionContents = document.querySelectorAll('.accordion__content');
const mediaQuery = window.matchMedia('(min-width: 768px)');

const hideContent = (indexOpenContent) => {
  accordionContents.forEach((item, index) => {
    const header = item.querySelector('.accordion__header');
    const content = item.querySelector('.accordion__group-list');

    if (indexOpenContent !== index) {
      header.classList.remove('is-open');
      header.classList.add('is-close');
      content.style.height = '0px';
    }
  });
};

const resetHeight = (content, header) => {
  window.addEventListener('resize', () => {
    if (mediaQuery.matches) {
      content.style.height = null;
      if (content.classList.contains('accordion__group-list--opened')) {
        header.classList.add('is-open');
        header.classList.remove('is-close');
      } else {
        header.classList.remove('is-open');
        header.classList.add('is-close');
      }
    }
  });
};

const activateAccordion = () => {
  accordionContents.forEach((item, index) => {
    const header = item.querySelector('.accordion__header');
    const content = item.querySelector('.accordion__group-list');

    header.addEventListener('click', () => {
      header.classList.toggle('is-open');
      header.classList.toggle('is-close');

      if (header.classList.contains('is-open')) {
        content.style.height = `${content.scrollHeight}px`;
      } else {
        content.style.height = '0px';
      }

      // при клике открыть содержимое закрывает соседнее если было открыто
      hideContent(index);
    });

    // обнуление высоты при изменении размера экрана
    resetHeight(content, header);
  });
};

export {activateAccordion};
