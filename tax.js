let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
    ];

updatedAmount = expenses.map(val => {return {amount: val.amount,category: val.category,tax: val.amount*.1} })
console.log(updatedAmount);