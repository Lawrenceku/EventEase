import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import { JSX, SVGProps, useState,useEffect, useRef } from "react";
import Image from "next/image";
import {faqs} from '../faqs'
import heroPicture from '../../public/hero-picture.svg'
import aboutImg from '../../public/about-us.svg'
import eventCreation from '../../public/event-creation.svg'
import autoEvent from '../../public/auto-event.svg'
import realTime from '../../public/real-time.svg'
import guestList from '../../public/guest-list.svg'
import linkedinIcon from '../../public/Linkedin.svg'
import facebookIcon from '../../public/facebook.svg'
import instagramIcon from '../../public/instagram.svg'
import twitterIcon from '../../public/twitter.svg'
import star from '../../public/star.svg'
import tayo from '../../public/Tayo.svg'
import sarah from '../../public/sarah.svg'
import alex from '../../public/alexander.svg'


export default function Component() {
  const [navOpen, setNavOpen] = useState(false);
  const home = useRef<HTMLDivElement>(null)

  useEffect(() => {
      home.current?.focus();

  }, []);
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
            <Link className="focus:text-blue-700 outline-none focus:underline flex w-full items-center py-2 text-lg font-semibold" href="#">
              Home
            </Link>
            <Link className="focus:text-blue-700 outline-none focus:underline flex w-full items-center py-2 text-lg font-semibold" href="#">
              About
            </Link>
            <Link className="focus:text-blue-700 outline-none focus:underline flex w-full items-center py-2 text-lg font-semibold" href="#">
              Features
            </Link>
            <Link className="focus:text-blue-700 outline-none focus:underline flex w-full items-center py-2 text-lg font-semibold" href="#">
              How It Works
            </Link>
            <Link className="focus:text-blue-700 outline-none focus:underlineflex w-full items-center py-2 text-lg font-semibold" href="#">
              Testimonials
            </Link>
            <Link className="focus:text-blue-700 outline-none focus:underline flex w-full items-center py-2 text-lg font-semibold" href="#">
              FAQs
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">RSVP</span>
      </Link>
      <div className="hidden w-max-2xl pl-20 w-screen justify-center ml-auto font-medium lg:flex gap-6 ">
        <Link ref={home} className='focus:text-blue-700 outline-none focus:underline mx-4' href='#'>Home</Link>
        <Link className='focus:text-blue-700 outline-none focus:underline mx-4' href='#'>About</Link>
        <Link className='focus:text-blue-700 outline-none focus:underline mx-4' href='#'>Features</Link>
        <Link className='focus:text-blue-700 outline-none focus:underline mx-4' href='#'>How It Works</Link>
        <Link className='focus:text-blue-700 outline-none focus:underline mx-4' href='#'>Testimonials</Link>
        <Link className='focus:text-blue-700 outline-none focus:underline mx-4' href='#'>FAQs</Link>
        </div>
      <nav className="ml-auto lg:items-center  flex gap-6">
        <Link
          href="/auth/login"
          className="group inline-flex h-9 w-max px-6 py-5 items-center justify-center rounded border text-blue-700 border-blue-700 bg-white  text-sm font-medium transition-colors hover:bg-blue-700 hover:text-white focus:bg-blue-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
        >
          Log In
        </Link>
        <Link
          href="/auth/register"
          className="group inline-flex h-9 px-6 py-5 w-max items-center justify-center rounded text-white bg-blue-700  text-sm font-medium border border-blue-700 transition-colors hover:bg-transparent hover:text-blue-700 focus:bg-transparent focus:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
        >
          Sign Up
        </Link>
      </nav>
    </header>
    <HeroSection/>
    <AboutUs/>
    <Features/>
    <NavigatePortal/>
    <div className="py-20 px-4">
    <div className="flex flex-wrap justify-around ">
    <ReviewCard/>
    </div>
    </div>
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
        <span className="font-bold text-lg w-40 text-blue-900">WILL <span className="text-black" >BE THERE</span></span>
  );
}



