var mongoose = require('mongoose');var Schema = mongoose.Schema;var glasses = new Schema({brand:{type: String,required: true},frame_type:{type: String,required: true},supplier_name:{id_supplier:{type: Schema.Types.ObjectId,required: true},name:{type: String,required: true},required: true},price:{type: Number,required: true},bought_by:[{id_client:{type: Schema.Types.ObjectId},name:{type: String,required: true}}]});