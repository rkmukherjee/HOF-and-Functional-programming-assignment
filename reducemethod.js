let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
    ];

 totalExpense = expenses.reduce((a,b) => a+b.amount,0)    
console.log(`The total amount of all expenses is ${totalExpense}`);