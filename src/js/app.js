const drop = document.querySelector('#drop');
const preview = document.querySelector('#preview');

drop.addEventListener('change', (evt) => {
  const files = Array.from(evt.target.files);
  const container = document.createElement('div');
  container.classList.add('container');
  const prev = document.createElement('img');
  prev.src = URL.createObjectURL(files[0]);
  container.appendChild(prev);
  const btn = document.createElement('button');
  btn.textContent = 'x';
  btn.classList.add('remove');
  container.appendChild(btn);
  preview.appendChild(container);
  evt.target.value = null;
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    event.target.parentNode.remove();
  }
});
