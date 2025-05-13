const chunkService = require('../services/chunkService')
const knowledge = require('../data/knowledge.json')

exports.getChunk = (req, res) => {
  const { query } = req.body
  const chunk = chunkService.findRelevantChunk(query, knowledge)
  if (!chunk) return res.json({ message: 'couldn’t find anything helpful' })
  res.json({ data: chunk })
}
