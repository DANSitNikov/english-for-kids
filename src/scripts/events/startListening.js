import { item } from '../route/route';
import cards from '../../assets/cards';
import { victory } from '../game/victoryWindow';
import { activePage } from '../header/active-page';
import { renderPage } from '../pages/renderPage';
import { loadAudio } from './loadAudio';

export function startListening() {
  let number = JSON.parse(localStorage.getItem('startListening'));
  let slot = document.querySelector('#content');
  const array = JSON.parse(localStorage.getItem('randomAudio'));

  if (number === array.length) {
    localStorage.removeItem('startListening');
    victory();
    setTimeout(() => {
      activePage(0);
      slot.innerHTML = renderPage(0).outerHTML;
      window.location.hash = '#page0';
      window.scrollTo(0, 0);
    }, 4000);
    localStorage.removeItem('oneGame');
  } else {
    loadAudio([array[+number]]);

    localStorage.setItem('prevAudio', JSON.stringify(array[+number]));
    number += 1;
    localStorage.setItem('startListening', JSON.stringify(number));
  }
}
