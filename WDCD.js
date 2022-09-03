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

var backgroundCount = 35; //số lượng ảnh nền

function ChangeBackground()
{
    //Tạo một vòng lặp với thời gian lặp ngẫu nhiên
    //Tại mỗi bước lặp thì chọn ngẫu nhiên một ảnh để đổi làm nền
    document.getElementById("div1").style.backgroundImage = "url('./image/bgrs/" + Math.floor(Math.random() * backgroundCount) + ".jpg')";        
    setTimeout(ChangeBackground, Math.floor(Math.random() * 240000) + 60000);
}

var audioCount = 42; //Chỉnh số lượng bài hát trong danh sách
var imgPlay = "./image/btn_play.svg";
var imgPause = "./image/btn_pause.svg";
var isPlaying = false;

function PlayAudio()
{
    var aud = document.getElementById("au");
    aud.setAttribute("src", "./audio/" + Math.floor(Math.random()*audioCount) + ".mp3");
    aud.play();
}

function SetBtnPause()
{
    //document.getElementById("btnPlayPause").setAttribute("src", imgPause);
    isPlaying = true;
    document.getElementById("btnPlayPause").hidden = true;
}

function SetBtnPlay()
{
    document.getElementById("btnPlayPause").setAttribute("src", imgPlay);
    isPlaying = false;
}

function BtnClicked()
{
    var aud = document.getElementById("au");
    if(isPlaying){
        aud.pause();
    }
    else{
        try{
            aud.play();
        }
        catch{
            PlayAudio();
        }
    }
}