import React, {FC, useEffect, useState} from 'react';
import styles from './Sidebar.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {GrStreetView} from "react-icons/gr";
import {addContact} from "../../redux/contacts/slice";
import {nanoid} from "@reduxjs/toolkit";
import {updateSearchValue} from "../../redux/search/slice";

const Sidebar: FC = () => {
    const {username} = useSelector((state: RootState) => state.user);
    const {searchValue} = useSelector((state: RootState) => state.search);
    const [currentSearchValue, setCurrentSearchValue] = useState<string>(searchValue)
    const [newContactName, setNewContactName] = useState<string>('');
    const [newContactSurname, setNewContactSurname] = useState<string>('');
    const [newContactNumber, setNewContactNumber] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateSearchValue(currentSearchValue));
    },[currentSearchValue])

    const createNewContact = () => {
        if (newContactName === '' || newContactSurname === '' || newContactNumber === '') {
            setIsError(true)
        } else {
            setIsError(false);
            dispatch(addContact({
                id: nanoid(),
                name: newContactName,
                surname: newContactSurname,
                phone: newContactNumber
            }));
            setNewContactName('');
            setNewContactSurname('');
            setNewContactNumber('');
        }
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.username}>
                {username}`s contacts
            </div>
            <div className={styles.search}>
                <input className={styles.searchInput}
                       value={currentSearchValue}
                       placeholder={'Search contact...'}
                       onChange={(e) => setCurrentSearchValue(e.target.value)}/>
            </div>
            <div className={styles.newContact}>
                <div className={styles.newContactTitle}>create new conctact</div>
                {
                    isError && <div className={styles.newContactError}>Error: empty input</div>
                }
                <div className={styles.newContactSection}>
                    <input className={styles.newContactInput}
                           value={newContactName}
                           placeholder={'Name'}
                           onChange={(e) => setNewContactName(e.target.value)}/>
                </div>
                <div className={styles.newContactSection}>
                    <input className={styles.newContactInput}
                           value={newContactSurname}
                           placeholder={'Surname'}
                           onChange={(e) => setNewContactSurname(e.target.value)}/>
                </div>
                <div className={styles.newContactSection}>
                    <input className={styles.newContactInput}
                           value={newContactNumber}
                           inputMode={'tel'}
                           type={'tel'}
                           placeholder={'Phone number'}
                           onChange={(e) => setNewContactNumber(e.target.value)}/>
                </div>
                <button className={styles.newContactButton} onClick={createNewContact}>
                    create new contact <GrStreetView />
                </button>
            </div>
        </div>
    )
}

export default Sidebar;