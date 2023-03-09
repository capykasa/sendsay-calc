import { useDispatch } from 'react-redux';
import { setResult } from '../../store/reducers/CalculatorSlice';

const CalcButton = () => {
    const dispatch = useDispatch()

    return (
        <div className="calc">
            <button
                className="button calc-button"
                type="button"
                onClick={() => dispatch(setResult())}
            >
                =
            </button>
        </div>
    );
};

export default CalcButton;