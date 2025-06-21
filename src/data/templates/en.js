// English Garden Calendar Templates - Adapted for UK/US gardening practices
// Different timing and plants suitable for English-speaking regions

export const GARDEN_TEMPLATE_CATEGORIES_EN = {
  ORNAMENTAL: 'Ornamental Garden',
  VEGETABLE_FRUIT: 'Vegetable & Fruit Garden',
  HERB_GARDEN: 'Herb Garden',
  BALCONY_TERRACE: 'Balcony & Terrace',
  COMPLETE_GARDEN: 'Complete Garden'
};

// Template for Ornamental Garden
export const ORNAMENTAL_GARDEN_TEMPLATE_EN = {
  name: 'Ornamental Garden Year Plan',
  description: 'Complete yearly calendar for ornamental garden with all important care tasks',
  category: GARDEN_TEMPLATE_CATEGORIES_EN.ORNAMENTAL,
  region: 'temperate_north',
  tasks: [
    // January
    {
      month: 1,
      title: 'Prune deciduous trees',
      date: '01-15',
      type: 'pruning',
      description: 'Prune deciduous trees during dormant season on frost-free days.',
      priority: 'medium'
    },
    {
      month: 1,
      title: 'Plan garden layout',
      date: '01-20',
      type: 'maintenance',
      description: 'Plan new plantings and order seeds for spring.',
      priority: 'low'
    },
    {
      month: 1,
      title: 'Service garden tools',
      date: '01-25',
      type: 'maintenance',
      description: 'Clean and sharpen garden tools, service lawnmower.',
      priority: 'medium'
    },

    // February
    {
      month: 2,
      title: 'Prune roses',
      date: '02-15',
      type: 'pruning',
      description: 'Main pruning of bush roses, remove weak growth.',
      priority: 'high'
    },
    {
      month: 2,
      title: 'Prune summer flowering shrubs',
      date: '02-20',
      type: 'pruning',
      description: 'Prune buddleia, late flowering clematis, and other summer bloomers.',
      priority: 'high'
    },
    {
      month: 2,
      title: 'Prepare seed beds',
      date: '02-25',
      type: 'maintenance',
      description: 'Prepare beds for spring sowing when soil conditions allow.',
      priority: 'medium'
    },

    // March
    {
      month: 3,
      title: 'Divide perennials',
      date: '03-15',
      type: 'maintenance',
      description: 'Divide overgrown perennials and replant.',
      priority: 'medium'
    },
    {
      month: 3,
      title: 'Mulch borders',
      date: '03-20',
      type: 'maintenance',
      description: 'Apply mulch around trees, shrubs and perennials.',
      priority: 'high'
    },
    {
      month: 3,
      title: 'Sow hardy annuals',
      date: '03-25',
      type: 'planting',
      description: 'Direct sow hardy annuals like calendula, nigella, and poppies.',
      priority: 'medium'
    },

    // April
    {
      month: 4,
      title: 'Plant summer bulbs',
      date: '04-15',
      type: 'planting',
      description: 'Plant gladioli, dahlias, and other summer flowering bulbs.',
      priority: 'high'
    },
    {
      month: 4,
      title: 'Feed roses',
      date: '04-20',
      type: 'fertilizing',
      description: 'Apply rose fertilizer and mulch around plants.',
      priority: 'medium'
    },
    {
      month: 4,
      title: 'Deadhead daffodils',
      date: '04-25',
      type: 'maintenance',
      description: 'Remove spent daffodil flowers but leave foliage.',
      priority: 'medium'
    },

    // May
    {
      month: 5,
      title: 'Plant tender annuals',
      date: '05-15',
      type: 'planting',
      description: 'After last frost, plant tender bedding plants.',
      priority: 'high'
    },
    {
      month: 5,
      title: 'Chelsea Chop',
      date: '05-20',
      type: 'pruning',
      description: 'Cut back tall perennials by half to prevent flopping.',
      priority: 'medium'
    },
    {
      month: 5,
      title: 'Stake tall plants',
      date: '05-25',
      type: 'maintenance',
      description: 'Provide support for delphiniums and other tall perennials.',
      priority: 'medium'
    },

    // June
    {
      month: 6,
      title: 'Deadhead roses',
      date: '06-15',
      type: 'maintenance',
      description: 'Regular deadheading to encourage repeat flowering.',
      priority: 'high'
    },
    {
      month: 6,
      title: 'Water containers daily',
      date: '06-20',
      type: 'watering',
      description: 'Daily watering of containers and hanging baskets.',
      priority: 'high'
    },

    // July
    {
      month: 7,
      title: 'Trim lavender',
      date: '07-15',
      type: 'pruning',
      description: 'Trim lavender after flowering to maintain shape.',
      priority: 'medium'
    },
    {
      month: 7,
      title: 'Take softwood cuttings',
      date: '07-25',
      type: 'maintenance',
      description: 'Take cuttings from perennials and shrubs.',
      priority: 'low'
    },

    // August
    {
      month: 8,
      title: 'Collect seeds',
      date: '08-15',
      type: 'maintenance',
      description: 'Collect seeds from favorite plants for next year.',
      priority: 'low'
    },
    {
      month: 8,
      title: 'Plant autumn bulbs',
      date: '08-25',
      type: 'planting',
      description: 'Plant colchicum and autumn crocus bulbs.',
      priority: 'medium'
    },

    // September
    {
      month: 9,
      title: 'Plant spring bulbs',
      date: '09-25',
      type: 'planting',
      description: 'Plant daffodils, tulips, and other spring bulbs.',
      priority: 'high'
    },

    // October
    {
      month: 10,
      title: 'Plant trees and shrubs',
      date: '10-15',
      type: 'planting',
      description: 'Ideal time for planting new trees and shrubs.',
      priority: 'high'
    },
    {
      month: 10,
      title: 'Lift tender bulbs',
      date: '10-25',
      type: 'maintenance',
      description: 'Lift dahlias, gladioli, and other tender bulbs.',
      priority: 'medium'
    },

    // November
    {
      month: 11,
      title: 'Clear fallen leaves',
      date: '11-15',
      type: 'maintenance',
      description: 'Clear leaves from lawns and paths, compost healthy ones.',
      priority: 'high'
    },
    {
      month: 11,
      title: 'Protect tender plants',
      date: '11-25',
      type: 'maintenance',
      description: 'Wrap or move tender plants to protected spots.',
      priority: 'high'
    },

    // December
    {
      month: 12,
      title: 'Plan next year',
      date: '12-15',
      type: 'maintenance',
      description: 'Order seed catalogs and plan next year\'s garden.',
      priority: 'low'
    }
  ]
};

