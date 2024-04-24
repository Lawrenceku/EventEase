import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import { JSX, SVGProps, useState,useEffect, useRef } from "react";
import Image from "next/image";
import {faqs} from '../faqs'
import reviewCard from "@/components/ui/reviewCard";
import heroPicture from '../../public/hero-picture.svg'
import aboutImg from '../../public/about-us.svg'
import eventCreation from '../../public/event-creation.svg'
import autoEvent from '../../public/auto-event.svg'
import realTime from '../../public/real-time.svg'
import guestList from '../../public/guest-list.svg'
import linkedinIcon from '../../public/Linkedin.svg'
import ReviewCard from "@/components/ui/reviewCard";


export default function Component() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-10">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="mr-6 hidden lg:flex" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              About
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Features
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              How It Works
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Testimonials
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              FAQs
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">RSVP</span>
      </Link>
      <div className="hidden w-max-2xl ml-auto font-medium lg:flex gap-6 ">
        <Link className='focus:text-blue-700 focus:underline' href='#'>Home</Link>
        <Link className='focus:text-blue-700 focus:underline' href='#'>About</Link>
        <Link className='focus:text-blue-700 focus:underline' href='#'>Features</Link>
        <Link className='focus:text-blue-700 focus:underline' href='#'>How It Works</Link>
        <Link className='focus:text-blue-700 focus:underline' href='#'>Testimonials</Link>
        <Link className='focus:text-blue-700 focus:underline' href='#'>FAQs</Link>
        </div>
      <nav className="ml-auto lg:items-center  flex gap-6">
        <Link
          href="/auth/login"
          className="group inline-flex h-9 w-max px-6 py-5 items-center justify-center rounded border text-blue-700 border-blue-700 bg-white  text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Log In
        </Link>
        <Link
          href="/auth/register"
          className="group inline-flex h-9 px-6 py-5 w-max items-center justify-center rounded text-white bg-blue-700  text-sm font-medium border border-gray-300 transition-colors hover:bg-transparent hover:text-gray-900 focus:bg-transparent focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Sign Up
        </Link>
      </nav>
    </header>
    <HeroSection/>
    <AboutUs/>
    <Features/>
    <NavigatePortal/>
    <Review/>
    <Faqs/>
    <Newsletter/>
    <Footer/>
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function HeroSection(){
  return(
<section className=" dark:bg-gray-900 px-4 md:px-10">
    <div className="grid   py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto mt-10 lg:col-span-7">
            <h1 style={{ lineHeight: '1.32' }} className=" mb-10  text-5xl font-medium md:text-5xl xl:text-6xl dark:text-white lg:text-left text-center">RSVP Like Never Before With <span className='underline text-blue-700'>Will Be There</span></h1>
            <p className=" mb-6 lg:mb-10 leading-loose tracking-wide md:text-lg lg:text-xl dark:text-gray-400 lg:text-left text-center">Elevate your event game with Will Be There, where every ‘Yes’ and every click of the button is a step towards new adventures, new connections, and new beginnings</p>
            <div className="flex justify-center lg:justify-start">
              <Link href="#" className="r inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              </Link>
            </div>
        </div>
        <div className="hidden  lg:mt-0 ml-4 lg:col-span-5 lg:flex lg:justify-end">
            <Image className="w-full" src={heroPicture} />
        </div>                
    </div>
</section>
  )
}

function AboutUs(){
  return(
    <section className=" bg-[#E6EAFF] dark:bg-gray-900 px-4 md:px-10">
          <h1 style={{ lineHeight: '1.32' }} className=" mb-1 w-full text-center text-5xl md:text-5xl xl:text-6xl dark:text-white">About Us</h1>
    <div className="grid   py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
       <div className=" lg:mt-0  lg:col-span-5 lg:flex lg:justify-center">
            <Image className="" src={aboutImg} />

        </div>  
        <div className="mr-auto ml-4 mt-10 lg:col-span-7">
            <p className=" mb-6 lg:mb-10 leading-loose tracking-wide md:text-lg lg:text-xl dark:text-gray-400">At Will Be There, we believe in the power of connection and celebration. Our platform is more than just an event planning tool; it's a vibrant community where every gathering becomes a moment to cherish.
            <br/><br/><br/>
            Founded with a passion for bringing people together, Will Be There simplifies event planning, making it effortless for organizers to create unforgettable experiences. From intimate gatherings to grand celebrations, our platform provides the tools and resources needed to turn your vision into reality.
            Join us in celebrating life's moments, big and small. Together, let's create memories that will last a lifetime.</p>
            <Link href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Start Now
            </Link>
        </div>
              
    </div>
</section>
  )
}

function Features(){
  return(
    <>
      <h1 style={{ lineHeight: '1.32' }} className=" mt-16 mb-10 w-full text-center text-5xl md:text-5xl xl:text-6xl dark:text-white">Our Unique Features</h1>
          <section className="  dark:bg-gray-900 px-4 md:px-10 flex justify-among flex-wrap">
        <div className="flex flex-col justify-center ">
          <Image src={eventCreation}/>
          <div>
            <p className="font-medium">Event Creation and Management</p>
            <p>Simplify event planning with our user-friendly interface. With just a few clicks, you can create, edit, and manage your events from anywhere, anytime.</p>
          </div>
        </div>
        <div className="">
          <Image src={autoEvent}/>
          <div>
            <p className="font-medium">Event Creation and Management</p>
            <p>Simplify event planning with our user-friendly interface. With just a few clicks, you can create, edit, and manage your events from anywhere, anytime.</p>
          </div>
        </div><div className="">
          <Image src={realTime}/>
          <div>
            <p className="font-medium">Event Creation and Management</p>
            <p>Simplify event planning with our user-friendly interface. With just a few clicks, you can create, edit, and manage your events from anywhere, anytime.</p>
          </div>
        </div>
        <div className="">
          <Image src={guestList}/>
          <div>
            <p className="font-medium">Event Creation and Management</p>
            <p>Simplify event planning with our user-friendly interface. With just a few clicks, you can create, edit, and manage your events from anywhere, anytime.</p>
          </div>
        </div>
    </section>

    </>
  )
}

