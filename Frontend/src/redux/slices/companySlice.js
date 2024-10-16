import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        company:null,
        companies:[],
        searchCompanyByText:"",
    },
    reducers:{
        // actions
        setCompany:(state,action) => {
            state.singleCompany = action.payload;
        },
        setCompanies:(state,action) => {
            state.companies = action.payload;
        },
        setSearchCompanyByText:(state,action) => {
            state.searchCompanyByText = action.payload;
        }
    }
});
// export company actions
export const {setCompany, setCompanies,setSearchCompanyByText} = companySlice.actions;
export default companySlice.reducer;