// Template for Vegetable & Fruit Garden
export const VEGETABLE_FRUIT_GARDEN_TEMPLATE_EN = {
  name: 'Vegetable & Fruit Garden Year Plan',
  description: 'Complete yearly calendar for kitchen garden with seasonal growing guide',
  category: GARDEN_TEMPLATE_CATEGORIES_EN.VEGETABLE_FRUIT,
  region: 'temperate_north',
  tasks: [
    // January
    {
      month: 1,
      title: 'Plan crop rotation',
      date: '01-15',
      type: 'maintenance',
      description: 'Plan this year\'s crop rotation and order seeds.',
      priority: 'high'
    },
    {
      month: 1,
      title: 'Prune fruit trees',
      date: '01-20',
      type: 'pruning',
      description: 'Prune apple and pear trees on frost-free days.',
      priority: 'high'
    },

    // February
    {
      month: 2,
      title: 'Chit seed potatoes',
      date: '02-15',
      type: 'planting',
      description: 'Start chitting early seed potatoes in light, cool place.',
      priority: 'high'
    },
    {
      month: 2,
      title: 'Prepare seed beds',
      date: '02-25',
      type: 'maintenance',
      description: 'Prepare vegetable beds when soil conditions allow.',
      priority: 'medium'
    },

    // March
    {
      month: 3,
      title: 'Sow broad beans',
      date: '03-15',
      type: 'planting',
      description: 'Direct sow broad beans in prepared beds.',
      priority: 'high'
    },
    {
      month: 3,
      title: 'Plant onion sets',
      date: '03-20',
      type: 'planting',
      description: 'Plant onion and shallot sets in well-prepared soil.',
      priority: 'medium'
    },
    {
      month: 3,
      title: 'Start tomato seeds',
      date: '03-25',
      type: 'planting',
      description: 'Sow tomato seeds indoors on windowsill or heated propagator.',
      priority: 'high'
    },

    // April
    {
      month: 4,
      title: 'Plant first early potatoes',
      date: '04-01',
      type: 'planting',
      description: 'Plant chitted first early potatoes.',
      priority: 'high'
    },
    {
      month: 4,
      title: 'Sow carrots and parsnips',
      date: '04-15',
      type: 'planting',
      description: 'Direct sow carrots and parsnips in fine, stone-free soil.',
      priority: 'medium'
    },
    {
      month: 4,
      title: 'Plant asparagus crowns',
      date: '04-20',
      type: 'planting',
      description: 'Plant one-year-old asparagus crowns in prepared beds.',
      priority: 'low'
    },

    // May
    {
      month: 5,
      title: 'Plant out tender crops',
      date: '05-15',
      type: 'planting',
      description: 'After last frost, plant tomatoes, peppers, and courgettes.',
      priority: 'high'
    },
    {
      month: 5,
      title: 'Sow French beans',
      date: '05-20',
      type: 'planting',
      description: 'Direct sow French beans or plant out seedlings.',
      priority: 'medium'
    },
    {
      month: 5,
      title: 'Earth up potatoes',
      date: '05-25',
      type: 'maintenance',
      description: 'Earth up potato shoots to protect from frost.',
      priority: 'high'
    },

    // June
    {
      month: 6,
      title: 'Harvest early crops',
      date: '06-15',
      type: 'harvesting',
      description: 'Harvest early potatoes, broad beans, and salads.',
      priority: 'high'
    },
    {
      month: 6,
      title: 'Net soft fruit',
      date: '06-20',
      type: 'maintenance',
      description: 'Protect strawberries and other soft fruit from birds.',
      priority: 'medium'
    },

    // July
    {
      month: 7,
      title: 'Summer pruning fruit',
      date: '07-15',
      type: 'pruning',
      description: 'Summer prune trained fruit trees and soft fruit.',
      priority: 'medium'
    },
    {
      month: 7,
      title: 'Harvest summer crops',
      date: '07-25',
      type: 'harvesting',
      description: 'Regular harvesting of beans, courgettes, and tomatoes.',
      priority: 'high'
    },

    // August
    {
      month: 8,
      title: 'Sow winter salads',
      date: '08-15',
      type: 'planting',
      description: 'Sow winter lettuce, corn salad, and oriental leaves.',
      priority: 'medium'
    },
    {
      month: 8,
      title: 'Plant strawberry runners',
      date: '08-25',
      type: 'planting',
      description: 'Plant new strawberry plants from runners.',
      priority: 'medium'
    },

    // September
    {
      month: 9,
      title: 'Harvest main crops',
      date: '09-15',
      type: 'harvesting',
      description: 'Harvest maincrop potatoes, onions, and apples.',
      priority: 'high'
    },
    {
      month: 9,
      title: 'Sow green manures',
      date: '09-25',
      type: 'planting',
      description: 'Sow green manures on empty beds for winter cover.',
      priority: 'medium'
    },

    // October
    {
      month: 10,
      title: 'Harvest winter squash',
      date: '10-15',
      type: 'harvesting',
      description: 'Harvest and store winter squash and pumpkins.',
      priority: 'high'
    },
    {
      month: 10,
      title: 'Plant garlic',
      date: '10-25',
      type: 'planting',
      description: 'Plant garlic cloves for next year\'s harvest.',
      priority: 'medium'
    },

    // November
    {
      month: 11,
      title: 'Lift root vegetables',
      date: '11-15',
      type: 'harvesting',
      description: 'Lift and store carrots, parsnips, and beetroot.',
      priority: 'high'
    },
    {
      month: 11,
      title: 'Protect tender crops',
      date: '11-25',
      type: 'maintenance',
      description: 'Protect winter crops with fleece or cloches.',
      priority: 'medium'
    },

    // December
    {
      month: 12,
      title: 'Plan next year',
      date: '12-15',
      type: 'maintenance',
      description: 'Order seed catalogs and plan next year\'s vegetables.',
      priority: 'low'
    }
  ]
};

