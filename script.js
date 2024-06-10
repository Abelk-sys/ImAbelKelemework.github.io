let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')

            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
function updateProgressBar(id, percentage) {
    var progressBar = document.getElementById(id);
    progressBar.style.width = percentage + '%';
    progressBar.textContent = percentage + '%';
  }
  
  // Example usage: Update the progress bars to different values after 1 second
  setTimeout(function() {
    updateProgressBar('progress-bar1', 70);
    updateProgressBar('progress-bar2', 50);
    updateProgressBar('progress-bar3', 90);
  }, 1000);

 