const menuData = [
    { id: 1, name: "Sushi", category: "Main dish", price: 12.99, description: "Famous japanese dish." },
    { id: 2, name: "waraq enab", category: "Appetizers", price: 6.99,description: "Dolma is a family of stuffed dishes associated with Ottoman cuisine, typically made with a filling of rice, minced meat, offal, seafood, fruit, or any combination of these inside a vegetable or a leaf wrapping. ." },
    { id: 3, name: "Chocolate Cake", category: "Desserts", price: 5.99, description: "Decadent chocolate cake with a gooey center." },
    { id: 4, name: "Pizza", category: "Main dish", price: 10.99, description: "Best seller item in the restaurant, a very delicious Italian dish." },
    { id: 5, name: "baklava", category: "Desserts", price: 8.90, description: "Baklava is a layered pastry dessert made of filo pastry, filled with chopped nuts, and sweetened with syrup or honey.." },
  ];

  const menuContainer = document.getElementById("menu-container");
  
  function loadMenu(items) {
    menuContainer.innerHTML = "";
    items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");
      menuItem.innerHTML = `
        <h3>${item.name}</h3>
        <p class="price">$${item.price.toFixed(2)}</p>
        <button class="details-btn" data-id="${item.id}">Details</button>
      `;
      menuContainer.appendChild(menuItem);
    });
  }

  const filterSelect = document.getElementById("filter-category");
  
  filterSelect.addEventListener("change", () => {
    const category = filterSelect.value;
    if (category === "All") {
      loadMenu(menuData);
    } else {
      const filteredItems = menuData.filter(item => item.category === category);
      loadMenu(filteredItems);
    }
  });
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.getElementById("modal-close");
  
  menuContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("details-btn")) {
      const itemId = event.target.getAttribute("data-id");
      const item = menuData.find(item => item.id == itemId);
      modalContent.innerHTML = `
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p class="price">$${item.price.toFixed(2)}</p>
      `;
      modal.style.display = "block";
    }
  });
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
  loadMenu(menuData);