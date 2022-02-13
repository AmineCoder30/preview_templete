let thenav = $(".container nav div");
let theslider = $(".content>div");
let theImgch = $(".im-to-sh");
let myImgs = $(".ch-img img");
let thesldr = $(".slider .container .ctn-sld div");
let thecontainer = $(".container")
let currentIndex = 0;
function showImage() {
    for (let a = 0; a < myImgs.length; a++) {
     myImgs[a].onclick = function () {
         theImgch.attr('src',myImgs[a].src);
         removeAll(myImgs)
         myImgs[a].classList.add("active");
       
     }
    }
}
function crPagination() {
    $(".pagination").empty();
    for (let i = 0; i < x + 1; i++) {
      $(".pagination").append($("<span></span>").attr("data-index", i));
      
    }
 
    
}
function addBorder() {
    for (let i = 0; i < thenav.length; i++) {
       thenav[i].onclick = function () {
           removeAll(thenav);
           removeAll(theslider)
          theslider[i].classList.add("active");
           thenav[i].classList.add("active");
       }
        
    }};

addBorder();
function removeAll(ar) {
    ar.removeClass("active");;
}
showImage()


function nextimg() {
   
  
    
    $(".left").on("click",function () {

    if (currentIndex < x) {
        $(".pagination span").each(function () {
            $(".pagination span").removeClass('active')
        })
        $(thesldr).eq(currentIndex).addClass("active");
        currentIndex++; 
        $(".pagination span").eq(currentIndex).addClass("active")
       
       
    }

       })

}
function prevImg(parms) {
    $(".right").on("click",function () {
       
           if (currentIndex > 0) {
            $(".pagination span").each(function () {
                $(".pagination span").removeClass('active')
            })
            currentIndex--;
               $(".pagination span").eq(currentIndex).addClass("active")
            $(thesldr).eq(currentIndex).removeClass("active");
            
           }
          
       
    })
}


function addActive(){
    $(".pagination span").eq(0).addClass("active");
  
    for ( let b = 0; b <  $(".pagination span").length; b++) {
   
        $(".pagination span").eq(b).on("click",() =>{
            
            $(".pagination span").each(function () {
                $(".pagination span").removeClass('active')
            }
                 
            );
            
            $(".pagination span").eq(b).addClass("active")
            if ( b != 0) {

              
                $(thesldr).eq(b).prevAll().addClass("active");

            $(thesldr).eq(b).removeClass("active") 
                
            }
            else{ $(thesldr).eq(b).removeClass("active") }
         currentIndex = parseInt($(".pagination span").eq(b).attr("data-index"))

        })
    }
}

function sliderShow() {
    let w = thecontainer[0].offsetWidth;
    $(thesldr).removeClass("active")

 
    if (w <= 540) {
        thesldr.css("width", `${w}px`);
        $(".ctn-sld").css("width", `${w * 5}px`)
        x = 4;
      }
    if(w > 540 && w <= 720){
        thesldr.css("width",`${w / 2}px`)
        $(".ctn-sld").css("width", `${w * 5 / 2}px`)
        x = 3;
    }
    if(w > 720 && w <= 960){
        thesldr.css("width",`${w /3}px`)
        $(".ctn-sld").css("width", `${w * 5 / 3}px`)
        x = 2;
    }
    if(w > 960 ){
        thesldr.css("width",`${w / 4}px`)
        $(".ctn-sld").css("width", `${w * 5 / 4}px`)
        x = 1;
    }
   
    crPagination()
    addActive();
   prevImg()
    nextimg();
}
$(window).on("load resize" , sliderShow)
//create add card function
function addCard(){
    let allCard = $(".section-five .crd")
 for (let e = 0; e <allCard.length; e++) {
     $(allCard).eq(e).on("click",function () {
        $(allCard).eq(e).text("Adding..").css({"background-color":"rgb(79 189 181)","cursor":"initial"})
     })
 }
}
addCard();



