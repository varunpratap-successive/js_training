const outerfunction=function(insidefunction)
{ console.log("Outer function called");
   insidefunction();
}
const insidefunction=function()
{ console.log("inside function called");
}

outerfunction(insidefunction);
