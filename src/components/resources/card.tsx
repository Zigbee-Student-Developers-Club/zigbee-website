import { ArrowRight } from "lucide-react";
import React from "react";

import {
  Card as ShadcnCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ResourceCategory } from "./constants";

const Card = ({ category, resources, icon: Icon }: ResourceCategory) => {
  return (
    <ShadcnCard className="bg-white" key={category}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl font-semibold">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <Icon className="w-5 h-5" />
          </div>
          {category}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {resources.map(({ link, title, description }) => (
          <a
            className="group block rounded-lg p-4 transition-all hover:bg-gray-50"
            href={link || "#"}
            key={title}
            rel="noreferrer"
            target="_blank"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-1" />
            </div>
          </a>
        ))}
      </CardContent>
    </ShadcnCard>
  );
};

export default Card;
