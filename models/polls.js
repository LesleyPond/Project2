module.exports = (sequelize, DataTypes) => {
// Creation of table called "Poll", with fields for Question, Response Options, and Votes. 
// Table is saved as const "Poll" and returned
  const Poll = sequelize.define('Poll', {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [1],
      },
    },
    option1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [1],
      },
    },
    option1Votes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    option2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [1],
      },
    },
    option2Votes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    option3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option3Votes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    option4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option4Votes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    option5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option5Votes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    option6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option6Votes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    option7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option7Votes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    option8: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option8Votes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    option9: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option9Votes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    option10: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option10Votes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    resultsPageURL: {
      type: DataTypes.STRING,
    },
    votingPageURL: {
      type: DataTypes.STRING,
    },
    sessionID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
  });
  Poll.associate = (models)=>{
    Poll.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Poll;
};
