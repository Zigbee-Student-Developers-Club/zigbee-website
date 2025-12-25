import classNames from "classnames";
import Link from "next/link";
import { LiaLinkedin } from "react-icons/lia";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { getInitials } from "@/utils";

interface AlumDataProp {
  name: string;
  imgURL?: string;
  linkedinURL?: string;
  position?: string;
}

const Card = ({
  name,
  imgURL = "",
  linkedinURL = "",
  position = "",
}: AlumDataProp) => {
  const showPosition = ["PC", "CR", "GR", "PV"].includes(
    position?.toUpperCase() || ""
  );

  return (
    <div className="group relative rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-cyan-100 p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-cyan-200/60">
      <div
        className={classNames("absolute right-3 top-3 z-10", {
          hidden: !showPosition,
        })}
      >
        <Badge
          className={cn(
            "px-3 text-md py-1 font-bold shadow-md",
            position?.toUpperCase() === "PC" && "bg-purple-600 text-white",
            position?.toUpperCase() === "CR" && "bg-red-600 text-white",
            position?.toUpperCase() === "GR" && "bg-pink-600 text-white",
            position?.toUpperCase() === "PV" && "bg-green-600 text-white"
          )}
        >
          {position?.toUpperCase()}
        </Badge>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Avatar className="h-20 w-20 rounded-full ring-4 ring-white transition-all duration-300 group-hover:ring-cyan-400 sm:h-24 sm:w-24 md:h-28 md:w-28">
          <AvatarImage
            alt={name}
            className="h-full w-full object-cover"
            src={imgURL}
          />
          <AvatarFallback className="flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-purple-200 text-lg font-bold text-gray-800">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <Text className="capitalize leading-snug text-gray-800" variant="large">
          {name.toLowerCase()}
        </Text>
        <Link
          href={linkedinURL}
          rel="noopener noreferrer"
          target="_blank"
          className={classNames(
            "mt-1 flex items-center gap-1 text-blue-600 transition-colors hover:text-blue-800",
            { hidden: !linkedinURL }
          )}
        >
          <LiaLinkedin className="h-9 w-9" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
