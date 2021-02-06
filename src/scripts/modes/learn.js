import { item } from '../route/route';
import { addEvent } from '../events/addEvent';
import { changeContentHtml } from './changeContentHtml';

export function learnMode(learn, play) {
  learn.style.transform = 'scale(2.3)';
  learn.style.color = 'yellow';
  play.style.color = 'black';
  play.style.transform = 'scale(1.5)';
  document.querySelectorAll('.card-body').forEach(el => {
    el.style.background = 'yellow';
  });
  localStorage.setItem('mode', 'learn');

  changeContentHtml();

  if (+item !== 0) {
    if (localStorage.getItem('repeatWords')) {
      addEvent(JSON.parse(localStorage.getItem('activeSlide')) * 2 + 1);
    } else {
      addEvent(+item);
    }
  }
}
