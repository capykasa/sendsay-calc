import { useDispatch } from 'react-redux';
import { operators } from '../../consts';
import { setOperator } from '../../store/reducers/CalculatorSlice';

const Operators = () => {
    const dispatch = useDispatch()

    return (
        <div className="operators">
            {operators.map((item) => (
                <button
                    className="button operators_item"
                    type="button"
                    key={item.operator}
                    onClick={() => dispatch(setOperator(item.operator))}
                >
                    {item.operator}
                </button>
            ))}
        </div>
    );
};

export default Operators;