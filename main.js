const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*----- CAMBIO COLORS -----*/
const sizes = document.querySelectorAll('.size__tallas');
const colors = document.querySelectorAll('.sneaker__color');
const sneaker = document.querySelectorAll('.sneaker__img');

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`);

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);

    sneaker.forEach(s => s.classList.remove('shows'));
    sneakerColor.classList.add('shows')
}


document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("li");

    listItems.forEach(function (item) {
      item.addEventListener("click", function () {
        // Remove "active" class from the currently active item
        const currentlyActive = document.querySelector(".active");
        currentlyActive.classList.remove("active");

        // Add "active" class to the clicked item
        item.classList.add("active");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const quantityElement = document.getElementById("quantity");

    // Initial quantity value
    let quantity = 1;

    // Function to update the quantity and the display
    const updateQuantity = (change) => {
        quantity += change;
        if (quantity < 1) {
            quantity = 1;
        }
        quantityElement.textContent = quantity;
    };

    // Event listener for the increment button
    incrementButton.addEventListener("click", () => {
        updateQuantity(1);
    });

    // Event listener for the decrement button
    decrementButton.addEventListener("click", () => {
        updateQuantity(-1);
    });
});

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));