import React, {FC, useState} from 'react';
import styles from './Item.module.scss';
import {IoIosCall, IoMdCreate, IoMdPint} from "react-icons/io";
import {removeContact} from "../../redux/contacts/slice";
import {useDispatch} from "react-redux";
import Modal from "../Modal/Modal";
import {Contact} from "../../redux/contacts/types";


const Item: FC<Contact> = ({
    id,
    name,
    surname,
    phone
                           }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const deleteContact = () => {
        if (window.confirm(`Delete ${name} contact?`)) {
            dispatch(removeContact(id));
        }
    }

    return (
        <>
            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} name={name} id={id} surname={surname} phone={phone}/>
            <div className={styles.item}>
                <div className={styles.itemBody}>
                    <div className={styles.itemHeader}>
                        <div className={styles.name}>
                            {name}
                        </div>
                        <div className={styles.secondName}>
                            {surname}
                        </div>
                    </div>
                    <div className={styles.number}>
                        {phone} <IoIosCall />
                    </div>
                </div>
                <div className={styles.itemButtons}>
                    <IoMdCreate onClick={() => setIsModalOpen(true)}/>
                    <IoMdPint className={styles.buttonDelete} onClick={deleteContact}/>
                </div>
            </div>
        </>

    )
}

export default Item;