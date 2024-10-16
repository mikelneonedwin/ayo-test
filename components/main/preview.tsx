import { Images } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Preview = () => {
    return (
        <div className="bg-[#FDFDFD] !bg-main-bg mt-52 flex items-end">
            <div className="move-up">
                <figure className="px-10 w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        alt="Hero image"
                        src="/dashboard.png"
                        className="shadow-lg rounded-3xl"
                    />
                </figure>

                <div className="pt-16 text-center">
                    <h2 className="font-semibold text-main-text-shade text-xl">
                        Be one of the first to join our thriving community of creators.
                    </h2>
                    <div className="overflow-hidden max-w-[95vw] mt-16 whitespace-nowrap">
                        <Marquee autoFill={true}>
                            {Images.map((profile, index) => (
                                <Image
                                    width={100}
                                    height={100}
                                    key={index}
                                    alt="profile_image"
                                    src={profile.medium}
                                    className="rounded-full mx-6 inline-block border border-solid border-black/30"
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview;