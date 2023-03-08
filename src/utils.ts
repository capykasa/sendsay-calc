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