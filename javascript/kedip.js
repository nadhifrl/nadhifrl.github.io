var kedipan = 200; 
var dumet = setInterval(function () {
    var ele = document.getElementById('textkedip');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, kedipan);
