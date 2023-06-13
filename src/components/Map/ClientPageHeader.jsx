import React from "react";
import styles from './ClientPageHeader.module.css';

function ClientPageHeader() {
    return (
        <div class={styles.slider}>
            <div class={styles.content}>
                <div class={styles.principal}>
                    <h1>Our Clients</h1>
                </div>
            </div>
        </div>
    );
}

export default ClientPageHeader;