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
            <button 
                onClick={handleModalClick}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                Open Modal
            </button>
            { modalOpen && 
                <Modal 
                    handleClose={handleClose}
                    acceptButton={true}
                >
                    "Metacognition is, put simply, thinking about one's thinking. More precisely, it refers to the processes used to plan, monitor, and assess one's understanding and performance. Metacognition includes a critical awareness of a) one's thinking and learning and b) oneself as a thinker and learner."
                </Modal>
            }
        </div>
    );  
}

export default ModalPage;