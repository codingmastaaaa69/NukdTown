/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Radio, Home, Zap, Shield, Search, X, Maximize2, ExternalLink, Gamepad2, Trees, Cloud, Sun, Flower, Bird } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gamesData from './games.json';

interface Game {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

export default function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setGames(gamesData);
  }, []);

  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-retro-pink selection:text-white relative">
      {/* Scanline Overlay */}
      <div className="scanlines" />

      {/* Cloud & Sun Ornaments */}
      <div className="absolute top-20 left-10 opacity-20 pointer-events-none animate-float">
        <Cloud className="w-20 h-20 text-white" />
      </div>
      <div className="absolute top-12 right-20 opacity-20 pointer-events-none animate-bounce">
        <Sun className="w-16 h-16 text-retro-yellow" />
      </div>

      {/* Marquee Header */}
      <div className="marquee border-b-2 border-earth">
        <div className="marquee-content">
          WELCOME TO GETNUKD TOWN - THE COZIEST SPOT ON THE WEB - NEW VILLAGERS ARRIVING DAILY - FISHING TOURNEY STARTS SOON! - SYSTEM STATUS: RADIANTLY HAPPY - 
          WELCOME TO GETNUKD TOWN - THE COZIEST SPOT ON THE WEB - NEW VILLAGERS ARRIVING DAILY - FISHING TOURNEY STARTS SOON! - SYSTEM STATUS: RADIANTLY HAPPY - 
        </div>
      </div>

      {/* Main Header */}
      <header className="py-8 px-4 border-b-4 border-earth bg-white/50 backdrop-blur-sm relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 border-4 border-earth bg-retro-green animate-float">
              <Home className="w-12 h-12 text-earth" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-pixel text-earth glow-text mb-2 tracking-tighter">
                GETNUKD
              </h1>
              <div className="flex gap-2">
                <span className="bg-earth text-white px-2 py-0.5 text-[8px] font-pixel">V3.0 TOWN_EDITION</span>
                <span className="border-2 border-earth text-earth px-2 py-0.5 text-[8px] font-pixel">COZY_UNBLOCKED</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth" />
              <input 
                type="text" 
                placeholder="FIND A NEIGHBOR..." 
                className="bg-white border-4 border-earth text-earth px-10 py-2 font-mono text-xl focus:outline-none focus:ring-4 focus:ring-retro-pink w-full md:w-80 shadow-[4px_4px_0px_#8b4513]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4 justify-end items-center">
              <div className="flex items-center gap-2 text-earth text-[8px] font-pixel">
                <Bird className="w-3 h-3 animate-pulse" />
                VILLAGERS: {Math.floor(Math.random() * 50) + 100}
              </div>
              <div className="flex items-center gap-2 text-earth text-[8px] font-pixel">
                <Flower className="w-3 h-3 text-retro-pink" />
                TOWN_RATING: 5_STARS
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bars */}
      <nav className="bg-grass py-1 border-b-2 border-earth">
        <div className="max-w-6xl mx-auto flex justify-center gap-4 md:gap-12 px-4 italic text-sm font-bold text-white uppercase drop-shadow-[1px_1px_0px_#000]">
          <a href="#" className="hover:underline flex items-center gap-1"><Gamepad2 className="w-4 h-4" /> PLAZA</a>
          <a href="#" className="hover:underline flex items-center gap-1"><Zap className="w-4 h-4" /> TRENDING</a>
          <a href="#" className="hover:underline flex items-center gap-1"><Trees className="w-4 h-4" /> PARK</a>
          <a href="#" className="hover:underline flex items-center gap-1 md:flex hidden"><Bird className="w-4 h-4" /> CHIRP</a>
        </div>
      </nav>

      <main className="flex-grow max-w-6xl mx-auto w-full p-4 md:p-8">
        {!selectedGame ? (
          <div className="space-y-12">
            <div className="flex items-center gap-2 border-b-4 border-earth/20 pb-2">
              <Home className="w-5 h-5 text-retro-pink" />
              <h2 className="font-pixel text-earth text-[10px] uppercase">LOCAL_NEIGHBORHOOD: RESIDENTIAL_ZONE</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 pt-8">
              {filteredGames.length > 0 ? (
                filteredGames.map((game, idx) => (
                  <motion.div 
                    key={game.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="house-card group cursor-pointer"
                    onClick={() => setSelectedGame(game)}
                  >
                    {/* The House */}
                    <div className="house-body">
                      <div className="house-roof" style={{ backgroundColor: ['#ff69b4', '#87ceeb', '#f0e68c', '#7cfc00'][idx % 4] }} />
                      
                      <div className="aspect-video bg-sky/30 m-2 overflow-hidden border-2 border-earth relative">
                        <img 
                          src={game.thumbnail} 
                          alt={game.title} 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-retro-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="p-3 bg-white/80 space-y-1 border-t-2 border-earth/10 h-24">
                        <h3 className="font-pixel text-[10px] text-earth uppercase leading-tight group-hover:text-retro-pink transition-colors">
                          {game.title}
                        </h3>
                        <p className="font-mono text-xs text-earth/70 line-clamp-2 leading-none">
                          {game.description}
                        </p>
                      </div>

                      <div className="house-door" />
                    </div>
                    
                    {/* The Grass underneath */}
                    <div className="grass-lot">
                      <div className="flex justify-around px-2">
                        <Flower className="w-3 h-3 text-white/50" />
                        <Flower className="w-2 h-2 text-white/30" />
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center border-4 border-dashed border-earth/20 rounded-xl">
                  <Trees className="w-20 h-20 text-earth/20 mx-auto mb-4" />
                  <p className="font-pixel text-earth/50 text-[10px] uppercase">GHOST TOWN: NO_RESIDENTS_DETECTED</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Game Player */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col gap-4 ${isFullscreen ? 'fixed inset-0 z-[1000] bg-black p-0' : ''}`}
          >
            <div className="flex items-center justify-between bg-white border-4 border-earth p-2 shadow-[4px_4px_0px_#8b4513]">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => {
                    setSelectedGame(null);
                    setIsFullscreen(false);
                  }}
                  className="bg-white border-2 border-earth p-1 hover:bg-retro-pink hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex flex-col">
                  <h2 className="font-pixel text-earth text-[10px] uppercase tracking-wider">{selectedGame.title}</h2>
                  <p className="font-mono text-[10px] text-earth/60">ADDRESS: {selectedGame.id.toUpperCase()} TOWN_DRIVE</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="bg-white border-2 border-earth p-1 hover:bg-retro-blue hover:text-white transition-colors flex items-center gap-1 font-pixel text-[8px]"
                >
                  <Maximize2 className="w-3 h-3" /> FULLSCREEN
                </button>
                <a 
                  href={selectedGame.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-earth p-1 hover:bg-retro-yellow hover:text-white transition-colors flex items-center gap-1 font-pixel text-[8px]"
                >
                  <ExternalLink className="w-3 h-3" /> VISIT_ORIGIN
                </a>
              </div>
            </div>

            <div className={`bg-black relative ${isFullscreen ? 'h-full' : 'aspect-video border-8 border-earth shadow-[8px_8px_0px_#8b4513]'}`}>
              <iframe 
                src={selectedGame.url} 
                className="w-full h-full border-none"
                title={selectedGame.title}
                allowFullScreen
              />
            </div>

            {!isFullscreen && (
              <div className="p-4 bg-white/80 border-4 border-earth space-y-4 shadow-[4px_4px_0px_#8b4513]">
                <div>
                  <h3 className="font-pixel text-retro-pink text-[10px] mb-2 uppercase italic underline">TOWN_GOSSIP:</h3>
                  <p className="font-mono text-earth text-xl leading-snug">{selectedGame.description}</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1 text-[8px] font-pixel text-retro-blue">
                    <Cloud className="w-3 h-3" /> WEATHER: SUNNY
                  </div>
                  <div className="flex items-center gap-1 text-[8px] font-pixel text-retro-yellow">
                    <Sun className="w-3 h-3" /> HAPPINESS: 100%
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t-8 border-earth bg-grass/20 p-8 text-earth font-mono relative overflow-hidden">
        {/* Background Trees */}
        <div className="absolute bottom-0 left-0 w-full flex justify-around opacity-10 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <Trees key={i} className="w-24 h-24" />
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="space-y-4">
            <h4 className="font-pixel text-[10px] text-earth glow-text uppercase underline decoration-2 underline-offset-4 mb-4">TOWN_HALL</h4>
            <p className="text-xs font-bold">
              GETNUKD TOWN IS A COZY CORNER OF THE UNBLOCKED INTERNET. 
              WE BELIEVE IN GOOD VIBES AND GREAT GAMES.
            </p>
            <div className="flex gap-4">
              <Bird className="w-6 h-6 hover:text-retro-pink cursor-pointer animate-float" />
              <Home className="w-6 h-6 hover:text-retro-blue cursor-pointer animate-pulse" />
              <Zap className="w-6 h-6 hover:text-retro-yellow cursor-pointer" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-pixel text-[10px] text-earth uppercase underline decoration-2 underline-offset-4 mb-4">MAP_DIRECTORY</h4>
            <ul className="text-xs space-y-1 font-bold">
              <li className="hover:text-retro-pink cursor-pointer">{'>'} POST_OFFICE</li>
              <li className="hover:text-retro-pink cursor-pointer">{'>'} MUSEUM</li>
              <li className="hover:text-retro-pink cursor-pointer">{'>'} ABLE_SISTERS</li>
              <li className="hover:text-retro-pink cursor-pointer">{'>'} TOWN_BOARDS</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-pixel text-[10px] text-earth uppercase underline decoration-2 underline-offset-4 mb-4">WEATHER_STATION</h4>
            <div className="bg-white/50 p-2 border-2 border-earth text-[10px] font-mono whitespace-pre text-earth shadow-[2px_2px_0px_#8b4513]">
              {`CURRENT WEATHER: SUNNY\nTEMP: 24°C / 75°F\nLUCK: EXTREMELY HIGH\n(C) 2004 GETNUKD TOWN\nEST. 8-BIT COZY VIBES`}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t-2 border-earth/10 text-center">
            <p className="font-pixel text-[8px] text-retro-pink animate-pulse">THANK YOU FOR VISITING OUR LITTLE TOWN! DON'T FORGET YOUR UMBRELLA!</p>
        </div>
      </footer>
    </div>
  );
}
