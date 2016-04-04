multiply = (a,b) ->
  a * b

console.log multiply 2,3

x2 = (num) ->
  num * num

x4 = (num) ->
  num * num * num * num

console.log (x2(3) + x4(2))

func =   ->
  console.log "hello"
  return

console.log func()
