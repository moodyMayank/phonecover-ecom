import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between border-b h-14 border-zinc-200">
          <Link href={"/"} className="z-40 flex font-semibold">
            csse <span className="text-green-600">cobra</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
