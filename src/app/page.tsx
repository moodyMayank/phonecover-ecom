import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <MaxWidthWrapper className="">
          <div>Welcome to the New Project</div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
