import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children, data, location }) => (
  <div>
    <Helmet
      title="Fairglen PTO"
      meta={[
        { name: 'description', content: 'Fairglen Elementary PTO, Cocoa Fl' },
        { name: 'keywords', content: 'school, pto, cocoa, florida, fl, fairglen, elementary, parent, teacher, education' },
      ]}
    />
    <Header data={data} location={location} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        width: '95vw',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: '1rem',
        background: 'rgba(53, 65, 152, .6)',                
        borderRadius: '3px',
        boxShadow: '0 1px 15px 1px #000',
        marginBottom: '20px'
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: {regex: "/booksReverse.jpg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;