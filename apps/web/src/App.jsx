// src/App.jsx
import React, { useState, useMemo } from 'react';
import { SortAZ, SortPriceLow } from './strategies/SortStrategy';
import ProcessorFactory from './factories/ProductFactory';
import { productsData } from './data/mock'; // Seu JSON de produtos

function App() {
  const [strategy, setStrategy] = useState(() => SortAZ);
  const [searchTerm, setSearchTerm] = useState("");

  // Lógica de Processamento e Filtro
  const displayProducts = useMemo(() => {
    let filtered = productsData.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Aplica Strategy de Ordenação
    const sorted = strategy.sort(filtered);

    // Aplica Factory para cada item (ajustando cores/marcas dinamicamente)
    return sorted.map(item => {
      const processor = ProcessorFactory.getProcessor(item.link);
      return processor.format(item);
    });
  }, [searchTerm, strategy]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      {/* Search Bar - Foco Mobile */}
      <input 
        className="w-full max-w-md p-4 rounded-2xl shadow-sm border-none mb-4 sticky top-4"
        placeholder="O que você está procurando?"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {displayProducts.map(product => (
          <div key={product.id} className="bg-white rounded-3xl p-4 shadow-sm flex items-center gap-4">
            <img src={product.image} className="w-20 h-20 rounded-xl object-cover" alt={product.name} />
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-sm">{product.name}</h3>
              <p className="text-blue-600 font-extrabold">R$ {product.price}</p>
              <a 
                href={product.link} 
                style={{ backgroundColor: product.color }}
                className="block text-center mt-2 py-2 rounded-lg text-xs font-bold uppercase"
              >
                Ver no {product.vendor}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;