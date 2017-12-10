//rozwijanie menu
var li_firm = document.querySelectorAll(".menu_item");
for(var i = 0; i < li_firm.length; i++){
    li_firm[i].addEventListener("click", function(event){
        var element = this.querySelector(".show");
            if(element.style.visibility == "hidden"){
                element.style.visibility = "visible";
            } else if (element.style.visibility == "visible") {
                element.style.visibility = "hidden";
            }
    });
}
//chowanie menu
for(var i = 0; i < li_firm.length; i++){
    li_firm[i].querySelector('.show').addEventListener("mouseleave", function(event){
            if(this.style.visibility == "visible"){
                this.style.visibility = "hidden";
            }
    });
}
//chowanie tekstu i obrazka
var img_modification = document.querySelectorAll('.photo');
for(var i = 0; i < img_modification.length-1; i++){
        img_modification[i].addEventListener("mouseover", function(event){
            this.querySelector('h3').style.visibility = "hidden";
        });
        img_modification[i].addEventListener("mouseout", function(event){
            this.querySelector('h3').style.visibility = "visible";
        });
}
//slider
var btn_next = document.querySelector("#btn_next");
var btn_prev = document.querySelector("#btn_prev");
var list_img = document.querySelectorAll("ul.gallery_sitchairs li");
var img_index = 0;
var img_visible = list_img[img_index].classList.add("visible_img");

btn_next.addEventListener("click", function(event){
  if(img_index === list_img.length - 1){
    list_img[img_index].classList.remove("visible_img");
    img_index = 0;
    list_img[img_index].classList.add("visible_img");
  } else if (img_index < list_img.length - 1){
    list_img[img_index].classList.remove("visible_img");
    img_index += 1;
    list_img[img_index].classList.add("visible_img");
  }
});

btn_prev.addEventListener("click", function(event){
  if(img_index == 0){
    list_img[img_index].classList.remove("visible_img");
    img_index = list_img.length - 1;
    list_img[img_index].classList.add("visible_img");
    } else if(img_index < list_img.length){
      list_img[img_index].classList.remove("visible_img");
      img_index -= 1;
      list_img[img_index].classList.add("visible_img");
    }
});

//dołączanie pakietów
var button_pack = document.querySelectorAll(".price_button");

button_pack[0].addEventListener("click", function(event){
        alert('Wybrałeś/aś PAKIET BASIC');
    });
button_pack[1].addEventListener("click", function(event){
        alert('Wybrałeś/aś PAKIET STANDARD');
    });
button_pack[2].addEventListener("click", function(event){
        alert('Wybrałeś/aś PAKIET ZAAWANSOWANY');
    });

// rozwijanie list w panelu tworzącym zamówienie fotela
var button_order = document.querySelectorAll('.list_arrow');
var list = document.querySelectorAll('.list_panel li');


function list_choose() {
    var element = document.querySelector('.list_panel_clicked').children;
        for(var i = 0; i < element.length; i++){
            element[i].addEventListener('click', function(){
                event.target.parentElement.classList.remove('list_panel_clicked');
                event.target.parentElement.classList.add('list_panel');
            });
        }
}

for (var i = 0; i < button_order.length; i++){
    button_order[i].addEventListener('click', function(){
        this.nextElementSibling.classList.remove('list_panel');
        this.nextElementSibling.classList.add('list_panel_clicked');
        console.log(list)
    list_choose();
    });
}

//sumowanie wartości zamówienia fotela
var suma_type = 0;
var suma_color = 0;
var suma_pattern = 0;
var suma_transport = 0;
var suma_all = 0;
var suma_strong = document.querySelector('.sum strong');

for(var i = 0; i < list.length; i++){
    console.log(i);
    var text = "";
    var price = 0;
        if( i == 0 || i == 1 || i == 2) {
            list[i].addEventListener('click', function(event){
                text = this.innerHTML;
                price = this.dataset.value;
                document.querySelector('.type').innerHTML = text;
                document.querySelector('.type_value').innerHTML = price;
                suma_type = parseInt(price,10);
                price = 0;
                suma_all = suma_type + suma_color + suma_pattern + suma_transport;
                suma_strong.innerHTML = suma_all;
            });
        } else if ( i == 3 || i == 4 || i == 5) {
            list[i].addEventListener('click', function(event){
                text = this.innerHTML;
                price = this.dataset.value;
                document.querySelector('.color').innerHTML = text;
                document.querySelector('.color_value').innerHTML = price;
                suma_color = parseInt(price,10);
                price = 0;
                suma_all = suma_type + suma_color + suma_pattern + suma_transport;
                suma_strong.innerHTML = suma_all;
            });
        } else if ( i == 6 || i == 7 || i == 8) {
            list[i].addEventListener('click', function(event){
                text = this.innerHTML;
                price = this.dataset.value;
                document.querySelector('.pattern').innerHTML = text;
                document.querySelector('.pattern_value').innerHTML = price;
                suma_pattern = parseInt(price,10);
                price = 0;
                suma_all = suma_type + suma_color + suma_pattern + suma_transport;
                suma_strong.innerHTML = suma_all;
            });
        }
}
//dopłata za transport
var transport_price = document.querySelector("#transport-decidion");
console.log(transport_price);
transport_price.addEventListener('click', function(event){
    if(suma_transport == 0){
        suma_transport = 80;
        suma_all = suma_type + suma_color + suma_pattern + suma_transport;
        suma_strong.innerHTML = suma_all;
    } else if (suma_transport = 80){
        suma_transport = 0;
        suma_all = suma_type + suma_color + suma_pattern + suma_transport;
        suma_strong.innerHTML = suma_all;
    }

})
//zamówienie fotela
var order_button = document.querySelector('.order_button');
order_button.addEventListener('click', function(event){
    var left = document.querySelectorAll('.panel_left span');
    var right = document.querySelectorAll('.panel_right span');
    function remove(element, index, array){
        element.innerHTML = "";
    }
    left.forEach(remove);
    right.forEach(remove);
    suma_strong.innerHTML = "";
    suma_type = 0;
    suma_color = 0;
    suma_pattern = 0;
    suma_transport = 0;
    suma_all = 0;
});

//walidacja formularza
var form = document.querySelector('#form_info');
var button_submit = document.querySelector("#form_info button");

form.addEventListener('submit', function(event){
    event.preventDefault();
});

button_submit.addEventListener('click',function(event){
    var inputName = document.querySelector("#form_info input:first-of-type");
    var inputMail = document.querySelector("#form_info input:nth-of-type(2)");
    var textareaMsg = document.querySelector("#form_info textarea");
    var checkBox = document.getElementById("agree");
    console.log(checkBox);

    if(inputName.value.length < 5){
        alert("Wpisane imie jest za krótkie");
    } else if(inputMail.value.indexOf('@') == -1){
        alert("Niepoprawny adres email");
    } else if (textareaMsg.value.length < 15 || textareaMsg.value.length > 50){
        alert("Wiadomość powinna zawierać od 15 do 50 znaków")
    } else if (!checkBox.checked){
        alert("Zaznacz zgodę na przetwarzanie danych osobowych");
    } else {
        form.submit();
    }
})
