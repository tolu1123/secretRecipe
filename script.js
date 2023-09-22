
document.addEventListener('scroll', () => {
    let scrolledY = window.scrollY;
    let jumbotronHeight = document.querySelector('.jumbotron').offsetHeight;

    let header = document.querySelector('header');
    let h1 = header.querySelector('h1');
    let headerHeight = header.offsetHeight;
    let jumbotronTitleHeight = document.querySelector('.title').offsetHeight;
    if(scrolledY >= jumbotronHeight - (headerHeight + jumbotronTitleHeight)) {
        header.style.backgroundColor = '#000';
        header.style.borderBottom = '#000'
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.borderBottom = '1px solid #fff' 
    }
})