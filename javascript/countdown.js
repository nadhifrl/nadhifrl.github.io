var target_date = new Date("des 18, 2019").getTime();
    var days, hours, minutes, seconds;
    var countdown = document.getElementById("countdown");
    setInterval(function () {
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
        countdown.innerHTML = days + " <span class='digit'>hari</span> " + hours + " <span class='digit'>jam</span> " + minutes + " <span class='digit'>menit</span> " + seconds
    }, 1000);
