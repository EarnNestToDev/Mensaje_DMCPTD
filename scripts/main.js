
console.log("<< Cargando script... >>");

let ContadorMensaje = 0, ContadorBitacora = 0;

let msg_title, msg_text;

msg_title = document.getElementById('mensaje_title');
msg_text = document.getElementById('mensaje_text');


document.getElementById('elemento').addEventListener('click', function() {
    this.classList.toggle('sumido');
});


function test(){
    msg_text.innerHTML = "Hola 💌";
}


 //# Mensaje Frame
function SiguienteEM(){
    ContadorMensaje++;
    cambiarEstadoMensaje(ContadorMensaje);
    console.log(ContadorMensaje);
}

function AnteriorEM(){
    if (ContadorMensaje > 0){
        ContadorMensaje--;
        cambiarEstadoMensaje(ContadorMensaje);
        console.log(ContadorMensaje);
    }
}

function cambiarEstadoMensaje(n){
    if (n == 0){
        msg_title.innerHTML = "<h3>Saludo 👋</h3>";
        msg_text.innerHTML = "<p>Hola Dani, cómo estás?, espero que estés bien, que tu familia goce de salud, paz y tranquilidad. Antes de iniciar quiero que quede claro que este escrito, carta, mensaje o cómo tú lo quieras interpretar fue realizado por los más profundos sentimientos de mi corazón, en este instante, yo solo soy el que dá la voz. Originalmente este mensaje te lo iba a enviar por texto, pero creo que está vez lo haré por voz, te seré sincero y éste mensaje lo estoy leyendo, a mí nunca me gustó como suena mi voz en audio, por eso no te envié alguno, tomo en cuenta que los audios que me enviabas tú y te los agradezco de corazón, sin embargo creo que esta es una ocasión especial así que lo estaré haciendo con mi voz, hace días que quería empezarlo a escribir y hasta hoy domingo que me animé a iniciarlo principalmente porque no sé si nos veremos esta semana, todo dependerá mucho de mi estado emocional, en caso de no vernos espero que este mensaje con el transcurso de la semana hasta el viernes lo pueda pulir lo mejor posible y que cubra y plasme lo que siento en mi corazón hacía tí. Si nos llegamos a ver esta semana creo que sí te mostraré este mensaje porque esto te lo quería decir desde el viernes que fué que noté ciertos cambios, solo que no estará tan pulido a como será hasta el viernes. Te lo vuelvo a repetir en caso de que se te haya olvidado, pero pues yo me expreso mejor escribiendo, y si lo hiciera directamente desde una grabación en tiempo real me saltaría muchas cosas o haría que el audio dure demasiado y se vuelva un revoltijo perdiendo toda la importancia jaja, espero que me entiendas.</p>";
    } else if (n == 1){
        msg_title.innerHTML = "<h3>Feliz primer mes de novios 💕</h3>";
    } else if (n == 2){
        msg_title.innerHTML = "<h3>Por qué no he ido a verte? 😓</h3>";
    } else if (n == 3){
        msg_title.innerHTML = "<h3>Te he notado distante</h3>";
    } else if (n == 4){
        msg_title.innerHTML = "<h3>Me quieres ❔</h3>";
    }
}

