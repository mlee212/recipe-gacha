import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import RecipeForm from '../components/RecipeForm';
import RollMealButton from '../components/RollMealButton';

// import clientPromise from "../lib/mongodb"


export default function Home() {

  
  function showRecipeList() {
    fetch("/api/recipes")
    // .then((data) => {
        
    //   console.log(data);
    // })
  }

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Gacha</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/3800519.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Recipe Gacha
        </h1>

        

        <div className={styles.description}>
          <RecipeForm/>
        </div>

        <RollMealButton/>

        {/* <button onClick={showRecipeList}>show recipes</button> */}

        
      </main>

      
    </div>
  )
}