function HeroSection(){
  return(
<section className=" dark:bg-gray-900 px-4 md:px-10">
    <div className="grid   py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto mt-20 lg:col-span-7">
            <h1 style={{ lineHeight: '1.32' }} className=" mb-16  text-5xl font-medium md:text-5xl xl:text-6xl dark:text-white lg:text-left text-center">RSVP Like Never Before With <span className='underline text-blue-700'>Will Be There</span></h1>
            <p className=" mb-12 lg:mb-10 leading-loose tracking-wide md:text-lg lg:text-xl dark:text-gray-400 lg:text-left text-center">Elevate your event game with Will Be There, where every `Yes` and every click of the button is a step towards new adventures, new connections, and new beginnings</p>
            <div className="flex justify-center lg:justify-start ">
              <Link href="/auth/register" className="r inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded bg-blue-700 hover:bg-blue-800 ">
              Get started
              </Link>
            </div>
        </div>
        <div className="hidden  lg:mt-0 ml-4 lg:col-span-5 lg:flex lg:justify-end">
            <Image alt="" className="w-full" src={heroPicture} />
        </div>                
    </div>
</section>
  )
}

function AboutUs(){
  return(
    <section className=" bg-[#E6EAFF] dark:bg-gray-900 pt-10 px-4 md:px-10">
          <h1 style={{ lineHeight: '1.32' }} className=" mb-1  w-full text-center text-4xl font-medium  dark:text-white">About Us</h1>
    <div className="grid   py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
       <div className=" lg:mt-0  lg:col-span-5 lg:flex sm:justify-center">
            <div className="flex justify-center">
            <Image alt="" className="" src={aboutImg} />
            </div>
        </div>  
        <div className=" flex flex-col justify-between items-center lg:items-start mr-auto ml-4 mt-10 lg:col-span-7">
            <p className=" mb-6 lg:mb-10 leading-loose tracking-wide text-center lg:text-left md:text-lg lg:text-xl dark:text-gray-400">
              At Will Be There, we believe in the power of connection and celebration. Our platform is more than just an event planning tool; it&apos;s a vibrant community where every gathering becomes a moment to cherish.
              </p>
              <p className=" mb-6 lg:mb-10 leading-loose tracking-wide text-center lg:text-left md:text-lg lg:text-xl dark:text-gray-400">
              Founded with a passion for bringing people together, Will Be There simplifies event planning, making it effortless for organizers to create unforgettable experiences. From intimate gatherings to grand celebrations, our platform provides the tools and resources needed to turn your vision into reality.
            Join us in celebrating life&apos;s moments, big and small. Together, let&apos;s create memories that will last a lifetime.</p>
            <Link href="/auth/register" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded bg-blue-700 hover:bg-blue-900 ">
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
      <h1 style={{ lineHeight: '1.32' }} className=" mt-16 mb-10 w-full text-center text-4xl font-medium dark:text-white">Our Unique Features</h1>
          <section className="  px-4 md:px-16 mb-24 flex justify-around items-start flex-wrap">
        <div className="flex flex-col justify-center items-center w-72 m-8">
          <div className="w-full">
          <Image alt="" className="w-full" src={eventCreation}/>
          </div>
          <div className="text-center">
            <p className="font-medium">Event Creation and Management</p>
            <p>Simplify event planning with our user-friendly interface. With just a few clicks, you can create, edit, and manage your events from anywhere, anytime.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-72 m-8">
          <Image alt="" src={autoEvent}/>
          <div className="text-center">
            <p className="font-medium">Automated Event Reminders</p>
            <p>Effortlessly manage your schedule with automated event reminders. Receive timely notifications about event dates, times, and locations, ensuring you never miss an important occasion.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-72 m-8">
          <Image alt="" src={realTime}/>
          <div className="text-center">
            <p className="font-medium">Real Time Event Analytics</p>
            <p>Stay informed and in control of your event with real-time event analytics. Instantly monitor attendance, engagement, and session popularity to ensure a seamless and successful event.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-72 m-8 ">
          <Image alt="" src={guestList}/>
          <div className="text-center">
            <p className="font-medium">Guest List Managers</p>
            <p>Stay organized with our guest list management tool. Easily track RSVPs, manage guest details, and ensure a seamless event experience for all attendees</p>
          </div>
        </div>
    </section>

    </>
  )
}

