import Header from "./Header";
import Image from "next/image";
import RightLogo from "../assets/Illustration.svg";
import Details from "./Details";
import { useState } from "react";
import PlantLogo from '../assets/plant logo.svg';
import PersonLogo from '../assets/person logo.svg';
import ChatLogo from '../assets/chat.svg';
import Button from "./Button";

function Main() {

  const [details, setDetails] = useState([
    {
      name: 'plants',
      title: 'Plants Planted',
      digit: 2000,
      image: PlantLogo
    },
    {
      name: 'members',
      title: 'Members',
      digit: 12000,
      image: PersonLogo
    },
    {
      name: 'quiz',
      title: 'Quizes and Blogs',
      digit: 300,
      image: ChatLogo
    },
  ]);

  return (
    <div className="h-full w-full">
      <Header />
      <div className=" h-full flex items-center" style={{ height: "90%" }}>
        <div className="w-7/12 my-auto px-20 ">
          <h1
            style={{
              fontFamily: "'Secular One', sans-serif",
              color: "#254CAC",
              fontSize: "38px",
            }}
          >
            Join Our
          </h1>
          <h1
            style={{
              fontFamily: "'Secular One', sans-serif",
              color: "#C1D230",
              fontSize: "102px",
              lineHeight: "148px",
            }}
          >
            Green Team
          </h1>
          <p className='text-xl text-justify ' style={{color: "#254CAC"}}>
            A community to educate, empower, and inspire People around the world
            to care for plants cultivate their indoor jungles, and grow more joy
            in their lives.
          </p>
          <Button buttonType='primary'  style={{background: '#ED6D2E'}}>join us</Button>
          <div className='flex justify-around'>
            {details.map(detail => (
              <Details imageLogo={detail.image} title={detail.title} name={detail.name} totalNum={detail.digit} />
            ))}
          </div>
        </div>
        <div className=" text-center w-5/12">
          <Image src={RightLogo} width="615.92" height="719.24" />
        </div>
      </div>
    </div>
  );
}

export default Main;
