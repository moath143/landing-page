import React from "react";
import styled from "styled-components";
import { InnerLayout } from "./../Layouts";
import ServiceItem from "./ServiceItem";
import Title from "./Title";
import apply from '../img/apply.svg'
import account from '../img/create_account.svg'
import search from '../img/search2.svg'
import add from '../img/add.svg'

function ServiceSection() {
  return (
    <ServiceSectionStyle>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={`Services`}
            para={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora asperiores, modi odit nulla laudantium harum, quis voluptas porro incidunt animi sed nobis earum at, iusto nisi ipsum? Libero, doloribus aut?`}
          />
        </div>
        <div className="services-con">
          <ServiceItem
            icon={account}
            name={`Create An Account`}
            para={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora asperiores, modi odit nulla laudantium harum, quis voluptas porro incidunt animi sed nobis earum at, iusto nisi ipsum? Libero, doloribus aut?`}
          />
          <ServiceItem
            icon={search}
            name={`Search For A Job`}
            para={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora asperiores, modi odit nulla laudantium harum, quis voluptas porro incidunt animi sed nobis earum at, iusto nisi ipsum? Libero, doloribus aut?`}
          />
          <ServiceItem
            icon={add}
            name={`Add CV / Resume`}
            para={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora asperiores, modi odit nulla laudantium harum, quis voluptas porro incidunt animi sed nobis earum at, iusto nisi ipsum? Libero, doloribus aut?`}
          />
          <ServiceItem
            icon={apply}
            name={`Application Complete!`}
            para={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora asperiores, modi odit nulla laudantium harum, quis voluptas porro incidunt animi sed nobis earum at, iusto nisi ipsum? Libero, doloribus aut?`}
          />
        </div>
      </InnerLayout>
    </ServiceSectionStyle>
  );
}

const ServiceSectionStyle = styled.section`
    .services-con{
        padding-top: 3rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
    }
`;

export default ServiceSection;
