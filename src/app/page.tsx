import Phone from "@/components/common/Phone";
import Star from "@/components/icons/Star";
import Tick from "@/components/icons/Tick";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <MaxWidthWrapper className="pt-10 pb-24 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative flex flex-col items-center mx-auto text-center lg:text-left lg:items-start">
              <div className="absolute left-0 hidden w-28 -top-20 lg:block">
                <Image
                  src={"/snake-1.png"}
                  alt="snake-img"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="px-2 text-white bg-green-600">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg text-center lg:pr-10 max-w-prose lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>
              <ul className="flex flex-col items-center mt-8 space-y-2 font-medium text-left sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    {/* < */}
                    <Tick className="w-5 h-5 text-green-800 shrink-0" />
                    High quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    {/* < */}
                    <Tick className="w-5 h-5 text-green-800 shrink-0" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    {/* < */}
                    <Tick className="w-5 h-5 text-green-800 shrink-0" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="flex flex-col items-center gap-5 mt-12 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <Image
                    src={"/users/user-1.png"}
                    alt="user-image"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-2.png"}
                    alt="user-image"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-3.png"}
                    alt="user-image"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-4.jpg"}
                    alt="user-image"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-5.jpg"}
                    alt="user-image"
                    width={40}
                    height={40}
                    className="inline-block object-cover rounded-full ring-2 ring-slate-100"
                  />
                </div>
                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full px-8 mt-32 col-span-full lg:col-span-1 sm:px-16 md:px-0 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src={"/your-image.png"}
                alt="your-image"
                className="absolute hidden w-40 select-none lg:w-52 left-56 -top-20 sm:block lg:hidden xl:block"
                width={100}
                height={100}
              />
              <Image
                src={"/line.png"}
                alt="line"
                className="absolute w-20 select-none -left-6 -bottom-6"
                width={20}
                height={20}
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
