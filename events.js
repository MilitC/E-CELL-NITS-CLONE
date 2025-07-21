const cards  = document.querySelectorAll('.event-card');
const modal  = document.getElementById('moduleModal');
const title  = document.getElementById('modalTitle');
const list   = document.getElementById('modulesList');
const closeBtn = modal.querySelector('.close');

cards.forEach(card=>{
  card.addEventListener('click',()=>{
    /* populate content */
    const modules = card.dataset.modules.split(',');
    title.textContent = card.dataset.name;
    list.innerHTML = modules.map(m=>`<li>${m}</li>`).join('');

    /* show modal */
    modal.classList.remove('hidden');
    document.body.style.overflow='hidden';     // lock page scroll
  });
});

function hideModal(){
  modal.classList.add('hidden');
  document.body.style.overflow='';             // restore scroll
}

closeBtn.addEventListener('click', hideModal);
modal.addEventListener('click', e=>{
  if(e.target===modal) hideModal();            // click outside content
});
