import { useDispatch, useSelector } from 'react-redux';
import { Mode, operators } from '../../consts';
import { resultToNumberOne, setNumberOne, setOperator, setResult } from '../../store/reducers/CalculatorSlice';
import { RootState } from '../../store/reducers/store';

const Operators = () => {
    const currentMode = useSelector((state: RootState) => state.calculator.mode)
    const numberOne = useSelector((state: RootState) => state.calculator.numberOne)
    const numberTwo = useSelector((state: RootState) => state.calculator.numberTwo)
    const result = useSelector((state: RootState) => state.calculator.result)
    const dispatch = useDispatch()

    const currentInput = (operator: string) => {
        if (currentMode === Mode.Constructor) {
            return
        }

        if (numberOne === '' && result === '0' && operator === '-') {
            dispatch(setNumberOne(operator))
            return
        }

        if (numberOne === '') {
            dispatch(resultToNumberOne(operator))
        }

        if (numberOne !== '' && numberTwo !== '') {
            dispatch(setResult())
            dispatch(resultToNumberOne(operator))
        }

        dispatch(setOperator(operator))
    }

    return (
        <div className="operators">
            {operators.map((item) => (
                <button
                    className="button operators_item"
                    type="button"
                    key={item.operator}
                    onClick={() => currentInput(item.operator)}
                >
                    {item.operator}
                </button>
            ))}
        </div>
    );
};

export default Operators;