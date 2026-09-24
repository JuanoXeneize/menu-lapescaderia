// ============================================================
//  TRANSLATIONS - LA PESCADERÍA
//  Do NOT edit menu-data.js to add languages — everything for
//  the other languages lives here instead.
//
//  uiText: labels, notes, section headings (nav, sub-nav, info
//  cards, reservas, footer). Keyed by language, then by field.
//
//  menuTranslations: per-item name/description overlays for
//  cartaItems / bebidasItems, mirrored by array index against
//  menu-data.js. Spanish (the default) is never listed here —
//  it always comes straight from menu-data.js.
// ============================================================

const uiText = {
  es: {
    navCarta: 'CARTA',
    navBebidas: 'BEBIDAS',
    navVinos: 'VINOS',
    navReservas: 'RESERVAS',
    bodegaLabel: 'SELECCIONAR BODEGA',
    reservasHeading: 'RESERVAS',
    reservasText: 'Hacé tu reserva contactándonos por WhatsApp o Instagram',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    footerText: 'La Pescadería Fish Market © 2026',
    notePromos: '*GUARNICIONES A ELECCIÓN: Vegetales grillados - Ensalada - Papas a la plancha o fritas',
    noteEntradas: 'CUBIERTOS $2.000',
    notePesca: '*La selección de la pesca del día está sujeta a disponibilidad',
    langSelectLabel: 'Seleccionar idioma',
    sectionHeadings: {
      'PROMOS': 'PROMOS', 'ENTRADAS': 'ENTRADAS', 'PICADAS': 'PICADAS', 'PESCA': 'PESCA',
      'CAZUELAS': 'CAZUELAS', 'PAELLAS': 'PAELLAS', 'PASTAS': 'PASTAS', 'ENSALADAS': 'ENSALADAS',
      'POSTRES': 'POSTRES', 'SIN ALCOHOL': 'SIN ALCOHOL', 'CON ALCOHOL': 'CON ALCOHOL',
      'COCTELERÍA': 'COCTELERÍA', 'PASTAS ADICIONALES': 'PASTAS ADICIONALES', 'ADICIONALES': 'ADICIONALES',
      'GUARNICIONES': 'GUARNICIONES', 'CLÁSICOS': 'CLÁSICOS', "VERMUT'S": "VERMUT'S",
      'TÓNICOS': 'TÓNICOS', 'WHISKYS': 'WHISKYS', 'CERVEZAS': 'CERVEZAS',
      'TINTOS': 'TINTOS', 'BLANCOS': 'BLANCOS', 'ESPUMANTES': 'ESPUMANTES'
    }
  },
  en: {
    navCarta: 'MENU',
    navBebidas: 'DRINKS',
    navVinos: 'WINES',
    navReservas: 'RESERVATIONS',
    bodegaLabel: 'SELECT WINERY',
    reservasHeading: 'RESERVATIONS',
    reservasText: 'Make your reservation by contacting us on WhatsApp or Instagram',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    footerText: 'La Pescadería Fish Market © 2026',
    notePromos: '*SIDE OF YOUR CHOICE: Grilled vegetables - Salad - Mashed or fried potatoes',
    noteEntradas: 'COVER CHARGE $2,000',
    notePesca: '*The daily catch selection is subject to availability',
    langSelectLabel: 'Select language',
    sectionHeadings: {
      'PROMOS': 'PROMOS', 'ENTRADAS': 'STARTERS', 'PICADAS': 'SHARING PLATTERS', 'PESCA': 'CATCH OF THE DAY',
      'CAZUELAS': 'CASSEROLES', 'PAELLAS': 'PAELLAS', 'PASTAS': 'PASTA', 'ENSALADAS': 'SALADS',
      'POSTRES': 'DESSERTS', 'SIN ALCOHOL': 'NON-ALCOHOLIC', 'CON ALCOHOL': 'ALCOHOLIC',
      'COCTELERÍA': 'COCKTAILS', 'PASTAS ADICIONALES': 'ADDITIONAL PASTA', 'ADICIONALES': 'ADD-ONS',
      'GUARNICIONES': 'SIDES', 'CLÁSICOS': 'CLASSICS', "VERMUT'S": 'VERMOUTHS',
      'TÓNICOS': 'GIN & TONICS', 'WHISKYS': 'WHISKIES', 'CERVEZAS': 'BEERS',
      'TINTOS': 'RED WINES', 'BLANCOS': 'WHITE WINES', 'ESPUMANTES': 'SPARKLING WINES'
    }
  },
  pt: {
    navCarta: 'CARDÁPIO',
    navBebidas: 'BEBIDAS',
    navVinos: 'VINHOS',
    navReservas: 'RESERVAS',
    bodegaLabel: 'SELECIONAR VINÍCOLA',
    reservasHeading: 'RESERVAS',
    reservasText: 'Faça sua reserva entrando em contato pelo WhatsApp ou Instagram',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    footerText: 'La Pescadería Fish Market © 2026',
    notePromos: '*ACOMPANHAMENTO À ESCOLHA: Legumes grelhados - Salada - Batatas na chapa ou fritas',
    noteEntradas: 'COUVERT $2.000',
    notePesca: '*A seleção do peixe do dia está sujeita à disponibilidade',
    langSelectLabel: 'Selecionar idioma',
    sectionHeadings: {
      'PROMOS': 'PROMOÇÕES', 'ENTRADAS': 'ENTRADAS', 'PICADAS': 'TÁBUAS PARA COMPARTILHAR', 'PESCA': 'PEIXE DO DIA',
      'CAZUELAS': 'CAÇAROLAS', 'PAELLAS': 'PAELLAS', 'PASTAS': 'MASSAS', 'ENSALADAS': 'SALADAS',
      'POSTRES': 'SOBREMESAS', 'SIN ALCOHOL': 'SEM ÁLCOOL', 'CON ALCOHOL': 'COM ÁLCOOL',
      'COCTELERÍA': 'COQUETELARIA', 'PASTAS ADICIONALES': 'MASSAS ADICIONAIS', 'ADICIONALES': 'ADICIONAIS',
      'GUARNICIONES': 'ACOMPANHAMENTOS', 'CLÁSICOS': 'CLÁSSICOS', "VERMUT'S": 'VERMUTES',
      'TÓNICOS': 'GIN TÔNICA', 'WHISKYS': 'UÍSQUES', 'CERVEZAS': 'CERVEJAS',
      'TINTOS': 'VINHOS TINTOS', 'BLANCOS': 'VINHOS BRANCOS', 'ESPUMANTES': 'ESPUMANTES'
    }
  },
  ru: {
    navCarta: 'МЕНЮ',
    navBebidas: 'НАПИТКИ',
    navVinos: 'ВИНА',
    navReservas: 'БРОНИРОВАНИЕ',
    bodegaLabel: 'ВЫБРАТЬ ВИНОДЕЛЬНЮ',
    reservasHeading: 'БРОНИРОВАНИЕ',
    reservasText: 'Забронируйте столик, написав нам в WhatsApp или Instagram',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    footerText: 'La Pescadería Fish Market © 2026',
    notePromos: '*ГАРНИР НА ВЫБОР: Овощи на гриле - Салат - Картофель жареный или на сковороде',
    noteEntradas: 'СЕРВИСНЫЙ СБОР $2.000',
    notePesca: '*Выбор улова дня зависит от наличия',
    langSelectLabel: 'Выбрать язык',
    sectionHeadings: {
      'PROMOS': 'АКЦИИ', 'ENTRADAS': 'ЗАКУСКИ', 'PICADAS': 'ТАРЕЛКИ НА КОМПАНИЮ', 'PESCA': 'УЛОВ ДНЯ',
      'CAZUELAS': 'КАСУЭЛЫ', 'PAELLAS': 'ПАЭЛЬЯ', 'PASTAS': 'ПАСТА', 'ENSALADAS': 'САЛАТЫ',
      'POSTRES': 'ДЕСЕРТЫ', 'SIN ALCOHOL': 'БЕЗАЛКОГОЛЬНЫЕ', 'CON ALCOHOL': 'АЛКОГОЛЬНЫЕ',
      'COCTELERÍA': 'КОКТЕЙЛИ', 'PASTAS ADICIONALES': 'ДОПОЛНИТЕЛЬНЫЕ ПАСТЫ', 'ADICIONALES': 'ДОБАВКИ',
      'GUARNICIONES': 'ГАРНИРЫ', 'CLÁSICOS': 'КЛАССИКА', "VERMUT'S": 'ВЕРМУТЫ',
      'TÓNICOS': 'ДЖИН-ТОНИКИ', 'WHISKYS': 'ВИСКИ', 'CERVEZAS': 'ПИВО',
      'TINTOS': 'КРАСНЫЕ ВИНА', 'BLANCOS': 'БЕЛЫЕ ВИНА', 'ESPUMANTES': 'ИГРИСТЫЕ ВИНА'
    }
  },
  zh: {
    navCarta: '菜单',
    navBebidas: '饮品',
    navVinos: '葡萄酒',
    navReservas: '预订',
    bodegaLabel: '选择酒庄',
    reservasHeading: '预订',
    reservasText: '通过WhatsApp或Instagram联系我们进行预订',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    footerText: 'La Pescadería Fish Market © 2026',
    notePromos: '*可选配菜：烤蔬菜 - 沙拉 - 煎土豆或薯条',
    noteEntradas: '餐位费 $2,000',
    notePesca: '*每日鲜鱼的选择视供应情况而定',
    langSelectLabel: '选择语言',
    sectionHeadings: {
      'PROMOS': '优惠套餐', 'ENTRADAS': '前菜', 'PICADAS': '拼盘', 'PESCA': '每日鲜鱼',
      'CAZUELAS': '砂锅', 'PAELLAS': '海鲜饭', 'PASTAS': '意面', 'ENSALADAS': '沙拉',
      'POSTRES': '甜点', 'SIN ALCOHOL': '无酒精饮料', 'CON ALCOHOL': '酒精饮料',
      'COCTELERÍA': '鸡尾酒', 'PASTAS ADICIONALES': '意面加料', 'ADICIONALES': '加料',
      'GUARNICIONES': '配菜', 'CLÁSICOS': '经典款', "VERMUT'S": '味美思',
      'TÓNICOS': '金汤力', 'WHISKYS': '威士忌', 'CERVEZAS': '啤酒',
      'TINTOS': '红葡萄酒', 'BLANCOS': '白葡萄酒', 'ESPUMANTES': '起泡酒'
    }
  }
};

