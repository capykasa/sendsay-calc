import { MAX_DISPLAY_SYMBOLS } from './consts';
import { DragItem } from './types/items';

export const findDoubleElement = (array: DragItem[], currentItem: DragItem) => {
    return array.find((item) => item.name === currentItem.name)
}

export const replaceElements = (array: DragItem[], elementFrom: number, elementTo: number) => {
    return array.splice(elementTo, 0, array.splice(elementFrom, 1)[0])
}

export const removeElement = (array: DragItem[], element: string) => {
    return array.filter((item) => item.name !== element)
}

export const forStateNumber = (number: string) => {
    number.split(',', 2).join(',')

    if (number.length > MAX_DISPLAY_SYMBOLS) {
        return number.substring(0, MAX_DISPLAY_SYMBOLS)
    }

    return number;
}

export const forStateResult = (result: number) => {
    const resultToString = result.toString().split('.').join(',')

    if (resultToString.length > MAX_DISPLAY_SYMBOLS) {
        return resultToString.substring(0, MAX_DISPLAY_SYMBOLS)
    }

    return resultToString;
}

export const infinityDisplay = (number: string) => {
    if (Number(number) === Infinity) {
        return 'Не определено'
    }

    return number
}