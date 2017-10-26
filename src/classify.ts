import { bosonKey } from './config'
const bosonnlp = require('bosonnlp')
const nlp = new bosonnlp.BosonNLP(bosonKey)

const text = ['俄否决安理会谴责叙军战机空袭阿勒颇平民',
'邓紫棋谈男友林宥嘉：我觉得我比他唱得好',
'Facebook收购印度初创公司']
nlp.classify(text, function (data) {
  // [5, 4, 8]
  console.log("classify:", data)
})