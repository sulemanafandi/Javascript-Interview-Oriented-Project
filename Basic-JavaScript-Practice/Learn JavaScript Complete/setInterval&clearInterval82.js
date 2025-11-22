        // setinterval
// var a = 0;
// setInterval(Anim,1000);

// function Anim(){
//     a = a + 10 ;
//     var target = document.getElementById("test");
//     target.style.marginLeft = a + "px" ;
// }


            // clear interval
// var a = 10;
// var id = setInterval(Anim,1000);

// function Anim(){
//     if(a == 200){
//         clearInterval(id);
//     }else{
//         a = a + 10 ;
//     var target = document.getElementById("test");
//     target.style.width = a + "px" ;
//     }
// }



        // set timeout
// var id = setTimeout(Anim,5000);
// function Anim(){
//     console.log("hello");
// }



// clear timeout
var id = setTimeout(Anim,5000);
function Anim(){
    var target = document.getElementById("test");
    target.style.width = "500px" ;
}
function animationout(){
    clearTimeout(id);
}




// function Anim(){
//     if(a == 200){
//         clearInterval(id);
//     }else{
//         a = a + 10 ;
//     var target = document.getElementById("test");
//     target.style.width = a + "px" ;
//     }
// }

