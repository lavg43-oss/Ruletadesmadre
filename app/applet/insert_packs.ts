import fs from 'fs';

const d_confiesa = [
    "Confiesa: ¿Alguna vez has arruinado un evento a propósito porque no querías ir?",
    "Confiesa: ¿A quién de aquí empujarías de un puente si no hubieran consecuencias legales?",
    "Confiesa: ¿Cuál es el objeto más asqueroso que has lamido por apuesta?",
    "Confiesa: ¿Alguna vez te has orinado en una piscina pública siendo ya adulto?",
    "Confiesa: ¿A quién de este círculo le dirías sus verdades sin censura?",
    "Confiesa: ¿Cuál ha sido la peor mentira que inventaste para sacarle dinero a alguien?",
    "Confiesa: ¿Qué has hecho tan ilegal que si lo supieran ya no estarías aquí?",
    "Confiesa: ¿Alguna vez has hecho el ridículo de forma catastrófica estando sobrio?",
    "Confiesa: ¿Cuál de los presentes crees que sea una mala influencia para ti?",
    "Confiesa: ¿Alguna vez has fingido dolor físico para escapar de una cita?",
    "Confiesa: ¿Qué es lo más caro que has dañado sin hacerte responsable?",
    "Confiesa: ¿Has robado algo en una tienda solo por la adrenalina?",
    "Confiesa: ¿A quién envidias en secreto por su suerte o éxito?",
    "Confiesa: ¿Alguna vez provocaste una pelea entre dos personas solo por diversion?",
    "Confiesa: ¿Cuál es el hábito más desagradable que escondes al salir de tu casa?",
    "Confiesa: ¿Cuándo fue la última vez que fuiste un completo hipócrita?",
    "Confiesa: ¿Has escupido en la bebida o comida de alguien por venganza?"
];

const d_sit = [
    "Situación Límite: Come algo del piso o traga toda tu bebida de fondo.",
    "Situación Límite: Llama a la última persona de tus contactos y grita.",
    "Situación Límite: Envía 'Tengo que confesarte algo grave que hice...' a tu mamá.",
    "Situación Límite: Déjate pintar la frente con un marcador o tomate 3 tragos extra.",
    "Situación Límite: Muele comida y póntela en la cabeza, o toma 4 shots.",
    "Situación Límite: Intercambia una prenda de ropa de la parte superior con alguien de la mesa.",
    "Situación Límite: Rompe un huevo crudo en tu cabello o paga la cuenta de todos.",
    "Situación Límite: Pon tu celular desbloqueado al centro por 10 minutos para el que quiera husmear.",
    "Situación Límite: Toma agua de la llave, o tomate la bebida más fuerte de la casa.",
    "Situación Límite: Grita a todo pulmón por la ventana diciendo algún secreto incómodo tuyo.",
    "Situación Límite: Toma un trago de una mezcla hecha por todo el grupo.",
    "Situación Límite: Pídele perdón de rodillas a quien tienes enfrente simulando llorar.",
    "Situación Límite: Grábate bailando ridículamente por 30s y súbelo a tus estados de IG.",
    "Situación Límite: Dale un cachetadón leve al más alto de la mesa o cumple castigo el doble.",
    "Situación Límite: Haz 15 lagartijas; si fallas y te cansas, bebida fondo.",
    "Situación Límite: Olfatea las axilas del de tu izquierda y descríbelo poéticamente.",
    "Situación Límite: Llama a un servicio de emergencia e inventa una excusa loca y cuelga de inmediato."
];

