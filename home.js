// Add click event to all dropdown items
document.querySelectorAll('.interactive-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
  
      // Remove active state from all other items
      document.querySelectorAll('.interactive-item').forEach(el => {
        el.classList.remove('active-item');
      });
  
      // Add active state to the clicked item
      this.classList.add('active-item');
    });
  });
  