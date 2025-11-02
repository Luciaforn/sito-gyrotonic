
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// MODIFICA 1: Ascolta 'touchstart' invece di 'click'
menuBtn.addEventListener('touchstart', (e) => {
  // MODIFICA 2: Questo è FONDAMENTALE. 
  // Impedisce al browser di eseguire altre azioni (come lo zoom)
  // e di "emettere" un finto 'click' 300ms dopo,
  // che altrimenti chiuderebbe il menu subito dopo averlo aperto.
  e.preventDefault(); 
  
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

// chiude il menu quando si clicca un link
document.querySelectorAll("#menu a").forEach(link => {
  // MODIFICA 3: Usiamo 'touchstart' anche qui per coerenza
  link.addEventListener("touchstart", () => {
    // Non usiamo preventDefault() qui, perché vogliamo che il link funzioni!
    menuBtn.classList.remove("active");
    menu.classList.remove("active");
  });
});