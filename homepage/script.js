function invisible_butt()
{
    const audio = document.getElementById("myaudio");
    const button = document.querySelector(".invisible-button");
    

    if (audio.paused)
    {
        audio.play();
        window.alert("Congratulatons, you have just stumbled upon the best song on earth!");
    }
    else
    {
        audio.pause();

    }
}


