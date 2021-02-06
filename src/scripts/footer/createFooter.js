export function createFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  footer.innerHTML = `
    <a target="_blank" href="https://rs.school/js/"><img alt="rs_school" src="../src/assets/img/rs_school_js.svg"  width="80px" height="40px"></a>
    <h4 style="margin: 0">2020</h4>
    <a target="_blank" style="color: black" href="https://github.com/DANSitNikov?tab=repositories">by Sitnikov Daniil</a>
  `;

  return footer;
}
