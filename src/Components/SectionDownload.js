import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";
import google from "../img/googleappstore.png";
import apple from "../img/appstore.png";
import business from "../img/business.jpg";

function SectionDownload() {
  return (
      <SectionDownloadStyle>
          <div className="dl-overlay"></div>
      <InnerLayout>
        <div className="title-con">
          <div className="dl-con">
            <h2>New Version Available</h2>
            <h1>
              Download Our Mobile App.
              <br /> It's Simple and Better Than Ever
            </h1>
            <div className="store-btns">
              <div className="store-btn google">
                <img src={google} alt="" />
              </div>
              <div className="store-btn apple">
                <img src={apple} alt="" />
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </SectionDownloadStyle>
  );
}

const SectionDownloadStyle = styled.section`
  background-image: url(${business});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  .dl-overlay{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #27ad60f2;
  }

  .dl-con{
      position: relative;
      display: flex;
      z-index: 7;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      align-items: center;
      h1{
          font-size: 3rem;
          padding-top: 2rem;
      }
  }

  .store-btns{
      display: flex;
      padding-top: 2.5rem;
      .google, .apple{
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          padding: 1rem 2rem;
          border-radius: 7px;
          background-color: #fff;
          img{
              width: 120px
          }
      }
      .apple{
          margin-left: 1rem;
      }

  }
`;

export default SectionDownload;
