import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import styles from './Modal.module.scss';
import {ImCancelCircle} from "react-icons/im";
import {useDispatch} from "react-redux";
import {updateContact} from "../../redux/contacts/slice";

interface Modal {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    id?: string;
    name?: string;
    surname?: string;
    phone?: string;
}

const Modal: FC<Modal> = ({
                              isOpen,
                              setIsOpen,
                              name,
                              surname,
                              phone,
                              id
                          }) => {
    const [currentName, setCurrentName] = useState<string | undefined>(name);
    const [currentSurname, setCurrentSurname] = useState<string | undefined>(surname);
    const [currentPhone, setCurrentPhone] = useState<string | undefined>(phone);
    const dispatch = useDispatch();
    const closeModal = () => {
        setIsOpen(false);
    }
    const updateData = () => {
        dispatch(updateContact({id, changes: {name: currentName, surname: currentSurname, phone: currentPhone}}))
        closeModal();
    }

    return (
        <div className={`${styles.modal} ${isOpen && styles.opened}`}>
            <div className={styles.modalArea}>
                <h4>Name:</h4>
                <input value={currentName} placeholder={'Name'} className={styles.modalInput}
                       onChange={(e) => setCurrentName(e.target.value)}/>
            </div>
            <div className={styles.modalArea}>
                <h4>Surname:</h4>
                <input value={currentSurname} placeholder={'Surname'} className={styles.modalInput}
                       onChange={(e) => setCurrentSurname(e.target.value)}/>
            </div>
            <div className={styles.modalArea}>
                <h4>Phone:</h4>
                <input value={currentPhone} placeholder={'Phone'} className={styles.modalInput}
                       onChange={(e) => setCurrentPhone(e.target.value)}/>
            </div>
            <button className={styles.updateButton} onClick={updateData}>Update</button>
            <ImCancelCircle className={styles.closeIcon} onClick={closeModal}/>
        </div>
    )
}

export default Modal;