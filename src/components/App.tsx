import '../scss/app.scss';

import { DragEvent, MouseEvent, useState } from 'react';
import ModeSwitch from './canvas/mode-switch';
import CalcButton from './constructor/calc-button';
import Display from './constructor/display';
import Numbers from './constructor/Numbers';
import Operators from './constructor/Operators';
import { Component, Mode, NO_DRAGGABLE } from '../consts';
import { DragItem } from '../types/items';
import { findDoubleElement, removeElement, replaceElements } from '../utils';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/store';

const Main = () => {
  const currentMode = useSelector((state: RootState) => state.calculator.mode)

  const [items, setItems] = useState<DragItem[]>([
    { element: <Display />, name: Component.Display, blocked: false },
    { element: <Operators />, name: Component.Operators, blocked: false },
    { element: <Numbers />, name: Component.Numbers, blocked: false },
    { element: <CalcButton />, name: Component.Submit, blocked: false },
  ])
  const [canvasItems, setCanvasItems] = useState<DragItem[]>([]);

  const [moveElement, setMoveElement] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<DragItem | null>(null);

  const blockedElement = (currentItemName: string) => {
    setItems(items.map((item) => item.name === currentItemName ? { ...item, blocked: true } : item));
  }
  const unblockedElement = (currentItemName: string) => {
    setItems(items.map((item) => item.name === currentItemName ? { ...item, blocked: false } : item));
  }

  const dragStartHandler = (evt: DragEvent<HTMLDivElement>, item: DragItem) => {
    setCurrentItem(item);
  }

  const dragEndHandler = (evt: DragEvent<HTMLDivElement>) => {
    setMoveElement(false);
  }

  const dragOverHandler = (evt: DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    setMoveElement(true);
  }

  const dropHandler = (evt: DragEvent<HTMLDivElement>) => {
    evt.preventDefault();

    if (currentItem === null) {
      return;
    }

    if (canvasItems.length === 0) {
      setCanvasItems([currentItem]);
      blockedElement(currentItem.name);
      return;
    }

    if (findDoubleElement(canvasItems, currentItem) === undefined) {

      NO_DRAGGABLE.includes(currentItem.name)
        ? setCanvasItems(items => [currentItem, ...items])
        : setCanvasItems(items => [...items, currentItem]);

      blockedElement(currentItem.name);
    }
  }

  const dropCanvasHandler = (evt: DragEvent<HTMLDivElement>, item: DragItem) => {
    if (currentItem === null) {
      return;
    }

    if (findDoubleElement(canvasItems, currentItem) === undefined) {
      return
    }

    const itemId = canvasItems.indexOf(item);
    const currentItemId = canvasItems.indexOf(currentItem);

    replaceElements(canvasItems, currentItemId, itemId);
  }

  const doubleClick = (evt: MouseEvent<HTMLDivElement>, item: DragItem) => {
    if (currentMode === Mode.Runtime) {
      return
    }

    const newCanvasItems = removeElement(canvasItems, item.name);
    setCanvasItems(newCanvasItems);

    unblockedElement(item.name);
  }

  const elementTemplate = (item: DragItem) => {
    return (
      <div className="wrapper" key={item.name}>
        <div className={item.blocked ? "container container-blocked" : "container"} key={item.name}
          onDragStart={(evt) => dragStartHandler(evt, item)}
          onDragEnd={(evt) => dragEndHandler(evt)}
          draggable={!item.blocked}>
          {item.element}
        </div>
      </div>
    )
  }

  const canvasElementTemplate = (item: DragItem) => {
    return (
      <div className="wrapper" key={item.name}
        onDragStart={(evt) => dragStartHandler(evt, item)}
        onDragEnd={(evt) => dragEndHandler(evt)}
        onDrop={(evt) => dropCanvasHandler(evt, item)}
        draggable={true}
        onDoubleClick={(evt) => doubleClick(evt, item)}
      >
        <div className="container">
          {item.element}
        </div>
      </div>
    );
  }

  const canvasBlockedElementTemplate = (item: DragItem) => {
    return (
      <div className="wrapper" key={item.name}
        onDoubleClick={(evt) => doubleClick(evt, item)}
      >
        <div className="container">
          {item.element}
        </div>
      </div>
    );
  }

  const emptyCanvasTemplate = () => {
    return (
      <div className={getHiddenClassForRuntime(Mode.Runtime, currentMode)}>
        <div className="canvas__container-empty">
          <svg className="canvas__container_svg" width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7778 1V5.44444" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M21 3.22222L16.5556 3.22222" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M12.3889 3.22222H5C2.79086 3.22222 1 5.01309 1 7.22223V16.2778M18.7778 9.61111V17C18.7778 19.2091 16.9869 21 14.7778 21H5C2.79086 21 1 19.2091 1 17V16.2778M1 16.2778L4.83824 12.4395C6.40034 10.8774 8.93298 10.8774 10.4951 12.4395C11.8961 13.8406 13.5664 15.5108 14.8889 16.8333" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M18.7778 14.6111L18.2729 14.1062C16.7108 12.5441 14.1781 12.5441 12.616 14.1062L12.3889 14.3333" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12.1111" cy="7.66667" r="0.555556" fill="black" />
          </svg>
          <h3 className="canvas__container_title">Перетащите сюда</h3>
          <p className="canvas__container_text">любой элемент из левой панели</p>
        </div>
      </div>
    )
  }

  const lightingTemplate = <div className='lighting'></div>

  const getHiddenClassForRuntime = (mode: Mode, currentMode: Mode) => {
    return mode === currentMode
      ? "visually-hidden"
      : 'container-for-hiding'
  }

  const canvasHoverView = moveElement === true && canvasItems.length === 0 ? "canvas__container canvas__container-hover" : "canvas__container";

  return (
    <div className="page">
      <div className="page-main">
        <div className="page-main__constructor">
          <div className={getHiddenClassForRuntime(Mode.Runtime, currentMode)}>
            {items.map((item) => elementTemplate(item))}
          </div>
        </div>
        <div className="page-main__canvas">
          <ModeSwitch />

          <div className={canvasHoverView}
            onDragOver={(evt) => dragOverHandler(evt)}
            onDragLeave={(evt) => dragEndHandler(evt)}
            onDrop={(evt) => dropHandler(evt)}
          >

            {(canvasItems.length > 0)
              ? canvasItems.map((item) => !NO_DRAGGABLE.includes(item.name) && currentMode === Mode.Constructor
                ? canvasElementTemplate(item)
                : canvasBlockedElementTemplate(item))
              : emptyCanvasTemplate()}
            {canvasItems.length > 0 && moveElement ? lightingTemplate : ''}

          </div>
        </div>
      </div>
    </div >
  );
}

export default Main;
