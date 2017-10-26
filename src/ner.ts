import { bosonKey } from './config'
const bosonnlp = require('bosonnlp')
const nlp = new bosonnlp.BosonNLP(bosonKey)

// test ner
nlp.ner('帮我订一张北京到上海的机票', function (result) {
  console.log(result)
})

/**
 * Output
 * [{
 *  "tag": ["v", "r", "v", "m", "q", "ns", "p", "ns", "ude", "n"], 
 *  "word": ["帮", "我", "订", "一", "张", "北京", "到", "上海", "的", "机票"], 
 *  "entity": [[5, 6, "location"], [7, 8, "location"]]}]
 */