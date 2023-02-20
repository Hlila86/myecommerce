import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Categories.module.css'

const Categories = () => {
  return (
    <div className={styles.categories}>

<h1 className={styles.title}>Nos Categories</h1>
<hr/>

<div className={styles.container}>

<div className={styles.catItem}>
<Link href="/femmes">
<Image src='/images/girl.jpg' 
alt=''
width={300}
height={250}
/>
<span className={styles.itemTitle}>Femmes</span>
</Link>
</div>

<div className={styles.catItem}>
<Link href="/hommes">
<Image src='/images/man.jfif' 
alt=''
width={300}
height={250}
/>
<span className={styles.itemTitle}>Femmes</span>
</Link>
</div>

<div className={styles.catItem}>
<Link href="/hommes">
<Image src='/images/kids.jpg' 
alt=''
width={300}
height={250}
/>
<span className={styles.itemTitle}>Femmes</span>
</Link>
</div>

<div className={styles.catItem}>
<Link href="/kitchen">
<Image src='/images/kitchen.png' 
alt=''
width={300}
height={250}
/>
<span className={styles.itemTitle}>Cuisine</span>
</Link>
</div>

  
</div>


</div>
  )
}

export default Categories