import { bosonKey } from './config'
const bosonnlp = require('bosonnlp')
const nlp = new bosonnlp.BosonNLP(bosonKey)

const text = ['他是个傻逼','美好的世界']
nlp.sentiment(text, function (data) {
    // [非负面概率, 负面概率]
    // [[0.6519134382562579, 0.34808656174374203], [0.92706110187413, 0.07293889812586994]]
	console.log(data)
})