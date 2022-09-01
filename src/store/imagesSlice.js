import { createSlice } from '@reduxjs/toolkit'

const imagesSlice = createSlice({
  name: 'images',
  initialState: [],
  reducers: {
    fetchImages(state, action) {
      return state = action.payload
    }
  }
})

export const { fetchImages } = imagesSlice.actions
export default imagesSlice.reducer