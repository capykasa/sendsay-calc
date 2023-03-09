import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/store';
import { infinityDisplay } from '../../utils';

const Display = () => {
    const operator = useSelector((state: RootState) => state.calculator.operator)
    const numberOne = useSelector((state: RootState) => state.calculator.numberOne)
    const numberTwo = useSelector((state: RootState) => state.calculator.numberTwo)
    const result = useSelector((state: RootState) => state.calculator.result)
    const resultView = useSelector((state: RootState) => state.calculator.resultView)
    console.log(result)

    const currentValue = () => {
        if (resultView) {
            return result
        }

        if (operator === '') {
            return numberOne
        }

        return numberTwo
    }

    return (
        <div className="display">
            <span className="display_value">{infinityDisplay(currentValue())}</span>
        </div>
    );
};

export default Display;
