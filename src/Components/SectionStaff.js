import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";
import StaffCard from "./StaffCard";
import Title from "./Title";
import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";
import avatar4 from "../img/avatar4.png";
import bookmark from "../img/bookmark.svg";
import star from "../img/star.svg";
import star_half from "../img/star_half.svg";

function SectionStaff() {
  return (
    <SectionStaffStyled>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={`Our Staff`}
            para={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora asperiores, modi odit nulla laudantium harum, quis voluptas porro incidunt animi sed nobis earum at, iusto nisi ipsum? Libero, doloribus aut?`}
          />
        </div>
        <div className="staff-card">
          <StaffCard
            img={avatar1}
            bookmark={bookmark}
            name={`Huan Nguen`}
            tit={`Developer`}
            rating={star}
            rating_half={star_half}
            stack={`C++, C#, Node, Express, MongoDB, Javascript, Typescript`}
          />
          <StaffCard
            img={avatar2}
            bookmark={bookmark}
            name={`Gustavo Mikalia`}
            tit={`Software Engineer`}
            rating={star}
            rating_half={star_half}
            stack={`React, Node, Express, MongoDB, Javascript, Typescript`}
          />
          <StaffCard
            img={avatar3}
            bookmark={bookmark}
            name={`Huan Nguen`}
            tit={`Mobile Developer`}
            rating={star}
            rating_half={star_half}
            stack={`Java, Kotlin, Flutter, MongoDB, Javascript, Typescript`}
          />
          <StaffCard
            img={avatar4}
            bookmark={bookmark}
            name={`Sunil Patel`}
            tit={`3D Artist`}
            rating={star}
            rating_half={star_half}
            stack={`Autodesk Maya, Blender, Arnold, Javascript, Python`}
          />
        </div>
      </InnerLayout>
    </SectionStaffStyled>
  );
}

const SectionStaffStyled = styled.section`
    .staff-card{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 2rem;
        padding-top: 3.5rem;
    }


`;

export default SectionStaff;
