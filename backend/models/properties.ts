import {ObjectId} from "mongodb"

export default class Property {
  constructor(
    public index: number,
    public price: string,
    public picture: string,
    public picture1: string,
    public picture2: string,
    public picture3: string,
    public status: string,
    public bedroom: number,
    public bathroom: number,
    public propertyTypes: string,
    public amenities: string,
    public email: string,
    public phone: string,
    public city: string,
    public description: string,
    public _id?: ObjectId
  ){}
}