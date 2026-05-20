function calculate(){
    let p = parseFloat(prompt("Enter principal:"));
    let r = parseFloat(prompt("Enter rate of interest:"));
    let t = parseFloat(prompt("Enter time in years:"));
    let si=(p*r*t)/100;
    document.getElementById("result").innerHTML="simple interest is "+si;
} 


