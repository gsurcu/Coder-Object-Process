const socket = io()

const sendMessage = (e) => {
  const hoy = new Date()
  const message = {
    author: {
      email: document.getElementById("idUser").innerHTML,
      nombre: document.getElementById("nameUser").innerHTML,
      apellido: document.getElementById("lastnameUser").innerHTML,
      edad: "",
      alias: "",
      avatar: ""
    },
    text: document.getElementById("mensaje").value,
  };

  socket.emit("incomingMessage", message);
  document.getElementById("mensaje").value = "";
  document.getElementById("mensaje").focus();
}

socket.on("chat", messages => {
  console.log(messages)
  if (messages) {
    const userSchema = new normalizr.schema.Entity('user',{}, 
    {
      idAttribute: 'email'
    })
    const postSchema = new normalizr.schema.Entity('post',
    {
      author: userSchema
    },
    {
      idAttribute: '_id'
    })
    const posts = new normalizr.schema.Entity('posts',
    {
      mensajes: [postSchema]
    })

    const denormalizedPost = normalizr.denormalize(messages.result, posts, messages.entities)
    console.log(denormalizedPost)
    const texto = denormalizedPost.mensajes.map( mensaje => {
      return(`
      <div>
        <strong class="azul">${mensaje.author.email} </strong>
        [<span class="marron">${new Date()}</span>]:
        <em class="verde"> ${mensaje.text}</em>
      </div>`);
    }).join("")
  
    document.getElementById("messages").innerHTML = texto;
  }
    
})