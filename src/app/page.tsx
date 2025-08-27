'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PixelGameStudio = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 dark:from-purple-900 dark:via-pink-900 dark:to-yellow-900">
      {/* Pixel-style Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b-4 border-black dark:border-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-black dark:border-white transform rotate-45"></div>
              <span className="text-2xl font-bold text-black dark:text-white font-mono tracking-wider">
                RUGEYI
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 font-mono text-sm uppercase tracking-wider transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 font-mono text-sm uppercase tracking-wider transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 font-mono text-sm uppercase tracking-wider transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('games')}
                className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 font-mono text-sm uppercase tracking-wider transition-colors"
              >
                Games
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 font-mono text-sm uppercase tracking-wider transition-colors"
              >
                Contact
              </button>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white border-2 border-black dark:border-white transform hover:scale-105 transition-all font-mono text-sm uppercase tracking-wider">
              Let's Play
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="mb-8">
              <div className="inline-block p-4 bg-white dark:bg-gray-800 border-4 border-black dark:border-white rounded-lg shadow-lg">
                <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 font-mono tracking-wider">
                  RUGEYI
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 font-mono tracking-wide">
              PIXEL GAME
              <span className="block text-purple-600 dark:text-purple-400">STUDIO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-mono max-w-3xl mx-auto leading-relaxed">
              Crafting adorable pixel games and bringing joy to players worldwide. 
              <span className="block text-lg mt-2">Beijing Rugeyi Technology Co., Ltd.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-2 border-black dark:border-white transform hover:scale-105 transition-all font-mono text-sm uppercase tracking-wider"
                onClick={() => scrollToSection('games')}
              >
                Play Our Games
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transform hover:scale-105 transition-all font-mono text-sm uppercase tracking-wider"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
            </div>
          </div>
          
          {/* Pixel Decorations */}
          <div className="relative mt-16">
            <div className="absolute top-0 left-1/4 w-6 h-6 bg-yellow-400 border-2 border-black transform rotate-45 animate-bounce"></div>
            <div className="absolute top-8 right-1/4 w-8 h-8 bg-pink-400 border-2 border-black transform rotate-45 animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute bottom-0 left-1/3 w-4 h-4 bg-purple-400 border-2 border-black transform rotate-45 animate-bounce" style={{animationDelay: '0.4s'}}></div>
            <div className="absolute bottom-8 right-1/3 w-6 h-6 bg-green-400 border-2 border-black transform rotate-45 animate-bounce" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 font-mono tracking-wide">
              About <span className="text-purple-600 dark:text-purple-400">Rugeyi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-4 border-black dark:border-white shadow-lg transform hover:scale-105 transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black dark:text-white font-mono tracking-wide">
                    Our Story
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-mono">
                    Founded in Beijing, Rugeyi Technology Co., Ltd. is a passionate game development studio dedicated to creating charming pixel art games. We believe in the power of simple, engaging gameplay combined with adorable pixel aesthetics to create memorable gaming experiences.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-4 border-black dark:border-white shadow-lg transform hover:scale-105 transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black dark:text-white font-mono tracking-wide">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-mono">
                    To spread joy and creativity through pixel-perfect games that capture the imagination of players across all ages. We strive to create games that are not only fun to play but also visually stunning with their unique pixel art style.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-6 border-4 border-black dark:border-white transform rotate-3 shadow-lg">
                <div className="text-4xl font-bold text-white font-mono mb-2">50+</div>
                <div className="text-white font-mono text-sm">Games Released</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-6 border-4 border-black dark:border-white transform -rotate-3 shadow-lg">
                <div className="text-4xl font-bold text-white font-mono mb-2">2M+</div>
                <div className="text-white font-mono text-sm">Happy Players</div>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-blue-400 p-6 border-4 border-black dark:border-white transform rotate-3 shadow-lg">
                <div className="text-4xl font-bold text-white font-mono mb-2">15+</div>
                <div className="text-white font-mono text-sm">Team Members</div>
              </div>
              <div className="bg-gradient-to-br from-red-400 to-purple-400 p-6 border-4 border-black dark:border-white transform -rotate-3 shadow-lg">
                <div className="text-4xl font-bold text-white font-mono mb-2">24/7</div>
                <div className="text-white font-mono text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 font-mono tracking-wide">
              Our <span className="text-purple-600 dark:text-purple-400">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-mono max-w-3xl mx-auto">
              We specialize in pixel game development and publishing, offering end-to-end solutions for your gaming needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-4 border-black dark:border-white shadow-lg transform hover:scale-105 transition-all bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-black dark:border-white rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
                <CardTitle className="text-2xl font-bold text-black dark:text-white font-mono tracking-wide">
                  Game Development
                </CardTitle>
                <CardDescription className="font-mono">
                  Full-cycle pixel game development services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-mono">Custom pixel art design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-mono">Engaging gameplay mechanics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-mono">Cross-platform development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-mono">Sound design & music</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-black dark:border-white shadow-lg transform hover:scale-105 transition-all bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 border-2 border-black dark:border-white rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <CardTitle className="text-2xl font-bold text-black dark:text-white font-mono tracking-wide">
                  Game Publishing
                </CardTitle>
                <CardDescription className="font-mono">
                  Strategic publishing and marketing services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-mono">App Store optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-mono">Marketing campaigns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-mono">Community management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-mono">Analytics & insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 font-mono tracking-wide">
              Featured <span className="text-purple-600 dark:text-purple-400">Games</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-mono max-w-3xl mx-auto">
              Discover our portfolio of charming pixel games that have captured players' hearts worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pixel Adventure",
                genre: "RPG",
                description: "Embark on an epic pixel journey through magical lands",
                color: "from-purple-400 to-pink-400",
                image: "./pixel-adventure.png"
              },
              {
                title: "Cute Puzzle",
                genre: "Puzzle",
                description: "Solve adorable puzzles with charming pixel characters",
                color: "from-yellow-400 to-orange-400",
                image: "./cute-puzzle.png"
              },
              {
                title: "Retro Racing",
                genre: "Racing",
                description: "Speed through pixel-perfect tracks in this retro racer",
                color: "from-green-400 to-blue-400",
                image: "./retro-racing.png"
              }
            ].map((game, index) => (
              <Card key={index} className="border-4 border-black dark:border-white shadow-lg transform hover:scale-105 transition-all bg-white dark:bg-gray-800">
                <div className={`h-48 bg-gradient-to-br ${game.color} border-b-4 border-black dark:border-white relative overflow-hidden`}>
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black dark:bg-white text-white dark:text-black font-mono text-xs">
                      {game.genre}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-black dark:text-white font-mono tracking-wide">
                    {game.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 font-mono text-sm leading-relaxed">
                    {game.description}
                  </p>
                  <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white border-2 border-black dark:border-white font-mono text-xs uppercase tracking-wider">
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 font-mono tracking-wide">
              Get In <span className="text-purple-600 dark:text-purple-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-mono max-w-3xl mx-auto">
              Ready to create something amazing together? Let's discuss your next pixel game project!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-black dark:border-white shadow-lg bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black dark:text-white font-mono tracking-wide text-center">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-600 border-2 border-black dark:border-white rounded flex items-center justify-center">
                        <span className="text-white">📧</span>
                      </div>
                      <div>
                        <div className="font-mono text-sm text-gray-600 dark:text-gray-400">Email</div>
                        <div className="font-mono text-black dark:text-white">hello@rugeyi.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-pink-600 border-2 border-black dark:border-white rounded flex items-center justify-center">
                        <span className="text-white">🌐</span>
                      </div>
                      <div>
                        <div className="font-mono text-sm text-gray-600 dark:text-gray-400">Website</div>
                        <div className="font-mono text-black dark:text-white">www.likesong.net</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-600 border-2 border-black dark:border-white rounded flex items-center justify-center">
                        <span className="text-white">📍</span>
                      </div>
                      <div>
                        <div className="font-mono text-sm text-gray-600 dark:text-gray-400">Location</div>
                        <div className="font-mono text-black dark:text-white">Beijing, China</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-mono text-gray-700 dark:text-gray-300 mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border-2 border-black dark:border-white rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-mono text-gray-700 dark:text-gray-300 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border-2 border-black dark:border-white rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-mono text-gray-700 dark:text-gray-300 mb-2">Message</label>
                      <textarea 
                        className="w-full px-4 py-2 border-2 border-black dark:border-white rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-purple-600 h-24 resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-2 border-black dark:border-white font-mono text-sm uppercase tracking-wider">
                      Send Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black dark:bg-white text-white dark:text-black py-12 px-4 border-t-4 border-white dark:border-black">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white dark:border-black transform rotate-45"></div>
                <span className="text-2xl font-bold font-mono tracking-wider">RUGEYI</span>
              </div>
              <p className="font-mono text-sm opacity-80">
                Beijing Rugeyi Technology Co., Ltd.
              </p>
              <p className="font-mono text-sm opacity-80 mt-2">
                Creating pixel-perfect games since 2024
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold font-mono mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button className="block font-mono text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</button>
                <button className="block font-mono text-sm opacity-80 hover:opacity-100 transition-opacity">Our Games</button>
                <button className="block font-mono text-sm opacity-80 hover:opacity-100 transition-opacity">Services</button>
                <button className="block font-mono text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold font-mono mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white dark:bg-black border-2 border-black dark:border-white rounded flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-black dark:text-white">🐦</span>
                </div>
                <div className="w-10 h-10 bg-white dark:bg-black border-2 border-black dark:border-white rounded flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-black dark:text-white">📘</span>
                </div>
                <div className="w-10 h-10 bg-white dark:bg-black border-2 border-black dark:border-white rounded flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-black dark:text-white">📷</span>
                </div>
                <div className="w-10 h-10 bg-white dark:bg-black border-2 border-black dark:border-white rounded flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-black dark:text-white">🎮</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white dark:border-black mt-8 pt-8 text-center">
            <p className="font-mono text-sm opacity-80">
              © 2024 Rugeyi Technology Co., Ltd. All rights reserved. | www.likesong.net
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PixelGameStudio;