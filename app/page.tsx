'use client'

import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Star, Heart, Search, User, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');

  const products = [
    {
      id: 1,
      name: "Colar Dourado Elegante",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "colares",
      rating: 4.8
    },
    {
      id: 2,
      name: "Anel de Prata Premium",
      price: 129.90,
      image: "https://images.unsplash.com/photo-1603561596112-db542eeb2d8d?w=400&h=400&fit=crop",
      category: "aneis",
      rating: 4.9
    },
    {
      id: 3,
      name: "Brincos Cristal Swarovski",
      price: 159.90,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      category: "brincos",
      rating: 5.0
    },
    {
      id: 4,
      name: "Pulseira Charm Delicada",
      price: 79.90,
      image: "https://images.unsplash.com/photo-1611955167811-4711904bb9ba?w=400&h=400&fit=crop",
      category: "pulseiras",
      rating: 4.7
    },
    {
      id: 5,
      name: "Conjunto Harmonia",
      price: 249.90,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop",
      category: "conjuntos",
      rating: 4.9
    },
    {
      id: 6,
      name: "Colar Pérolas Clássico",
      price: 199.90,
      image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&h=400&fit=crop",
      category: "colares",
      rating: 4.8
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'colares', name: 'Colares' },
    { id: 'aneis', name: 'Anéis' },
    { id: 'brincos', name: 'Brincos' },
    { id: 'pulseiras', name: 'Pulseiras' },
    { id: 'conjuntos', name: 'Conjuntos' }
  ];

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-700 bg-clip-text text-transparent">
                Mac Semijoias
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Início</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Produtos</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sobre</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contato</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Search className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
              <User className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Início</a>
                <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Produtos</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sobre</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contato</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Elegância em
              <span className="bg-gradient-to-r from-pink-600 to-blue-700 bg-clip-text text-transparent"> Cada Detalhe</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descubra nossa coleção exclusiva de semijoias que combinam sofisticação, qualidade e preços acessíveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
                Ver Coleção
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all">
                Sobre Nós
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-700/20 rounded-full animate-ping"></div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Coleção</h2>
            <p className="text-xl text-gray-600">Peças únicas para momentos especiais</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-pink-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Heart className="h-6 w-6 text-white hover:text-pink-500 cursor-pointer transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <button className="bg-gradient-to-r from-pink-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre a Mac Semijoias</h2>
              <p className="text-lg text-gray-600 mb-6">
                Há mais de 5 anos no mercado, a Mac Semijoias se dedica a criar peças únicas que expressam a personalidade e elegância de cada cliente.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nossa paixão por design e qualidade nos levou a desenvolver uma linha completa de semijoias que combinam tendências atuais com o charme atemporal.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Produtos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">5000+</div>
                  <div className="text-gray-600">Clientes Felizes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">5</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl opacity-20 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop"
                alt="Sobre Mac Semijoias"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-pink-600 via-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Entre em Contato</h2>
            <p className="text-xl text-blue-100">Estamos aqui para ajudar você</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-blue-100">(11) 99999-9999</p>
            </div>
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">contato@macsemijoias.com.br</p>
            </div>
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Localização</h3>
              <p className="text-blue-100">São Paulo, Brasil</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
              <Facebook className="h-6 w-6 text-white" />
            </div>
            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-xl font-bold">Mac Semijoias</span>
              </div>
              <p className="text-gray-400">Elegância e sofisticação em cada peça.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <a href="#home" className="text-gray-400 hover:text-white block">Início</a>
                <a href="#products" className="text-gray-400 hover:text-white block">Produtos</a>
                <a href="#about" className="text-gray-400 hover:text-white block">Sobre</a>
                <a href="#contact" className="text-gray-400 hover:text-white block">Contato</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block">Colares</a>
                <a href="#" className="text-gray-400 hover:text-white block">Anéis</a>
                <a href="#" className="text-gray-400 hover:text-white block">Brincos</a>
                <a href="#" className="text-gray-400 hover:text-white block">Pulseiras</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Receba nossas novidades</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-1"
                />
                <button className="bg-gradient-to-r from-pink-600 to-blue-600 px-4 py-2 rounded-r-lg hover:scale-105 transition-transform">
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mac Semijoias. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}