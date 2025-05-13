const { isWithinTokenLimit } = require('../utils/tokenUtils')

exports.findRelevantChunk = (query, data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].tags.some(tag => query.toLowerCase().includes(tag))) {
      const text = data[i].content
      if (isWithinTokenLimit(text)) return text
    }
  }
  return null
}
