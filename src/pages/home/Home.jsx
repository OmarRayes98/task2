import Banner from "../../components/Banner/Banner"
import Deal from "../../components/Deal/Deal"
import Featured from "../../components/Featured/Featured"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import UpperBar from "../../components/UpperBar/UpperBar"

const Home = () => {
  return (
    <>
    <UpperBar/>
    <Header/>
    <Banner/>
    <Featured/>
    <Deal/>
    <Footer/>
    </>
  )
}

export default Home
