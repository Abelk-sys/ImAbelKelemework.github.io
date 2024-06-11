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
    updateProgressBar('progress-bar1', 80);
    updateProgressBar('progress-bar2', 70);
    updateProgressBar('progress-bar3', 70);
    updateProgressBar('progress-bar4', 90);
    updateProgressBar('progress-bar5', 60);
    updateProgressBar('progress-bar6', 100);
    
  }, 1000);

   

  function sendMail(){
    var params = {
      name : document.getElementById("fullName").value,
      email : document.getElementById("email_id").value,
      subject : document.getElementById("subject_for").value,
      message : document.getElementById("message").value,
      number : document.getElementById("Phone_no").value,
      
    }
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Check if form is valid
      if (this.checkValidity()) {
        // Debugging log
        console.log('Form is valid');
  
        // Extract form data
        const formData = new FormData(this);
        console.log('Form Data:');
        formData.forEach((value, key) => console.log(key, value));
  
        // Send form data using EmailJS
        emailjs.send('service_dv7ala3', 'template_a0gw3z8', params)
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            // Reset form after successful submission
            document.getElementById('contact-form').reset();
          }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message: ' + JSON.stringify(error));
          });
      } else {
        // Debugging log
        console.log('Form is invalid');
        alert('Please fill in all required fields.');
      }
    });
  
     /*emailjs.send("service_dv7ala3", "template_a0gw3z8", params).then(function (res){
        alert("Message Sent Successfully! " + res.status);
      })*/ 
  }

 