let img1 = document.querySelector(".m1l2-img-1");
let img2 = document.querySelector(".m1l2-img-2");
let dishes = document.querySelector(".dishes");
let Soda = document.querySelector(".soda");
let platter = document.querySelector(".platter");
let header = document.querySelector("header");
let img3 = document.querySelector(".m1l2-img-3");
let img4 = document.querySelector(".m1l2-img-4");
let snacks = document.querySelector(".snacks");

Soda.addEventListener("click", () => {
  img1.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );
  img3.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );

  img4.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );

  img2.classList.add(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );

  console.log("hello");
});
dishes.addEventListener("click", () => {
  img2.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );

  img3.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );
  img4.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );

  img1.classList.add(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );

  console.log("hello 2");
});
platter.addEventListener("click", () => {
  img2.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );
  img1.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );
  img4.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );

  img3.classList.add(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );

  console.log("hello 3");
});
snacks.addEventListener("click", () => {
  img2.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );
  img3.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );
  img1.classList.remove(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );

  img4.classList.add(
    "active",
    "animate__animated",
    "animate__fadeInTopRight",
    "animate__faster"
  );

  console.log("hello 4");
});

let scrol = document.querySelector(".gallery");
let leftbtn = document.querySelector("#left1");
let rightbtn = document.querySelector("#right1");
scrol.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrol.scrollLeft += e.deltaY;
});
leftbtn.addEventListener("click", () => {
  scrol.style.scrollBehavior = "smooth";
  scrol.scrollLeft -= 300;
});
rightbtn.addEventListener("click", () => {
  scrol.style.scrollBehavior = "smooth";

  scrol.scrollLeft += 300;
});

let dessertbt = document.querySelector("#dessert-bt");
let platterbt = document.querySelector("#platter-bt");
let snacksbt = document.querySelector("#snacks-bt");
let friesbt = document.querySelector("#fries-bt");
let drinksbt = document.querySelector("#drinks-bt");
let main5 = document.querySelector(".main5");
let main6 = document.querySelector(".main6");
let main7 = document.querySelector(".main7");
let main8 = document.querySelector(".main8");
let main9 = document.querySelector(".main9");
let main10 = document.querySelector(".main10");
let main11 = document.querySelector(".main11");
let burbt = document.querySelector("#burger-bt");
let pizabt = document.querySelector("#pizza-bt");

let sectionButtons = [
  burbt,
  pizabt,
  dessertbt,
  platterbt,
  snacksbt,
  friesbt,
  drinksbt,
];

function switchSection(showSection, clickedButton) {
  const allSections = [main5, main6, main7, main8, main9, main10, main11];
  allSections.forEach((section) => section.classList.remove("active"));
  showSection.classList.add("active");

  sectionButtons.forEach((btn) => btn.classList.remove("active-btn"));

  // Add active-btn to the clicked one
  clickedButton.classList.add("active-btn");
}

dessertbt.addEventListener("click", (e) => {
  e.preventDefault();
  switchSection(main7, dessertbt);
});

platterbt.addEventListener("click", (e) => {
  e.preventDefault();
  switchSection(main8, platterbt);
});

snacksbt.addEventListener("click", (e) => {
  e.preventDefault();
  switchSection(main9, snacksbt);
});

friesbt.addEventListener("click", (e) => {
  e.preventDefault();
  switchSection(main10, friesbt);
});

drinksbt.addEventListener("click", (e) => {
  e.preventDefault();
  switchSection(main11, drinksbt);
});

burbt.addEventListener("click", (e) => {
  e.preventDefault();
  switchSection(main5, burbt);
});

pizabt.addEventListener("click", (e) => {
  e.preventDefault();
  switchSection(main6, pizabt);
});

let cartData = [];
let cartCount = 0;

