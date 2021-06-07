/*global console*/



/*loading*/
window.onload = function () {
    
    'use strict';

    setTimeout(function () {
        document.getElementById('when-load').style.display = 'none';
    }, 1000);
};



// او ممكن تعملها كدا يكون افضل
//function hideLoading() {
//    
//    'use strict';
//    document.getElementById('when-load').style.display = 'none';
//}
//
//function loading() {
//    
//    'use strict';
//
//    setTimeout(hideLoading, 1000);
//}
//
//
//window.onload = loading;
