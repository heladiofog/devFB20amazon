'use strict';

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            },
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        gender: {
            type: DataTypes.STRING,
            allowNull: true
        },

        birthDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        //Sirve para ver el estado del usuario (borrado logico)
        status: {
            type: DataTypes.BOOLEAN,
            validate: {
                defaultValue: true
            }
        }

    });

    //   genero:{}

    User.beforeCreate(function (user) {
        return crypt(user.password).then(function (success) {
            user.password = success;
        }).catch(function (err) {
            if (err) console.log(err);
        });
    });

    var crypt = function crypt(password) {
        return new Promise(function (resolve, reject) {
            _bcryptNodejs2.default.genSalt(10, function (err, salt) {
                if (err) reject(err);
                _bcryptNodejs2.default.hash(password, salt, null, function (err, hash) {
                    if (err) reject(err);
                    resolve(hash);
                });
            });
        });
    };
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};