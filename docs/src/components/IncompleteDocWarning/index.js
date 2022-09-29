import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function IncompleteDocWarning() {
    return (
        <div>
            This documentation is incomplete. 
            <br/>
            If you want to help, please see our guide for <a href="/developer/how-to-contribute">How to Contribute</a>.
        </div>
    )
}