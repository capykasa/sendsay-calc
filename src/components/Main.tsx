import Canvas from './canvas/canvas';
import Constructor from './constructor/constructor';

const Main = () => {
    return (
        <div className="page">
            <div className="page-main">
                <Constructor />
                <Canvas />
            </div>
        </div>
    );
}

export default Main;
