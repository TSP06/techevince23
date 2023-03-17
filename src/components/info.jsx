import drone from "../assets/drone.png"
import drone2 from "../assets/drone2.png"
import softwareLogo from "../assets/softwareLogo.png"
import hadwareLogo from "../assets/hardwareLogo.png"
import businessLogo from "../assets/businessLogo.png"
import frame1 from "../assets/frame1.png"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export default function Info() {

    const project_category = [
        {
            img_url: hadwareLogo,
            category: "Hardware",
            page_link: "www.instagram.com"
        },
        {
            img_url: softwareLogo,
            category: "Software",
            page_link: "www.instagram.com"
        },
        {
            img_url: businessLogo,
            category: "Business",
            page_link: "www.instagram.com"
        }
    ]
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {
        const changeWidth = () => {
        setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    },[])

  return (
    <div>

    <div className="flex mt-12 items-center mx-14">
        <div className="w-full md:w-1/2 items-baseline md:pr-60">
            <p className="flex flex-col text-center items-start text-3xl md:text-4xl font-semibold self-stretch -mb-3 top-5 left-14 z-10" style={{fontFamily: 'Clash Display Variable'}}>What is Techevince?</p>
            <div className="rectangle bg-customBlue-100 h-3 w-40 sm:w-56 mx-10 sm:mx-28 top-11 left-28"></div>
            <p className="text-base font-normal text-left flex-wrap leading-6" style={{fontFamily:'Galano Grotesque Alt', bottom:'4%'}}>
                <br/>Techevince 2022 is the 9th edition of the annual technical exhibition of the Technical Board of IIT Guwahati. 
                Techevince puts all of IITG's technological passion, innovation, and creativity under the limelight and gives 
                a stage to the college's tech rockstars to perform on.
            </p>
        </div> 
        {(screenWidth> 768 ) &&<div className="grow">
            <img src={frame1} />
        </div>}
    </div>

    <div className="flex mt-12 items-center ml-14">
        <div className="w-full md:w-2/5 items-baseline md:pr-20">
            <p className="flex flex-col text-center items-start text-3xl md:text-4xl font-semibold self-stretch -mb-3 top-5 left-14 z-10" style={{fontFamily: 'Clash Display Variable'}}>Event Structure</p>
            <div className="rectangle bg-customBlue-100 h-3 w-52 sm:mx-16 top-11 left-28"></div>
            <p className="text-base font-normal text-left flex-wrap leading-6" style={{fontFamily:'Galano Grotesque Alt', bottom:'4%'}}>
                <br/>Techevince will be going to be held  on 25th March at IIT Guwahati Campus. 
                Various tech clubs with over 500+ students will be going to participate in this mega tech expo and will be presenting their astounding projects and work in their respective domains. 
            </p>
        </div> 
        {(screenWidth> 540 ) &&<div className="grow">
            <img src={drone} />
        </div>}
        {(screenWidth> 768 ) &&<div>
            <img src={drone2} />
        </div>}

    </div>

    <div className=" flex flex-col">
        <div className="mt-12">
            <p className="flex flex-col items-start text-3xl md:text-4xl font-semibold self-stretch mx-14 -mb-3 top-5 left-14 z-10" style={{fontFamily: 'Clash Display Variable'}}>Vote Now</p>
            <div className="rectangle bg-customBlue-100 h-3 w-32 sm:w-24 mx-14 sm:mx-28 top-11 left-28"></div>
        </div>
        
        <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full mt-12 pl-1'>
        {project_category && project_category.map(item =>{
            return(
                <Link to = {item.page_link}>
                    <div className='flex flex-col w-full hover:scale-110 transform transition duration-500'>
                        <div className="relative bg-customBlue-200 bg-opacity-50 hover:bg-opacity-0 transition duration-500">
                        <img src={item.img_url} className="relative -z-20"/>
                        <div className="absolute transform -rotate-90 text-white text-3xl md:text-5xl font-semibold self-stretch -left-8 md:-left-12 bottom-24"style={{fontFamily: 'Clash Display Variable'}}>{item.category}</div>
                        </div>
                    </div>
                </Link>
            )
        })}
        {/* <div className="transform -rotate-90 text-black text-xl md:text-2xl font-semibold -left-8 md:-left-12 bottom-24"style={{fontFamily: 'Clash Display Variable'}}>Click on the project to open</div> */}

        </div> 

    </div>

    <div className="flex mt-12 items-center ml-14">
        <div className="w-full md:w-2/5 items-baseline md:pr-20">
            <p className="flex flex-col text-center items-start text-3xl md:text-4xl font-semibold self-stretch -mb-3 top-5 left-14 z-10" style={{fontFamily: 'Clash Display Variable'}}>Event Structure</p>
            <div className="rectangle bg-customBlue-100 h-3 w-52 sm:mx-16 top-11 left-28"></div>
            <p className="text-base font-normal text-left flex-wrap leading-6" style={{fontFamily:'Galano Grotesque Alt', bottom:'4%'}}>
                <br/>Techevince will be going to be held  on 25th March at IIT Guwahati Campus. 
                Various tech clubs with over 500+ students will be going to participate in this mega tech expo and will be presenting their astounding projects and work in their respective domains. 
            </p>
        </div> 
        {(screenWidth> 540 ) &&<div className="grow">
            <img src={drone} />
        </div>}
        {(screenWidth> 768 ) &&<div>
            <img src={drone2} />
        </div>}

    </div>

    </div>
  );
}