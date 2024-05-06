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

export const listSexo = [
    {label: 'Masculino', value: 'Masculino'},
    {label: 'Femenino', value: 'Femenino'},
];

export const listActivitys = [
    {label: 'Poco o ningún ejercicio', value: 'Poco o ningún ejercicio'},
    {label: 'Ejercicio ligero (1-3 días a la semana)', value: 'Ejercicio ligero (1-3 días a la semana)'},
    {label: 'Ejercicio moderado (3-5 días a la semana)', value: 'Ejercicio moderado (3-5 días a la semana)'},
    {label: 'Ejercicio fuerte (6-7 días a la semana)', value: 'Ejercicio fuerte (6-7 días a la semana)'},
    {label: 'Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)', value: 'Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)'},
];

export const rolesList = [
    {label: 'Admin', value: 'Admin'},
    {label: 'Usuario', value: 'User'},
];