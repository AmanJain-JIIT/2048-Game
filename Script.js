var i;
var j;
var k;
var score = 0;
var BGAudio = new Audio("Audio/2048 Home BG.mp3");
function playaudio()
{
    BGAudio.play();
}
function muteaudio()
{
    var mute = document.getElementById("mute").innerHTML;
    if(mute=="MUTE")
    {
        BGAudio.pause();
        document.getElementById("mute").innerHTML="UNMUTE";
    }
    else
    {
        BGAudio.play();
        document.getElementById("mute").innerHTML="MUTE";
    }
}
function RandSelector()
{
    i = Math.floor(Math.random() * 4) + 1;
    j = Math.floor(Math.random() * 4) + 1;
}
function RandSpawner()
{
    RandSelector()
    var a = "item" + i + j;
    var b = "item" + j + i;
    document.getElementById(a).innerHTML = Number(2);
    document.getElementById(b).innerHTML = Number(2);
    document.getElementById("scr").innerHTML = Number(score);
    colorselector()
}
function RandSpawner2()
{
    RandSelector()
    var a = "item" + i + j;
    if(document.getElementById(a).innerHTML == " ")
    {
        document.getElementById(a).innerHTML = Number(2);
    }
    else
    {
        RandSpawner2()

    }
    colorselector()
}
function StartGame()
{
    window.open("GamePage.html", "_self");
}
function Restart()
{
    for(i = 1; i<=4; i++)
    {
        for(j = 1; j<=4; j++)
        {
            var a = "item" + i + j;
            document.getElementById(a).innerHTML = " ";
        }
    }
    RandSpawner();
}
window.addEventListener("keydown", checkkeypress, false);

function checkkeypress(key)
{
    if(key.keycode == "65")
    {
        keyright();
        alert("key pressed");
    }
}
function keyright()
{
    score += 10;
    for(i=1; i<=4; i++)
    {
        for(j=1; j<4; j++)
        {
            k = j+1;
            var a = "item" + i + j;
            var b  = "item" + i + k;
            var anum = document.getElementById(a).innerHTML;
            var bnum = document.getElementById(b).innerHTML;
            if(anum != " ")
            {
                if(bnum == " ")
                {
                    document.getElementById(b).innerHTML = anum;
                    document.getElementById(a).innerHTML = " ";
                }
                if(bnum == anum)
                {
                    document.getElementById(b).innerHTML = 2*anum;
                    document.getElementById(a).innerHTML = " ";
                    score += 50;
                }
            }
        }
    }
    RandSpawner2();
    document.getElementById("scr").innerHTML = Number(score);
    colorselector()
}
function keyleft()
{
    score += 10;
    for(i=1; i<=4; i++)
    {
        for(j=4; j>1; j--)
        {
            k = j-1;
            var a = "item" + i + j;
            var b  = "item" + i + k;
            var anum = document.getElementById(a).innerHTML;
            var bnum = document.getElementById(b).innerHTML;
            if(anum != " ")
            {
                if(bnum == " ")
                {
                    document.getElementById(b).innerHTML = anum;
                    document.getElementById(a).innerHTML = " ";
                }
                if(bnum == anum)
                {
                    document.getElementById(b).innerHTML = 2*anum;
                    document.getElementById(a).innerHTML = " ";
                    score += 50;
                }
            }
        }
    }
    RandSpawner2();
    document.getElementById("scr").innerHTML = Number(score);
    colorselector()
}
function keydown()
{
    score += 10;
    for(j=1; j<=4; j++)
    {
        for(i=1; i<4; i++)
        {
            k = i+1;
            var a = "item" + i + j;
            var b  = "item" + k + j;
            var anum = document.getElementById(a).innerHTML;
            var bnum = document.getElementById(b).innerHTML;
            if(anum != " ")
            {
                if(bnum == " ")
                {
                    document.getElementById(b).innerHTML = anum;
                    document.getElementById(a).innerHTML = " ";
                }
                if(bnum == anum)
                {
                    document.getElementById(b).innerHTML = 2*anum;
                    document.getElementById(a).innerHTML = " ";
                    score += 50;
                }
            }
        }
    }
    RandSpawner2();
    document.getElementById("scr").innerHTML = Number(score);
    colorselector()
}
function keyup()
{
    score += 10;
    for(j=1; j<=4; j++)
    {
        for(i=4; i>1; i--)
        {
            k = i-1;
            var a = "item" + i + j;
            var b  = "item" + k + j;
            var anum = document.getElementById(a).innerHTML;
            var bnum = document.getElementById(b).innerHTML;
            if(anum != " ")
            {
                if(bnum == " ")
                {
                    document.getElementById(b).innerHTML = anum;
                    document.getElementById(a).innerHTML = " ";
                }
                if(bnum == anum)
                {
                    document.getElementById(b).innerHTML = 2*anum;
                    document.getElementById(a).innerHTML = " ";
                    score += 50;
                }
            }
        }
    }
    RandSpawner2();
    document.getElementById("scr").innerHTML = Number(score);
    colorselector()
}
function colorselector()
{
    for(i = 1; i<=4; i++)
    {
        for( j = 1; j<=4; j++)
        {
            var a = "item" + i + j;
            if(document.getElementById(a).innerHTML == " ")
            {
                document.getElementById(a).style.backgroundColor = "rgb(223, 221, 217)";
            }
            if(document.getElementById(a).innerHTML == 2)
            {
                document.getElementById(a).style.backgroundColor = "#ffffdf";
            }
            if(document.getElementById(a).innerHTML == 4)
            {
                document.getElementById(a).style.backgroundColor = "#fffcd0";
            }
            if(document.getElementById(a).innerHTML == 8)
            {
                document.getElementById(a).style.backgroundColor = "#ffedc1";
            }
            if(document.getElementById(a).innerHTML == 16)
            {
                document.getElementById(a).style.backgroundColor = "#fddeb3";
            }
            if(document.getElementById(a).innerHTML == 32)
            {
                document.getElementById(a).style.backgroundColor = "#eecfa5";
            }
            if(document.getElementById(a).innerHTML == 64)
            {
                document.getElementById(a).style.backgroundColor = "#dec197";
            }
            if(document.getElementById(a).innerHTML == 128)
            {
                document.getElementById(a).style.backgroundColor = "#cfb289";
            }
            if(document.getElementById(a).innerHTML == 256)
            {
                document.getElementById(a).style.backgroundColor = "#a18e74";
            }
            if(document.getElementById(a).innerHTML == 512)
            {
                document.getElementById(a).style.backgroundColor = "#766956";
            }
            if(document.getElementById(a).innerHTML == 1024)
            {
                document.getElementById(a).style.backgroundColor = "#4e453a";
            }
            if(document.getElementById(a).innerHTML == 2048)
            {
                document.getElementById(a).style.backgroundColor = "#c9ecc4";
            }
        }
    }
}
