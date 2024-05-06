export interface User {
    _id: string;
    strEmail: string;
    strPassword: string;
    strName: string;
    strLastname: string;
    numAge: number;
    strSexo: string;
    numHeight: number;
    numWeight: number;
    strActivity: string;
    strRole: string;
    numDailyCalories: number;
    favRecipes: [];
    favExcercises: [];
}

export interface FavRecipes {
    _id: string;
    flagActivated: boolean;
}

export interface FavExercises {
    _id: string;
    flagActivated: boolean;
}