let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
    ];

onlyCategoryArray = expenses.filter(elem => elem.category == "Groceries")

console.log(onlyCategoryArray);