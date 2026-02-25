let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];

function TotalAmount(revenues) {
    let hasNegative = revenues.some(revenue => revenue < 0);
    let allAbove = revenues.every(revenue => revenue > 500);

    console.log("Có đơn hàng âm:", hasNegative);
    console.log("Tất cả trên 500:", allAbove);
}

console.log(TotalAmount(revenues));

function netProfits(revenues) {
    let result = revenues.map(revenue => revenue * 0.9);
    console.log("Lợi nhuận ròng:", result);
    return result;
}
let total = netProfits(revenues);


