var node = document.createElement("li");
node.innerText = "Perth";
node.style.color = "red";
node.style.fontWeight = "bold";

var x = document.getElementById("java");
x.appendChild(node);

function javaTest() {
    // alert("TEST~!!!!!");
    console.log("TEST~!!! fucntion start");

// var y = document.getElementById("bb");
//     y.style.color ="hotpink";
     

// var y = document.getElementById("bb");


    var d = $("#bb");
    d.attr("id", "button-id");

    console.log(d);



}
