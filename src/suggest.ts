import { bosonKey } from './config'
const bosonnlp = require('bosonnlp')
const nlp = new bosonnlp.BosonNLP(bosonKey)

const term = '粉丝'
nlp.suggest(term, function (data) {
	console.log("suggest:", data)
})

let options = {}
// options.top_k default 10
options['top_k'] = 2
nlp.suggest(term, options, function (data) {
	console.log("suggest:", data)
})