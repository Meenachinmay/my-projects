"use client";

function EventUICard () {
    return (
        <>
            <div className={"flex items-start w-full h-auto bg-white " +
                "rounded-lg border border-gray-200 p-6 space-x-4 hover:bg-slate-50 hover:shadow-lg cursor-pointer"}>
                <div>
                    <img className={"w-[50px] h-[50px] object-cover"} style={{
                        imageRendering: "pixelated",
                    }} src={"https://cdn2.iconfinder.com/data/icons/web-design-development-ui-vol-4/96/160-512.png"}
                         alt={"project icon"}/>
                </div>
                <div className={"flex flex-col w-full h-full"}>
                    <div className={"flex flex-col space-y-0 m-0"}>
                        <p className={"text-lg font-bold m-0"}>TCP Server</p>
                        <span className={"text-sm font-semibold text-gray-500 m-0"}>golang, kafka</span>
                    </div>
                    <span className={"text-sm font-semibold text-gray-500 line-clamp-4 mt-2"}>
                              A TCP server and client pair to exchange data specially big files over tcp network.
                              I used channels and goroutine to transfer data efficiently.
                          </span>
                </div>
            </div>
        </>
    )
}

export default EventUICard;