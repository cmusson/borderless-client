import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICandidate, IUser } from "../constants/interfaces";
import { RootState } from "./store";

export interface CandidatesState {
  candidates: ICandidate[];
  filteredCandidates: ICandidate[];
}

export const fetchCandidates = createAsyncThunk<ICandidate[], void>(
  "candidates/fetchData",
  async (_, { dispatch }) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        console.error(`Failed to fetch data. Status: ${res.status}`);
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      const users = (await res.json()) as IUser[];

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

      // Dispatch the actions to set candidates and initial filtered candidates
      dispatch(candidatesSlice.actions.setCandidates(candidates));
      dispatch(candidatesSlice.actions.setInitialFilterCandidates(candidates));

      return candidates;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

const initialState: CandidatesState = {
  candidates: [],
  filteredCandidates: [],
};

export const candidatesSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    setCandidates(state, action) {
      state.candidates = action.payload;
    },
    setInitialFilterCandidates(state, action) {
      state.filteredCandidates = action.payload;
    },
    setFilterCandidates(state, action) {
      state.filteredCandidates = state.candidates.filter(
        (candidate) =>
          candidate.name
            .toLowerCase()
            .includes(action.payload.toLocaleLowerCase()) ||
          candidate.role
            .toLowerCase()
            .includes(action.payload.toLocaleLowerCase())
      );
    },
  },
});

export const selectFilteredCandidates = (state: RootState) =>
  state.candidates.filteredCandidates;

export const selectCandidates = (state: RootState) =>
  state.candidates.candidates;

export const {
  setCandidates,
  setFilterCandidates,
  setInitialFilterCandidates,
} = candidatesSlice.actions;

export default candidatesSlice.reducer;
