// Data extracted from the provided Canva site
const cartaSubs = ['PROMOS','ENTRADAS','PICADAS','PESCA','CAZUELAS','PAELLAS','PASTAS','ENSALADAS','POSTRES'];
const bebidasSubs = ['SIN ALCOHOL','CON ALCOHOL','COCTELERÍA'];
const vinosBodegas = ['CATENA ZAPATA','BODEGAS LÓPEZ','LOSANCE','LATITUD 33°','TILIA','MANOS NEGRAS','ZUCCARDI','BRESSIA','TERRAZAS','ALTOS','BARÓN B','CHANDON'];

const cartaItems = {
  'PROMOS': [{n:'PROMO 1 - RABAS',d:'1/2 Rabas + Pesca del día con guarnición + 2 bebidas sin alcohol',p:'$65.000'},{n:'PROMO 1 - RABAS (Individual)',d:'1/2 Rabas + Pesca del día con guarnición + 2 bebidas sin alcohol',p:'$38.000'},{n:'PROMO 1 - LANGOSTINOS',d:'1/2 Langostinos + Pesca del día con guarnición + 2 bebidas sin alcohol',p:'$75.000'},{n:'PROMO 1 - LANGOSTINOS (Individual)',d:'1/2 Langostinos + Pesca del día con guarnición + 2 bebidas sin alcohol',p:'$42.000'},{n:'PROMO 2 (Para 2-3 personas)',d:'Variedad de pesca del día con guarnición + 3 bebidas sin alcohol',p:'$90.000'},{n:'PROMO 3 (Para 4-5 personas)',d:'1/2 Rabas + Variedad de pesca del día con guarnición + 4 bebidas sin alcohol',p:'$120.000'}],
  'ENTRADAS': [{n:'Rabas',d:'1/2 porción',p:'$22.000'},{n:'Rabas',d:'1 porción',p:'$32.000'},{n:'Soufflé de Merluza',d:'1/2 porción',p:'$20.000'},{n:'Soufflé de Merluza',d:'1 porción',p:'$26.000'},{n:'Calamarettis a la Plancha',d:'1/2 porción',p:'$36.000'},{n:'Calamarettis a la Plancha',d:'1 porción',p:'$45.000'},{n:'Langostinos Rebozados',d:'1/2 porción',p:'$36.000'},{n:'Langostinos Rebozados',d:'1 porción',p:'$45.000'},{n:'Langostinos a la Plancha',d:'1/2 porción',p:'$36.000'},{n:'Langostinos a la Plancha',d:'1 porción - Al ajillo - Aceite de hierbas - Palta y mango',p:'$50.000'},{n:'Mejillones a la Provenzal',d:'1/2 porción',p:'$32.000'},{n:'Mejillones a la Provenzal',d:'1 porción',p:'$42.000'},{n:'Cayos de Vieira Rebozados',d:'1 porción',p:'$30.000'},{n:'Brocheta de Cayos de Vieira',d:'1 porción',p:'$30.000'},{n:'Papas Fritas',d:'1/2 porción',p:'$8.000'},{n:'Papas Fritas',d:'1 porción',p:'$10.000'},{n:'Milanesa con Papas Fritas',d:'1 porción',p:'$25.000'}],
  'PICADAS': [{n:'Picada de Mariscos Fritos',d:'P/ 2 personas - Rabas, Soufflé de Merluza, Langostinos Rebozados',p:'$68.000'},{n:'Picada de Mariscos Fritos',d:'P/ 3 personas - Rabas, Soufflé de Merluza, Langostinos Rebozados',p:'$90.000'},{n:'Picada de Mariscos Fritos + Postre + 3 Bebidas',d:'Combo completo',p:'$110.000'},{n:'Picada de Mariscos a la Plancha',d:'P/ 2 personas - Calamar, Calamarettis, Langostinos, Mejillones, Vegetales',p:'$80.000'},{n:'Picada de Mariscos a la Plancha',d:'P/ 3 personas - Calamar, Calamarettis, Langostinos, Mejillones, Vegetales',p:'$120.000'},{n:'Tiradito',d:'Según pesca del día - CONSULTAR',p:'Precio a consultar'}],
  'PESCA': [{n:'Filet de Merluza',d:'c/ guarnición',p:'P/1: $24.000 | P/2: $44.000'},{n:'Filet de Merluzón',d:'c/ guarnición',p:'P/1: $26.000 | P/2: $48.000'},{n:'Filet de Corvina',d:'c/ guarnición',p:'P/1: $28.000 | P/2: $52.000'},{n:'Filet de Pescadilla',d:'c/ guarnición',p:'P/1: $26.000 | P/2: $48.000'},{n:'Filet de Mero',d:'c/ guarnición',p:'P/1: $32.000 | P/2: $54.000'},{n:'Filet de Mero Rubio',d:'c/ guarnición',p:'P/1: $26.000 | P/2: $48.000'},{n:'Filet de Palometa',d:'c/ guarnición',p:'P/1: $26.000 | P/2: $48.000'},{n:'Filet de Besugo',d:'c/ guarnición',p:'P/1: $30.000 | P/2: $54.000'},{n:'Filet de Robalo',d:'c/ guarnición',p:'P/1: $32.000 | P/2: $54.000'},{n:'Filet de Anchoa de Banco',d:'c/ guarnición',p:'P/1: $40.000 | P/2: $58.000'},{n:'Filet de Merluza Negra',d:'c/ guarnición',p:'P/1: $60.000 | P/2: $80.000'},{n:'Filet de Abadejo',d:'c/ guarnición',p:'P/1: $45.000 | P/2: $60.000'},{n:'Filet de Chernia',d:'c/ guarnición',p:'P/1: $45.000 | P/2: $65.000'},{n:'Filet de Lenguado',d:'c/ guarnición',p:'P/1: $35.000 | P/2: $56.000'},{n:'Filet de Salmón Blanco',d:'c/ guarnición',p:'P/1: $35.000 | P/2: $56.000'},{n:'Filet de Salmón Rosado',d:'c/ guarnición',p:'P/1: $60.000 | P/2: $80.000'},{n:'Filet de Pez Limón',d:'c/ guarnición',p:'P/1: $60.000 | P/2: $80.000'},{n:'Ostras',d:'c/ guarnición',p:'P/1: $60.000'}],
  'CAZUELAS': [{n:'Cazuela',d:'Individual',p:'$40.000'},{n:'Cazuela',d:'P/ dos personas',p:'$60.000'},{n:'Cazuela Familiar',d:'',p:'$100.000'}],
  'PAELLAS': [{n:'Paella',d:'Individual',p:'$40.000'},{n:'Paella',d:'P/ dos personas',p:'$60.000'},{n:'Paella Familiar',d:'',p:'$100.000'}],
  'PASTAS': [{n:'Spaghetti Italiano Garofalo',d:'',p:'$20.000'},{n:'Spaghetti Italiano Garofalo',d:'c/ Tinta de Calamar',p:'$25.000'},{n:'Spaghetti Italiano Garofalo',d:'Sin TACC',p:'$20.000'},{n:'Raviolón de Salmón Rosado',d:'',p:'$20.000'},{n:'Sorrentinos de Jamón y Queso',d:'',p:'$16.000'},{n:'Ñoquis',d:'',p:'$25.000'},{n:'---',d:'PASTAS ADICIONALES',p:'',section:true},{n:'Filetto',d:'Tomate italiano',p:'$9.000'},{n:'Crema',d:'',p:'$8.000'},{n:'Mixta',d:'Crema y Filetto',p:'$9.000'},{n:'Con Mariscos',d:'',p:'$15.000'}],
  'ENSALADAS': [{n:'Ensalada Mixta',d:'Lechuga, Tomates Cherry y Cebolla',p:'$8.000'},{n:'Rúcula, Parmesano y Tomates Cherry',d:'',p:'$12.000'},{n:'---',d:'ADICIONALES',p:'',section:true},{n:'Salmón Ahumado',d:'',p:'$15.000'},{n:'Cebolla Morada',d:'',p:'$1.200'},{n:'Zanahoria',d:'',p:'$1.200'},{n:'Huevo',d:'',p:'$2.000'},{n:'Palta',d:'',p:'$3.800'},{n:'Mango',d:'',p:'$4.500'},{n:'Lechuga',d:'',p:'$1.200'}],
  'POSTRES': [{n:'Postre Brie',d:'Zapallo e higos en almíbar, dulce de membrillo y batata, queso brie',p:'$14.000'},{n:'Queso y Dulce',d:'Clásico dulce de batata y membrillo con queso cremoso',p:'$8.000'},{n:'Tiramisú',d:'',p:'$18.000'},{n:'Fruta Flambeada con Americano',d:'',p:'$15.000'},{n:'Mousse de Dulce de Leche',d:'',p:'$15.000'},{n:'Marquis de Chocolate',d:'Con helado de mascarpone y frutos rojos',p:'$15.000'}]
};

