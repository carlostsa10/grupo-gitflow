const input = document.getElementById('filtro-matricula');
const trs = [...document.querySelectorAll('#lista tbody tr')];

input.addEventListener('input', () => {
  const search = input.value.toLowerCase();
  trs.forEach(el => {
    const matches = el.textContent.toLowerCase().includes(search);
    el.style.display = matches ? 'block' : 'none';
  });
});