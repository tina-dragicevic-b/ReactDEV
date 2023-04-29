import Table from "./Table";
import Description from "./Description"

function AboutUser() {

  const personalData = {
    "Date of birth": "31st August 1990",
    "Address": "Domovinskog rata 2",
    "Phone": "(555) 555-1592",
  };

  const skills = { Java: 79, CSharp: 68, JavaScript: 16 };

    return (
      <>
        <div className="grid mx-36 grid-cols-2 grid-rows-2 grid-flow-col py-8">
          <div className="">
            <Table title="Personal data" data={personalData}></Table>
          </div>
          <div className="">
            <Table title="Skills" data={skills}></Table>
          </div>
          <div className="row-span-2 text-justify">
            <Description></Description>
          </div>
          <div></div>
        </div>
      </>
    );


} export default AboutUser;