function updateCartCount() {
  const desktop = document.getElementById("cart-count-desktop");
  const mobile = document.getElementById("cart-count-mobile");

  desktop.innerText = cartCount;
  mobile.innerText = cartCount;

  // Remove previous animation if any
  desktop.classList.remove("animate__animated", "animate__shakeY");
  mobile.classList.remove("animate__animated", "animate__shakeX");

  // Trigger reflow to restart animation
  void desktop.offsetWidth;
  void mobile.offsetWidth;

  // Add shake animation
  desktop.classList.add("animate__animated", "animate__shakeY");
  mobile.classList.add("animate__animated", "animate__shakeX");
}

// Add to cart logic
document.querySelectorAll(".bt4").forEach((button) => {
  button.addEventListener("click", () => {
    let itemCard = button.closest(".item-1");
    let img = itemCard.querySelector("img").src;
    let h2 = itemCard.querySelector("h2").innerText;
    let priceofitem = itemCard.querySelector("#food-prices").innerText;
    let qty = parseInt(itemCard.querySelector(".qty-val").innerText);
    cartCount += qty;

    cartData.push({ img, h2, priceofitem, qty });

    document.getElementById("cart-count-desktop").innerText = cartCount;
    document.getElementById("cart-count-mobile").innerText = cartCount;

    updateCartCount();
  });
});

// increse the qty
document.querySelectorAll(".item-1").forEach((item) => {
  let plus = item.querySelector(".plus");
  let minus = item.querySelector(".minus");
  let qtyval = item.querySelector(".qty-val");

  plus.addEventListener("click", () => {
    qtyval.innerText = parseInt(qtyval.innerText) + 1;
  });
  minus.addEventListener("click", () => {
    if (parseInt(qtyval.innerText) > 1) {
      qtyval.innerText = parseInt(qtyval.innerText) - 1;
    }
  });
});

// Open cart modal
document.querySelectorAll(".order-logo a").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showCart();
  });
});

function showCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  let total = 0;

  if (cartData.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartData.forEach((item, index) => {
      const priceNum = parseFloat(item.priceofitem.replace("$", ""));
      total += priceNum * item.qty;

      cartItemsContainer.innerHTML += `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.h2}">
          <div>
            <h3>${item.h2}</h3>
            <p>${item.priceofitem}</p>
          </div>
           <div class="quantity-control">
                        <button class="qty minus" data-index="${index}">−</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty plus" data-index="${index}">+</button>
                    </div>
          <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        </div>
      `;
    });
  }

  document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`;
  document.getElementById("cart-modal").style.display = "flex";

  attachQuantityListeners();
}

function attachQuantityListeners() {
  document.querySelectorAll(".qty.minus").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let index = parseInt(e.target.getAttribute("data-index"));
      if (cartData[index].qty > 1) {
        cartData[index].qty--;
        cartCount--;
        document.getElementById("cart-count").innerText = cartCount;
        showCart(); // re-render
      }
    });
  });

  document.querySelectorAll(".qty.plus").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let index = parseInt(e.target.getAttribute("data-index"));
      cartData[index].qty++;
      cartCount++;
      document.getElementById("cart-count-desktop").innerText = cartCount;
      document.getElementById("cart-count-mobile").innerText = cartCount;
      showCart(); // re-render
    });
  });
}

// Remove item
function removeItem(index) {
  cartCount -= cartData[index].qty;
  cartData.splice(index, 1);

  document.getElementById("cart-count-desktop").innerText = cartCount;
  document.getElementById("cart-count-mobile").innerText = cartCount;

  showCart();
}

// Close cart
function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

// Place order
function placeOrder() {
  let meg = document.querySelector(".submit-meg");


  if (cartData.length === 0) {
    setTimeout(() => {
      meg.classList.remove("active");
    }, 5000);
    meg.innerHTML = ` <p class="ok-msg" style="background-color: red;"> Your cart is Empty Add some in Cart</p>
                    <button id="success-msg-button">
                        <i class="fa-solid fa-xmark"></i>
                    </button>`;

    meg.classList.add("active");

      let cross = document.querySelector("#success-msg-button");
    cross.addEventListener("click", () => {
      meg.classList.remove("active");
    });

    closeCart();
    return
  } else {
    meg.innerHTML = ` <p class="ok-msg"> Your Order has been received Successfully</p>
                    <button id="success-msg-button">
                        <i class="fa-solid fa-xmark"></i>
                    </button>`;

    meg.classList.add("active");
    setTimeout(() => {
      meg.classList.remove("active");
    }, 5000);

      let cross = document.querySelector("#success-msg-button");

    cross.addEventListener("click", () => {
      meg.classList.remove("active");
    });

    cartData = [];
    cartCount = 0;
    document.getElementById("cart-count-desktop").innerText = 0;
    document.getElementById("cart-count-mobile").innerText = 0;
    closeCart();
    
  }
}

const items = [
  {
    name: "Pizza 1",
    image: "image/piza1.jfif",
    price: "$15.00",
  },
  {
    name: "Pizza 2",
    image: "image/piz2.jfif",
    price: "$15.00",
  },
  {
    name: "Pizza 3",
    image: "image/piza3.jfif",
    price: "$15.00",
  },
  {
    name: "Pizza 4",
    image: "image/piza4.jfif",
    price: "$15.00",
  },
  {
    name: "Pizza 5",
    image: "image/piza5.jfif",
    price: "$15.00",
  },
  {
    name: "Pizza 6",
    image: "image/piza6.jfif",
    price: "$15.00",
  },
  {
    name: "Platter 1",
    image: "image/platter-1.jfif",
    price: "$15.00",
  },
  {
    name: "Platter 2",
    image: "image/plater-2.jfif",
    price: "$15.00",
  },
  {
    name: "Platter 3",
    image: "image/plater-3.jfif",
    price: "$15.00",
  },
  {
    name: "Platte 4r",
    image: "image/rest4.jfif",
    price: "$15.00",
  },
  {
    name: "Dessert 1",
    image: "image/deser.jfif",
    price: "$15.00",
  },
  {
    name: "Dessert 2",
    image: "image/deser2.jfif",
    price: "$15.00",
  },
  {
    name: "Dessert 3",
    image: "image/deser3.jfif",
    price: "$15.00",
  },
  {
    name: "Dessert 3",
    image: "image/rest3-removebg-preview.png",
    price: "$15.00",
  },
  {
    name: "Dessert 4",
    image: "image/deser4.jfif",
    price: "$15.00",
  },
  {
    name: "Dessert 5",
    image: "image/desert1.jfif",
    price: "$15.00",
  },
  {
    name: "Dessert 6",
    image: "image/des-ic.jfif",
    price: "$15.00",
  },
  {
    name: "snacks 1",
    image: "image/snacks1.jfif",
    price: "$15.00",
  },
  {
    name: "snacks 1",
    image: "image/snacks1.jfif",
    price: "$15.00",
  },
  {
    name: "snacks 1",
    image: "image/sna3.jfif",
    price: "$15.00",
  },
  {
    name: "snacks 3",
    image: "image/sn.jfif",
    price: "$15.00",
  },
  {
    name: "snacks 4",
    image: "image/short-snacks.jfif",
    price: "$15.00",
  },
  {
    name: "Fries",
    image: "image/fries.jfif",
    price: "$15.00",
  },
  {
    name: "Loaded fries",
    image: "image/loaded-fries.jfif",
    price: "$15.00",
  },
  {
    name: "Coke",
    image: "image/coke1.jpg",
    price: "$15.00",
  },
  {
    name: "7up",
    image: "image/7up",
    price: "$15.00",
  },
  {
    name: "pepsi",
    image: "image/pepsi",
    price: "$15.00",
  },
];
let serchinput = document.querySelector("#serch-input");
let serchoverlay = document.querySelector(".serch-overlay");
document.querySelector(".serch-button").addEventListener("click", () => {
  serchoverlay.classList.add("active");
});
serchoverlay.addEventListener("click", (e) => {
  if (e.target === serchoverlay) {
    serchoverlay.classList.remove("active");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") serchoverlay.classList.remove("active");
});

serchinput.addEventListener("input", () => {
  let values = serchinput.value.toLowerCase();
  if (values === "") {
    document.querySelector(".serch-items").innerHTML = "";
    return;
  }
  let results = items.filter((item) =>
    item.name.toLowerCase().includes(values)
  );
  render(results);
});

let render = (results) => {
  let conitem = document.querySelector(".serch-items");
  conitem.innerHTML = "";

  if (results.length === 0) {
    conitem.innerHTML = "<p>No item found</p>";
    return;
  }

  results.forEach((item, idex) => {
    conitem.innerHTML += `
      <div class="item-1" data-index="${idex}">
    
      <img src="${item.image}" alt="" style="width: 200px; height: 200px;">
    
    <h2>${item.name}</h2>
    
      <div>
        <button class="bt4">Add to cart</button>
      </div>
      <div id="my" >
        ${item.price}
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button class="qty minus">-</button>
        <div class="qty-val">1</div>
        <button class="qty plus">+</button>
      </div> `;
  });

  conitem.querySelectorAll(".item-1").forEach((itemdiv, i) => {
    let plus = itemdiv.querySelector(".plus");
    let minus = itemdiv.querySelector(".minus");
    let qtyval = itemdiv.querySelector(".qty-val");

    plus.addEventListener("click", () => {
      qtyval.innerText = parseInt(qtyval.innerText) + 1;
    });
    minus.addEventListener("click", () => {
      if (parseInt(qtyval.innerText) > 1) {
        qtyval.innerText = parseInt(qtyval.innerText) - 1;
      }
    });

    itemdiv.querySelector(".bt4").addEventListener("click", () => {
      let qty = parseInt(qtyval.innerText);
      cartCount += qty;
      cartData.push({
        img: results[i].image,
        h2: results[i].name,
        priceofitem: results[i].price,
        qty: qty,
      });

      updateCartCount();
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  let navhalfsection = document.querySelector(".nav-half-section");

  document.querySelector(".hamburger").addEventListener("click", () => {
    if (navhalfsection.style.display === "none") {
      navhalfsection.style.display = "block";
    } else {
      navhalfsection.style.display = "none";
    }
  });
});
 

 
window.addEventListener("load",()=>{

 
   let loader=document.querySelector(".pre-loader")
   let main1_left=document.querySelector(".m1l1")
   let main1_right=document.querySelector(".m1l2")
   let load2=document.querySelector(".loader")
  let nav=document.querySelector(".nav")
setTimeout(()=>{
 load2.classList.add("hide")
  setTimeout(()=>{
    loader.classList.add("active")
     main1_right.classList.add("animate__animated","animate__zoomIn")
     main1_left.classList.add("animate__animated","animate__zoomIn")
     nav.classList.add("hide")
   
setTimeout(()=>{
  loader.style.display="none";

  
 document.querySelector(".lock-scroll").classList.remove("lock-scroll")   
 nav.classList.remove("hide");
 nav.classList.add("animate__animated","animate__fadeInDown");
   


 




},400)
    
  },1000)
},2000)



 
  

  
})

// window.addEventListener("DOMContentLoaded",()=>{
//   let move_1=document.querySelectorAll(".m2l2")
//   let move_2=document.querySelectorAll(".m3l1")

//   let observ=new IntersectionObserver((enteries)=>{
//     enteries.forEach((entry)=>{
//         if(entry.isIntersecting){
//           entry.target.classList.add("animate__animated","animate__zoomIn")
//         }
      
//     });
//   },{
//     threshold:0.01
//   })
//   move_1.forEach((move)=>{
//     observ.observe(move)
//   })
//   move_2.forEach((move)=>{
//     observ.observe(move)
//   })
// });