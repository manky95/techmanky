/* Dento Care — script.js */
/* keep the year current */
document.getElementById('yr').textContent = new Date().getFullYear();

/* booking form → pre-filled WhatsApp message */
document.getElementById('book-form').addEventListener('submit', function(e){
  e.preventDefault();
  var f = e.target;
  var msg = 'Hi Dento Care, I\'d like to book an appointment.\n'
    + 'Name: ' + f.name.value.trim() + '\n'
    + 'Phone: ' + f.phone.value.trim() + '\n'
    + 'Preferred clinic: ' + f.clinic.value + '\n'
    + 'Treatment: ' + f.service.value
    + (f.message.value.trim() ? '\nNote: ' + f.message.value.trim() : '');
  window.open('https://wa.me/919860156435?text=' + encodeURIComponent(msg), '_blank', 'noopener');
});

/* close mobile menu after tapping a link */
document.querySelectorAll('#nav-links a').forEach(function(a){
  a.addEventListener('click', function(){ document.getElementById('nav-links').classList.remove('open'); });
});
