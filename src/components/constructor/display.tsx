import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/store';

const Display = () => {
    const currentOperator = useSelector((state: RootState) => state.calculator.operator)
    const currentNumberOne = useSelector((state: RootState) => state.calculator.numberOne)
    const currentNumberTwo = useSelector((state: RootState) => state.calculator.numberTwo)

    const dispatch = useDispatch()

    const currentNumber = currentOperator === '' ? currentNumberOne : currentNumberTwo

    return (
        <div className="display">
            <span className="display_value">{currentNumber}</span>
        </div>
    );
};

export default Display;
