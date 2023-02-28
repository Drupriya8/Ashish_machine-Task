import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: "products",
    initialState: {
        isError: false,
        isLoading: false,
        isSucsess:false,
        products: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getproducts.pending,(state)=>{
         state.isLoading=true
        })
        .addCase(getproducts.fulfilled,(state,action)=>{
            state.isSucsess=true
            state.isLoading=false
            state.products=action.payload
        })
        .addCase(getproducts.rejected,(state)=>{
            state.isSucsess=false
            state.isError=true
            state.isLoading=false
        })

    }
})

 export const getproducts=createAsyncThunk("fetch/product",async()=>{

    const res = await fetch("https://fakestoreapi.com/products");
  
    const data = await res.json()
   
    return data

})



export default productSlice.reducer