import React from 'react'
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <h1>Patrick Journey</h1>
      <div className={styles.header_info}>
          <nav>
           <ul>
            <li>Über mich</li>
            <li>Meine Projecte</li>
            <li>Meine Hobbys</li>
            <li>Meine Pläne</li>
           </ul>
          </nav>
      </div>
    </div>
  
  )
}

export default Header