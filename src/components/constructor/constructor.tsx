import CalcButton from './calc-button';
import Display from './display';
import Numbers from './Numbers';
import Operators from './Operators';

const Constructor = () => {
    return (
        <div className="page-main__constructor">
            <Display />
            <Operators />
            <Numbers />
            <CalcButton />
        </div>
    );
};

export default Constructor;