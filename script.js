const mazda626 = document.getElementById('car1');
const mazda626show = document.querySelector('.mazda626');
const mazda323 = document.getElementById('car2');
const mazda323show = document.querySelector('.mazda323');
const mazda626a = document.getElementById('car3');
const mazda626ashow = document.querySelector('.mazda626a');
const dodgeram = document.getElementById('car4');
const dodgeramshow = document.querySelector('.dodgeram');
const fordexpedition = document.getElementById('car5');
const fordexpeditionshow = document.querySelector('.fordexpedition');
const fordexplorer = document.getElementById('car6');
const fordexplorershow = document.querySelector('.fordexplorer');
const minicooper = document.getElementById('car7');
const minicoopershow = document.querySelector('.minicooper');
const fordtransit = document.getElementById('car8');
const fordtransitshow = document.querySelector('.fordtransit');

mazda626.addEventListener('click', (e) => {
  mazda626show.classList.remove('noshow');
  setTimeout(
    () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
    5000
  );
});
mazda323.addEventListener('click', (e) => {
  mazda323show.classList.remove('noshow');
  setTimeout(
    () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
    7000
  );
});
mazda626a.addEventListener('click', (e) => {
  mazda626ashow.classList.remove('noshow');
  setTimeout(
    () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
    7000
  );
});
dodgeram.addEventListener('click', (e) => {
  dodgeramshow.classList.remove('noshow');
  setTimeout(
    () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
    7000
  );
});
fordexpedition.addEventListener('click', (e) => {
  fordexpeditionshow.classList.remove('noshow');
  setTimeout(
    () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
    7000
  );
});
fordexplorer.addEventListener('click', (e) => {
  fordexplorershow.classList.remove('noshow');
  setTimeout(
    () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
    7000
  );
});
minicooper.addEventListener('click', (e) => {
  minicoopershow.classList.remove('noshow');
  setTimeout(
    () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
    7000
  );
});
fordtransit.addEventListener('click', (e) => {
  fordtransitshow.classList.remove('noshow');
  setTimeout(
    () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
    7000
  );
});
