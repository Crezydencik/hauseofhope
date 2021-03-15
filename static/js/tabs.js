let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};


tab();
  // document.querySelectorAll('.tabs-trigger_items').forEach((item) =>
  //     item.addEventListener('click',function(e){
  //       e.preventDefault();
  //       const id = e.target.getAttribute('href');
  //       document.querySelectorAll('.tabs-trigger_items').forEach(
  //         (child) => child.classList.remove('tabs-trigger_items--active')
  //       );
  //       document.querySelectorAll('.tabs-content_items').forEach(
  //         (child) => child.classList.remove('tabs-content_items--active')
  //       );
  //       item.classList.add('tabs-trigger_items--active');
  //
  //       document.getElementById(id).classList.add('tabs-content_items--active')
  //     })
  // );
// $(document).ready(function(){
//   $('.tabs-trigger_items').click(function(e){
//     e.preventDefault();
//
//     $('.tabs-trigger_items').removeClass('tabs-trigger_items--active');
//     $('.tabs-content_items').removeClass('tabs-content_items--active');
//
//     $(this).addClass('tabs-trigger_items--active');
//     $($(this).attr('href')).addClass('tabs-content_item--active')
//   });
//   $('.tabs-trigger_items:first').click();
// })
