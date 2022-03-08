import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Empty, Space, Layout, Spin, Image, Badge } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import building from "../../images/building.jpg";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoBed } from "react-icons/io5";
import { FaToilet } from "react-icons/fa";
import { GiRapidshareArrow } from "react-icons/gi";
import { useParams } from "react-router-dom";
import map from "../../images/map.jpeg";
import AttachedProperties from "./AttachedProperties";

const { Content } = Layout;

const Property = () => {
  function refresh() {
    window.location.reload();
  }

  const query = useParams();
  const [property, setProperty] = useState<any>();
  const [loading, setLoading] = useState(false);

  let id = query.propid;

  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      try {
        const { data } = await axios({
          method: "GET",
          url: `/property/${query.propid}`,
        });
        // const arrayProperty = Object.keys(data)
        setProperty([data]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperty();
  }, []);

  return (
    <>
      {!loading ? (
        <Layout>
          <Content style={{ overflowX: "hidden" }}>
            <Row>
              <Col span={21} push={1} style={{ paddingTop: "20px" }}>
                Most viewed Property in London
              </Col>
              <Col span={3} style={{ paddingTop: "20px" }}>
                <span>
                  <UnorderedListOutlined
                    style={{ fontSize: "20px", paddingBottom: "5px" }}
                  />{" "}
                  <b> List</b>
                </span>
              </Col>
            </Row>
            {/* (properties?.map((prop) => ( */}

            <Row>
              {property?.map((prop: any) => (
                <>
                  <Col span={10} xs={0} lg={9} push={1}>
                    <Image src={map} height={675} />
                  </Col>

                  <Col
                    span={14}
                    xs={24}
                    md={24}
                    lg={14}
                    style={{ backgroundColor: "white", height: "675px" }}
                  >
                    <Row>
                      <Col
                        span={19}
                        push={1}
                        style={{ paddingTop: "5px", color: "green" }}
                      >
                        MOST RELEVANT
                      </Col>
                      <Col span={5} style={{ paddingTop: "5px" }}>
                        <Space size={15}>
                          <span>
                            <BsFillSuitHeartFill
                              style={{ fontSize: "20px", color: "green" }}
                            />
                          </span>
                          <span>
                            <FiMail
                              style={{ fontSize: "20px", color: "green" }}
                            />
                          </span>
                        </Space>
                      </Col>
                    </Row>{" "}
                    <Row>
                      <Col push={1}>
                        {/* <div style={{width:'100%'}}> */}
                        <Badge count={`$${prop.price}`} offset={[-80, 40]}>
                          <Image height={200} src={building} width={305} />
                        </Badge>
                        {/* </div> */}
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col push={1}>
                        <h5>
                          <b>{prop.address}</b>
                        </h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col push={1}>
                        <p>
                          {prop.city}, {prop.state}, {prop.country}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col push={1}>
                        <Row>
                          <Space size={17}>
                            <Col>
                              <IoBed /> {prop.bedroom}
                              <p>Bedrooms</p>
                            </Col>
                            <Col>
                              <FaToilet /> {prop.bathroom}
                              <p>Bathrooms</p>
                            </Col>
                            <Col>
                              <GiRapidshareArrow />
                              {prop.area}ft<sup>2</sup>
                              <p>Area</p>
                            </Col>
                          </Space>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col push={1}>
                        <Row>
                          <Col span={20}>
                            <p>{prop.about}</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col span={22}>
                            <h5>More images</h5>
                          </Col>
                        </Row>

                        <Row style={{ marginBottom: "10px" }}>
                          <Space size={10}>
                            <Image width={100} src={prop.picture2} />
                            <Image width={100} src={prop.picture3} />
                            <Image width={100} src={prop.picture4} />
                            <Image width={100} src={prop.picture} />
                          </Space>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </>
              ))}
            </Row>
            <br />
          </Content>
        </Layout>
      ) : (
        <>
          <Row style={{ flex: "auto" }}>
            <Col span={24}>
              <Empty
                //  style={{display:'block'}}
                description={<span>No Properties Yet</span>}
              />
              <Spin size="large" style={{ display: "block" }} />
            </Col>
          </Row>
        </>
      )}
      <AttachedProperties id={id} refresh={refresh} />
    </>
  );
};

export default Property;
