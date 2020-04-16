function burger() {
    var e = document.getElementById('menu-block');
    if(e.style.display == 'flex')
        e.style.display = 'none';
    else
        e.style.display = 'flex';
}