const bebidasItems = {
  'SIN ALCOHOL': [
    {n:'Agua Mineral',d:'500ml',p:'$4.300'},
    {n:'Agua con Gas',d:'500ml',p:'$4.300'},
    {n:'Agua Saborizada',d:'500ml',p:'$4.300'},
    {n:'Gaseosa Lata Línea Pepsi',d:'',p:'$3.300'}],
  'CON ALCOHOL': [{n:'Corona',d:'330ml',p:'$6.000'},{n:'Corona',d:'710ml',p:'$10.000'},{n:'Stella Artois',d:'Lata',p:'$6.000'},{n:'Stella Artois',d:'1 litro',p:'$10.000'},{n:'Patagonia',d:'730ml',p:'$10.000'}],
  'COCTELERÍA': [
    {n:'---',d:'TÓNICOS',p:'',section:true},
    {n:'GIN SUR',d:'',p:'$8.000'},{n:'BOMBAY',d:'',p:'$12.000'},{n:'BULLDOG',d:'',p:'$10.000'},{n:'TANQUERAY',d:'',p:'$12.000'},{n:'HENDRICK\'S',d:'',p:'$14.000'},
    {n:'---',d:'WHISKYS',p:'',section:true},
    {n:'JAMESON',d:'',p:'$10.000'},{n:'JIMBEAM',d:'',p:'$11.000'},{n:'JACK DANIEL\'S',d:'',p:'$15.000'},{n:'BLACK LABEL',d:'',p:'$15.000'},{n:'GENCADAM',d:'',p:'$18.000'},{n:'TOMINTOUL 10 AÑOS',d:'',p:'$22.000'},{n:'GLENALLACHIE 12 AÑOS',d:'',p:'$35.000'},
    {n:'---',d:'CERVEZAS',p:'',section:true},
    {n:'CORONA',d:'330 ml',p:'$6.000'},{n:'CORONA',d:'710 ml',p:'$10.000'},{n:'STELLA',d:'Lata',p:'$6.000'},{n:'STELLA',d:'1 litro',p:'$10.000'},{n:'PATAGONIA',d:'730 ml',p:'$10.000'}
  ]
};

