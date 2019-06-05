import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "../components"

import styles from "./index.module.scss"
import SelectedProjects from "../assets/selected-projects.svg"

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
              <a href="/">
                <p className={styles.Description}>
                  Personal Project — Chrome Extension
                </p>
                <p className={styles.Title}>Headlines</p>
              </a>
            </li>
            <li className={styles.Project}>
              <a href="/">
                <p className={styles.Description}>
                  Personal Project — Chrome Extension
                </p>
                <p className={styles.Title}>Picture in Picture</p>
              </a>
            </li>
          </ul>
        </section>
        {/* <SelectedProjects className={styles.SelectedProjects} />
      <ul className={styles.Projects}>
        {data.allContentfulProject.edges.map(edge => (
          <li data-cursor key={edge.node.title} className={styles.Project}>
            <a href={edge.node.url}>{edge.node.title}</a>
          </li>
        ))}
      </ul> */}
        <section className={styles.Section}>
          <h1 className={styles.SectionHeader}>Work</h1>
          <ul className={styles.Projects}>
            <li className={styles.Project}>
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
