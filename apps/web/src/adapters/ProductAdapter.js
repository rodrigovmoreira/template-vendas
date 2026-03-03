// src/adapters/ProductAdapter.js
export const ProductAdapter = (externalData) => {
  return {
    id: externalData.id || Math.random(),
    name: externalData.title || externalData.nome,
    price: externalData.price || 0,
    link: externalData.permalink || externalData.url,
    image: externalData.thumbnail || externalData.imagem
  };
};