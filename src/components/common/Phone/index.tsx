import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone-image"
        width={200}
        height={200}
        className="z-50 pointer-events-none select-none"
      />
      <div className="absolute inset-0 -z-10">
        {/* <Image src={imgSrc} alt="overlay-image" className="object-cover" /> */}
      </div>
    </div>
  );
};

export default Phone;
