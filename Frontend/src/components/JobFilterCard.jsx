import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../redux/slices/jobSlice.js";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup
} from "@mui/material";

const jobFilterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Bangalore", "Kozhikode"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType: "Company",
    array: ["Google", "Microsoft", "Infosys"]
  }
];

const JobFilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    // console.log(e.target.value.trim());
    setSelectedValue(e.target.value.trim());
    // console.log(selectedValue);
  };
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

 var i = 0; // for usage as unique key
  return (
    <div
      style={{
        display: "block",
        padding: "1rem",
        backgroundColor: "rgba(0,0,0, 0.05)"
      }}
    >
      <h2>Filter Jobs</h2>
      <hr />
      <RadioGroup value={selectedValue} onChange={changeHandler}>
        {jobFilterData.length > 0 && jobFilterData.map((data, index) => {
          return (
            <div key={data.id}>
              <h3>{data.filterType}</h3>
              {data.array.map((item, idx) => {
                const itemId = `id${index}-${idx}`;
                return (
                  <FormControl
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      rowGap: "0.5rem",
                      marginBlock: "0.5rem",
                      width: "100%",
                      minWidth: "fit-content",
                      border: "0.1rem solid lightgrey",
                      backgroundColor: "rgba(0,0,0, 0.1)",
                      borderRadius: "0.5rem"
                    }}
                  >
                    <FormControlLabel
                      value={item}
                      id={itemId}
                      control={<Radio />}
                      label={item}
                    />
                  </FormControl>
                );
              })}
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default JobFilterCard;
