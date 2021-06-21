import React from 'react'
import styles from './ReduxSample.module.css'
import Subscirbers from '../../Subscribers'

export default function ReduxSample(){
    return (<>
    <div calssName={styles.reduxContainer}>
        <Subscirbers></Subscirbers>
    </div>
    
    </>);
}