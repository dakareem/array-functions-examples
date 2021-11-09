// REDUCE function
const orders = [
    { id: '1', total: 12.00 },
    { id: '2', total: 18.00 },
    { id: '3', total: 22.00 },
    { id: '4', total: 92.00 },
];

const total = orders.reduce(
    (accumulator, order) => {
        return accumulator + order.total;
    },
    0
)
console.log(total);