module.exports = app => {
    const { mongoose } = app,
        { Schema } = mongoose
    const ArticleSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    })
    return mongoose.model('Article', ArticleSchema)
}
