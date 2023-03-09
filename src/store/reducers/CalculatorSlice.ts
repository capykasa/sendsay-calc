import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mode } from '../../consts';
import { State } from '../../types/state';

const initialState: State = {
    mode: Mode.Constructor,
    numberOne: '',
    numberTwo: '',
    decimal: false,
    operator: '',
    result: 0,
    resultView: false
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
            state.resultView = true
            const numberOne = Number(state.numberOne.split(',', 2).join('.'))
            const numberTwo = Number(state.numberTwo.split(',', 2).join('.'))

            if (state.operator === '/') {
                state.result = numberOne / numberTwo
            }
            if (state.operator === 'x') {
                state.result = numberOne * numberTwo
            }
            if (state.operator === '-') {
                state.result = numberOne - numberTwo
            }
            if (state.operator === '+') {
                state.result = numberOne + numberTwo
            }

            state.numberOne = ''
            state.numberTwo = ''
            state.decimal = false
            state.operator = ''
        },
        resultToNumberOne: (state, action: PayloadAction<string>) => {
            state.resultView = false
            state.operator = action.payload
            state.numberOne = state.result.toString()
            state.result = 0
        }
    }
})

export const {
    changeMode,
    setNumberOne,
    setNumberTwo,
    setDecimal,
    removeDecimal,
    setOperator,
    setResult,
    resultToNumberOne
} = modeSlice.actions

export default modeSlice.reducer