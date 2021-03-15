/*Open language menu after click */

// START

function myFunction() {

    document.getElementById("myDropdown").classList.toggle("show");

}



// Close the dropdown if the user clicks outside of it

window.onclick = function(event) {
    if (!['sub_lang', 'mob-sub-lang'].includes(event.target.className)) {

        var dropdowns = document.getElementsByClassName("lang_menu");

        var i;

        for (i = 0; i < dropdowns.length; i++) {

            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {

                openDropdown.classList.remove('show');

            }

        }

    }

};

/* Выбор nav в мобильном приложении */
function hideNavSection() {
    let section = document.querySelector('.mob-nav-section');
    section.classList.add('nav-anim-close');
    section.classList.remove('nav-anim-open');
}
window.onload = () => {
        document.querySelector('.mob_nav').onclick = () => {
            let { classList } = document.querySelector('.mob-nav-section');
            classList.add('nav-anim-open');
            classList.remove('nav-anim-close');
        }
        document.querySelector('.mob-nav-close').onclick = () => {
            let { classList } = document.querySelector('.mob-nav-section');
            classList.remove('nav-anim-open');
        }
    }
    /* скрываем кнопку "скролл вверх (мобильное приложение)" */
window.onscroll = e => {
    console.log(e)
    document.querySelector('.scroll-top').style.display = `${!window.scrollY ? 'none' : 'block'}`;
}


// THE END
