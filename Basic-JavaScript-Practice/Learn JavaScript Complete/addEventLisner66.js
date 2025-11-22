var element ;

// // document.getElementById("header").onclick = abc;
// document.getElementById("header").onmouseenter = abc;
// function abc(){
//     document.getElementById("header").style.background = "green";
// }



// addEventListener ka kam

// document.getElementById("header").addEventListener("dblclick",abc);
// document.getElementById("header").addEventListener("mouseleave",abc);
// document.getElementById("header").addEventListener("mouseenter",function(){
//     document.getElementById("header").style.border = "10px solid red";
// });
// function abc(){
    // document.getElementById("header").style.background = "tan";
// }

//  document.getElementById.("header") oper ya likha han this ki jaga tu ya na b likho tu b chalay ga
// document.getElementById("header").addEventListener("mouseenter",function(){
//    this.style.border = "10px solid red";
// });

// use remove
document.getElementById("header").removeEventListener("mouseleave",abc);
function abc(){
    document.getElementById("header").removeEventListener("mouseleave",abc);
}



