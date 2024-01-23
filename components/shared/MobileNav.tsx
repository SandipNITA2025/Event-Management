import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <AlignJustify className="cursor-pointer" />
        </SheetTrigger>

        <SheetContent className="flex flex-col  gap-6 bg-white md:hidden">
          <Image
            src={"/assets/images/Logo.svg"}
            alt="Logo"
            width={128}
            height={38}
          />
          <Separator/>
          <NavItems/>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
