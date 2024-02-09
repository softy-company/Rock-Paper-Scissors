import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: '',
	computer: '',
  textValue:'',
  userCount: 0,
  computerCount:0,
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
    },
    UserCount(state, action) {
      state.userCount = action.payload
    },
     ComputerCount(state, action) {
      state.computerCount = action.payload
    }
	}
})

export const { setComputerTool, setUserTool, ResultTrueOrFalse, UserCount, ComputerCount } = gameSlice.actions
export default gameSlice.reducer
