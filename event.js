const event = require("node:events");
const eventEmitter = new event();

//task : write the code to take order and then deliver pizza 


eventEmitter.on("PizzaReady", () => {
  console.log("pirzaOrder is successfull deleiver");
});

eventEmitter.on("Order", () => {
  console.log("pizz in  order will soon deleiver");
  eventEmitter.emit("PizzaReady");
});

eventEmitter.emit("Order");