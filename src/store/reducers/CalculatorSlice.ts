import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mode } from '../../consts';
import { State } from '../../types/state';
import { forStateNumber, forStateResult } from '../../utils';

const initialState: State = {
    mode: Mode.Constructor,
    numberOne: '',
    numberTwo: '',
    decimal: false,
    operator: '',
    result: '0',
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
            state.result = '0'
            state.resultView = false
            state.numberOne += forStateNumber(action.payload)
        },
        setNumberTwo: (state, action: PayloadAction<string>) => {
            state.numberTwo += forStateNumber(action.payload)
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
            let result = 0;

            if (state.operator === '/') {
                result = numberOne / numberTwo
            }
            if (state.operator === 'x') {
                result = numberOne * numberTwo
            }
            if (state.operator === '-') {
                result = numberOne - numberTwo
            }
            if (state.operator === '+') {
                result = numberOne + numberTwo
            }

            state.result = forStateResult(result)

            state.numberOne = ''
            state.numberTwo = ''
            state.decimal = false
            state.operator = ''
        },
        resultToNumberOne: (state, action: PayloadAction<string>) => {
            state.resultView = false
            state.operator = action.payload
            state.numberOne = state.result.toString()
            state.result = '0'
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