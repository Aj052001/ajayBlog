import React from 'react'
import styles from "./authList.module.css"
import Link from 'next/link';
export const AuthList = () => {
  //temporary
  const status = "notauthorized";
  return (
    <>
    {
      status === "notauthorized"? (
          <Link href="/login">Login</Link>
      ):(
          <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
          </>
      )
    }
    </>
  )
}