// Template for Herb Garden
export const HERB_GARDEN_TEMPLATE_EN = {
  name: 'Herb Garden Year Plan',
  description: 'Specialized yearly calendar for culinary and medicinal herbs',
  category: GARDEN_TEMPLATE_CATEGORIES_EN.HERB_GARDEN,
  region: 'temperate_north',
  tasks: [
    // March
    {
      month: 3,
      title: 'Divide perennial herbs',
      date: '03-15',
      type: 'maintenance',
      description: 'Divide chives, tarragon, and other perennial herbs.',
      priority: 'medium'
    },
    {
      month: 3,
      title: 'Sow hardy herbs',
      date: '03-25',
      type: 'planting',
      description: 'Sow parsley, coriander, and dill directly outdoors.',
      priority: 'medium'
    },

    // April
    {
      month: 4,
      title: 'Plant herb containers',
      date: '04-15',
      type: 'planting',
      description: 'Plant up herb containers for kitchen windowsill.',
      priority: 'high'
    },

    // May
    {
      month: 5,
      title: 'Plant tender herbs',
      date: '05-15',
      type: 'planting',
      description: 'Plant basil, oregano, and other tender herbs outside.',
      priority: 'high'
    },

    // June-August
    {
      month: 6,
      title: 'Regular harvesting',
      date: '06-01',
      type: 'harvesting',
      description: 'Regular picking to encourage fresh growth.',
      priority: 'high'
    },
    {
      month: 7,
      title: 'Dry herbs for winter',
      date: '07-15',
      type: 'harvesting',
      description: 'Harvest and dry herbs at peak flavor.',
      priority: 'medium'
    },

    // September
    {
      month: 9,
      title: 'Collect herb seeds',
      date: '09-15',
      type: 'maintenance',
      description: 'Collect seeds from coriander, fennel, and dill.',
      priority: 'low'
    },

    // October
    {
      month: 10,
      title: 'Protect tender herbs',
      date: '10-15',
      type: 'maintenance',
      description: 'Move tender herbs to protected positions.',
      priority: 'medium'
    }
  ]
};

