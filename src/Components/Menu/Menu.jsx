import styles from './Menu.module.css'
import React, {useState} from 'react'
function    Menu ({onSus, mScore}){
    function sus (){
        onSus()
    }
    return (
        <div className={styles.menuWrapper}>
        <h1>FLAPPY AB</h1>
            {mScore ?   <h1>Your Result: {mScore}</h1> : null }
            <img width={200}
                 height={200} src="https://i.imgur.com/mjWeLOe.png"/>
        <button onClick={sus}>PLAY </button>
        </div>
    )
}
export default  Menu