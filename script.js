
document.addEventListener('DOMContentLoaded', function() {
    var loader = document.getElementById('loader-div');
    var mainContainer = document.querySelector('.main_container');
  
    // Show the loader before the page starts
    loader.style.display = 'flex';
  
    setTimeout(function() {
      loader.style.display = 'none';
      mainContainer.style.display = 'flex';
    }, 2000);
  });
document.getElementById('questionForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
      if (data[key]) {
          if (!Array.isArray(data[key])) {
              data[key] = [data[key]];
          }
          data[key].push(value);
      } else {
          data[key] = value;
      }
  });
  let db = JSON.parse(localStorage.getItem('db')) || [];
  db.push(data);
  localStorage.setItem('db', JSON.stringify(db));
  window.location.href = 'food.html';
});
  
  
