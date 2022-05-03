/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
const submitBtn = document.getElementById("btnsubmit");
const proType = document.getElementsByName("q1");
const proPrice = document.getElementsByName("q2");
const proBrand = document.getElementsByName("q3");
const proSize = document.getElementsByName("q4");
const proColor = document.getElementsByName("q5");



submitBtn.addEventListener("click", getAnswer);



var productData = [
  {
    id: "C-001",
    type: "cloth",
    color: "yellow",
    price: "price1",
    brand: "brand1",
    size: "size1"
  },

  {
    id: "C-002",
    type: "cloth",
    color: "pink",
    price: "price1",
    brand: "brand1",
    size: "size1"
  },

  {
    id: "C-003",
    type: "cloth",
    color: "blue",
    price: "price1",
    brand: "brand2",
    size: "size2"
  },

  {
    id: "C-004",
    type: "cloth",
    color: "purple",
    price: "price2",
    brand: "brand2",
    size: "size2"
  },

  {
    id: "C-005",
    type: "cloth",
    color: "orange",
    price: "price2",
    brand: "brand3",
    size: "size2"
  },

  {
    id: "H-001",
    type: "harness",
    color: "blue",
    price: "price1",
    brand: "brand1",
    size: "size1"
  },

  {
    id: "H-002",
    type: "harness",
    color: "white",
    price: "price1",
    brand: "brand1",
    size: "size1"
  },

  {
    id: "H-003",
    type: "harness",
    color: "greem",
    price: "price2",
    brand: "brand2",
    size: "size3"
  },

  {
    id: "H-004",
    type: "harness",
    color: "black",
    price: "price2",
    brand: "brand2",
    size: "size3"
  },

  {
    id: "H-005",
    type: "harness",
    color: "blue",
    price: "price2",
    brand: "brand3",
    size: "size2"
  },

  {
    id: "F-001",
    type: "food",
    color: "null",
    price: "price1",
    brand: "brand1",
    size: "null"
  },

  {
    id: "F-002",
    type: "food",
    color: "null",
    price: "price3",
    brand: "brand2",
    size: "null"
  },

  {
    id: "F-003",
    type: "food",
    color: "null",
    price: "price1",
    brand: "brand3",
    size: "null"
  },

  {
    id: "F-004",
    type: "food",
    color: "null",
    price: "price2",
    brand: "brand4",
    size: "null"
  },

  {
    id: "F-005",
    type: "food",
    color: "null",
    price: "price3",
    brand: "brand5",
    size: "null"
  },

  {
    id: "T-001",
    type: "toy",
    color: "null",
    price: "price2",
    brand: "brand1",
    size: "size3"
  },

  {
    id: "T-002",
    type: "toy",
    color: "null",
    price: "price1",
    brand: "brand2",
    size: "null"
  },

  {
    id: "T-003",
    type: "toy",
    color: "null",
    price: "price1",
    brand: "brand3",
    size: "null"
  },
  {
    id: "T-004",
    type: "toy",
    color: "null",
    price: "price2",
    brand: "brand2",
    size: "null"
  },
  {
    id: "T-005",
    type: "toy",
    color: "null",
    price: "price3",
    brand: "brand1",
    size: "null"
  }
];

function getAnswer() {
  let answer = {};
  console.log($("input[type='radio'][name='q1']:checked").val());
  answer.type = $("input[type='radio'][name='q1']:checked").val();
  console.log($("input[type='radio'][name='q2']:checked").val());
  answer.price = $("input[type='radio'][name='q2']:checked").val();
  console.log($("input[type='radio'][name='q3']:checked").val());
  answer.brand = $("input[type='radio'][name='q3']:checked").val();
  console.log($("input[type='radio'][name='q4']:checked").val());
  answer.size = $("input[type='radio'][name='q4']:checked").val();
  console.log($("input[type='radio'][name='q5']:checked").val());
  answer.color = $("input[type='radio'][name='q5']:checked").val();
  findProduct(answer);
  return answer;
}

