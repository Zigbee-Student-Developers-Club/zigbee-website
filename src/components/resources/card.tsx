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
    <ShadcnCard
      className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
      key={category}
    >
      <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
        <CardTitle className="flex items-center gap-3 text-xl font-semibold">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg">
            <Icon className="w-5 h-5" />
          </div>
          <span className="bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
            {category}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {resources.map(({ link, title, description }) => (
          <a
            className="group block rounded-lg p-4 transition-all hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 border border-transparent hover:border-purple-200"
            href={link || "#"}
            key={title}
            rel="noreferrer"
            target="_blank"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-slate-600">{description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-purple-600 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-1" />
            </div>
          </a>
        ))}
      </CardContent>
    </ShadcnCard>
  );
};

export default Card;
