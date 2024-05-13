import { Api, Response } from '../Api';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { User } from '../../models/userModel';

interface UserInitialState {
    user: User | null;
    userResponse: number | null;
};

const initialState: UserInitialState = {
    user: null,
    userResponse: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
          },
        setUserEdit: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
          },
        resetUser: (state) => {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        //CHECK USER =>
            builder.addCase(checkEmailExists.fulfilled, (state, action) => {
                state.userResponse = 200;
                state.user = action.payload || initialState.user;
            });
            builder.addCase(checkEmailExists.rejected, (state) => {
                state.userResponse = 400;
            });
        //GET USER =>
            builder.addCase(getUser.fulfilled, (state, action) => {
                state.userResponse = 200;
                state.user = action.payload || initialState.user;
            });
            builder.addCase(getUser.rejected, (state) => {
                state.userResponse = 400;
            });
        //POST FAV RECIPE =>
            builder.addCase(postFavRecipe.fulfilled, (state, action) => {
                state.userResponse = 200;
                state.user = action.payload || initialState.user;
            });
            builder.addCase(postFavRecipe.rejected, (state) => {
                state.userResponse = 400;
            });
        //EDIT USER =>
            builder.addCase(updateUser.fulfilled, (state, action) => {
            state.userResponse = 200;
            state.user = action.payload || initialState.user;
            });
            builder.addCase(updateUser.rejected, (state) => {
                state.userResponse = 400;
            });
        //DELETE USER =>
            builder.addCase(deleteUser.fulfilled, (state, action) => {
                state.userResponse = 200;
                state.user = action.payload || initialState.user;
            });
            builder.addCase(deleteUser.rejected, (state) => {
                state.userResponse = 400;
            })
        //DELETE FAV RECIPE =>
            builder.addCase(deleteFavRecipe.fulfilled, (state, action) => {
                state.userResponse = 200;
                state.user = action.payload || initialState.user;
            });
            builder.addCase(deleteFavRecipe.rejected, (state) => {
                state.userResponse = 400;
            })
    },
});



//CHECK USER =>
// export const checkEmailExists = async (strEmail: string, strPassword: string) => {
//     try {
//         console.log('checkEmailExists strEmail: ', strEmail)
//         const response = await Api.post('/user/check_email',{strEmail, strPassword},{headers:{'Content-Type':'application/json'}});
//         console.log('API Response checkEmailExists: ', response.data);
//         return response.data.exists;
//     } catch (error) {
//         throw new Error("Error al obtener la receta" + error);
//     }
// };

export const checkEmailExists = createAsyncThunk(
    'user/checkEmailExists',
    async ({strEmail, strPassword}:{strEmail: string, strPassword: string}) =>  {
        try {
            const response = await Api.post('/user/check_email', {strEmail, strPassword},{
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log('API Response checkEmailExists: ', response.data);
            return response.data.exists;
        } catch (error) {
            throw new Error('Error al verificar el usuario ' + error);
        }
    }
);

export const getUser = createAsyncThunk(
    'user/getUser',
    async (strEmail: string) => {
        try {
            const response = await Api.get(`/user/${strEmail}`,{
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Error al obtener el usuario: ' + error);
        }
    }
);

export const createUser = createAsyncThunk(
    'user/createUser',
    async (payload: User) => {
        try {
            const response = await Api.post('/register', payload, {
                headers:{
                    'Content-Type':'application/json',
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Erro al crear el nuevo usuario: ' + error);
        }
    }
);

export const postFavRecipe = createAsyncThunk(
    'user/postFavRecipe',
    async ({idUser, payload: User}:{idUser:string, payload: User}) => {
        try {
            const response = await Api.post(`/addFavRecipe/${idUser}`, User, {
                headers:{
                    'Content-Type':'application/json',
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Error al añadir la receta favorita: ' + error);
        }
    }
);

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async ({id, payload: User}:{id: String, payload: User}) => {
        try {
            const response = await Api.put(`/updateUser/${id}`, User, {
                headers:{
                    'Content-Type':'application/json',
                }
            });
            console.log("Enviando datos desde updateUser", response.data);
            return response.data;
        } catch (error) {
            throw new Error('Error al editar el usuario: ' + error);
        }
    }
);

export const updateEmailPw = createAsyncThunk(
    'user/updateEmailPw',
    async ({id, data}:{id:string, data: Object}) =>  {
        try{
            console.log("Datos recibidos en updateEmailPw: ", data);
            const response = await Api.put(`/updateUserEmailPw/${id}`, data, {
                headers:{
                    'Content-Type':'application/json',
                }
            });
            console.log("Enviando datos desde updateEmailPw: ", response.data);
            return response.data;
        } catch (error) {
            throw new Error('Error al actualizar el correo o contraseña: ' + error);
        }
    }
);

export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (id: string) => {
        try {
            const response = await Api.put(`/deleteUser/${id}`, {
                headers:{
                    'Content-Type':'application/json',
                }
            });
            console.log("Enviando datos desde deleteUser: ", response.data);
            return response.data;
        } catch (error) {
            throw new Error('Error al eliminar el usuario: ' + error);
        }
    }
);

export const deleteFavRecipe = createAsyncThunk(
    'user/deleteFavRecipe',
    async ({idUser, idRecipe}:{idUser:string, idRecipe:string}) => {
        console.log("idUser: ", idUser);
        console.log("idRecipe: ", idRecipe);
        try {
            const response = await Api.delete(`/deleteFavRecipe/${idUser}/${idRecipe}`);
            console.log("Enviando datos desde deleteFavRecipe: ", response.data);
            return response.data;
        } catch (error) {
            throw new Error('Error al borrar la receta en ')
        }
    }
);


//GET USER =>
// export const getUser = async (strEmail: string) => {
//     try {
//         const response = await Api.get(`/user/${strEmail}`,{headers:{'Content-Type':'application/json'}});
//         console.log('API Response getRecipe: ', response.data);
//         return response.data;
//     } catch (error) {
//         throw new Error("Error al obtener la receta" + error);
//     }
// };

//CREATE RECIPE =>
// export const createRecipe = async (recipe: Recipe) => {
//     try {
//         const response = await Api.get()
//     }
// } 


export const { setUser, resetUser, setUserEdit } = userSlice.actions;
export default userSlice.reducer;