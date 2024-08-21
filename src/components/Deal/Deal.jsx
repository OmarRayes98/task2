import './Deal.css'
import Button from '../Button/Button'
import property from "../../assets/images/property-05.jpg";

const Deal = () => {
  return (
    <section className='Deal'>
        <div className="Deal__content">
            <div className="Deal__content_title">
                <span>Best Deal</span>
                <h3>Find Your Best Deal Right Now!</h3>
            </div>
            <div className="Deal__btns">
                <Button text='Appartment' icon={false} />
                <Button text='Villa House' icon={false} />
                <Button text='Penthouse' icon={false} />
            </div>
        </div>
        <div className="Deal__container">
            <div className="Deal__container_left">
                <div className="items">

                    <div className="item">
                        <h6>185 m2</h6>
                        <p>Total Flat Space</p>
                    </div>

                    <div className="item">
                        <h6>26th</h6>
                        <p>Floor number</p>
                    </div>

                    <div className="item">
                        <h6>4</h6>
                        <p>Number of rooms</p>
                    </div>

                    <div className="item">
                        <h6>Yes</h6>
                        <p>Parking Available</p>
                    </div>

                    <div className="item">
                        <h6>Bank</h6>
                        <p>Payment Process</p>
                    </div>
                </div>
            </div>

            <div className="Deal__container_middle">
                <img src={property} alt="property" />
            </div>

            <div className="Deal__container_right">
                <h6>Extra Info About Property</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt.</p>
                <Button text='Schedule a visit' styleClass="width" withIcon={true}/>
            </div>
        </div>
    </section>
  )
}

export default Deal