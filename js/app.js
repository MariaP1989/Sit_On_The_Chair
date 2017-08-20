//rozwijanie menu
var li_firm = document.querySelectorAll(".menu_item");
var div_list = document.querySelector(".show");

for(var i = 0; i < li_firm.length; i++){
    li_firm[i].addEventListener("mouseover", function(event){
        this.querySelector(".show").style.visibility = "visible";
    });
    li_firm[i].addEventListener("click", function(event){
        this.querySelector(".show").style.visibility = "hidden";
    });
}
//chowanie tekstu i obrazka
var img_modification = document.querySelectorAll('div[class*="photo"]');

for(var i = 0; i < img_modification.length-1; i++){
    img_modification[i].addEventListener("mouseover", function(event){
        var chair = this.querySelector('h3[class*="chair_"]');
        chair.style.visibility = "hidden";
    });
    img_modification[i].addEventListener("mouseout", function(event){
        var chair = this.querySelector('h3[class*="chair_"]');
        chair.style.visibility = "visible";
    });
}
//slider
// var btn_next = document.querySelector("#btn_next");
// var btn_prev = document.querySelector("#btn_prev");
// var list_img = document.querySelectorAll("ul#gallery_sh li");
// var img_index = 0;
//
// var img_visible = list_img[img_index].classList.add("visible_img");
//
// btn_next.addEventListener("click", function(event){
//   if(img_index === list_img.length - 1){
//     list_img[img_index].classList.remove("visible_img");
//     img_index = 0;
//     list_img[img_index].classList.add("visible_img");
//   } else if (img_index < list_img.length - 1){
//     list_img[img_index].classList.remove("visible_img");
//     img_index += 1;
//     list_img[img_index].classList.add("visible_img");
//   }
// });
//
// btn_prev.addEventListener("click", function(event){
//   if(img_index == 0){
//     list_img[img_index].classList.remove("visible_img");
//     img_index = list_img.length - 1;
//     list_img[img_index].classList.add("visible_img");
// } else if(img_index < list_img.length){
//   list_img[img_index].classList.remove("visible_img");
//   img_index -= 1;
//   list_img[img_index].classList.add("visible_img");
// }
