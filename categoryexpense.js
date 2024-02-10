let expenses = [
    { amount: 100, category: "Utilities" }, 
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
    ];
categorizedExpenses = expenses.map(categorizeExpense)
function categorizeExpense(type){
    if(type.amount>100){
        return "High Expense"
    }
    else{
        return "Low Expense"
    }
}
console.log(categorizedExpenses);