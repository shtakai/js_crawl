splitStr = (str, delimiter = ",") ->
  str.split(delimiter)

s1 = "1,2,3"
console.log splitStr(s1)

s2 = "a:b:c"
console.log splitStr(s2,":")
