document.addEventListener('DOMContentLoaded', function(){ 
    var urlHash = window.location.href.split("#")[1];
    var element = document.getElementById(urlHash);
    if (urlHash && typeof(element) != 'undefined' && element != null) {
        var elementTop = element.offsetTop-128;
        // console.log(elementTop);
        window.scrollTo(0, elementTop);
    }
}, false);

const filters = document.querySelectorAll('.filter');

filters.forEach(filter => { 

  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.media-grid .media-item:not([data-filter='text'],[data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.media-grid [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.media-grid [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show'); 
    });

  });
});