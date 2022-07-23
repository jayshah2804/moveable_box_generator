import { useState } from "react";
import "./App.css";

let i = 1;
function App() {
  const [toggleState, setToggleState] = useState("On");

  function generateBoxHandler() {
    var newDiv = document.createElement("div");
    newDiv.className = "example";
    newDiv.id = i;
    newDiv.style =
      "position:relative; height: 30px; width: 30px; border: 1px solid black; left: 10px; top: 10px; cursor: grab";
    document.getElementsByClassName("container")[0].appendChild(newDiv);
    i++;
  }
  function toggelHandler() {
    if (toggleState === "On") {
      setToggleState("Off");
    } else {
      setToggleState("On");
    }
  }

  document.onclick = function (e) {
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

    document.onkeydown = function (evt) {
      if (toggleState === "On") {
        if (evt.key === "d" || evt.key === "ArrowRight") {
          if (
            document
              .getElementsByClassName("container")[0]
              .getBoundingClientRect().right >
            document.getElementById(e.target.id).getBoundingClientRect().right +
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
            document.getElementById(e.target.id).getBoundingClientRect().left -
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
            document.getElementById(e.target.id).getBoundingClientRect().top -
              10
          ) {
            e.target.style.top =
              (parseInt(e.target.style.top.replace("px", "")) - 10).toString() +
              "px";
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
              (parseInt(e.target.style.top.replace("px", "")) + 10).toString() +
              "px";
          }
        } else if (evt.key === "Delete") {
          e.target.style.display = "none";
        }
      }
    };
  };

  return (
    <div className="wrapper">
      <button onClick={generateBoxHandler} className="elementGenerator">
        Generate Element
      </button>
      <button onClick={toggelHandler} className="toggleElement">
        Toggel functionality
      </button>
      <p className="currentState">
        Moveable functionality: <span id="toggleId">{toggleState}</span>
      </p>
      <div className="container"></div>
    </div>
  );
}

export default App;
