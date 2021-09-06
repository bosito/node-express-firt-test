//primer servidor con espress
import  express  from "express";
import morgan from "morgan";

const app = express();

//Middleware de aplicacion.
//atender cualquier tipo de peticion al servidor.
//(GET, POST, PUT, PATH, DELETE)
app.use(morgan("tiny"));

/*
app.use((solocitud, response)=>{
    console.log('se obtivo una peticion');

    response.send("hola crack ten tu respuesta");
});
*/

/* Middelware | atender peticiones | funcion | dar respuesta al cliente */

app.get("/", (solocitud, response)=>{
    response.send("pagina pricipal");
});

app.get("/test", (solocitud, response)=>{
    response.send("pagina test");
});

export default app;