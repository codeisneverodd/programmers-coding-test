function solution(str1, str2) {

    str1 = str1.toUpperCase(); // 대소문자를 구분하지 않으니 대문자로 맞춰줌.
    str2 = str2.toUpperCase();
    let arr1 = new Array() // 빈 객체를 만들어줌.
    let arr2 = new Array()
    
    for (var i = 0; i < str1.length - 1; i++) {
        let tmp = str1.substr(i, 2) // i부터 2개 ( i, i+1 )
        if (tmp.search(/[^A-Z]/g) >= 0) {
            // ^(not), A-Z(A ~ Z 의 범위), g(global 모두) 
            // tmp 변수에 담은 문자열이 영문자가 아니면 -1을 반환.
            continue
        }
        arr1.push(tmp)
    }
    
    for (var i = 0; i < str2.length - 1; i++) {
        let tmp = str2.substr(i, 2)
        if (tmp.search(/[^A-Z]/g) >= 0) {
            continue
        }
        arr2.push(tmp)
    }
    arr1.sort()
    arr2.sort()
    var a = [] // 중복포함, 교집합 배열
    var b = [] // 중복포함, 합집합 배열
    
    for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) { 
        // arr1 객체에 arr2[i]과 같은 값이 있는지 확인.
        // 없으면 -1을 반환하기때문에 조건이 성립되지 않는다. 
        a.push(arr1.splice(arr1.indexOf(arr2[i]), 1))
    }
        // 교집합이 성립되지 않으면 실행.
        b.push(arr2[i])
    }

  for (var i = 0; i < arr1.length; i++) {
      b.push(arr1[i])
  }

  // 분모가 0이 될경우, 분자가 0이될 경우 따로 분리해줘야함
  if (b.length === 0) return 65536
  if (a.length === 0) return 0

  return Math.floor((a.length / b.length) * 65536)
}