import { useDispatch, useSelector } from 'react-redux';
import { symbols } from '../../consts';
import { setDecimal, setNumberOne, setNumberTwo } from '../../store/reducers/CalculatorSlice';
import { RootState } from '../../store/reducers/store';

const Numbers = () => {
    const currentOperator = useSelector((state: RootState) => state.calculator.operator)
    const currentNumberOne = useSelector((state: RootState) => state.calculator.numberOne)
    const decimal = useSelector((state: RootState) => state.calculator.decimal)
    const dispatch = useDispatch()

    const setNumber = (symbol: string) => {
        if (symbol === ',' && decimal === false) {
            dispatch(setDecimal(true))
        }

        if (symbol === ',' && decimal === true) {
            return
        }

        currentOperator === ''
            ? dispatch(setNumberOne(symbol))
            : dispatch(setNumberTwo(symbol))
    }

    console.log(currentNumberOne.split(',', 2).join('.'))

    return (
        <div className="numbers">
            {symbols.map((item) => (
                <button
                    className="button numbers_item"
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