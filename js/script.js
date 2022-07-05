const accordionTogglers = document.querySelectorAll('.accordion__title'),
  activeClass = 'active';

function hideAccordions(elements) {
  elements.forEach((element) => {
    element.classList.remove(activeClass);
    element.nextElementSibling.style.maxHeight = '0px';
  });
}

function showAccordions(elements) {
  hideAccordions(elements);

  elements.forEach((element) => {
    element.addEventListener('click', function () {
      if (this.classList.contains(activeClass)) {
        this.classList.remove(activeClass);
        this.nextElementSibling.style.maxHeight = '0px';
      } else if (this) {
        hideAccordions(elements);
        this.classList.add(activeClass);
        this.nextElementSibling.style.maxHeight =
          this.nextElementSibling.firstElementChild.offsetHeight + 'px';
      }
    });
  });
}

showAccordions(accordionTogglers);
