import { useSelector } from 'react-redux';
import { Mode } from '../../consts';
import { RootState } from '../../store/reducers/store';
import { infinityDisplay } from '../../utils';

const Display = () => {
    const currentMode = useSelector((state: RootState) => state.calculator.mode)
    const operator = useSelector((state: RootState) => state.calculator.operator)
    const numberOne = useSelector((state: RootState) => state.calculator.numberOne)
    const numberTwo = useSelector((state: RootState) => state.calculator.numberTwo)
    const result = useSelector((state: RootState) => state.calculator.result)
    const resultView = useSelector((state: RootState) => state.calculator.resultView)

    const currentValue = () => {
        if (currentMode === Mode.Constructor) {
            return '0'
        }

        if (resultView) {
            return result
        }

        if (operator === '' || numberTwo === '') {
            return numberOne
        }

        return numberTwo
    }

    return (
        <div className="display" id="display">
            <span className="display_value">{infinityDisplay(currentValue())}</span>
        </div>
    )
};

export default Display;
