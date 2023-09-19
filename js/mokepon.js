const selectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque")
const botonMascotaJugador = document.getElementById("boton-mascota")
const selectionReiniciar = document.getElementById("reiniciar")
const botonMascotaEnemigo = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar") 
const selectionSeleccionarMascota = document.getElementById("Seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanAtaqueEnemigo = document.getElementById("ataque-enemigo")
const resultadoAtaques = document.getElementById("resultado")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques=document.getElementById("contenedorAtaques")

let mokepones = []
let spanAtaqueJugador
let ataqueEnemigo 
let ataqueJugador = []
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego     
let botonAgua      
let botonTierra 
let botones = []
let vidasJugador  = 3
let vidasEnemigo  = 3
let selectionMensajeAtaque

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre 
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/hipodoge.png",  5 )

let  capipepo = new Mokepon("Capipepo", "./assets/capipepo.png",  5 )

let  ratigueya = new Mokepon("Ratigueya", "./assets/ratigueya.png", 5 )

hipodoge.ataques.push(
    {nombre: "💧", id: "boton-agua" },
    {nombre: "💧", id: "boton-agua" },
    {nombre: "💧", id: "boton-agua" },
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "🌱", id: "boton-tierra" }

)
capipepo.ataques.push(
    {nombre: "🌱", id: "boton-tierra" },
    {nombre: "🌱", id: "boton-tierra" },
    {nombre: "🌱", id: "boton-tierra" },
    {nombre: "💧", id: "boton-agua"  },
    {nombre: "🔥", id: "boton-fuego" }
   
)

ratigueya.ataques.push(
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "💧", id: "boton-agua" },
    {nombre: "🌱", id: "boton-tierra" }

)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego()
{   
    selectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones =`
        <input  type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p> ${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label> 
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById("Hipodoge") 
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigueya") 
    })

    selectionMensajeAtaque = document.getElementById("mensajes")
    selectionMensajeAtaque.style.display = "none"
    selectionReiniciar.style.display = "none"
    spanAtaqueJugador = document.getElementById("ataque-jugador")
    botonMascotaJugador.addEventListener("click" , seleccionarMascotaJugador)
    botonMascotaEnemigo.addEventListener("click" , seleccionarMascotaEnemigo)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador()
{   
    selectionSeleccionarMascota.style.display = "none"
    selectionSeleccionarAtaque.style.display = "flex"
    
    if(inputHipodoge.checked){
       spanMascotaJugador.innerHTML = inputHipodoge.id
       mascotaJugador = inputHipodoge.id
    } else if(inputCapipepo.checked){
       spanMascotaJugador.innerHTML = inputCapipepo.id
       mascotaJugador = inputCapipepo.id
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert("no has seleccionado una mascota")
        location.reload()
    }
    extraerAtaques(mascotaJugador)
   
}

function extraerAtaques(){
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques            
        }                       
    }
    mostrarAtaques(ataques)    
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
        <button id=${ataque.id} class = "boton-de-ataque BAtaque"> ${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")
}

function secuenciaAtaque(){
    
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if(e.target.textContent === " 🔥 "){
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"               
            } else if(e.target.textContent === " 💧 "){
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"                
            } else{
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"                
            }     
            selecionarAtaqueEnemigo()       
        })
    })
    
}

function seleccionarMascotaEnemigo()
{
    let ataqueAleatorio = aleatorio(0,mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[ataqueAleatorio].nombre
    ataquesMokeponEnemigo = mokepones[ataqueAleatorio].ataques
    secuenciaAtaque()
}

function selecionarAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1)
    if (ataqueAleatorio == 0 || ataqueEnemigo ==1){
        spanAtaqueEnemigo.innerHTML.push = "Fuego"   
    }else if (ataqueAleatorio == 3 || ataqueEnemigo ==4) {
        spanAtaqueEnemigo.innerHTML.push = "Agua" 
    }else {
        spanAtaqueEnemigo.innerHTML.push = "Tierra" 
    }
    console.log(ataqueAleatorio)
    iniciarPelea()
}
function iniciarPelea(){
    if(ataqueJugador.length === 5)
    resultadoAtaqueJugadores()
}

function resultadoAtaqueJugadores()
{        
    for (let index = 0; index < ataqueJugador.length; index++) {
        console.log(ataqueJugador[index])
        
    }
    if (ataqueJugador == ataqueEnemigo){
        resultadoAtaques.innerHTML = "Empate😒😒"
    } else if(ataqueJugador == 1 && ataqueEnemigo == 3){
        resultadoAtaques.innerHTML = "Ganaste🥳"
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    } else if(ataqueJugador == 2 && ataqueEnemigo == 1){
        resultadoAtaques.innerHTML = "Ganaste🥳"
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    } else if(ataqueJugador == 3 && ataqueEnemigo == 2){
        resultadoAtaques.innerHTML = "Ganaste🥳"
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    } else {
        resultadoAtaques.innerHTML = "Perdiste😿😿"
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }    
    revisarVidas()
}

function revisarVidas(){
   
    if(vidasEnemigo == 0){
        alert("Ganaste 😀🎉🪅🥳")
        reset() 
        botonReset()  
    } else if (vidasJugador == 0){
        alert("Perdiste 😿😭")
        reset()  
        botonReset()
    } 
}

function reiniciarJuego(){
    location.reload()
}

function reset(){
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}
function botonReset(){
    selectionReiniciar.style.display = "block"
}
function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

window.addEventListener('load', iniciarJuego)