import { Mode } from "../consts";

export type State = {
    mode: Mode;
    numberOne: string;
    numberTwo: string;
    decimal: boolean;
    operator: string;
    result: string;
    resultView: boolean;
}