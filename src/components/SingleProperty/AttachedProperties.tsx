import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Row,Col,Space,Card, Badge, Image, Button, } from 'antd'
import { BsFillSuitHeartFill } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import { IoBed } from "react-icons/io5"
import { FaToilet } from "react-icons/fa"
import { GiRapidshareArrow } from "react-icons/gi"
import axios from "axios"

const AttachedProperties = (id:any,refresh:any) => {
const [properties, setProperties] = useState<any>([])
console.log({id})
  useEffect(() => {
    const fetchProperty = async () => {
      try {
      const { data } = await axios({
        method: "GET",
        url: `/selectedproperties`, 
      })
      // const arrayProperty = Object.keys(data)
      setProperties(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  fetchProperty()
  }, [])


  return (
    <>
    <Row style={{ marginTop:'10px',justifyContent:'center'}} gutter={[10,10]}>
    {properties?.map((prop:any) => (
     <Link to={`/property/${prop._id}`} onClick={refresh}>
      <Space>
     <Col span={6} key = {prop._id} >
                <Badge count={`$${prop.price}`} overflowCount={99999} offset={[-50, 40]}>
                  <Image src={prop.picture} style={{ width: "310px", height:'150px' }} />
                </Badge>
                <Card style={{ width: 310 }}>
                  <Row>
                    <Col span={19}>
                      <b>{prop.address}</b>
                    </Col>
                    <Col span={5}>
                      <Space>
                        <span>
                          <BsFillSuitHeartFill style={{ fontSize: "20px", color: "gainsboro" }} />
                        </span>
                        <span>
                          <FiMail style={{ fontSize: "20px" }} />
                        </span>
                      </Space>
                    </Col>
                  </Row>
                  <Row>{prop.city}, {prop.state}</Row>
                  <Row>
                    <Space size={30}>
                      <Col style={{ fontSize: "12px" }}>
                        <IoBed /> {prop.bedroom}
                      </Col>
                      <Col style={{ fontSize: "12px" }}>
                        <FaToilet /> {prop.bathroom}
                      </Col>
                      <Col style={{ fontSize: "12px" }}>
                        <GiRapidshareArrow />
                        {prop.area}ft<sup>2</sup>
                      </Col>
                    </Space>
                  </Row><br/>
                {/* <Button 
                onClick={refresh}
                type="primary" 
                style={{marginRight:'3'}}>View
                </Button> */}
                </Card>
              </Col>
              </Space>
              </Link>
              ))}
            </Row>
            <br />
            </>
  )
}

export default AttachedProperties