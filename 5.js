/**
 * B1: Tạo biến và gán giá trị là 1 số có 2 chữ số
 * B2: Tạo biến tính lấy số hàng đơn vị
 * B3: Tạo biến tính lấy số hàng chục
 * B4: Tính tổng và xuất ra màn hình
 */

let randomNumber = Math.floor(Math.random() * 99);
let donVi = randomNumber % 10;
let hangChuc = randomNumber / 10;
let sum = Math.floor(donVi + hangChuc);

if (10 <= randomNumber) {
  console.log(`Số hiển thị là ${randomNumber} và tổng 2 số là ${sum}`);
} else {
  console.log(`Số hiển thị là ${randomNumber} và không có giá trị để tính`)
}