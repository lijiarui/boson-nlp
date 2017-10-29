/**
 * 实体识别
 * 从文本中发现有意义的信息，例如人名、公司名、产品名、时间、地点等。
 * 输出的结果包括了分析、词性标注和实体
 */
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

nlp.ner('对于该小孩是不是郑尚⾦的孩⼦，目前已做亲⼦鉴定，结果还没出来，纪检部门仍在调查之中。成都商报记者 姚永忠', function (result) {
  console.log(result)
})

nlp.ner('我想去阿里巴巴和腾讯', function (result) {
  console.log(result)
})
