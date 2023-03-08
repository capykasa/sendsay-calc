import { configureStore } from '@reduxjs/toolkit'
import CalculatorSlice from './CalculatorSlice'

export const store = configureStore({
    reducer: {
        calculator: CalculatorSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch