import ReactDOM from 'react-dom';
import { useState } from 'react';

const Modal = ({handleClose, children, acceptButton}) => {
    
    useState(()=>{
        //grab the body element and add a class so that scrolling cannot happen.
        document.body.classList.add("overflow-hidden");
        return ()=>{
            document.body.classList.remove("overflow-hidden");
        }
    },[]);

    const renderedButton = <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClose}>Accept</button>;

    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-gray-300 opacity-80" onClick={handleClose}></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className='flex flex-col justify-between h-full'>
                    {children}
                    <div className='flex justify-end'>{acceptButton && renderedButton}</div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container")
    );
}

export default Modal;