function findProduct(ans) {
  let matches = [];
  let typematches = [];
  console.log(ans.type);

  productData.forEach((protype) => {
    if (ans.type == protype.type) {
      console.log("we have a match ", protype.id);
      typematches.push(protype);
    }
  });
  console.log(typematches);
  console.log(ans.price);
  typematches.forEach((proprice) => {
    if (ans.price == proprice.price) {
      console.log("we have a match ", proprice.id);
      matches.push(proprice.id);
    }
  });
  console.log(ans.brand);
  typematches.forEach((probrand) => {
    if (ans.brand == probrand.brand) {
      console.log("we have a match ", probrand.id);
      matches.push(probrand.id);
    }
  });
  console.log(ans.size);
  typematches.forEach((prosize) => {
    if (ans.size == prosize.size) {
      console.log("we have a match ", prosize.id);
      matches.push(prosize.id);
    }
  });
  console.log(ans.color);
  typematches.forEach((procolor) => {
    if (ans.color == procolor.color) {
      console.log("we have a match ", procolor.id);
      matches.push(procolor.id);
    }
  });
  console.log(matches);
  var proResult = mode(matches);

  console.log("Your product is " + proResult);
  getPage(proResult);
}

function mode(array) {
  if (array.length == 0) return null;
  var modeMap = {};
  var maxEl = array[0],
    maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }

  return maxEl;
}
function getPage(result) {
 
  console.log(result);
  localStorage.setItem("proResult", result);

  window.location.href= "productpage.html";
}

//slide
$(document).ready(function () {
  $slideshow = $(".carousel").slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    infinite: false,
    dots: true,
  });
});

$("#food").click(function () {
  $(".carousel").slick("slickUnfilter");

  $(".carousel").slick("slickFilter", ".foodslide");
});

$("#harness").click(function () {
  $(".carousel").slick("slickUnfilter");

  $(".carousel").slick("slickFilter", ".harnesslide");
});

$("#cloth").click(function () {
  $(".carousel").slick("slickUnfilter");

  $(".carousel").slick("slickFilter", ".clothslide");
});
 $("#toy").click(function () {
  $(".carousel").slick("slickUnfilter");

  $(".carousel").slick("slickFilter", ".toyslide");
});

$(".radio-item").change(function () {
  $(".carousel").slick("slickNext");
});



$(".radio-item").change(function () {

  let a=$("input[type='radio'][name='q1']:checked").parent().find('label').text()+" ";
  console.log( $("input[type='radio'][name='q1']:checked").parent().find('label').text()+"");
  let b=$("input[type='radio'][name='q2']:checked").parent().find('label').text()+" ";
  console.log( $("input[type='radio'][name='q2']:checked").parent().find('label').text()+"");
  let c=$("input[type='radio'][name='q3']:checked").parent().find('label').text()+" ";
  console.log( $("input[type='radio'][name='q3']:checked").parent().find('label').text()+"");
  let d=$("input[type='radio'][name='q4']:checked").parent().find('label').text()+" ";
  console.log( $("input[type='radio'][name='q4']:checked").parent().find('label').text()+"");
  let e=$("input[type='radio'][name='q5']:checked").parent().find('label').text()+" ";
  console.log( $("input[type='radio'][name='q5']:checked").parent().find('label').text()+"");
  document.getElementById("finalTitle").innerText="Your Choices:"+" "+a+"  "+b+"  "+c+"  "+d+"  "+e;
});

let typeQ = $('input[name=q1]');
       let priceQ = $('input[name=q2]');
       let  brandQ = $('input[name=q3]');
       let  sizeQ = $('input[name=q4]');
       let  colorQ = $('input[name=q5]');
        
validate();
   
          $("input[type='radio']").change(validate);
     
          function validate() {
              if ($("#toy").is (':checked')||$("#harness").is (':checked')){
              if ($(typeQ).is(':checked') && $(priceQ ).is(':checked') && $(brandQ).is(':checked') && $(sizeQ).is(':checked') && $(colorQ).is(':checked') ) {
                  console.log("1");
                  $("#btnsubmit").removeAttr("disabled", false);
                  return;
              }
            } 
              if ($("#food").is (':checked')||$("#toy").is (':checked')){
                if ($(typeQ).is(':checked') && $(priceQ ).is(':checked') && $(brandQ).is(':checked'))  {
                  console.log("2");
                    $("#btnsubmit").removeAttr("disabled", false);
                    return;
                }
              }
              else{console.log("3");
                  $("#btnsubmit").attr("disabled", true);
              }
          
            }
