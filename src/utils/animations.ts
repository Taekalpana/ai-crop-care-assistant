
// Animation delay utility for staggered animations
export const getAnimationDelay = (index: number, baseDelay: number = 100): string => {
  return `${index * baseDelay}ms`;
};

// Mock data for initial development
export const getMockResults = (): { diseases: any[], pesticides: any[] } => {
  return {
    diseases: [
      {
        id: "d1",
        name: "Late Blight",
        scientificName: "Phytophthora infestans",
        description: "A serious disease that affects potatoes and tomatoes, causing significant crop losses worldwide.",
        symptoms: [
          "Water-soaked spots on leaves",
          "White fuzzy growth on undersides of leaves",
          "Dark brown lesions on stems",
          "Rapid wilting and plant death"
        ],
        severity: "high",
        confidence: 0.89
      }
    ],
    pesticides: [
      {
        id: "p1",
        name: "Copper Fungicide",
        effectiveness: 0.85,
        description: "Broad-spectrum fungicide that controls many diseases including late blight in tomatoes and potatoes.",
        applicationMethod: "Mix 2-4 tablespoons per gallon of water and spray on all plant surfaces until completely wet.",
        isOrganic: true,
        waitingPeriod: "0 days"
      },
      {
        id: "p2",
        name: "Chlorothalonil",
        effectiveness: 0.92,
        description: "Protective fungicide that prevents spore germination of many fungi.",
        applicationMethod: "Apply as a foliar spray at 7-10 day intervals.",
        isOrganic: false,
        waitingPeriod: "7 days"
      }
    ]
  };
};

export const getMockHistory = (): any[] => {
  return [
    {
      id: "h1",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      plantName: "Tomato",
      disease: "Late Blight",
      imageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
    },
    {
      id: "h2",
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      plantName: "Cucumber",
      disease: "Powdery Mildew",
      imageUrl: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"
    }
  ];
};
