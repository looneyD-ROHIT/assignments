/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((result, transaction) => {
    const { category, price } = transaction;
    const categoryIndex = result.findIndex(item => item.category === category);
    if (categoryIndex !== -1) {
      result[categoryIndex].totalSpent += price;
    } else {
      result.push({ category, totalSpent: price });
    }
    return result;
  }, [])
}

module.exports = calculateTotalSpentByCategory;
