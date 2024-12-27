"use client";

import { useEffect, useState } from "react";
import { events } from "./const";
import { BigEventCard, SmallEventCard } from "./module-elements/Card";
import { BigCircleIcon, SmallCircleIcon } from "./module-elements/CircleIcon";
import { BigBlurredStarIcon, SmallBlurredStarIcon } from "./module-elements/BlurredStarIcon";
import Image from "next/image";


const TimelineModule = () => {
    const [isBigScreen, setIsBigScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsBigScreen(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className="w-full h-[76.97vw] flex flex-col justify-center items-center relative mt-[10%]"
            style={{
                'backgroundImage': `url('/TimelineBg.png')`,
                'backgroundSize': 'cover',
                'backgroundRepeat': 'no-repeat'
            }}
        >   
            {/* Treasure Chest, update the pt-[...] to adjust for the updated bg */}
            <div className="flex-1 flex flex-col gap-0 items-center pt-[45%]"> 
            {
                    isBigScreen ?

                        <div
                            key={`imagebruh`}
                            className={`w-0 
                                    md:h-[100px] md:border-[4.5px] lg:h-[140px] lg:border-[6.5px]
                                    border-[#FCFFCCCC]
                                    shadow-timeline relative rounded-[6px]`}
                        >
                            <div className={`z-10 absolute 
                                md:left-[-55px] md:top-[-102px] md:w-[105px] md:h-[110px] 
                                lg:left-[-91.5px] lg:top-[-170px] lg:w-[175px] lg:h-[183px]`}>
                                <Image className="" src="/TreasureChest.png" alt="" width={175} height={183} loading="eager" />
                            </div>
                            <BigBlurredStarIcon className="absolute top-[-100px] left-[-100px]" />
                        </div>

                        :
                        <div
                            key={`imagebruh`}
                            className={`w-0 
                                h-[60px] border-[2.5px]
                                border-[#FCFFCCCC]
                                shadow-timeline relative rounded-[2.5px]`}
                        >
                            <div className="z-10 absolute top-[-65px] left-[-33.5px] w-[67px] h-[70px]">
                                <Image className="" src="/TreasureChest.png" alt="" width={67} height={70} loading="eager" />
                            </div>
                            <SmallBlurredStarIcon className="absolute top-[-30px] left-[-37px]" />
                        </div>
                }
                </div>
            
            {/* Timeline Section */}
            <div className="flex-1 flex flex-col gap-0 items-center bg-[#FCFFCC4D] rounded-[6px]">
                {
                    isBigScreen ?
                        events.map((event, idx) =>
                            <div
                                key={event.name}
                                className={`w-0 
                                    ${idx == events.length - 1 ? 'h-0' : 'md:h-[100px] md:border-[4.5px] lg:h-[140px] lg:border-[6.5px]'} 
                                    ${event.status === 'Done' ? 'border-[#FCFFCCCC]' : 'border-[#FCFFCC4D]'} 
                                    shadow-timeline relative rounded-[6px]`}
                            >
                                <div
                                    className={`h-0
                                        ${idx % 2 == 1 && 'right-0'} 
                                        md:w-[49px] lg:w-[70px]
                                        md:top-[-4.5px] lg:top-[-6.5px] 
                                        md:border-[2.25px] lg:border-[3.2px] 
                                        md:rounded-[1.4px] lg:rounded-[2px] 
                                        border-[#FCFFCCCC] 
                                        shadow-timeline absolute`}
                                />
                                {/* <BigCircleIcon className="absolute top-[-35px] left-[-35px]" /> */}
                                <BigBlurredStarIcon className="absolute top-[-100px] left-[-100px]" />
                                <BigEventCard
                                    className={`absolute top-[-37px] 
                                        ${idx % 2 == 0 ? 'md:left-[48px] lg:left-[68px]' : 'md:right-[48px] lg:right-[68px]'}`}
                                    event={event}
                                />
                            </div>
                        )
                        :
                        events.map((event, idx) =>
                            <div
                                key={event.name}
                                className={`w-0 
                                    ${idx == events.length - 1 ? 'h-0' : 'h-[60px] border-[2.5px]'} 
                                    ${event.status === 'Done' ? 'border-[#FCFFCCCC]' : 'border-[#FCFFCC4D]'} 
                                    shadow-timeline relative rounded-[2.5px]`}
                            >
                                {/* Horizontal line */}
                                <div
                                    className={`w-[27px] h-0 
                                        ${idx % 2 == 1 && 'right-0'} top-[-2px] 
                                        border-[0.9px] border-[#FCFFCCCC] rounded-[2.5px] 
                                        shadow-timeline absolute`}
                                />
                                {/* <SmallCircleIcon className="absolute top-[-8.5px] left-[-10px]" /> */}
                                <SmallBlurredStarIcon className="absolute top-[-30px] left-[-37px]" />
                                <SmallEventCard
                                    className={`absolute top-[-25px] 
                                        ${idx % 2 == 0 ? 'left-[25px]' : 'right-[25px]'}`}
                                    event={event}
                                />
                            </div>
                        )
                }
            </div>

            {/* Rabbit */}
            <div className="flex-1 flex flex-col gap-0 items-center">
                <div className="relative">
                    {
                        isBigScreen ?
                            <div className={`z-20 absolute 
                                md:top-[-10vw] md:right-[-45vw] md:w-[168px] md:h-[202px] 
                                lg:top-[-5vw] lg:right-[-45vw] lg:w-[280px] lg:h-[337px]`}
                            >
                                <Image src="/KelinciTimeline.png" alt="" width={280} height={337} />
                            </div>
                            :
                            <div className="z-20 absolute top-[-10vw] right-[-45vw] w-[96px] h-[116px]">
                                <Image src="/KelinciTimeline.png" alt="" width={96} height={116} />
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TimelineModule
