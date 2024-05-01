export interface Recipe {
    _id: string;
    strNameFood: string;
    ingredients: Ingredients[];
    preparation: Preparation[];
    numKcal: number;
    strTime: string;
};

export interface Ingredients {
    _id: string;
    strIngredient: string;
};

export interface Preparation {
  _id: string;
  strPreparation: string;  
};