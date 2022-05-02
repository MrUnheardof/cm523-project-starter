

$(".flex-item").click(function () {
    console.log($(this).find("a").attr("value"));
    let result=$(this).find("a").attr("value");
    localStorage.setItem("proResult", result);
   
  
  });

 