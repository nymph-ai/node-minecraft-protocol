const modulePath = process.env.MINECRAFT_DATA_PATH

module.exports = modulePath ? require(modulePath) : require('minecraft-data')
