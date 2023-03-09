import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mode } from '../../consts';
import { State } from '../../types/state';

const initialState: State = {
    mode: Mode.Constructor,
    numberOne: '',
    numberTwo: '',
    decimal: false,
    operator: '',
    result: 0
}

export const modeSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        changeMode: (state, action: PayloadAction<Mode>) => {
            state.mode = action.payload
        },
        setNumberOne: (state, action: PayloadAction<string>) => {
            state.numberOne += action.payload.split(',', 2).join(',')
        },
        setNumberTwo: (state, action: PayloadAction<string>) => {
            state.numberTwo += action.payload.split(',', 2).join(',')
        },
        setDecimal: (state, action: PayloadAction<boolean>) => {
            state.decimal = action.payload
        },
        removeDecimal: (state, action: PayloadAction<boolean>) => {
            state.decimal = action.payload
        },
        setOperator: (state, action: PayloadAction<string>) => {
            state.operator = action.payload
        },
        setResult: (state) => {
            const numberOne = Number(state.numberOne)
            const numberTwo = Number(state.numberTwo)

            state.result = 0;
        },
    }
})

export const {
    changeMode,
    setNumberOne,
    setNumberTwo,
    setDecimal,
    removeDecimal,
    setOperator,
    setResult
} = modeSlice.actions
export default modeSlice.reducer