// Hash function to generate a hash for customer names
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 10; // Using modulo to limit the size of the hash table
}

// Queue class to manage customer service
class Queue {
    constructor() {
        this.customers = new Array(10); // Hash table of size 10
    }

    // Method to add a customer to the queue
    addCustomer(name) {
        const index = hashFunction(name);
        // Store the customer name in the hashed table
        this.customers[index] = name;
        console.log(`Customer ${name} added at index ${index}.`);
    }

    // Method to service a customer by their number
    serviceCustomer(number) {
        const index = number - 1; // Convert number to index (0-based)
        if (this.customers[index]) {
            const servicedCustomer = this.customers[index];
            console.log(`Servicing customer: ${servicedCustomer}`);
            this.customers[index] = null; // Remove customer from the queue
        } else {
            console.log(`No customer found at number ${number}.`);
        }
        this.displayQueue(); // Display updated queue
    }

    // Method to display the current state of the queue
    displayQueue() {
        console.log("Current Queue:");
        this.customers.forEach((customer, index) => {
            if (customer) {
                console.log(`Number ${index + 1}: ${customer}`);
            } else {
                console.log(`Number ${index + 1}: Empty`);
            }
        });
    }
}

// Main program execution
const queue = new Queue();

// Adding customers to the queue
const customerNames = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
customerNames.forEach(name => {
    queue.addCustomer(name);
});

// Simulating servicing customers
let serviceNumber;
while (true) {
    serviceNumber = prompt("Enter the number of the customer to be serviced (1-5) or 'exit' to quit:");
    if (serviceNumber === 'exit') {
        break; // Exit the loop if the user types 'exit'
    }
    serviceNumber = parseInt(serviceNumber);
    if (!isNaN(serviceNumber) && serviceNumber >= 1 && serviceNumber <= 5) {
        queue.serviceCustomer(serviceNumber);
    } else {
        alert("Please enter a valid number between 1 and 5.");
    }
}
