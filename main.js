import './style.css'

const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', (e) => {
  if (dropdown.classList.contains('closed')) {
    dropdown.classList.remove('closed')
  } else {
    dropdown.classList.add('closed')    
  }
})

// console.log(product)
const searchButton = document.getElementById('searchButton');
        const closeButton = document.getElementById('closeButton');
        const searchBar = document.getElementById('searchBar');
        const navbar = document.getElementById('navbar');

        // Add click event listeners to the buttons
        searchButton.addEventListener('click', function() {
            searchBar.style.display = 'block'; // Show the search bar
            navbar.style.display = 'none'; // Hide the navbar
        });

        closeButton.addEventListener('click', function() {
            searchBar.style.display = 'none'; // Hide the search bar
            navbar.style.display = 'flex'; // Show the navbar
        });
   



