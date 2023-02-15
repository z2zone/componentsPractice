import { useState } from 'react';
import Modal from '../Components/Modal';

const ModalPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalClick = () => {
        setModalOpen(true);
    }
    const handleClose = () => {
        setModalOpen(false);
    }
    return (
        <div>
            <button onClick={handleModalClick}>Open Modal</button>
            {modalOpen && <Modal handleClose={handleClose}/>}
        </div>
    );  
}

export default ModalPage;