import React, {FC} from 'react';
import styles from './Item.module.scss';
import {IoIosCall, IoMdCreate, IoMdPint} from "react-icons/io";

const Item: FC = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemBody}>
                <div className={styles.itemHeader}>
                    <div className={styles.name}>
                        Name
                    </div>
                    <div className={styles.secondName}>
                        Secondname
                    </div>
                </div>
                <div className={styles.number}>
                    +7900900900 <IoIosCall />
                </div>
            </div>
            <div className={styles.itemButtons}>
                <IoMdCreate />
                <IoMdPint className={styles.buttonDelete}/>
            </div>
        </div>
    )
}

export default Item;