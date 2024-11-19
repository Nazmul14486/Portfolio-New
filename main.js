 // Collapse the navbar when a link is clicked
 const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
 const navbarToggler = document.querySelector('.navbar-toggler');
 const navbarCollapse = document.querySelector('#navbarNav');

 navLinks.forEach(link => {
   link.addEventListener('click', () => {
     if (navbarToggler.getAttribute('aria-expanded') === 'true') {
       navbarToggler.click(); // Collapse the navbar
     }
   });
 });

 // Collapse the navbar when clicking outside of it
 document.addEventListener('click', (event) => {
   const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
   const isTogglerExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

   if (!isClickInsideNavbar && isTogglerExpanded) {
     navbarToggler.click(); // Collapse the navbar
   }
 });