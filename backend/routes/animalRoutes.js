const express = require("express");
const ObjectId = require('mongodb').ObjectId; 
const animalModel = require("../models/animal");
const app = express();


//Read functionality
app.get("/animals", async (request, response) => {
  const animals = await animalModel.find({});

  try {
    response.send(animals);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Read one functionality
app.get("/animals/:id", async (request, response) => {
  const animal = await animalModel.find({"_id" : ObjectId(request.params.id)});

  try {
    response.send(animal);
  } catch (error) {
    response.status(500).send(error);
  }
});


//Create functionality
// This code establishes a /animal endpoint for POST requests.
//The Mongoose query function .save() is used to save data passed to it to the database.
app.post("/animal", async (request, response) => {
  const animal = new animalModel(request.body);

  try {
    await animal.save();
    response.send(animal);
  } catch (error) {
    response.status(500).send(error);
  }
});

//Update functionality
app.patch("/animal/:id", async (request, response) => {
  try {
    await animalModel.findByIdAndUpdate(request.params.id, request.body);
    await animalModel.save();
    response.send(animal);
  } catch (error) {
    response.status(500).send(error);
  }
});

//delete functionality
app.delete("/animal/:id", async (request, response) => {
  try {
    const animal = await animalModel.findByIdAndDelete(request.params.id);

    if (!animal) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = app;
