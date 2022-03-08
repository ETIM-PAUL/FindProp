//External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

declare var process : {
  env: {
    DB_CONN_STRING: string
    DataB:string
    COLLECTION: string
    DB_NAME: string
  }
}
export const collections: { Properties?: mongoDB.Collection } = {}
export async function connectToDatabase () {
  dotenv.config();
  try {
  
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DataB);
  
    const propertiesCollection: mongoDB.Collection = db.collection(process.env.COLLECTION);
  
    collections.Properties = propertiesCollection;
    
    console.log(`Successfully connected to database: ${db.databaseName}`);
    
  } catch (error) {
    console.log(error)
  }

}