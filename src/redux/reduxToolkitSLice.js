import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: '',
	computer: '',
  textValue:''
}

const gameSlice = createSlice({
	name: 'gameSlice',
	initialState,
	reducers: {
		setComputerTool(state, action) {
			state.computer = action.payload
		},
    setUserTool(state, action) {
      state.user = action.payload
    },
     ResultTrueOrFalse(state, action) {
      state.textValue = action.payload
    }
	}
})

export const { setComputerTool, setUserTool, ResultTrueOrFalse } = gameSlice.actions
export default gameSlice.reducer
