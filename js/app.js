document.addEventListener('DOMContentLoaded', function() {
    function switchSection(sectionToShow) {
      const sections = document.querySelectorAll('.pic-container');
      sections.forEach(section => {
        if (section.id === sectionToShow) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    }
  
    document.getElementById('mv-posts').addEventListener('click', function() {
      switchSection('pics-posts');
    });
    document.getElementById('mv-saved').addEventListener('click', function() {
      switchSection('pics-saved');
    });
    document.getElementById('mv-tagged').addEventListener('click', function() {
      switchSection('pics-tagged');
    });
});
