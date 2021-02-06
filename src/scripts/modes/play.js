import { item } from '../route/route';
import { startGame } from '../events/startGame';
import { changeContentHtml } from './changeContentHtml';

export function playMode() {
  localStorage.setItem('mode', 'play');

  changeContentHtml();

  if (+item !== 0) {
    setTimeout(() => {
      startGame();
    }, 500);
  }
}

export function playModeActive(learn, play) {
  learn.style.transform = 'scale(1.5)';
  learn.style.color = 'black';
  play.style.color = 'red';
  play.style.transform = 'scale(2.3)';
  document.querySelectorAll('.card-body').forEach(el => {
    el.style.background = 'red';
  });
}
