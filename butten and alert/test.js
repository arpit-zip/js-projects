const getcolor = ()=>
{
    const RandomNumber = Math.floor(Math.random()*16777215);
    console.log(RandomNumber);
    const RandomCode = "#"+RandomNumber.toString(16);
    document.body.style.backgroundColor=RandomCode;
    console.log(RandomNumber,RandomCode)


    document.getElementById("color-code").innerText=RandomCode;
}
    document.getElementById('btn').addEventListener('click',getcolor)

{
    getcolor();
}
//  document.getElementById('btn').addEventListener('click',getcolor)
//  getcolor();

//  let lname = document.getElementById('test')
//  lname.onfocus = function()
//  {
//     lname.style.backgroundColor = 'yellow';
//  }
//  lname.onblur