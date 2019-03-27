module.exports = (sequelize, DataTypes) => {
    const Poll = sequelize.define("Poll", {
        question: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull: true,
                len : [1],
            }
        },
        option1 : {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull: true,
                len: [1],
            }
        },
        option1Votes: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        option2 : {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull: true,
                len: [1],
            }
        },option2Votes: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        option3 : {
            type: DataTypes.STRING,
            allowNull: true
        },
        option3Votes: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        option4 : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option4Votes: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        option5 : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option5Votes: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        option6 : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option6Votes: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        option7 : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option7Votes: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        option8 : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option8Votes: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        option9 : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option9Votes: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        option10 : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        option10Votes: {
            type:DataTypes.INTEGER,
            allowNull: true
        },

    });
    Poll.associate = (models)=>{
        Poll.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Poll;
}