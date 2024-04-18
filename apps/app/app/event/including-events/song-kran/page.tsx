"use client";
import BackIcon from "@/app/assets/icons/BackIcon";
import { cn } from "@/utils";
import { Badge, Button } from "@breeze/ui";
import Image from "next/image";
import Songkran from "@/app/assets/images/songKran.svg";
import CalendarIcon from "@/app/assets/icons/CalendarIcon";
import ClockIcon from "@/app/assets/icons/ClockIcon";
import LocationIcon from "@/app/assets/icons/LocationIcon";
import InformationIcon from "@/app/assets/icons/InformationIcon";
import React, { useState } from "react";
import Link from "next/link";

export default function SongkranEvent() {
  const handleGoBack = () => {
    window.history.back();
  };
  const [activePill, setActivePill] = useState("about");

  const handlePillClick = (pill: React.SetStateAction<string>) => {
    setActivePill(pill);
  };

  const isEventEnded = true;

  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const handleSeeAll = () => {
    setShowAdditionalText(true);
  };

  const handleSeeLess = () => {
    setShowAdditionalText(false);
  };

  const renderContent = () => {
    switch (activePill) {
      case "about":
        return (
          <div>
            <section className="text-darkgray max-w-[375px] flex flex-col items-center mt-2 mb-28 ">
              <div className="relative">
                <Image
                  src={Songkran}
                  alt="Mural Art Event photo"
                  className="w-[375px] "
                />
                {isEventEnded && (
                  <div className="absolute bottom-48 bg-alertred left-0 w-full h-10 p-2 gap-2 bg-black  text-center">
                    <p className="text-white leading-6 text-base tracking-tight font-normal">
                      This event has ended.
                    </p>
                  </div>
                )}
              </div>

              <div className="container mt-5 mb-28">
                <ul className="list-none ">
                  <li className="flex items-start mb-5 ">
                    <span className="w-[18px] ml-1">
                      <CalendarIcon />
                    </span>
                    <span className="mt-1 ml-6" />
                    Apr, 13 (Monday), 2023
                  </li>
                  <li className="flex items-start mb-5">
                    <span className="w-[18px]">
                      <ClockIcon />
                    </span>
                    <span className="mt-1 ml-6" />6 am - 6 pm
                  </li>
                  <li className="flex items-start mb-5">
                    <span className="w-[18px]">
                      <LocationIcon />
                    </span>
                    <span className="mt-1 ml-6" />
                    Thailand
                  </li>
                  <li className="flex items-start mb-5">
                    <span className="w-[18px]">
                      <InformationIcon />
                    </span>
                    <span className="mt-1 ml-6" />
                    <p>
                      Thai New Year or Songkran is the Thai New Year's national
                      holiday. Songkran is on 13 April every year, but the
                      holiday period &nbsp;
                      {!showAdditionalText && (
                        <span
                          className="cursor-pointer font-semibold text-black-1"
                          onClick={handleSeeAll}
                        >
                          ... See all
                        </span>
                      )}
                      {showAdditionalText && (
                        <>
                          <span>
                            teems with an abundance of activities, traditions,
                            and celebrations that extend for several days before
                            and after the official date.
                          </span>
                          &nbsp;
                          <span
                            className="cursor-pointer font-semibold text-black-1"
                            onClick={handleSeeLess}
                          >
                            See less
                          </span>
                        </>
                      )}
                    </p>
                  </li>
                </ul>
              </div>
              <hr className="border-lightgray mb-3 w-[375px]" />
              <Link href={"#"}>
                <Badge className="w-80 h-11 p-3 gap-4 justify-center">
                  Go to Dashboard
                </Badge>
              </Link>
            </section>
          </div>
        );
      case "community":
        return (
          <div>
            <section className="text-darkgray flex flex-col items-center mt-16">
              <p>Community Comming Soon! </p>
              <p>Stay Tuned!</p>
              <Button className="w-40 mt-6">Join Community</Button>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" flex flex-col items-center relative">
      <div className="flex items-center flex-col">
        <div className="flex flex-row justify-between">
          <span className="mr-[70px]">
            <Link href="#" onClick={handleGoBack}>
              <BackIcon />
            </Link>
          </span>
          <h1 className=" self-center mr-[100px] font-bold text-xl mb-6">
            Mural Festival
          </h1>
        </div>

        <ul className="flex flex-row justify-between w-full h-9 px-0 py-0 ">
          <li className="">
            <button
              className={cn("w-40", "h-9", "gap-2", {
                "text-black-1": activePill === "about",
                "text-darkgray": activePill !== "about",
              })}
              onClick={() => handlePillClick("about")}
            >
              About
            </button>
            <hr
              className={cn("w-auto", "border-2", {
                "border-black-1": activePill === "about",
                "border-white": activePill !== "about",
              })}
            />
          </li>
          <li className="">
            <button
              className={cn("w-40", "h-9", "gap-2", {
                "text-black-1": activePill === "community",
                "text-darkgray": activePill !== "community",
              })}
              onClick={() => handlePillClick("community")}
            >
              Community
            </button>
            <hr
              className={cn("w-auto", "self-center", "border-2", {
                "border-black-1": activePill === "community",
                "border-white": activePill !== "community",
              })}
            />
          </li>
        </ul>
        <hr className="border-lightgray w-auto mt-[3px]" />
        {/* Render content based on active pill */}
        {renderContent()}
      </div>
    </div>
  );
}
