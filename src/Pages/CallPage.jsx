import React from "react";
import Carousel from "../Components/AboutComponents/Carousel";
import ImportantDates from "../Components/CallComponents/ImportantDates";
import photo1 from "../../public/photo1.jpg"
const CallPage = () => {
  return (
    <>
      <Carousel />
      <section>
        <div className="call-for-abstract  md:px-16 flex flex-col  gap-y-5 py-10">
          <h1 className="text-center text-2xl sm:text-4xl text-orange-500 font-bold">
            Call For Abstract
          </h1>
          <p className="text-xl   px-16">
            Authors are requested to submit abstract (250 words) through an
            email to etbct22@smvdu.ac.in latest by 1st October, 2022. The
            abstract should be typed in MS word, Times New Roman, 12 point size
            and 1.5 line spacing. The recommended poster size shall be 120 x 100
            cm.
          </p>
        </div>
        <div className="particpates flex flex-col md:flex-row justify-center items-center  md:gap-x-5 gap-y-5 md:px-16 py-10">
          <div className=" w-full  md:w-3/6 px-16 py-5">
            <img
              className="rounded-xl"
              src={photo1}
              alt=""
            />
          </div>
          <div className="w-full md:w-3/6 flex flex-col justify-center items-start px-16">
            <h1 className="text-2xl sm:text-3xl text-orange-500">
              {" "}
              Who Can Participates
            </h1>

            <ul className="list-disc text-xl font-regular">
              <li>Academicians, Research Scholars and Students.</li>
              <li>Corporate and Industrial Personnel.</li>
              <li>Members of Non-profit Organizations, etc.</li>
            </ul>
          </div>
        </div>
        <ImportantDates />
        <div className="thrust-areas-section px-5  sm:px-16 py-5">
          <div className="px-5 sm:px-16 "> <h1  className="text-orange-500 text-3xl mb-3 "> Thrust Areas </h1>
          <p className="text-xl pb-3">
            All the interdisciplinary areas of Biosciences and Chemical
            Technology including (but not limited to)
          </p></div>
         
          <ul className="list-disc px-5 sm:px-16 text-xl ">
            <li>Health Sciences</li>
            <li>Enzymology and Molecular biology</li>
            <li>Synthetic Biology</li>
            <li>Natural Products</li>
            <li>Green Chemistry</li>
            <li>Environmental Sustainability and Development</li>
            <li>Bioinformatics and Cheminformatics</li>
            <li>Omics: Genomics / Proteomics</li>
            <li>Bioprocess and Product Development</li>
            <li>Plant Science</li>
            <li>Animal Science</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CallPage;
