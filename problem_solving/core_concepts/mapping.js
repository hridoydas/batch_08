function mapping(expectedModel) {
  const car = {
    CarA: {
      color: "black",
      wheel: 4,
      model: "hundai",
    },
    CarB: {
      color: "white",
      wheel: 6,
      model: "Toyota",
    },
    CarC: {
      color: "white",
      wheel: 6,
      model: "Toyota",
    },
  };
  // let carkey = [];
  const carkey = Object.keys(car).filter((key) => car[key].model === expectedModel);
  // const carValue = Object.values(car).find((car) => car.model === expectedModel);
  console.log(carkey);
}

mapping("Toyota");

// factorial, prime Number, fibonacci series
