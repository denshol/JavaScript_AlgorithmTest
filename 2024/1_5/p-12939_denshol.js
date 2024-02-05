function solution(s) {
  var srr = s.split(" ");
  return Math.min(...srr) + " " + Math.max(...srr);
}
