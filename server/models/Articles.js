const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticlesSchema = new Schema({
    title: 'String',
    description: 'String',
    author: 'String',
},
{ timestamps: true });

ArticlesSchema.method.toJSON = function () {
    return {
        __id: this.__id,
        description: this.body,
        author: this.author,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};
// const ArticlesSchema = new mongoose.Schema({
//     title: {
//         type : String,
//         required : true,
//     },
//     author: {
//         type : String,
//         required : true,
//     },
//     description: {
//         type : String,

//     }
// },
//     {
//         timestamps: true
//     }
// )

const Articles = mongoose.model('Articles', ArticlesSchema);

module.exports = Articles;