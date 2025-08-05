var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.print = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
var myCustomer = new Customer();
myCustomer.firstName = "James";
myCustomer.lastName = "Charlotte";
myCustomer.print();
