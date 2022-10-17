import React, {FC, useEffect, useRef, useState,} from 'react';
import ReactDOM from 'react-dom';
import {close} from '@assets/images'
import './Modal.scss'

export interface IModalWindow {
  title?: string,
  children: React.ReactNode,
  outsideClick?: boolean,
  closeModalWindow?: () => void,
  hasCloseImg?: boolean
}

const useOutsideClick = (cb: any, ref: any, filterElementIds: string[] = [], outsideClick: boolean) => {
  function handleClickOutside(event: any) {
    if (!outsideClick) return;
    const eId = !event.target.id ? '' : event.target.id;
    if (ref.current && !ref.current.contains(event.target) && filterElementIds.indexOf(eId) === -1) cb();
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, outsideClick]);
};

export const Modal: FC<IModalWindow> = (props) => {
  const {
    children,
    title = '',
    outsideClick = false,
    closeModalWindow = () => {},
    hasCloseImg = true,
  } = props;
  const [container] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(closeModalWindow, ref, ['customPopoverText'], outsideClick);

  return ReactDOM.createPortal(
    <div className="modal-wrapper">
      <div className="modal-content-wrap" ref={ref}>
        <div className="modal-content">
          <div className="modal-header">
            <div className='modal-title'>{title}</div>
            {hasCloseImg && <img onClick={closeModalWindow} src={close} alt="close"/>}
          </div>
          {children}
        </div>
      </div>
    </div>, container,
  );
};