import Link from "next/link";
import { LiaLinkedin } from "react-icons/lia";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

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
  const getInitials = (fullName: string) => {
    const parts = fullName.trim().toUpperCase().split(" ");
    if (parts.length >= 2) {
      return parts[0].charAt(0) + parts[1].charAt(0);
    }

    return parts[0].charAt(0);
  };

  return (
    <div className="group h-full rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 text-center capitalize shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 md:p-6">
      <div className="flex h-full flex-col items-center justify-between">
        {/* Avatar */}
        <div className="relative">
          <Avatar className="h-20 w-20 overflow-hidden rounded-full ring-4 ring-white transition-all duration-300 group-hover:ring-cyan-400 xs:h-24 xs:w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36">
            <AvatarImage
              alt={name}
              className="h-full w-full object-cover object-center"
              src={imgURL}
            />
            <AvatarFallback className="flex h-full w-full items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-100 to-purple-100 text-base font-bold text-gray-700 xs:text-lg sm:text-xl md:text-2xl">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name and Badge */}
        <div className="flex min-h-[60px] flex-1 flex-col items-center justify-center space-y-2 px-2 sm:min-h-[70px]">
          <Text
            className="w-full break-words text-xs font-semibold leading-tight text-gray-800 sm:text-sm md:text-base"
            variant="small"
          >
            {name.toLowerCase()}
          </Text>

          {["PC", "CR", "GR", "PV"].includes(position?.toUpperCase() || "") && (
            <Badge
              className={cn(
                "text-[10px] font-semibold shadow-sm sm:text-xs",
                position?.toUpperCase() === "PC" &&
                  "bg-purple-200 text-purple-700 hover:bg-purple-300",
                position?.toUpperCase() === "CR" &&
                  "bg-red-200 text-red-700 hover:bg-red-300",
                position?.toUpperCase() === "GR" &&
                  "bg-blue-200 text-blue-700 hover:bg-blue-300",
                position?.toUpperCase() === "PV" &&
                  "bg-green-200 text-green-700 hover:bg-green-300"
              )}
            >
              {position?.toUpperCase()}
            </Badge>
          )}
        </div>

        {/* LinkedIn Link */}
        {linkedinURL && (
          <Link
            className="my-4 text-blue-600 hover:text-blue-800"
            href={linkedinURL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LiaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
