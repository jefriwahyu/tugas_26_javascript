function cekData(){
  var x = isFinite([2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]);

  x = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  x.forEach(function(a){
    console.log("Angka " + a + " NOT Infinity.");
  });

}

cekData();
