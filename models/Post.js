const db = require('./db')

const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    post: {
        type:db.Sequelize.TEXT
    }

});

module.exports = Post;

//Post.sync({force:true});