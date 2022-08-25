let tab = document.querySelectorAll('.tab-menu-item');
tab.forEach( el => 
    el.addEventListener('click', function() {
        tab.forEach( els => els.classList.remove('active') )
        this.classList.add('active');
    })
)