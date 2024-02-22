let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(()=>{

    const getcolor = ()=>
{
    const RandomNumber = Math.floor(Math.random()*16777215);
    console.log(RandomNumber);
    const RandomCode = "#"+RandomNumber.toString(16);
    document.body.style.backgroundColor=RandomCode;
    console.log(RandomNumber,RandomCode)
}

    document.body .addEventListener("datetime",getcolor());



let dt = new Date();
hrs.innerHTML = (dt.getHours() < 10 ? "0" : "") + dt.getHours();
min.innerHTML = (dt.getMinutes() < 10 ? "0":"") + dt.getMinutes();
sec.innerHTML = (dt.getSeconds() < 10 ? "0":"") + dt.getSeconds();
if(hrs.innerHTML>12){
    hrs.innerHTML = hrs.innerHTML-12;
}
},1000)

const getcolor = ()=>
{
    const RandomNumber = Math.floor(Math.random()*16777215);
    console.log(RandomNumber);
    const RandomCode = "#"+RandomNumber.toString(16);
    document.body.style.backgroundColor=RandomCode;
    console.log(RandomNumber,RandomCode)
}

    document.body .addEventListener("datetime",getcolor());

