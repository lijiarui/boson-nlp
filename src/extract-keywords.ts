import { bosonKey } from './config'
const bosonnlp = require('bosonnlp')
const nlp = new bosonnlp.BosonNLP(bosonKey)

const text = ["病毒式媒体网站：让新闻迅速蔓延"]
nlp.extractKeywords(text, function (data) {
	data = JSON.parse(data)
	console.log(data)
})

/**
 * [ [ [ 0.5686631749811326, '蔓延' ],
 *   [ 0.5671956747680966, '病毒' ],
 *   [ 0.33993439662135194, '迅速' ],
 *   [ 0.30642011458238383, '网站' ],
 *   [ 0.26392731183346607, '新闻' ],
 *   [ 0.23807884315568398, '媒体' ],
 *   [ 0.12876489756725826, '式' ],
 *   [ 0.0504282185215189, '让' ] ] ]
 */