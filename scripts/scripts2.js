var cat = localStorage.getItem("proResult");

console.log(cat);
var productData = [
        {
          id: "C-001",
          type: "cloth",
          color: "yellow",
          price: "10",
          brand: "brand1",
          size: "size1",
          text:"Breathable Fabric: made of soft breathable material, it's light in weight, skin-friendly and will not hurt dog's skin; It gives your pet comfortable wearing experience especially in the hot summer、、、Practical Design: these dog T-Shirts for pets feature good stitching and stylish plaid pattern, which adds a sense of vitality; With the button design, even if your pet's head circumference is relatively large, the dog shirts still can be easy put on and take off、、、Wide Applications: the soft dog shirt is nice for pets to wear in daily life and on various occasions, such as party, wedding, traveling, taking photos and birthday, etc., making your pets comfy and charming、、、Measure Size: please check the size of dog's body, neck, back and chest before purchasing, make it a well fit; And use the pet's chest girth as the purchase size standard; If the measured value of any part of your pet is between 2 sizes, please select the larger size"
        },
      
        {
          id: "C-002",
          type: "cloth",
          color: "pink",
          price: "15",
          brand: "brand1",
          size: "size1",
          text: "Breathable Fabric: made of soft breathable material, it's light in weight, skin-friendly and will not hurt dog's skin; It gives your pet comfortable wearing experience especially in the hot summer、、、Practical Design: these dog T-Shirts for pets feature good stitching and stylish plaid pattern, which adds a sense of vitality; With the button design, even if your pet's head circumference is relatively large, the dog shirts still can be easy put on and take off、、、Wide Applications: the soft dog shirt is nice for pets to wear in daily life and on various occasions, such as party, wedding, traveling, taking photos and birthday, etc., making your pets comfy and charming、、、Measure Size: please check the size of dog's body, neck, back and chest before purchasing, make it a well fit; And use the pet's chest girth as the purchase size standard; If the measured value of any part of your pet is between 2 sizes, please select the larger size"
          
        },
      
        {
          id: "C-003",
          type: "cloth",
          color: "blue",
          price: "15",
          brand: "brand2",
          size: "size2",
          text:"Breathable Fabric: made of soft breathable material, it's light in weight, skin-friendly and will not hurt dog's skin; It gives your pet comfortable wearing experience especially in the hot summer、、、Practical Design: these dog T-Shirts for pets feature good stitching and stylish plaid pattern, which adds a sense of vitality; With the button design, even if your pet's head circumference is relatively large, the dog shirts still can be easy put on and take off、、、Wide Applications: the soft dog shirt is nice for pets to wear in daily life and on various occasions, such as party, wedding, traveling, taking photos and birthday, etc., making your pets comfy and charming、、、Measure Size: please check the size of dog's body, neck, back and chest before purchasing, make it a well fit; And use the pet's chest girth as the purchase size standard; If the measured value of any part of your pet is between 2 sizes, please select the larger size"
        },
      
        {
          id: "C-004",
          type: "cloth",
          color: "purple",
          price: "20",
          brand: "brand2",
          size: "size2",
          text:"Breathable Fabric: made of soft breathable material, it's light in weight, skin-friendly and will not hurt dog's skin; It gives your pet comfortable wearing experience especially in the hot summer、、、Practical Design: these dog T-Shirts for pets feature good stitching and stylish plaid pattern, which adds a sense of vitality; With the button design, even if your pet's head circumference is relatively large, the dog shirts still can be easy put on and take off、、、Wide Applications: the soft dog shirt is nice for pets to wear in daily life and on various occasions, such as party, wedding, traveling, taking photos and birthday, etc., making your pets comfy and charming、、、Measure Size: please check the size of dog's body, neck, back and chest before purchasing, make it a well fit; And use the pet's chest girth as the purchase size standard; If the measured value of any part of your pet is between 2 sizes, please select the larger size"
        },
      
        {
          id: "C-005",
          type: "cloth",
          color: "orange",
          price: "20",
          brand: "brand3",
          size: "size2",
          text:"Breathable Fabric: made of soft breathable material, it's light in weight, skin-friendly and will not hurt dog's skin; It gives your pet comfortable wearing experience especially in the hot summer、、、Practical Design: these dog T-Shirts for pets feature good stitching and stylish plaid pattern, which adds a sense of vitality; With the button design, even if your pet's head circumference is relatively large, the dog shirts still can be easy put on and take off、、、Wide Applications: the soft dog shirt is nice for pets to wear in daily life and on various occasions, such as party, wedding, traveling, taking photos and birthday, etc., making your pets comfy and charming、、、Measure Size: please check the size of dog's body, neck, back and chest before purchasing, make it a well fit; And use the pet's chest girth as the purchase size standard; If the measured value of any part of your pet is between 2 sizes, please select the larger size"
        },
      
        {
          id: "H-001",
          type: "harness",
          color: "blue",
          price: "10",
          brand: "brand1",
          size: "size1" ,
          text:"Safety your features include Nylon webbing with reflective material for Good visibility at night and Sturdy handle for easy seat belt attachment while riding in your car.reflective Nylon webbing ensure good visibility for this high-end Dog Harness.、、、Comfortable lightweight Mesh lining with soft sponge padding in chest and belly.Dog Harness Vest do the best to  prevent the dog injuries than a collar.、、、Two leash attachment points: Aluminium-alloy V-Ring on the dog's back and Stainless steel O-ring on the dog's chest.They are very durable, sturdy and keep your puppy’s safely.、、、Please measure your dog's chest circumference at the same location as the line shown in second picture on the left ."
        },
      
        {
          id: "H-002",
          type: "harness",
          color: "white",
          price: "15",
          brand: "brand1",
          size: "size1",
          text:"Safety your features include Nylon webbing with reflective material for Good visibility at night and Sturdy handle for easy seat belt attachment while riding in your car.reflective Nylon webbing ensure good visibility for this high-end Dog Harness.、、、Comfortable lightweight Mesh lining with soft sponge padding in chest and belly.Dog Harness Vest do the best to  prevent the dog injuries than a collar.、、、Two leash attachment points: Aluminium-alloy V-Ring on the dog's back and Stainless steel O-ring on the dog's chest.They are very durable, sturdy and keep your puppy’s safely.、、、Please measure your dog's chest circumference at the same location as the line shown in second picture on the left ."
        },
      
        {
          id: "H-003",
          type: "harness",
          color: "greem",
          price: "25",
          brand: "brand2",
          size: "size3"
          ,
          text:"Safety your features include Nylon webbing with reflective material for Good visibility at night and Sturdy handle for easy seat belt attachment while riding in your car.reflective Nylon webbing ensure good visibility for this high-end Dog Harness.、、、Comfortable lightweight Mesh lining with soft sponge padding in chest and belly.Dog Harness Vest do the best to  prevent the dog injuries than a collar.、、、Two leash attachment points: Aluminium-alloy V-Ring on the dog's back and Stainless steel O-ring on the dog's chest.They are very durable, sturdy and keep your puppy’s safely.、、、Please measure your dog's chest circumference at the same location as the line shown in second picture on the left ."
        },
      
        {
          id: "H-004",
          type: "harness",
          color: "black",
          price: "25",
          brand: "brand2",
          size: "size3"
          ,
          text:"Safety your features include Nylon webbing with reflective material for Good visibility at night and Sturdy handle for easy seat belt attachment while riding in your car.reflective Nylon webbing ensure good visibility for this high-end Dog Harness.、、、Comfortable lightweight Mesh lining with soft sponge padding in chest and belly.Dog Harness Vest do the best to  prevent the dog injuries than a collar.、、、Two leash attachment points: Aluminium-alloy V-Ring on the dog's back and Stainless steel O-ring on the dog's chest.They are very durable, sturdy and keep your puppy’s safely.、、、Please measure your dog's chest circumference at the same location as the line shown in second picture on the left ."
        },
      
        {
          id: "H-005",
          type: "harness",
          color: "blue",
          price: "20",
          brand: "brand3",
          size: "size2"
          ,
          text:"Safety your features include Nylon webbing with reflective material for Good visibility at night and Sturdy handle for easy seat belt attachment while riding in your car.reflective Nylon webbing ensure good visibility for this high-end Dog Harness.、、、Comfortable lightweight Mesh lining with soft sponge padding in chest and belly.Dog Harness Vest do the best to  prevent the dog injuries than a collar.、、、Two leash attachment points: Aluminium-alloy V-Ring on the dog's back and Stainless steel O-ring on the dog's chest.They are very durable, sturdy and keep your puppy’s safely.、、、Please measure your dog's chest circumference at the same location as the line shown in second picture on the left ."
        },
      
        {
          id: "F-001",
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
          type: "food",
          color: "null",
          price: "35",
          brand: "brand2",
          size: "null"
          ,
          text:"Real Meat First: Cage-free American chicken is the #1 ingredient; protein helps keep your dog at his bounding best、、、No added chicken by-product meal, corn, wheat, soy, artificial colors, flavors, or preservatives、、、Added calcium and phosphorus for bones and teeth; support for bones and joints with guaranteed glucosamine、、、Added antioxidants to support immune system; added DHA for brain function、、、Formulated with the help of veterinarians and a pet nutritionist、、、Gradual transitioning is important to help avoid dietary upsets. Please see instructions below or on the bag."
        },
      
        {
          id: "F-003",
          type: "food",
          color: "null",
          price: "15",
          brand: "brand3",
          size: "null"
          ,
          text:"Real Meat First: Cage-free American chicken is the #1 ingredient; protein helps keep your dog at his bounding best、、、No added chicken by-product meal, corn, wheat, soy, artificial colors, flavors, or preservatives、、、Added calcium and phosphorus for bones and teeth; support for bones and joints with guaranteed glucosamine、、、Added antioxidants to support immune system; added DHA for brain function、、、Formulated with the help of veterinarians and a pet nutritionist、、、Gradual transitioning is important to help avoid dietary upsets. Please see instructions below or on the bag."
        },
      
        {
          id: "F-004",
          type: "food",
          color: "null",
          price: "25",
          brand: "brand4",
          size: "null"
          ,
          text:"Real Meat First: Cage-free American chicken is the #1 ingredient; protein helps keep your dog at his bounding best、、、No added chicken by-product meal, corn, wheat, soy, artificial colors, flavors, or preservatives、、、Added calcium and phosphorus for bones and teeth; support for bones and joints with guaranteed glucosamine、、、Added antioxidants to support immune system; added DHA for brain function、、、Formulated with the help of veterinarians and a pet nutritionist、、、Gradual transitioning is important to help avoid dietary upsets. Please see instructions below or on the bag."
        },
      
        {
          id: "F-005",
          type: "food",
          color: "null",
          price: "46",
          brand: "brand5",
          size: "null"
          ,
          text:"Real Meat First: Cage-free American chicken is the #1 ingredient; protein helps keep your dog at his bounding best、、、No added chicken by-product meal, corn, wheat, soy, artificial colors, flavors, or preservatives、、、Added calcium and phosphorus for bones and teeth; support for bones and joints with guaranteed glucosamine、、、Added antioxidants to support immune system; added DHA for brain function、、、Formulated with the help of veterinarians and a pet nutritionist、、、Gradual transitioning is important to help avoid dietary upsets. Please see instructions below or on the bag."
        },
      
        {
          id: "T-001",
          type: "toy",
          color: "null",
          price: "25",
          brand: "brand1",
          size: "size3"
          ,
          text:"DOG CHEW TOYS AND TEETH CLEANING - Chewing as well as cleaning to get happy and healthy at same time! Indestructible dog toys with high quality cotton fibers are like dental floss to easily slide in tight spaces and gently stimulates gums, super chewer dog toys large breed provides fresh feeling and sparkle teeth with every chews. Dog chews for aggressive chewers help to from chewing habits and stop destructive behavior, ideal pet toys as puppy toys and aggressive chewers dog toys for large dogs、、、INTERACTIVE DOG TOYS FOR BOREDOM - Dogs are crazy love for chewing, tugging, running, chew toys for aggressive chewers large breed are made for that. Sturdy ropes toys for dogs are perfect for whether dogs self plays at home, tug of war games with you, or as outdoor dog toys. Big dog toys help to burn off excess energy of dogs, keep physically and mentally stimulated. Also great dog training toys to keep them stay focused and make training efficiently, best dog toys for aggressive chewers、、、HEAVY DUTY DOG TOY GIFTS FOR DOGS & GUARANTEE - Dog toy bundle are essential dog tug toys for dogs, best as christmas dog toys and dog birthday toys. The nearly indestructible tough dog toys for aggressive chewers large breed are long lasting and perfect as pitbull toys, german shepherd toys. If your dogs are extremely aggressive chewers, please only play the dog tug toys for large dogs under supervision. We are confident with premium dog toy pack and offer 30 days money-back guarantee"
        },
      
        {
          id: "T-002",
          type: "toy",
          color: "null",
          price: "15",
          brand: "brand2",
          size: "null"
          ,
          text:"DOG CHEW TOYS AND TEETH CLEANING - Chewing as well as cleaning to get happy and healthy at same time! Indestructible dog toys with high quality cotton fibers are like dental floss to easily slide in tight spaces and gently stimulates gums, super chewer dog toys large breed provides fresh feeling and sparkle teeth with every chews. Dog chews for aggressive chewers help to from chewing habits and stop destructive behavior, ideal pet toys as puppy toys and aggressive chewers dog toys for large dogs、、、INTERACTIVE DOG TOYS FOR BOREDOM - Dogs are crazy love for chewing, tugging, running, chew toys for aggressive chewers large breed are made for that. Sturdy ropes toys for dogs are perfect for whether dogs self plays at home, tug of war games with you, or as outdoor dog toys. Big dog toys help to burn off excess energy of dogs, keep physically and mentally stimulated. Also great dog training toys to keep them stay focused and make training efficiently, best dog toys for aggressive chewers、、、HEAVY DUTY DOG TOY GIFTS FOR DOGS & GUARANTEE - Dog toy bundle are essential dog tug toys for dogs, best as christmas dog toys and dog birthday toys. The nearly indestructible tough dog toys for aggressive chewers large breed are long lasting and perfect as pitbull toys, german shepherd toys. If your dogs are extremely aggressive chewers, please only play the dog tug toys for large dogs under supervision. We are confident with premium dog toy pack and offer 30 days money-back guarantee"
        },
      
        {
          id: "T-003",
          type: "toy",
          color: "null",
          price: "10",
          brand: "brand3",
          size: "null"
          ,
          text:"DOG CHEW TOYS AND TEETH CLEANING - Chewing as well as cleaning to get happy and healthy at same time! Indestructible dog toys with high quality cotton fibers are like dental floss to easily slide in tight spaces and gently stimulates gums, super chewer dog toys large breed provides fresh feeling and sparkle teeth with every chews. Dog chews for aggressive chewers help to from chewing habits and stop destructive behavior, ideal pet toys as puppy toys and aggressive chewers dog toys for large dogs、、、INTERACTIVE DOG TOYS FOR BOREDOM - Dogs are crazy love for chewing, tugging, running, chew toys for aggressive chewers large breed are made for that. Sturdy ropes toys for dogs are perfect for whether dogs self plays at home, tug of war games with you, or as outdoor dog toys. Big dog toys help to burn off excess energy of dogs, keep physically and mentally stimulated. Also great dog training toys to keep them stay focused and make training efficiently, best dog toys for aggressive chewers、、、HEAVY DUTY DOG TOY GIFTS FOR DOGS & GUARANTEE - Dog toy bundle are essential dog tug toys for dogs, best as christmas dog toys and dog birthday toys. The nearly indestructible tough dog toys for aggressive chewers large breed are long lasting and perfect as pitbull toys, german shepherd toys. If your dogs are extremely aggressive chewers, please only play the dog tug toys for large dogs under supervision. We are confident with premium dog toy pack and offer 30 days money-back guarantee"
        }
      ];

checkAnswer(cat);

function checkAnswer (a){
   
        console.log(a);
        document.getElementById("product-image").src="images/"+a+".png";
        document.getElementById("productName").innerText=a;
        let proAnswer={};
        productData.forEach((proPrice) => {
          if (a == proPrice.id) {
            console.log("we have a  " + proPrice.price);
            document.getElementById("price").innerText="$"+ proPrice.price;
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
              document.getElementById("icon2").src="images/"+displayOther[1].id+".png";
              document.getElementById("icon3").src="images/"+displayOther[2].id+".png";
            
}