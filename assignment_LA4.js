// Queue class to manage customer queue
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(customerName) {
        this.queue.push(customerName);
    }

    dequeue(index) {
        if (index >= 0 && index < this.queue.length) {
            return this.queue.splice(index, 1)[0]; // Remove and return the customer
        } else {
            return null; // Invalid index
        }
    }

    display() {
        return this.queue;
    }
}

// Main function to run the queueing system
function main() {
    const customerQueue = new Queue();
    const predefinedCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

    // Enqueue predefined customers
    predefinedCustomers.forEach((customer, index) => {
        customerQueue.enqueue(customer);
        console.log(`Customer ${customer} added to the queue with number ${index + 1}.`);
    });

    // Allow new customers to enter their names
    for (let i = 0; i < 5; i++) {
        const customerName = prompt("Enter your name to join the queue:");
        if (customerName) {
            customerQueue.enqueue(customerName);
            alert(`Customer ${customerName} added to the queue with number ${customerQueue.display().length}.`);
        }
    }

    // Service customers
    while (true) {
        const currentQueue = customerQueue.display();
        console.log("Current Queue:", currentQueue);
        
        const input = prompt("Enter the customer number to service (1-5) or 0 to exit:");
        const numberToService = parseInt(input) - 1;

        if (numberToService === -1) {
            alert("Exiting the program.");
            break;
        }

        const servicedCustomer = customerQueue.dequeue(numberToService);
        if (servicedCustomer) {
            alert(`Serviced Customer: ${servicedCustomer}`);
        } else {
            alert("Invalid number. Please enter a valid customer number.");
        }
    }
}

// Run the main function
main();
