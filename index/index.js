const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');

menuBtn.addEventListener('click', function() {
navList.classList.toggle('active')
document.body.classList.toggle('menu-open')
})

const projectModal = document.querySelector('.project-modal');
const projectOpenBtn = document.querySelectorAll('.project-open-btn');
const projectCloseBtn = document.querySelectorAll('[ data-modal-close ]');

function openprojectModal(){
projectModal.classList.add('is-open')
projectModal.setAttribute('aria-hidden','false');
document.body.classList.add('modal-open');    
}

function closeprojectModal(){
projectModal.classList.remove('is-open')
projectModal.setAttribute('aria-hidden','true');
document.body.classList.remove('modal-open');    
}

projectOpenBtn.forEach(function(btn){
    btn.addEventListener('click',openprojectModal);
});

projectCloseBtn.forEach(function(btn){
    btn.addEventListener('click',closeprojectModal);
});

document.addEventListener('keydown',function(event){
    if(event.key === 'Escape'){
        closeprojectModal();}
    });


    