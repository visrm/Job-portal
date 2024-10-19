import { setCompanies } from "../../redux/slices/companySlice.js";
import { COMPANY_API_END_POINT } from "../../utils/constants.js";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function FetchCompanies() {
      try {
        const response = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true
        });
        if (response.data.success) {
          dispatch(setCompanies(response.data.companies));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
};

export default useGetAllCompanies;