function NavigatePortal(){
  return(
    <section className=" bg-[#E6EAFF] dark:bg-gray-900 px-4 pt-10 md:px-10 pb-20">
          <h1 style={{ lineHeight: '1.32' }} className=" mb-1 w-full text-center text-4xl font-medium dark:text-white">How To Navigate The Portal</h1>
    <div className="mt-10 w-6/7s lg:w-1/2  mx-auto flex flex-col justify-center">
       <div className="rounded-full w-full bg-blue-700 py-4 px-4 flex items-center justify-among">
          <span className="text-blue-700 bg-white rounded-[50%] py-2 mx-4 p-5 text-lg font-medium border-1 ">1</span>
          <span className='text-white font-medium text-xl'>Register or Login to the portal</span>
       </div>
       <hr style={{ transform: `rotate('180deg')` }} className="border-l-2 border-dashed border-0 ml-10 broken border-blue-700 h-16"/>
       <div className=" rounded-full w-full border-[1px] bg-white border-blue-700 py-4 px-4 flex items-center justify-among">
          <span className="text-blue-700 border-[1px] border-blue-700 bg-white rounded-[50%] py-2 mx-4 px-5 text-lg font-medium ">2</span>
          <span className='font-medium text-xl'>Create events and share links</span>
       </div>
       <hr style={{ transform: `rotate('180deg')` }} className="border-l-2 border-dashed border-0 ml-10 broken border-blue-700 h-16"/>
       <div className=" rounded-full w-full border-[1px] bg-white border-blue-700 py-4 px-4 flex items-center justify-among">
          <span className="text-blue-700 border-[1px] border-blue-700 bg-white rounded-[50%] py-2 mx-4 px-5 text-lg font-medium ">3</span>
          <span className=' font-medium text-xl'>Generate RSVP responses</span>
       </div>
    </div>
</section>
  )
}

