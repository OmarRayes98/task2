import "./Featured.css";
import featureImage from "../../assets/images/featured.jpg";
import featureIcon from "../../assets/images/featured-icon.png";
import { useState } from "react";
import ItemInfo from "./ItemInfo";
import icon1 from "../../assets/images/info-icon-01.png"
import icon2 from "../../assets/images/info-icon-01.png"
import icon3 from "../../assets/images/info-icon-01.png"
import icon4 from "../../assets/images/info-icon-01.png"


const Featured = () => {
    const [activeItemAccordion, setActiveItemAccordion] = useState('item1');


  return (
    <div className="container">
        <section className="featured">
            <div className="featured__image">
                <img src={featureImage} alt="feature" />
                <div className="featured__image_icon">
                <img src={featureIcon} alt="feature Icon" />
                </div>
            </div>

            <div className="featured__content">
                <p className="featured__content_title">
                    Featured
                </p>
                <div className="featured__content_parent">
                <h2 className="featured__content_info">
                    <span>
                    Best
                    </span>
                    <span>
                    Appartement & 
                    </span> 
                    <span>
                    Sea View 
                    </span>
                </h2>

                <div className="featured__content_accordion">

                <div className="featured__content_accordion-item">
                    <dt onClick={() => setActiveItemAccordion('item1')}>
                        <a href="#item1" style={{color:activeItemAccordion==="item1" && 'var(--main-color'}}>Best useful link?</a>
                    </dt>

                    <dd id="item1">
                        {activeItemAccordion === 'item1' && 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                    </dd>
                </div>

                <div className="featured__content_accordion-item">
                    <dt onClick={() => setActiveItemAccordion('item2')}>
                        <a href="#item2" style={{color:activeItemAccordion==="item2" && 'var(--main-color'}}>How does it work?</a>
                    </dt>

                    <dd id="item1">
                        {activeItemAccordion === 'item2' && 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                    </dd>
                </div>

                <div className="featured__content_accordion-item">
                    <dt onClick={() => setActiveItemAccordion('item3')}>
                        <a href="#item3" style={{color:activeItemAccordion==="item3" && 'var(--main-color'}}>Why is Villa agency is the best?</a>
                    </dt>

                    <dd id="item3">
                        {activeItemAccordion === 'item3' && 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                    </dd>
                </div>


                </div>
                </div>


            </div>

            <div className="featured__info">
                <div className="featured__info_box">
                    <div className="featured__info_card">
                    <ItemInfo text="250 m2" subText="Total Flat Space" icon={icon1} />
                    </div>
                    <div className="featured__info_card">
                    <ItemInfo text="Contract" subText="Contract Ready" icon={icon2} />
                    </div>
                    <div className="featured__info_card">
                    <ItemInfo text="Payment" subText="Payment" icon={icon3} titleIcon="Process"/>
                    </div>
                    <div className="featured__info_card">
                    <ItemInfo text="Safety" subText="24/7 Under" icon={icon4} titleIcon="Control"/>
                    </div>
                </div>

            </div>

        </section>
    </div>
  )
}

export default Featured
