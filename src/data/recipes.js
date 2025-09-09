// Datos de receta hardcodeados para el MVP
export const sampleRecipe = {
  id: 1,
  title: "Paella Valenciana Tradicional",
  description: "La auténtica paella valenciana con pollo, conejo, judías verdes y garrofón, cocinada con el mejor azafrán.",
  image: "/assets/images/recipes/paella-valenciana.jpg",
  prepTime: 30,
  cookTime: 45,
  servings: 6,
  difficulty: "Intermedio",
  cuisine: "Española",
  author: {
    name: "Chef María García",
    avatar: "/assets/images/authors/maria-garcia.jpg"
  },
  ingredients: [
    {
      id: 1,
      name: "Arroz bomba",
      amount: "400",
      unit: "g"
    },
    {
      id: 2,
      name: "Pollo troceado",
      amount: "1",
      unit: "kg"
    },
    {
      id: 3,
      name: "Conejo troceado",
      amount: "500",
      unit: "g"
    },
    {
      id: 4,
      name: "Judías verdes",
      amount: "200",
      unit: "g"
    },
    {
      id: 5,
      name: "Garrofón (judías lima)",
      amount: "150",
      unit: "g"
    },
    {
      id: 6,
      name: "Tomate rallado",
      amount: "1",
      unit: "unidad"
    },
    {
      id: 7,
      name: "Pimiento rojo",
      amount: "1",
      unit: "unidad"
    },
    {
      id: 8,
      name: "Aceite de oliva virgen extra",
      amount: "100",
      unit: "ml"
    },
    {
      id: 9,
      name: "Azafrán en hebras",
      amount: "1",
      unit: "pizca"
    },
    {
      id: 10,
      name: "Caldo de pollo",
      amount: "1.2",
      unit: "litros"
    },
    {
      id: 11,
      name: "Sal",
      amount: "al gusto",
      unit: ""
    },
    {
      id: 12,
      name: "Limón",
      amount: "1",
      unit: "unidad"
    }
  ],
  instructions: [
    {
      step: 1,
      title: "Preparar la paellera",
      description: "Calentar el aceite de oliva en la paellera a fuego medio-alto. La paellera debe estar bien caliente antes de añadir los ingredientes."
    },
    {
      step: 2,
      title: "Sofreír las carnes",
      description: "Añadir el pollo y el conejo troceados. Sofreír durante 8-10 minutos hasta que estén bien dorados por todos los lados. Salpimentar al gusto."
    },
    {
      step: 3,
      title: "Añadir las verduras",
      description: "Incorporar las judías verdes cortadas en trozos y el garrofón. Cocinar durante 3-4 minutos removiendo ocasionalmente."
    },
    {
      step: 4,
      title: "Sofrito de tomate",
      description: "Añadir el tomate rallado y el pimiento rojo cortado en tiras. Cocinar hasta que el tomate se concentre y pierda el agua, unos 5 minutos."
    },
    {
      step: 5,
      title: "Añadir el arroz",
      description: "Incorporar el arroz bomba y remover durante 2-3 minutos para que se impregne bien del sofrito. No remover más durante el resto de la cocción."
    },
    {
      step: 6,
      title: "Agregar el caldo",
      description: "Verter el caldo de pollo caliente y añadir el azafrán previamente diluido en un poco de caldo. Rectificar la sal."
    },
    {
      step: 7,
      title: "Cocción final",
      description: "Cocinar a fuego fuerte durante 10 minutos, luego bajar a fuego medio y cocinar 10 minutos más. Los últimos 5 minutos a fuego mínimo."
    },
    {
      step: 8,
      title: "Reposo y servido",
      description: "Retirar del fuego y cubrir con un paño limpio. Dejar reposar 5-10 minutos. Decorar con cuñas de limón y servir directamente de la paellera."
    }
  ],
  tags: ["tradicional", "arroz", "pollo", "español", "almuerzo"],
  nutritionInfo: {
    calories: 420,
    protein: 28,
    carbs: 45,
    fat: 12,
    fiber: 3
  },
  tips: [
    "Usa siempre arroz bomba para conseguir la textura perfecta",
    "El azafrán debe ser de buena calidad para el color y sabor característicos", 
    "No remuevas el arroz una vez añadido el caldo",
    "Busca conseguir el 'socarrat' (la costra dorada del fondo) en los últimos minutos"
  ]
};
