import { bosonKey } from './config'
const bosonnlp = require('bosonnlp')
const nlp = new bosonnlp.BosonNLP(bosonKey)

// 句法分析
const text = ['我以最快的速度吃了午饭']
nlp.depparser(text, function (data) {
	console.log(data)
})

/**
 * Output
 * [{
 * 	"head": [6, 6, 3, 4, 5, 1, -1, 6, 6], 
 * 	"role": ["SBJ", "MNR", "VMOD", "DEC", "NMOD", "POBJ", "ROOT", "VMOD", "OBJ"], 
 * 	"tag": ["PN", "P", "AD", "VA", "DEC", "NN", "VV", "AS", "NN"], 
 * 	"word": ["我", "以", "最", "快", "的", "速度", "吃", "了", "午饭"]
 * }]
 */