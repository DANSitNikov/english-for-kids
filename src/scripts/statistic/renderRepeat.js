import { renderPage } from '../pages/renderPage';

export function repeatWords(wordsForRepeat) {
  window.location.hash = '#difficultWords';
  const content = document.querySelector('#content');

  localStorage.setItem('wordForRepeat', JSON.stringify(wordsForRepeat));
  content.innerHTML = renderPage(JSON.parse(localStorage.getItem('activeSlide')) * 2 + 1, JSON.parse(localStorage.getItem('activeSlide')) * 2 + 2, wordsForRepeat).outerHTML;
}
