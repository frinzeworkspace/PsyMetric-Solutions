document.getElementById('burger-icon').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const menuContainer = document.getElementById('menu-container');

    sidebar.classList.toggle('expanded');
});



window.addEventListener('load', function() {
   
    setTimeout(function() {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 1000); 
    }, 200); 
});




