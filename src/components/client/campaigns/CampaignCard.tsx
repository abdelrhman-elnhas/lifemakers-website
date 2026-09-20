"use client";

import React from "react";
import { Campaign } from "@/types/campaign";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FiCalendar, FiClock, FiTarget, FiInfo } from "react-icons/fi";

interface CampaignCardProps {
  campaign: Campaign;
  isActive: boolean;
  isPast: boolean;
}

export function CampaignCard({ campaign, isActive, isPast }: CampaignCardProps) {
  return (
    <Card
      className={`w-full transition-all duration-300 relative overflow-hidden ${isActive ? "ring-2 shadow-lg" : "hover:shadow-md"
        }`}
      style={isActive ? { "--tw-ring-color": campaign.color } as React.CSSProperties : {}}
      id={campaign.id}
    >
      <div
        className="absolute top-0 inset-inline-start-0 w-2 h-full"
        style={{ backgroundColor: campaign.color }}
      />
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <CardTitle className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold text-gray-900">
                {campaign.name}
              </CardTitle>
              {isActive && (
                <Badge
                  style={{ backgroundColor: campaign.color, color: "#fff" }}
                  className="font-medium animate-pulse"
                >
                  الحملة الحالية
                </Badge>
              )}
              {isPast && (
                <Badge variant="secondary" className="font-medium">
                  مكتملة
                </Badge>
              )}
            </div>
            <CardDescription className="flex flex-col gap-2 text-base mt-2 text-gray-600">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span>{campaign.dates}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>{campaign.duration}</span>
              </div>
            </CardDescription>
          </div>
          <Button
            size="lg"
            className="w-full md:w-auto min-h-11"
            style={{
              backgroundColor: isActive ? campaign.color : undefined,
              color: isActive ? "#fff" : undefined,
            }}
            variant={isActive ? "default" : "outline"}
            onClick={() => window.location.href = `https://wa.me/+201550550961?text=${encodeURIComponent(`أريد التبرع لحملة: ${campaign.name}`)}`}
          >
            تبرع الآن
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
            <FiTarget className="w-5 h-5 text-gray-500" />
            الهدف
          </h4>
          <p className="text-gray-700 leading-relaxed">{campaign.goal}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">محاور الحملة</h4>
          <div className="flex flex-wrap gap-2">
            {campaign.pillars.map((pillar, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="text-sm py-1 px-3 border-gray-200 bg-white"
              >
                {pillar}
              </Badge>
            ))}
          </div>
        </div>

        {campaign.note && (
          <div className="bg-amber-50 border-r-4 border-amber-400 p-4 rounded-l-lg flex items-start gap-3">
            <FiInfo className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              {campaign.note}
            </p>
          </div>
        )}

        <Accordion type="single" collapsible className="w-full bg-white">
          <AccordionItem value="rationale" className="border-b-0 border-t border-gray-100 pt-2">
            <AccordionTrigger className="text-gray-800 hover:text-gray-600 font-semibold text-lg hover:no-underline text-start leading-snug whitespace-normal gap-3">
              لماذا هذا التوقيت وهذا الهدف؟
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                {campaign.why.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
