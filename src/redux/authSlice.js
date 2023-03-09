import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    msg: "",
    user:"",
    token:"",
    loading:false,
    error: ""
}

 export const signUpUser = createAsyncThunk('signupuser',async()=>{
    const res = await fetch ("shaaaaaaa",{
        method:"post",
        headers:{
            'content-Type': "application/json",
        },
        body: JSON.stringify(res)
    })
    return await res.json
})





const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers:{
        [signUpUser.pending]: (state,action)=>{
            state.loading = true
        },
        [signUpUser.pending]: (state,{payload:{error,msg}})=>{
            state.loading = false;
            if(error){
                state.error = error
            }else{
                state.msg = msg
            }
        },
        [signUpUser.pending]: (state,action)=>{
            state.loading = true
        },
    }
})

export default  authSlice.reducer