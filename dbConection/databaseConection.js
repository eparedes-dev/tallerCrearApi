const mysql =require('mysql');

class databaseConection{

    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    connect(){
        this.connection.connect((err)=>{
            if(err){
                console.error('Error connectando la base de datos: '+err.stack);
                return;
            }
            console.log('Conexion establecida con el ID'+this.connection.threadId);
        });
    }

   getConnection(){
    return this.connection;
   }
}

module.exports = databaseConection;
