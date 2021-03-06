/*
	mongoDB Schema for altusdb
*/
const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var CelebdataSchema = new Schema({
    url: {
       type: String,
       default: ''
    },
    style: {
      type: String,
      default: '' 
   },
    image: {
        type: String,
        default: '' 
     },
     profiletext: {
        type: String,
        default: '' 
     },
     lowPrice: {
        type: Number,
        default: 0 
     },
     highPrice: {
      type: Number,
      default: 0 
   },
     Type: {
        type: String,
        default: '' 
     },
     Category: {
        type: String,
        default: '' 
     },
     faq: [
        {
           ques:{
           type: String,
           default: '' 
         },
            answ:{
            type: String,
            default: '' 
         }
      }],
     name: {
        type: String,
        default: '' 
     }
});
CelebdataSchema.set("toJSON", {virtuals: true});
CelebdataSchema.set("toObject", {virtuals: true});
CelebdataSchema.index({name: 'text'});
module.exports  = mongoose.model('Celebdata', CelebdataSchema);

