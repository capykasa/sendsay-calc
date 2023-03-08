import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mode } from '../../consts';
import { State } from '../../types/state';

const initialState: State = {
    mode: Mode.Constructor
}

export const modeSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        changeMode: (state, action: PayloadAction<Mode>) => {
            state.mode = action.payload
        },
    }
})

export const { changeMode } = modeSlice.actions
export default modeSlice.reducer