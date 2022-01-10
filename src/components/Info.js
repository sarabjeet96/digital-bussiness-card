import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import styles from './Info.module.css';
import image from '../sarabjeet.jpg';

function Info(){
    return (
        <div>
            <img src={image} alt='my-image' />
            <div className={styles.about}>
                <h1>Sarabjeet Somnal</h1>
                <p className={styles.designation}>Frontend Developer</p>
                <small>SarabjeetSomnal.site</small>
            </div>
            <div className={styles.btn}>
                <button className={styles.mail}>
                   <MdEmail size={18}/> Email
                </button>
                <button className={styles.lin}>
                    <FaLinkedin size={18}/>LinkedIn
                </button>
            </div>
        </div>
    )
}

export default Info;