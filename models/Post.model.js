const { Schema, model } = require('mongoose');

const postSchema = new schema (
    {
        content: {
            type: String,
            
          },
          creatorId : {
              type: ObjectId,
          }
          picPath : {
              type: Path2D,
          }
          picName: {
              type: String,
          }
    }
)

module.exports = model('User', postSchema);

