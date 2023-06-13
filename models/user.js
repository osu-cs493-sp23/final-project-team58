const { DataTypes } = require("sequelize")
const sequelize = require("../lib/sequelize.js")

const bcrypt = require("bcryptjs")

const User = sequelize.define('user',{
	name: {type: DataTypes.STRING, allowNull: false},
	email: {type: DataTypes.STRING, allowNull: false, unique: true},
	password: {
		type: DataTypes.STRING,
		set(value) {
			// Storing passwords in plaintext in the database is terrible.
			// Hashing the value with an appropriate cryptographic hash function is better.
			this.setDataValue('password', bcrypt.hashSync(value));
		},
		allowNull: false
	},
	role: {type: DataTypes.STRING, allowNull: false}
})

exports.User = User

exports.UserClientFields = [
	'name',
	'email',
	'password',
	'role' //student, teacher, or admin
]