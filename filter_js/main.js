const searchInput = document.getElementById('search_from');
const rows = document.querySelectorAll('tbody tr');
const priceCells = document.querySelectorAll("#table_body > tr > td:nth-child(2)");
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
  const tableBody = courses.reduce((acc, item) => {
    const row = acc + `<tr>
        <td>${item.name}</td>
        <td>${item.prices}</td>
      </tr>`;

    return row;
  }, '');

  document.getElementById('table_body').innerHTML = tableBody;
};

// window.onload = () => {
//   loadTable(courses);
// };

searchInput.addEventListener('keyup', function(event) {
  const target = event.target;
  const from = target.value;

  rows.forEach(row => {
    const price = row.querySelectorAll("td:nth-child(2)")[0].innerHTML;

    console.log(typeof from, typeof price);

    // row.textContent.toLowerCase().includes(q)
    Number(price) >= Number(from)
    ? row.style.display = 'table-row'
    : (row.style.display = 'none');
  })
});




// console.log(priceCells);