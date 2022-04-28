const circs = document.querySelectorAll(".circle")
//Array from make an array from the divs
const hearts = Array.from(document.querySelectorAll(".heart"))
//console.log(circs)
//foreach
circs.forEach((circ) => (circ.style.backgroundColor = "lightgreen"))

// const scores=[23, 56 ,76, 59]
// console.log(scores.some(score=> score > 50))
//foreach score in scores if any is greater than 50

//foreach country in countries is deeeply equal to Philippines it will return true
// const countries= ["Philippines","Greenland","Russia"]
// console.log(countries.some(country => country === "Philippines"))

//if one of the heart has hole or a child node
const isHeartHole = hearts.some((heart) => heart.hasChildNodes())
console.log(isHeartHole)

//.map()
//creates a new array -- syntax below
// const newArray = values.map(value=>value)
const ages = [21, 34, 16, 7, 45]
const ages2021 = ages.map((age) => age + 3)
console.log(ages2021)

const hmate = [
  {
    name: "Joie",
    age: 20
  },
  {
    name: "Erwin",
    age: 30
  },
  {
    name: "Billy",
    age: 15
  }
]

const hmate21 = hmate.map((hm) => hm.age + 3)
console.log(hmate21)
