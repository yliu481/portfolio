import React from "react";
import Slider from "react-slick";

const settings = {
  dots:true,
  slidesToShow:3,
  infinite: true,
  slidesToScroll:3,
  speed: 500,
  autoplay:true,
  autoplaySpeed:5000,
  arrows:false,
  responsive:[
    {
      breakpoint:576,
      settings:{
        slidesToShow:2,
        slidesToScroll:2
      }
    }
  ]
}

const BizMSMProject = (props) => {
  const { text, title } = props;


  return (
    <div className="project row mb-5">
        <div className="info col-md-3">
          <h3>{title}</h3>
          <p className="description">{text}</p>
          <div className="button-group">
            <a className="button-secondary"  href="https://github.com/yliu481/BizMSM-gif-demon" target="_blank" rel="noopener noreferrer">
              <span><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4204" height="24" width="24"><path d="M764 820c21.372 0 40.135 11.175 50.763 28H872c8.837 0 16 7.163 16 16v32c0 8.836-7.164 16-16 16l-57.237 0.001C804.134 928.826 785.372 940 764 940s-40.134-11.174-50.763-27.999H528c-8.837-0.001-16-7.164-16-16.001v-32c0-8.837 7.163-16 16-16h185.237c10.628-16.825 29.39-28 50.763-28z m76-676v325c0 8.837-7.163 16-16 16h-40c-8.837 0-16-7.163-16-16V152H208v692h216c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H200c-35.346 0-64-28.654-64-64V144c0-35.346 28.654-64 64-64h576c35.346 0 64 28.654 64 64zM636 684c21.372 0 40.135 11.175 50.763 28H872c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16l-185.237 0.001C676.134 792.826 657.372 804 636 804s-40.134-11.174-50.763-27.999H528c-8.836-0.001-16-7.165-16-16.001v-32c0-8.837 7.163-16 16-16h57.237c10.628-16.825 29.39-28 50.763-28z m128-136c21.372 0 40.135 11.175 50.763 28H872c8.837 0 16 7.163 16 16v32c0 8.836-7.164 16-16 16l-57.237 0.001C804.134 656.826 785.372 668 764 668s-40.134-11.174-50.763-27.999H528c-8.837-0.001-16-7.164-16-16.001v-32c0-8.837 7.163-16 16-16h185.237c10.628-16.825 29.39-28 50.763-28zM581.47 245.05l-124.708 216a16 16 0 0 1-13.856 8H410.89c-8.837 0-16-7.164-16-16a16 16 0 0 1 2.135-7.986l124.403-215.999a16 16 0 0 1 13.865-8.015h32.32c8.836 0 16 7.164 16 16a16 16 0 0 1-2.144 8z m-197.133 29.562c5.603 6.677 4.82 16.589-1.7 22.308l-0.272 0.233L325.342 345l57.023 47.847c6.677 5.603 7.627 15.5 2.199 22.265l-0.227 0.276-17.998 21.45c-5.603 6.677-15.5 7.627-22.265 2.198l-0.276-0.226-97.191-81.554c-6.77-5.68-7.652-15.772-1.972-22.54a16 16 0 0 1 1.972-1.973l97.19-81.553c6.678-5.603 16.59-4.82 22.31 1.701l0.232 0.271 17.998 21.45z m347.594 58.131c6.77 5.68 7.652 15.772 1.972 22.541a16 16 0 0 1-1.972 1.972l-97.19 81.554c-6.678 5.603-16.59 4.82-22.31-1.701l-0.232-0.271-17.998-21.45c-5.603-6.677-4.82-16.589 1.7-22.308l0.272-0.233L653.196 345l-57.023-47.847c-6.678-5.603-7.627-15.5-2.199-22.265l0.227-0.276 17.998-21.45c5.603-6.677 15.5-7.627 22.265-2.198l0.276 0.226 97.191 81.553z" p-id="4205"></path></svg>
              </span>
              Code
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <Slider {...settings}>
            <div>
              <div className="img-link" >
                <img src={require("../images/bizmsm/index.png")} alt="BizMSM index"/>
              </div>
            </div>
            
            <div>
              <div className="img-link">
                <img src={require("../images/bizmsm/profile.png")} alt="BizMSM profile"/>
              </div>
            </div>
            <div>
              <div className="img-link">
               <img src={require("../images/bizmsm/wallet.png")} alt="BizMSM wallet"/>
              </div>
            </div>
            <div>
              <div className="img-link">
               <img src={require("../images/bizmsm/product.png")} alt="BizMSM product"/>
              </div>
            </div>
            
            <div>
              <div className="img-link">  
               <img src={require("../images/bizmsm/order.png")} alt="BizMSM order"/>
              </div>
            </div>
            <div>
              <div className="img-link">  
                <img src={require("../images/bizmsm/transactions.png")} alt="BizMSM transactions"/>
              </div>
            </div>
            <div>
              <div className="img-link">
                <img src={require("../images/bizmsm/merchant.png")} alt="BizMSM merchant"/>
              </div>
            </div>
            <div>
              <div className="img-link"> 
               <img src={require("../images/bizmsm/search.png")} alt="BizMSM search"/>
              </div>
            </div>
            <div>
              <div className="img-link">  
                <img src={require("../images/bizmsm/addMerchandise.png")} alt="BizMSM addMerchandise"/>
              </div>
            </div>
          </Slider>
        </div>
    </div>
  );
};

