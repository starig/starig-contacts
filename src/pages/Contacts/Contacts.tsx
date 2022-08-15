import React, {FC} from 'react';
import styles from './Contacts.module.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import {contactsSelectors} from "../../redux/contacts/slice";
import Item from "../../components/Contact/Item";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const Contacts: FC = () => {
    const allContacts = useSelector(contactsSelectors.selectEntities);
    const {searchValue} = useSelector((state: RootState) => state.search);
    const contacts: JSX.Element[] = [];
    for (const id in allContacts) {
        if (Object.hasOwnProperty.call(allContacts, id)) {
            const contactsItem = allContacts[id];
            contacts.push(
                <Item key={contactsItem?.id} id={contactsItem?.id} name={contactsItem?.name}
                      surname={contactsItem?.surname} phone={contactsItem?.phone}/>
            )
        }
    }

    const contactsList = searchValue !== ''
        ? contacts.filter(item => item.props.name.toLowerCase().includes(searchValue.toLowerCase())
            || item.props.surname.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.props.phone.toLowerCase().includes(searchValue.toLowerCase())) : contacts;



    return (
        <div className={styles.container}>
            <Sidebar/>
            <div className={styles.contacts}>
                {contactsList.length > 0 ? contactsList : <div className={styles.empty}>Your contacts book is empty...</div>}
            </div>
        </div>
    )
}

export default Contacts;