// src/factories/ProductFactory.js
class MLProcessor {
  format(data) { return { ...data, vendor: 'Mercado Livre', color: '#FFE600' }; }
}

class ShopeeProcessor {
  format(data) { return { ...data, vendor: 'Shopee', color: '#EE4D2D' }; }
}

export default class ProcessorFactory {
  static getProcessor(url) {
    if (url.includes('mercadolivre')) return new MLProcessor();
    return new ShopeeProcessor(); // Default
  }
}