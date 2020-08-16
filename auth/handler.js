'use strict'

module.exports = async (event, context) => {
  console.log(event)
  const result = {
    'status': 'Received input: ' + JSON.stringify(event.body)
  }

  if (event.headers['x-original-url'].indexOf('wilsonianb.of.codiusfaas.net') !== -1) {
    return context
      .status(402)
      .succeed({})
  }
  return context
    .status(200)
    .succeed(result)
}

