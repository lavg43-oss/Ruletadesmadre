/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { cartasData, Carta } from "./data/cartas";
import { Plus, Users, Play, Shuffle, MessageSquare, AlertTriangle, Scale, Pointer, Sparkles, Lock, ShoppingCart, CheckCircle2, Home, ArrowLeft } from "lucide-react";

const categoriasConfig = [
  { id: 1, name: "Confiesa", color: "#facc15", icon: MessageSquare, startDeg: 0 },
  { id: 2, name: "Situación", color: "#4ade80", icon: AlertTriangle, startDeg: 60 },
  { id: 3, name: "El Dilema", color: "#f87171", icon: Scale, startDeg: 120 },
  { id: 4, name: "El Nominado", color: "#60a5fa", icon: Pointer, startDeg: 180 },
  { id: 5, name: "Grupales", color: "#c084fc", icon: Users, startDeg: 240 },
  { id: 6, name: "Comodín", color: "#fb923c", icon: Sparkles, startDeg: 300 }
];

const packsConfig = [
  { id: 'base', name: 'Clásico', description: '150 preguntas iniciales, amigables y sociales. (Sin picante)', price: 'Gratis', unlocked: true, range: [1, 150] },
  { id: 'picante', name: 'Picante 🌶️', description: '150 cartas extras sin censura y subidas de tono (+16).', price: 'Gratis', unlocked: true, range: [151, 300] },
  { id: 'desmadre', name: 'Desmadre Total 🔥', description: '150 Retos físicos extremos y confesiones oscuras (+18).', price: '$2.99', unlocked: false, range: [301, 450] },
  { id: 'parejas', name: 'Noche de Parejas 🥂', description: '150 cartas de tensión, celos y secretos entre parejas (+18).', price: '$1.99', unlocked: false, range: [451, 600] },
];

