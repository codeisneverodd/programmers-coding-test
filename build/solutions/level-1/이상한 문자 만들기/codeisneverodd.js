function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, index) =>
          index % 2 === 0
            ? word[index].toUpperCase()
            : word[index].toLowerCase()
        )
        .join("")
    )
    .join(" ");
}