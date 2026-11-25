// 1. Menu mobile : ouvre/ferme la navigation quand on touche le bouton "Menu"
const bouton = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

if (bouton && menu) {
  bouton.addEventListener('click', () => {
    const ouvert = menu.classList.toggle('open');
    bouton.setAttribute('aria-expanded', ouvert);
  });
  // Referme le menu après un clic sur un lien
  menu.querySelectorAll('a').forEach((lien) => {
    lien.addEventListener('click', () => {
      menu.classList.remove('open');
      bouton.setAttribute('aria-expanded', 'false');
    });
  });
}

// 2. Met en évidence le jour actuel dans le tableau des horaires
const aujourdHui = new Date().getDay(); // 0 = dimanche, 1 = lundi...
const ligne = document.querySelector(`.hours tr[data-day="${aujourdHui}"]`);
if (ligne) ligne.classList.add('today');

// 3. Affiche l'année en cours dans le pied de page
const annee = document.getElementById('year');
if (annee) annee.textContent = new Date().getFullYear();
