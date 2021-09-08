//primer servidor con espress
import express from "express";
import morgan from "morgan";
import path from "path";

const app = express();

//Middleware de aplicacion.
//atender cualquier tipo de peticion al servidor.
//(GET, POST, PUT, PATH, DELETE)
app.use(morgan("tiny")); //middleware de terceros

app.use(express.static("public")); //middleware incorporado
// procesa los datos que vienen en formato: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
/*
app.use((solocitud, response)=>{
    console.log('se obtivo una peticion');

    response.send("hola crack ten tu respuesta");
});
*/

/* Middelware | atender peticiones | funcion | dar respuesta al cliente */

//middleware de aplicacion
app.get("/", (solocitud, response) => {

    const homePage = path.resolve("./public", "index.html");
    response.sendFile(homePage);

});

app.get("/test", (solocitud, response) => {
    response.send("pagina test");
});

app.post("/users", (request, response) => {
    //Obtener los datos que envia el cliente a traves de la peticion POST
    console.log('request ->', request.body);

    const { firstname, lastname } = request.body;


    //console.log('headers ->',request.headers);
    //validamos que tenga firstname y lastname

    if (firstname && lastname) {
        return response.send(`hola tu nombre es ${firstname} y tu apellido es ${lastname}`)
    }
    return next("La peticion no pudo ser completada , probablemente hay campos sin completar");

});

app.use((error, request, response, next) => {
    response.status(400).send(error);
});

export default app;