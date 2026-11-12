const car1 = {
  brand: "BMW",
  model: "M3",
  year: 2021
}

const car2 = {
  brand: "BMW",
  model: "M3",
  owner: "Іван"
}

const car3 = { ...car1, ...car2 }

console.log(car3)
