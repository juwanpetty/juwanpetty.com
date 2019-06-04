import React from "react"
import { Layout } from "../components"

import styles from "./index.module.scss"
// import SelectedProjects from "../assets/selected-projects.svg"

const Index = () => {
  return (
    <Layout>
      {/* <SelectedProjects className={styles.SelectedProjects} />
      <ul className={styles.Projects}>
        {data.allContentfulProject.edges.map(edge => (
          <li data-cursor key={edge.node.title} className={styles.Project}>
            <a href={edge.node.url}>{edge.node.title}</a>
          </li>
        ))}
      </ul> */}
    </Layout>
  )
}

export default Index
