import { useDispatch, useSelector } from 'react-redux';
import { Mode } from '../../consts';
import { clean, setResult } from '../../store/reducers/CalculatorSlice';
import { RootState } from '../../store/reducers/store';

const CalcButton = () => {
    const currentMode = useSelector((state: RootState) => state.calculator.mode)
    const operator = useSelector((state: RootState) => state.calculator.operator)
    const numberOne = useSelector((state: RootState) => state.calculator.numberOne)
    const numberTwo = useSelector((state: RootState) => state.calculator.numberTwo)
    const dispatch = useDispatch()

    const submitButton = () => {
        if (currentMode === Mode.Constructor) {
            return
        }

        if (numberOne === '' || numberTwo === '' || operator === '') {
            dispatch(clean())
            return
        }

        dispatch(setResult())
    }

    return (
        <div className="calc">
            <button
                className="button calc-button"
                type="button"
                onClick={() => submitButton()}
            >
                =
            </button>
        </div>
    );
};

export default CalcButton;