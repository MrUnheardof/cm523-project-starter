var cat = localStorage.getItem("proResult");

console.log(cat);
var productData = [
        {
          id: "C-001",
          name:"The Sunshine",
          type: "cloth",
          color: "yellow",
          price: "10",
          brand: "brand1",
          size: "size1",
          text:"Please measure your dog and check the size chart (priority follw the chest size) before placing an order, and choose the right size for your lovely pets for a better fit. Made of high-quality soft and breathable fabric to keep your pets comfortable, super friendly to sensitive skin.Adorable design with great details letting your dog become more cute, fashionable, and confident. She will love it. Perfect for everyday wear, photos, and any formal occasions. Easy put on and take off with button or pullover closure. Delicately made to ensure high quality and lasting durability. Multiple colors and styles for your choice. Machine-washable"
        },
      
        {
          id: "C-002",
          name:"Sakura Girl",
          type: "cloth",
          color: "pink",
          price: "15",
          brand: "brand1",
          size: "size1",
          text: "[Size] - Back Length 12, Chest Girth 14.5- 16, Neck 11.5; Measure your dog from the base of the neck to the base of the tail for back length[Material] - Made with 30% cotton, 67% polyester, 3% spandex that will protect your dog during rainy days or harsh weather. This sweatshirt is a warm piece perfect for playing at home, wearing to the park, or any occasion needed![Care] - Machine-washable, with similar color items, in cold water on the gentle cycle."
        },
      
        {
          id: "C-003",
          name:"Homedress-Puppy",
          type: "cloth",
          color: "blue",
          price: "15",
          brand: "brand2",
          size: "size2",
          text:"Delicate design: these dog bowknot dresses for small pets are homogeneously refined with sophisticated stitching; The big bow design adds a sense of sweetness, and your little furry princess will become adorable; And the dresses are flexible, allowing your pet to put on and take off easily without burden Wide applications: these soft and cute dog bowknot dresses are nice for pets to wear on various occasions, such as daily wear, party clothes, wedding, traveling, photo props and birthday clothes, making your pets comfy and charming Breathable fabric: made of soft and breathable material, light and skin friendly, will not scratch dog's skin, light fabric keeps your pet comfy; It gives your pet nice comfort when wearing it in the hot summer"
        },
        {
          id: "C-004",
          name:"Lovely Bear",
          type: "cloth",
          color: "purple",
          price: "20",
          brand: "brand2",
          size: "size2",
          text:"Super vibrant color and adorable print. Perfect for PJ themed party or unrestrained 'Pajama Day'. A good idea for dogs, especially for fur baby having some allergy issues, which primarily prevents him/her from itching.The four legged jammies considerately make sure to keep pets hindquarters warm as well, but plenty of room to do his/her business (pee/poop) and not soil the fabric."
        },
        {
          id: "C-005",
          name:"Rabby Paw",
          type: "cloth",
          color: "orange",
          price: "20",
          brand: "brand3",
          size: "size2",
          text:"Breathable Fabric: made of soft breathable material, it's light in weight, skin-friendly and will not hurt dog's skin; It gives your pet comfortable wearing experience especially in the hot summer. Practical Design: these dog T-Shirts for pets feature good stitching and stylish plaid pattern, which adds a sense of vitality; With the button design, even if your pet's head circumference is relatively large, the dog shirts still can be easy put on and take off. Wide Applications: the soft dog shirt is nice for pets to wear in daily life and on various occasions, such as party, wedding, traveling, taking photos and birthday, etc., making your pets comfy and charming. Measure Size: please check the size of dog's body, neck, back and chest before purchasing, make it a well fit; And use the pet's chest girth as the purchase size standard; If the measured value of any part of your pet is between 2 sizes, please select the larger size"
        },
      
        {
          id: "H-001",
          name:"Magical Girl",
          type: "harness",
          color: "blue",
          price: "10",
          brand: "brand1",
          size: "size1" ,
          text:"Size XS: Neck girth 10' - 12'; Chest girth 11.5' - 13.5'; Leash length 59', width 0.6'. Please measure your dog/cat carefully and refer to the size chart before order. Quality Material: Made of 100% polyester, which is soft, lightweight, and breathable fabric. This air-mesh dog harness is designed to reduce tugging and pulling on your pet's neck. No complex decoration, but comfortable and safe performance. Reflective: The reflective material will make your dog more visible and safe in the dark. It makes drivers have a long time to react if your dog is on the road. Reflective straps are really nice while out for a walk. Classic Plaid Pattern: Unique beige plaid design is not the latest fashion, but it's never out of date. The simple style suits almost any breed of dog and integrates into different environments. Your dog would be attractive and cute when wearing it. Easy Step-On: The hook&loop and quick-release buckle make it effortlessly slip on or off your dog in seconds. Each harness is with a leash, double D-rings allow them to connect securely. Great for walking, running, hiking, and all outdoor activities."
        },
      
        {
          id: "H-002",
          name:"The Return of Spring",
          type: "harness",
          color: "white",
          price: "15",
          brand: "brand1",
          size: "size1",
          text:"EASY TO GET ON/OFF: This no pull harness has the snap buckle in for both the body and neck so it makes it so much easier to put on and off. NO need fight dog's head to slip in the harness, won’t hurt their ears either.NO PULL AND CHOKE FREE: The front metal D-ring is great if you have a dog who hasn't yet learned not to pull on the lead during walks. If the dog pulls, they end up turned around facing you, so they quickly learn to stop pulling. Also, it is soft breathable non-toxic mesh padded, pulling pressure is evenly distributed to the body to prevent choking. PERFECT CONTROL: There’s a soft handle on the top, you can grab it and keep control of dogs when they go crazy or when they need help. It can restrain dogs easily and also perfect for walking them up steps, stairs and cars, etc. QUALITY MATERIALS: The straps and durable fabric are comfortable and do not interfere or irritate with movement. Breathable mesh lining with soft padding prevents dog injuries, giving extra comfort and protection. FULLY ADJUSTABLE: 4 ways adjustable straps at neck and chest, gets a customized fit with extra grow room. Please DO MEASURE your dog to get the right size before purchase! WARMLY NOTE: Please DO Measure Dog's Neck & Chest Girth before Buying! Then Check Size Chart Carefully!"        
        },
      
        {
          id: "H-003",
          name:"Police Style ArmyGreen",
          type: "harness",
          color: "greem",
          price: "25",
          brand: "brand2",
          size: "size3",
          text:"Safety your features include Nylon webbing with reflective material for Good visibility at night and Sturdy handle for easy seat belt attachment while riding in your car.reflective Nylon webbing ensure good visibility for this high-end Dog Harness. Comfortable lightweight Mesh lining with soft sponge padding in chest and belly.Dog Harness Vest do the best to  prevent the dog injuries than a collar.Two leash attachment points: Aluminium-alloy V-Ring on the dog's back and Stainless steel O-ring on the dog's chest.They are very durable, sturdy and keep your puppy’s safely. Please measure your dog's chest circumference at the same location as the line shown in second picture on the left ."
        },
      
        {
          id: "H-004",
          name:"Police Style Black",
          type: "harness",
          color: "black",
          price: "25",
          brand: "brand2",
          size: "size3"
          ,
          text:"Safety your features include Nylon webbing with reflective material for Good visibility at night and Sturdy handle for easy seat belt attachment while riding in your car.reflective Nylon webbing ensure good visibility for this high-end Dog Harness. Comfortable lightweight Mesh lining with soft sponge padding in chest and belly.Dog Harness Vest do the best to  prevent the dog injuries than a collar.Two leash attachment points: Aluminium-alloy V-Ring on the dog's back and Stainless steel O-ring on the dog's chest.They are very durable, sturdy and keep your puppy’s safely. Please measure your dog's chest circumference at the same location as the line shown in second picture on the left ."
        },
      
        {
          id: "H-005",
          name:"Rabbitgoo",
          type: "harness",
          color: "blue",
          price: "20",
          brand: "brand3",
          size: "size2"
          ,
          text:"Large Dog Harness - Recommended Breeds: Medium to Large Dogs, such as Golden Retriever, Huskie, Labrador, Alaska, German Shepherd, Akita, etc. Please measure the size carefully before purchasing this present for your puppy. Make your puppy stand out with this Classic Black Harness! No Pull, No Choke - Our non-pulling dog harness is specially designed with 2 metal leash rings for safer dog walks. Use the chest attachment clip to stop your dog from pulling on walks, perfect for dog training or dogs who tend to pull. The back one is great for casual walks, jogging, hiking, etc Easy to Use - This hassle-free overhead harness is easy to put on and take off with its 2 fast-release buckles. Slide the harness over your dog's head, buckle it up, adjust the straps, and here you go! Grab the top handle for additional control. Lightweight and easy to clean Fully Adjustable - This adjustable harness features 4 easy adjusting straps around the body. You can use its 2 neck straps and 2 chest straps to create a perfect fit for your dog with some room of growth. No worries about slipping out or choking  Safe and Comfortable - Your dog will enjoy the daily walk in this comfort dog harness! Made of durable nylon oxford and padded with soft cushion to protect your dog's skin. Breathable air mesh keeps your dog cool during outdoor activities. Super bright reflective strips ensure a safe walk both day and night"
        },
      
        {
          id: "F-001",
          name:"Canned Food Meat",
          type: "food",
          color: "null",
          price: "15",
          brand: "brand1",
          size: "null"
          ,
          text:"Real Meat First: Cage-free American chicken is the #1 ingredient; protein helps keep your dog at his bounding best、、、No added chicken by-product meal, corn, wheat, soy, artificial colors, flavors, or preservatives、、、Added calcium and phosphorus for bones and teeth; support for bones and joints with guaranteed glucosamine、、、Added antioxidants to support immune system; added DHA for brain function、、、Formulated with the help of veterinarians and a pet nutritionist、、、Gradual transitioning is important to help avoid dietary upsets. Please see instructions below or on the bag."
        },
      
        {
          id: "F-002",
          name:"Teeth Brushes Set of 16",
          type: "food",
          color: "null",
          price: "35",
          brand: "brand2",
          size: "null"
          ,
          text:"Helps reduce plaque & tartar build-up through the abrasive action of chewing Contains 36 textured treats for medium dogs, 25–50 lbs Feed as a treat, not a main source of food. For dogs 25–50 lbs., feed your pet 1 treat per day. Monitor your dog's ideal body weight and do not overfeed. Non-GMO; Non-BPA packaging; No added grain, corn, or wheat and no added artificial colors or flavors; No added poultry by-products Monitor your dog to ensure the treat is chewed sufficiently and keep your dog from swallowing large chunks without chewing, which can lead to digestive upsets. Not recommended for dogs under 5 lbs., or less than 6 months of age. Do not cut treats into pieces."},
      
        {
          id: "F-003",
          name:"Fish Sausage",
          type: "food",
          color: "null",
          price: "15",
          brand: "brand3",
          size: "null"
          ,
          text:"Packed with fresh meat and high quality, garden-fresh ingredients, our sausage is an easy solution to feeding your dog a nutritious, high-protein diet. It meets the nutritional levels established by AAFCO for all life stages, from puppies to senior dogs. We use a low-temperature cooking process that allows our food to retain vital minerals and nutrients. We’ve also added functional ingredients like Sunflower Oil, a rich source of omega 6, and Flaxseed to support digestion and a healthy skin and coat. With over 50% fresh protein per roll, it’s more convenient than a raw food diet and can easily be stored without the need for refrigeration until opened. Can be used as a complete and balanced meal, as a protein supplement to dry food, a treat, a training tool, or an aid for administering medications. Made without the use of artificial flavors, colors or preservatives. Our beef and chicken recipes are available in whole grain or grain-free. Sourced and prepared in the USA in our Kansas company-owned facility."},
      
        {
          id: "F-004",
          name:"Bagged Food with Fruit",
          type: "food",
          color: "null",
          price: "25",
          brand: "brand4",
          size: "null"
          ,
          text:"U.S. farm-raised chicken is always the ingredient Natural dog food with added vitamins & minerals No poultry by-product meal, fillers, artificial preservatives, colors or artificial flavors Safely USA cooked with the best ingredients"},
      
        {
          id: "F-005",
          name:"Bagged Food",
          type: "food",
          color: "null",
          price: "46",
          brand: "brand5",
          size: "null"
          ,
          text:"SUPPORTS HEALTHY GROWTH - our puppy dry dog food supports healthy muscle and bone development in growing puppies. With high-quality animal protein, optimal levels of calcium and phosphorous your puppy stays energetic, playful, and happy.SUPPORTS BRAIN DEVELOPMENT - our medium and small breed puppy food contains salmon oil. The DHA from salmon oil supports brain development in growing puppies. These omega 3 fatty acids actively help your little fur baby with memory and learning in early developmental stages.SUPPORTS HEALTHY SKIN AND A SHINY COAT - our skin health is dependent on many factors. Our dog food puppy recipe supports healthy skin and a shiny coat with Omega-3 and -6 fatty acids, Zinc, and Copper. IMMUNITY SUPPORT - our puppy foods support the immune system through the use of antioxidants such as vitamins E and C, plus other nutrients indicated for immune system health, including vitamin A, Zinc, and Selenium. Our recipes provide the entire spectrum of nutritional support."},
      
        {
          id: "T-001",
          name:"Lifbouy",
          type: "toy",
          color: "null",
          price: "25",
          brand: "brand1",
          size: "size3"
          ,
          text:"DOG CHEW TOYS AND TEETH CLEANING - Chewing as well as cleaning to get happy and healthy at same time! Indestructible dog toys with high quality cotton fibers are like dental floss to easily slide in tight spaces and gently stimulates gums, super chewer dog toys large breed provides fresh feeling and sparkle teeth with every chews. Dog chews for aggressive chewers help to from chewing habits and stop destructive behavior, ideal pet toys as puppy toys and aggressive chewers dog toys for large dogs. INTERACTIVE DOG TOYS FOR BOREDOM - Dogs are crazy love for chewing, tugging, running, chew toys for aggressive chewers large breed are made for that. Sturdy ropes toys for dogs are perfect for whether dogs self plays at home, tug of war games with you, or as outdoor dog toys. Big dog toys help to burn off excess energy of dogs, keep physically and mentally stimulated. Also great dog training toys to keep them stay focused and make training efficiently, best dog toys for aggressive chewers、、、HEAVY DUTY DOG TOY GIFTS FOR DOGS & GUARANTEE - Dog toy bundle are essential dog tug toys for dogs, best as christmas dog toys and dog birthday toys. The nearly indestructible tough dog toys for aggressive chewers large breed are long lasting and perfect as pitbull toys, german shepherd toys. If your dogs are extremely aggressive chewers, please only play the dog tug toys for large dogs under supervision. We are confident with premium dog toy pack and offer 30 days money-back guarantee"
        },
      
        {
          id: "T-002",
          name:"Plush Pack of 3",
          type: "toy",
          color: "null",
          price: "15",
          brand: "brand2",
          size: "null"
          ,
          text:"Fun Characters - Dogs will have hours of fun playing with 3 adorable creatures such as the pig, duck and dunky. Exclusive Noisemakers - Each large toy includes 3 high-quality round squeakers to deliver more sound to keep your best friend entertained. Just The Right Size - This fun filled plush set is 18 inches long, the perfect size for medium dogs of all life stages. Unique Design - Beautifully-designed, high-quality pet products for the modern dog and dog owner"},
      
        {
          id: "T-003",
          name:"Angry Bird Piggy Head",
          type: "toy",
          color: "null",
          price: "10",
          brand: "brand3",
          size: "null"
          ,
          text:"TIME TO PLAY AND HAVE FUN - Meet your new friend Dandy, this pig plush is the perfect pet squeaky toy as our dog toys are high-quality squeaky dog toys for the modern doggy and dog owner: The puppy toys are stuffed with interactive balls, best for squeakers. `AN ACTIVE LIFESTYLE FOR YOUR PUP - Zenapoki interactive dog toy plush are great dog toys for aggressive chewers large breed for playing, bonding, and relationship building: Play with dog toys small dogs and dog toys for large dogs to create daily entertainment that relieves boredom or anxiety. THE BEST DOG TOYS, 100% GUARANTEED - These dig toys come in different shapes so you can find your buddy's favorite playmate: let them tear through our fun and awesome dog chew toys to get its squeaky dog reward"},
        {
          id: "T-004",
          name:"Durable Rope Chew Toy Set of 3",
          type: "toy",
          color: "null",
          price: "15",
          brand: "brand2",
          size: "null"
          ,
          text:"Great for Dogs & Protect Your Home: Dogs are chewers by nature, when teething, boredom, loneliness, stress relief, will chew everything. Our dog chew toys designed for chewing dogs to protect your home (like shoes, sofa, pillows) from chewing. Through these exclusive puppy chew toys not only give you a tidy home and make your dog healthy. Clean teeth & Freshen breath: Clean your dog's teeth, make your dog healthier. So by our chewing rubber toothbrush, and rope toys, dogs get gum massage and stress relief, reduce tartar and plaque buildup as your dog chews away and help to freshen breath. Make your puppy having healthy chewing behavior by our dog teething toys. Training toys & Improve relationship: Tired dogs are happy dogs! Training make dogs physically fit and mentally sharp. Dogs love Chasing a training toy. When dogs learn to toss and roll dog treat balls to get their treats out. And various rope toys are great for tug. These pet toys positively enhance the relationship between you and your dogs."
        },
        {
          id: "T-005",
          name:"Auto Fetch Machine",
          type: "toy",
          color: "null",
          price: "26",
          brand: "brand1",
          size: "null"
          ,
          text:"READY SET FETCH: This automatic tennis ball launcher is built to provide your dog with continuous interactive play even when you're not at home! SAFETY: When the ball is preparing to fire there is a safety alert buzzer to let your pet know the ball is about to launch. This sound feature can be turned on and off. POWER ADAPTER INCLUDED: Play with no end in sight. No batteries needed, just plug and play! This launcher also features a battery compartment for [8] D batteries for when you want to play on the go!. ADJUSTABLE DISTANCE: Choose from three different preset launch angles to set the perfect throwing distance for your surroundings"
        }
      ];

