import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";

function SubscribeSection() {
  return (
    <SubscribeSectionStyle>
          <InnerLayout>
              <div className="s-con">
                  <div className="left">
                      <h2>
                          Subscribe to our newsletter <br /> for the lattest news
                      </h2>
                  </div>
                  <div className="right">
                      <div className="input-control">
                          <input type="text" placeholder="Enter Your Email" />
                          <div className="s-btn">
                              Subscribe Now
                          </div>
                      </div>
                  </div>
              </div>
      </InnerLayout>
    </SubscribeSectionStyle>
  );
}

const SubscribeSectionStyle = styled.section`
    background-color: var(--color-primary);
    .s-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        .left{
            display: flex;
            align-items: center;
            h2{
                font-size: 2rem;
                line-height: 3rem;
            }
        }
        .right{
            display: flex;
            align-items: center;
        }
        .input-control{
            position: relative;
            font-weight: 500;
            width: 100%;
            input{
                width: 100%;
                font-size: inherit;
                font-family: inherit;
                border: none;
                outline: none;
                border-radius: 7px;
                padding: 1.4rem 2rem;
            }
            .s-btn{
                position: absolute;
                top: 50%;
                right: .2rem ;
                transform: translateY(-50%);
                padding: 1.1rem 2rem;
                transition: all .4s ease-in-out;
                cursor: pointer;
                border-radius: 7px;
                background-color: var(--color-dark);
                &:hover{
                    background-color: var(--color-primary);
                }
            }
        }

    }
`;

export default SubscribeSection;
