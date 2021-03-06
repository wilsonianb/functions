'use strict'

module.exports = async (event, context) => {
  console.log(event)
  const result = {
    'status': 'Received input: ' + JSON.stringify(event.body)
  }

  return context
    .status(402)
    .succeed(result)
}

