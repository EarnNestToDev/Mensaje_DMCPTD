
console.log("<< Cargando script... >>");

let ContadorMensaje = 0, ContadorBitacora = 0;

let msg_title, msg_text;

msg_title = document.getElementById('mensaje_title');
msg_text = document.getElementById('mensaje_text');




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
    switch (n) {
        case 0:
            msg_title.innerHTML = "<h3>Saludo 👋</h3>";
            msg_text.innerHTML = "<p>Hola Dani, cómo estás?, espero que estés bien, que tu familia goce de salud, paz y tranquilidad. Este mensaje posiblemente te lo envíe aproximádamente a las 9:30 o mucho más tarde, no lo sé. Solo espero que lo escuches cuando estés tranquila y sin preocupaciones. Será un poquito largo, así que acomodate bien jaja. Antes de iniciar quiero que quede claro que este escrito, carta, mensaje o cómo tú lo quieras interpretar fue realizado por los más profundos sentimientos de mi corazón, en este instante, yo solo soy el que dá la voz.</p>";
            break;

        case 1:
            msg_text.innerHTML = "<p>Originalmente este mensaje te lo iba a enviar por texto, pero creo que está vez lo haré por voz, te seré sincero y éste mensaje lo estoy leyendo, a mí nunca me gustó como suena mi voz en audio, por eso no te envié alguno, tomo en cuenta que los audios que me enviabas tú y te los agradezco de corazón, sin embargo creo que esta es una ocasión especial así que lo estaré haciendo con mi voz, hace días que quería empezarlo a escribir y hasta hoy domingo que me animé a iniciarlo principalmente porque no sé si nos veremos esta semana, todo dependerá mucho de mi estado emocional, en caso de no vernos espero que este mensaje con el transcurso de la semana hasta el viernes lo pueda pulir lo mejor posible y que cubra y plasme lo que siento en mi corazón hacía tí.</p>";
            break;

        case 2:
            msg_title.innerHTML = "<h3>Saludo 👋</h3>";
            msg_text.innerHTML = "<p>Si nos llegamos a ver esta semana creo que sí te mostraré este mensaje porque esto te lo quería decir desde el viernes que fué que noté ciertos cambios, solo que no estará tan pulido a como será hasta el viernes. Te lo vuelvo a repetir en caso de que se te haya olvidado, pero pues yo me expreso mejor escribiendo, y si lo hiciera directamente desde una grabación en tiempo real me saltaría muchas cosas o haría que el audio dure demasiado y se vuelva un revoltijo perdiendo toda la importancia jaja, espero que me entiendas.</p>";
            break;

        case 3:
            msg_title.innerHTML = "<h3>Feliz primer mes de novios 💕</h3>";
            msg_text.innerHTML = "<p>Primero que nada, feliz primer mes de novios hoy hace un mes ambos decidimos formalizar la relación, estuve pensando mucho tiempo este día, especialmente porque todavía recuerdo cuando casi olvido cuando cumplimos una semana, sé que es un poco exagerado celebrar por una semana pero he escuchado que a las mujeres les encanta ese tipo de detalles, igual lo ví con Adrían y Abril, así que dije por qué no lo hago yo también, supongo que lo arruiné ese día jaja. Esta vez será diferente.</p>";
            break;

        case 4:
            msg_text.innerHTML = "<p>Te quiero agradecer de corazón por haberme compartido esa pasión y amor durante tanto tiempo, un amor que siento que jamás seré merecedor. Hace tanto tiempo que yo había olvidado esa sensación que tanto me gustó por primera vez y en tí volví a sentir.</p>";
            break;

        case 5:
            msg_text.innerHTML = "<p>Recuerdas cuando te acercaste a mí por primera vez jaja?, te veias tan linda siendo tímida, aún me pregunto si de verdad te sentías tímida o era una táctica tuya para acercarte a mí?, no lo sé, te agradezco mucho me hayas dejado saber un poquito de tí. Me sorprendío que te aferraras tanto a mí aún mostrando muy poco interés por mi parte.</p>";
            break;

        case 6:
            msg_text.innerHTML = "<p>Despues de días, con ayuda de Adrian y Leo te fuiste metiendo poco a poco a mi corazón, en un punto que yo mismo tanto decía y casi hasta presumía no querer nada relacionado a una pareja. No recuerdo cuando, pero el día que escuché esa risita tuya sentí una inmensa alegría que me hacía querer escucharla a cada rato, fue ahí donde mi interés por tí despertó, de verdad me encantaría saber cómo fue ese día y qué fue exactamente lo que hice para sacarte ese bello tono.</p>";
            break;

        case 7:
            msg_text.innerHTML = "<p>Lo que se me hace raro fue que yo te empecé a dar besos, pues a lo mucho que yo mostraba cariño con alguien era solo un abrazo y de forma respetuosa, recuerdo el día que me comentaste que si yo daba besos así con las personas, esa pregunta me hizo cuestionarme a mí mismo del porque estaba haciendo eso contigo, si se supone solo eramos conocidos. A día de hoy todavía me pregunto el por qué lo hacía jaja.</p>";
            break;

        case 8:
            msg_text.innerHTML = "<p>Tus celos, esa posesividad y el cómo me \"molestabas\" que tanto me mostrabas con energía fueron detalles muy bonitos de tu parte que poco a poco fuí apreciando y queriendo más de tí. Los besos sutíles que me dabas en el brazo siempre me encantarón tanto como tu risita  que por alguna razón que no lo puedo explicar a la perfección, creo que tengo que analizarlo un poco más.</p>";
            break;

        case 9:
            msg_text.innerHTML = "<p>Agradezco de corazón aquella vez que me cuidaste en el autobus aún estando enfermo, te quedaste a pesar de que salías temprano, qué explicación le habrás dado a tu mamí jaja. Yo pensaba en irme tan pronto en cuanto terminara de hacer lo que fuí a hacer porque la neta si me sentía de la chingada, ya a las 11 de la mañana ya quería regresarme, el efecto del paracetamol no me duró casi nada y el escurrimiento nasal todavía me andaba jodiendo más conforme pasaba el tiempo.</p>";
            break;
            
        case 10:
            msg_text.innerHTML = "<p>Ahora que lo pienso, me doy cuenta nunca sentí el malestar al estar contigo jaja, lo noté más cuando estabamos en el autobus porque ya cuando llegué a mi casa ahí si me tumbó y me tuve que dormir. Lo que según te iba a decir ese día que me dejaras pensarlo era que me sentía feliz al estar contigo, no te lo quise decir porque me daba mucha pena, más aún porque me sentía algo nervioso, sé que no es la gran cosa pero para mí si importaba mucho en ese momento.</p>";
            break;

        case 11:
            msg_text.innerHTML = "<p>Aún recuerdo aquel primer beso que nos dimos, ese día anhelaba verte lo más pronto posible, tanto que una vez pasé de presentar el proyecto me fuí casi corriendo al primer edificio, estaba tan emocionado y nervioso a la vez de verte, agradezco a Adrian que estaba ahí afuera, pues verlo me calmó un poco los nervios hasta que finalmente nos encontramos.</p>";
            break;

        case 12:
            msg_text.innerHTML = "<p>La primera vez que te ví en ese día estabas ocupada platicando con tus amigas, me tuve que ir rápido y creo que solo Abril me vió, no recuerdo si la saludé o no, pero ví en su cara un sentimiento de querer decirte que estaba pasando a cerca de tí pero supongo que le dió pena molestarte jaja, cuida mucho a ese persona, creeme que ese tipo de amistades son casi únicas en la vida, si la pierdes de alguna u otra forma te arrepentirás el resto de tu vida, ni 100 amistades juntas podrán reemplazar la suya, es una verdad que cuando la vives ya no tomas tan a la ligera esa frase, yo también trataré de guiar a Adrian de que cuide mucho a esa personita.</p>";
            break;

        case 13:
            msg_text.innerHTML = "<p>Retomando lo anterior a esto, ese día nos abrazamos tanto que realmente sentí tu cariño hacía mí a pesar de que hasta ese momento apenas nos estabamos empezando a conocer. Esos abrazos fueron un tanto diferentes a los otros, tanto que en mí surgió ese sentimiento de querer ser mucho más cercano contigo.</p>";
            break;

        case 14:
            msg_text.innerHTML = "<p>Como nos mencionamos ese día en la mañana, nos llenamos de rondas de besos. Yo realmente no tenía planeado darte el beso aún, vaya que ni por la mente se me pasó, solo me dí cuenta cuando ya me lo estabas dando de regreso. Esa respuesta de regreso me afirmó nuevamente que realmente me querias mucho.</p>";
            break;

        case 15:
            msg_text.innerHTML = "<p>Sé que ya habían señales de sobra para llegar a eso, pero en verdad quería que me conocieras un poco más, al final ya no pude caer en la tentación de tus labios. Recordaré con mucho cariño ese primer beso.</p>";
            break;

        case 16:
            msg_text.innerHTML = "<p>Por medio de Adrian, ví que estabas confundida con mi comentario de que no quería que te encerraras conmigo, si alguna otra persona te hacía sentir más feliz que yo y sentías que es la indicada fueras a por ella, más adelante te lo explico, ahora tengo miedo de eso pero si es tu decisión la respetaré, solo aviseme con tiempo mañosona jaja.</p>";
            break;

        case 17:
            msg_text.innerHTML = "<p>Una cosa de mí que tal vez no has notado es mi selectividad con las palabras. Se refleja mucho en mis mensajes y es que yo siempre trato de escoger la palabra índicada y que exprese lo que realmente siento en esa ocasión, principalmente para evitar malentendidos o confusiones. En todo momento, desde lo más simple hasta lo más complejo trato de decirte lo que realmente pienso y siento.</p>";
            break;

        case 18:
            msg_text.innerHTML = "<p>Tal como aquella vez que me preguntaste si te podía jurar amor por toda la eternidad, para empezar nosotros no somos eternos, tenemos un límite de estar vivos y lo más adecuado es que te puedo jurar un amor duradero y real, pues es posible que no estemos juntos por el resto de nuestras vidas o por solo una parte de nuestra vida, pero en caso de llegar a ese punto de relación (Casamiento) entonces sí me compremetería a jurarte amor por el resto de nuestras vidas o hasta donde tú quieras. Creo que tambien profundizo este punto más adelante.</p>";
            break;

        case 19:
            msg_text.innerHTML = "<p>Yo lamento tanto el dolor que te he causado, en verdad te pido disculpas... para mí una disculpa no suele servir de mucho y no sé como conseguiré tu verdadero perdón pues todavía me sigo sientiendo mal por aquel viernes que me dormí en el bus, sentí toda tu tristeza con tu mensaje de 'No me quieres tú, ya me di cuenta' fue como un golpe certero en el pecho que solo pude contestar con un simple signo de interrogación, me bloqueé por completo que fue de las ocasiones en la que no me salía ni una palabra para poder remediarlo.</p>";
            break;

        case 20:
            msg_text.innerHTML = "<p>Sumado a que en esa semana estuve pensando en qué regalarte en tu cumpleaños, pensaba en un peluche relacionado a una cocacola pero no lo encontré, lo único que encontré en mercado libre fue un vaso de cocacola pero era juguete para perro y pues como que no jaja, me tienta comprarlo porque se ve felposo, pero pues ya veré un día e igual y me animo, nomás deja tenga el varo jaja.</p>";
            break;

        case 21:
            msg_text.innerHTML = "<p>Otra ocasión fue aquella vez en que casi no me despido de tí, esa vez me molesté porque no me decias que es lo que te pasaba, y pues me frustraba el hecho de que no me dijeras lo que te preocupaba y más aún ya siendo pareja, poco después me analisé y me dí cuenta de que actué de forma inmadura y poco empática tratando de forzarte a decir algo que no era facíl para tí, en verdad perdóname, me frustra no saber el por qué de las cosas.</p>";
            break;

        case 22:
            msg_text.innerHTML = "<p>También las veces que te he ignorado por un largo periodo de tiempo y no contestar rápido tus mensajes, pero en un momento te explicaré eso.</p>";
            break;

        case 23:
            msg_text.innerHTML = "<p>Te repito que te quiero mucho y de verdad lo siento tanto todo el daño que te he causado, independientemente de ser pareja, te pido disculpas por ser un terrible ser humano. Siempre supe que mi orgullo mataría alguna vez algo y desgraciadamente puedo ver que no me equivoqué.</p>";
            break;

        case 24:
            msg_title.innerHTML = "<h3>Feliz primer mes de novios 💕</h3>";
            msg_text.innerHTML = "<p>Soy consciente de que muchas cosas que te he dicho hasta ahora ya te lo he dicho con anteriordad por mensaje, pero mientras yo recuerde todos esos detalles te agredeceré y te pediré perdón las veces que sea necesario según sea la situación.</p>";
            break;

        case 25:
            msg_title.innerHTML = "<h3>Por qué no he ido a verte? 😓</h3>";
            msg_text.innerHTML = "<p>Este punto, no sé como te lo puedo explicar, es un problema que me suele pasar en distintas situaciones frecuentemente y por lo visto aquí también, es sobre el porque no te he ido a visitar.</p>";
            break;

        case 26:
            msg_text.innerHTML = "<p>Yo la primera semana sí la puedo justificar, y es que cuando salimos ya de clases me dediqué a buscar un trabajo, salí en busqueda un lunes 3, me sentía tan animado y nervioso que el sol abrazador de la mañana nisiquiera era nada para mí aquel día. Busqué y busqué que cuando me dí cuenta que ya iba de regreso a mi casa habia caminado por un poco más de 3 horas jaja. Ese día solo ví oportunidad en 2 lugares, en un oxxo y en una tienda donde el trabajo era pesado. Me aferré más a este último porque quería ponerme a prueba.</p>";
            break;

        case 27:
            msg_text.innerHTML = "<p>Fuí el miercoles 5 y al final solo resistí un día jaja, en mi vida me había metido tal chinga, mis ganas de trabajar seguían pero mi fuerza y resistencia no daba para tanto, aprendí que trabajar en un oxxo era mejor opción, jamás me respondieron para una entrevista en el oxxo. Me salí porque eran 12 horas de trabajo pesado al día y la neta si era muy poco lo que pagaban para lo que hacía, el viernes 7 fuí a dejar mi solicitud de empleo a la tienda Neto que está en el repasto, hasta la fecha no se han comunicado conmigo.</p>";
            break;

        case 28:
            msg_text.innerHTML = "<p>Ese viernes fue que me dijiste que me habías visto, yo la verdad nunca ví donde era donde estabas, ojalá me hubieses hablado para pasar a saludarte un rato y saber donde trabajas. Despues de ir a dejar los papeles ese mismo día fuí a la tienda de peluches para ver si te podía comprar uno con lo que gané el miercoles pero no había ni uno relacionado a una coca-cola, no encontré nada y me regresé mejor.</p>";
            break;

        case 29:
            msg_text.innerHTML = "<p>La siguiente semana me la pasé esperando a que me respondieran en el Neto pero hasta la fecha nada, fue ahí que mis ganas de jalar se me fueron y prácticamente me la pasé frustrado y desanimado. Realmente no quería nada y me puse a hacer otras cosas para desestrezarme, como jugar, ver películas (cosa que no suelo hacer en absoluto) y ver papeles de la escuela.</p>";
            break;

        case 30:
            msg_text.innerHTML = "<p>Mi plan original desde que empezó las vacaciones fue que quería centrarme en conseguir primero un trabajo para invitarte a salir un día a algún lado a comer o no sé o visitarte de vez en cuando que saliera del jale, pero como suele ocurrir, las cosas no salen como uno quiere y piensa. Jamás te lo dije porque la pena me mataba, hasta me costó decirle a Adrian porque sabía que te lo iba a contar.</p>";
            break;

        case 31:
            msg_text.innerHTML = "<p>Por dedicarme a conseguir trabajo descuide mucho el hablarte y realmente no me quería presentar contigo sin llevar un detalle, me encerré tanto en ese pensamiento.</p>";
            break;

        case 32:
            msg_text.innerHTML = "<p>Ya para cuando finalmente me armé de valor para ir a visitarte te dió gripe.</p>";
            break;

        case 33:
            msg_text.innerHTML = "<p>Esas semanas fueron cómo cuando cuando intentas salvar una matería por otra y pierdes ambas, yo perdí mis ganas de chambear y mi oportunidad de estár un rato contigo.</p>";
            break;

        case 34:
            msg_text.innerHTML = "<p>No te voy a mentir y realmente sí tuve algunas oportunidades de ir a visitarte, pues son cosas que están a mí alcance, y admito que he sido un cobarde.</p>";
            break;

        case 35:
            msg_text.innerHTML = "<p>Un cobarde porque me mata mi inseguridad y timidéz para hacer cosas tan básicas. Siempre quise ir para saber donde trabajas pero mi timidéz está a otro nivel que llega a no ser normal. Yo me acobardaba en ir porque no sabía a qué hora sería la adecuada, por si estaba tu mamá o alguna amiga y yo ahí actuando como que nomás andaba de paso. Por si estabas muy ocupada en la mañana, estar cuando te llevaran comida jaja, nunca dejé de pensar en esas situaciones.</p>";
            break;

        case 36:
            msg_text.innerHTML = "<p>Solo el viernes 14 que fue que me dijiste que fuiste a trabajar, ese día me emocioné mucho pero no quise preguntartelo tan directamente porque no sabia si estaba tu mamá, como contestaste un poquito tarde supuse que estabas muy ocupada, y te digo que no quise ir por miedo a que estuviera alguien ahí contigo, y tampoco sabía donde era. Al final en la noche me dijiste ella se quedó en tu casa jaja, como me arrepiento de no haberme arriesgado a ir.</p>";
            break;

        case 37:
            msg_title.innerHTML = "<h3>Te he notado distante</h3>";
            msg_text.innerHTML = "<p>Por otro lado ésta última semana he notado que estás bastante distante de mí, en específico desde el viernes 14, lo puedo notar en tu forma de contestar los mensajes, en que ya no me envias videos como antes, ya no subes nada en facebook, me respondes demasiado tarde, al principio creía que sería algún problema personal y esperaba a qué me dijeras para tal vez ayudarte, pero en tanto pensar y analizar llegué a la conclusión de que lo más posible es por algo que yo hice, se me vienen tantas cosas a mi mente que la única forma de salir de dudas es que tú me digas.</p>";
            break;

        case 38:
            msg_text.innerHTML = "<p>(i) (A partir de aquí, todo esto lo represento mejor en la bitácora, qué es la bitácora?, es un registro detallado de todo lo que pasa por mi mente al momento de realizar este mensaje, lo verás en un proyectito que estoy realizando, espero poder terminarlo pronto para entregarlo el mismo día, en él, vendrá todo esto que te estoy diciendo y algunos extras como la bitácora).</p>";
            break;

        case 39:
            msg_text.innerHTML = "<p>Una de las cosas que siempre envidié es la confianza que tienes con Adrían, qué tiene que ver con esto? A por lo poco que me ha dicho sobre tí, me hace pensar qué es lo que soy para tí?, se supone que soy alguien de confianza o quizás no me la he ganado como él, qué es lo que hizo él para ganar esa confianza que yo he tratado de obtener y sin embargo no siento que avance.</p>";
            break;

        case 40:
            msg_title.innerHTML = "<h3>Te he notado distante</h3>";
            msg_text.innerHTML = "<p>A veces me pregunto qué es lo que realmente viste en mí para soportarme hasta ahora, he cambiado?, he empeorado?, he hecho las cosas mal?, te he fallado?.</p>";
            break;

        case 41:
            msg_title.innerHTML = "<h3>Me quieres ❔</h3>";
            msg_text.innerHTML = "<p>Todo eso me cuestiona muchas cosas sobre mí. En referencia a cuando me preguntaste de cierta forma seria, tú realmente me quieres? y si lo haces, me quieres menos que antes?, cuál es la razón de ello?.</p>";
            break;

        case 42:
            msg_text.innerHTML = "<p>Cómo alguna vez te lo dije, yo de vez en cuando repaso todo lo que hemos conversado y trato de ver qué es lo que hice mal y qué es lo que hice bien, en todo lo que veo que hice mal trato de aprender de ello, trato de entender cómo es que te sentiste al yo hacer esa acción para comprenderte mejor, al hacerlo mi mente empieza a jugar conmigo y me imagino cosas más allá de lo normal para no volverlo a hacer, no es un proceso rápido, es por eso que tardo en redimirme mis acciones, pues ni siquiera a Adrian le pregunto, no es porque no me preocupe por tí, si no que mi orgullo me hace querer arreglar las cosas solo, hace poco me tuve que tragar mi orgullo y recurrí a él porque me dí cuenta que no podía hacerlo solo, es alguien a quien aprecio mucho y a quien le tengo alta estima y respeto. Posiblemente haya muchas otras cosas que no me haya dado cuenta de que hice mal, no puedo adivinar tan facilmente si no me las dices, incluso si es lo más infimo y sabes que puedo cambiar, dímelas.</p>";
            break;

        case 43:
            msg_text.innerHTML = "<p>Sobre las pocas cosas que he hecho bien yo tambien las analizo, para ver cómo puedo mejorar, si te gustó esto tal vez aquello también te guste o incluso disfrutes más, experimentar hasta ver cuales son tus límites. En eso puedo intuir más facílmente pues realmente rebosas de felicidad en ese tipo de cosas y eso me alivía un poco, pues me hace saber que mínimo estoy haciendo algo bien. No sé si he dejado de hacer alguna cosa que te haga feliz y yo no me he dado cuenta, por favor dímela también para que pueda ver qué hacer.</p>";
            break;

        case 44:
            msg_text.innerHTML = "<p>Cómo ya te lo dije anteriormente, todo lo que te digo es verdad, no solo los videos que te mando, los mensajes, desde los te quiero hasta los te amo, siempre trato de que no sean tan repetitivos porque sé que en algún punto llegarán a ser tan secos que ya ni se sientan con la misma fuerza que alguna vez tuvieron. Frecuentemente, entro a facebook y busco algún reel que te pudiese gustar, siempre los guardo para poder usarlos despues en caso de que no encontrára uno bonito.</p>";
            break;

        case 45:
            msg_text.innerHTML = "<p>Trato de mandarte el reel en el momento más oportuno, pues enviarte uno de amor en cuanto las cosas no están del todo bien entre nosotros sé que me lo tomarías como un acto de hipocresía o lo verías cómo que trató de arreglar las cosas mediante unos videos, al hacer esto prácticamente desperdiciaría usarlos, pues no me gusta repetir videos, quiero que cada uno sea único. Si he repetido alguno te pido disculpas, a veces según los elimino de guardados para no volver a usarlos o a veces se me olvida borrarlo, como son muchos los que te he mandado me puedo a llegar a confundir.</p>";
            break;

        case 46:
            msg_text.innerHTML = "<p>Desde mi punto de vista, te me haces una persona bastante linda, tanto fisicamente como emocionalmente, dudo que me creas pero, en verdad yo siempre trato de no mirarte de forma lasciva, aunque tú y yo seamos pareja te guardo ese respeto cómo mujer, más allá de eso, me encanta mucho tus razgos faciales, tú cabello que cuando te lo dejas suelto me hace apreciarlo, tú personalidad, el cómo te expresas y demuestras esa pasión y felicidad con tanta energía y entusiamo por las cosas que te gustan. Adoro tanto eso de una persona que me siento afortunado de tener a alguien cercano así.</p>";
            break;

        case 47:
            msg_text.innerHTML = "<p>Siendo una persona así, no dudaría por nada de que tuvieras pretendientes, realmente me aterra que alguno de ellos se te acerque tanto a tu corazón y me gane.</p>";
            break;

        case 48:
            msg_text.innerHTML = "<p>Desde nuestros inicios yo siempre tuve dudas que me guardaba porque esperaba que me las aclararas de alguna u otra forma, como nunca me las aclaré creo que esta es el momento índicado para preguntarte... Verás, a veces cuando entraba a facebook habia ocasiones en que veia que subias una foto tuya pero a los pocos minutos esa foto desaparecia, siempre me preguntaba si las eliminabas, las ocultabas, o hacías otra cosa, si las ocultabas por qué o para qué?, a mi mente solo llegaba pensamientos cómo que lo hacias para que yo no reaccionara o no se vieran comentarios de algún pretendiente, lo sé, suena hasta pndjo pero he visto de cerca cómo una persona se puede aprovechar tanto de la ingenuedad y confianza de otra, en esos momentos yo tenía mucho miedo de que solo te estuvieras aprovechando de mí, cualquier cosa mínima me afectaba.</p>";
            break;

        case 49:
            msg_text.innerHTML = "<p>Hubo un cierto detonante por el cúal me llegaban estos pensamientos y que hasta hoy me sigue atormentando mucho, recuerdas cuando tu hermana subió un post a facebook en el cual te etiquetó y decía 'Quien será el afortunado que hace sonreir tanto a Daniela?', ese momento en la noche lo ví y me sentí tan feliz de que realmente te hiciera feliz en un momento dificíl para tí, fue uno de los momentos más emotivos que sentí al estar contigo, pero así como tan rápido me motivé, al día siguiente me desmotivé, en mi felicidad por querer volver a ver ese post y sentirme un poco orgulloso, simplemente no estaba, parecía cómo si lo hubiesen ocultado o borrado, lo peor fue que eso pasó justo después de que me etiquetaran.</p>";
            break;

        case 49:
            msg_text.innerHTML = "<p>Pudo haber sido simplemente para que tus papás no lo vieran o algo así de simple, pero el sentimiento de aquel día no lo podré olvidar, me sentí negado, cómo si solo fuera algo pasajero o solo fuera uno más del montón. Al no recibir respuestas del por qué, me la pasaba sobrepensando, tanto fue mi sobrepensamiento que durarón días. Esa fue la razón por la cúal me mostré cortante y no contestaba rápido los mensajes o en ocasiones ya de plano ni siquiera quería contestar a nadie.</p>";
            break;

        case 50:
            msg_text.innerHTML = "<p>Estaba luchando con mi mente día y noche, por largos periodos de tiempo qué cualquier cosa me hacía decaer y volver al mismo punto. Yo no quería absolutamente nada en ese estado de ansiedad. Siempre trataba de distraerme jugando o durmiendo.</p>";
            break;

        case 51:
            msg_title.innerHTML = "<h3>Me quieres ❔</h3>";
            msg_text.innerHTML = "<p>Jamás te mencioné nada al respecto porque siempre sentía que me lo cubrirías con alguna mentira, tanto me dolió ese gesto que yo prácticamente no iba a aceptar ni una respuesta.</p>";
            break;

        case 52:
            msg_title.innerHTML = "<h3>Alguna otra persona te hace más feliz ❔</h3>";
            msg_text.innerHTML = "<p>En mis miedos e inseguridades constantes, yo me pregunto si hay más personas que te llamen la atención?, creo suponer que sí, pero te cortas oportunidades por mí. 'Conóceme bien, No te cegues por el amor y piensalo bien, Si conoces a alguien que te haga sentir mejor y ambos están interesados, ve a por él', son palabras que yo te dije al inició de lo nuestro, lo recuerdas?</p>";
            break;

        case 53:
            msg_text.innerHTML = "<p>Antes de irte a tu casa te sentias tan confundida quizás por eso, no lo dije porque yo haría eso, si no que realmente yo ya tenía certeza de cómo era hasta ese momento, de que yo no tengo la madera para ser una pareja de alguien, sin embargo, también me cegue, la emoción y el cariño que me provocaste fue lo que me cegó y terminé por decidir contigo una relación.</p>";
            break;

        case 54:
            msg_title.innerHTML = "<h3>Alguna otra persona te hace más feliz ❔</h3>";
            msg_text.innerHTML = "<p>No me arrepiento para nada sinceramente, realmente me ha encantado volver a sentir un poco de cariño de otra persona nuevamente, he aprendido tanto de tí como de mí. Entre ellas a ver el verdadero estado sentimental en el que estoy, a bajar mi orgullo, a ser más comprensivo, a ser más empático, a ser más recíprocro, a ser más valiente. Son cosas en las qué según yo iba a trabajar más adelante, pero me doy cuenta que las necesito trabajar desde ahora.</p>";
            break;

        case 55:
            msg_title.innerHTML = "<h3>Te quiero ver feliz, aunque no sea conmigo</h3>";
            msg_text.innerHTML = "<p>Te quiero mucho Dani, te quiero tanto que quiero verte feliz, incluso si no es a mi lado. Quiero que realmente te sientas feliz y plena contigo misma si no lo estás, que reboses tanto de verdadera felicidad que cualquier persona que esté a tu lado se sienta agusto con tu presencia, con tu personalidad.</p>";
            break;

        case 56:
            msg_title.innerHTML = "<h3>Te quiero ver feliz, aunque no sea conmigo</h3>";
            msg_text.innerHTML = "<p>Cumple tus sueños y metas aunque los demás no crean en tí, vaya, aunque incluso la persona más cercana a tí dude de tus capacidades, demuestra que eres una inspiración para los demás. Es un camino difícl y largo, porque si fuera facíl la vida misma sería aburrida. Llora cuando tengas que llorar, enfadate cuando te tengas que enfadar, deja cuando tengas que dejar pero sobre todo, aprende, porque incluso de lo más malo se puede aprender.</p>";
            break;

        case 57:
            msg_title.innerHTML = "<h3>Lo que hago en todo el día</h3>";
            msg_text.innerHTML = "<p>Ahora, por qué tantas inseguridades y por qué sobrepensar hasta las cosas más simples dices tú?.</p>";
            break;

        case 58:
            msg_text.innerHTML = "<p>Te contaré un secreto mío, según yo, solo 2 personas saben, una tal vez por intuición de algo que le mencioné meticulosamente una vez o porque ya le dijeron, no lo sé. Tú serás la siguiente, no quiero que te sientas mal o sientas pena, solo quiero que me comprendas un poco del por qué soy así.</p>";
            break;

        case 59:
            msg_text.innerHTML = "<p>Soy depresivo, ningún psicólogo o psiquiatra me ha diagnosticado con ese síndrome, pero en mí personalidad se puede llegar a notar un poco. Estos últimos años ha ido incrementando hasta el punto que se me dificulta más disimularlo, mi madre incluso ha notado eso que hasta me lo llega a mencionar y tengo que mentirle en esas ocasiones.</p>";
            break;

        case 60:
            msg_text.innerHTML = "<p>Por qué no le digo o le hago mención sobre eso?. Desde antes de que yo naciera, ella sí fue diagnosticada con transtorno depresivo. Con el tiempo se fue controlando, pero por eventos recientes volvió a recaer, y lo que no me dí cuenta de niño me dí cuenta ahora.</p>";
            break;

        case 61:
            msg_text.innerHTML = "<p>Mi padre fue causante de tal evento reciente, una infidelidad transformó el amor, admiración y respeto de 19 años que tenía en él en ira, rencor y decepción. Ese evento me ayudó a saber mucho sobre mí. Entre eso ésta parte de mí.</p>";
            break;

        case 62:
            msg_text.innerHTML = "<p>Por eso mis traumas, ver de primera mano las consecuencias que trae esta acción deplorable e inmunda me ha hecho valorar y respetar mucho más a las mujeres en general, al menos cómo primera impresión, pues hay gente que realmente no se merece el respeto. Sé que si yo alguna vez cometiera el error de mi padre, mi madre misma me lo remarcaría, no sé si ella soportaría tal decepción, me lo ha dicho muy bien y claro. No daré más detalles por respeto a ella. Yo no quiero causar tal daño a otra persona, no quiero causar ese daño a mi pareja.</p>";
            break;

        case 63:
            msg_title.innerHTML = "<h3>Lo que hago en todo el día</h3>";
            msg_text.innerHTML = "<p>Te recomiendo que disfrutes mucho esta etapa de tu vida, la universidad es una etapa maravillosa, estresante pero que al final será el comienzo de tu propia historia. Recalco, nada es fácil. Todo requiere de un máximo esfuerzo, al final de todo somos humanos, eso es lo bello de la vida, disfrutar de cruzar los obstáculos, no llegar al final porque sí.</p>";
            break;

        case 64:
            msg_title.innerHTML = "<h3>La salida siempre está abierta</h3>";
            msg_text.innerHTML = "<p>(Sin preocupaciones | Me llevaré los buenos recuerdos y las buenas prácticas, respetaré tu decisión | Adrian | Lamento no haber sido lo que tú esperabas)</p>";
            break;

        case 65:
            msg_title.innerHTML = "<h3>Finalmente, esperaré tu respuesta</h3>";
            msg_text.innerHTML = "<p>soy una persona de corazón débil así que lo único que espero es tu sinceridad pura como ser humano | Espero que esto te pueda aclarar tus dudas, y si hay más dudas que quieras aclararlas a pesar de tu decisión final, con gusto te las aclararé | En buenos términos | Espero no arruinarte tu fin de semana</p>";
            break;

        case 66:
            msg_title.innerHTML = "<h3>Respuesta corta y respuesta larga</h3>";
            msg_text.innerHTML = "<p>(Tu forma de responder | Ahora mismo estoy dispuesto a hacer muchas cosas)</p>";
            break;

        default:
            msg_text.innerHTML = "<p> Fin </p>";
            break;
    }
    
}

