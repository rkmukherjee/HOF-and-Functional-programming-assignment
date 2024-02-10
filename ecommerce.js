const ordersList = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Mobile Charger", price: 1500 },
    { name: "Laptop Charger", price: 10500 },
    ];
sum = 0;    
ordersList.forEach((items)=>(sum+=items.price));
console.log(`Total price is ${sum}`);