const vinosItems = {
  'CATENA ZAPATA': [
    {n:'---',d:'TINTOS',p:'',section:true},
    {n:'Álamos Malbec',d:'Mendoza',p:'$16.500'},
    {n:'Álamos Malbec Reserve',d:'Mendoza',p:'$17.000'},
    {n:'Álamos Pinot Noir Reserve',d:'Mendoza',p:'$17.000'},
    {n:'Nicasia Malbec',d:'Mendoza',p:'$17.850'},
    {n:'Nicasia Cabernet Franc',d:'Mendoza',p:'$17.850'},
    {n:'Saint Felicien Malbec',d:'Mendoza',p:'$21.700'},
    {n:'Saint Felicien Cabernet Franc',d:'Mendoza',p:'$21.700'},
    {n:'Saint Felicien Cabernet Merlot',d:'Mendoza',p:'$21.700'},
    {n:'Saint Felicien Pinot Noir',d:'Mendoza',p:'$21.700'},
    {n:'Saint Felicien Felipe Noé Malbec',d:'Mendoza',p:'$29.900'},
    {n:'DV Catena Cabernet-Malbec',d:'Mendoza',p:'$24.100'},
    {n:'DV Catena Malbec',d:'Mendoza',p:'$27.700'},
    {n:'DV Catena Cabernet',d:'Mendoza',p:'$27.700'},
    {n:'DV Catena Pinot',d:'Mendoza',p:'$40.400'},
    {n:'DV Catena La Pirámide',d:'Cabernet-Sauvignon',p:'$49.350'},
    {n:'DV Catena Tinto Histórico Malbec Petit',d:'Mendoza',p:'$39.300'},
    {n:'DV Catena Adrianna Vineyards Malbec',d:'Mendoza',p:'$40.400'},
    {n:'DV Catena Domingo',d:'Cabernet-Sauvignon',p:'$40.400'},
    {n:'DV Catena Garnacha',d:'Mendoza',p:'$42.800'},
    {n:'Angélica Cabernet-Sauvignon',d:'Mendoza',p:'$40.400'},
    {n:'Angélica Zapata Malbec',d:'Mendoza',p:'$59.300'},
    {n:'Angélica Zapata Cabernet Franc',d:'Mendoza',p:'$43.800'},
    {n:'El Enemigo Malbec',d:'Mendoza',p:'$41.000'},
    {n:'El Enemigo Cabernet Franc',d:'Mendoza',p:'$46.200'},
    {n:'Gran Enemigo Cosecha 2017',d:'Mendoza',p:'$86.100'},
    {n:'Gran Enemigo Gualtallary 2020',d:'Mendoza',p:'$86.600'},
    {n:'Gran Enemigo Chacayes 2020',d:'Mendoza',p:'$86.600'},
    {n:'DV Catena Divina Italia Malbec',d:'Mendoza',p:'$41.500'},
    {n:'DV Catena Tributo Antártida Arg. Malbec',d:'Mendoza',p:'$43.050'},
    {n:'Catena Zapata Malbec Argentino',d:'Mendoza',p:'$105.000'},
    {n:'Catena Zapata Estiba Reservada Cosecha 2017',d:'Mendoza',p:'$525.000'},
    {n:'Catena Zapata Birth of Cabernet',d:'Mendoza',p:'$115.500'},
    {n:'Nicasia Grand Blend',d:'Cabernet-Malbec',p:'$19.900'},
    {n:'---',d:'BLANCOS',p:'',section:true},
    {n:'Álamos Chardonnay',d:'Mendoza',p:'$16.200'},
    {n:'Álamos Moscatel',d:'Mendoza',p:'$16.200'},
    {n:'Álamos Sauvignon Blanc',d:'Mendoza',p:'$16.200'},
    {n:'Álamos Rosé',d:'Mendoza',p:'$16.200'},
    {n:'Álamos Dulce Natural',d:'Mendoza',p:'$16.200'},
    {n:'Nicasia Viognier Vineyards',d:'Mendoza',p:'$17.800'},
    {n:'Saint Felicien Chardonnay',d:'Mendoza',p:'$21.700'},
    {n:'Saint Felicien Rosé',d:'Mendoza',p:'$52.500'},
    {n:'Angélica Zapata Chardonnay',d:'Mendoza',p:'$40.000'},
    {n:'DV Catena Chardonnay',d:'Mendoza',p:'$28.800'},
    {n:'DV Catena Blanco Histórico',d:'Mendoza',p:'$43.800'},
    {n:'El Enemigo Chardonnay',d:'Mendoza',p:'$40.000'},
    {n:'---',d:'ESPUMANTES',p:'',section:true},
    {n:'Álamos Extra Brut',d:'Mendoza',p:'$18.400'},
    {n:'Saint Felicien Nature',d:'Mendoza',p:'$27.300'},
    {n:'DV Catena Nature',d:'Mendoza',p:'$40.900'},
    {n:'Nicasia Viognier Doux',d:'Mendoza',p:'$18.400'}
  ],
  'BODEGAS LÓPEZ': [
    {n:'---',d:'TINTOS',p:'',section:true},
    {n:'Casona Malbec',d:'Mendoza',p:'$16.500'},
    {n:'Chateau Vieux Malbec',d:'Mendoza',p:'$17.000'},
    {n:'Chateau Vieux Tinto Gran Reserva',d:'Mendoza',p:'$25.000'},
    {n:'Chateau Vieux Tinto Pinot Noir',d:'Selección masal',p:'$30.000'},
    {n:'Montchenot Petit Reserva',d:'Mendoza',p:'$30.000'},
    {n:'Montchenot Blend 5 Años',d:'Mendoza',p:'$24.000'},
    {n:'Montchenot Blend 10 Años',d:'Mendoza',p:'$38.000'},
    {n:'Montchenot 15 Años',d:'Mendoza',p:'$79.800'},
    {n:'Montchenot 20 Años Gran Reserva',d:'Mendoza',p:'$93.500'},
    {n:'Montchenot Gran Reserva 1987',d:'Mendoza',p:'$220.000'},
    {n:'Sangre de Júpiter Cabernet Franc',d:'Mendoza',p:'$35.000'},
    {n:'Sangre de Júpiter Malbec',d:'Mendoza',p:'$35.000'},
    {n:'Sangre de Júpiter Pinot Noir/Sangiovese',d:'Mendoza',p:'$35.000'},
    {n:'---',d:'BLANCOS',p:'',section:true},
    {n:'Casona Chardonnay',d:'Mendoza',p:'$14.000'},
    {n:'Casona Rosé',d:'Mendoza',p:'$14.000'},
    {n:'Chateau Vieux Chardonnay',d:'Mendoza',p:'$16.500'},
    {n:'Chateau Vieux Chardonnay Gran Reserva',d:'Mendoza',p:'$24.800'},
    {n:'López Dulce Natural',d:'Mendoza',p:'$15.000'},
    {n:'---',d:'ESPUMANTES',p:'',section:true},
    {n:'Montchenot Brut Nature',d:'Mendoza',p:'$27.500'},
    {n:'Montchenot Brut Nature Rosé',d:'Mendoza',p:'$25.300'},
    {n:'Montchenot Extra Brut',d:'Mendoza',p:'$18.700'},
    {n:'---',d:'BODEGA AMARAL',p:'',section:true},
    {n:'Amaral Pinot Noir',d:'Mendoza',p:'$30.000'},
    {n:'Amaral Sauvignon Blanc',d:'Mendoza',p:'$26.000'}
  ],
  'LOSANCE': [
    {n:'---',d:'TINTOS',p:'',section:true},
    {n:'Losance Malbec',d:'Mendoza',p:'$27.000'},
    {n:'Losance Piú Pinot Noir',d:'Mendoza',p:'$25.000'},
    {n:'---',d:'BLANCOS',p:'',section:true},
    {n:'Losance Chenin',d:'Mendoza',p:'$20.000'},
    {n:'Losance Riesling',d:'Mendoza',p:'$20.000'}
  ],
  'LATITUD 33°': [
    {n:'---',d:'TINTOS',p:'',section:true},
    {n:'Latitud 33º Cabernet Sauvignon',d:'Mendoza',p:'$16.200'},
    {n:'Latitud 33º Malbec',d:'Mendoza',p:'$16.200'},
    {n:'---',d:'BLANCOS',p:'',section:true},
    {n:'Latitud 33º Sauvignon Blanc',d:'Mendoza',p:'$16.200'},
    {n:'Latitud 33º Chardonnay',d:'Mendoza',p:'$16.200'}
  ],
  'TILIA': [
    {n:'---',d:'TINTOS',p:'',section:true},
    {n:'Tilia Orgánico Malbec',d:'Mendoza',p:'$22.000'},
    {n:'Tilia Orgánico Cabernet Sauvignon',d:'Mendoza',p:'$22.000'},
    {n:'---',d:'BLANCOS',p:'',section:true},
    {n:'Tilia Orgánico Chenin',d:'Mendoza',p:'$22.000'},
    {n:'Tilia Orgánico Chardonnay',d:'Mendoza',p:'$22.000'}
  ],
  'MANOS NEGRAS': [
    {n:'---',d:'TINTOS',p:'',section:true},
    {n:'Manos Negras Malbec',d:'Patagonia',p:'$18.500'},
    {n:'Manos Negras Pinot Noir',d:'Patagonia',p:'$18.000'},
    {n:'Manos Negras Red Soil Pinot Noir',d:'Patagonia',p:'$23.000'},
    {n:'Manos Negras Artesano Malbec',d:'Patagonia',p:'$32.000'},
    {n:'Manos Negras Artesano Pinot Noir',d:'Patagonia',p:'$34.000'},
    {n:'Manos Negras Stone Soil Malbec',d:'Patagonia',p:'$32.000'},
    {n:'---',d:'BLANCOS',p:'',section:true},
    {n:'Manos Negras Chardonnay',d:'Patagonia',p:'$18.000'},
    {n:'Manos Negras Stone Soil de Blancas',d:'Semillón, Chardonnay, Sauvignon Blanc',p:'$32.000'}
  ],
  'ZUCCARDI': [
    {n:'---',d:'TINTOS',p:'',section:true},
    {n:'Alambrado Malbec',d:'Valle de Uco',p:'$19.000'},
    {n:'Alambrado Cabernet Franc',d:'Valle de Uco',p:'$19.000'},
    {n:'Gran Alambrado Malbec - Cabernet',d:'Valle de Uco',p:'$21.000'},
    {n:'Gran Alambrado Malbec',d:'Valle de Uco',p:'$21.000'},
    {n:'Gran Alambrado Cabernet',d:'Valle de Uco',p:'$21.000'},
    {n:'Zuccardi Serie A Malbec',d:'Valle de Uco',p:'$28.000'},
    {n:'Zuccardi Serie A Bonarda',d:'Valle de Uco',p:'$28.000'},
    {n:'Zuccardi Q Malbec',d:'1500ml',p:'$82.200'},
    {n:'Zuccardi Q Malbec',d:'750ml',p:'$35.000'},
    {n:'Zuccardi Q Cabernet Franc',d:'750ml',p:'$35.000'},
    {n:'Zuccardi Tinto de Familia',d:'Valle de Uco',p:'$65.000'},
    {n:'Jose Zuccardi Malbec',d:'Valle de Uco',p:'$66.600'},
    {n:'Tito Zuccardi',d:'Valle de Uco',p:'$44.300'},
    {n:'Polígonos Malbec Altamira',d:'1500ml',p:'$100.000'},
    {n:'Polígonos Gualtallary Cabernet Franc',d:'Valle de Uco',p:'$42.000'},
    {n:'Polígonos Cabernet Franc San Pablo',d:'Valle de Uco',p:'$42.000'},
    {n:'Polígonos Cabernet Franc Altamira',d:'Valle de Uco',p:'$42.000'},
    {n:'---',d:'BLANCOS',p:'',section:true},
    {n:'Zuccardi Serie A Torrontés',d:'Valle de Uco',p:'$28.000'},
    {n:'Zuccardi Serie A Chardonnay',d:'Valle de Uco',p:'$28.000'},
    {n:'Zuccardi Q Chardonnay',d:'Valle de Uco',p:'$35.000'},
    {n:'Polígonos Semillón Tupungato',d:'Valle de Uco',p:'$42.000'},
    {n:'Polígonos Verdejo San Pablo',d:'Valle de Uco',p:'$42.000'},
    {n:'Polígonos Riesling San Pablo',d:'Valle de Uco',p:'$42.000'},
    {n:'Polígonos Sauvignon Blanc Tupungato',d:'Valle de Uco',p:'$42.000'},
    {n:'Polígonos Albariño San Pablo',d:'Valle de Uco',p:'$42.000'},
    {n:'Santa Julia Chenin Lata',d:'',p:'$8.000'},
    {n:'Santa Julia Rosé Lata',d:'',p:'$8.000'},
    {n:'---',d:'ESPUMANTES',p:'',section:true},
    {n:'Alambrado Blanc de Blancs',d:'Valle de Uco',p:'$35.000'},
    {n:'Alma 4 Pinot Chardonnay',d:'Espumante',p:'$30.000'},
    {n:'Alma 4 Pinot Rosé',d:'Espumante',p:'$30.000'},
    {n:'Alma 4 Viognier',d:'Espumante',p:'$30.000'}
  ],
  'BRESSIA': [
    {n:'---',d:'TINTOS',p:'',section:true},
    {n:'Bressia Monteagrelo Malbec',d:'Mendoza',p:'$35.000'},
    {n:'Bressia Monteagrelo Syrah',d:'Mendoza',p:'$35.000'},
    {n:'Bressia Monteagrelo Cabernet Franc',d:'Mendoza',p:'$35.000'},
    {n:'Bressia Profundo Blend',d:'Mendoza',p:'$52.000'},
    {n:'Bressia Piel Negra Pinot Noir',d:'Mendoza',p:'$65.000'},
    {n:'Bressia Conjuro Blend',d:'Mendoza',p:'$95.000'},
    {n:'Bressia Última Hoja',d:'Mendoza',p:'$176.000'},
    {n:'Bressia Malbec DOC Luján de Cuyo',d:'Mendoza',p:'$200.000'},
    {n:'---',d:'BLANCOS',p:'',section:true},
    {n:'Bressia Sylvestra Pinot Noir Rosé',d:'Mendoza',p:'$21.000'},
    {n:'Bressia Sylvestra Torrontés',d:'Mendoza',p:'$21.000'},
    {n:'Lágrima Canela Blend',d:'Semillón - Chardonnay',p:'$52.000'},
    {n:'---',d:'ESPUMANTES',p:'',section:true},
    {n:'Bressia Royale Espumante',d:'Mendoza',p:'$45.000'}
  ],
  'TERRAZAS': [
    {n:'---',d:'TINTOS',p:'',section:true},
    {n:'Terrazas de los Andes Grand Malbec',d:'Mendoza',p:'$57.200'},
    {n:'Terrazas de los Andes Origen - Las Compuertas Malbec',d:'Mendoza',p:'$22.000'},
    {n:'Terrazas de los Andes Reserva Malbec Rosé',d:'Mendoza',p:'$17.600'},
    {n:'Terrazas de los Andes Reserva Malbec',d:'Mendoza',p:'$17.600'},
    {n:'---',d:'BLANCOS',p:'',section:true},
    {n:'Terrazas Grand Chardonnay',d:'Mendoza',p:'$57.200'}
  ],
  'ALTOS': [
    {n:'---',d:'TINTOS',p:'',section:true},
    {n:'Altos del Plata Malbec',d:'Mendoza',p:'$14.000'},
    {n:'---',d:'BLANCOS',p:'',section:true},
    {n:'Altos del Plata Chardonnay',d:'Mendoza',p:'$14.000'}
  ],
  'BARÓN B': [
    {n:'---',d:'ESPUMANTES',p:'',section:true},
    {n:'Barón B Extra Brut - Cuvée Spéciale',d:'Mendoza',p:'$50.000'},
    {n:'Barón B Brut Nature - Cuvée Millésimée',d:'Mendoza',p:'$65.000'}
  ],
  'CHANDON': [
    {n:'---',d:'ESPUMANTES',p:'',section:true},
    {n:'Chandon Cuvée Reserve Blanc de Noirs',d:'Mendoza',p:'$38.000'},
    {n:'Chandon Brut Nature',d:'Mendoza',p:'$35.000'},
    {n:'Chandon Extra Brut',d:'Mendoza',p:'$32.000'},
    {n:'Chandon Rosé',d:'Mendoza',p:'$32.000'},
    {n:'Chandon Moët Imperial',d:'Mendoza',p:'$270.000'},
    {n:'Chandon Cliq Quot',d:'Mendoza',p:'$280.000'}
  ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Nav elements
    const mainNavItems = document.querySelectorAll('#main-menu li');
    const sections = document.querySelectorAll('.menu-section');
    
    // Sub-nav containers
    const subMenuCarta = document.getElementById('sub-menu');
    const subMenuBebidas = document.getElementById('sub-menu-bebidas');
    
    // Content containers
    const cartaContent = document.getElementById('carta-content');
    const bebidasContent = document.getElementById('bebidas-content');
    const vinosContent = document.getElementById('vinos-content');
    const bodegaSelect = document.getElementById('bodega-select');

    let currentSubs = { carta: 'PROMOS', bebidas: 'SIN ALCOHOL', vinos: 'CATENA ZAPATA' };

    // Function to render items
    function renderItems(items, container, sectionName = '', subName = '') {
        container.innerHTML = '';
        
        // Add note for PROMOS section
        if (sectionName === 'carta' && subName === 'PROMOS') {
            const note = document.createElement('div');
            note.className = 'info-card';
            note.innerHTML = '<p>*GUARNICIONES A ELECCIÓN: Vegetales grillados - Ensalada - Papas a la plancha o fritas</p>';
            container.appendChild(note);
        }
        
        // Add note for PESCA section
        if (sectionName === 'carta' && subName === 'PESCA') {
            const note = document.createElement('div');
            note.className = 'info-card';
            note.innerHTML = '<p>*La selección de la pesca del día está sujeta a disponibilidad</p>';
            container.appendChild(note);
        }

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'items-grid';
        
        items.forEach(item => {
            if (item.section) {
                const heading = document.createElement('div');
                heading.className = 'category-heading';
                heading.innerHTML = `<h2>${item.d}</h2><div class="heading-line"></div>`;
                itemsGrid.appendChild(heading);
            } else {
                const card = document.createElement('div');
                card.className = 'menu-card';
                card.innerHTML = `
                    <div class="card-info">
                        <h3 class="card-title">${item.n}</h3>
                        ${item.d ? `<p class="card-desc">${item.d}</p>` : ''}
                    </div>
                    <div class="card-price">${item.p}</div>
                `;
                itemsGrid.appendChild(card);
            }
        });
        
        container.appendChild(itemsGrid);
    }

    // Function to render sub-menus
    function renderSubMenu(container, categories, sectionKey) {
        container.innerHTML = '';
        categories.forEach(cat => {
            const li = document.createElement('li');
            li.textContent = cat;
            li.dataset.category = cat;
            if (cat === currentSubs[sectionKey]) {
                li.classList.add('active');
            }
            li.addEventListener('click', () => {
                const siblings = container.querySelectorAll('li');
                siblings.forEach(s => s.classList.remove('active'));
                li.classList.add('active');
                currentSubs[sectionKey] = cat;
                
                if (sectionKey === 'carta') {
                    renderItems(cartaItems[cat], cartaContent, sectionKey, cat);
                } else if (sectionKey === 'bebidas') {
                    renderItems(bebidasItems[cat], bebidasContent, sectionKey, cat);
                }
            });
            container.appendChild(li);
        });
    }

    // Initialize Sub-menus
    renderSubMenu(subMenuCarta, cartaSubs, 'carta');
    renderSubMenu(subMenuBebidas, bebidasSubs, 'bebidas');
    
    // Initialize Vinos select
    if (bodegaSelect) {
        bodegaSelect.innerHTML = '';
        vinosBodegas.forEach(bodega => {
            const option = document.createElement('option');
            option.value = bodega;
            option.textContent = bodega;
            if (bodega === currentSubs.vinos) {
                option.selected = true;
            }
            bodegaSelect.appendChild(option);
        });

        bodegaSelect.addEventListener('change', (e) => {
            currentSubs.vinos = e.target.value;
            renderItems(vinosItems[currentSubs.vinos], vinosContent, 'vinos', currentSubs.vinos);
        });
    }

    // Initial render
    renderItems(cartaItems[currentSubs.carta], cartaContent, 'carta', currentSubs.carta);
    renderItems(bebidasItems[currentSubs.bebidas], bebidasContent, 'bebidas', currentSubs.bebidas);
    if (vinosBodegas.length > 0) {
        renderItems(vinosItems[currentSubs.vinos], vinosContent, 'vinos', currentSubs.vinos);
    }

    // Main Navigation Logic
    mainNavItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all main nav items and sections
            mainNavItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active-section'));
            
            // Add active class to clicked item and corresponding section
            item.classList.add('active');
            const targetSection = document.getElementById(item.dataset.tab);
            if (targetSection) {
                targetSection.classList.add('active-section');
            }
            // Scroll to top of content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
