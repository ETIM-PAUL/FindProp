/* eslint-disable prefer-const */
import React, { useState, useEffect } from "react";
import { BarsOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Button,
  Input,
  Space,
  Layout,
  Empty,
  Drawer,
  Card,
  Radio,
  Checkbox,
  Badge,
  Spin,
} from "antd";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoBed } from "react-icons/io5";
import { FaToilet } from "react-icons/fa";
import { GiRapidshareArrow } from "react-icons/gi";
import axios, { Canceler } from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

const { Search } = Input;
const { Sider, Content } = Layout;

const Properties = () => {
  let propStatus: string[] = ["buy", "rent"];
  let propType: string[] = ["Apartment", "Landplot", "Commercial", "House"];
  let propFurnished: string[] = [
    "Furnished",
    "Shared accomodation",
    "Pet Allowed",
  ];
  let bedCount: number[] = [1, 2, 3, 4, 5];
  let bathCount: number[] = [1, 2, 3, 4, 5];

  const navigate = useNavigate();
  const location = useLocation();

  const params = location.search ? location.search : null;
  const [properties, setProperties] = useState<any[]>([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amenities, setAmenities] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [filters, setFilters] = useState("");

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onChange = (checkedValues: any) => {
    console.log(checkedValues);
  };

  const changeStatus = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    setStatus(button.value);
  };

  const changeType = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    setType(button.value);
  };

  const changeBedroom = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    // let value = +button.value
    setBedroom(button.value);
  };

  const changeBathroom = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    // let value = parseInt(button.value)
    setBathroom(button.value);
  };

  const changeAmenities = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    setAmenities(button.value);
  };

  const allFilter = async () => {
    let urlFilter = `?status=${status}&type=${type}&amenities=${amenities}&bedroom=${bedroom}&bathroom=${bathroom}`;
    navigate(urlFilter);
    setFilters(urlFilter);
  };

  const resetFilter = () => {
    setFilters("");
    navigate("/properties");
  };

  useEffect(() => {
    let cancel: Canceler;

    const fetchProperties = async () => {
      setLoading(true);
      try {
        let query;

        if (params && !filters) {
          query = params;
        } else {
          query = filters;
        }
        const { data } = await axios({
          method: "GET",
          url: `/properties${query}`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setProperties(data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error);
      }
    };
    fetchProperties();

    return () => cancel();
  }, [filters, params]);

  return (
    <>
      <Layout style={{ height: "100vh" }} hasSider>
        <Button type="primary" onClick={showDrawer}>
          <BarsOutlined style={{ fontSize: "10px" }} />
        </Button>
        <Drawer
          width="280px"
          title="Filter Properties"
          placement="left"
          onClose={onClose}
          visible={visible}
        >
          <Sider
            collapsedWidth="0"
            width={360}
            style={{ backgroundColor: "white" }}
            theme="light"
          >
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Space size={10}>
                      {propStatus?.map((t) => (
                        <Button
                          key="t._id"
                          onClick={changeStatus}
                          type="primary"
                          size="small"
                          style={{
                            backgroundColor: "gainsboro",
                            border: "hidden",
                          }}
                          value={t}
                        >
                          {t}
                        </Button>
                      ))}
                      <br />
                    </Space>
                  </Col>
                </Row>
                <br />
                <Row justify="start">
                  <Col>
                    <Search
                      loading
                      placeholder="Search properties..."
                      style={{ width: 200 }}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>Property Type</Col>
                </Row>
                <Row>
                  <Col>
                    <Radio.Group name="radiogroup" defaultValue={1}>
                      <Space style={{ flexWrap: "wrap" }}>
                        {propType?.map((s) => (
                          <Button
                            size="small"
                            key="s._id"
                            style={{
                              width: "120px",
                              // height: "40px",
                              // backgroundColor: "gainsboro"
                            }}
                          >
                            <Radio onClick={changeType} value={s}>
                              {s}
                            </Radio>
                          </Button>
                        ))}
                      </Space>
                    </Radio.Group>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>Price Range</Col>
                </Row>
                <Row>
                  <Col>{/* {min} - {max} */}</Col>
                </Row>
                <Row>
                  <Col>
                    <Space
                      direction="horizontal"
                      size={10}
                      style={{ flexWrap: "wrap" }}
                    >
                      <Input placeholder="Minimum Price" />
                      <Input placeholder="Maximum Price" />
                    </Space>
                  </Col>
                </Row>{" "}
                <br />
                <Row>
                  <Col>Room Property</Col>
                </Row>
                <Row>
                  <Col>Bedroom</Col>
                </Row>
                <Row>
                  <Col>
                    <Space direction="horizontal" size={10}>
                      {bedCount?.map((b) => (
                        <Button
                          size="small"
                          key="b._id"
                          onClick={changeBedroom}
                          style={{ backgroundColor: "gainsboro" }}
                          value={b}
                        >
                          {b}
                        </Button>
                      ))}
                    </Space>
                  </Col>
                </Row>
                <Row>
                  <Col>Bathroom</Col>
                </Row>
                <Row>
                  <Col>
                    <Space direction="horizontal" size={10}>
                      {bathCount?.map((b) => (
                        <Button
                          size="small"
                          key="b._id"
                          onClick={changeBathroom}
                          style={{ backgroundColor: "gainsboro" }}
                          value={b}
                        >
                          {" "}
                          {b}
                        </Button>
                      ))}
                    </Space>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>Furnished</Col>
                </Row>
                <Row>
                  <Col>
                    <Space direction="horizontal" size={10}>
                      <Checkbox.Group onChange={onChange}>
                        {propFurnished?.map((f) => (
                          // eslint-disable-next-line react/jsx-key
                          <Row>
                            <Col>
                              <Checkbox value={f} onClick={changeAmenities}>
                                {f}
                              </Checkbox>
                              <br />
                            </Col>
                          </Row>
                        ))}
                      </Checkbox.Group>
                    </Space>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={10}>
                    <Button
                      block
                      size="small"
                      onClick={allFilter}
                      style={{ backgroundColor: "gainsboro", border: "hidden" }}
                    >
                      Apply Filter
                    </Button>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={10}>
                    <Button
                      block
                      size="small"
                      onClick={resetFilter}
                      style={{ backgroundColor: "gainsboro", border: "hidden" }}
                    >
                      Reset Filter
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Sider>
        </Drawer>

        <Content style={{ overflowX: "hidden" }}>
          <Row
            style={{ paddingTop: "20px" }}
            gutter={[16, 16]}
            justify="center"
          >
            {!loading && properties.length > 0 ? (
              properties?.map((prop) => (
                <Link to={`/property/${prop._id}`}>
                  <Col key={prop._id}>
                    <Badge
                      count={`$${prop.price}`}
                      overflowCount={99999}
                      offset={[-50, 40]}
                    >
                      <img
                        src={prop.picture}
                        alt=""
                        style={{ height: "200px", width: "300px" }}
                      />
                    </Badge>
                    <Card style={{ width: 300 }}>
                      <Row>
                        <Col span={19}>
                          <b>{prop.address}</b>
                        </Col>
                        <Col span={5}>
                          <Space>
                            <span>
                              <BsFillSuitHeartFill
                                style={{ fontSize: "20px", color: "gainsboro" }}
                              />
                            </span>
                            <span>
                              <FiMail style={{ fontSize: "20px" }} />
                            </span>
                          </Space>
                        </Col>
                      </Row>
                      <Row>
                        {prop.city}, {prop.state} {prop.country}
                      </Row>
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
                      </Row>
                    </Card>
                  </Col>
                </Link>
              ))
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
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Properties;
