import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ArrowRight } from "react-feather"
import { Layout } from "../components"

import styles from "./index.module.scss"

const Index = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allContentfulProject {
  //       edges {
  //         node {
  //           url
  //           title
  //           description
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <div className={styles.IndexContainer}>
        <section className={styles.Section}>
          <h1 className={styles.SectionHeader}>Selected Projects</h1>
          <ul className={styles.Projects}>
            <li className={styles.Project}>
              <div className={styles.Image} />
              <div className={styles.Meta}>
                <h1 className={styles.Title}>
                  <a href="">Headlines</a>
                </h1>
                <p className={styles.Description}>
                  Love Instax Mini photos? We like them too. That's what
                  inspired us to create Tookapic Mini Prints! Cute little cards
                  with your photos and a short note.
                </p>
                <p className={styles.Detail}>
                  March 2018
                  <br />
                  Chrome Extension
                </p>
                <a className={styles.Link} href="">
                  Link to project
                  <ArrowRight className={styles.LinkIcon} size={20} />
                </a>
              </div>
              <div className={styles.Image} />
              <div className={styles.Image} />
            </li>
          </ul>
        </section>
        <section className={styles.Section}>
          <h1 className={styles.SectionHeader}>Work</h1>
          <ul className={styles.Jobs}>
            <li className={styles.Job}>
              <a href="/">
                <p className={styles.Description}>September 2018 — May 2019</p>
                <p className={styles.Title}>Shopify</p>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default Index
