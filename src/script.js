document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('f1');
    let cliques = 0;
  
    img.addEventListener('click', () => {
      cliques++;
  
      if (cliques === 12) {
        img.src = "../img/Myicon2.png"; 
        cliques = 0; 
      }
    });
  });
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('nav ul li a.ativo').classList.remove('ativo');
        this.classList.add('ativo');
    });
});

