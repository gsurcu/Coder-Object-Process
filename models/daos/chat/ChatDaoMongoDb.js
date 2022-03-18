const ContenedorMongoDb = require('../../contenedores/ContenedorMongoDb')
const mongoose = require('mongoose')
const { normalize, schema } = require('normalizr')
const Schema = mongoose.Schema;
const collection = "chat"
const chatSchema = new Schema({
  author: {
    email: {type: String},
    nombre: {type: String},
    apellido: {type: String},
    edad: {type: Number},
    alias: {type: String},
    avatar: {type: String}
  },
  text: {type: String}
})

class ChatDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super(collection,chatSchema)
    this.chatNormalizado = []
  }

  async normalizar(){
    try {
      const data = await this.listarAll()
      if (!data) {
        return false
      } else {
        const dataJson = JSON.stringify(data);
        const dataParsed = JSON.parse(dataJson);

        const schemaAll = {
          id: 'mensajes',
          mensajes: dataParsed,
        };

        const userSchema = new schema.Entity('user',{}, 
        {
          idAttribute: 'email'
        })
        const postSchema = new schema.Entity('post',
        {
          author: userSchema
        },
        {
          idAttribute: '_id'
        })
        const posts = new schema.Entity('posts',
        {
          mensajes: [postSchema]
        })
        const normalizedPost = normalize(schemaAll, posts)
        return normalizedPost;
      }

    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = ChatDaoMongoDb;