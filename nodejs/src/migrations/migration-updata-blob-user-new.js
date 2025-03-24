module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Users', 'image', {
            type: Sequelize.BLOB('long'),
            allowNull: true,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Users', 'image', {
            type: Sequelize.STRING,
            allowNull: true,
        });
    }
};
