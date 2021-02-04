$(document).ready(function () {
    animate1();
    animate2();
    animate3();
    animate4();
    animate5();
    animate6();
    animate7();
    animate8();
    animate9();
    animate10();
    repoMan();
  });
  
  const animate1 = () => {
    $(".btn").hover(
      function () {
        $(this).css("transform", "scale(1.25,1.25)");
      },
      function () {
        $(this).css("transform", "");
      }
    );
  };
  
  const animate2 = () => {
    $("#fb").hover(
      function () {
        $(this).css("color", "#3b5998");
      },
      function () {
        $(this).css("color", "#343a40");
      }
    );
  };
  
  const animate3 = () => {
    $("#in").hover(
      function () {
        $(this).css("color", "#0e76a8");
      },
      function () {
        $(this).css("color", "#343a40");
      }
    );
  };
  
  const animate4 = () => {
    $("#git").hover(
      function () {
        $(this).css("color", "black");
      },
      function () {
        $(this).css("color", "#343a40");
      }
    );
  };
  
  const animate5 = () => {
    $(".red").hover(
      function () {
        $(this).css("color", "#ea4335");
      },
      function () {
        $(this).css("color", "black");
      }
    );
  };
  
  const animate6 = () => {
    $(".green").hover(
      function () {
        $(this).css("color", "#34a853");
      },
      function () {
        $(this).css("color", "black");
      }
    );
  };
  
  const animate7 = () => {
    $(".yellow").hover(
      function () {
        $(this).css("color", "#fbbc05");
      },
      function () {
        $(this).css("color", "black");
      }
    );
  };
  
  const animate8 = () => {
    $(".blue").hover(
      function () {
        $(this).css("color", "#4285f4");
      },
      function () {
        $(this).css("color", "black");
      }
    );
  };
  
  const animate9 = () => {
    $(".orange").hover(
      function () {
        $(this).css("color", "orange");
      },
      function () {
        $(this).css("color", "black");
      }
    );
  };
  
  const animate10 = () => {
    $(".purple").hover(
      function () {
        $(this).css("color", "purple");
      },
      function () {
        $(this).css("color", "black");
      }
    );
  };
  
  const repoMan = () => {
    let gitRequest = new XMLHttpRequest();
    gitRequest.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let myGit = JSON.parse(this.responseText);
        console.log(myGit);
  
        const cont = document.getElementById("container");
        const ul = document.createElement("ul");
  
        ul.setAttribute("style", "list-style: none;");
        ul.setAttribute("id", "list");
  
        for (var i = 0; i < myGit.length; i++) {
          const li = document.createElement("li");
          li.setAttribute("id", "repoList");
          ul.appendChild(li);
  
          const a = document.createElement("a");
          // To choose a file, photo, screenshot, etc.. to dynamically list intead of just text..?
          // a.innerHTML = "https://api.github.com/repos/Jamescameron88/" + myGit[i].name "/contents/" + {filepath and name};
          a.innerHTML = myGit[i].name;
          li.appendChild(a);
          a.href = "https://github.com/Jamescameron88/" + myGit[i].name;
          a.target = "_blank";
        }
        cont.appendChild(ul);
      }
    };
  
    gitRequest.open(
      "GET",
      "https://api.github.com/users/Jamescameron88/repos",
      true
    );
    gitRequest.send();
  };
  
  function myFunction() {
      var x = document.getElementById("myNavbar");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }
  