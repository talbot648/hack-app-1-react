'use strict';

const AWS = require('aws-sdk')

module.exports.handle = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "World!"
    }),
  };
};

module.exports.test = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "Testing"
    }),
  };
};

module.exports.getImgUrl = async(event, context) => {
  let imgUrl = event.pathParameters.filename;
  return {
    statusCode: 200,
    body: JSON.stringify({
      imgUrl
    }),
  };
};


// const textract = new AWS.Textract({apiVersion: '2018-06-27'})

// module.exports.runTextract = async(event, context) => {
//   let testBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjiM758h8ABZwCu+TmxCcAAAAASUVORK5CYII=';
  
//     // const imageBuffer = Buffer.from(testBase64, 'base64')

//     const params = {
//       Document: {
//         Bytes: testBase64,
//       },
//       FeatureTypes: ['WORDS']
//     }

//     try {
//       const result = await textract.analyzeDocument(params).promise()
//       return result
//     } catch (error) {
//       console.error('Textract Error');
//       throw error
//     }
// }

const textract = new AWS.Textract({ apiVersion: '2018-06-27' });
module.exports.runTextract = async (event, context) => {
  // Base64 encoded image
  let testBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjiM758h8ABZwCu+TmxCcAAAAASUVORK5CYII=';
  // Convert base64 to binary buffer
  const imageBuffer = Buffer.from(testBase64, 'base64');
  // Parameters for analyzeDocument
  const params = {
    Document: {
      Bytes: imageBuffer,
    },
    FeatureTypes: ['TABLES'] // Make sure this is correct based on what you need
  };
  try {
    // Call the analyzeDocument API
    const result = await textract.analyzeDocument(params).promise();
    console.log(result);
    
    return result;
  } catch (error) {
    console.error('Textract Error:', error);
    throw error;
  }
};