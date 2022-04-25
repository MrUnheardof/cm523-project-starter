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
    id: "F-001",
    type: "food",
    color: "red",
    price: "price1",
    brand: "brand1",
    size: "size1"
  },
  {
    id: "F-002",
    type: "food",
    color: "blue",
    price: "price1",
    brand: "brand1",
    size: "size2"
  },
  {
    id: "H-001",
    type: "harness",
    color: "red",
    price: "price1",
    brand: "brand2",
    size: "size3"
  },
  {
    id: "H-002",
    type: "harness",
    color: "blue",
    price: "price2",
    brand: "brand3",
    size: "brand2"
  },
  {
    id: "C-001",
    type: "cloth",
    color: "red",
    price: "price1",
    brand: "brand2",
    size: "size3"
  },
  {
    id: "C-001",
    type: "cloth",
    color: "red",
    price: "price2",
    brand: "brand3",
    size: "size2"
  },
  {
    id: "T-001",
    type: "toy",
    color: "red",
    price: "price1",
    brand: "brand2",
    size: "size3"
  },
  {
    id: "T-002",
    type: "cloth",
    color: "blue",
    price: "price2",
    brand: "brand3",
    size: "size2"
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
  result = result.toLowerCase();
  console.log(result);
  //window.location= result+'html.com';
}

//slide
$(document).ready(function () {
  $slideshow = $(".carousel").slick({
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    dots: true
  });
});

$(".radio-item").click(function () {
  $slideshow.slick("slickNext");
});
