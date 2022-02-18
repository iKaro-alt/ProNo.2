import Sequelize, { QueryTypes } from "sequelize"
import dotenv from "dotenv/config"
import tedious from "tedious"


const sequelize = new Sequelize("DB_Sala443","login_sala443","@tAv3;?55",{
    host:"serversala443.database.windows.net",
    dialect:'mssql',
    port:"1433",
    pool: {
	max: 5,
	min: 0,
	idle: 10000
    },
    dialectOptions: {
	encrypt: true
    }
})


let results = await sequelize.query("SELECT * FROM [dbo].[D_Categoria]",{type: QueryTypes.SELECT})

console.log(results)
