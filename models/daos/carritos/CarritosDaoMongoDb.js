const ContenedorMongoDb = require('../../contenedores/ContenedorMongoDb')
// import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";
const mongoose = require('mongoose')
// import mongoose from "mongoose";

const Schema = mongoose.Schema
const collection = "carritos"
const carritosSchema = new Schema({
  carritos: { type:Array, required:true }
})

class CarritosDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super(collection, carritosSchema)
  }

}

module.exports = CarritosDaoMongoDb;