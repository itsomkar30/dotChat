import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async (inputValue) => {
  const [api1Data, api2Data, api3Data] = await Promise.all([
    axios.get(`https://api1.com?q=${inputValue}`),
    axios.get(`https://api2.com?q=${inputValue}`),
    axios.get(`https://api3.com?q=${inputValue}`),
  ]);
  return {
    api1Data: api1Data.data,
    api2Data: api2Data.data,
    api3Data: api3Data.data,
  };
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    api1Data: null,
    api2Data: null,
    api3Data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.api1Data = action.payload.api1Data;
        state.api2Data = action.payload.api2Data;
        state.api3Data = action.payload.api3Data;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
