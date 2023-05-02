import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db";
import { Server } from "socket.io";
import { Router } from "express";

const router = Router(); 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

connectDB();

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.use(router.get('/', ()=>{
    console.log('red')  
}));

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Conectado a socket io");

  // define event socket io
  socket.on('message', (message)=>{
   console.log(message)
    socket.emit('response', message)
  })
});
