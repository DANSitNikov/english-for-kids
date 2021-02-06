import { renderPage } from '../pages/renderPage';
import { item } from '../route/route';

export function changeContentHtml() {
  if (localStorage.getItem('repeatWords')) {
    document.querySelector('#content').innerHTML = renderPage(JSON.parse(localStorage.getItem('activeSlide')) * 2 + 1, JSON.parse(localStorage.getItem('activeSlide')) * 2 + 2, JSON.parse(localStorage.getItem('wordForRepeat'))).outerHTML;
  } else {
    document.querySelector('#content').innerHTML = renderPage(+item).outerHTML;
  }
}