const d_dil = [
    "El Dilema: ¿Morder una cebolla cruda o comer una cucharada de mantequilla caducada?",
    "El Dilema: ¿Besar el zapato de alguien de la mesa o darle tu celular al grupo por 5 minutos?",
    "El Dilema: ¿Correr en ropa interior en una carretera o lamer la pata de la silla del bar?",
    "El Dilema: ¿Vender un secreto sucio de tu amigo o tomar 5 shots de tequila tibio?",
    "El Dilema: ¿Oler a basura una semana sin bañarte u oler el aliento mañanero de la persona a tu lado?",
    "El Dilema: ¿Robar un banco pero perder tu memoria al salir, o vivir siempre sin dinero?",
    "El Dilema: ¿Perder todo tu dinero y estatus, o perder a tus 5 mejores amigos pero ser millonario?",
    "El Dilema: ¿Saber la fecha exacta de tu muerte o saber un día antes el número de lotería pero sin poder cobrarlo?",
    "El Dilema: ¿Que todos puedan leer tu mente o perder la capacidad de decir mentiras jamás?",
    "El Dilema: ¿Tomar un vaso de vinagre blanco de un jalón o comer un huevo crudo con cáscara?",
    "El Dilema: ¿Eructar súper fuerte en cada entrevista de trabajo o reír descontroladamente en funerales?",
    "El Dilema: ¿Estar encerrado 5 años en un cubo en soledad, o un año con la persona más tóxica que conoces?",
    "El Dilema: ¿Comer comida previamente masticada de alguien o comer comida del mes pasado?",
    "El Dilema: ¿Mentir compulsivamente todos los días o solo poder decir verdades hirientes el resto de tu vida?",
    "El Dilema: ¿Masticar hielo muy duro sintiendo escalofríos, o tomar café hirviendo hasta quemarte un poco?",
    "El Dilema: ¿Andar rapado(a) completamente el resto de tu vida, o tener el corte de pelo de Dora la Exploradora?",
    "El Dilema: ¿Beber 3 litros de agua estancada o un galón de agua del mar sin purificar?"
];

const d_nom = [
    "El Nominado: ¿Quién de esta mesa podría asesinar por dinero si las cifras fueran altísimas?",
    "El Nominado: ¿Quién tiene más cara de ser un estafador y engañar a ancianos por internet?",
    "El Nominado: ¿A quién le confiarías tu vida en un escape de prisión extrema?",
    "El Nominado: ¿De quién sospechas fuertemente que esconde una doble vida o que es narco?",
    "El Nominado: ¿Quién luce como que arruinaría tu vida en una noche de copas desenfrenada?",
    "El Nominado: ¿Quién del grupo seguro sería el primero en morir mordido por un zombie?",
    "El Nominado: ¿Quién aquí sería tan codicioso como para fingir su muerte para cobrar el seguro?",
    "El Nominado: ¿Quién es el más bocon del grupo y el que nunca guarda secretos?",
    "El Nominado: ¿Quién embriagaría a un menor de edad pensando que es chistoso?",
    "El Nominado: ¿A quién del grupo consideras como el peor chofer que podría estrellarse?",
    "El Nominado: ¿Quién daría los consejos financieros o empresariales más estúpidos posibles?",
    "El Nominado: ¿A quién se le podría encadenar a una silla sin que nadie lo notara que falta?",
    "El Nominado: ¿Quién se gasta su quincena en apuestas y estupideces innecesarias?",
    "El Nominado: ¿A quién mandarías directamente a un asilo desde ahorita?",
    "El Nominado: ¿Quién se enoja de manera muy infantil cuando no le hacen caso?",
    "El Nominado: ¿Quién es capaz de robarse los sobres de salsa en el restaurante de lujo?",
    "El Nominado: ¿A quién usarías cobardemente de escudo humano si hubiera un atraco aquí mismo?"
];

const d_grup = [
    "Ronda Grupal: El que se ría de último de un chiste del comediante que quieran elegir, toma.",
    "Ronda Grupal: Yo nunca nunca me he pelado a golpes en plena fiesta y corrido de la policía.",
    "Ronda Grupal: Cuenten todos algún delito sin sentido de adolescencia. Quien tenga el más patético, bebe.",
    "Ronda Grupal: Jueguen al semáforo de ofensas. Insúltense creativamente 10 segundos mutuamente.",
    "Ronda Grupal: Quien tenga menos dinero y saldo bancario en la mesa se la tiene que curar e invitar shots.",
    "Ronda Grupal: ¿A quién del grupo aventarían de carnada si los osos nos invadieran? Todos decidan.",
    "Ronda Grupal: Manos arriba! El último que toque el suelo con ambas manos, bebe triple.",
    "Ronda Grupal: Digan leyes que de puro milagro no han roto.",
    "Ronda Grupal: Yo nunca nunca he estado tan destruido/a que amanecí en otra ciudad u otro lado sin memoria.",
    "Ronda Grupal: Nombren métodos de destrucción masiva. El que diga una bomba ridícula, toma dobles.",
    "Ronda Grupal: Beban todos los que alguna vez se saltaron la barda o reja escapando a media noche.",
    "Ronda Grupal: Todos al centro con su bebida, huelan su trago, y cuenten una anécdota perturbadora breve.",
    "Ronda Grupal: Hagan caras de terror extremo por 5s. El primero en reír es castigado con 3 tragos de shot seco.",
    "Ronda Grupal: Digan cuál es el apodo más tóxico o denigrante que tenían en su infancia, y ríanse o beban.",
    "Ronda Grupal: Simulacro callejero de pelea de 10s uno al lado del otro. El menos ridículo castigado.",
    "Ronda Grupal: Jueguen una broma pesada al unísono: llamen a un Uber, lloren diciendo que los siguen, luego cancelen.",
    "Ronda Grupal: Quien no mezcle por lo menos tres gotas de sus tragos con el vecino a la izquierda, será abucheado y penalizado."
];

