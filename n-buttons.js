 var input = document.getElementById("input1");
 input.addEventListener("keydown", function(e) {
     if (e.key === "Enter") {
         validate(e);
     }
 });

 function random_item() {
     input = parseInt(2);
     return Math.floor(Math.random() * input) + 1;
 }

 var x = random_item();

 function validate(e) {
     var text = e.target.value;
     for (var i = 1; i <= text; ++i) {
         let btn = document.createElement("button");
         btn.innerHTML = "Button " + i;
         btn.id = i;
         btn.onclick = function reply_click(i) {
             if (x == btn.id) {
                 alert("This is the winning Button!");
             } else {
                 alert("This is not the winning Button:(");
                 console.log(x);
             }
         };
         document.body.appendChild(btn);
     }
 }