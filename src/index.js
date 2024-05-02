var firstName = 'Inigo';
var lastName = 'Montoya';
function sayHello() {
    console.log("Hello, my name is ".concat(firstName, "! You killed my father. Prepare to die."));
}
document.getElementById("name").addEventListener("click", sayHello);


// 1. How does the function now when to be ran?

// 2. How do I connect the button to the function?