

class Customer{

    firstName: string;
    lastName: string;

    print(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let myCustomer = new Customer();

myCustomer.firstName = "James";

myCustomer.lastName = "Charlotte";

myCustomer.print();