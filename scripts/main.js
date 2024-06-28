
console.log("<< Cargando script... >>");

let ContadorMensaje = 0, ContadorBitacora = 0;

let msg_title, msg_text;

msg_title = document.getElementById('mensaje_title');
msg_text = document.getElementById('mensaje_text');




function test(){
    msg_text.innerHTML = "Hola 💌";
}


 //# ------ Mensaje Frame ------

function SiguienteEM(){
    ContadorMensaje++;
    cambiarEstadoMensaje(ContadorMensaje);
    // console.log(ContadorMensaje);
}

function AnteriorEM(){
    if (ContadorMensaje > 0){
        ContadorMensaje--;
        cambiarEstadoMensaje(ContadorMensaje);
        // console.log(ContadorMensaje);
    }
}

function cambiarEstadoMensaje(n){
    switch (n) {
        //#Saludo
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

            //#Feliz primer mes de novios
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

            //#Por qué no he ido a verte?
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
            msg_title.innerHTML = "<h3>Por qué no he ido a verte? 😓</h3>";
            msg_text.innerHTML = "<p>Solo el viernes 14 que fue que me dijiste que fuiste a trabajar, ese día me emocioné mucho pero no quise preguntartelo tan directamente porque no sabia si estaba tu mamá, como contestaste un poquito tarde supuse que estabas muy ocupada, y te digo que no quise ir por miedo a que estuviera alguien ahí contigo, y tampoco sabía donde era. Al final en la noche me dijiste ella se quedó en tu casa jaja, como me arrepiento de no haberme arriesgado a ir.</p>";
            break;

            //#Te he notado distante
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

            //#Me quieres?
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

            //#Alguna otra persona te hace feliz?
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

            //#Te quiero ver feliz, aunque no sea conmigo
        case 55:
            msg_title.innerHTML = "<h3>Te quiero ver feliz, aunque no sea conmigo</h3>";
            msg_text.innerHTML = "<p>Te quiero mucho Dani, te quiero tanto que quiero verte feliz, incluso si no es a mi lado. Quiero que realmente te sientas feliz y plena contigo misma si no lo estás, que reboses tanto de verdadera felicidad que cualquier persona que esté a tu lado se sienta agusto con tu presencia, con tu personalidad.</p>";
            break;

        case 56:
            msg_title.innerHTML = "<h3>Te quiero ver feliz, aunque no sea conmigo</h3>";
            msg_text.innerHTML = "<p>Cumple tus sueños y metas aunque los demás no crean en tí, vaya, aunque incluso la persona más cercana a tí dude de tus capacidades, demuestra que eres una inspiración para los demás. Es un camino difícl y largo, porque si fuera facíl la vida misma sería aburrida. Llora cuando tengas que llorar, enfadate cuando te tengas que enfadar, deja cuando tengas que dejar pero sobre todo, aprende, porque incluso de lo más malo se puede aprender.</p>";
            break;

            //#Lo que hago en todo el día
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

            //#La salida está abierta
        case 64:
            msg_title.innerHTML = "<h3>La salida siempre está abierta</h3>";
            msg_text.innerHTML = "<p>(Sin preocupaciones | Me llevaré los buenos recuerdos y las buenas prácticas, no solías ser muy abierta conmigo, respetaré tu decisión | Adrian | Lamento no haber sido lo que tú esperabas)</p>";
            break;

            //#Tu respuesta
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


//# ------ Chatbox ------

// document.getElementById('send-button').addEventListener('click', sendMessage);

// document.getElementById('chat-input').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         sendMessage();
//     }
// });

// function sendMessage() {
//     const chatInput = document.getElementById('chat-input');
//     const messageText = chatInput.value.trim();
    
//     if (messageText !== '') {
//         addMessageBubble(messageText, 'sent');
//         chatInput.value = '';
//     }
// }

function AgregarBurbujaDeMensaje(text, type) {
    const chatBody = document.getElementById('chat-body');
    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message', type);
    messageBubble.textContent = text;
    chatBody.appendChild(messageBubble);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Cambiar la paleta de colores
function CambiarTemaDeColor(hour) {
    const chatContainer = document.getElementById('chat-container');
    if (hour >= 6 && hour < 12) {
        // Mañana
        chatContainer.className = 'chat-container morning-theme';
    } else if (hour >= 12 && hour < 18) {
        // Tarde
        chatContainer.className = 'chat-container afternoon-theme';
    } else if (hour >= 18 && hour < 21) {
        // Atardecer
        chatContainer.className = 'chat-container evening-theme';
    } else {
        // Noche
        chatContainer.className = 'chat-container night-theme';
    }
}

// Hora actual
// const currentHour = new Date().getHours();
// changeColorTheme(currentHour);
CambiarTemaDeColor(19);

// Ejemplo de agregar un mensaje recibido
// addMessageBubble('Domingo, 14', 'sent');
AgregarBurbujaDeMensaje('Bienvenida a mi mente jaja.', 'received');
// changeColorTheme(22);

function HoraYPensamiento(h,p,t){
    CambiarTemaDeColor(h);
    AgregarBurbujaDeMensaje(p,t);
}

// Cambiar contenido de bitácora
function CambiarEstadoBitacora(){
    switch (ContadorBitacora) {
        case 0:
            CambiarTemaDeColor(19);
            AgregarBurbujaDeMensaje('Domingo, 16', 'sent');
            break;
            
        case 1:
            HoraYPensamiento(19,'7:17pm - Escribir esto realmente me está ayudando a no tener esos pensamientos intrusivos, a las 6:51pm recibí tu mensaje de contestación a la imagen que te envié. Como todos los días, estoy esperando a recibir otro mensajito tuyo como solías hacer antes, pero ya me estoy acostumbrado a que no jaja, creo que buscaré otro bonito reel más al rato en facebook y te lo enviaré.', 'received');
            break;

        case 2:
            HoraYPensamiento(19,'7:34pm - Sonó el celular, pero era de grupo. (Aquí si aplica el meme ese \'cuando suena una notificación pero no es de ella\' jaja).', 'received');
            break;

        case 3:
            HoraYPensamiento(19,'Estoy escuchando Heart To Heart [https://youtu.be/qBoQzo98EpQ?si=wLO16e9OcWa4qYGo] y al escuchar el minuto 1:03 me pegó una tristéza profunda escribiendo el mensaje, esperé a que términara la canción para escribir esto.', 'received');
            break;
    
        case 4:
            HoraYPensamiento(19,'7:57pm - Escuché Someone To Spend Time With [https://youtu.be/0C1cVATvlQk?si=gygumRCUthbGAE_2], una canción que me encanta por el ritmo lento y suave, la letra está hermosa y te la dedico como las anteriores que te he enviado, está en inglés pero te la dejo con subtitulos por si quieres prestar atención...', 'received');
            break;

        case 5:
            HoraYPensamiento(20,'8:11pm - Rises the moon [https://youtu.be/-2yAEUp9v6M?si=nsMpG1CzwCKnuuVO], aunque no le entienda, solo puedo decir que me encanta ese ritmo.', 'received');
            break;

        case 6:
            HoraYPensamiento(20,'8:28pm - Besame Mucho [https://youtu.be/7ejA6VDP4Ps?si=hGPuFl5dF0CUc2MO], me recordó a que ya quiero enviarte el reel pero creo que me aguataré hasta las 9 o mas tardecito, no quiero verme tan desesperado.', 'received');
            break;

        case 7:
            HoraYPensamiento(20,'8:30pm - Ylang Ylang [https://youtu.be/4TChuQgE8pw?si=w7sD-XZLYjDGrBAt], ptm esta si pegó duro jaja, me detendré a contemplarla un poco y seguiré.', 'received');
            break;

        case 8:
            HoraYPensamiento(21,'9:00pm - Ya son las 9 y todavía sigo esperando un mensaje tuyo jaja, buscaré el reel y te lo enviaré, creo que también te preguntaré sobre tu día y así, creo que me responderás en 1 hora o más así que es perfecto para seguir detallando este mensaje.', 'received');
            break;

        case 9:
            HoraYPensamiento(21,'9:02pm - Estoy escuchando YKWIM? [https://youtu.be/_C9rRLDimfQ?si=bn5cD1nkafgBF8Dw], tan solo el principio repentino me hizo recordarte por alguna razón, me duele esperar ese mensaje... me duele mucho. No sé si solo lo estoy sobrepensando pero es así como sentias esperar un mensaje mío?, perdoname por tanto, jamás me imaginé este dolor.', 'received');
            break;

        case 10:
            HoraYPensamiento(21,'9:15pm - Te envié uno algo gracioso jaja, te preguntaré cómo estuvo tu día cuando respondas para mantenerte un ratito más jaja.', 'received');
            break;

        case 11:
            HoraYPensamiento(21,'9:30pm - Lover is day [https://youtu.be/ZCzPoj1TZDc?si=mEhs2PC4Sj-yRnjO], una canción que me cautivó con ese ritmo tan suave, la primera vez que lo escuché fue en el 2017, a día de hoy no ha dejado de gustarme. Recientemente escuché el significado de la letra y cuanta coincidencia jaja [https://youtube.com/shorts/CQYMIRTZZgk?si=LfVaf_esaP7pROqz].', 'received');
            break;

        case 12:
            HoraYPensamiento(21,'9:41pm - Esperando aún un mensaje tuyo, se siente como si hubiese pasado mucho más tiempo, incluso aún entreteniendome escribiendo este mensaje. Me pregunto que estarás haciendo?, realmente espero que estés bien. Desde el viernes me pregunto la razón por la cual cambiaste tu forma de ser conmigo... se me vienen tantas cosas a la cabeza y yo supongo porque también yo solía responderte bastante tarde, si es así ahora sé lo que sentiste y estoy dispuesto a pagar esa penitencia hasta que me dés una respuesta. También quisiera explicarte que en esos momentos yo estaba luchando con mi mente y no quería enviarte mensajes estando en mi estado máximo de ansiedad.', 'received');
            break;

        case 13:
            HoraYPensamiento(21,'9:55pm - Cómo me estoy aguantando las ganas de preguntarte directamente qué es lo que pasa, pero quiero remarcar este sentimiento para no repetirlo más.', 'received');
            break;

        case 14:
            HoraYPensamiento(22,'10:01pm - Suena Young [https://youtu.be/oAur1xQx-sc?si=KEA6-QuWZyeHyVSI], revisé el celular y ni una reacción, perdoname por tanto dolor que te causé, realmente te extraño. Extraño esa personita tan energética y apasionada que me mostraste alguna vez.', 'received');
            break;

        case 15:
            HoraYPensamiento(22,'10:11pm - Estoy en el chat para recordar algo, gracias por contestar ♥, solo deja sigo escribiendo algo y te pregunto sobre tu día.', 'received');
            break;

        case 16:
            HoraYPensamiento(22,'10:25pm - Te he contestado, ahora a esperar a qué me respondas en 1 hora jaja.', 'received');
            break;

        case 17:
            HoraYPensamiento(22,'10:29pm - Decidí enviarte un reel, y un te amo, sé que suena simple, pero realmente te amo... te amo más de lo que puedes imaginar pequeña.', 'received');
            break;

        case 18:
            HoraYPensamiento(22,'Quiero preguntarte si mañana irás al negocio para acompañarte un rato, el viernes quería ir pero como tardabas en responder supuse que estabas ocupada, y aparte no sabía si estaba tu mamí, ya en la noche que me dijiste que no había ido sentí una oportunidad más que desperdiciada.', 'received');
            break;

        case 19:
            HoraYPensamiento(22,'10:36pm - Constantemente, mi mente juega conmigo y me hace pensar en que si habrá otra persona la cuál te hace reir de la forma en que yo solía hacerlo. Son los traumas que me generó mi padre, hasta la traición y decepción viene de la persona que menos esperarías. Y bueno, si es así aceptaré mi derrota porque quiero que seas feliz incluso si no es conmigo, solo te pido de favor que no dejes de hacer las cosas buenas como cuidarte, beber suficiente agua, querer mucho a tu mamí, no sentirte sola y liberar tus sentimientos de vez en cuando.', 'received');
            break;

        case 20:
            HoraYPensamiento(23,'11:08pm - Una notificación de facebook jaja.', 'received');
            break;

        case 21:
            HoraYPensamiento(22,'11:31pm - \'Iré a descansar amor, ten una linda noche\', solo eso me puede salir con la tristeza que siento en mi corazón, descansaré por ahora y seguiré mañana, ya no me salen más palabras.', 'received');
            break;

        case 22:
            CambiarTemaDeColor(5);
            AgregarBurbujaDeMensaje('Lunes, 17', 'sent');
            break;

        case 23:
            HoraYPensamiento(5,'Originalmente no iba a escribir cosas que suelo hacer en la mañana pero algo me nació. Aprovecharé a escribirlo antes de que se me olvide.', 'received');
            break;

        case 24:
            HoraYPensamiento(5,'5:52am - Te acabo de mandar tu mensaje de buenos días y un reel rápido que encontré ahí, ese reel ya te lo envié pero sinceramente cada vez me cuesta encontrar uno que exprese mis sentimientos a casi la perfección. Quisiera que supieras que todo los que te mando es realmente lo que siento, y en caso de que no lo haga trato de aclararlo.', 'received');
            break;

        case 25:
            HoraYPensamiento(5,'5:55am - Hoy me desperté diferente a otros días, está demás decirlo pero yo suelo hacer dos cosas al despertar, ir al baño ya que de alguna u otra forma mi cuerpo se acostumbró a eso jaja, y si no tengo ganas más tarde lo hago. Lo otro que también hago al despertarme es escribirte los mensajes de buenos días, esa acción la ví en un comentario de una publicación de facebook y quise adoptarla ,decía que su novio solía mandarle siempre un mensaje a la hora que se despertaba, que por lo general era a las 5 de la mañana, entonces nació en mí ese gesto y supuse que tal vez te gustaría, además de buscar y agregar un bonito reel de facebook jaja. Con respecto a hoy, me levanté aproximadamente a las 4:31am, y lo primero que hice fue revisar si me habias contestado, me dolió tanto que ni una reacción me dieras, en verdad quisiera preguntarte que es lo que sucede hasta por medio de Adrian, pero debo cumplir mi penitencia de seguir remarcando este sentimiento en mí. En un instante fuí a escuchar la lista de reproducción que te hice para calmar más rápido este sentimiento. Desde el viernes, me llegó ese presentimiento de que cada día me contestarás menos hasta el punto de ya no contestarme, me dolerá saber que no me equivoqué hasta que finalmente yo esté hablando solo, o en el peor de los casos, que me bloquees, si llega a ser así tengo planeado hacerte llegar el mensaje por medio de Adrian el viernes, cómo ya tengo práctica en sentirme solo y guardar todo lo que pienso y siento no debería ser un problema para mí jaja [Tan equívocado no pude estar].', 'received');
            break;

        case 26:
            HoraYPensamiento(5,'Te extraño.', 'received');
            break;

        case 27:
            HoraYPensamiento(6,'6:10am - Escribiendo esto me llegó una idea de que en vez de mostrarte esta bitácora por texto o en un pdf te lo pueda mostrar en un programa, en java es el que más me gustaría hacerlo pero no creo que uses mucho tu computadora y dudo que te dé ganas de instalar el programa, en android sería ya que usas el celular frecuentemente, pero en android es frustrante de programar y todavía me arriesgo a que la aplicación no abra en tu cel por x razón. Lo haré en página web, debido a que es un programa simple que se abrirá tanto en pc como en celular, además darle un diseño bonito ahí es bastante facíl aunque no soy buen diseñador jaja, creo que es el más adecuado, será un bonito proyectito y como hace tiempo que no programo, será un buen ejercicio, que se vea que no me hice pndjo 8 semestres en la carrera jaja, minimo para algo debo de servir. Espero que sepas que es algo especial y respetes esa decisión mía de privacidad porque lo estoy haciendo solo para tí.', 'received');
            break;

        case 28:
            HoraYPensamiento(6,'6:44am - Ya he terminado de escribir, me dormiré otro ratito porque esperarte a qué contestes me hace sobrepensar más, luego recuerdo que te despiertas tarde jaja. Trataré de entretenerme hoy con otras cosas que tengo pendiente y he dejado de hacer además de iniciar con este pequeño proyecto ♥.', 'received');
            break;

        case 29:
            HoraYPensamiento(7,'7:09am - A mimir que la mente es poderosa y si te dejas te puede ganar jaja.', 'received');
            break;

        case 30:
            HoraYPensamiento(8,'8:58am - Justo me desperté hace un par de minutos y me llegó tu mensaje, no sé si es porque estaré sentido o algo pero ese mensaje se sintió un tanto diferente a los últimos y eso me hizo feliz por un instante.', 'received');
            break;

        case 31:
            HoraYPensamiento(8,'En mi siesta soñé contigo, es la segunda vez que lo hago, soñé algo relacionado a que me llegaba unos mensajes tuyos, donde demostrabas esa pasión y amor de antes, ya no recuerdo que es exactamente pero fue lindo, al poco me llegó tu mensaje jaja.', 'received');
            break;

        case 32:
            HoraYPensamiento(10,'10:09am - Empecé el proyecto hace como media hora y no sé que hacer jaja, se supone que es lo más facíl del mundo y simplemente no doy con nada, y a diferencia de otros días no me siento tan decaido, quizás es porque te quiero preguntar si puedo ir a hoy a visitarte al local, pero me da pena ser tan directo. Si voy hoy tendría que mostrarte el proyecto... no sé que hacer jaja. Ayudaaa.', 'received');
            break;

        case 33:
            HoraYPensamiento(10,'10:43am - Ya va agarrando forma este pedo jeje. (El proyecto)', 'received');
            break;

        case 34:
            HoraYPensamiento(11,'11:01am - Te envié un mensaje y esta vez lo contestaste rápido... hasta se me hace raro ya jaja. Gracias ♥.', 'received');
            break;

        case 35:
            HoraYPensamiento(11,'11:05am - No quiero preguntarte si puedo ir jaja, ahhh.', 'received');
            break;

        case 36:
            HoraYPensamiento(12,'12:06am - Acabo de bañarme, revisé el celular y parece que me emocioné demasiado. Tal vez estás ocupada, quizás te desocupes en un par de horas. Siempre que me pasa así recuerdo que yo alguna vez te lo hice, como parte de mi penitencia.', 'received');
            break;

        case 37:
            HoraYPensamiento(12,'Seguiré programando jaja.', 'received');
            break;

        case 38:
            HoraYPensamiento(16,'4:15pm - He tocado fondo y sentí un impulso de valentía, quiero vivir, quiero sentir la felicidad que alguna vez tuve, quiero crecer como persona, quiero llegar a ser padre, quiero llegar a hacer felices a las personas, quiero hacer feliz  y orgullosa a mi madre, quiero hacer que lo nuestro funcione. Y para eso daré un paso adelante, buscaré ayuda y apoyo con alguien en quien sé que puedo confiar, no quiero morir deprimido sin antes haber vivido realmente. Ahora entiendo que no puedo con todo solo, es hora de tragarme mi orgullo.', 'received');
            break;

        case 39:
            HoraYPensamiento(19,'7:48pm - Hoy me ayudó un amigo al que no me molestaría en lo absoluto llamarlo un hermano. Muchas gracias por prestarme un poco de tu tiempo y te pido mis más sinceras disculpas por hacerte ver esta parte de mí, no quiero darte más preocupaciones de lo que ya tienes. Pediré a Dios eternas bendiciones para tí hermano.', 'received');
            break;

        case 40:
            CambiarTemaDeColor(2);
            AgregarBurbujaDeMensaje('Martes, 18', 'sent');
            break;

        case 41:
            HoraYPensamiento(2,'2:15am, En un principio estaba decidido no escribir esto. Ayer por la tarde me llegó un pensamiento que fue el que me hizo tocar fondo, este pensamiento fue diferente al de los demás, sobretodo porque es uno de mis mayores temores pero que en caso de ser cierto asumiré toda y la total culpa, incluso me encargaré de remarcalo con cualquier persona que me pregunte de que yo siempre fuí el responsable de tal acto. \nDespues de sobrepensar algunas cosas, llegué a una conclusión que ya había yo pensado antes pero que ahora por alguna razón me pegó fuerte y sin previo aviso. De acuerdo a todo lo que yo he hecho y no he hecho por tí, todas esas heridas que alguna vez te causé ya sea realizando algo de forma verbal o cosas que alguna vez me pediste de alguna u otra forma y yo jamás hice algo al respecto fueron causando con el tiempo una hemorragia en aquel amor y pasión que tanto te esmeraste en demostrarme, finalmente termiron por matar tu interés en mí. Es duro para mí pensar eso, pero creeme que yo aceptaré más que gustoso tal decisión, pues razones sobran para justificar esa respuesta tuya. Puedo incluso imaginarme cuando te preguntan por mí y la profunda pena que haz de sentir respondiendo sabiendo que ni un solo maldito día te he ido a ver, viendo cómo tú demostrabas ante los demás lo tanto que me quisiste y yo siempre me quedé ahí parado sin hacer nada al respecto. Te he fallado Dani, te he fallado, no solo a tí, si no a mí, mis principios, mis creencias, mi orgullo, quiero que sepas algo que quiero que te quede muy claro y es que no quiero que bajo ni una circunstacia incluso en lo más mínimo te sientas culpable de todo esto que está pasando pues como bien ambos sabemos, yo fuí el responsable principal de acabar terminando esa pasión tuya. Apoyo y estoy totalmente de acuerdo que menciones que en cuando empezaste a ser cortante y distante conmigo yo busqué de forma hipócrita y desesperada tu atención en los últimos días, aquella vergüenza será mi nueva penitencia que llevaré conmigo hasta el final de mis tiempos. Te lo agradeceré de corazón, pues con eso y más cosas me habrás ayudado a saber el tipo de persona que soy realmente y que sin tu ayuda jamás me hubiese dado cuenta. \nFinalmente despues de más de un mes de malas experiencias y desiluciones que te causé y cómo el más máximo acto de amor que yo te puedo otorgar, te libero de mí. Solo te pediré que no dejes las buenas costumbres que formaste conmigo como tomar más agua, tratar de hacer otras cosas diferentes a las que ya haces y querer mejorar en la cocina, no sé si esto último lo has hecho pero espero que aún lo tengas en mente, te puedo asegurar que tu futura pareja de vida le encantará ese detalle jaja. Siempre quise saber más de tí para ver en qué más te podría ayudar y apoyar, pero por más que lo intenté jamás ví un avance, tal vez lo hice mal o por mis acciones no conseguí esa confianza, no lo sé. Solo te puedo asegurar que eres una persona muy bella mucho más allá de lo físico, lás palabras me sobran para describir esa belleza, tanto que ya ni puedo pensar en cómo empezaría. En este instánte solo puedo pensar en esa risita que tanto me encantó, ahora la recordaré con mucha tristeza sabiendo que yo mismo me la arrebaté. Solo deseo que la persona con quien estés en un futuro le demuestres de forma pura y sincera el mismo interés y pasión que demostraste conmigo y él te responda de la misma forma, no quiero haberte creado esa inseguridad al querer mostrar tus sentimientos, jamás me lo perdonaría.', 'received');
            break;

        case 42:
            HoraYPensamiento(3,'3:57am - Hoy iré a tu negocio y trataré de aclarar las cosas entre ambos para ya terminar este sufrimiento que he causado desde el inicio de lo nuestro. Aceptaré cualquier destino.', 'received');
            break;

        case 43:
            HoraYPensamiento(15,'3:03pm - Ta cerrado, quedé 🤡.', 'received');
            break;

        case 44:
            HoraYPensamiento(20,'8:09pm - Cómo resumen de todo lo que he hecho este día... Generalmente no soy una persona que haga muchas cosas interesantes en su día a día, sin embargo hoy por más que traté de distraerme, de no pensar en tí, no pude, incluso con las cosas que se supone me gusta hacer, no funcionó, ahora las palabras \'no puedo dejar de pensar en tí\' no las podré ver con la simpleza con la que solía verlas.', 'received');
            break;

        case 45:
            HoraYPensamiento(20,'8:20pm - Te he enviado un mensaje simple... uno que incluso con su simpleza demuestra tanto, sé que lo sabes. Me aterra saber como contestarás, si con el mismo sentimiento, o con cierta indiferencia... No te molestaré hasta el viernes, mi corazón ya no dá más para fingir que estoy bien, recurriré un poco a mi orgullo para cumplir esto.', 'received');
            break;

        case 46:
            HoraYPensamiento(20,'8:25pm - Me mata la tristeza como una vez solo lo hizo en mi vida.', 'received');
            break;

        case 47:
            HoraYPensamiento(20,'8:35pm - En verdad siento que he matado esa pobre personita que tanto me encantó, siento que hablo con alguien a quien nunca conocí. Está semana ha sido tan dificíl que parece eterna, es injusto porque el tiempo que pasé a tu lado fue tan rápido. De qué sirve quejarme?, la vida siempre ha sido tan injusta.', 'received');
            break;

        case 48:
            HoraYPensamiento(20,'8:38pm - Realmente yo te traté así?, ya ni siquiera me considero digno de estár frente en tí. Escucharé la playlist que te he hecho para soltarme un poco.', 'received');
            break;

        case 49:
            HoraYPensamiento(20,'8:41pm - Te extraño tanto.', 'received');
            break;

        case 50:
            HoraYPensamiento(20,'8:42pm - Extraño tus ojos.', 'received');
            break;

        case 51:
            HoraYPensamiento(20,'8:43pm - Extraño tus cachetes.', 'received');
            break;

        case 52:
            HoraYPensamiento(20,'8:44pm - Extraño tus labios.', 'received');
            break;

        case 53:
            HoraYPensamiento(20,'8:45pm - Extraño tu felicidad.', 'received');
            break;

        case 54:
            HoraYPensamiento(20,'8:46pm - Extraño tus celos.', 'received');
            break;

        case 55:
            HoraYPensamiento(20, '8:47pm - Extraño que me \"molestes\".', 'received');
            break;

        case 56:
            HoraYPensamiento(20,'8:48pm - Extraño acariciar tu pelo.', 'received');
            break;

        case 57:
            HoraYPensamiento(20,'8:49pm - Extraño tu risa.', 'received');
            break;

        case 58:
            HoraYPensamiento(20,'8:52pm - Seguiré con la página.', 'received');
            break;

        case 59:
            HoraYPensamiento(20,'8:57pm - Cómo me mata tu ausencia.', 'received');
            break;

        case 60:
            HoraYPensamiento(22,'10:38pm - Escribir me ha relajado mucho, me devolvió un poco de valor y seguridad, sé que es momentáneo pero la aprovecharé. He decidido que hasta el viernes en la noche será cuando te envíe este mensaje y por lo pronto no te estaré escribiendo nada debido a que de verdad mi corazón ya no me dá más para fingir que estoy bien, procuraré expresar todo en este mensaje y tratar de que el proyecto esté listo para ese día. Espero que me envíes otro mensaje para hacertelo saber y si realmente aún me quieres, no preocuparte por mi ausencia. Te quiero y te extraño mucho. Besillos en ya sabe donde ♥.', 'received');
            break;

        case 61:
            HoraYPensamiento(23,'11:34pm - Seguiré mañana, quisiera seguir por más tiempo pero ya no me puedo desvelar como antes jaja. Hoy trataré de dormir tranquilo y sin preocupaciones.', 'received');
            break;

        case 62:
            HoraYPensamiento(23,'11:46pm - Sonó La Vie En Rose [https://youtu.be/Egyg8wN6NH0?si=ovUvN3LexhBYqtWL] y me provocó el mismo sentimiento que la primera vez que te la mostré ♥.', 'received');
            break;

        case 63:
            CambiarTemaDeColor(8);
            AgregarBurbujaDeMensaje('Miércoles, 19', 'sent');
            break;

        case 64:
            HoraYPensamiento(8,'8:24am - Me levanté aproximadamente a las 7 hoy, nuevamente revisé el celular, realmente esperaba un mensaje tuyo, incluso en lo más simple para notificarte sobre mi desición pero creo que esperaré. Temo que no me envíes ni uno solo ya, eso me daría a entender que definitivamente maté tu interés en mí. También es muy temprano como para escribir esto y puede que envies uno más tarde, no quito esto porque hacerlo sería ocultar mis sentimientos y eso no es el objetivo de esta bitácora. Quisiera saber qué es lo que piensas para poder ayudarte y entenderte. Las ganas de desearte un buenos días me mata, pero quiero que seas tú esta vez quien me regale un mensaje primero.', 'received');
            break;

        case 65:
            HoraYPensamiento(8,'Te quiero mucho.', 'received');
            break;

        case 66:
            HoraYPensamiento(10,'10:32am - Gracias ♥.', 'received');
            break;

        case 67:
            HoraYPensamiento(11,'11:52am - Finalmente te pude notificar sobre mi decisión, espero que lo entiendas. Solo deseo que no te preocupes hasta ese día y estés tranquila.', 'received');
            break;

        case 68:
            HoraYPensamiento(13,'1:17pm - Suena Hey [https://www.youtube.com/watch?v=ioUdxh9XyeI], me llegó al alma esas palabras, espero que estés bien cariño.', 'received');
            break;

        case 69:
            HoraYPensamiento(17,'5:20pm - Extraño tus mensajes tan llenos de pasión.', 'received');
            break;

        case 70:
            HoraYPensamiento(17,'5:30pm - Luché por un momento con mi mente sobre una desición, ésta vez gané jaja. Ésta decisión y meta es una de la más difíciles a nivel personal y en la cual requeriré de mucha ayuda si la quiero cumplir, para cumplirla requeriré constancia, disciplina, confianza, optimismo, realismo, apoyo y sobretodo, comprensión. Si no te molesta, quiero que seas parte de esa ayuda, mientras estés cerca ya sea de forma fisica o emocionalmente independientemente de si me ayudas mucho o poco, yo te ofreceré  mi apoyo total e incondicional con lo que necesites, siempre y cuando me dejes saber de manera clara cuales son tus necesidades y preocupaciones.', 'received');
            break;

        case 71:
            HoraYPensamiento(17,'Yo en lo personal siempre he tenido miedo de decir mis metas a otras personas porque en algún lado he escuchado y visto que decirlas te induce como a no cumplirlas, por alguna razón te la estoy mencionando. Te daré esa confianza, no quiero que me veas perder, así que me esforzaré más allá de mis capacidades.', 'received');
            break;

        case 72:
            HoraYPensamiento(18,'6:54pm - Has subido un estado y no sé que será, me mata la curiosidad jaja. No lo quiero ver porque temo que sea algo relacionado a lo que estoy escribiendo y pienses que escribí eso por verlo, suena estúpido pero pues así soy yo y mi mente jaja. En verdad espero que estés bien pequeñita, ya sea en cualquier aspecto, con tu familia, contigo misma... con nosotros, aunque de este último dudo y más con lo que te dije, yo también estaría preocupado... Por favor esperame mi vida, todavía me falta terminar de expresarme lo más que pueda en este mensaje.', 'received');
            break;

        case 73:
            HoraYPensamiento(20,'8:56pm - Cómo habrá sido tu día?, aburrido tal vez es lo que me dirías, yo te contestaría que trataras de hacer algo aparte pero sé que no lo harías jaja. Tambien te preguntaría cómo sigue tu mamá?, espero que muy bien, cuidala mucho, recuerdo cuando una vez me mencionaste que te peleaste con ella, y yo te dije que no hicieras eso, que te reconciliaras con ella en cuando pudieras. Poco despues surgió esa mala noticia y pasaste unas malas semanas, realmente sentí tu tristeza y desesperación, me alegra mucho que te haya podido sacar una sonrisita en medio de todo eso. "Aprecia mucho las cosas que tienes, nunca sabes cuando será la última vez que lo tengas" Ahora yo estoy viviento ese arrepentimiento con tu ausencia. Porfavor jamás te sientas sola, hay muchas personas a las que les importas, cuidalas mucho. Yo deseo que jamás en tu vida o alguien cercano a tí experimente bajo ninguna circunstancia la sensación de sentirse solo y abandonado cuando más lo necesitas, es una experiencia que si no la sobrellevas bien puedes causar tu última mala decisión.', 'received');
            break;

        case 74:
            HoraYPensamiento(22,'10:41pm - Qué bonitos recuerdos me trae escribir esto, me parte tanto el corazón haber sido así contigo, me pregunto como serían las cosas si estuviera bien mentalmente, tristemente eso es solo algo que se solo se quedará en el hubiera.', 'received');
            break;

        case 75:
            CambiarTemaDeColor(1);
            AgregarBurbujaDeMensaje('Jueves, 20', 'sent');
            break;

        case 76:
            HoraYPensamiento(1,'12:43am - Esta vez si he podido escribir mucho jaja, pero ya me ganó el sueño. No te lo puedo decir por mi promesa, pero, descansa, te quiero.', 'received');
            break;

        case 77:
            HoraYPensamiento(6,'6:43am - Buenos días mi vida, espero que todo esté bien y si no, pronto lo estará, no te preocupes. Es mi mensaje de hoy. Junto con un bonito reel, cada vez me cuesta encontrar uno bonito, todos son de desamor. Ya no encuentro como en el principio que abundaban.', 'received');
            break;

        case 78:
            HoraYPensamiento(13,'1:31pm - Puedo ver un ramo de flores en tu estado, me pregunto de quien será?, solo se me viene a la mente cosas que no debería, pero al final de cuenta tú querías mis celos jaja... Creo que estos son enfermisos, me pregunto si en realidad querrías estar con una persona así?. De cualquier forma esperaré a tu respuesta. Yo aceptaré tu decisión, porfavor piensalo muy bien, solo me interesa lo que creas adecuado para tí.', 'received');
            break;

        case 79:
            HoraYPensamiento(13,'Hablando de celos, cuales serán los que según tú yo te hice?, siempre se me quedó la duda en cuando me lo dijiste jaja, por más que analicé no doy con ni una pista, según yo no he hecho nada malo o al menos no con esa intensión.', 'received');
            break;

        case 80:
            HoraYPensamiento(13,'1:57pm - Extraño esos momentos tan agradables que me hacias sentir con tus mensajes, realmente un mensaje tuyo me hacía sentirte cerca de mí, justo cómo tú alguna vez me lo dijiste. Lamento no haberme dado cuenta de eso, cada vez te entiendo más.', 'received');
            break;

        case 81:
            HoraYPensamiento(14,'2:01pm - Jamás me sentí merecedor de todo ese amor que me dabas, pero aún así te agradezco de corazón haberme mostrado todo ese cariño. Por más que intenté estos días, no pude llenar este vació que me dejó tu ausencia. Es increible como te sigo pensando tanto aún cuando se supone estoy tratando de distraerme. Solo te puedo decir que mi corazón ya no podía seguir finjiendote que estaba bien, era un dolor que me quebraba el alma.', 'received');
            break;

        case 82:
            HoraYPensamiento(15,'3:23pm - Parece que se me presenta una oportunidad, esta vez no he dudado en tomarla.', 'received');
            break;

        case 83:
            CambiarTemaDeColor(1);
            AgregarBurbujaDeMensaje('Viernes, 21', 'sent');
            break;

        case 84:
            HoraYPensamiento(1,'12:43am - Qué madre iba a escribir?, ya se me olvidó jaja.', 'received');
            break;

        case 85:
            HoraYPensamiento(1,'12:48am - Me alegró haberte visto un rato, tal vez no fue el mejor momento para visitarte, espero que pueda verte sin preocupaciones otra vez. Extrañé tanto esos ojitos con ojeras, esos cachetitos y esa narisita, no te lo dije pero estábas tan linda cómo la última vez que te ví. Aún que no pude escuchar esa risita tuya. Tal vez no hicimos lo que habiamos quedado en hacer al vernos pero entiendo la situación en la que estabas y yo tampoco estaba muy bien mentalmente.', 'received');
            break;

        case 86:
            HoraYPensamiento(1,'También me gustaría saber sobre aquello que me dijiste del psicólogo, será grave?, hay algo en que pueda ayudarte?, bueno, será hasta que me quieras contar más al respecto.', 'received');
            break;

        case 87:
            HoraYPensamiento(1,'1:03am - Me pregunto si realmente te gustaría leer esto?, es muy largo así que... Bueno, de todas formas me sirve para desahogarme jaja.', 'received');
            break;

        case 88:
            HoraYPensamiento(12,'12:45pm - Estaba pensando y espero que no llueva tanto en la noche, o no podré grabar bien el mensaje. Ando pensando en grabarlo orita en la tarde y reenviartelo, pero no es la idea, aparte me dá pena que mi mamá me escuche jaja. Bueno, tengo que apresurarme a escribir que todavía no está listo.', 'received');
            break;

        case 89:
            HoraYPensamiento(13,'1:21pm - Qué estarás haciendo cosita?, te la estarás pasando bien?, estarás aburrida seguramente, pongase a estudiar jaja. Le voy a decir al profe Armando que te meta en proyectos pa que te acostumbres.', 'received');
            break;

        case 90:
            HoraYPensamiento(21,'9:06pm - Heart to heart, simplemente adecuada para este tipo de momentos.', 'received');
            break;

        case 91:
            AgregarBurbujaDeMensaje('FIN', 'sent');
            break;

        case 92:
            AgregarBurbujaDeMensaje('Martes, 25', 'sent');
            break;

        case 93:
            HoraYPensamiento(21,'Sé que no leerás esto pero...', 'received');
            break;

        case 93:
            HoraYPensamiento(21,'Cada vez que escucho Sabor a Mí la letra me recuerda mucho a tí', 'received');
            break;

        case 94:
            HoraYPensamiento(21,'Olvidé decirtelo en mensaje pero, si tienes algo que decirme, ya sea bueno o malo, no importa lo que sea realmente, ya sabes dónde comunicarte conmigo. Te esperaré hasta que te mejores, me encantaría ayudarte y apoyarte para que no te sientas sola pero parece que lo mejor que puedo hacer por ahora es apartarme.', 'received');
            break;

        case 95:
            HoraYPensamiento(21,'TE AMO ♥', 'received');
            break;

        default:
            break;
    }
    
    ContadorBitacora++;

}

// cambiarEstadoBitacora();