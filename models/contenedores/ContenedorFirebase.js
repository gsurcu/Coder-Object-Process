import { config } from "../../config/config.js";
import admin from "firebase-admin"

admin.initializeApp({
  credential: admin.credential.cert(config.firebase)
});
const db = admin.firestore();

class ContenedorFirebase {

  constructor(collection) {
    this.collection = db.collection(collection);
  }

  async listar(id) {
    try {
      const doc = await this.collection.doc(id).get();
      const data = doc.data();
      return {...data, id}
    } catch (error) {
      console.log(error.message)
    }
  }

  async listarAll() {
    try {
      const docs = this.collection.get()
      return docs
    } catch (error) {
      console.log(error.message)
    }
  }

  async guardar(item) {
    try {
      const newItem = {...item, id}
      const suc = await this.collection.add(newItem)
      return {...newItem, idDoc: suc.id}
    } catch (error) {
      console.log(error.message)
    }
  }

  async actualizar(id, item) {
    try {
      const updateItem = await this.collection.doc(id).set(item)
      return {...item, updateItem}
    } catch (error) {
      console.log(error.message)
    }
  }

  async eliminar(id) {
    try {
      const doc = await this.collection.doc(id)
      const delDoc = await doc.delete();
      return {...doc, delDoc}
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default ContenedorFirebase