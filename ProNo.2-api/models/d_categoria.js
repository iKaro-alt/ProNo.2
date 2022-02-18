import {Model,DataTypes} from "sequelize"


module exports = (sequelize,Datatypes) =>  {

    class d_categoria extends Model{

	static associate(models){

	}
    }
    d_categoria.init({
	PK_DIM_CATEGORIA:{
	    type:DataTypes.INTEGER
	},
	LOADED_DATE:DataTypes.DATE,
	VALID_TO:DataTypes.DATE,
	Empresa:DataTypes.STRING,
	Descricao:DataTypes.STRING,
	Segmento_De_Listagem:DataTypes.STRING,
	Tag_along_ON_PN:DataTypes.FLOAT,
	Free:DataTypes.FLOAT,
	Freefloat_ON_PN:DataTypes.STRING,
	GOVERNO:DataTypes.STRING,
	Share:DataTypes.STRING,
	LISTAGEM_DE_CODIGO:DataTypes.STRING
    });
    return d_categoria;
}
