const { Sequelize, DataTypes } = require("sequelize");
const db = require('../db/db');

const Post = db.define('post', {
    id: {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull: false
    },
    title: {
        type : DataTypes.STRING,
        allowNull : false
    },
    text: {
        type : DataTypes.TEXT,
        allowNull : false
    },
    image: {
        type: DataTypes.STRING
    },
    like: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    dislike: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    usersLiked: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        default: []
    },
    usersDisliked: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        default: []
    }
});

module.exports = Post;