let food = {
    name: "Pizza",
    price: 150,

    display: function() {
        console.log(`Food name is ${this.name}`)
        console.log(`Price is ₹${this.price}`)
    }
}
food.display()