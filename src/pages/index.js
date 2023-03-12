// Step 1: Import React
import * as React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
      alt="Krzysztof"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Krzysztof_Kononowicz.JPG/1200px-Krzysztof_Kononowicz.JPG"
      />
      <StaticImage
      alt="Major"
      src="../images/major.jpg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage