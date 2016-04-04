class Animal
  atype:  "Animal"

  constructor: (@name) ->
    # body...

  print: () ->
    console.log "name:#{@name} type:#{@atype} ."

taro = new Animal "Taro"
taro.print()


class Dog extends Animal
  atype:  "Dog"
  print: () ->
    console.log "wan wan"
    super()

class Cat extends Animal
  atype:  "Cat"
  print:  () ->
    console.log "nya"
    super()

jiro = new Dog "Jiro"
jiro.print()

mike = new Cat "Mike"
mike.print()