const d_com = [
    "Comodín Desmadre: Obliga a 2 personas a simular una pelea a cachetadas lentas por 1 minuto.",
    "Comodín Anarquía Total: Levántate y grita: Tomen todos, sin preguntar.",
    "Comodín Decomiso: Toma el celular de alguien y úsalo de posavasos esta ronda entera.",
    "Comodín Humillante: Recibe bullying colectivo constructivo por 30 segundos aguantando.",
    "Comodín Siervo: El jugador de enfrente tiene que preparar toda tu bebida y tratar de adivinar tus gustos de hoy.",
    "Comodín Apuesta Mortal: Te apuestas con alguien un shot a piedra papel y tijera de una sola ronda brutal.",
    "Comodín Asusta Viejitas: Grita con pavor y escandalosamente a media calle o sal de la casa para espantar a alguien.",
    "Comodín Ruleta Rusa de Mezclas: Preparamos 3 vasos, 1 agua, 2 de alcohol duro con chile. Elige al azar.",
    "Comodín Interrogatorio rudo: Opcion 1 responde algo sumamente grosero, opcion 2 te humillan grabándote bebiendo.",
    "Comodín Extremo: Gira sobre tu propio eje 10 veces intentando bailar en un pie.",
    "Comodín Rey Borracho: Da un mandato absurdo que durará todo el juego hasta nuevo rey.",
    "Comodín Inmunidad Brutal: Escudas tu cuerpo de cualquier mal, ignoras a los demás jugadores y te llevas 0 castigos hoy.",
    "Comodín Lágrimas Tontas: Finge un llanto hiper dramático por algo tonto; el grupo dicta penalización si suena falso.",
    "Comodín Terror: Apaga todas las luces por un minuto. Todos quedan en total silencio y suspenso.",
    "Comodín Expulsión Temporal: Decides destierrar de la mesa al que más detestas por 10 minutos (se va a otra habitación).",
    "Comodín Karma Letal: Pídele a quien te caiga mal un reto asqueroso. Si se anima, ambos beben pero sufres.",
    "Comodín Mimo Agresivo: Te prohíben la palabra; sólo hablarás pateando o tirando vasos sutilmente esta ronda."
];

const p_conf = [
    "Confiesa: ¿Qué persona famosa te haría botar a tu pareja sin pensar ni dudar?",
    "Confiesa: ¿Le tienes más celos a alguien en específico de su trabajo?",
    "Confiesa: ¿Conoces el porcentaje exacto de peleas secretas que tienen cuando nadie ve?",
    "Confiesa: ¿Cuál foto en internet de un(a) ex viste y sentiste curiosidad la última vez?",
    "Confiesa: ¿Has revisado si se encuentra 'En Línea' muy a menudo por desconfianza?",
    "Confiesa: ¿Qué de su familia verdaderamente detestas o simplemente toleras?",
    "Confiesa: ¿Sentiste ganas alguna vez de terminar la relación al principio?",
    "Confiesa: ¿Quién es el que comanda el orden de los celos más absurdos en su núcleo?",
    "Confiesa: ¿Has pensado a la pareja de tu mejor amigo(a) de otro modo dudoso?",
    "Confiesa: ¿Hiciste algún drama extremo sin motivo sabiendo en el fondo que estabas mal?",
    "Confiesa: ¿Quién crees que se viste fatal pero te guardas el secreto?",
    "Confiesa: ¿Qué defecto te incomoda más en tu vida íntima con tu pareja actual?",
    "Confiesa: ¿Si tuvieras permiso de pase libre emocional a quién preferirías conocer?",
    "Confiesa: ¿Cuál es esa amistad suya que bloquearías con gusto si pudieras controlar su teléfono?",
    "Confiesa: ¿Has mentido de gastarte tus ahorros completos en algún gusto indebido?",
    "Confiesa: ¿En quién sueles desahogarte realmente después de las crisis juntos?",
    "Confiesa: ¿Recuerdas en qué fecha de la relación pensabas de verdad estar ciego/a por amor?"
];

