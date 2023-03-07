import CanvasContainer from "./canvas-container";
import ModeSwitch from "./mode-switch";

const Canvas = () => {
    return (
        <div className="page-main__canvas">
            <ModeSwitch />
            <CanvasContainer />
        </div>
    );
}

export default Canvas;