// Template for Balcony & Terrace
export const BALCONY_TERRACE_TEMPLATE_EN = {
  name: 'Balcony & Terrace Year Plan',
  description: 'Specialized yearly calendar for container gardening',
  category: GARDEN_TEMPLATE_CATEGORIES_EN.BALCONY_TERRACE,
  region: 'temperate_north',
  tasks: [
    // March
    {
      month: 3,
      title: 'Repot containers',
      date: '03-15',
      type: 'maintenance',
      description: 'Repot permanent plants with fresh compost.',
      priority: 'high'
    },

    // April
    {
      month: 4,
      title: 'Plant spring containers',
      date: '04-15',
      type: 'planting',
      description: 'Plant up containers with spring bedding.',
      priority: 'high'
    },

    // May
    {
      month: 5,
      title: 'Summer container planting',
      date: '05-15',
      type: 'planting',
      description: 'Plant summer bedding and vegetables in containers.',
      priority: 'high'
    },

    // June-August
    {
      month: 6,
      title: 'Daily watering',
      date: '06-01',
      type: 'watering',
      description: 'Daily watering essential for container plants.',
      priority: 'high'
    },
    {
      month: 7,
      title: 'Regular feeding',
      date: '07-15',
      type: 'fertilizing',
      description: 'Weekly liquid feeding for flowering plants.',
      priority: 'medium'
    },

    // September
    {
      month: 9,
      title: 'Autumn container refresh',
      date: '09-15',
      type: 'planting',
      description: 'Plant autumn containers with winter interest.',
      priority: 'medium'
    },

    // November
    {
      month: 11,
      title: 'Winter protection',
      date: '11-15',
      type: 'maintenance',
      description: 'Wrap containers and move tender plants indoors.',
      priority: 'high'
    }
  ]
};

