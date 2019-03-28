module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email_address: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
            }
        }
    });
    User.associate = (models) => {
        User.hasMany(models.Poll, {
            onDelete: "cascade"
        });
    }

    return User;
}