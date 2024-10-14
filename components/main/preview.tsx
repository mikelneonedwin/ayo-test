import { Images } from "@/constants";
import Image from "next/image";

const Preview = () => {
    return (
        <div className="bg-[#FDFDFD] mt-52 flex items-end">
            <div className="relative -top-52">
                <figure className="px-10 w-full">
                    <img
                        src="https://res.cloudinary.com/catlog/image/upload/c_scale,w_2025/v1670559710/front-pages/mockups/store-front-whatsapp.webp"
                        alt="Hero image"
                    />
                </figure>

                <div className="py-16 text-center">
                    <h2 className="font-semibold text-main-text-shade text-lg">
                        Be one of the first to join our thriving community of creators.
                    </h2>
                    <div className="overflow-hidden max-w-[95vw] my-10 whitespace-nowrap">
                        <div className="inline-block animate-marquee">
                            {Images.map((profile, index) => (
                                <Image
                                    width={60}
                                    height={60}
                                    key={index}
                                    alt="profile_image"
                                    src={profile.medium}
                                    className="rounded-full mx-8 inline-block"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview;