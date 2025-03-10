'use client';
import CountdownHero from '@/components/elements/CountdownHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const WebinarPPKBHero = () => {
  const router = useRouter();
  return (
    <Card className="flex flex-col overflow-hidden justify-center items-center bg-[#F8EBF3] bg-opacity-[20%] shadow-[5px_5px_20px_rgba(254,245,255,1),-5px_-5px_20px_rgba(254,245,255,1)] sm:shadow-[10px_10px_30px_rgba(254,245,255,1),-10px_-10px_30px_rgba(254,245,255,1)] md:shadow-[10px_10px_40px_rgba(254,245,255,1),-10px_-10px_40px_rgba(254,245,255,1)] w-full h-fit rounded-[51.64px] sm:rounded-[59.25px] lg:rounded-[69.25px] xl:rounded-[89.25px]">
      <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">
        Webinar ppkb
      </CardTitle>
      <CardContent className="w-[100%] sm:w-[80%] md:w-[80%] lg:w-[75%] xl:w-[63%] h-fit flex flex-col justify-center items-center gap-[35px]">
        <div className="flex flex-col gap-[32px]">
          <CountdownHero
            displayDate
            targetDate={new Date('2025-03-01T13:00:00')}
          />
          <div className="text-center text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg -mt-2 md:mt-0 xl:mt-5">
            Webinar Essay PPKB adalah acara yang dirancang untuk memberikan
            panduan kepada peserta mengenai cara menulis essay yang baik dan
            benar sebagai bagian dari seleksi PPKB (Prestasi dan Penelusuran
            Kemampuan Belajar). Dalam seminar ini, peserta akan mendapatkan
            wawasan mengenai struktur esai, strategi penulisan, serta tips untuk
            membuat esai yang menarik dan sesuai kriteria. Acara ini bertujuan
            untuk membantu peserta memperbaiki essay mereka dengan saran dan
            revisi yang spesifik sehingga meningkatkan peluang keberhasilan
            dalam seleksi.
          </div>
        </div>
        <Button
          variant={'primary'}
          className="max-md:-mt-5 max-md:w-full h-[39px] md:h-[43px] lg:h-[48px] text-xs md:text-t8 rounded-[16px] md:rounded-[14px] lg:rounded-5"
          onClick={() => {
            router.push('http://ristek.link/RSVPPPKBBETIS25');
          }}
          disabled
        >
          Register Here
        </Button>
        <div className="absolute max-md:hidden -z-20 sm:h-full md:h-full lg:h-5/6 xl:h-full left-0 sm:-bottom-[120px] md:-bottom-[110px] lg:-bottom-[68px] xl:-bottom-[95px] sm:aspect-[1/2] md:aspect-[5/8] lg:aspect-[4/5] xl:aspect-[7/9]">
          <Image
            alt="BG"
            src={'/s3/ppkbkiri.png'}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <div className="absolute max-md:hidden -z-20 sm:h-2/3 md:h-full lg:h-5/6 xl:h-full right-0 sm:-bottom-[37px] md:-bottom-[95px] lg:-bottom-9 xl:-bottom-10 sm:aspect-[1/2] md:aspect-[3/7] lg:aspect-[3/5] xl:aspect-[3/5]">
          <Image
            alt="BG"
            src={'/s3/ppkbkanan.png'}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="absolute -z-30 max-sm:-translate-x-[110px] h-[560px] sm:h-[600px] md:h-[500px] lg:h-[600px] xl:h-[650px] bottom-0 aspect-[5/3]">
          <Image
            alt="BG"
            src={'/s3/castle.png'}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="relative md:hidden -z-20 h-[270px] sm:h-[330px] -mb-[20px] -mt-[140px] sm:-mt-[150px] aspect-[1/1]">
          <Image
            alt="BG"
            src={'/s3/ppkbtengah.png'}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="absolute -z-20 h-[80px] sm:h-[100px] md:h-[130px] lg:h-[150px] xl:h-[200px] -left-0 md:-left-[4px] -top-[4px] md:-top-[7px] lg:-top-[8px] aspect-[3/1]">
          <Image
            alt="BG"
            src={'/s3/lampukiri.png'}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="absolute -z-20 h-[80px] sm:h-[100px] md:h-[130px] lg:h-[150px] xl:h-[200px] -right-0 -top-[10px] md:-top-[12px] lg:-top-[19px] aspect-[3/1]">
          <Image
            alt="BG"
            src={'/s3/lampukanan.png'}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
      </CardContent>
    </Card>
  );
};
