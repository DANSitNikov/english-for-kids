import cards from '../../assets/cards';
import { item } from '../route/route';

export function loadAudio(argument) {
  let audio = new Audio();
  if (localStorage.getItem('repeatWords')) {
    audio.src = `../src/assets/audio/${[JSON.parse(localStorage.getItem('wordForRepeat'))[argument]]}.mp3`;
  } else {
    audio.src = `../src/assets/${cards[item][argument].audioSrc}`;
  }
  audio.autoplay = true;
}
