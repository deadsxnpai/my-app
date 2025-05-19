// features/profile/profileSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SkillScore {
  skill: string;
  value: number;
}

interface ProfileState {
  skillsScores: SkillScore[];
}

const initialState: ProfileState = {
  skillsScores: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setSkillsScores(state, action: PayloadAction<SkillScore[]>) {
      state.skillsScores = action.payload;
    },
  },
});

export const { setSkillsScores } = profileSlice.actions;
export default profileSlice.reducer;
