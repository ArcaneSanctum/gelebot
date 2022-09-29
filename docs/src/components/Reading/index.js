import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Reading(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <a target="_blank" href={props.children}>{props.children}</a>
            <hr></hr>
        </div>
    )
}