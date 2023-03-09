import { useDispatch, useSelector } from 'react-redux';
import { operators } from '../../consts';
import { resultToNumberOne, setOperator } from '../../store/reducers/CalculatorSlice';
import { RootState } from '../../store/reducers/store';

const Operators = () => {
    const resultView = useSelector((state: RootState) => state.calculator.resultView)
    const dispatch = useDispatch()

    const currentInput = (operator: string) => {
        if (resultView) {
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