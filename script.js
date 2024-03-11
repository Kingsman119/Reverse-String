document.getElementById("btn").onclick = function () {
  let str = document.getElementById('var1').value;

  const strRev =  [...str].reverse().join(""); 

  document.getElementById("res").innerHTML =
    "Reversed String " +  strRev;
};