checkAnswer(cat);
function checkAnswer (a){
   
        console.log(a);
        document.getElementById("product-image").src="images/"+a+".png";
      
        let proAnswer={};
        productData.forEach((proPrice) => {
          if (a == proPrice.id) {
            console.log("we have a  " + proPrice.price);
            document.getElementById("price").innerText="$"+ proPrice.price;
            document.getElementById("productName").innerText=proPrice.name;
            document.getElementById("productText").innerText=proPrice.text;
            proAnswer=proPrice; 
          }
        });
        console.log(proAnswer);
        let displayOther=[];
        productData.forEach((protype) => {
                if (proAnswer.type == protype.type && proAnswer.id!=protype.id) {
                  console.log("we have a match ", protype.id);
                  displayOther.push(protype);
                }
              });
              console.log(displayOther);
              console.log(displayOther[0].id)
              document.getElementById("icon1").src="images/"+displayOther[0].id+".png";
              $('#product1').find("a").attr("value",displayOther[0].id);
              document.getElementById("productId1").innerText=displayOther[0].name;
              console.log($('#product1').find("a").attr("value"));
              document.getElementById("icon2").src="images/"+displayOther[1].id+".png";
              $('#product2').find("a").attr("value",displayOther[1].id);
              document.getElementById("productId2").innerText=displayOther[1].name;
              document.getElementById("icon3").src="images/"+displayOther[2].id+".png";
              $('#product3').find("a").attr("value",displayOther[2].id);
              document.getElementById("productId3").innerText=displayOther[2].name;
              
          
            
         
             
            
}

$(".flex-item").click(function () {

  console.log($(this).find("a").attr("value"));
  let result=$(this).find("a").attr("value");
  localStorage.setItem("proResult", result);
 

});