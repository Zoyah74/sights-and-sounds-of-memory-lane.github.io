window.onload = function() {
    setTimeout(function() {
      document.getElementById("zoom-in").style.transform = "translate(-50%, -50%) scale(8)";
    }, 2000); // 2 seconds

    setTimeout(function() {
      document.getElementById("text").style.display = "block";
    }, 4000); // 4 seconds

    setTimeout(function() {
        document.getElementById("subtext").style.display = "block";
      }, 6000); // 5 seconds

      setTimeout(function() {
        document.getElementById("disclaimer").style.display = "block";
      }, 9000); // 6 seconds


    setTimeout(function() {
      window.location.href = "page1.html";
    }, 14000); // 6 seconds
  };