if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    alert("Acest website inca nu are suport pentru telefoane, respectiv Responsive Website. Se pare ca Daniel este cam lenes si nu vrea sa lucreze...")
  }else{
    // false for not mobile device
    console.log("not mobile device");
  }


