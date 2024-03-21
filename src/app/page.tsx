"use client";
import Spline from "@splinetool/react-spline";
import { useInView } from "framer-motion";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import Footer from "@/components/footer/Footer";
import { Span } from "next/dist/trace";
import List from "./components/List";

export default function Home() {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [modelLoaded, setModelLoaded] = useState(false);

  const whoWeAreParallax = useParallax({
    speed: viewportWidth < 751 ? 0 : -25,
  });
  const whoWeAreQuoteRef = useRef(null);
  const whoWeAreQuoteInView = useInView(whoWeAreQuoteRef);

  const featuredWorkSectionRef = useRef(null);

  const featuredWorkOneImgParallax = useParallax({
    speed: -50,
  });
  const featuredWorkOneRef = useRef(null);
  const featuredWorkOneInView = useInView(featuredWorkOneRef);
  const featuredWorkOneContentRef = useRef(null);
  const featuredWorkOneContentInView = useInView(featuredWorkOneContentRef);

  const featuredWorkThreeImgParallax = useParallax({
    speed: -50,
  });
  const featuredWorkThreeContentRef = useRef(null);
  const featuredWorkThreeContentInView = useInView(featuredWorkThreeContentRef);

  const featuredWorkFiveImgParallax = useParallax({
    speed: -20000,
  });
  const featuredWorkFiveContentRef = useRef(null);
  const featuredWorkFiveContentInView = useInView(featuredWorkFiveContentRef);

  const selectedClientsRef = useRef(null);
  const selectedClientsInView = useInView(selectedClientsRef);

  const emailBannerRef = useRef(null);
  const emailBannerInView = useInView(emailBannerRef);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <style jsx>
        {`
          #hero-text {
            background: #232323;
            background-clip: text;
          }
          @media (min-width: 751px) {
            #hero-text {
              background: linear-gradient(
                to right,
                #ffffff 55.5%,
                #329b89 55.5%
              );
              background-clip: text;
            }
          }
          @media (min-width: 1001px) {
            #hero-text {
              background: linear-gradient(
                to right,
                #ffffff 52.2%,
                #329b89 52.2%
              );
              background-clip: text;
            }
          }
          .progress-loader {
            top: 50%;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
            width: 150px;
            background: #329b8940;
            height: 10px;
            border-radius: 7px;
          }
          
          .progress {
            width: 1px;
            height: 10px;
            border-radius: 7px;
            background: #329b89;
            transition: 0.5s;
            animation: loading_44 1s cubic-bezier(.4,1.01,1,1) infinite;
          }
          
          @keyframes loading_44 {
            0% {
              width: 0%;
            }
          
            50% {
              width: 100%;
            }
          
            100% {
              width: 0%;
            }
          }
        `}
      </style>
      <section
        className="w-full h-[746px] min-[751px]:h-[1194px] min-[1001px]:h-[1402px] bg-cover relative min-[751px]:mb-[82px] min-[1001px]:mb-[88px] overflow-hidden"
        data-hero-section
      >
        <div
          className="absolute top-0 left-0 w-full h-[31.3vh] min-[751px]:w-[55%] min-[751px]:h-[726px] min-[1001px]:w-[52%] min-[1001px]:h-[729px] bg-[#329b89] backdrop-blur-[20px] -webkit-backdrop-blur-[20px] border-0 border-[rgba(255, 255, 255, 0.18)] z-30"
          data-box-decorative
        ></div>
        <div
          className="w-full h-[31.3vh] min-[751px]:h-[726px] min-[1001px]:h-[729px] bg-[#f3f3f3] flex items-center min-[751px]:border-r-[10px] border-[#e5e5e5]"
          style={{ borderBottom: "1px solid #232323" }}
          data-box-decorative
        >
          <h1
            className="w-[90%] text-center text-transparent min-[751px]:text-left text-[8vw] min-[500px]:text-[6vw] min-[600px]:text-[5vw] mx-[5%] absolute z-40"
            id="hero-text"
          >
            DON&apos;T CHASE TRENDS. SET THEM.
          </h1>
        </div>
        <div
          id="seprator"
          className="w-full h-[1px] bg-[#232323] absolute left-0 top-[31.3vh] min-[751px]:top-[726px] min-[1001px]:top-[729px] z-40"
        ></div>
        <div
          className={`w-full h-[664px] min-[751px]:h-[686px] ${modelLoaded
            ? `bg-[#f3f3f3]`
            : `bg-[url('/assets/interactionLoadingImage.png')]`
            } bg-center bg-no-repeat absolute bottom-0 left-0 z-0`}
          style={{
            borderLeft: "10px solid #e5e5e5",
            borderRight: "10px solid #e5e5e5",
          }}
          data-model-container
        >
          {!modelLoaded && (
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
              <div className="progress-loader">
                <div className="progress"></div>
              </div>
            </div>
          )}
          <Spline
            scene="https://prod.spline.design/TPBxdOYqRTuCKy1W/scene.splinecode"
            className="absolute z-10"
            onLoad={() => {
              setTimeout(() => {
                setModelLoaded(true);
              }, 1000);
            }}
          />
        </div>
      </section>
      <section
        className="w-full h-auto bg-[#f3f3f3] min-[751px]:py-[8%] min-[1001px]:py-[9%] px-5 flex justify-between items-start flex-wrap overflow-hidden relative"
        style={{
          borderBottom: "1px solid #232323",
          borderTop: "1px solid #232323",
        }}
        data-about-quote
      >
        <h2
          ref={whoWeAreParallax?.ref as LegacyRef<HTMLHeadingElement>}
          className="w-full min-[751px]:w-[50%] text-black max-[750px]:mt-[12%] min-[751px]:pl-[5%] text-[3.75vw] min-[501px]:text-[3vw] min-[751px]:text-[1.85vw] leading-[1.5em] tracking-[0.06em]"
        >
          {featuredWorkOneInView ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={featuredWorkOneInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              WE ARE MODERN INFOTECH
            </motion.span>
          ) : (
            <span>WHO WE ARE</span>
          )}
        </h2>
        <motion.p
          ref={whoWeAreQuoteRef}
          initial={{ opacity: 0, y: 100 }}
          animate={
            whoWeAreQuoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
          }
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full min-[751px]:w-[50%] text-black max-[750px]:mt-[8%] max-[750px]:mb-[24%] min-[751px]:pl-[5%] min-[1001px]:pl-[2.5%] text-[5.6vw] min-[501px]:text-[5vw] min-[751px]:text-[2.44vw] min-[1001px]:text-[2.45vw] leading-[1.4em]"
        >
          RAW is a creative agency focused on strategy, design and advertising.
          Our mission is to develop brands that are bold, powerful and
          unforgettable.
        </motion.p>
      </section>
      <section
        ref={featuredWorkSectionRef}
        className="w-full h-auto bg-[#f3f3f3] py-[3%] min-[751px]:py-[0%] px-5 flex justify-between items-center flex-wrap"
        style={{ borderBottom: "1px solid #232323" }}
        data-featured-works-quote
      >
        <h2 className="w-full min-[751px]:w-[50%] text-black max-[750px]:mt-[3%] min-[751px]:pl-[5%] text-[8vw] font-[300] min-[501px]:text-[6vw] min-[751px]:text-[4.5vw] min-[1001px]:text-[4vw] leading-[0.9em]">
          FEATURED WORK
        </h2>

        <p className="w-full min-[751px]:w-[50%] text-black max-[750px]:mt-[4%] max-[750px]:mb-[11%] min-[751px]:py-[1%] min-[1001px]:py-[3%] min-[751px]:pl-[5%] min-[1001px]:pl-[2.5%] text-[4vw] font-[300] min-[501px]:text-[3.5vw] min-[751px]:text-[2vw] min-[1001px]:text-[1.8vw] leading-[1.5em] tracking-[0.06em]">
          SELECTED PROJECTS THAT UNITE RESEARCH, STRATEGY & CREATIVE FIREPOWER.
        </p>
      </section>
      <section
        ref={featuredWorkOneRef}
        className="w-full h-[517px] bg-[#f3f3f3] flex flex-col justify-between items-start min-[751px]:h-[342px] min-[1001px]:h-[685px] min-[751px]:flex-row-reverse"
        data-past-work-container
        data-work-id-one
      >
        <div className="w-full h-[40%] relative min-[751px]:h-full overflow-hidden">

          <div className="w-full h-full relative flex justify-start items-center min-[751px]:items-end px-5 min-[1001px]:px-10">
            <motion.h3
              ref={featuredWorkOneContentRef}
              initial={{
                opacity: 0,
                y:
                  viewportWidth > 750 && viewportWidth < 1001
                    ? 30
                    : viewportWidth > 1000
                      ? 0
                      : 75,
              }}
              animate={
                featuredWorkOneContentInView
                  ? {
                    opacity: 1,
                    y:
                      viewportWidth > 750 && viewportWidth < 1001
                        ? -70
                        : viewportWidth > 1000
                          ? -100
                          : -25,
                  }
                  : {
                    opacity: 0,
                    y:
                      viewportWidth > 750 && viewportWidth < 1001
                        ? 30
                        : viewportWidth > 1000
                          ? 0
                          : 75,
                  }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-[45%] min-[501px]:w-[40%] min-[501px]:-translate-y-[30px] min-[751px]:w-[55%] min-[1001px]:w-[50%] min-[751px]:-translate-y-[80px] text-black text-[8vw] font-[300] min-[501px]:text-[6vw] min-[751px]:text-[4.5vw] min-[1001px]:text-[4vw] min-[1001px]:-translate-y-[70%] leading-[0.9em]"
            >
              MAKING YOU LOOK
            </motion.h3>
          </div>
          <div
            className="w-full h-[50px] min-[1001px]:h-[60px] absolute bottom-0 flex justify-between items-center gap-[1vw] px-5 min-[1001px]:px-10"
            style={{ borderTop: "1px solid #232323" }}
          >
            <p className="text-[12px] min-[501px]:text-[16px] min-[751px]:text-[15px] min-[1001px]:text-[18px] w-[80%] min-[1001px]:w-[90%] font-[200] min-[501px]:font-[300]">
              VORHANG - PRINT, IDENTITY
            </p>
            <p className="text-[20px] min-[501px]:text-[24px] min-[751px]:text-[23px] min-[1001px]:text-[28px] -translate-y-[2.5px] font-[400] min-[501px]:font-[500] text-[#232323]">
              +
            </p>
            <p className="text-[20px] min-[501px]:text-[24px] min-[751px]:text-[23px] min-[1001px]:text-[28px] font-[300] min-[501px]:font-[400]">
              INFO
            </p>
          </div>
        </div>
        <div className="w-full h-[60%] min-[751px]:h-full flex justify-center items-center overflow-hidden">
          <img
            ref={featuredWorkOneImgParallax.ref as LegacyRef<HTMLImageElement>}
            src="/assets/webMockup.gif"
            alt=""
            className="w-full"
          />
        </div>
      </section>
      <section
        className="w-full h-[519px] flex flex-col justify-between items-start min-[751px]:h-[342px] min-[1001px]:h-[685px] min-[751px]:flex-row"
        data-past-work-container
        data-work-id-two
      >
        <div className="w-full h-[40%] relative min-[751px]:h-full overflow-hidden">
          <img
            src="/assets/mockpup4.jpg"
            alt=""
            className="w-full max-[750px]:hidden absolute top-0 left-0 z-0 brightness-[80%]"
          />
          <div className="w-full h-full relative flex justify-start items-center px-5 min-[1001px]:px-10">
            <h3 className="w-[15%] -translate-y-[25px] text-[#e5e5e5] text-[8vw] font-[300] min-[501px]:text-[6vw] min-[751px]:text-[4.5vw] min-[1001px]:text-[4vw] leading-[0.9em]">
              THE OTHER SIDE
            </h3>
          </div>
          <div
            className="w-full h-[50px] min-[1001px]:h-[60px] absolute bottom-0 flex justify-between items-center gap-[1vw] px-5 min-[1001px]:px-10"
            style={{ borderTop: "1px solid #e5e5e5" }}
          >
            <p className="text-[12px] min-[501px]:text-[16px] min-[751px]:text-[15px] min-[1001px]:text-[18px] w-[90%] min-[1001px]:w-[100%] font-[200] min-[501px]:font-[300] text-[#e5e5e5]">
              MCA - INTERACTIVE, CAMPAIGN
            </p>
            <p className="text-[20px] min-[501px]:text-[24px] min-[751px]:text-[23px] min-[1001px]:text-[28px] -translate-y-[2.5px] font-[400] min-[501px]:font-[500] text-[#e5e5e5]">
              +
            </p>
            <p className="text-[20px] min-[501px]:text-[24px] min-[751px]:text-[23px] min-[1001px]:text-[28px] font-[300] min-[501px]:font-[400] text-[#e5e5e5]">
              INFO
            </p>
          </div>
        </div>
        <div className="w-full h-[60%] min-[751px]:hidden bg-slate-400 flex justify-center items-center overflow-hidden">
          <img src="/assets/mockpup4.jpg" alt="" className="w-auto h-full" />
        </div>
      </section>
      <section
        className="w-full h-[516px] bg-[#f3f3f3] flex flex-col justify-between items-start min-[751px]:h-[339px] min-[1001px]:h-[686px] min-[751px]:flex-row-reverse"
        data-past-work-container
        data-work-id-three
      >
        <div className="w-full h-[40%] relative min-[751px]:h-full bg-[#f3f3f3]">
          <div className="w-full h-full relative flex justify-start items-center min-[751px]:items-start px-5 min-[1001px]:px-10">
            <motion.h3
              ref={featuredWorkThreeContentRef}
              initial={{
                opacity: 0,
                y:
                  viewportWidth > 750 && viewportWidth < 1001
                    ? 120
                    : viewportWidth > 1000
                      ? 140
                      : 80,
              }}
              animate={
                featuredWorkThreeContentInView
                  ? {
                    opacity: 1,
                    y:
                      viewportWidth > 750 && viewportWidth < 1001
                        ? 20
                        : viewportWidth > 1000
                          ? 40
                          : -20,
                  }
                  : {
                    opacity: 0,
                    y:
                      viewportWidth > 750 && viewportWidth < 1001
                        ? 120
                        : viewportWidth > 1000
                          ? 140
                          : 80,
                  }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-[45%] min-[501px]:w-[40%] min-[501px]:-translate-y-[20px] min-[751px]:w-[70%] min-[751px]:translate-y-[25px] text-black text-[8vw] font-[300] min-[501px]:text-[6vw] min-[751px]:text-[4.5vw] min-[1001px]:text-[4vw] min-[1001px]:translate-y-[80%] leading-[0.9em]"
            >
              TRUE GEMS
            </motion.h3>
          </div>
          <div
            className="w-full h-[50px] min-[1001px]:h-[60px] absolute bottom-0 flex justify-between items-center gap-[1vw] px-5 min-[1001px]:px-10"
            style={{ borderTop: "1px solid #232323" }}
          >
            <p className="text-[12px] min-[501px]:text-[16px] min-[751px]:text-[15px] min-[1001px]:text-[18px] w-[80%] min-[1001px]:w-[90%] font-[200] min-[501px]:font-[300]">
              JACQUES - IDENTITY, SOCIAL
            </p>
            <p className="text-[20px] min-[501px]:text-[24px] min-[751px]:text-[23px] min-[1001px]:text-[28px] -translate-y-[2.5px] font-[400] min-[501px]:font-[500] text-[#232323]">
              +
            </p>
            <p className="text-[20px] min-[501px]:text-[24px] min-[751px]:text-[23px] min-[1001px]:text-[28px] font-[300] min-[501px]:font-[400]">
              INFO
            </p>
          </div>
        </div>
        <div className="w-full h-[60%] min-[751px]:h-full bg-slate-500 flex justify-center items-center overflow-hidden">
          <img
            ref={
              featuredWorkThreeImgParallax.ref as LegacyRef<HTMLImageElement>
            }
            src="/assets/mockpup3.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </section>
      <section
        className="w-full h-[517px] bg-[#f3f3f3] flex flex-col justify-between items-start min-[751px]:h-[339px] min-[1001px]:h-[685px] min-[751px]:flex-row"
        data-past-work-container
        data-work-id-four
      >
        <div className="w-full h-[40%] relative min-[751px]:h-full bg-[#f3f3f3] overflow-hidden">
          <img
            src="/assets/mockpup2.jpg"
            alt=""
            className="w-full h-full max-[750px]:hidden absolute top-0 left-0 z-0"
          />
          <div className="w-full h-full relative flex justify-start items-center px-5 min-[1001px]:px-10">
            <h3 className="w-[15%] -translate-y-[25px] text-[#e5e5e5] text-[8vw] font-[300] min-[501px]:text-[6vw] min-[751px]:text-[4.5vw] min-[1001px]:text-[4vw] leading-[0.9em]">
              DRIVE THE FUTURE
            </h3>
          </div>
          <div
            className="w-full h-[50px] min-[1001px]:h-[60px] absolute bottom-0 flex justify-between items-center gap-[1vw] px-5 min-[1001px]:px-10"
            style={{ borderTop: "1px solid #e5e5e5" }}
          >
            <p className="text-[12px] min-[501px]:text-[16px] min-[751px]:text-[15px] min-[1001px]:text-[18px] w-[90%] min-[1001px]:w-[100%] font-[200] min-[501px]:font-[300] text-[#e5e5e5]">
              FLIEGEN - IDENTITY, CAMPAIGN
            </p>
            <p className="text-[20px] min-[501px]:text-[24px] min-[751px]:text-[23px] min-[1001px]:text-[28px] -translate-y-[2.5px] font-[400] min-[501px]:font-[500] text-[#e5e5e5]">
              +
            </p>
            <p className="text-[20px] min-[501px]:text-[24px] min-[751px]:text-[23px] min-[1001px]:text-[28px] font-[300] min-[501px]:font-[400] text-[#e5e5e5]">
              INFO
            </p>
          </div>
        </div>
        <div className="w-full h-[60%] min-[751px]:hidden bg-slate-400 flex justify-center items-center overflow-hidden">
          <img src="/assets/mockpup2.jpg" alt="" className="w-auto  h-full" />
        </div>
      </section>
      <section
        className="w-full h-[516px] flex flex-col justify-between items-start min-[751px]:h-[338px] min-[1001px]:h-[685px] min-[751px]:flex-row"
        data-past-work-container
        style={{ borderBottom: "1px solid #232323" }}
        data-work-id-three
      >
        <div className="w-full h-[40%] relative min-[751px]:h-full bg-[#f3f3f3]">
          <div className="w-full h-full relative flex justify-start items-center min-[751px]:items-start px-5 min-[1001px]:px-10">
            <motion.h3
              ref={featuredWorkFiveContentRef}
              initial={{
                opacity: 0,
                y:
                  viewportWidth > 750 && viewportWidth < 1001
                    ? 120
                    : viewportWidth > 1000
                      ? 140
                      : 80,
              }}
              animate={
                featuredWorkFiveContentInView
                  ? {
                    opacity: 1,
                    y:
                      viewportWidth > 750 && viewportWidth < 1001
                        ? 20
                        : viewportWidth > 1000
                          ? 40
                          : -20,
                  }
                  : {
                    opacity: 0,
                    y:
                      viewportWidth > 750 && viewportWidth < 1001
                        ? 120
                        : viewportWidth > 1000
                          ? 140
                          : 80,
                  }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-[45%] min-[501px]:w-[40%] min-[501px]:-translate-y-[20px] min-[751px]:w-[70%] min-[751px]:translate-y-[25px] text-black text-[8vw] font-[300] min-[501px]:text-[6vw] min-[751px]:text-[4.5vw] min-[1001px]:text-[4vw] min-[1001px]:translate-y-[30%] leading-[0.9em]"
            >
              PARISIAN GETAWAY
            </motion.h3>
          </div>
          <div
            className="w-full h-[50px] min-[1001px]:h-[60px] absolute bottom-0 flex justify-between items-center gap-[1vw] px-5 min-[1001px]:px-10"
            style={{ borderTop: "1px solid #232323" }}
          >
            <p className="text-[12px] min-[501px]:text-[16px] min-[751px]:text-[15px] min-[1001px]:text-[18px] w-[80%] min-[1001px]:w-[90%] font-[200] min-[501px]:font-[300]">
              FRAIS - CAMPAIGN, PRINT, SOCIAL
            </p>
            <p className="text-[20px] min-[501px]:text-[24px] min-[751px]:text-[23px] min-[1001px]:text-[28px] -translate-y-[2.5px] font-[400] min-[501px]:font-[500] text-[#232323]">
              +
            </p>
            <p className="text-[20px] min-[501px]:text-[24px] min-[751px]:text-[23px] min-[1001px]:text-[28px] font-[300] min-[501px]:font-[400]">
              INFO
            </p>
          </div>
        </div>
        <div className="w-full h-[60%] min-[751px]:h-full bg-[#f3f3f3] flex justify-center items-center overflow-hidden">
          <img
            ref={featuredWorkFiveImgParallax.ref as LegacyRef<HTMLImageElement>}
            src="/assets/mockpup1.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </section>
      <section className="w-full h-auto">
        <ul className="relative">
          <List props={{ imgUrl: "/assets/gradientThree.jpg", index: 1, title: "Graphic Design ~ Ui/Ux", des: "Maxime aut odit reprehenderit atque accusantium corporis dolorem qui eius voluptatibus fuga, earum tempora corrupti et? Eveniet, molestiae quaerat!" }} />
          <List props={{ imgUrl: "/assets/gradientOne.jpg", index: 2, title: "Graphic Design ~ Ui/Ux", des: "Maxime aut odit reprehenderit atque accusantium corporis dolorem qui eius voluptatibus fuga, earum tempora corrupti et? Eveniet, molestiae quaerat!" }} />
        </ul>
      </section>
      <section className="w-full h-full bg-[#f3f3f3]">
        <div className="w-full h-[460vh] relative">
          <motion.h2
            ref={selectedClientsRef}
            className="text-center leading-[1.2em] tracking-[0.06em] text-[#232323] mt-[48px] text-[7vw] sticky top-14 min-[751px]:top-16 min-[1001px]:top-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              emailBannerInView
                ? { opacity: 0, scale: 0.9 }
                : selectedClientsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5 }}
          >
            SELECTED CLIENTS
          </motion.h2>
          <div className="w-full h-70vh my-32 min-[751px]:my-44 min-[1001px]:my-52 flex flex-col gap-20 min-[1001px]:gap-40 justify-end items-center min-[751px]:flex-row min-[751px]:justify-center sticky top-48 min-[751px]:top-64 min-[1001px]:top-[20rem]">
            <img
              className="invert w-[65%] min-[751px]:w-[42%] min-[1001px]:w-[30%]"
              src="/assets/illustrationThree.png"
              alt=""
            />
            <div className="h-[30vw] min-[751px]:w-[30%] min-[751px]:h-[16vw] min-[1001px]:w-[20%] min-[1001px]:h-[11vw] grid grid-rows-5">
              <h3 className="col-start-1 text-[7vw] min-[601px]:text-[5vw] min-[751px]:text-[3vw] min-[1001px]:text-[2vw] text-center min-[751px]:text-left row-start-1">
                CLIENT ONE
              </h3>
            </div>
          </div>
          <div className="w-full h-70vh my-32 min-[751px]:my-44 min-[1001px]:my-52 flex flex-col gap-20 min-[1001px]:gap-40 justify-end items-center min-[751px]:flex-row min-[751px]:justify-center sticky top-48 min-[751px]:top-64 min-[1001px]:top-[20rem]">
            <img
              className="invert w-[65%] min-[751px]:w-[42%] min-[1001px]:w-[30%] -rotate-6"
              src="/assets/illustrationThree.png"
              alt=""
            />
            <div className="h-[30vw] min-[751px]:w-[30%] min-[751px]:h-[16vw] min-[1001px]:w-[20%] min-[1001px]:h-[11vw] grid grid-rows-5">
              <h3 className="col-start-1 text-[7vw] min-[601px]:text-[5vw] min-[751px]:text-[3vw] min-[1001px]:text-[2vw] text-center min-[751px]:text-left row-start-2">
                CLIENT TWO
              </h3>
            </div>
          </div>
          <div className="w-full h-70vh my-32 min-[751px]:my-44 min-[1001px]:my-52 flex flex-col gap-20 min-[1001px]:gap-40 justify-end items-center min-[751px]:flex-row min-[751px]:justify-center sticky top-48 min-[751px]:top-64 min-[1001px]:top-[20rem]">
            <img
              className="invert w-[65%] min-[751px]:w-[42%] min-[1001px]:w-[30%]"
              src="/assets/illustrationThree.png"
              alt=""
            />
            <div className="h-[30vw] min-[751px]:w-[30%] min-[751px]:h-[16vw] min-[1001px]:w-[20%] min-[1001px]:h-[11vw] grid grid-rows-5">
              <h3 className="col-start-1 text-[7vw] min-[601px]:text-[5vw] min-[751px]:text-[3vw] min-[1001px]:text-[2vw] text-center min-[751px]:text-left row-start-3">
                CLIENT THREE
              </h3>
            </div>
          </div>
          <div className="w-full h-70vh my-32 min-[751px]:my-44 min-[1001px]:my-52 flex flex-col gap-20 min-[1001px]:gap-40 justify-end items-center min-[751px]:flex-row min-[751px]:justify-center sticky top-48 min-[751px]:top-64 min-[1001px]:top-[20rem]">
            <img
              className="invert w-[65%] min-[751px]:w-[42%] min-[1001px]:w-[30%] -rotate-6"
              src="/assets/illustrationThree.png"
              alt=""
            />
            <div className="h-[30vw] min-[751px]:w-[30%] min-[751px]:h-[16vw] min-[1001px]:w-[20%] min-[1001px]:h-[11vw] grid grid-rows-5">
              <h3 className="col-start-1 text-[7vw] min-[601px]:text-[5vw] min-[751px]:text-[3vw] min-[1001px]:text-[2vw] text-center min-[751px]:text-left row-start-4">
                CLIENT FOUR
              </h3>
            </div>
          </div>
          <div className="w-full h-70vh my-32 min-[751px]:my-44 min-[1001px]:my-52 flex flex-col gap-20 min-[1001px]:gap-40 justify-end items-center min-[751px]:flex-row min-[751px]:justify-center sticky top-48 min-[751px]:top-64 min-[1001px]:top-[20rem]">
            <img
              className="invert w-[65%] min-[751px]:w-[42%] min-[1001px]:w-[30%]"
              src="/assets/illustrationThree.png"
              alt=""
            />
            <div className="h-[30vw] min-[751px]:w-[30%] min-[751px]:h-[16vw] min-[1001px]:w-[20%] min-[1001px]:h-[11vw] grid grid-rows-5">
              <h3 className="col-start-1 text-[7vw] min-[601px]:text-[5vw] min-[751px]:text-[3vw] min-[1001px]:text-[2vw] text-center min-[751px]:text-left row-start-5">
                CLIENT FIVE
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section ref={emailBannerRef} className="w-full h-fit">
        <Footer />
      </section>
    </main>
  );
}
