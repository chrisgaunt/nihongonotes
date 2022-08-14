document.addEventListener('DOMContentLoaded', function(){ 
    var urlHash = window.location.href.split("#")[1];
    var element = document.getElementById(urlHash);
    if (urlHash && typeof(element) != 'undefined' && element != null) {
        var elementTop = element.offsetTop-128;
        // console.log(elementTop);
        window.scrollTo(0, elementTop);
    }
}, false);