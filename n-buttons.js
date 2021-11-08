 var input = document.getElementById("Number");
 input.addEventListener("keydown", function(e) {
     if (e.key === "Enter") {
         validate(e);
     }
 });

 function random_item(x) {
     return Math.floor(Math.random() * x);
 }

 function validate(e) {
     var text = e.target.value;
     let inputValue = random_item(document.getElementById("Number").value);
     for (var i = 1; i <= text; ++i) {
         let btn = document.createElement("button");
         btn.innerHTML = "Button " + i;
         btn.id = i;
         btn.onclick = function reply_click(i) {
             if (inputValue == btn.id) {
                 alert("This is the winning Button!");
             } else {
                 alert("This is not the winning Button:(");
             }
         };
         document.body.appendChild(btn);
     }
 }