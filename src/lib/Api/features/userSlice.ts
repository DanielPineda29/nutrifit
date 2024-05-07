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
        //EDIT USER =>
            builder.addCase(updateUser.fulfilled, (state, action) => {
            state.userResponse = 200;
            state.user = action.payload || initialState.user;
            });
            builder.addCase(updateUser.rejected, (state) => {
                state.userResponse = 400;
            });
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