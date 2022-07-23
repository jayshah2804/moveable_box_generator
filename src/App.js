import React, { useState } from "react";

let i = 1;
function App() {
  // const [isChange, setIsChange] = useState();
  const [toggleState, setToggleState] = useState("On");
  
  function func() {
    var newDiv = document.createElement("div");
    newDiv.className = "example";
    newDiv.id = i;
    newDiv.style =
      "position:relative; height: 30px; width: 30px; border: 1px solid black; left: 10px; top: 10px";
    document.getElementsByClassName("container")[0].appendChild(newDiv);
    i++;
  }
  function toggel() {
      if(toggleState === "On"){
      setToggleState("Off");
    } else {
      setToggleState("On");
    }
  }

  document.onclick = function (e) {
    // setIsChange(prev => !prev);
    for (
      let i = 0;
      i < document.getElementsByClassName("example").length;
      i++
    ) {
      document.getElementsByClassName("example")[i].style.border =
        "1px solid black";
    }
    if (e.target.id)
      document.getElementById(e.target.id).style.border = "3px solid blue";
    if (toggleState == "On") {
      document.onkeydown = function (evt) {
        if (evt.key === "d" || evt.key === "ArrowRight") {
          if (
            document
              .getElementsByClassName("container")[0]
              .getBoundingClientRect().right >
            document.getElementById(e.target.id).getBoundingClientRect()
              .right +
              10
          ) {
            e.target.style.left =
              (
                parseInt(e.target.style.left.replace("px", "")) + 10
              ).toString() + "px";
          }
        } else if (evt.key === "a" || evt.key === "ArrowLeft") {
          if (
            document
              .getElementsByClassName("container")[0]
              .getBoundingClientRect().left <
            document.getElementById(e.target.id).getBoundingClientRect()
              .left -
              10
          ) {
            e.target.style.left =
              (
                parseInt(e.target.style.left.replace("px", "")) - 10
              ).toString() + "px";
          }
        } else if (evt.key === "w" || evt.key === "ArrowUp") {
          if (
            document
              .getElementsByClassName("container")[0]
              .getBoundingClientRect().top <
            document.getElementById(e.target.id).getBoundingClientRect()
              .top -
              10
          ) {
            e.target.style.top =
              (
                parseInt(e.target.style.top.replace("px", "")) - 10
              ).toString() + "px";
          }
        } else if (evt.key === "s" || evt.key === "ArrowDown") {
          if (
            document
              .getElementsByClassName("container")[0]
              .getBoundingClientRect().bottom >
            document.getElementById(e.target.id).getBoundingClientRect()
              .bottom +
              10
          ) {
            e.target.style.top =
              (
                parseInt(e.target.style.top.replace("px", "")) + 10
              ).toString() + "px";
          }
        } else if (evt.key === "Delete") {
          e.target.style.display = "none";
        }
      };
    }
  };
  
  return (
    <React.Fragment>
      <button onClick={func}>Generate Element</button>
      <button onClick={toggel}>Toggel functionality</button>
      <p>
        Current State: <span id="toggleId">{toggleState}</span>
      </p>
      <div
        style={{ border: "1px solid black", width: "50%", height: "50vh" }}
        className="container"
      ></div>
    </React.Fragment>
  );
}

export default App;
