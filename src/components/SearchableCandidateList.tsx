import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";
import Search from "./Search";
import Filter from "./Filter";
import { ICandidate, IUser } from "../constants/interfaces";

const SearchableCandidateList = () => {
  const [searchStr, setSearchStr] = useState("");
  const [candidates, setCandidates] = useState<ICandidate[]>();
  const [searchResults, setSearchResults] = useState<ICandidate[]>();

  useEffect(() => {
    const getCandidates = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        console.error(`Failed to fetch data. Status: ${res.status}`);
      }

      const users = (await res.json()) as IUser[];

      // to create a couple extra mock use cases
      const generateRandomBool = () => {
        return Math.random() < 0.5;
      };

      const candidates = users.map((user) => {
        const name = user.name;
        const image = "/cartoon_connor.jpeg";
        const verified = generateRandomBool();
        const location = user.address.city;
        const role = generateRandomBool() === true ? "Carer" : "Senior Carer";
        const nationality = "World Citizen";
        const availability = "Within 1 month";
        const experience = user.address.street;
        const drivingLicense = "Automatic";
        const accomodationSupportRequired = generateRandomBool();
        const skills = [user.company.bs, user.company.catchPhrase];

        return {
          name,
          image,
          verified,
          location,
          role,
          nationality,
          availability,
          experience,
          drivingLicense,
          accomodationSupportRequired,
          skills,
        };
      });
      setCandidates(candidates);
      setSearchResults(candidates);
      return candidates as ICandidate[];
    };

    getCandidates();
  }, []);

  const search = (search: string) => {
    return candidates?.filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        candidate.role.toLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
    setSearchResults(search(e.target.value));
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
        {searchResults?.length ? (
          searchResults.map((candidate, idx) => (
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
