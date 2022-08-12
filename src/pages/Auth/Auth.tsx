import React, {FC, useEffect, useState} from 'react';
import styles from './Auth.module.scss';
import {fetchUserData, login, setUserInfo} from "../../redux/user/slice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";

const Auth: FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();
    const {isGotData, isLoading, isError} = useSelector((state: RootState) => state.user);

    const getLoginData = async () => {
        try {
            dispatch(fetchUserData(username));
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        if (username !== '' && password !== '') {
            dispatch(login());
        }
    }, [isGotData])

    useEffect(() => {
        dispatch(setUserInfo({username, password}));
    }, [username, password]);


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h4 className={styles.header}>Login</h4>
                <div className={styles.login}>
                    {
                        isError && <div className={styles.error}>Error: invalid username or password</div>
                    }
                    <input className={`${styles.input}`}
                           value={username}
                           placeholder={'USERNAME'}
                           onChange={(e) => setUsername(e.target.value)} />

                    <input className={`${styles.input}`}
                           type={'password'}
                           value={password}
                           placeholder={'PASSWORD'}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <button className={styles.loginButton} onClick={getLoginData} disabled={isLoading}>login</button>
                </div>
            </div>
        </div>
    )
}

export default Auth;