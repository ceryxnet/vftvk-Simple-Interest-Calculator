function compute()
{
    // get the principal amount
    p = document.getElementById("principal").value;
    var principal = p;
    if (principal <= 0){
        alert("Enter a positive number");
         document.getElementById("principal").focus();
        return;
    }
    // get the rate value
    var rate = document.getElementById("rate").value;
    if (principal <= 0){
        alert("Select valid rate");
         document.getElementById("rate").focus();
        return;
    }
    // get the number of years
    var years = document.getElementById("years").value;
    if (principal <= 0){
        alert("Select valid year");
         document.getElementById("years").focus();
        return;
    }
    
    // get to day date
    var today = new Date();
    // retrieve only the full number indicating the year
    var yyyy = today.getFullYear();
    // convert string number of year in integer value
    var n_years = parseInt(years);
    yyyy = n_years+ yyyy;
    var interest = principal * n_years * rate / 100;
    //alert(principal+" * "+n_years+" * "+rate);

    document.getElementById("result").innerHTML = rate+"%";
    var inner = "<br>If you deposit <span style=\"background-color: #00FF00\">"+principal+ "</span>, <br>"+
    "at an interest rate of <span style=\"background-color: #00FF00\">"+rate+"%</span>. <br>"+
    "You will receive an amount of <span style=\"background-color: #00FF00\">"+interest+"</span>,<br>"+
    "in the year <span style=\"background-color: #00FF00\">"+yyyy+"</span>";
    document.getElementById("result2").innerHTML = inner;
}
       
