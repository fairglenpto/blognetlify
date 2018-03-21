import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import PostListing from '../components/Posts/PostListing';

const ContainerTitle = styled.div`
  background: #354198;
  padding: 10px 0px 1px 0px;
  margin: -1.0875rem -1.0875rem;
  margin-bottom: 15px;
  border-radius: 3px;
  border-bottom: solid 3px black;
  text-align: center;
  color: #ffffff;
`;
const Title = styled.div`
  display:inline-block;
  color: #ffffff;
`;
const ContainerPosts = styled.div`

`;

const IndexPage = ({ data }) => (
  <div>
    <ContainerTitle><h2>Fairglen Elementary News</h2></ContainerTitle>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
);


export default IndexPage

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
      desc
    }
  }
  allMarkdownRemark(sort: {
    fields: [frontmatter___date],
    order: DESC
  }) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD YYYY")
        }
        html
        excerpt
        fields {
          slug
        }
      }
    }
  }
}
`;
