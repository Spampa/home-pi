const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(process.cwd(), 'db.sqlite')
});

const Role = sequelize.define('Role', {
    roleName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        defaultValue: null, // Sarà assegnato in un hook
        references: {
            model: Role,
            key: 'id'
        }
    }
});

Role.hasMany(User, { foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId' });

//hook assegnazione ruolo default
User.beforeCreate(async (user, options) => {
    if(!user.roleId){
        const defaultRole = await Role.findOne({ where: { roleName: 'user' } });
        if(defaultRole){
            user.roleId = defaultRole.id;
        }
    }
})

async function initDB() {
    await sequelize.sync();

    const roles = [{roleName: 'admin'}, {roleName: 'user'}];

    for(const role of roles){
        await Role.findOrCreate({ where: role });
    }
}

module.exports = {
    sequelize,
    User,
    initDB
}