function ReviewCard(){

  return (
    <div className="py-8 pb-2 px-4">
    <h1 className="font-medium text-center text-4xl mb-16">What Our Clients Say</h1>
    <div className="flex flex-wrap justify-around ">

    <div className="w-80 px-4 m-8 max-w-sm bg-white rounded shadow-[3px_3px_6px_rgba(0,0,0,0.2)] dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
      </div>
      <div className="flex flex-col items-center pb-10">
        <Image
          alt="image"
          height={80}
          width={80}
          src={tayo}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mb-8">Tayo Olamide</h5>
        <span className="text-sm text-center text-gray-500 dark:text-gray-400">&quot;Will Be There has revolutionized the way I plan events. It&apos;s robust features, coupled with excellent customer support, have made it my go-to platform for all my event needs.&quot;</span>
        <div className="flex mt-4 md:mt-6">
          {[...Array(5)].map((_, index) => (
            <Image  key={index} src={star} alt="star" className={`${index < 5 ? 'text-[#FFA500]' : ''}`} />
          ))}
        </div>
      </div>
    </div>

     <div className="w-80 px-4 m-8 max-w-sm bg-white rounded shadow-[3px_3px_6px_rgba(0,0,0,0.2)] dark:bg-gray-800 dark:border-gray-700">
     <div className="flex justify-end px-4 pt-4">
     </div>
     <div className="flex flex-col items-center pb-10">
       <Image
         alt="image"
         height={80}
         width={80}
         src={sarah}
       />
       <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mb-8">Sarah Kelly</h5>
       <span className="text-sm text-center text-gray-500 dark:text-gray-400">&quot;As an event organizer, I rely on Will Be There to streamline my workflow. The ability to manage guest lists, send reminders, and track attendance has made my job so much easier.&quot;</span>
       <div className="flex mt-4 md:mt-6">
        {[...Array(4)].map((_, index) => (
          <Image  key={index} src={star} alt="star" className={`${index < 4 ? 'text-[#FFA500]' : ''}`} />
        ))}
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0.5L14.6942 8.7918H23.4127L16.3593 13.9164L19.0534 22.2082L12 17.0836L4.94658 22.2082L7.64074 13.9164L0.587322 8.7918H9.30583L12 0.5Z" fill="#bababa"/>
        </svg>
      </div>
     </div>
   </div>

    <div className="w-80 px-4 m-8 max-w-sm bg-white rounded shadow-[3px_3px_6px_rgba(0,0,0,0.2)] dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
    </div>
    <div className="flex flex-col items-center pb-10">
      <Image
        alt="image"
        height={80}
        width={80}
        src={alex}
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mb-8">Alexander Mark</h5>
      <span className="text-sm text-center text-gray-500 dark:text-gray-400">&quot;I&apos;ve been using this platform for all my event needs, and it&apos;s been a game-changer. The user-friendly interface and comprehensive features have saved me so much time and effort.&quot;</span>
      <div className="flex mt-4 md:mt-6">
    {[...Array(5)].map((_, index) => (
      <Image alt='' key={index} src={star} className={`${index < 5 ? 'text-[#FFA500]' : ''}`} />
    ))}
  </div>

    </div>
  </div>

  </div>
  </div>
  );
};


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
    <div className='mb-8 flex flex-col items-center justify-center "'>
      <h1 className='text-5xl text-center font-medium mt-12 m-20'>Frequently Asked Questions</h1>
    {faqs.map(({ question, answer }, index) => (
        <div className="lg:w-[54vw] w-[90vw]" key={index}>
          <button
            role="button"
            aria-expanded={showContent[index]}
            
            className="flex w-full text-left items-center justify-between rounded border-b-[1px] border-[1px] m-4 text-lg border-gray-900  p-5 font-medium"
            onClick={() => toggleContent(index)}
          >
            {question}
            <span
              style={{ transform: `rotate(${showContent[index] ? '180deg' : '0'})` }}
              className="ml-4 text-4xl min-h-[24px] min-w-[24px] transition-transform ease-in-out"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                className="rounded-r  border-black  p-[10px] px-5 text-white bg-[#0023CB]"
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
    <div className="pt-9 bg-black px-4 lg:px-16 text-white">
      <div className=" w-full ">
        <div className="flex flex-col justify-between  md:flex-row ">
          <div className="md:w-[316px]">
            <p className="text-[18px] font-medium ">
              <span className=" font-extrabold flex items-center">
                WILL BE THERE
              </span>
            </p>
            <p className="mt-[18px] text-[15px]  ">
            +2349145463534
            </p>
            <p className="mt-[18px] text-[15px]  leading-normal">
            willbethere@gmail.com
            </p>
            <div className="mt-[18px] flex gap-4">
            <Link
            className="hover:scale-110" target="_blank"
            href="/"><Image  alt="linkedin icon" loading="lazy"  width="36" height="36" decoding="async" data-nimg="1"  src={linkedinIcon} /></Link><Link
            className="hover:scale-110" target="_blank"
            href="/"><Image  alt="facebook icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1"  src={facebookIcon} /></Link><Link
            className="hover:scale-110" target="_blank"
            href=""><Image  alt="instagram icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1"  src={instagramIcon} /></Link><Link
            className="hover:scale-110" target="_blank"
            href="/"><Image  alt="twitter icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1"  src={twitterIcon} /></Link>
            </div>
          </div>
      <div className="mt-6 flex w-full flex-col justify-between  sm:flex-row md:mt-0 md:max-w-[341px]">
        <div className="">
          <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">Company</p>
          <ul>
            <li className="mt-[15px]"><Link
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/">Home</Link></li>
            <li className="mt-[15px]"><Link
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/">About Us</Link></li>
            <li className="mt-[15px]"><Link
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/">Features</Link></li>
            <li className="mt-[15px]"><Link
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/">FAQs</Link></li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:mt-0">
          <p className="text-deutziawhite font-inter text-[18px] font-medium">Legal</p>
          <div className="flex gap-4 sm:flex-col">
            <Link target="_blank"
              href="#">Terms of Service</Link>
              <Link 
              target="_blank"
              href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
        </div>
        <div className=''>
        <hr className="mt-[30px] mx-auto border-0  bg-white h-px" />
        <div className=" lg:justify-start pb-8 pt-[9px] md:py-8">
          <p className=" font-medium text-sm">
            2024 Will  Be There- All Rights Reserved
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}