function NavigatePortal(){
  return(
    <section className=" bg-[#E6EAFF] h-80 dark:bg-gray-900 px-4 md:px-10">
          <h1 style={{ lineHeight: '1.32' }} className=" mb-1 w-full text-center text-5xl md:text-5xl xl:text-6xl dark:text-white">How To Navigate The Portal</h1>
    <div className="grid   py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
       
    </div>
</section>
  )
}

function Review(){
  return(
    <ReviewCard/>
  )
}

function Faqs(){
  const [showContent, setShowContent] = useState({});
  const [contentHeight, setContentHeight] = useState({});
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqs.length);
  }, [faqs]);

  useEffect(() => {
    const newContentHeight = {};
    if (contentRefs.current.length > 0) {
      contentRefs.current.forEach((ref, index) => {
        if (ref && ref.current) {
          newContentHeight[index] = `${ref.current.scrollHeight}px`;
        }
      });
      setContentHeight(newContentHeight);
    }
  }, [faqs, showContent]);

  const toggleContent = (index) => {
    setShowContent((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
    <div className='my-8 flex flex-col items-center justify-center "'>
      <h1 className='text-5xl font-medium m-20'>Frequently Asked Questions</h1>
    {faqs.map(({ question, answer }, index) => (
        <div className="w-1/2    " key={index}>
          <button
            role="button"
            aria-expanded={showContent[index]}
            
            className="flex w-full items-center justify-between rounded border-b-[1px] border-[1px] m-4 text-lg border-gray-900  p-5 font-medium"
            onClick={() => toggleContent(index)}
          >
            {question}
            <span
              style={{ transform: `rotate(${showContent[index] ? '180deg' : '0'})` }}
              className="ml-4 text-4xl min-h-[24px] min-w-[24px] transition-transform ease-in-out"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
          <div
            ref={contentRefs.current[index]}
            style={{ height: showContent[index] ? contentHeight[index] : '0' }}
            className="overflow-hidden rounded-[5px]  font-bold transition-[height] ease-in-out duration-1000"
          >
            <p className="p-5 ">{answer}</p>
          </div>
        </div>
      ))}     
    </div>
    </>
)
}

function Newsletter(){
  return(
    <div className="relative bg-[#E6EAFF]">
    <div className="absolute inset-x-0 bottom-0">
    </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-5xl text-center font-medium tracking-tight sm:leading-none">
              Subscribe to Newsletter
            </h2>
            <p className="mb-12 text-bold md:text-lg text-center ">
            Be the first to know about our exclusive offers by subscribing to our newsletter
            </p>
            <form
              className="flex  items-center w-full  mx-auto  "
              role="form"
            >
              <input
                className="w-full border border-gray-400 rounded-l bg-transparent p-[10px] outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
              <button
                className="rounded-r  border-black  p-[10px] px-5 text-white bg-blue-700"
                type="submit"
                aria-label="Submit Newsletter"
              >
                Subscribe
              </button>
            </form>
        </div>
    </div>
</div>
  )
}

function Footer(){
  return(
    <div className="pt-9 bg-black text-white">
      <div className=" w-full ">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          <div className="md:w-[316px]">
            <p className="text-[18px] font-medium ">
              <h1 className=" font-extrabold flex items-center">
                WILL BE THERE
              </h1>
            </p>
            <p className="mt-[18px] text-[15px]  ">
            +2349145463534
            </p>
            <p className="mt-[18px] text-[15px]  ">
            willbethere@gmail.com
            </p>
            <div className="mt-[18px] flex gap-4">
            <a
            className="hover:scale-110" target="_blank"
            href="/"><img alt="linkdin icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1"  src={linkedinIcon} /></a><a
            className="hover:scale-110" target="_blank"
            href="/"><img alt="instagram icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1"  src="https://www.englishyaari.com/img/instagram1.svg" /></a><a
            className="hover:scale-110" target="_blank"
            href=""><img alt="twitter icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1"  src="https://www.englishyaari.com/img/twitter.svg" /></a><a
            className="hover:scale-110" target="_blank"
            href="https://www.youtube.com/"><img alt="youtube icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1"  src="https://www.englishyaari.com/img/youtube.svg" /></a>
            </div>
          </div>
      <div className="mt-6 flex w-full flex-col justify-between  sm:flex-row md:mt-0 md:max-w-[341px]">
        <div className="">
          <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">Company</p>
          <ul>
            <li className="mt-[15px]"><a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/">Home</a></li>
            <li className="mt-[15px]"><a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/our-tutors">About Us</a></li>
            <li className="mt-[15px]"><a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/become-a-tutor">Features</a></li>
            <li className="mt-[15px]"><a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/plans-and-pricing">FAQs</a></li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:mt-0">
          <p className="text-deutziawhite font-inter text-[18px] font-medium">Legal</p>
          <div className="flex gap-4 sm:flex-col">
            <a target="_blank"
              href="#">Terms of Service</a>
              <a
              target="_blank"
              href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
        </div>
        <div className=''>
        <hr className="mt-[30px] mx-auto border-0 w-[90%] bg-white h-px" />
        <div className="flex items-center justify-center lg:justify-start pb-8 pt-[9px] md:py-8">
          <p className=" font-medium text-sm">
            2024 Will  Be There- All Rights Reserved
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}