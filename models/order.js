// // 'use strict';
// // module.exports = (sequelize, DataTypes) => {
// //   var Order = sequelize.define('Order', {}, {});
// //   Order.associate = function(models) {
// //     // associations can be defined here
// //   };
// //   return Order;
// // };

// 'use strict'
// user = require('../models/user.js')(sequelize, Sequelize)
// detOrder = require('../models/Det__Order.js')(sequelize, Sequelize)

// module.exports = (sequelize, DataTypes) => {
//     const Order = sequelize.define('Order', {
//         id: {
//             type: DataTypes.UUID,
//             primaryKey: true,
//             defaultValue: DataTypes.UUIDV4
//         },
//         status: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         address: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },


//         paymethod: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         totalPrice: {
//             type: DataTypes.DECIMAL(10, 2),
//             allowNull: false
//         },
//         created_at: {
//             type: DataTypes.DATE,
//             allowNull: false
//         },
//         updated_at: DataTypes.DATE,
//         deleted_at: DataTypes.DATE
//     }, {
//         paranoid: true,
//         underscored: true
//     });

//     Order.associate = function(models) { //
//         // associations can be defined here

//         Order.belongsTo(user)
//         Order.hasMany(detOrder)
//     };

//     return Order;
// };



module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        // idOrder: {
        //     allowNull: false,
        //     autoIncrement: true,
        //     primaryKey: true,
        //     type: DataTypes.INTEGER
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },

        status: {
            type: DataTypes.STRING //,
                //allowNull: false
        },
        address: {
            type: DataTypes.STRING //,
                //allowNull: false
        },


        paymethod: {
            type: DataTypes.STRING //,
                //allowNull: false
        },

        totalPrice: {
            type: DataTypes.DECIMAL(10, 2) //,
                //allowNull: false
        },
        description: {
            type: DataTypes.STRING //,
                //allowNull: false
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    })


    Order.associate = function(models) {
        //
        Order.hasMany(models.Order)


    };

    return Order;
}