const p_sit = [
     "Situación Tensa: Muéstrale a tu pareja todos los mensajes archivados que tengas en IG.",
     "Situación Tensa: Pongan en altavoz y marquen a esos ex donde terminaron siendo amigos pacíficos.",
     "Situación Tensa: Que tu pareja describa físicamente lo menos atractivo tuyo de frente.",
     "Situación Tensa: Critíquen algo superficial el uno del otro enfrente de toda la mesa.",
     "Situación Tensa: Dile frente a todos un berrinche ridículo por el cual perdiste el control totalmente ciego.",
     "Situación Tensa: El que tenga tatuado el mismo día de la fecha toma, o si no beben para compensar.",
     "Situación Tensa: Toma las muñecas a tu pareja y pon una expresión de furia incontrolable.",
     "Situación Tensa: Intercambien prendas pequeñas por el resto del día de juegos.",
     "Situación Tensa: Cuenta tu historia de mayor ridículo queriendo disculparte.",
     "Situación Tensa: Acérquense la cuchara de comida rápido. Si se asustan son culpables emocionales.",
     "Situación Tensa: Enséñales a todos el chat más patético de reclamos que protagonizaste.",
     "Situación Tensa: Vende las peores mañas de tu pareja a los invitados. O recíbela doble castigado.",
     "Situación Tensa: Que den retroalimentación estricta al que mejor finje estar bien o feliz.",
     "Situación Tensa: Lanza una crítica constructiva pasiva o agresiva.",
     "Situación Tensa: Échate tú la culpa de arruinar el año en algo.",
     "Situación Tensa: Enseña a qué nombre tenías antes planeado archivar, o di cómo mientes.",
     "Situación Tensa: Pongan cara de asco cada que se hablen románticamente."
];

const p_dil = [
     "El Dilema: ¿Estar con suegra tóxica que te controle todo o vivir encerrados cuidando 5 bebés llorones?",
     "El Dilema: ¿Que tu pareja gane doble pero no lo veas nunca o sin dinero y estar juntos todos los santos días?",
     "El Dilema: ¿Saber detalladamente el por qué fue infiel (aunque nunca se vaya), o no saber a ciencia cierta?",
     "El Dilema: ¿Tu novio/a ganando mil seguidores de coqueteos o perdiendo su trabajo pero ganando lealtad ciega?",
     "El Dilema: ¿Retomar relación con la primera pasión intensa destructora o seguir monótono eterno y tranquilo?",
     "El Dilema: ¿Confesar secreto horrible que quebranta pero dice verdad o guardarlo en mentira dorada perfecta?",
     "El Dilema: ¿Descubrir un ex loco acosando bajo cama o que las exs tuyas hablen horrores con sus amigos actuales?",
     "El Dilema: ¿Un beso asquerosísimo matutino siempre o la obligación de regalar joyas imposibles?",
     "El Dilema: ¿Salir de fiestas cada noche contra de voluntades o vivir encerrado rezando contra tu voluntad?",
     "El Dilema: ¿Un mes de pura paz aburrida mortificadora u once meses de peleas locas dramáticas de show?",
     "El Dilema: ¿Ocultarle la peor mentira dolorosa de traición moral, o exponerte humillado siendo leal al final?",
     "El Dilema: ¿Vivir entre chismosos suegros interviniendo 24/7 o vivir bajo la selva salvaje incomunicados?",
     "El Dilema: ¿Perdonar la mentira y vengarte igual, o la verdad perversa de la crueldad inocente por ingenuidad?",
     "El Dilema: ¿Novio que canta desafinado llorando gimiendo horrores, o novio mudo insensible cruel?",
     "El Dilema: ¿Que sus ex celosos locos sigan enviando cartas maníacas o tener familiares acosadores odiosos?",
     "El Dilema: ¿Celos nivel enfermizo perjudiciales cada día festivo o desapego tipo piedra donde no hay amor verbal?",
     "El Dilema: ¿Un viaje solo con un ex a isla de placer con confianza, o amarrados con soga ambos dos sin separarse?"
];