// Flags for the language dropdown. Native <select> can't hold SVG,
// so these render inside a custom dropdown built in script.js.
const languages = [
  {
    code: 'es',
    label: 'Español',
    flag: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#fff"/><rect width="24" height="5.33" fill="#75AADB"/><rect y="10.67" width="24" height="5.33" fill="#75AADB"/><circle cx="12" cy="8" r="2" fill="#FCBF49"/></svg>'
  },
  {
    code: 'en',
    label: 'English',
    flag: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#00247D"/><path d="M0,0 L24,16 M24,0 L0,16" stroke="#fff" stroke-width="3.2"/><path d="M0,0 L24,16 M24,0 L0,16" stroke="#CF142B" stroke-width="1.2"/><path d="M12,0 V16 M0,8 H24" stroke="#fff" stroke-width="5.4"/><path d="M12,0 V16 M0,8 H24" stroke="#CF142B" stroke-width="3"/></svg>'
  },
  {
    code: 'pt',
    label: 'Português',
    flag: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#009739"/><polygon points="12,2 22,8 12,14 2,8" fill="#FEDD00"/><circle cx="12" cy="8" r="3.2" fill="#012169"/></svg>'
  },
  {
    code: 'ru',
    label: 'Русский',
    flag: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#fff"/><rect y="5.33" width="24" height="5.33" fill="#0039A6"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/></svg>'
  },
  {
    code: 'zh',
    label: '中文',
    flag: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#DE2910"/><polygon points="4,1 5.05,3.9 8.18,3.9 5.66,5.7 6.6,8.6 4,6.9 1.4,8.6 2.34,5.7 -0.18,3.9 2.95,3.9" fill="#FFDE00"/></svg>'
  }
];

