import { Request, Response } from "express"
import { collections } from '../server'
import Property from "../models/properties"

export const showProperties = async (_req: Request, res: Response) => {
  try {

    let queryP:any = _req.query;
     (() => {
       Object.keys(queryP).forEach((key)=> (!queryP[key] || queryP[key] === 'undefined' || queryP[key] === '') && delete queryP[key])
       if (queryP.bedroom) {queryP.bedroom= Number(queryP.bedroom)}
       if (queryP.bathroom) {queryP.bathroom= Number(queryP.bathroom)}
     })()

    const properties = await collections.Properties?.find(queryP).toArray() as Property[]
    res.send(properties)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const selectedProperties = async (_req: Request, res: Response) => {
  try {
    const properties = await collections.Properties?.aggregate(
      [ { $sample: { size: 4 } } ]).toArray()
    res.send(properties)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const showProperty = async (_req: Request, res:Response) => {
  const id = _req?.params;
  console.log (id)

  try {
    const property = (await collections.Properties?.findOne(id)) as Property    
    if (property) {
      res.status(200).send(property);
    }
  } catch (error) {
    res.status(500).send(error)
  }
}