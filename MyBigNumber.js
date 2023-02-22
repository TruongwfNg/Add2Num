class MyBigNumber {
  constructor(stn1, stn2) {
    this.stn1 = stn1;
    this.stn2 = stn2;
  }

  sum() {
    let maxStr = 0;
    let minStr = 0;

    // kiểm tra và gán String dài và String ngắn
    if (this.stn1.length > this.stn2.length) {
      maxStr = this.stn1;
      minStr = this.stn2;
    } else {
      maxStr = this.stn2;
      minStr = this.stn1;
    }
    // distance độ lệch lưu vào để tính thứ i của minStr
    let distance = minStr.length - maxStr.length;

    let sum = "";
    // remainder là số dư
    let remainder = 0;

    for (let i = maxStr.length - 1; i >= 0; i--) {
      // kết quả tạm để xét tổng từng cặp số từ phải qua trái
      let tempRs =
        maxStr.charAt(i) * 1 + minStr.charAt(i + distance) * 1 + remainder;

      // nếu cặp nào lớn hơn 10 thì tính tổng theo chuỗi và xét số dư để lưu vào remainder (số dư)
      if (tempRs >= 10) {
        sum = (tempRs % 10) + sum;
        remainder = Math.floor(tempRs / 10);
      } else {
        // nếu cặp nào bé hơn 10 thì tính tổng bình thường và set remainder là 0 (số dư)
        sum = tempRs + sum;
        remainder = 0;
      }
    }

    return sum;
  }
}

const testcase1 = new MyBigNumber("1234", "897");
const testcase2 = new MyBigNumber("897", "1234");
const testcase3 = new MyBigNumber("423", "89723");

const result1 = testcase1.sum();
const result2 = testcase2.sum();
const result3 = testcase3.sum();

console.log("result1: ", result1);
console.log("result2: ", result2);
console.log("result3: ", result3);