const menuTranslations = {
  en: {
    'PROMOS': [
      {n:'Promo 1 - Fried Calamari Rings',d:'Half portion of fried calamari rings + catch of the day with side* + 2 non-alcoholic drinks'},
      {n:'Promo 2 - Shrimp',d:'Half portion of shrimp + catch of the day with side* + 2 non-alcoholic drinks'},
      {n:'Promo 3 (To share, 4-5 people)',d:'1 portion of fried calamari rings + assorted catch of the day with side* + 4 non-alcoholic drinks'}
    ],
    'ENTRADAS': [
      {n:'Fried Calamari Rings',d:''},
      {n:'Hake Soufflé',d:''},
      {n:'Grilled Baby Squid',d:''},
      {n:'Breaded Shrimp',d:''},
      {n:'Grilled Shrimp',d:'Garlic butter - Herb oil - Avocado and mango'},
      {n:'Mussels Provençal',d:''},
      {n:'Breaded Cutlet with French Fries',d:''},
      {n:'Fish Empanada',d:''},
      {n:'Tiradito',d:'Based on the catch of the day'}
    ],
    'PICADAS': [
      {n:'Fried Seafood Platter',d:'For 2 - Fried calamari rings, hake soufflé, breaded shrimp'},
      {n:'Fried Seafood Platter',d:'For 4 - Fried calamari rings, hake soufflé, breaded shrimp'},
      {n:'Grilled Seafood Platter',d:'For 2 - Squid, baby squid, shrimp, mussels, vegetables'},
      {n:'Grilled Seafood Platter',d:'For 4 - Squid, baby squid, shrimp, mussels, vegetables'}
    ],
    'PESCA': [
      {n:'Hake Fillet',d:'with side'},
      {n:'Large Hake Fillet',d:'with side'},
      {n:'Breaded Hake Fillet',d:'with side'},
      {n:'Corvina Fillet',d:'with side'},
      {n:'Whiting Fillet',d:'with side'},
      {n:'Grouper Fillet',d:'with side'},
      {n:'Red Grouper Fillet',d:'with side'},
      {n:'Pompano Fillet',d:'with side'},
      {n:'Sea Bream Fillet',d:'with side'},
      {n:'Snook Fillet',d:'with side'},
      {n:'Argentine Anchovy Fillet',d:'with side'},
      {n:'Black Hake Fillet',d:'with side'},
      {n:'Pollock Fillet',d:'with side'},
      {n:'Grouper (Chernia) Fillet',d:'with side'},
      {n:'Sole Fillet',d:'with side'},
      {n:'White Salmon Fillet',d:'with side'},
      {n:'Pink Salmon Fillet',d:'with side'},
      {n:'Yellowtail Fillet',d:''},
      {n:'Oysters',d:'Fresh, with lime and sriracha'}
    ],
    'CAZUELAS': [
      {n:'Seafood Casserole',d:'Single portion'},
      {n:'Seafood Casserole',d:'For two'},
      {n:'Family Seafood Casserole',d:''}
    ],
    'PAELLAS': [
      {n:'Paella',d:'Single portion'},
      {n:'Paella',d:'For two'},
      {n:'Family Paella',d:''}
    ],
    'PASTAS': [
      {n:'Garofalo Italian Spaghetti',d:''},
      {n:'Garofalo Italian Spaghetti',d:'with squid ink'},
      {n:'Garofalo Italian Spaghetti',d:'Gluten-free'},
      {n:'Pink Salmon Raviolone',d:''},
      {n:'Ham and Cheese Sorrentinos',d:''},
      {n:'Gnocchi',d:''},
      {d:'ADDITIONAL PASTA',section:true},
      {n:'Filetto',d:'Italian tomato sauce'},
      {n:'Cream Sauce',d:''},
      {n:'Mixed',d:'Cream and filetto sauce'},
      {n:'With Seafood',d:''}
    ],
    'ENSALADAS': [
      {n:'Mixed Salad',d:'Lettuce, cherry tomatoes and onion'},
      {n:'Arugula, Parmesan and Cherry Tomatoes',d:''},
      {d:'ADD-ONS',section:true},
      {n:'Smoked Salmon',d:''},
      {n:'Red Onion',d:''},
      {n:'Carrot',d:''},
      {n:'Egg',d:''},
      {n:'Avocado',d:''},
      {n:'Mango',d:''},
      {n:'Lettuce',d:''},
      {d:'SIDES',section:true},
      {n:'Mashed Potatoes',d:''},
      {n:'French Fries',d:''},
      {n:'Grilled Vegetables',d:''}
    ],
    'POSTRES': [
      {n:'Brie Dessert',d:'Pumpkin and figs in syrup, quince and sweet potato jam, brie cheese'},
      {n:'Cheese and Jam',d:'Classic sweet potato and quince jam with cream cheese'},
      {n:'Tiramisu',d:''},
      {n:'Dulce de Leche Mousse',d:''},
      {n:'Chocolate Marquise',d:'With mascarpone ice cream and red berries'},
      {n:'Flan',d:'With dulce de leche and cream'}
    ],
    'SIN ALCOHOL': [
      {n:'Still Mineral Water',d:'500ml'},
      {n:'Sparkling Water',d:'500ml'},
      {n:'Flavored Water',d:'500ml'},
      {n:'Pepsi Line Canned Soda',d:''}
    ],
    'CON ALCOHOL': [
      {n:'Corona',d:'330ml'},
      {n:'Corona',d:'710ml'},
      {n:'Stella Artois',d:'Can'},
      {n:'Stella Artois',d:'1 liter'},
      {n:'Patagonia',d:'730ml'}
    ]
  },
  pt: {
    'PROMOS': [
      {n:'Promo 1 - Lulas à Milanesa',d:'Meia porção de lulas à milanesa + peixe do dia com acompanhamento* + 2 bebidas sem álcool'},
      {n:'Promo 2 - Camarões',d:'Meia porção de camarões + peixe do dia com acompanhamento* + 2 bebidas sem álcool'},
      {n:'Promo 3 (Para compartilhar, 4 a 5 pessoas)',d:'1 porção de lulas à milanesa + variedade de peixe do dia com acompanhamento* + 4 bebidas sem álcool'}
    ],
    'ENTRADAS': [
      {n:'Lulas à Milanesa',d:''},
      {n:'Suflê de Merluza',d:''},
      {n:'Lulinhas na Chapa',d:''},
      {n:'Camarões Empanados',d:''},
      {n:'Camarões na Chapa',d:'Ao alho - Azeite de ervas - Abacate e manga'},
      {n:'Mexilhões à Provençal',d:''},
      {n:'Bife à Milanesa com Batatas Fritas',d:''},
      {n:'Empanada de Peixe',d:''},
      {n:'Tiradito',d:'Conforme a pesca do dia'}
    ],
    'PICADAS': [
      {n:'Tábua de Frutos do Mar Fritos',d:'P/ 2 pessoas - Lulas à milanesa, suflê de merluza, camarões empanados'},
      {n:'Tábua de Frutos do Mar Fritos',d:'P/ 4 pessoas - Lulas à milanesa, suflê de merluza, camarões empanados'},
      {n:'Tábua de Frutos do Mar na Chapa',d:'P/ 2 pessoas - Lula, lulinhas, camarões, mexilhões, legumes'},
      {n:'Tábua de Frutos do Mar na Chapa',d:'P/ 4 pessoas - Lula, lulinhas, camarões, mexilhões, legumes'}
    ],
    'PESCA': [
      {n:'Filé de Merluza',d:'com acompanhamento'},
      {n:'Filé de Merluza Grande',d:'com acompanhamento'},
      {n:'Filé de Merluza Empanado',d:'com acompanhamento'},
      {n:'Filé de Corvina',d:'com acompanhamento'},
      {n:'Filé de Pescada',d:'com acompanhamento'},
      {n:'Filé de Garoupa',d:'com acompanhamento'},
      {n:'Filé de Garoupa Ruiva',d:'com acompanhamento'},
      {n:'Filé de Palombeta',d:'com acompanhamento'},
      {n:'Filé de Pargo',d:'com acompanhamento'},
      {n:'Filé de Robalo',d:'com acompanhamento'},
      {n:'Filé de Anchova',d:'com acompanhamento'},
      {n:'Filé de Merluza Negra',d:'com acompanhamento'},
      {n:'Filé de Bacalhau do Atlântico',d:'com acompanhamento'},
      {n:'Filé de Garoupa Verdadeira',d:'com acompanhamento'},
      {n:'Filé de Linguado',d:'com acompanhamento'},
      {n:'Filé de Salmão Branco',d:'com acompanhamento'},
      {n:'Filé de Salmão Rosa',d:'com acompanhamento'},
      {n:'Filé de Olho-de-boi',d:''},
      {n:'Ostras',d:'Frescas com limão e sriracha'}
    ],
    'CAZUELAS': [
      {n:'Caçarola de Frutos do Mar',d:'Individual'},
      {n:'Caçarola de Frutos do Mar',d:'P/ duas pessoas'},
      {n:'Caçarola Família',d:''}
    ],
    'PAELLAS': [
      {n:'Paella',d:'Individual'},
      {n:'Paella',d:'P/ duas pessoas'},
      {n:'Paella Família',d:''}
    ],
    'PASTAS': [
      {n:'Spaghetti Italiano Garofalo',d:''},
      {n:'Spaghetti Italiano Garofalo',d:'com tinta de lula'},
      {n:'Spaghetti Italiano Garofalo',d:'Sem glúten'},
      {n:'Ravioli Grande de Salmão Rosa',d:''},
      {n:'Sorrentinos de Presunto e Queijo',d:''},
      {n:'Nhoque',d:''},
      {d:'MASSAS ADICIONAIS',section:true},
      {n:'Filetto',d:'Molho de tomate italiano'},
      {n:'Molho Branco',d:''},
      {n:'Mista',d:'Molho branco e filetto'},
      {n:'Com Frutos do Mar',d:''}
    ],
    'ENSALADAS': [
      {n:'Salada Mista',d:'Alface, tomate-cereja e cebola'},
      {n:'Rúcula, Parmesão e Tomate-Cereja',d:''},
      {d:'ADICIONAIS',section:true},
      {n:'Salmão Defumado',d:''},
      {n:'Cebola Roxa',d:''},
      {n:'Cenoura',d:''},
      {n:'Ovo',d:''},
      {n:'Abacate',d:''},
      {n:'Manga',d:''},
      {n:'Alface',d:''},
      {d:'ACOMPANHAMENTOS',section:true},
      {n:'Purê de Batata',d:''},
      {n:'Batatas Fritas',d:''},
      {n:'Legumes Grelhados',d:''}
    ],
    'POSTRES': [
      {n:'Sobremesa de Brie',d:'Abóbora e figos em calda, doce de marmelo e batata-doce, queijo brie'},
      {n:'Queijo com Doce',d:'Clássico doce de batata-doce e marmelo com queijo cremoso'},
      {n:'Tiramisù',d:''},
      {n:'Mousse de Doce de Leite',d:''},
      {n:'Marquise de Chocolate',d:'Com sorvete de mascarpone e frutas vermelhas'},
      {n:'Pudim (Flan)',d:'Com doce de leite e creme'}
    ],
    'SIN ALCOHOL': [
      {n:'Água Mineral sem Gás',d:'500ml'},
      {n:'Água com Gás',d:'500ml'},
      {n:'Água Saborizada',d:'500ml'},
      {n:'Refrigerante em Lata Linha Pepsi',d:''}
    ],
    'CON ALCOHOL': [
      {n:'Corona',d:'330ml'},
      {n:'Corona',d:'710ml'},
      {n:'Stella Artois',d:'Lata'},
      {n:'Stella Artois',d:'1 litro'},
      {n:'Patagonia',d:'730ml'}
    ]
  },
  ru: {
    'PROMOS': [
      {n:'Промо 1 — Кальмары фри',d:'Половина порции жареных колец кальмара + улов дня с гарниром* + 2 безалкогольных напитка'},
      {n:'Промо 2 — Креветки',d:'Половина порции креветок + улов дня с гарниром* + 2 безалкогольных напитка'},
      {n:'Промо 3 (На компанию из 4–5 человек)',d:'1 порция жареных колец кальмара + ассорти из улова дня с гарниром* + 4 безалкогольных напитка'}
    ],
    'ENTRADAS': [
      {n:'Жареные кольца кальмара',d:''},
      {n:'Суфле из хека',d:''},
      {n:'Молодые кальмары на гриле',d:''},
      {n:'Креветки в панировке',d:''},
      {n:'Креветки на гриле',d:'В чесночном масле - Травяное масло - Авокадо и манго'},
      {n:'Мидии по-провансальски',d:''},
      {n:'Шницель с картофелем фри',d:''},
      {n:'Пирожок с рыбой (эмпанада)',d:''},
      {n:'Тирадито',d:'В зависимости от улова дня'}
    ],
    'PICADAS': [
      {n:'Ассорти из жареных морепродуктов',d:'На 2 персоны - кольца кальмара, суфле из хека, креветки в панировке'},
      {n:'Ассорти из жареных морепродуктов',d:'На 4 персоны - кольца кальмара, суфле из хека, креветки в панировке'},
      {n:'Ассорти из морепродуктов на гриле',d:'На 2 персоны - кальмар, молодые кальмары, креветки, мидии, овощи'},
      {n:'Ассорти из морепродуктов на гриле',d:'На 4 персоны - кальмар, молодые кальмары, креветки, мидии, овощи'}
    ],
    'PESCA': [
      {n:'Филе хека',d:'с гарниром'},
      {n:'Филе крупного хека',d:'с гарниром'},
      {n:'Филе хека в панировке',d:'с гарниром'},
      {n:'Филе горбыля (корвина)',d:'с гарниром'},
      {n:'Филе путассу',d:'с гарниром'},
      {n:'Филе групера',d:'с гарниром'},
      {n:'Филе рыжего групера',d:'с гарниром'},
      {n:'Филе паломета',d:'с гарниром'},
      {n:'Филе морского леща',d:'с гарниром'},
      {n:'Филе снука',d:'с гарниром'},
      {n:'Филе аргентинского анчоуса',d:'с гарниром'},
      {n:'Филе черного хека',d:'с гарниром'},
      {n:'Филе сайды',d:'с гарниром'},
      {n:'Филе черни (групер)',d:'с гарниром'},
      {n:'Филе камбалы (солеа)',d:'с гарниром'},
      {n:'Филе белого лосося',d:'с гарниром'},
      {n:'Филе розового лосося',d:'с гарниром'},
      {n:'Филе желтохвоста',d:''},
      {n:'Устрицы',d:'Свежие, с лаймом и соусом шрирача'}
    ],
    'CAZUELAS': [
      {n:'Касуэла из морепродуктов',d:'Порция на 1'},
      {n:'Касуэла из морепродуктов',d:'На 2 персоны'},
      {n:'Семейная касуэла',d:''}
    ],
    'PAELLAS': [
      {n:'Паэлья',d:'Порция на 1'},
      {n:'Паэлья',d:'На 2 персоны'},
      {n:'Семейная паэлья',d:''}
    ],
    'PASTAS': [
      {n:'Спагетти Garofalo (Италия)',d:''},
      {n:'Спагетти Garofalo (Италия)',d:'с чернилами кальмара'},
      {n:'Спагетти Garofalo (Италия)',d:'Без глютена'},
      {n:'Равиолоне с розовым лососем',d:''},
      {n:'Соррентинос с ветчиной и сыром',d:''},
      {n:'Ньокки',d:''},
      {d:'ДОПОЛНИТЕЛЬНЫЕ ПАСТЫ',section:true},
      {n:'Филетто',d:'Итальянский томатный соус'},
      {n:'Сливочный соус',d:''},
      {n:'Смешанный соус',d:'Сливочный и филетто'},
      {n:'С морепродуктами',d:''}
    ],
    'ENSALADAS': [
      {n:'Смешанный салат',d:'Салат латук, черри и лук'},
      {n:'Руккола, пармезан и томаты черри',d:''},
      {d:'ДОБАВКИ',section:true},
      {n:'Копченый лосось',d:''},
      {n:'Красный лук',d:''},
      {n:'Морковь',d:''},
      {n:'Яйцо',d:''},
      {n:'Авокадо',d:''},
      {n:'Манго',d:''},
      {n:'Салат латук',d:''},
      {d:'ГАРНИРЫ',section:true},
      {n:'Картофельное пюре',d:''},
      {n:'Картофель фри',d:''},
      {n:'Овощи на гриле',d:''}
    ],
    'POSTRES': [
      {n:'Десерт с сыром бри',d:'Тыква и инжир в сиропе, айвовый и батат-мармелад, сыр бри'},
      {n:'Сыр с мармеладом',d:'Классический мармелад из батата и айвы со сливочным сыром'},
      {n:'Тирамису',d:''},
      {n:'Мусс дульсе де лече',d:''},
      {n:'Шоколадный маркиз',d:'С мороженым маскарпоне и красными ягодами'},
      {n:'Флан',d:'С дульсе де лече и сливками'}
    ],
    'SIN ALCOHOL': [
      {n:'Минеральная вода без газа',d:'500мл'},
      {n:'Газированная вода',d:'500мл'},
      {n:'Ароматизированная вода',d:'500мл'},
      {n:'Газировка Pepsi в банке',d:''}
    ],
    'CON ALCOHOL': [
      {n:'Corona',d:'330мл'},
      {n:'Corona',d:'710мл'},
      {n:'Stella Artois',d:'Банка'},
      {n:'Stella Artois',d:'1 литр'},
      {n:'Patagonia',d:'730мл'}
    ]
  },
  zh: {
    'PROMOS': [
      {n:'优惠套餐1 - 炸鱿鱼圈',d:'半份炸鱿鱼圈 + 每日鲜鱼配配菜* + 2份不含酒精饮料'},
      {n:'优惠套餐2 - 虾',d:'半份虾 + 每日鲜鱼配配菜* + 2份不含酒精饮料'},
      {n:'优惠套餐3（4-5人分享）',d:'1份炸鱿鱼圈 + 每日鲜鱼拼盘配配菜* + 4份不含酒精饮料'}
    ],
    'ENTRADAS': [
      {n:'炸鱿鱼圈',d:''},
      {n:'无须鳕鱼舒芙蕾',d:''},
      {n:'铁板小鱿鱼',d:''},
      {n:'香炸虾',d:''},
      {n:'铁板虾',d:'蒜香黄油 - 香草油 - 牛油果配芒果'},
      {n:'普罗旺斯风味淡菜',d:''},
      {n:'炸肉排配薯条',d:''},
      {n:'炸鱼饺（恩帕纳达）',d:''},
      {n:'秘鲁风味生鱼片（蒂拉迪托）',d:'依据当日鲜鱼而定'}
    ],
    'PICADAS': [
      {n:'炸海鲜拼盘',d:'2人份 - 炸鱿鱼圈、无须鳕鱼舒芙蕾、香炸虾'},
      {n:'炸海鲜拼盘',d:'4人份 - 炸鱿鱼圈、无须鳕鱼舒芙蕾、香炸虾'},
      {n:'铁板海鲜拼盘',d:'2人份 - 鱿鱼、小鱿鱼、虾、淡菜、蔬菜'},
      {n:'铁板海鲜拼盘',d:'4人份 - 鱿鱼、小鱿鱼、虾、淡菜、蔬菜'}
    ],
    'PESCA': [
      {n:'无须鳕鱼排',d:'配配菜'},
      {n:'大无须鳕鱼排',d:'配配菜'},
      {n:'香炸无须鳕鱼排',d:'配配菜'},
      {n:'黄鱼排',d:'配配菜'},
      {n:'小无须鳕鱼排',d:'配配菜'},
      {n:'石斑鱼排',d:'配配菜'},
      {n:'红石斑鱼排',d:'配配菜'},
      {n:'鲳鱼排',d:'配配菜'},
      {n:'鲷鱼排',d:'配配菜'},
      {n:'狗鱼排',d:'配配菜'},
      {n:'阿根廷银汉鱼排',d:'配配菜'},
      {n:'黑无须鳕鱼排',d:'配配菜'},
      {n:'绿鳕鱼排',d:'配配菜'},
      {n:'珍宝石斑鱼排',d:'配配菜'},
      {n:'龙利鱼排',d:'配配菜'},
      {n:'白鲑鱼排',d:'配配菜'},
      {n:'粉鲑鱼排',d:'配配菜'},
      {n:'黄尾鰤鱼排',d:''},
      {n:'生蚝',d:'新鲜生蚝配青柠和是拉差辣酱'}
    ],
    'CAZUELAS': [
      {n:'海鲜砂锅',d:'单人份'},
      {n:'海鲜砂锅',d:'2人份'},
      {n:'家庭海鲜砂锅',d:''}
    ],
    'PAELLAS': [
      {n:'海鲜饭',d:'单人份'},
      {n:'海鲜饭',d:'2人份'},
      {n:'家庭海鲜饭',d:''}
    ],
    'PASTAS': [
      {n:'Garofalo意大利面',d:''},
      {n:'Garofalo意大利面',d:'墨鱼汁口味'},
      {n:'Garofalo意大利面',d:'无麸质'},
      {n:'粉鲑鱼方饺',d:''},
      {n:'火腿芝士方形饺',d:''},
      {n:'土豆疙瘩（Gnocchi）',d:''},
      {d:'意面加料',section:true},
      {n:'菲力托番茄酱',d:'意大利番茄酱'},
      {n:'奶油酱',d:''},
      {n:'混合酱',d:'奶油酱配番茄酱'},
      {n:'海鲜酱',d:''}
    ],
    'ENSALADAS': [
      {n:'混合沙拉',d:'生菜、圣女果和洋葱'},
      {n:'芝麻菜配帕玛森芝士和圣女果',d:''},
      {d:'加料',section:true},
      {n:'烟熏三文鱼',d:''},
      {n:'红洋葱',d:''},
      {n:'胡萝卜',d:''},
      {n:'鸡蛋',d:''},
      {n:'牛油果',d:''},
      {n:'芒果',d:''},
      {n:'生菜',d:''},
      {d:'配菜',section:true},
      {n:'土豆泥',d:''},
      {n:'薯条',d:''},
      {n:'烤蔬菜',d:''}
    ],
    'POSTRES': [
      {n:'布里芝士甜点',d:'糖浆南瓜和无花果，木瓜与红薯果酱，布里芝士'},
      {n:'芝士配果酱',d:'经典红薯木瓜果酱配奶油芝士'},
      {n:'提拉米苏',d:''},
      {n:'焦糖牛奶慕斯',d:''},
      {n:'巧克力侯爵蛋糕',d:'配马斯卡彭冰淇淋和红色浆果'},
      {n:'焦糖布丁（Flan）',d:'配焦糖牛奶酱和奶油'}
    ],
    'SIN ALCOHOL': [
      {n:'矿泉水（无气）',d:'500毫升'},
      {n:'气泡水',d:'500毫升'},
      {n:'调味水',d:'500毫升'},
      {n:'百事可乐罐装',d:''}
    ],
    'CON ALCOHOL': [
      {n:'Corona啤酒',d:'330毫升'},
      {n:'Corona啤酒',d:'710毫升'},
      {n:'Stella Artois啤酒',d:'罐装'},
      {n:'Stella Artois啤酒',d:'1升'},
      {n:'Patagonia啤酒',d:'730毫升'}
    ]
  }
};
