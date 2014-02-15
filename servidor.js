var express = require("express");
var dust = require("dustjs-linkedin");
var cons = require("consolidate");

var app = express();
app.listen(8021);

//NOMBRE_LOGICO NOMBRE_FISICO(carpeta real)
//---- configuracion de carpetas estaticas ----
app.use("/css", express.static(__dirname + "/css"));
app.use("/css", express.directory(__dirname + "/css"));

app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));

// ----- CONFIGURACION DEL SISTEMA DE TEMPLATES -----
//le decimos que sistema de template usamos
app.engine("dust",cons.dust);
//que carpeta contiene nuestras vistas
app.set("views",__dirname + "/vistas");
//define cual es la extension por default de esas vistas
app.set("view engine","dust");

app.use(express.urlencoded());

// ---- DEFINICION DE RUTAS -------

app.get("/inicio2", function(req, res){
res.send("Bienvenido a mi pagina");	
});

app.get("/", function(req, res){
//aqui de alguna forma se consulto una base
//la variable frase contiene el resultado de esa base
var frase = "Hola a todos!";
res.render("index",{
frase:"Hola a todos!",
datos:{
nombre:"ismael",
apellido:"robles"
}	
});
});

//req = request = datos que envia el usuario
//res = response = lo que le mostramos al usuario
app.post("/suscribir", function(req, res){
console.log("el email es:" + req.body.email);
res.send("info recibida");
});

console.log("hola mundo");