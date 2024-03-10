const contentHeader = () => {
  const breakpoint = window.matchMedia('(max-width: 919px)');
  const searchText = document.querySelector('.header__search--text');
  const location = document.querySelector('.header__location');
  const postBanya = document.querySelector('.header__postBanya');

  if (breakpoint.matches === true) {
    searchText.innerText = 'Поиск';
    location.style.display = 'none';
    postBanya.style.display = 'none';
  } else if (breakpoint.matches === false) {
    searchText.innerText = 'Поиск бани';
    location.style.display = 'flex';
    postBanya.style.display = 'inline-block';
  }
};

contentHeader();

window.addEventListener('resize', contentHeader);

export {contentHeader};
