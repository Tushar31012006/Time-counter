
const start=new Date().getTime()
const end=new Date("02 November 2025 16:00:00").getTime();

function timer(){
    const curr=new Date().getTime();
    const complete=curr-start;
    const remain=end-curr;
    function formattime(value){
        if(value<10)value='0'+value;
        return value;
    }
    if (remain<=0)
    {
        const timerDiv = document.getElementById("timer");
    timerDiv.innerHTML = "Times Up !";
    timerDiv.classList.add("timesup");

        document.getElementsByClassName("timer")[0].textContent="TimesUp !";
       document.getElementById("green").style.width='100%';
      clearInterval(timerInterval);
      return;
    }
    const days=Math.floor(remain/(24*60*60*1000));
    const hours=Math.floor(remain%(24*60*60*1000)/(60*60*1000));
    const min=Math.floor(remain%(60*60*1000)/(60*1000));
    const sec=Math.floor(remain%(60*1000)/(1000));


    document.getElementById("Days").children[0].textContent=formattime(days);
    document.getElementById("Hours").children[0].textContent=formattime(hours);
    document.getElementById("Minutes").children[0].textContent=formattime(min);
    document.getElementById("Seconds").children[0].textContent=formattime(sec);

    const percent=((curr-start)/(end-start))*100;
    document.getElementById("green").style.width=percent+'%';
}

const timerInterval = setInterval(timer, 1000);
timer();