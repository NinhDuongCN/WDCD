let WD = new Date(2026, 01, 22, 11, 11, 11, 111);
var WDsec = WD.getTime();

function Countdown()
{
    var td = new Date();
    var tdSec = td.getTime();
    var secs = Math.floor((-tdSec + WDsec) / 1000);
    var dhm = Math.floor(secs / 86400);
    secs %= 86400;
    document.getElementById("ngay").innerText = dhm;
    dhm = Math.floor(secs / 3600);
    secs %= 3600;
    document.getElementById("gio").innerText = dhm < 10 ? ("0" + dhm) : dhm;
    dhm=Math.floor(secs / 60);
    document.getElementById("phut").innerText = dhm < 10 ? ("0" + dhm) : dhm;
    secs %= 60;
    document.getElementById("giay").innerText = secs < 10 ? ("0" + secs) : secs;
}

var audioCount = 11; //Chỉnh số lượng bài hát trong danh sách

function PlayAudio()
{
    document.getElementById("auSrc").setAttribute("src", "./audio/" + Math.floor(Math.random()*audioCount) + ".mp3");
}