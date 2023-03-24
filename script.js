window.onload = function() {
    setTimeout(function() {
      document.getElementById("zoom-in").style.transform = "translate(-50%, -50%) scale(8)";
    }, 200); // 2 seconds

    setTimeout(function() {
      document.getElementById("text").style.display = "block";
    }, 1300); // 4 seconds

    // setTimeout(function() {
    //     document.getElementById("subtext").style.display = "block";
    //   }, 6000); // 5 seconds

      // setTimeout(function() {
      //   document.getElementById("disclaimer").style.display = "block";
      // }, 2000); // 6 seconds


    setTimeout(function() {
      window.location.href = "page1.html";
    }, 3200); // 6 seconds
  };
