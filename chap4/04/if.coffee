age = 15
if age < 20
  console.log "syounen"
else if age < 30
  console.log "seinen"
else if age <50
  console.log "tyunen"
else
  console.log "rounen"

console.log "syounen" if age is 20
console.log "syounenx" if age is 15

price = if age >12 then 500 else 200
console.log "#{age}才　は #{price}"
