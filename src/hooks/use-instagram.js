import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
  // This is not working because Instagram needs a token to fetch user profile
  //   const data = useStaticQuery(graphql`
  //     query {
  //       allInstaNode(limit: 12) {
  //         nodes {
  //           id
  //           caption
  //           username
  //           localFile {
  //             childImageSharp {
  //               fluid(maxWidth: 120, maxHeight: 120) {
  //                 ...GatsbyImageSharpFluid_withWebp
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `);
  //   return data.allInstaNode.nodes.map(node => ({
  //     ...node.localFile.childImageSharp,
  //     id: node.id,
  //     caption: node.caption,
  //     username: node.username,
  //   }));

  const images = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile_pic.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 120, maxHeight: 120) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      scuba: file(relativePath: { eq: "scuba.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 120, maxHeight: 120) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      hair: file(relativePath: { eq: "long_hair.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 120, maxHeight: 120) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return [
    {
      id: '1234567',
      caption: 'Mock Instagram caption',
      username: 'shetty.sh',
      image: images.hair.sharp.fluid,
    },
    {
      id: '23467625',
      caption: 'Mock Instagram Scuba caption',
      username: 'shetty.sh',
      image: images.scuba.sharp.fluid,
    },
    {
      id: '930476253443',
      caption: 'Mock Instagram Profile Caption',
      username: 'shetty.sh',
      image: images.profile.sharp.fluid,
    },
  ];
};

export default useInstagram;
