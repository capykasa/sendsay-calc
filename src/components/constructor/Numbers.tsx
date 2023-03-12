import { useDispatch, useSelector } from 'react-redux';
import { Mode, symbols } from '../../consts';
import { setDecimal, setNumberOne, setNumberTwo } from '../../store/reducers/CalculatorSlice';
import { RootState } from '../../store/reducers/store';

const Numbers = () => {
    const currentMode = useSelector((state: RootState) => state.calculator.mode)
    const operator = useSelector((state: RootState) => state.calculator.operator)
    const decimal = useSelector((state: RootState) => state.calculator.decimal)
    const dispatch = useDispatch()

    const setNumber = (symbol: string) => {
        if (currentMode === Mode.Constructor) {
            return
        }

        if (symbol === ',' && decimal === false) {
            dispatch(setDecimal(true))
        }

        if (symbol === ',' && decimal === true) {
            return
        }

        if (operator === '') {
            dispatch(setNumberOne(symbol))
            return
        }

        dispatch(setNumberTwo(symbol))
    }

    return (
        <div className={`numbers ${currentMode === Mode.Constructor ? 'cursor-grab' : ''}`} id="numbers">
            {symbols.map((item) => (
                <button
                    className={`button numbers_item ${currentMode === Mode.Runtime ? 'cursor-pointer' : 'cursor-inherit'}`}
                    type="button"
                    key={item.symbol}
                    onClick={() => setNumber(item.symbol)}
                >
                    {item.symbol}
                </button>
            ))}
        </div>
    );
};

export default Numbers;