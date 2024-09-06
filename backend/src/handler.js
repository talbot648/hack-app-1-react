'use strict';
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

module.exports.textract = async(event, context) => {
  let testBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjiM758h8ABZwCu+TmxCcAAAAASUVORK5CYII=';
}