import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from './../Layouts';
import CateBtn from './CateBtn';
import Title from './Title';


function SectionCategory() {
    return (
      <SectionCategoryStyled>
        <InnerLayout>
          <div className="title-con">
            <Title
              name={`All Categories`}
              para={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora asperiores, modi odit nulla laudantium harum, quis voluptas porro incidunt animi sed nobis earum at, iusto nisi ipsum? Libero, doloribus aut?`}
            />
                </div>
                <div className="category-con">
                    <CateBtn name={`Game Development (600)`} />
                    <CateBtn name={`Game Design (1000+)`} />
                    <CateBtn name={`Digital Artist (3,400)`} />
                    <CateBtn name={`Creative/Director (71)`} />
                    <CateBtn name={`Software Engineer (2000+)`} />
                    <CateBtn name={`Software Developer (200)`} />
                    <CateBtn name={`Product Manager (900)`} />
                    <CateBtn name={`Product Designer (108)`} />
                    <CateBtn name={`Researcjer (300)`} />
                    <CateBtn name={`Web Developer (1400+)`} />
                    <CateBtn name={`Web Designer (300)`} />
                    <CateBtn name={`UI/UX (2,300)`} />
                </div>
        </InnerLayout>
      </SectionCategoryStyled>
    );
}

const SectionCategoryStyled = styled.section`
.category-con{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.2rem;
    padding-top: 3rem;
}
`

export default SectionCategory