export default function App() {
  const [gameState, setGameState] = useState<"lobby" | "packs" | "game">("lobby");
  const [jugadores, setJugadores] = useState<string[]>([]);
  const [nuevoJugador, setNuevoJugador] = useState("");
  const [selectedPacks, setSelectedPacks] = useState<string[]>(['base', 'picante']);
  
  const [turnoActualIndex, setTurnoActualIndex] = useState(0);
  const [cartasJugadas, setCartasJugadas] = useState<Set<number>>(new Set());
  const [cartaActual, setCartaActual] = useState<Carta | null>(null);
  const [mazoActivo, setMazoActivo] = useState<Carta[]>([]);
  
  const [girando, setGirando] = useState(false);
  const [rotation, setRotation] = useState(0);

  const agregarJugador = () => {
    const nombre = nuevoJugador.trim();
    if (nombre && !jugadores.includes(nombre)) {
      setJugadores([...jugadores, nombre]);
      setNuevoJugador("");
    }
  };

  const irAPacks = () => {
    setGameState("packs");
  };

  const togglePack = (packId: string, unlocked: boolean) => {
    if (!unlocked) return; // For now locked packs cannot be selected
    
    setSelectedPacks(prev => {
       if (prev.includes(packId)) {
          if (prev.length === 1) return prev; // Keep at least one pack
          return prev.filter(id => id !== packId);
       }
       return [...prev, packId];
    });
  };

  const iniciarJuego = () => {
    const activePacks = packsConfig.filter(p => selectedPacks.includes(p.id));
    const deck = cartasData.filter(carta => {
      return activePacks.some(pack => carta.id >= pack.range[0] && carta.id <= pack.range[1]);
    });
    
    setMazoActivo(deck.length > 0 ? deck : cartasData.slice(0, 150));
    setTurnoActualIndex(0);
    setCartasJugadas(new Set());
    setCartaActual(null);
    setGameState("game");
  };

  const girarRuleta = () => {
    if (girando) return;
    setGirando(true);
    
    // Simulate finding a category with available cards
    const doSpin = () => {
      let categoria = Math.floor(Math.random() * 6) + 1; // 1 to 6
      let opciones = mazoActivo.filter((c) => c.categoriaId === categoria && !cartasJugadas.has(c.id));
      
      // Fallback if that category is empty, find any available category
      if (opciones.length === 0) {
        opciones = mazoActivo.filter((c) => !cartasJugadas.has(c.id));
      }

      const targetRotation = rotation + (360 * (2 + Math.floor(Math.random() * 2))) + Math.floor(Math.random() * 300) + 30;
      setRotation(targetRotation);

      setTimeout(() => {
        if (opciones.length > 0) {
          const elegida = opciones[Math.floor(Math.random() * opciones.length)];
          setCartasJugadas(new Set([...cartasJugadas, elegida.id]));
          setCartaActual(elegida);
        }
        setGirando(false);
      }, 2500); // Wait for transition
    };

    doSpin();
  };

  const siguienteTurno = () => {
    setTurnoActualIndex((prev) => (prev + 1) % jugadores.length);
    setCartaActual(null);
  };

  const volverAlInicio = () => {
    setGameState("lobby");
    setTurnoActualIndex(0);
    setCartasJugadas(new Set());
    setCartaActual(null);
    setGirando(false);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans flex flex-col items-center p-4 sm:p-6 md:p-12">
      {gameState === "lobby" && (
        <div className="max-w-md w-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 mt-12">
          <div className="text-center space-y-2 mb-4">
             <h1 className="text-3xl font-bold tracking-tight text-white">La Rueda del Desmadre</h1>
             <p className="text-neutral-400">Agrega a tus amigos para comenzar</p>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-800 rounded-2xl p-6">
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                value={nuevoJugador}
                onChange={(e) => setNuevoJugador(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && agregarJugador()}
                placeholder="Nombre del jugador"
                className="flex-1 bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
              />
              <button
                onClick={agregarJugador}
                disabled={!nuevoJugador.trim()}
                className="bg-neutral-700 hover:bg-neutral-600 disabled:opacity-50 text-white rounded-xl px-4 flex items-center justify-center transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-neutral-400 font-medium mb-4">
               <Users className="w-4 h-4" />
               <h2>Jugadores ({jugadores.length})</h2>
            </div>
            
            {jugadores.length === 0 ? (
               <div className="py-8 text-center text-neutral-500 border border-dashed border-neutral-700 rounded-xl bg-neutral-900/50">
                  Nadie ha entrado al lobby aún
               </div>
            ) : (
               <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {jugadores.map((jugador, idx) => (
                  <div key={idx} className="bg-neutral-900 border border-neutral-800 px-4 py-3 rounded-xl flex items-center shadow-sm">
                    <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold mr-3">{idx + 1}</span>
                    {jugador}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <button
            onClick={irAPacks}
            disabled={jugadores.length < 2}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-neutral-800 disabled:text-neutral-500 text-white rounded-xl px-6 py-4 font-medium transition-colors shadow-lg shadow-indigo-600/20 text-lg flex justify-center items-center gap-2 mt-4"
          >
            Siguiente <Play className="w-5 h-5" />
          </button>
          
          {jugadores.length < 2 && (
             <p className="text-center text-xs text-neutral-500">Se necesitan al menos 2 jugadores</p>
          )}
        </div>
      )}

      {gameState === "packs" && (
        <div className="max-w-md w-full flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500 mt-12 pb-24">
          <div className="flex items-center gap-4 mb-2">
            <button 
              onClick={volverAlInicio}
              className="p-2 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="text-left space-y-1">
               <h1 className="text-3xl font-bold tracking-tight text-white">Packs</h1>
               <p className="text-neutral-400 text-sm">Selecciona los mazos a incluir</p>
            </div>
          </div>

          <div className="space-y-4">
             {packsConfig.map(pack => {
                const isSelected = selectedPacks.includes(pack.id);
                return (
                  <button
                    key={pack.id}
                    onClick={() => togglePack(pack.id, pack.unlocked)}
                    disabled={!pack.unlocked}
                    className={`w-full relative overflow-hidden rounded-2xl border-2 transition-all p-5 text-left flex flex-col 
                      ${isSelected 
                        ? 'bg-neutral-800/80 border-indigo-500 shadow-xl shadow-indigo-500/10' 
                        : 'bg-neutral-900 border-neutral-800 hover:bg-neutral-800/40'}
                      ${!pack.unlocked ? 'opacity-70 grayscale' : ''}
                    `}
                  >
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {pack.name} 
                        </h3>
                        {pack.unlocked ? (
                           <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors 
                              ${isSelected ? 'bg-indigo-500 border-indigo-500' : 'border-neutral-600'}`}>
                              {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                           </div>
                        ) : (
                           <span className="flex items-center gap-1.5 text-xs font-semibold bg-neutral-800 text-neutral-400 px-3 py-1.5 rounded-full border border-neutral-700">
                             <Lock className="w-3.5 h-3.5" />
                           </span>
                        )}
                     </div>
                     <p className="text-sm text-neutral-400 mb-4">{pack.description}</p>
                     <div className="flex items-center justify-between mt-auto">
                        <span className={`text-sm font-bold ${pack.unlocked ? 'text-green-400' : 'text-neutral-300'}`}>
                           {pack.unlocked ? 'Desbloqueado' : pack.price}
                        </span>
                        {!pack.unlocked && (
                           <div className="bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-indigo-500 transition-colors">
                              <ShoppingCart className="w-3.5 h-3.5" /> Comprar
                           </div>
                        )}
                     </div>
                  </button>
                )
             })}
          </div>

          <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-neutral-900 via-neutral-900 to-transparent">
             <div className="max-w-md mx-auto">
                <button
                  onClick={iniciarJuego}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-6 py-4 font-medium transition-colors shadow-lg shadow-indigo-600/20 text-lg flex justify-center items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  ¡Comenzar Juego!
                </button>
             </div>
          </div>
        </div>
      )}

      {gameState === "game" && (
        <div className="max-w-lg w-full flex flex-col gap-8 h-full min-h-[80vh] animate-in fade-in duration-500">
           <header className="flex items-center justify-between sticky top-0 bg-neutral-900/80 backdrop-blur-md py-4 z-10 border-b border-neutral-800">
              <div className="flex items-center gap-4">
                 <button 
                    onClick={volverAlInicio} 
                    className="p-2 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors flex items-center justify-center shrink-0 shadow-sm"
                 >
                    <Home className="w-5 h-5" />
                 </button>
                 <div>
                    <p className="text-neutral-400 text-sm font-medium">Turno actual</p>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                       {jugadores[turnoActualIndex]}
                    </h2>
                 </div>
              </div>
              <div className="bg-neutral-800 px-3 py-1.5 rounded-lg text-sm text-neutral-300 font-medium">
                 Cartas: {cartasJugadas.size} / {mazoActivo.length}
              </div>
           </header>
          
          <div className="flex-1 flex flex-col items-center justify-center py-8">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-12">
               {/* Fixed Indicator */}
               <div className="absolute top-0 left-1/2 -ml-3 -mt-4 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-white z-20 drop-shadow-md"></div>
               
               {/* Wheel */}
               <div 
                 className="w-full h-full rounded-full border-4 border-neutral-800 shadow-2xl relative overflow-hidden"
                 style={{
                   transform: `rotate(${rotation}deg)`,
                   transition: girando ? 'transform 2.5s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'
                 }}
               >
                 {/* CSS Conic Gradient for slices */}
                 <div className="absolute inset-0 w-full h-full" style={{
                    background: 'conic-gradient(#facc15 0 60deg, #4ade80 60deg 120deg, #f87171 120deg 180deg, #60a5fa 180deg 240deg, #c084fc 240deg 300deg, #fb923c 300deg 360deg)'
                 }} />
                 
                 {/* Slices separators and content */}
                 <div className="absolute inset-0 w-full h-full">
                    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                       <div key={`sep-${i}`} className="absolute w-[2px] h-1/2 bg-neutral-800/20 top-0 left-1/2 -ml-[1px] z-10" style={{ transformOrigin: 'bottom', transform: `rotate(${deg}deg)` }} />
                    ))}
                    {categoriasConfig.map((cat, i) => {
                       const rotationAngle = cat.startDeg + 30; // Center of the 60-degree slice
                       return (
                         <div 
                           key={`cat-${i}`} 
                           className="absolute top-0 flex flex-col items-center justify-start pt-6 sm:pt-8 h-1/2 w-[120px] left-1/2 -ml-[60px]"
                           style={{ 
                             transformOrigin: 'bottom center', 
                             transform: `rotate(${rotationAngle}deg)`,
                             color: '#171717'
                           }}
                         >
                           <cat.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 opacity-80" />
                           <span className="text-[10px] sm:text-xs font-bold uppercase text-center leading-tight opacity-90">
                             {cat.name}
                           </span>
                         </div>
                       );
                    })}
                 </div>
                 
                 {/* Center Dot */}
                 <div className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4 bg-neutral-900 rounded-full border-4 border-white shadow-inner flex items-center justify-center z-10" />
               </div>
            </div>

            <button
               onClick={girarRuleta}
               disabled={girando || cartaActual !== null}
               className="bg-white hover:bg-neutral-200 disabled:bg-neutral-800 disabled:text-neutral-500 text-neutral-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-white/10 transition-all flex items-center gap-2 transform active:scale-95 disabled:active:scale-100"
            >
               {girando ? (
                  <>Girando...</>
               ) : cartaActual ? (
                  <>Carta Mostrada</>
               ) : (
                  <>
                     <Shuffle className="w-5 h-5" /> Girar Ruleta
                  </>
               )}
            </button>
            
            {/* Card Display */}
            {cartaActual && (
               <div className="w-full mt-12 animate-in slide-in-from-bottom-8 fade-in duration-500">
                  <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/50 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                     {(() => {
                        const cat = categoriasConfig.find(c => c.id === cartaActual.categoriaId);
                        const CurrentIcon = cat?.icon || Sparkles;
                        return (
                          <>
                            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl -mr-16 -mt-16 opacity-20" style={{ backgroundColor: cat?.color || '#6366f1' }}></div>
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                              <span className="inline-flex items-center justify-center p-2.5 rounded-xl bg-neutral-800 border border-neutral-700 shadow-sm" style={{ color: cat?.color || '#fff' }}>
                                <CurrentIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                              </span>
                              <span className="text-sm sm:text-base font-bold tracking-wider uppercase text-neutral-300">
                                {cat?.name || `Categoría ${cartaActual.categoriaId}`}
                              </span>
                            </div>
                          </>
                        );
                     })()}
                     <p className="text-xl sm:text-2xl font-medium leading-relaxed text-white relative z-10">
                        {cartaActual.texto}
                     </p>
                  </div>
               </div>
            )}
          </div>
          
          <div className="pb-8 pt-4 flex flex-col gap-3">
             <button
                onClick={siguienteTurno}
                disabled={girando || !cartaActual}
                className="w-full border-2 border-neutral-700 hover:border-neutral-500 disabled:border-neutral-800 disabled:opacity-50 text-white rounded-xl px-6 py-4 font-medium transition-colors flex justify-center items-center gap-2"
             >
                Siguiente Turno
             </button>
             <button
                onClick={() => setCartaActual(null)}
                disabled={girando || !cartaActual}
                className="w-full bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-800 disabled:opacity-50 text-neutral-300 rounded-xl px-6 py-3 font-medium transition-colors flex justify-center items-center gap-2 text-sm"
             >
                <Shuffle className="w-4 h-4" /> Girar de nuevo (Mismo turno)
             </button>
          </div>
        </div>
      )}
    </div>
  );
}
