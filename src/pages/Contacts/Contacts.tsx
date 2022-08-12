import React, {FC} from 'react';
import styles from './Contacts.module.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import Item from "../../components/Contact/Item";

const Contacts: FC = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.contacts}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default Contacts;