const p_nom = [
     "El Nominado de Parejas: ¿Cuál de las presentes creen que estallaría primero y le destruiría el coche al otro?",
     "El Nominado de Parejas: ¿Quién tiene el historial romántico más vergonzoso en su juventud?",
     "El Nominado de Parejas: ¿A qué novia la consideraría la más diva inalcanzable de mentiritas?",
     "El Nominado de Parejas: ¿Quién se viste para provocar celos intensos los domingos por la mañana?",
     "El Nominado de Parejas: ¿Quién fue el traidor emocional indirecto más cruel la semana de estrés?",
     "El Nominado de Parejas: ¿Qué pareja haría peor pareja si sus respectivos suegros mandaran la ley?",
     "El Nominado de Parejas: ¿Quién vigila las contraseñas, cámaras y celulares del departamento obsesionado(a)?",
     "El Nominado de Parejas: ¿De quién la familia dudaría menos en regañar públicamente sin vergüenzas?",
     "El Nominado de Parejas: ¿Quién cuenta los relatos de amor más falsos manipuladores al grupo?",
     "El Nominado de Parejas: ¿Quién llora histéricamente usando tácticas victimizantes en cada pequeña discusión?",
     "El Nominado de Parejas: ¿A qué pareja envidian menos y critican por tóxicos cuando nadie escucha?",
     "El Nominado de Parejas: ¿A quién botarían al caño con más facilidad el primer resbalón de la cuenta bancaria?",
     "El Nominado de Parejas: ¿De quién creen seriamente sus infidelidades invisibles pero lo esconden de verdad?",
     "El Nominado de Parejas: ¿Qué novio rompe la ley y de pronto te arruinaría tu prestigio familiar?",
     "El Nominado de Parejas: ¿Quién hace escenitas en el súper pero luego niega tener coraje en público?",
     "El Nominado de Parejas: ¿A quién delatarían sus propios amigos si este lo estorbara el domingo por amor?",
     "El Nominado de Parejas: ¿Quién tiene la lista de caprichos más carísima, destructiva de deudas del cuarto?"
];

const p_grup = [
     "Ronda Grupal Cero Engaños: Decidan cuál pareja debería abrir su relación el mes entrante a locuras extremas.",
     "Ronda Grupal de Pánico: Todas las parejas se acusan frente al grupo sin gritar por los desastres pasados del viernes.",
     "Ronda Grupal Juicio Final: Los varones señalan y las chicas deben tomar castigos de amonestaciones públicas por chismes.",
     "Ronda Grupal Crueldad Íntima: Voten todos con la verdad; este de aquí se viste fatal o muy atractivo/a. Toman castigos.",
     "Ronda Grupal Yo Nunca: El que nunca ha dudado en buscar otra pareja de reemplazo o un segundo frente a escondidas, calla.",
     "Ronda Grupal Divorcio Simulado: Todos se quitan la sortija (o se sueltan), y explican las causas con acento sureño aburrido.",
     "Ronda Grupal Celosos: El primero en revisar la última conexión, todos le disparan un reto de tomar dobles castigos por paranoicos.",
     "Ronda Grupal Chismes y Maldades: ¿A quién odias secretamente del pasado reciente de tu novio/a, expónlo para la burla mesa.",
     "Ronda Grupal Muerte Sentimental: Enseña cada pareja algo que su ex novio/a pasado les regalo la navidad que pasó sin decir antes.",
     "Ronda Grupal Pánico Verbal: Miren cómo te enojas por una tontería infantil de celos innegables frente el grupo.",
     "Ronda Grupal Toxicos A Mano Alza: ¿Quién prohíbe ir a fiestas nocturnas del viernes de manera manipuladora? Rían tomando fuerte.",
     "Ronda Grupal Celular Abierto: Mandarás mensajes a tu pareja en tono enojado y leerás luego si te ignoró, lo sabremos nosotros.",
     "Ronda Grupal Ruptura y Rezagos: Expón qué secreto del cuarto crees que la otra pareja tiene sobre infidelidades pero nadie habla esto.",
     "Ronda Grupal Petición Ridícula: Demostrar lo ridículo que tu amado actuó gritando o pidiendo un gran favor tonto hace tiempos.",
     "Ronda Grupal Decepciones y Lamentos: Levanten un brindis los mentirosos del grupo. Rían o disparen todos juntos de pura frustración.",
     "Ronda Grupal Críticos Extremos: Si la pareja gasta de más se somete al escarmio financiero de burla sin descanso por 2 minutos.",
     "Ronda Grupal Burlas Ocultas: Búrlate indirecta o sutilmente de los peores regaños escuchados por amor tonto irracional de anoche."
];

