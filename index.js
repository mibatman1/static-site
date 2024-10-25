const btn = document.getElementById('SubmitQuery');

document.getElementById('testform').addEventListener('submit', function(event) {
   event.preventDefault();
   btn.value = 'Sending...';

   const serviceID = 'YOUR SERVICE ID';
   const templateID = 'YOUR TEMPLATE ID';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'BOOK A SITE VISIT';
      alert('Sent!');
    }, (err) => {
      btn.value = 'BOOK A SITE VISIT';
      alert(JSON.stringify(err));
    });
});
