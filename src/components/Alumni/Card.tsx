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
  return (
    <div className="group rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-200 p-3 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4">
      <div className="flex flex-col items-center gap-3">
        {/* Avatar */}
        <Avatar className="h-20 w-20 rounded-full ring-4 ring-white transition-all duration-300 group-hover:ring-cyan-400 sm:h-24 sm:w-24 md:h-28 md:w-28">
          <AvatarImage
            alt={name}
            className="h-full w-full object-cover"
            src={imgURL}
          />
          <AvatarFallback className="flex items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-100 to-purple-100 text-sm font-bold text-gray-700 sm:text-lg">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>

        {/* Name */}
        <Text className="capitalize leading-snug" variant="large">
          {name.toLowerCase()}
        </Text>

        {/* Badge */}
        {["PC", "CR", "GR", "PV"].includes(position?.toUpperCase() || "") && (
          <Badge
            className={cn(
              "text-[10px] font-semibold",
              position?.toUpperCase() === "PC" &&
                "bg-purple-200 text-purple-700",
              position?.toUpperCase() === "CR" && "bg-red-200 text-red-700",
              position?.toUpperCase() === "GR" && "bg-blue-200 text-blue-700",
              position?.toUpperCase() === "PV" && "bg-green-200 text-green-700"
            )}
          >
            {position?.toUpperCase()}
          </Badge>
        )}

        {/* LinkedIn */}
        {linkedinURL && (
          <Link
            className="text-blue-600 hover:text-blue-800"
            href={linkedinURL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LiaLinkedin className="h-8 w-8" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
