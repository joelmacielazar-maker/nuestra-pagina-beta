// 🌐 TRADUCTOR PROPIO

const traducciones = {

    es: {
        titulo: "Bienvenidos a nuestro grupo",
        descripcion: "Un lugar para conocer personas, hacer amigos y socializar.",
        unirte: "¿Quieres formar parte?",
        aburrido: "¿Aburrid@ de los grupos muertos?",
        grupito: "Entrá a nuestro grupito de jovenes",
        descripcionGrupo: "Puro baruyo, memes, gente rara, humor roto y cero seriedad",
        desastre: "Si eres un desastre social… este es tu hábitat natural",
        reglasTitulo: "✨ Reglas del chat ✨",
        presentate: "#Preséntate (nombre + edad + país)",
        edad: "#Edad permitida: 14–19 años",
        respeto: "#Respeto siempre",
        spam: "#Sin spam, publicidad o links raros",
        gore: "#Nada de contenido +18 o gore",
        dm: "#DM solo con permiso",
        disfruta: "#Disfruta y participa",
        asistencia: "#Se toma asistencia",
        expulsión: "⚠️ Romper reglas = expulsión",
        boton: "Quiero unirme"
    },

    en: {
        titulo: "Welcome to our group",
        descripcion: "A place to meet people, make friends and socialize.",
        unirte: "Do you want to join?",
        aburrido: "Bored of dead groups?",
        grupito: "Join our little group of young people",
        descripcionGrupo: "Pure chaos, memes, weird people, broken humor and zero seriousness",
        desastre: "If you're a social disaster… this is your natural habitat",
        reglasTitulo: "✨ Chat rules ✨",
        presentate: "#Introduce yourself (name + age + country)",
        edad: "#Allowed age: 14–19 years",
        respeto: "#Always be respectful",
        spam: "#No spam, advertising or weird links",
        gore: "#No +18 content or gore",
        dm: "#DM only with permission",
        disfruta: "#Have fun and participate",
        asistencia: "#Attendance is taken",
        expulsión: "⚠️ Breaking the rules = removal",
        boton: "I want to join"
    },

    pt: {
        titulo: "Bem-vindos ao nosso grupo",
        descripcion: "Um lugar para conhecer pessoas, fazer amigos e socializar.",
        unirte: "Quer fazer parte?",
        aburrido: "Cansado de grupos mortos?",
        grupito: "Entre no nosso grupinho de jovens",
        descripcionGrupo: "Muito caos, memes, gente estranha, humor quebrado e zero seriedade",
        desastre: "Se você é um desastre social… este é o seu habitat natural",
        reglasTitulo: "✨ Regras do chat ✨",
        presentate: "#Apresente-se (nome + idade + país)",
        edad: "#Idade permitida: 14–19 anos",
        respeto: "#Respeito sempre",
        spam: "#Sem spam, publicidade ou links estranhos",
        gore: "#Nada de conteúdo +18 ou gore",
        dm: "#DM somente com permissão",
        disfruta: "#Divirta-se e participe",
        asistencia: "#A presença é registrada",
        expulsión: "⚠️ Quebrar as regras = expulsão",
        boton: "Quero entrar"
    }

};


// 🌐 CREAR VENTANA DEL TRADUCTOR

const traductor = document.createElement("div");

traductor.id = "traductor";

traductor.innerHTML = `
    <button id="boton-idioma">🌐 ES</button>

    <div id="ventana-idiomas">

        <div class="idioma-titulo">
            LANGUAGE
        </div>

        <button class="idioma" data-idioma="es">
            🇪🇸 Español
        </button>

        <button class="idioma" data-idioma="en">
            🇬🇧 English
        </button>

        <button class="idioma" data-idioma="pt">
            🇧🇷 Português
        </button>

    </div>
`;

document.body.appendChild(traductor);


// 🌐 ABRIR / CERRAR VENTANA

const botonIdioma = document.getElementById("boton-idioma");
const ventanaIdiomas = document.getElementById("ventana-idiomas");

botonIdioma.addEventListener("click", () => {

    ventanaIdiomas.classList.toggle("mostrar");

});


// 🌎 CAMBIAR IDIOMA

document.querySelectorAll(".idioma").forEach(boton => {

    boton.addEventListener("click", () => {

        cambiarIdioma(boton.dataset.idioma);

        ventanaIdiomas.classList.remove("mostrar");

    });

});


function cambiarIdioma(idioma) {

    const t = traducciones[idioma];

    if (!t) return;


    // TÍTULO

    const titulo = document.querySelector("h1");

    if (titulo) {

        const inicial = titulo.querySelector(".inicial");

        if (inicial) {

            inicial.textContent = t.titulo.charAt(0);

            titulo.innerHTML =
                `<span class="inicial">${t.titulo.charAt(0)}</span>${t.titulo.slice(1)}`;

        } else {

            titulo.textContent = t.titulo;

        }

    }


    // PÁRRAFOS

    const parrafos = document.querySelectorAll("body > p");

    if (parrafos.length >= 1) {

        parrafos[0].textContent = t.descripcion;

    }


    // SEGUNDA SECCIÓN

    const h2 = document.querySelectorAll("h2");

    if (h2.length >= 1) {

        h2[0].textContent = t.unirte;

    }

    if (h2.length >= 2) {

        h2[1].textContent = t.reglasTitulo;

    }


    // TEXTOS DEL GRUPO

    const textosGrupo = document.querySelectorAll("body > p");

    if (textosGrupo.length >= 5) {

        textosGrupo[1].textContent = t.aburrido;
        textosGrupo[2].textContent = t.grupito;
        textosGrupo[3].textContent = t.descripcionGrupo;
        textosGrupo[4].textContent = t.desastre;

    }


    // REGLAS

    const reglas = document.querySelectorAll(".reglas p");

    if (reglas.length >= 8) {

        reglas[0].textContent = t.presentate;
        reglas[1].textContent = t.edad;
        reglas[2].textContent = t.respeto;
        reglas[3].textContent = t.spam;
        reglas[4].textContent = t.gore;
        reglas[5].textContent = t.dm;
        reglas[6].textContent = t.disfruta;
        reglas[7].textContent = t.asistencia;

    }


    // ADVERTENCIA

    if (reglas.length >= 9) {

        reglas[8].textContent = t.expulsión;

    }


    // BOTÓN

    const botonUnirse = document.querySelector("a button");

    if (botonUnirse) {

        botonUnirse.textContent = t.boton;

    }


    // CAMBIAR INDICADOR

    botonIdioma.textContent =
        idioma === "es" ? "🌐 ES" :
        idioma === "en" ? "🌐 EN" :
        "🌐 PT";


    // GUARDAR IDIOMA

    localStorage.setItem("idiomaPagina", idioma);

}


// 🌎 CARGAR IDIOMA GUARDADO

const idiomaGuardado = localStorage.getItem("idiomaPagina");

if (idiomaGuardado && traducciones[idiomaGuardado]) {

    cambiarIdioma(idiomaGuardado);

}