// Complete Garden Template
export const COMPLETE_GARDEN_TEMPLATE_EN = {
  name: 'Complete Garden Year Plan',
  description: 'Comprehensive yearly calendar covering all garden areas',
  category: GARDEN_TEMPLATE_CATEGORIES_EN.COMPLETE_GARDEN,
  region: 'temperate_north',
  tasks: [
    // Combine key tasks from all templates
    // January
    {
      month: 1,
      title: 'Prune fruit trees',
      date: '01-15',
      type: 'pruning',
      description: 'Prune apple and pear trees on frost-free days.',
      priority: 'high'
    },
    {
      month: 1,
      title: 'Plan garden year',
      date: '01-25',
      type: 'maintenance',
      description: 'Order seeds and plan crop rotations.',
      priority: 'medium'
    },

    // February
    {
      month: 2,
      title: 'Prune roses',
      date: '02-15',
      type: 'pruning',
      description: 'Main pruning of bush roses.',
      priority: 'high'
    },
    {
      month: 2,
      title: 'Chit seed potatoes',
      date: '02-20',
      type: 'planting',
      description: 'Start chitting early potatoes.',
      priority: 'high'
    },

    // March
    {
      month: 3,
      title: 'Sow hardy vegetables',
      date: '03-15',
      type: 'planting',
      description: 'Sow broad beans, peas, and early carrots.',
      priority: 'high'
    },
    {
      month: 3,
      title: 'Mulch borders',
      date: '03-25',
      type: 'maintenance',
      description: 'Apply mulch around trees and shrubs.',
      priority: 'high'
    },

    // April
    {
      month: 4,
      title: 'Plant potatoes',
      date: '04-01',
      type: 'planting',
      description: 'Plant first early potatoes.',
      priority: 'high'
    },
    {
      month: 4,
      title: 'Feed roses',
      date: '04-20',
      type: 'fertilizing',
      description: 'Apply rose fertilizer.',
      priority: 'medium'
    },

    // May
    {
      month: 5,
      title: 'Plant tender crops',
      date: '05-15',
      type: 'planting',
      description: 'Plant out tomatoes, bedding plants.',
      priority: 'high'
    },

    // June
    {
      month: 6,
      title: 'Harvest early crops',
      date: '06-15',
      type: 'harvesting',
      description: 'Harvest early potatoes and salads.',
      priority: 'high'
    },

    // July
    {
      month: 7,
      title: 'Summer maintenance',
      date: '07-15',
      type: 'maintenance',
      description: 'Deadheading, watering, and pest control.',
      priority: 'high'
    },

    // August
    {
      month: 8,
      title: 'Harvest and preserve',
      date: '08-15',
      type: 'harvesting',
      description: 'Main harvest season for vegetables and fruit.',
      priority: 'high'
    },

    // September
    {
      month: 9,
      title: 'Plant spring bulbs',
      date: '09-25',
      type: 'planting',
      description: 'Plant daffodils, tulips, and crocuses.',
      priority: 'high'
    },

    // October
    {
      month: 10,
      title: 'Autumn planting',
      date: '10-15',
      type: 'planting',
      description: 'Plant trees, shrubs, and garlic.',
      priority: 'high'
    },

    // November
    {
      month: 11,
      title: 'Winter preparation',
      date: '11-15',
      type: 'maintenance',
      description: 'Clear leaves, protect tender plants.',
      priority: 'high'
    },

    // December
    {
      month: 12,
      title: 'Plan next year',
      date: '12-15',
      type: 'maintenance',
      description: 'Review this year and plan improvements.',
      priority: 'low'
    }
  ]
};

// Function to get all English templates
export function getAvailableTemplatesEn() {
  return [
    ORNAMENTAL_GARDEN_TEMPLATE_EN,
    VEGETABLE_FRUIT_GARDEN_TEMPLATE_EN,
    HERB_GARDEN_TEMPLATE_EN,
    BALCONY_TERRACE_TEMPLATE_EN,
    COMPLETE_GARDEN_TEMPLATE_EN
  ];
} 