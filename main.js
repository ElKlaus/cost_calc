const searchInput = document.getElementById('search');
const rows = document.querySelectorAll('tbody tr');


// console.log(rows);

searchInput.addEventListener('keyup', function(event) {

  const q = event.target.value;

  
  rows.forEach(row => {
    console.log(row);

    row.textContent.toLowerCase().includes(q)
    ? row.style.display = 'table-row'
    : (row.style.display = 'none');
  })
});