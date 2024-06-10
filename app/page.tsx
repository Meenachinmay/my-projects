import Image from "next/image";
import "./globals.css";
import EventUICard from "@/components/EventUICard";

export default function Home() {
  return (
      <main className="flex w-full min-h-screen flex-col items-center p-24 bg-gray-50">
          <div className={"flex flex-col w-full h-[250px] items-center justify-between p-12"}>
                <p className={"sm:text-md md:text-lg lg:text-2xl font-bold text-center sm:mb-4"}>A curated list of all my side Projects.<br/>I listed all of my side projects here with details like tech-stack, progress etc.</p>
                <div>
                    <input className={"flex sm:w-[400px] md:w-[500px] lg:w-[600px] h-[70px] p-8 rounded-lg border border-gray-200 focus:outline-none font-semibold"}
                           type={'text'} placeholder={'You can search any of my project...'} />
                </div>
          </div>

          <div className={"flex flex-1 w-full h-full p-12"}>
              <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"}>
                  <EventUICard />
                  <EventUICard />
                  <EventUICard />
                  <EventUICard />
                  <EventUICard />
                  <EventUICard />
                  <EventUICard />
                  <EventUICard />
                  <EventUICard />
                  <EventUICard />
              </div>
          </div>
      </main>
  );
}
