import { Layout } from "antd"
import Navbar from "./Header"
const { Header } = Layout

const Top = () => {
  return (
    <Layout>
      <Header style={{ padding: "0 0px", lineHeight: "60px" }}>
        <Navbar />
      </Header>
    </Layout>
  )
}

export default Top
