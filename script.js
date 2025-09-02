
//Part 1: Mastering Basics

function checkAge() {
  let age = prompt("Enter your age:");
  age = Number(age);


  
  if (age >= 18) {
    document.getElementById("ageResult").innerText = "✅ You are an adult.";
  } else {
    document.getElementById("ageResult").innerText = "❌ You are underage.";
  }
}

// Part 2: Functions



function calculateTotal(price, quantity) {
  return price * quantity;
}





function showTotal() {
  let total = calculateTotal(50, 3);
  document.getElementById("totalResult").innerText = "Total: $" + total;
}





function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log("Formatted Name:", formatName("Raphael"));


// part 3: Loops



function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; 
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
}





let fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log("Fruit:", fruit));


// Part 4: DOM Manipulation


document.getElementById("toggleBtn").addEventListener("click", () => {
  let msg = document.getElementById("toggleMessage");
  msg.classList.toggle("hidden");
});




document.body.onload = () => {
  document.querySelector("h1").innerText = "🚀 JavaScript Fundamentals In Action!";
};



let newElement = document.createElement("p");
newElement.innerText = "✅ This text was added dynamically with JavaScript!";
document.body.appendChild(newElement);
