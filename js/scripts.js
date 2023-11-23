document.addEventListener('DOMContentLoaded', function() {
    // Dynamically adding student information
    document.getElementById('studentInfo').innerText = 'Student ID: 200543216, Name: Parthiv ';

    // Event listener for form submission
    document.getElementById('pizzaOrderForm').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submitted");
        // Capture form data
        const formData = {
            name: document.getElementById('name').value,
            contact: document.getElementById('contact').value,
            pizzaType: document.getElementById('pizza_type').value,
            toppings: document.getElementById('toppings').value,
            extraCheese: document.getElementById('extra_cheese').checked,
            quantity: document.getElementById('quantity').value,
            specialInstructions: document.getElementById('special_instructions').value
        };

        // Create Pizza object
        const pizzaOrder = new Pizza(formData.pizzaType, formData.toppings, formData.extraCheese, formData.quantity, formData.specialInstructions);
        
        // Display pizza description
        pizzaOrder.displayOrderDetails();
    });
});

// Pizza class
class Pizza {
    constructor(type, toppings, extraCheese, quantity, instructions) {
        this.type = type;
        this.toppings = toppings;
        this.extraCheese = extraCheese;
        this.quantity = quantity;
        this.instructions = instructions;
    }

   displayOrderDetails() {
        const orderDetails = `Pizza Type: ${this.type}<br>
Toppings: ${this.toppings}<br>
Extra Cheese: ${this.extraCheese ? 'Yes' : 'No'}<br>
Quantity: ${this.quantity}<br>
Special Instructions: ${this.instructions}`;

        // Update the HTML of the orderDetails div
        document.getElementById('orderDetails').innerHTML = `<h2>Your Order Details:</h2>${orderDetails}`;
    }
}
