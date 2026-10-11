export interface Crop {
  slug: string;
  name: string;
  scientificName: string;
  categoryId: string;
  category: string;
  shortDescription: string;
  overview: string;
  characteristics: string[];
  season: string;
  growingSeason: string;
  suitableConditions: string;
  conditions: string[];
  varieties: { name: string; description: string }[];
  image: string;
  featured: boolean;
  galleryImages: string[];
}

export const crops: Crop[] = [
  {
    slug: 'maize',
    name: 'Maize',
    scientificName: 'Zea mays',
    categoryId: 'cereals',
    category: 'Cereals & Grains',
    shortDescription: 'Versatile cereal grain grown across diverse climates for food, feed, and industrial use.',
    overview:
      'Maize is one of the most widely cultivated cereal crops in the world, valued for its adaptability across tropical, subtropical, and temperate regions. It serves as a staple food, animal feed, and a raw material for numerous industrial products. Our maize seed portfolio includes varieties suited to different growing conditions and end-use requirements.',
    characteristics: [
      'Adapts to a wide range of soil types from sandy loam to clay',
      'Day-length sensitive flowering suited to specific latitudes',
      'High biomass production with strong stalk strength',
      'Responds well to balanced nutrient management',
    ],
    season: 'Kharif / Spring',
    growingSeason:
      'Maize is primarily a warm-season crop sown at the onset of the monsoon. It requires 90–120 days from sowing to harvest depending on the variety and climate. In regions with irrigation, a spring crop is also feasible.',
    suitableConditions: 'Well-drained loamy soils with good organic matter; pH 5.5–7.5',
    conditions: [
      'Optimal temperature: 18–30°C during growth',
      'Annual rainfall of 500–800 mm or equivalent irrigation',
      'Well-drained sandy loam to clay loam soils',
      'Full sun exposure with minimal shading',
    ],
    varieties: [
      { name: 'Pioneer', description: 'High-biomass hybrid suited for grain and silage' },
      { name: 'Dekalb', description: 'Drought-tolerant hybrid for rainfed conditions' },
      { name: 'Local Yellow', description: 'Open-pollinated variety for traditional cultivation' },
    ],
    image: 'https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
    galleryImages: [
      'https://images.pexels.com/photos/38921291/pexels-photo-38921291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/20234940/pexels-photo-20234940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/18005301/pexels-photo-18005301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'wheat',
    name: 'Wheat',
    scientificName: 'Triticum aestivum',
    categoryId: 'cereals',
    category: 'Cereals & Grains',
    shortDescription: 'Staple cereal grain and one of the most important food crops globally.',
    overview:
      'Wheat is a primary staple cereal grown in temperate and subtropical regions. It is the main source of carbohydrates and protein for a significant portion of the global population. Our wheat seed portfolio includes both bread and durum types suited to different agro-climatic conditions.',
    characteristics: [
      'Cool-season crop with good frost tolerance during vegetative stage',
      'Moderate water requirement compared to other cereals',
      'Responsive to nitrogen management for grain protein',
      'Suitable for both irrigated and rainfed cultivation',
    ],
    season: 'Rabi (Winter)',
    growingSeason:
      'Wheat is sown in late autumn and harvested in spring. The crop cycle ranges from 110 to 150 days. It requires cool temperatures during tillering and warm, dry conditions during grain filling.',
    suitableConditions: 'Fertile loam or clay loam soils; pH 6.0–7.5',
    conditions: [
      'Optimal temperature: 10–25°C during growth',
      'Rainfall of 400–600 mm or 4–6 irrigations',
      'Well-drained loamy soils with good fertility',
      'Cool, sunny weather during grain filling',
    ],
    varieties: [
      { name: 'HD-2967', description: 'High-yielding bread wheat with good rust resistance' },
      { name: 'PBW-343', description: 'Popular variety for irrigated northwestern plains' },
      { name: 'HI-8759', description: 'Durum wheat for pasta and semolina production' },
    ],
    image: 'https://images.pexels.com/photos/5452386/pexels-photo-5452386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
    galleryImages: [
      'https://images.pexels.com/photos/7891849/pexels-photo-7891849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/32203472/pexels-photo-32203472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12932070/pexels-photo-12932070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'rice',
    name: 'Rice',
    scientificName: 'Oryza sativa',
    categoryId: 'cereals',
    category: 'Cereals & Grains',
    shortDescription: 'Primary staple cereal for over half the global population.',
    overview:
      'Rice is the most important staple food crop for a majority of the world population, particularly in Asia. It is cultivated both as irrigated lowland and rainfed upland crop. Our rice seed portfolio includes varieties for different ecosystems including irrigated, rainfed, and upland conditions.',
    characteristics: [
      'Semi-aquatic growth habit adapted to flooded cultivation',
      'Photoperiod sensitivity in traditional varieties',
      'Tillering capacity determines yield potential',
      'Requires warm, humid conditions throughout growth',
    ],
    season: 'Kharif / Rabi',
    growingSeason:
      'Rice is sown in the monsoon season and can also be grown as an irrigated winter crop. The duration ranges from 110 to 160 days depending on the variety and ecosystem.',
    suitableConditions: 'Clay loam soils with good water retention; pH 5.5–6.5',
    conditions: [
      'Optimal temperature: 22–32°C throughout growth',
      'High water requirement: 1,000–1,500 mm or flooded fields',
      'Clay and clay-loam soils with good puddling capacity',
      'Humid climate with adequate sunshine',
    ],
    varieties: [
      { name: 'IR-64', description: 'Widely grown variety with good grain quality' },
      { name: 'Basmati 370', description: 'Aromatic long-grain variety for premium markets' },
      { name: 'BPT-5204', description: 'Fine-grain variety suited to irrigated ecosystems' },
    ],
    image: 'https://images.pexels.com/photos/2131921/pexels-photo-2131921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
    galleryImages: [
      'https://images.pexels.com/photos/7206100/pexels-photo-7206100.png?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/15994341/pexels-photo-15994341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/19549654/pexels-photo-19549654.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'sorghum',
    name: 'Sorghum',
    scientificName: 'Sorghum bicolor',
    categoryId: 'cereals',
    category: 'Cereals & Grains',
    shortDescription: 'Drought-tolerant cereal for grain and dual-purpose forage use.',
    overview:
      'Sorghum is a resilient cereal crop that thrives in semi-arid conditions where other cereals struggle. It is used for food, feed, and increasingly as a bioenergy crop. Sorghum is valued for its drought tolerance and ability to produce under limited moisture conditions.',
    characteristics: [
      'Deep root system enables drought survival',
      'C4 photosynthesis for efficient water use',
      'Dual-purpose varieties for grain and forage',
      'Tolerant of high temperatures and poor soils',
    ],
    season: 'Kharif',
    growingSeason:
      'Sorghum is sown with the monsoon rains and matures in 90–120 days. It can also be grown as a ratoon crop in suitable conditions, producing a second harvest from regrowth.',
    suitableConditions: 'Wide range of soils including marginal lands; pH 6.0–7.5',
    conditions: [
      'Optimal temperature: 25–35°C',
      'Rainfall of 400–600 mm; tolerant of dry spells',
      'Adapts to sandy loam to heavy clay soils',
      'Full sun with good drainage',
    ],
    varieties: [
      { name: 'CSV-15', description: 'Grain type with good head quality' },
      { name: 'CSH-16', description: 'Hybrid for dual-purpose grain and forage' },
      { name: 'Maldandi', description: 'Traditional variety for dryland cultivation' },
    ],
    image: 'https://images.pexels.com/photos/4806660/pexels-photo-4806660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/4806660/pexels-photo-4806660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17164609/pexels-photo-17164609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'barley',
    name: 'Barley',
    scientificName: 'Hordeum vulgare',
    categoryId: 'cereals',
    category: 'Cereals & Grains',
    shortDescription: 'Hardy cereal grain for food, malt, and animal feed.',
    overview:
      'Barley is one of the earliest cultivated cereal crops, known for its hardiness and adaptability. It is used for malting, food, and animal feed. Barley tolerates poor soils and saline conditions better than most other cereals.',
    characteristics: [
      'Short growing cycle of 90–110 days',
      'Tolerant of drought, salinity, and alkaline soils',
      'Low nutrient requirement compared to wheat',
      'Suitable for marginal and rainfed lands',
    ],
    season: 'Rabi (Winter)',
    growingSeason:
      'Barley is sown in late autumn and harvested in early spring. It requires fewer irrigations than wheat and matures earlier, making it suitable for areas with limited water availability.',
    suitableConditions: 'Well-drained loam to sandy loam soils; pH 6.5–8.0',
    conditions: [
      'Optimal temperature: 12–20°C during growth',
      'Rainfall of 300–500 mm or 2–3 irrigations',
      'Tolerates saline and alkaline soils',
      'Cool, dry weather during grain filling',
    ],
    varieties: [
      { name: 'RD-2552', description: 'Dual-purpose variety for grain and fodder' },
      { name: 'DWRB-92', description: 'Malting type with good grain plumpness' },
      { name: 'BH-902', description: 'Salt-tolerant variety for marginal soils' },
    ],
    image: 'https://images.pexels.com/photos/28800913/pexels-photo-28800913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/28800913/pexels-photo-28800913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/28800912/pexels-photo-28800912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'pearl-millet',
    name: 'Pearl Millet',
    scientificName: 'Pennisetum glaucum',
    categoryId: 'millets',
    category: 'Millets',
    shortDescription: 'Drought-hardy millet for hot, dry regions with limited rainfall.',
    overview:
      'Pearl millet is the most widely grown millet in arid and semi-arid regions. It is highly drought-tolerant and grows well on poor soils where other cereals fail. It is a staple food in many dryland regions and also used as fodder.',
    characteristics: [
      'Deep root system for drought tolerance',
      'Grows in poor, sandy, and low-fertility soils',
      'High temperature tolerance up to 40°C',
      'Rapid growth cycle of 70–90 days',
    ],
    season: 'Kharif',
    growingSeason:
      'Pearl millet is sown with the onset of the monsoon and matures in 70–90 days. It is well-suited to areas with erratic and low rainfall where other cereals cannot be grown reliably.',
    suitableConditions: 'Sandy loam to sandy soils; pH 5.5–7.5',
    conditions: [
      'Optimal temperature: 28–35°C',
      'Rainfall of 250–500 mm; tolerates dry spells',
      'Light, well-drained sandy soils',
      'Full sun with minimal waterlogging',
    ],
    varieties: [
      { name: 'HHB-67', description: 'Early-maturing hybrid for rainfed areas' },
      { name: 'ICTP-8203', description: 'Open-pollinated variety for grain and fodder' },
      { name: 'Pusa Composite', description: 'Dual-purpose variety with good tillering' },
    ],
    image: 'https://images.pexels.com/photos/16977456/pexels-photo-16977456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/16977456/pexels-photo-16977456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/18275951/pexels-photo-18275951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'finger-millet',
    name: 'Finger Millet',
    scientificName: 'Eleusine coracana',
    categoryId: 'millets',
    category: 'Millets',
    shortDescription: 'Nutrient-dense millet valued for high calcium and dietary fiber.',
    overview:
      'Finger millet, also known as ragi, is a nutritious millet with exceptionally high calcium content. It is grown in hilly and dryland regions and is a staple in parts of South Asia and Africa. The grain stores well and is resistant to pests during storage.',
    characteristics: [
      'High calcium, iron, and dietary fiber content',
      'Excellent storage quality with natural pest resistance',
      'Tolerates waterlogging better than other millets',
      'Adapts to acidic and alkaline soils',
    ],
    season: 'Kharif',
    growingSeason:
      'Finger millet is sown at the start of the monsoon and takes 110–130 days to mature. In irrigated conditions, it can be grown year-round. It is well-suited to both upland and lowland cultivation.',
    suitableConditions: 'Red loam and laterite soils; pH 5.0–8.0',
    conditions: [
      'Optimal temperature: 20–30°C',
      'Rainfall of 500–800 mm',
      'Wide range of soils including acidic red loams',
      'Altitude up to 2,000 m',
    ],
    varieties: [
      { name: 'PR-202', description: 'High-yielding variety for irrigated conditions' },
      { name: 'Indaf-9', description: 'Rainfed variety with good grain quality' },
      { name: 'VR-708', description: 'Early-maturing variety for hilly areas' },
    ],
    image: 'https://images.pexels.com/photos/35102039/pexels-photo-35102039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/35102039/pexels-photo-35102039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'foxtail-millet',
    name: 'Foxtail Millet',
    scientificName: 'Setaria italica',
    categoryId: 'millets',
    category: 'Millets',
    shortDescription: 'Fast-maturing millet with good protein content and low water needs.',
    overview:
      'Foxtail millet is one of the oldest cultivated millets, known for its short growing cycle and nutritional profile. It is rich in protein and dietary fiber and is grown in dryland regions as a food and fodder crop.',
    characteristics: [
      'Very short growing cycle of 70–90 days',
      'Low water requirement with good drought tolerance',
      'High protein content among millets',
      'Adapts to marginal and rainfed soils',
    ],
    season: 'Kharif',
    growingSeason:
      'Foxtail millet is sown with monsoon rains and matures in 70–90 days. It is often used as a contingency crop in years of delayed monsoon due to its short duration.',
    suitableConditions: 'Sandy loam to black soils; pH 5.5–7.5',
    conditions: [
      'Optimal temperature: 25–30°C',
      'Rainfall of 300–500 mm',
      'Well-drained sandy loam to medium black soils',
      'Full sun, sensitive to waterlogging',
    ],
    varieties: [
      { name: 'SIA-3080', description: 'High-yielding variety for rainfed areas' },
      { name: 'Co-7', description: 'Early variety with uniform maturity' },
      { name: 'HMT-100-1', description: 'Dual-purpose grain and fodder variety' },
    ],
    image: 'https://images.pexels.com/photos/18275951/pexels-photo-18275951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/18275951/pexels-photo-18275951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'little-millet',
    name: 'Little Millet',
    scientificName: 'Panicum sumatrense',
    categoryId: 'millets',
    category: 'Millets',
    shortDescription: 'Small-grain millet suited to dry upland cultivation.',
    overview:
      'Little millet is a minor millet grown in rainfed upland areas. It is valued for its nutritional content and ability to grow on poor soils with minimal inputs. The grain is consumed as rice substitute and in traditional preparations.',
    characteristics: [
      'Very small grain with good nutritional density',
      'Short duration crop of 75–90 days',
      'Tolerant of poor soils and low rainfall',
      'Minimal input requirement',
    ],
    season: 'Kharif',
    growingSeason:
      'Little millet is sown with the monsoon and harvested in 75–90 days. It is suited to upland rainfed conditions and is often grown as a mixed crop.',
    suitableConditions: 'Gravelly and sandy loam upland soils; pH 5.5–7.0',
    conditions: [
      'Optimal temperature: 25–32°C',
      'Rainfall of 300–450 mm',
      'Gravelly upland soils with good drainage',
      'Full sun, tolerant of dry conditions',
    ],
    varieties: [
      { name: 'CO-3', description: 'Pureline variety for rainfed uplands' },
      { name: 'OLM-36', description: 'Early-maturing variety with good grain quality' },
      { name: 'BLT-4', description: 'Variety for mixed cropping systems' },
    ],
    image: 'https://images.pexels.com/photos/34319778/pexels-photo-34319778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/34319778/pexels-photo-34319778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'chickpea',
    name: 'Chickpea',
    scientificName: 'Cicer arietinum',
    categoryId: 'pulses',
    category: 'Pulses',
    shortDescription: 'Protein-rich pulse and one of the most important legume crops.',
    overview:
      'Chickpea is the most important rabi pulse crop, valued for its high protein content and soil-enriching nitrogen fixation. It is grown on residual soil moisture and is well-suited to rainfed conditions in semi-arid regions.',
    characteristics: [
      'Fixes atmospheric nitrogen, improving soil fertility',
      'Deep taproot accesses residual soil moisture',
      'Grows on residual moisture without irrigation',
      'High protein content of 20–25%',
    ],
    season: 'Rabi (Winter)',
    growingSeason:
      'Chickpea is sown in late October to November and harvested in February to March. It is primarily a rainfed crop grown on residual soil moisture after the monsoon.',
    suitableConditions: 'Sandy loam to clay loam soils; pH 6.0–8.0',
    conditions: [
      'Optimal temperature: 15–25°C',
      'Rainfall of 400–600 mm; grown on residual moisture',
      'Well-drained soils, sensitive to waterlogging',
      'Cool, dry weather during pod filling',
    ],
    varieties: [
      { name: 'JG-11', description: 'Widely adapted kabuli type with good grain size' },
      { name: 'Pusa-256', description: 'Desi type for rainfed conditions' },
      { name: 'BG-372', description: 'Kabuli type with good disease resistance' },
    ],
    image: 'https://images.pexels.com/photos/36683864/pexels-photo-36683864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/36683864/pexels-photo-36683864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/34949284/pexels-photo-34949284.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'green-gram',
    name: 'Green Gram',
    scientificName: 'Vigna radiata',
    categoryId: 'pulses',
    category: 'Pulses',
    shortDescription: 'Fast-growing pulse known for nitrogen fixation and short duration.',
    overview:
      'Green gram, also known as mung bean, is a short-duration pulse crop valued for its protein-rich seeds and soil-enriching properties. It fits well in crop rotations and can be grown in both kharif and spring seasons.',
    characteristics: [
      'Short duration of 60–75 days',
      'Fixes nitrogen, improving soil for subsequent crops',
      'Adapts to both irrigated and rainfed conditions',
      'Suitable for intercropping and catch cropping',
    ],
    season: 'Kharif / Spring',
    growingSeason:
      'Green gram is sown with the monsoon or as a spring crop. Its short duration of 60–75 days makes it ideal for fitting between two main crops or as a catch crop.',
    suitableConditions: 'Sandy loam to loam soils; pH 5.5–7.5',
    conditions: [
      'Optimal temperature: 25–35°C',
      'Rainfall of 500–700 mm',
      'Well-drained sandy loam soils',
      'Sensitive to waterlogging',
    ],
    varieties: [
      { name: 'IPM-02-14', description: 'High-yielding variety for spring planting' },
      { name: 'Pusa-Vishal', description: 'Short-duration variety for rainfed conditions' },
      { name: 'CO-6', description: 'Variety suited to rice fallow systems' },
    ],
    image: 'https://images.pexels.com/photos/7334141/pexels-photo-7334141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
    galleryImages: [
      'https://images.pexels.com/photos/7334141/pexels-photo-7334141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/18358654/pexels-photo-18358654.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'black-gram',
    name: 'Black Gram',
    scientificName: 'Vigna mungo',
    categoryId: 'pulses',
    category: 'Pulses',
    shortDescription: 'Protein-rich pulse valued for its dietary and soil benefits.',
    overview:
      'Black gram, also known as urad bean, is an important pulse crop grown primarily in South Asia. It is rich in protein and is used in a variety of traditional food preparations. Like other pulses, it fixes nitrogen and improves soil fertility.',
    characteristics: [
      'Nitrogen-fixing crop improving soil fertility',
      'Tolerates heat and drought during vegetative stage',
      'Suitable for rice fallow and intercropping',
      'High protein content of 22–26%',
    ],
    season: 'Kharif / Rabi',
    growingSeason:
      'Black gram is grown as a kharif crop and in some regions as a rabi crop in rice fallows. The crop matures in 70–90 days depending on the variety.',
    suitableConditions: 'Loam to clay loam soils; pH 5.5–7.5',
    conditions: [
      'Optimal temperature: 25–35°C',
      'Rainfall of 600–800 mm',
      'Well-drained loam to heavy soils',
      'Sensitive to frost and waterlogging',
    ],
    varieties: [
      { name: 'T-9', description: 'Variety for rice fallow conditions' },
      { name: 'PDU-1', description: 'Early-maturing variety for rainfed areas' },
      { name: 'CO-5', description: 'High-yielding variety for irrigated conditions' },
    ],
    image: 'https://images.pexels.com/photos/34448993/pexels-photo-34448993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/34448993/pexels-photo-34448993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'pigeon-pea',
    name: 'Pigeon Pea',
    scientificName: 'Cajanus cajan',
    categoryId: 'pulses',
    category: 'Pulses',
    shortDescription: 'Perennial pulse crop with deep roots and good drought tolerance.',
    overview:
      'Pigeon pea is a perennial pulse crop grown primarily in tropical and subtropical regions. It is drought-tolerant due to its deep taproot and is often intercropped with cereals. It is a key protein source in many diets.',
    characteristics: [
      'Deep taproot provides drought tolerance',
      'Perennial growth habit with extended harvest',
      'Fixes nitrogen, suitable for intercropping',
      'High protein seeds of 20–22%',
    ],
    season: 'Kharif',
    growingSeason:
      'Pigeon pea is sown with the monsoon and has a long duration of 150–180 days for traditional varieties, though short-duration types mature in 120–130 days. It is often grown as an intercrop with cereals.',
    suitableConditions: 'Wide range of soils including marginal lands; pH 5.5–7.5',
    conditions: [
      'Optimal temperature: 20–35°C',
      'Rainfall of 500–800 mm; tolerates dry periods',
      'Adapts to various soil types including marginal lands',
      'Full sun with good drainage',
    ],
    varieties: [
      { name: 'ICPL-88039', description: 'Short-duration variety for sole cropping' },
      { name: 'Maruti', description: 'Medium-duration variety for intercropping' },
      { name: 'Asha', description: 'Widely adapted variety with good grain quality' },
    ],
    image: 'https://images.pexels.com/photos/34940649/pexels-photo-34940649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/34940649/pexels-photo-34940649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'groundnut',
    name: 'Groundnut',
    scientificName: 'Arachis hypogaea',
    categoryId: 'oilseeds',
    category: 'Oilseeds',
    shortDescription: 'Important oilseed and protein crop grown for seeds and oil extraction.',
    overview:
      'Groundnut, also known as peanut, is a major oilseed crop grown for its oil-rich seeds. It is also valued as a food crop and animal feed. Groundnut is grown in both rainfed and irrigated conditions and fixes nitrogen in the soil.',
    characteristics: [
      'Nitrogen-fixing legume improving soil fertility',
      'Seeds contain 45–50% oil and 25% protein',
      'Pods develop underground after fertilization',
      'Adapts to rainfed and irrigated conditions',
    ],
    season: 'Kharif / Summer',
    growingSeason:
      'Groundnut is sown with the monsoon and takes 100–130 days to mature. A summer crop is also grown in irrigated areas. The crop requires uniform moisture during pod formation.',
    suitableConditions: 'Sandy loam and loam soils with good drainage; pH 6.0–7.5',
    conditions: [
      'Optimal temperature: 25–30°C',
      'Rainfall of 500–700 mm or irrigated',
      'Well-drained sandy loam soils for pod development',
      'Full sun, sensitive to waterlogging at pod stage',
    ],
    varieties: [
      { name: 'TAG-24', description: 'Spanish bunch type for irrigated conditions' },
      { name: 'GG-20', description: 'Virginia type for rainfed areas' },
      { name: 'Kadiri-9', description: 'Variety with good oil content' },
    ],
    image: 'https://images.pexels.com/photos/9799037/pexels-photo-9799037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/9799037/pexels-photo-9799037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33303306/pexels-photo-33303306.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9799045/pexels-photo-9799045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'soybean',
    name: 'Soybean',
    scientificName: 'Glycine max',
    categoryId: 'oilseeds',
    category: 'Oilseeds',
    shortDescription: 'Versatile oilseed crop with high protein and oil content.',
    overview:
      'Soybean is one of the most important oilseed crops globally, valued for its high protein and oil content. It is used for oil extraction, animal feed, and numerous food products. Soybean also fixes nitrogen and improves soil fertility.',
    characteristics: [
      'Seeds contain 40% protein and 20% oil',
      'Nitrogen-fixing crop ideal for rotations',
      'Adapts to a range of soil and climatic conditions',
      'Multiple uses including oil, feed, and food products',
    ],
    season: 'Kharif',
    growingSeason:
      'Soybean is sown with the monsoon in June–July and harvested in October. The crop matures in 90–120 days. It requires consistent moisture during the vegetative and flowering stages.',
    suitableConditions: 'Well-drained loam to clay loam soils; pH 6.0–7.5',
    conditions: [
      'Optimal temperature: 20–30°C',
      'Rainfall of 600–750 mm or irrigated',
      'Well-drained loam with good organic matter',
      'Sensitive to waterlogging',
    ],
    varieties: [
      { name: 'JS-335', description: 'Widely grown variety for rainfed conditions' },
      { name: 'MAUS-71', description: 'Early-maturing variety with good grain quality' },
      { name: 'NRC-37', description: 'Variety suited to irrigated conditions' },
    ],
    image: 'https://images.pexels.com/photos/36893984/pexels-photo-36893984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
    galleryImages: [
      'https://images.pexels.com/photos/36893984/pexels-photo-36893984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/13821931/pexels-photo-13821931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/18979035/pexels-photo-18979035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'sunflower',
    name: 'Sunflower',
    scientificName: 'Helianthus annuus',
    categoryId: 'oilseeds',
    category: 'Oilseeds',
    shortDescription: 'Versatile oilseed crop known for premium quality edible oil.',
    overview:
      'Sunflower is an important oilseed crop grown for its high-quality oil. It is adaptable to different climates and can be grown in both kharif and rabi seasons. Sunflower oil is valued for its light flavor and high smoke point.',
    characteristics: [
      'Seeds contain 40–45% oil of premium quality',
      'Adapts to a wide range of climates and soils',
      'Short duration of 90–110 days',
      'Can be grown in multiple seasons',
    ],
    season: 'Kharif / Rabi / Spring',
    growingSeason:
      'Sunflower is flexible and can be grown in kharif, rabi, or spring seasons. It matures in 90–110 days. The crop requires bright sunshine during flowering for good seed set.',
    suitableConditions: 'Well-drained loam to black soils; pH 6.0–8.0',
    conditions: [
      'Optimal temperature: 20–28°C',
      'Rainfall of 500–750 mm or irrigated',
      'Well-drained soils with good structure',
      'Bright sunshine during flowering and seed filling',
    ],
    varieties: [
      { name: 'DRSH-1', description: 'Hybrid for spring and rabi planting' },
      { name: 'Morden', description: 'Variety for rainfed conditions' },
      { name: 'KBSH-44', description: 'High-oil hybrid for irrigated conditions' },
    ],
    image: 'https://images.pexels.com/photos/29278365/pexels-photo-29278365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
    galleryImages: [
      'https://images.pexels.com/photos/29278365/pexels-photo-29278365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7125714/pexels-photo-7125714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33198389/pexels-photo-33198389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'sesame',
    name: 'Sesame',
    scientificName: 'Sesamum indicum',
    categoryId: 'oilseeds',
    category: 'Oilseeds',
    shortDescription: 'Ancient oilseed crop with high-quality, flavor-rich oil.',
    overview:
      'Sesame is one of the oldest cultivated oilseed crops, known for its high-quality oil which is resistant to oxidation. It is grown in warm tropical and subtropical regions and is valued for both its seeds and oil.',
    characteristics: [
      'Seeds contain 45–50% oil of premium quality',
      'Short duration crop of 80–100 days',
      'Tolerant of heat and dry conditions',
      'Oil has natural antioxidant properties',
    ],
    season: 'Kharif / Summer',
    growingSeason:
      'Sesame is sown with the monsoon and matures in 80–100 days. It can also be grown as a summer crop with irrigation. The crop is sensitive to waterlogging and requires dry conditions during harvest.',
    suitableConditions: 'Well-drained sandy loam soils; pH 5.5–7.5',
    conditions: [
      'Optimal temperature: 25–35°C',
      'Rainfall of 400–600 mm',
      'Well-drained sandy loam soils',
      'Dry weather during ripening and harvest',
    ],
    varieties: [
      { name: 'Gujarat Til-1', description: 'White-seeded variety for irrigated conditions' },
      { name: 'Prachi', description: 'Rainfed variety with good oil content' },
      { name: 'RT-346', description: 'Variety for summer cultivation' },
    ],
    image: 'https://images.pexels.com/photos/28157934/pexels-photo-28157934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/28157934/pexels-photo-28157934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'mustard',
    name: 'Mustard',
    scientificName: 'Brassica juncea',
    categoryId: 'oilseeds',
    category: 'Oilseeds',
    shortDescription: 'Important winter oilseed crop for condiment and oil use.',
    overview:
      'Mustard is a key rabi oilseed crop grown in the winter season. It is valued for its pungent oil which is widely used in cooking, and the seeds are also used as a condiment. Mustard is a short-duration crop suited to irrigated and rainfed conditions.',
    characteristics: [
      'Seeds contain 38–42% oil',
      'Short winter crop of 110–130 days',
      'Tolerant of light frost during vegetative stage',
      'Fits well in cereal-based rotations',
    ],
    season: 'Rabi (Winter)',
    growingSeason:
      'Mustard is sown in October–November and harvested in February–March. The crop matures in 110–130 days and requires cool, dry weather for optimal growth.',
    suitableConditions: 'Loam to clay loam soils; pH 6.0–7.5',
    conditions: [
      'Optimal temperature: 15–25°C',
      'Rainfall of 350–500 mm or 2–3 irrigations',
      'Medium to heavy soils with good fertility',
      'Cool, dry and sunny weather for oil formation',
    ],
    varieties: [
      { name: 'Pusa Bold', description: 'High-yielding variety with bold seeds' },
      { name: 'RH-30', description: 'Variety for irrigated conditions' },
      { name: 'Laxmi', description: 'Rainfed variety with good drought tolerance' },
    ],
    image: 'https://images.pexels.com/photos/881641/pexels-photo-881641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/881641/pexels-photo-881641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38277321/pexels-photo-38277321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/30495162/pexels-photo-30495162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'cotton',
    name: 'Cotton',
    scientificName: 'Gossypium hirsutum',
    categoryId: 'fiber',
    category: 'Fiber Crops',
    shortDescription: 'Primary natural fiber crop for the global textile industry.',
    overview:
      'Cotton is the most important natural fiber crop, grown for the lint that surrounds its seeds. It is a major commercial crop cultivated in tropical and subtropical regions. Cotton seed is also processed for oil and animal feed.',
    characteristics: [
      'Long growing season of 150–180 days',
      'Produces natural fiber for textile industry',
      'Seed cotton byproduct used for oil and feed',
      'Requires warm climate and adequate moisture',
    ],
    season: 'Kharif',
    growingSeason:
      'Cotton is sown with the monsoon in June–July and has a long growing season of 150–180 days. Harvesting extends from November to January. The crop requires consistent moisture during the vegetative and flowering stages.',
    suitableConditions: 'Deep black to sandy loam soils; pH 6.0–8.0',
    conditions: [
      'Optimal temperature: 25–35°C',
      'Rainfall of 600–1,000 mm or irrigated',
      'Deep, well-drained soils with good fertility',
      'Frost-free growing period',
    ],
    varieties: [
      { name: 'Bt-Bunny', description: 'Hybrid for irrigated conditions' },
      { name: 'LRA-5166', description: 'Variety for rainfed areas' },
      { name: 'Shankar-6', description: 'Long-staple variety for premium fiber' },
    ],
    image: 'https://images.pexels.com/photos/13924870/pexels-photo-13924870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
    galleryImages: [
      'https://images.pexels.com/photos/13924870/pexels-photo-13924870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/10287685/pexels-photo-10287685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4264828/pexels-photo-4264828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'jute',
    name: 'Jute',
    scientificName: 'Corchorus olitorius',
    categoryId: 'fiber',
    category: 'Fiber Crops',
    shortDescription: 'Natural bast fiber crop used for packaging and textiles.',
    overview:
      'Jute is a bast fiber crop grown primarily in humid tropical regions. The fiber is extracted from the stem and is used for making sacks, packaging, and geo-textiles. Jute is biodegradable and environmentally friendly.',
    characteristics: [
      'Fiber extracted from stem bark',
      'Fast-growing crop of 100–120 days',
      'Requires warm, humid climate',
      'Biodegradable and eco-friendly fiber',
    ],
    season: 'Kharif',
    growingSeason:
      'Jute is sown in March–April and harvested in July–August. The crop matures in 100–120 days. After harvest, stems are retted in water to extract the fiber.',
    suitableConditions: 'Alluvial loam and clay loam soils; pH 6.0–7.5',
    conditions: [
      'Optimal temperature: 25–35°C',
      'Rainfall of 1,500–2,500 mm',
      'Alluvial soils with good moisture retention',
      'Warm, humid climate throughout growth',
    ],
    varieties: [
      { name: 'JRO-524', description: 'Variety with good fiber quality' },
      { name: 'JRO-8432', description: 'High-yielding variety for irrigated conditions' },
      { name: 'Capsularis', description: 'White jute variety for fine fiber' },
    ],
    image: 'https://images.pexels.com/photos/17362930/pexels-photo-17362930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/17362930/pexels-photo-17362930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17362932/pexels-photo-17362932.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'fodder-maize',
    name: 'Fodder Maize',
    scientificName: 'Zea mays (fodder)',
    categoryId: 'forage',
    category: 'Forage Crops',
    shortDescription: 'High-biomass forage crop for livestock feed and silage.',
    overview:
      'Fodder maize is cultivated specifically for livestock feed, harvested before grain maturity for maximum biomass. It is valued for its high yield, palatability, and suitability for silage making.',
    characteristics: [
      'High biomass yield per unit area',
      'Fast growth with 60–75 days to harvest',
      'Suitable for green chop and silage',
      'Good palatability and digestibility',
    ],
    season: 'Kharif / Spring / Summer',
    growingSeason:
      'Fodder maize can be grown in any season with adequate moisture. It is harvested 60–75 days after sowing when the plants are still green and succulent.',
    suitableConditions: 'Well-drained loam to clay loam soils; pH 5.5–7.5',
    conditions: [
      'Optimal temperature: 20–30°C',
      'Regular irrigation or adequate rainfall',
      'Fertile, well-drained loam soils',
      'Full sun for maximum biomass',
    ],
    varieties: [
      { name: 'African Tall', description: 'High-biomass variety for silage' },
      { name: 'Prabha', description: 'Multicut variety for continuous fodder' },
      { name: 'Navjot', description: 'Single-cut variety with quick growth' },
    ],
    image: 'https://images.pexels.com/photos/32981470/pexels-photo-32981470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/32981470/pexels-photo-32981470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'fodder-sorghum',
    name: 'Fodder Sorghum',
    scientificName: 'Sorghum bicolor (fodder)',
    categoryId: 'forage',
    category: 'Forage Crops',
    shortDescription: 'Drought-tolerant forage crop for dryland livestock feeding.',
    overview:
      'Fodder sorghum is grown for livestock feed in semi-arid and rainfed regions. It is drought-tolerant and produces good biomass with moderate water input. It is suitable for both green feeding and hay making.',
    characteristics: [
      'Drought-tolerant with good biomass yield',
      'Multicut varieties allow repeated harvest',
      'Adapts to marginal and rainfed lands',
      'Suitable for green feed, hay, and silage',
    ],
    season: 'Kharif / Summer',
    growingSeason:
      'Fodder sorghum is sown with the monsoon or under irrigation. First cut is ready in 45–60 days, with subsequent cuts every 30–40 days for multicut varieties.',
    suitableConditions: 'Wide range of soils; pH 6.0–7.5',
    conditions: [
      'Optimal temperature: 25–35°C',
      'Rainfall of 400–600 mm or irrigated',
      'Adapts to sandy loam to clay soils',
      'Full sun, tolerates dry conditions',
    ],
    varieties: [
      { name: 'SSG-59-3', description: 'Multicut sweet sorghum for fodder' },
      { name: 'CO-31', description: 'High-biomass single-cut variety' },
      { name: 'Pusa Chari', description: 'Dual-purpose grain and fodder variety' },
    ],
    image: 'https://images.pexels.com/photos/33117776/pexels-photo-33117776.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/33117776/pexels-photo-33117776.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'lucerne',
    name: 'Lucerne',
    scientificName: 'Medicago sativa',
    categoryId: 'forage',
    category: 'Forage Crops',
    shortDescription: 'Perennial forage legume with high protein and cuttings per year.',
    overview:
      'Lucerne, also known as alfalfa, is a perennial forage legume valued for its high protein content and long productive life. It fixes nitrogen and can be cut multiple times per year, making it a reliable forage source.',
    characteristics: [
      'Perennial crop lasting 3–5 years',
      'High protein content of 18–22%',
      'Multiple cuttings per year after establishment',
      'Deep taproot provides drought tolerance',
    ],
    season: 'Rabi / Perennial',
    growingSeason:
      'Lucerne is sown in the cool season and takes 60–75 days to first cut. Once established, it can be cut 5–8 times per year for several years.',
    suitableConditions: 'Well-drained loam to clay loam soils; pH 6.5–8.0',
    conditions: [
      'Optimal temperature: 15–25°C',
      'Regular irrigation for sustained production',
      'Well-drained, deep soils with neutral pH',
      'Full sun, intolerant of shade',
    ],
    varieties: [
      { name: 'Anand-2', description: 'High-yielding variety with good regeneration' },
      { name: 'RL-88', description: 'Variety suited to irrigated conditions' },
      { name: 'Champaka', description: 'Perennial variety with long productive life' },
    ],
    image: 'https://images.pexels.com/photos/38476421/pexels-photo-38476421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
    galleryImages: [
      'https://images.pexels.com/photos/38476421/pexels-photo-38476421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
];

export const getCropBySlug = (slug: string): Crop | undefined =>
  crops.find((c) => c.slug === slug);

export const getCropsByCategory = (categoryId: string): Crop[] =>
  crops.filter((c) => c.categoryId === categoryId);

export const getFeaturedCrops = (): Crop[] => crops.filter((c) => c.featured);

export const getRelatedCrops = (crop: Crop, count = 3): Crop[] =>
  crops
    .filter((c) => c.categoryId === crop.categoryId && c.slug !== crop.slug)
    .slice(0, count);
