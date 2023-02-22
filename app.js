const str1 = "1234";
const str2 = "897";

const stringNum = (str1n, strn2) => {
  // distance là só trừ ra dành cho str2 để tìm phần tử thứ i của str2
  // nếu 2 string không đồng đều độ dài
  let distance = strn2.length - str1n.length;

  let sum = "";
  // remainder là số dư
  let remainder = 0;

  for (i = str1n.length - 1; i >= 0; i--) {
    // kết quả tạm để xét tổng từng cặp số từ phải qua trái
    let tempRs =
      str1n.charAt(i) * 1 + (strn2.charAt(i + distance) % 10) * 1 + remainder;

    // nếu cặp nào lớn hơn 10 thì tính tổng theo chuỗi và xét số dư để lưu vào carry (số nhớ)
    if (tempRs >= 10) {
      sum = (tempRs % 10) + sum;
      remainder = Math.floor(tempRs / 10);
    } else {
      // nếu cặp nào bé hơn 10 thì tính tổng bình thường và set carry là 0 (số nhớ)
      sum = tempRs + sum;
      remainder = 0;
    }
  }

  return sum;
};

console.log(stringNum(str1, str2));
