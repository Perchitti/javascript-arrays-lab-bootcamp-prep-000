const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array, element){
 kittens.push("Ralph")

 return array
}

function destructivelyPrependKitten(array, element){
  kittens.unshift("Bob")

  return array
}

function destructivelyRemoveLastKitten(array){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(array){
  kittens.shift()
}

function appendKitten(array, name){
  return [kittens, ..."Broom"]
}
