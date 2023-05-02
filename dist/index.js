"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./src/config/db"));
const socket_io_1 = require("socket.io");
const express_2 = require("express");
const router = (0, express_2.Router)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
dotenv_1.default.config();
(0, db_1.default)();
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
app.use(router.get('/', () => {
    console.log('red');
}));
const io = new socket_io_1.Server(server, {
    pingTimeout: 60000,
    cors: {
        origin: "*",
    },
});
io.on("connection", (socket) => {
    console.log("Conectado a socket io");
    // define event socket io
    socket.on('message', (message) => {
        console.log(message);
        socket.emit('response', message);
    });
});