const p_com = [
     "Comodín Veneno Amoroso: Dile la amenaza de broma que le asustó o haz saltos frente al círculo sin miedo o pena vergonzosa externa.",
     "Comodín Trampa de Celos: Cuentas cómo atrapaste o revisarías una falsedad muy de telenovela por parte suya alguna noche perdida.",
     "Comodín Tensión Extrema: Tu novio(a) es castigado hoy a sufrir el reto horrible del chupito y castigo de la última ronda picante ruda.",
     "Comodín Cruel Venganza Puesta: Has algo sumamente cruel indirectamente. Dictas su descalificación al ridículo de la historia por hoy mismo.",
     "Comodín Revelador Suicidio: Confiesa las excusas malas de engaños del pasado para faltar las citas amorosas pesadas del domingo aburridísimo.",
     "Comodín Castigador Máximo Íntimo: Ordenas la penitencia o doble castigo de beber en la rodilla sin moverse el cuarto oscuro aterrador feo.",
     "Comodín Indiscreto Mentiroso: Todos a la vez le hacen pregunta doble por sospecha o castigan dándole trago de bebida más picante caliente.",
     "Comodín Reversa Enfermiza: Intercambian su posición mental por turnos completos adivinando los errores con la suegra manipuladora del otro lado.",
     "Comodín Soplón Fiero Fuerte: Le dictan el secreto oculto mentiroso manipulado u oculto de algún contacto o número al asar por redes.",
     "Comodín Drama Novelas Teatrales: Provoca un estallido dramático o berrinche en media sala fingido de locos hasta todos quedar pálidos viendo.",
     "Comodín Amenaza Verbal Cruelista: Reivindica frente el escenario burlón tu decisión de abandono temporal irónica sarcástica por tontería pasional pequeña celosa.",
     "Comodín Maldición Divina Íntima: Hazlo gritar y enloquecer fingidamente culpando al alcohol del desastre relacional futuro innegable predicho de anoche.",
     "Comodín Terapia Psiquiátrica Falsa Mentirosa: Analízalo burlonamente por celoso tóxico irracional o bebe por las verdades negadas en la oscuridad secreta fatal.",
     "Comodín Bloqueador Universal Cínico: Puedes censurar todos mensajes hoy pero quedas tachado al repudio y desconfianzas grandes dolorosas pasadas tontas tristes feas.",
     "Comodín Verdad Innegociable Lacerante Oculta: Habla el corazón y confiesa traiciones pasivas agresivas del alma o toma todo de los tres copas pesadas grandes.",
     "Comodín Escarmiento Cínico Rudo Desvergonzado: Tu dejas al amado al expuesto burlón de mentiras ridículas chistosas feas sin pedir perdón nunca en público hoy rudo.",
     "Comodín Sacrificio Cruel Tóxico Pesado Vengativo: Arrójale la culpa de las mentiras dolorosas en un brindis irónico o salva tu propia botella sin beber asqueroso hoy."
];

function createDeck(startId, pools) {
    let deck = [];
    let curId = startId;
    for(let d = 0; d < 100; d++) {
        let cat = (d % 6) + 1; // 1 to 6
        let pool = pools[cat - 1];
        let baseText = pool[d % pool.length];
        
        // Add modifier suffix for diversity and uniqueness when repeating the array patterns limit
        let mod = "";
        let rep = Math.floor(d / pool.length);
        if (rep === 1) mod = " (Reto Extra)";
        if (rep === 2) mod = " (Versión Extrema)";
        if (rep === 3) mod = " (Dificultad Máxima)";
        if (rep === 4) mod = " (Final del Mazo)";
        if (rep === 5) mod = " (Brutal)";
        
        let finalText = baseText + mod;
        deck.push({ id: curId++, categoriaId: cat, texto: finalText });
    }
    return deck;
}

const arrDesmadre = [d_confiesa, d_sit, d_dil, d_nom, d_grup, d_com];
const arrParejas = [p_conf, p_sit, p_dil, p_nom, p_grup, p_com];

let extraCartas = [ ...createDeck(201, arrDesmadre), ...createDeck(301, arrParejas) ];

let cartasFile = fs.readFileSync('src/data/cartas.ts', 'utf8');
let jsonStr = ",\n" + extraCartas.map(c => `  {"id": ${c.id}, "categoriaId": ${c.categoriaId}, "texto": ${JSON.stringify(c.texto)}}`).join(",\n");
cartasFile = cartasFile.replace(/\n\];/, jsonStr + "\n];");

fs.writeFileSync('src/data/cartas.ts', cartasFile);
console.log("Successfully wrote 200 new expansion cards.");
