import { setCompany } from "../../redux/slices/companySlice.js";
import { COMPANY_API_END_POINT } from "../../utils/constants.js";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function FetchSingleCompany() {
      try {
        const res = await axios.get(
          `${COMPANY_API_END_POINT}/get/${companyId}`,
          { withCredentials: true }
        );
        console.log(res.data.company);
        if (res.data.success) {
          dispatch(setCompany(res.data.company));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [companyId, dispatch]);
};

export default useGetCompanyById;
