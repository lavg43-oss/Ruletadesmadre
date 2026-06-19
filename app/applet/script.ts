import fs from 'fs';

const cartasCode = fs.readFileSync('src/data/cartas.ts', 'utf8');
const appCode = fs.readFileSync('src/App.tsx', 'utf8');

const startIndex = cartasCode.indexOf('[');
const endIndex = cartasCode.lastIndexOf(']');
const arrayString = cartasCode.substring(startIndex, endIndex + 1);

let questionsArray = [];
try {
  questionsArray = eval(arrayString);
} catch (e) {
  console.log("Error parsing");
}

const exportObject = {
  informacion: "Exportación completa de La Rueda del Desmadre.",
  logica_principal: {
     1: "Pantalla de Lobby: Gestión de arreglo de jugadores.",
     2: "Pantalla de Packs: Habilitación de rangos de ID de cartas para filtrar el mazo.",
     3: "Pantalla de Juego: Ruleta visual en CSS.",
     4: "Motor: Se calcula un grado al azar, se detiene, y según el ángulo se busca una carta de esa categoría. Se ignora la carta si su ID ya está en el Set de cartasJugadas."
  },
  total_preguntas: questionsArray.length,
  preguntas: questionsArray,
  codigo_completo_main: appCode
};

fs.writeFileSync('public/game_data.json', JSON.stringify(exportObject, null, 2));
console.log("JSON exportado en public/game_data.json");
