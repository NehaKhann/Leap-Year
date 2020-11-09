const calculate = () => {
    let year = document.forms["myForm"]["year"].value;
    if(year==''){
      alert("It's is Required!");
      return false;
    }
    if (year % 4 ===0)
{
    if(year % 100 ===0)
    {
        if(year % 400 ===0)
        {
                 document.getElementById("result").innerHTML = "leap year";
                 document.getElementById("result").style.display = "block";
        }
        else{
          document.getElementById("result").innerHTML = "Not a leap year";
          document.getElementById("result").style.display = "block";
        }
    }
    else{
      document.getElementById("result").innerHTML = "Leap year";
      document.getElementById("result").style.display = "block";
    }
}
else{
  document.getElementById("result").innerHTML = "Not a leap year";
  document.getElementById("result").style.display = "block";
}

    return false;
}
