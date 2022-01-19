import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts'
import JobsCard from './JobsCard';
import Title from './Title';
import logo1 from '../img/logo1.svg'
import logo2 from '../img/logo2.svg'
import logo3 from '../img/logo3.svg'
import logo4 from '../img/logo4.svg'
import logo5 from '../img/logo5.svg'
import logo6 from '../img/logo6.svg'
import logo7 from '../img/logo7.svg'

function SectionJobs() {
    return (
      <SectionJobsStyled>
        <InnerLayout>
          <div className="title-con">
            <Title
              name={`Recent Jobs`}
              para={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora asperiores, modi odit nulla laudantium harum, quis voluptas porro incidunt animi sed nobis earum at, iusto nisi ipsum? Libero, doloribus aut?`}
            />
          </div>
          <div className="cards-con">
            <JobsCard
              logo={logo1}
              bg={`#EB5757`}
              name={`Orginal Tech`}
              loc={`Palestine, PL`}
              tit={`Software Engineer`}
              type={`Full Time`}
              stack={`Azure, C++, Python, CSV, MYSQL or PostgreSQL`}
              salary={`$70,000 - $90,000`}
            />
            <JobsCard
              logo={logo2}
              bg={"#037FFF"}
              name={"Screaming Frog Inc."}
              loc={"London, UK"}
              tit={"Game Developer"}
              type={"Remote"}
              stack={"ASP.Net, Node.js, Typescript, Unity or Unreal Engine"}
              salary={"$79,000 - $150,000"}
            />
            <JobsCard
              logo={logo3}
              bg={"#27AE60"}
              name={"Gooble Inc."}
              loc={"California, USA"}
              tit={"Web Developer"}
              type={"Full Time"}
              stack={"React, Node, Express, MongoDB, JavaScript, Typescript"}
              salary={"$50,000 - $95,000"}
            />
            <JobsCard
              logo={logo4}
              bg={"#037FFF"}
              name={"Microsoft"}
              loc={"Cape Town, SA"}
              tit={"Data Scientist"}
              type={"Remote"}
              stack={"C++, Machine Learning, Python, CSV, MySQL or PostgreSQL"}
              salary={"$70,000 - $90,000"}
            />
            <JobsCard
              logo={logo5}
              bg={"#EB5757"}
              name={"Stacks Tech Inc."}
              loc={"Reading, UK"}
              tit={"Software Developer"}
              type={"Part Time"}
              stack={"ASP.Net, Node.js, Typescript, VUE.js, C# or Python"}
              salary={"$79,000 - $150,000"}
            />
            <JobsCard
              logo={logo6}
              bg={"#27AE60"}
              name={"The Real Tech"}
              loc={"California, USA"}
              tit={"Web Developer"}
              type={"Full Time"}
              stack={"React, Node, Express, MongoDB, JavaScript, Typescript"}
              salary={"$50,000 - $95,000"}
            />
            <JobsCard
              logo={logo7}
              bg={"#037FFF"}
              name={"Infomedia Corp."}
              loc={"Cape Town, SA"}
              tit={"Software Engineer"}
              type={"Full Time"}
              stack={"C++, Python, CSV, MySQL or PostgreSQL, Web GL"}
              salary={"$70,000 - $90,000"}
            />
            <JobsCard
              logo={logo1}
              bg={"#EB5757"}
              name={"Stacks Tech Inc."}
              loc={"Reading, UK"}
              tit={"Software Developer"}
              type={"Part Time"}
              stack={"ASP.Net, Node.js, Typescript, VUE.js, C# or Python"}
              salary={"$79,000 - $150,000"}
            />
            <JobsCard
              logo={logo2}
              bg={"#27AE60"}
              name={"The Real Tech"}
              loc={"California, USA"}
              tit={"Web Developer"}
              type={"Full Time"}
              stack={"React, Node, Express, MongoDB, JavaScript, Typescript"}
              salary={"$50,000 - $95,000"}
            />
          </div>
        </InnerLayout>
      </SectionJobsStyled>
    );
}

const SectionJobsStyled = styled.section`
    background-color: var(--color-neutral-3);
    .cards-con{
        padding-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 1rem;
    }
`

export default SectionJobs
