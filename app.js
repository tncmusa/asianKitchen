const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//thx to https://www.javascripttutorial.net/javascript-dom/javascript-insertafter/
function insertAfter(newNode, existingNode) { 
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function removeDuplicates(tofilter, prop) //filter array for duplicates, thx to https://stackoverflow.com/questions/30735465/how-can-i-check-if-the-array-of-objects-have-duplicate-property-values
{
  let seen = new Set();
  return tofilter.filter(function(currentObject) {
    return seen.size !== seen.add(currentObject[prop]).size;
  });
}

function addButtons()
{ 
  let newArray = removeDuplicates(menu, "category");
  console.log(newArray);
}

let allMenuItemsArray = [];

function addMenuItem(item)
{
  let menuDiv = document.querySelector(".section-center");
  let itemDiv = document.createElement("div");
  allMenuItemsArray.push(itemDiv); //add this element to allMenuItemsArray
  //add itemDiv to menuDiv
  itemDiv.classList.add("menu-items", "col-lg-6", "col-sm-12"); 
  menuDiv.appendChild(itemDiv);
  //add img to itemDiv
  let imgItem = document.createElement("img");
  imgItem.src = item.img;
  imgItem.classList.add("photo");
  itemDiv.appendChild(imgItem);
  //add menuInfoDiv to itemDiv
  let menuInfoDiv = document.createElement("div");
  menuInfoDiv.classList.add("menu-info");
  itemDiv.appendChild(menuInfoDiv);
  //add menuTitleDiv to menuInfoDiv
  let menuTitleDiv = document.createElement("div");
  menuTitleDiv.classList.add("menu-title");
  menuInfoDiv.appendChild(menuTitleDiv);
  //add h4 title to menuTitleDiv
  let h4Title = document.createElement("h4");
  h4Title.innerText = item.title;
  menuTitleDiv.appendChild(h4Title);
  //add h4 price to menuTitleDiv
  let h4Price = document.createElement("h4");
  h4Price.innerText = `${item.price}`;
  h4Price.classList.add("menu-price");
  menuTitleDiv.appendChild(h4Price);
  //add menuTextDiv to menuInfoDiv
  let menuTextDiv = document.createElement("div");
  menuTextDiv.classList.add("menu-text");
  menuTextDiv.innerText = item.desc;
  menuInfoDiv.appendChild(menuTextDiv);
}
