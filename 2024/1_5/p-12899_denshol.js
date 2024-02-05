function solution(n) {
  let obj = {
    1: "1",
    2: "2",
    0: "4",
  };
  let answer = "";
  while (n > 0) {
    answer = obj[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }
  return answer;
}
