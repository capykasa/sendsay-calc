import { Component } from '../consts';

export interface DragItem {
    element: JSX.Element,
    name: Component,
    blocked: boolean
}