const Sneaker = ()=>{
  return(
    <div className="container">
      <div className="card">
        <div className="sneaker">
          <div className="circle"></div>
          <img src={require('../images/yi.jpg')} alt=""/>
        </div>
      </div>
    </div>

  )
}

const EmailyProject = (props) => {
  const { text, title } = props;

  return (
    <div className="project row mb-5">
        <div className="info col-md-3">
          <h3>{title}</h3>
          <p className="description">{text}</p>
          <div className="button-group">
            <a className="button-secondary"  href="https://evening-oasis-98233.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <span><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4894" height="24" width="24"><path d="M414.1 831.8c-61.3 61.3-160.7 61.3-222 0-61.3-61.3-61.3-160.7 0-222l140.7-140.7c15.63-15.63 15.63-40.97 0-56.6-15.63-15.63-40.97-15.63-56.6 0L135.5 553.2c-92.6 92.6-92.6 242.6 0 335.2s242.6 92.6 335.2 0l140.7-140.7c15.63-15.63 15.63-40.97 0-56.6-15.63-15.63-40.97-15.63-56.6 0L414.1 831.8zM887.8 136c-92.6-92.6-242.6-92.6-335.2 0L411.9 276.7c-15.63 15.63-15.63 40.97 0 56.6 15.63 15.63 40.97 15.63 56.6 0l140.7-140.7c61.3-61.3 160.7-61.3 222 0 61.3 61.3 61.3 160.7 0 222L690.5 555.3c-15.63 15.63-15.63 40.97 0 56.6 15.63 15.63 40.97 15.63 56.6 0l140.7-140.7c92.6-92.6 92.6-242.7 0-335.2z" p-id="4895"></path><path d="M320 703.8c17.2 17.2 45 17.2 62.2 0l321-321c17.2-17.2 17.2-45 0-62.2-17.2-17.2-45-17.2-62.2 0l-321 321c-17.2 17.1-17.2 45 0 62.2z" p-id="4896"></path></svg>
              </span>
              Open
            </a>
            <a className="button-secondary"  href="https://github.com/yliu481/emaily" target="_blank" rel="noopener noreferrer">
              <span><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4204" height="24" width="24"><path d="M764 820c21.372 0 40.135 11.175 50.763 28H872c8.837 0 16 7.163 16 16v32c0 8.836-7.164 16-16 16l-57.237 0.001C804.134 928.826 785.372 940 764 940s-40.134-11.174-50.763-27.999H528c-8.837-0.001-16-7.164-16-16.001v-32c0-8.837 7.163-16 16-16h185.237c10.628-16.825 29.39-28 50.763-28z m76-676v325c0 8.837-7.163 16-16 16h-40c-8.837 0-16-7.163-16-16V152H208v692h216c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H200c-35.346 0-64-28.654-64-64V144c0-35.346 28.654-64 64-64h576c35.346 0 64 28.654 64 64zM636 684c21.372 0 40.135 11.175 50.763 28H872c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16l-185.237 0.001C676.134 792.826 657.372 804 636 804s-40.134-11.174-50.763-27.999H528c-8.836-0.001-16-7.165-16-16.001v-32c0-8.837 7.163-16 16-16h57.237c10.628-16.825 29.39-28 50.763-28z m128-136c21.372 0 40.135 11.175 50.763 28H872c8.837 0 16 7.163 16 16v32c0 8.836-7.164 16-16 16l-57.237 0.001C804.134 656.826 785.372 668 764 668s-40.134-11.174-50.763-27.999H528c-8.837-0.001-16-7.164-16-16.001v-32c0-8.837 7.163-16 16-16h185.237c10.628-16.825 29.39-28 50.763-28zM581.47 245.05l-124.708 216a16 16 0 0 1-13.856 8H410.89c-8.837 0-16-7.164-16-16a16 16 0 0 1 2.135-7.986l124.403-215.999a16 16 0 0 1 13.865-8.015h32.32c8.836 0 16 7.164 16 16a16 16 0 0 1-2.144 8z m-197.133 29.562c5.603 6.677 4.82 16.589-1.7 22.308l-0.272 0.233L325.342 345l57.023 47.847c6.677 5.603 7.627 15.5 2.199 22.265l-0.227 0.276-17.998 21.45c-5.603 6.677-15.5 7.627-22.265 2.198l-0.276-0.226-97.191-81.554c-6.77-5.68-7.652-15.772-1.972-22.54a16 16 0 0 1 1.972-1.973l97.19-81.553c6.678-5.603 16.59-4.82 22.31 1.701l0.232 0.271 17.998 21.45z m347.594 58.131c6.77 5.68 7.652 15.772 1.972 22.541a16 16 0 0 1-1.972 1.972l-97.19 81.554c-6.678 5.603-16.59 4.82-22.31-1.701l-0.232-0.271-17.998-21.45c-5.603-6.677-4.82-16.589 1.7-22.308l0.272-0.233L653.196 345l-57.023-47.847c-6.678-5.603-7.627-15.5-2.199-22.265l0.227-0.276 17.998-21.45c5.603-6.677 15.5-7.627 22.265-2.198l0.276 0.226 97.191 81.553z" p-id="4205"></path></svg>
              </span>
              Code
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <Slider {...settings}>
            <div>
              <a className="img-link" href="https://github.com/yliu481/emaily" target="_blank" rel="noopener noreferrer">
                <img src={require("../images/emaily/index.png")} alt="Emaily index"/>
              </a>
            </div>
            
            <div>
                <a className="img-link" href="https://github.com/yliu481/emaily" target="_blank" rel="noopener noreferrer">
                  <img src={require("../images/emaily/create.png")} alt="Emaily profile"/>
                </a>
            </div>
            <div>
                <a className="img-link" href="https://github.com/yliu481/emaily" target="_blank" rel="noopener noreferrer">
                  <img src={require("../images/emaily/createSurvey.png")} alt="Emaily wallet"/>
                </a>
            </div>
            <div>
              <a className="img-link" href="https://github.com/yliu481/BizMSM-gif-demon" target="_blank" rel="noopener noreferrer">
                <img src={require("../images/emaily/dashboard.png")} alt="Emaily product"/>
              </a>
            </div>
            <div>
                <a className="img-link" href="https://github.com/yliu481/BizMSM-gif-demon" target="_blank" rel="noopener noreferrer">
                  <img src={require("../images/emaily/sendSurvey.png")} alt="emaily order"/>
                </a>
            </div>
          </Slider>
        </div>
    </div>
  );
};

const Projects = (props) => {
  return (
    <div className="projects pt-3 pt-md-5" id="projects">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <hr/>
        <div className="">
          <BizMSMProject
            text="A local E-commerce application that provide a possible solution for small businesses in their local area. "
            title="BizMSM"
            imgurl="cdpcm"
          />
          <EmailyProject
          text="Emaily is a web project for sending surveys based on recipients list."
            title="Emaily"
          />
          
        </div>
      </div>
    </div>
  );
};
export default Projects;
