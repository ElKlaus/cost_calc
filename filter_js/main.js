const searchInput = document.getElementById('search');
const rows = document.querySelectorAll('tbody tr');

const courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

const loadTable = (courses) => {
  const tableBody = courses.reduce(());

  for (const course of data) {
    tableBody += `<tr>
        <td>${item.name}</td>
        <td>${item.prices}</td>
      </tr>`
  }
  

  document.getElementById('table_body').innerHTML = tableBody;
}

searchInput.addEventListener('keyup', function(event) {
  const q = event.target.value;
  
  rows.forEach(row => {
    row.textContent.toLowerCase().includes(q)
    ? row.style.display = 'table-row'
    : (row.style.display = 'none');
  })
});