import { cn } from "@/lib/utils";
import { EventEntry } from "../interface";


export function BigEventCard({ className = "", event }: { className?: string, event: EventEntry }) {
    return (
        <div className={cn("z-10 md:max-lg:h-[125px] lg:h-[156px] md:max-lg:w-[275px] lg:max-xl:w-[325px] xl:w-[392px] px-[36px] py-[30px] flex flex-col md:max-lg:gap-[5px] lg:gap-[10px] justify-center items-center bg-[#6F4589] border shadow-event-entry-card rounded-[32px]", className)}>
            <h1 className="font-[900] font-cinzel md:max-lg:text-[28px] lg:text-[36px]">
                {event.date}
            </h1>
            <h1 className="font-raleway font-[600] md:max-lg:text-[24px] lg:text-[30px]">
                {event.name}
            </h1>
        </div>
    )
}


export function SmallEventCard({ className = "", event }: { className?: string, event: EventEntry }) {
    return (
        <div className={cn("z-10 h-[76px] w-[140px] px-[15px] py-[18px] flex flex-col gap-[7.5px] justify-center items-center bg-[#6F4589] border shadow-event-entry-card-small rounded-[20.5px]", className)}>
            <h1 className="font-[900] font-cinzel text-[13px]">
                {event.date}
            </h1>
            <h1 className="font-raleway font-[600] text-[12px]">
                {event.name}
            </h1>
        </div>
    )
}