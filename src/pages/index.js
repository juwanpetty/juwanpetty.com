import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ArrowRight } from "react-feather"
import { Layout } from "../components"

import CodeSandbox from "../assets/codesandbox.svg"
import Dribbble from "../assets/dribbble.svg"
import Github from "../assets/github.svg"
import Instagram from "../assets/instagram.svg"
import Twitter from "../assets/twitter.svg"
import YouTube from "../assets/youtube.svg"

import styles from "./index.module.scss"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            url
            title
            description
            type
            date
            images {
              fluid {
                src
              }
            }
          }
        }
      }
      allContentfulWork {
        edges {
          node {
            url
            title
            description
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={styles.IndexContainer}>
        <section className={styles.Section}>
          <h1 className={styles.SectionHeader}>Selected Projects</h1>
          <ul className={styles.Projects}>
            {data.allContentfulProject.edges.map(edge => (
              <li className={styles.Project}>
                <div className={styles.Meta}>
                  <h1 className={styles.Title}>
                    <a href={edge.node.url}>{edge.node.title}</a>
                  </h1>
                  <p className={styles.Description}>{edge.node.description}</p>
                  <p className={styles.Detail}>
                    {edge.node.date}
                    <br />
                    {edge.node.type}
                  </p>
                  <a className={styles.Link} href={edge.node.url}>
                    Link to project
                    <ArrowRight className={styles.LinkIcon} size={20} />
                  </a>
                </div>
                {edge.node.images.map(image => (
                  <div className={styles.ImageContainer}>
                    <img
                      src={image.fluid.src}
                      alt={image.title}
                      className={styles.Image}
                    />
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.Section}>
          <h1 className={styles.SectionHeader}>Work</h1>
          <ul className={styles.Jobs}>
            {data.allContentfulWork.edges.map(edge => (
              <li className={styles.Job}>
                <a href={edge.node.url}>
                  <p className={styles.Description}>{edge.node.description}</p>
                  <p className={styles.Title}>{edge.node.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.Section}>
          <h1 className={styles.SectionHeader}>Social</h1>
          <ul className={styles.Social}>
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <Twitter />
            </a>
            <a href="">
              <Dribbble />
            </a>
            <a href="">
              <YouTube />
            </a>
            <a href="">
              <Github />
            </a>
            <a href="">
              <CodeSandbox />
            </a>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default Index
