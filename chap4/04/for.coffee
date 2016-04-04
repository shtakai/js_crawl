fruits = [
  "Banana",
  "Mango",
  "Apple",
  "Orange"
]

for name in fruits
  console.log "I like #{name}"

for name,index in fruits
  console.log "#{index}: #{name}"

console.log "--"
mail_info = {
  subject:  "こんにちは"
  from:     "test@example.com"
  body:     "ogenkidesuka?"
}

for key, value of mail_info
  console.log "#{key}: #{value}"
