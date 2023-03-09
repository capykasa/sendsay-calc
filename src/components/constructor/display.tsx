import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/store';

const Display = () => {
    const operator = useSelector((state: RootState) => state.calculator.operator)
    const numberOne = useSelector((state: RootState) => state.calculator.numberOne)
    const numberTwo = useSelector((state: RootState) => state.calculator.numberTwo)
    const result = useSelector((state: RootState) => state.calculator.result)
    const resultView = useSelector((state: RootState) => state.calculator.resultView)

    const currentValue = () => {
        if (resultView) {
            return result
        }

        if (operator === '') {
            return numberOne
        }

        return numberTwo
    }
    //const currentNumber = operator === '' ? numberOne : numberTwo

    return (
        <div className="display">
            <span className="display_value">{currentValue()}</span>
        </div>
    );
};

export default Display;
