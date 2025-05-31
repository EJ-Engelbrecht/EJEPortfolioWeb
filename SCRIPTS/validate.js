(function () {
  'use strict';
  window.addEventListener('load', function () {
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        // ✅ Strict email validation
        const emailInput = form.querySelector('#email');
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(emailInput.value)) {
          emailInput.setCustomValidity('Invalid email format');
        } else {
          emailInput.setCustomValidity('');
        }

        // ✅ Trigger validation
        if (!form.checkValidity()) {
          event.stopPropagation();
          form.classList.add('was-validated');
        } else {
          // ✅ Show success message
          const successMessage = document.getElementById('form-success');
          if (successMessage) {
            successMessage.classList.remove('d-none');
          }

          // ✅ Reset the form
          form.reset();
          form.classList.remove('was-validated');

          // ✅ Hide red borders and error messages
          const inputs = form.querySelectorAll('.form-control');
          inputs.forEach(input => {
            input.classList.remove('is-invalid');
          });

          const feedbacks = form.querySelectorAll('.invalid-feedback');
          feedbacks.forEach(fb => fb.style.display = 'none');
        }
      }, false);
    });
  });
})();
