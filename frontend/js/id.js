
  
    // Show or hide form based on application type
    document.getElementById('applicationType').addEventListener('change', function() {
      const form = document.getElementById('applicationForm');
      if (this.value === 'new' || this.value === 'reapply') {
        form.style.display = 'block';
      } else {
        form.style.display = 'none';
      }
    });

    // Handle form submission
    document.getElementById('idApplicationForm').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Your application has been submitted successfully!');
    });
  