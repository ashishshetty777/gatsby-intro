// To get data as per name in filesystem
// query {
//     allFile(filter: {sourceInstanceName: {eq: "posts"}}){
//       nodes {
//         childMdx {
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }

// Gatsby Benifits

// Follows the PRPL pattern and other performance best practices
// Generates only static assets (no server required)
// Optimizes and lazy-loads assets
// Normalizes third-party data

// Image Sharp Transformer

// query {
//     allFile(filter: {sourceInstanceName: {eq: "images"}}){
//       nodes {
//         relativePath
//         childImageSharp {
//           fluid {
//             src
//             srcSet
//           }
//         }
//       }
//     }
//   }
