const enter = document.getElementById(enter);

enter.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter')
    {
        document.getElementById("display-ans").value= "hi"
        // eval(document.getElementById("display-ans").innerHTML);
    }

})
