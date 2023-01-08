function showtime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var sessionTime = "AM";

    if (h == 0) {
        h = 12
    };
    if (h > 12) {
        h = h - 12;
        sessionTime = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + sessionTime;

    document.getElementById("clockDisplay").innerText = time;

    document.getElementById("clockDisplay").textContent = time;

    setTimeout(showtime, 1000);


}

showtime();

function showdate() {
    var displayDate = document.querySelector(".date");
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();

    dd = (dd < 10) ? "0" + dd : dd;
    mm = (mm < 10) ? "0" + mm : mm;
    displayDate.textContent = dd + " " + mm + " " + yyyy;
}

showdate();