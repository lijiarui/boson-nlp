import { bosonKey } from './config'
const bosonnlp = require('bosonnlp')
const boson = new bosonnlp.BosonNLP(bosonKey)

let text = "这个世界好复杂"
boson.tag(text, function (data) {
	console.log(data)
})
// [{"tag": ["r", "n", "d", "a"], 
// "word": ["这个", "世界", "好", "复杂"]}]

let textA = ['这个世界好复杂', '计算机是科学么']
boson.tag(textA, function (data) {
	data = JSON.parse(data)

	// ["r", "n", "d", "a"]
	console.log(data[0].tag) 

	// ["这个", "世界", "好", "复杂"]
	console.log(data[0].word) 

	// ["n", "vshi", "n", "y"]
	console.log(data[1].tag)

	// ["计算机", "是", "科学", "么"]
	console.log(data[1].word)
})