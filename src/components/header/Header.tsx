"use client";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center w-full bg-[#f3f3f3] h-[48px] min-[751px]:h-[56px] min-[1001px]:h-[82px] px-[20px] min-[1001px]:px-[36px] fixed top-0 z-50"
      style={{ borderBottom: "1px solid #232323" }}
    >
      <div
        className="text-black w-[40%] min-[751px]:w-[20%] h-auto"
        data-sidheshwar-logo
      >
        <Link href="/">
          <Image src="/assets/sidheshwarlogo.png" alt="Sidheshwar" width={100} height={100} className="w-[100px] min-[751px]:w-[120px] min-[1001px]:w-[150px]" />
        </Link>
      </div>
      <div className="text-[#e1ded3] w-[40%] min-[751px]:w-[20%] h-auto text-right text-[1.5em] min-[751px]:text-[1.8em] min-[1001px]:text-[2em]">
        Menu
      </div>
    </header>
  );
};

export default Header;
