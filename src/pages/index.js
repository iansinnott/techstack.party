import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Techstack Podcast" />
    <h1>
      <span role="img" aria-label="microphone">
        🎙
      </span>
    </h1>
    <h1>Techstack</h1>
    <h2>A podcast about technology</h2>
    <h3>🚧 On hold... indefinitely 🚧</h3>
    <p>
      I took a step back from this project because I wasn't feeling inspired. I
      was <em>just</em> a bit late in creating this podcast, since it would have
      gone well with my search for more technical depth. I'm still searching,
      but I'm also interested in things like growing my business and writing a
      bunch of Clojure... anyway, feel free to message me on Twitter:{" "}
      <a href="https://twitter.com/ian_sinn">@ian_sinn</a>
    </p>
  </Layout>
)

export default IndexPage
