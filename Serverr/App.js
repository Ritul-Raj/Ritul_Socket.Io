import  Express  from "express";
import { Server } from "socket.io";
import {createServer} from "http"
import cors from "cors";


const app=Express();
const server=createServer(app);
const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
        credentials:true
    }
});

app.use(cors());

app.get("/",(req,res)=>{
res.send("Hello World");
})

io.on("connection",(socket)=>{
    console.log("user connected");
    console.log("id",socket.id)
})

server.listen(4000,()=>{
    console.log("server is ruuning on port number 4000");
})