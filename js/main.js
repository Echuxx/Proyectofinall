document.getElementById('id-sun').onclick = function(){
    document.body.classList.remove('dark-mode');
    document.getElementById('id-moon').classList.remove('active');
    this.classList.add('active');
  };
  
  document.getElementById('id-moon').onclick = function(){
    document.body.classList.add('dark-mode');
    document.getElementById('id-sun').classList.remove('active');
    this.classList.add('active');
  };