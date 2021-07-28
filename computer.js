function initializeEvents(){
    document.getElementById("btn_0").addEventListener("click", btn_Clicked);
    document.getElementById("btn_1").addEventListener("click", btn_Clicked);
    document.getElementById("btn_2").addEventListener("click", btn_Clicked);
    document.getElementById("btn_3").addEventListener("click", btn_Clicked);
    document.getElementById("btn_4").addEventListener("click", btn_Clicked);
    document.getElementById("btn_5").addEventListener("click", btn_Clicked);
    document.getElementById("btn_6").addEventListener("click", btn_Clicked);
    document.getElementById("btn_7").addEventListener("click", btn_Clicked);
    document.getElementById("btn_8").addEventListener("click", btn_Clicked);
    document.getElementById("btn_9").addEventListener("click", btn_Clicked);
    document.getElementById("btn_10").addEventListener("click", btn_Clicked);
    document.getElementById("add").addEventListener("click", operator_Clicked);
    document.getElementById("sub").addEventListener("click", operator_Clicked);
    document.getElementById("mult").addEventListener("click", operator_Clicked);
    document.getElementById("divide").addEventListener("click", operator_Clicked);
    document.getElementById("equals").addEventListener("click", equals_Clicked);
    document.getElementById("all_clear").addEventListener("click", clear_Clicked);
    
}


  function clear_Clicked() {
      document.getElementById("calc-screen").value = "";
  }

  function btn_Clicked() {
      if (this.value != "." || !document.getElementById("calc-screen").value.includes(".")) {
          document.getElementById("calc-screen").value = document.getElementById("calc-screen").value + this.value;
      }
  }

  function operator_Clicked() {
      document.getElementById("calc-op-screen").value = this.value;
      document.getElementById("calc-prev-screen").value = document.getElementById("calc-screen").value;
      document.getElementById("calc-screen").value = "";
  }


  function equals_Clicked() {
      var fn = document.getElementById("calc-prev-screen").value;
      var sn = document.getElementById("calc-screen").value;
      var r = 0;


      if (document.getElementById("calc-op-screen").value == "+") {
          r = fn + sn;
      } else if (document.getElementById("calc-op-screen").value == "-") {
          r = fn - sn;

      } else if (document.getElementById("calc-op-screen").value == "*") {
          r = fn * sn;
      } 
        
      else {
          //error
      }
      document.getElementById("calc-screen").value = parseFloat(r);
      document.getElementById("calc-prev-screen").value = "";
      document.getElementById("calc-op-screen").value = "";
  }