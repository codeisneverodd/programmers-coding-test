function solution(numbers) {
  var answer = -1;

  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr_sum = 0;
  let numbers_sum = 0;

  for (i = 0; i < arr.length / 2; i++) {
    if (arr[i] == arr[arr.length - 1 - i]) {
      arr_sum += arr[i];
    } else {
      arr_sum += arr[i] + arr[arr.length - 1 - i];
    }
  }

  for (i = 0; i < numbers.length; i++) {
    numbers_sum += numbers[i];
  }

  answer = arr_sum - numbers_sum;
  return answer;
}