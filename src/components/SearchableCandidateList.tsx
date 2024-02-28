import React, { useState } from "react";
import Candidate from "./Candidate";
import Search from "./Search";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredCandidates,
  setFilterCandidates,
} from "../Redux/candidatesSlice";

const SearchableCandidateList = () => {
  const [searchStr, setSearchStr] = useState("");
  const dispatch = useDispatch();
  const filteredCandidates = useSelector(selectFilteredCandidates);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
    dispatch(setFilterCandidates(e.target.value));
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div
        style={{ width: "fit-content" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        <div className="col-span-full flex flex-col justify-end gap-2 mt-4 sm:flex-row">
          <Search handleChange={handleChange} searchStr={searchStr} />
          <Filter />
        </div>
        {filteredCandidates?.length ? (
          filteredCandidates.map((candidate, idx) => (
            <Candidate key={idx} candidate={candidate} />
          ))
        ) : (
          <div>No candidates matching that criteria...</div>
        )}
      </div>
    </div>
  );
};

export default SearchableCandidateList;
