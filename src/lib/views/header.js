const search = document.getElementById('search');
const searchWrapper = document.getElementById('search-wrapper');
const closeIcon = document.getElementById('close-icon');

// Input focus
search.onfocus = function () {
  searchWrapper.classList.add('search-expanded');
  this.addEventListener('transitionend', () => {
    closeIcon.style.display = 'block';
  });
};

// Input blur
search.onblur = () => {
  searchWrapper.classList.remove('search-expanded');
  closeIcon.classList.add('closing');
  this.addEventListener('transitionend', () => {
    closeIcon.classList.remove('closing');
    closeIcon.style.display = 'none';
  });
};

// Close
closeIcon.onclick = function () {
  this.classList.add('closing');
  document.activeElement.blur();
  setTimeout(() => {
    closeIcon.classList.remove('closing');
  }, 1000);
};
