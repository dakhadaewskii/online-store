window.onscroll = function showHeader() {

    let header = document.querySelector('.head');

    if(window.pageYOffset > 200) {
        header.classList.add('head-fixed')
    } else {
        header.classList.remove('head-fixed')
    }
}