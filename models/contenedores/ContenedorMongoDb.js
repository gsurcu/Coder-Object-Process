const config = require('../../config/config');
const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(config.mongodb);
  } catch (error) {
    console.log(error.message)
  }
})();

class ContenedorMongoDb {

  constructor(collection, schema) {
    this.model = mongoose.model(collection, schema)
  }

  async listar(id) {
    return await this.model.findById(id)
  }

  async listarAll() {
    return await this.model.find()
  }

  async guardar(item) {
    try {
      const newItem = {...item, timeStamp: Date.now()}
      return await this.model.create(newItem)
    } catch (error) {
      console.log(error.message)
    }
  }

  async actualizar(id, item) {
    try {
      const updateItem = await this.model.findByIdAndUpdate(id, item)
    } catch (error) {
      console.log(error.message)
    }
  }

  async eliminar(id) {
    try {
      const delItem = await this.model.findByIdAndDelete(id)
      return delItem
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = ContenedorMongoDb;