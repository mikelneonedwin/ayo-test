/* eslint-disable @next/next/no-img-element */
"use client"

// import Marquee from 'react-fast-marquee';
import { sellItems as items } from '@/constants';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Icon } from '../global';
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    useCarousel
} from '../ui/carousel';
import CTA from './cta';
import { MaterialIcon } from 'material-icons';

const ControlBtns = () => {

    const { scrollNext, scrollPrev, api } = useCarousel();

    const data: Array<{
        icon: MaterialIcon,
        onClick(): void;
    }> = [
            {
                icon: "arrow_back",
                onClick: () => api
                    && !api.canScrollPrev()
                    ? api.scrollTo(items.length - 1)
                    : scrollPrev()
            },
            {
                icon: "arrow_forward",
                onClick: () => api
                    && !api.canScrollNext()
                    ? api.scrollTo(0)
                    : scrollNext()
            }
        ]

    return (
        <div>
            <div className='space-x-2'>
                {data.map((item) => (
                    <button
                        key={item.icon}
                        onClick={item.onClick}
                        className="rounded-full size-8 inline-flex items-center justify-center focus:outline-none text-white bg-action-default hover:bg-action-hover shadow-lg"
                    >
                        <Icon
                            icon={item.icon}
                            className="!text-base !font-medium"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}


const WhatCanYouSell = () => {
    const [current, setCurrent] = useState(0);
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", (state) => {
            setCurrent(state.selectedScrollSnap() + 1)
        })
    }, [api])


    return (
        <section className="bg-main-bg py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-8">What can you sell with Thrivr?</h2>
                <Carousel setApi={setApi} opts={{ align: "start" }}>
                    <CarouselContent>
                        {items.map((item, index) => (
                            <CarouselItem key={index} className="grid md:grid-cols-2 w-screen h-auto gap-4">
                                <div
                                    style={{ backgroundImage: `url('${item.img}')` }}
                                    className="block bg-cover bg-fixed h-64 md:h-80 bg-center bg-no-repeat bg-action-secondary rounded-md shadow-2xl"
                                />
                                <div className="inline-flex flex-col items-start justify-between h-full">
                                    <div className="text-left space-y-4">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-action-default">{item.name}</h3>
                                        <p className="text-lg text-wrap">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <CTA />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex items-center justify-between mt-4 lg:mt-6">
                        <div className="space-x-1">
                            {items.map((_, index) => (
                                <i
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={clsx(
                                        "rounded-full size-6 shadow-lg inline-block border border-solid border-neutral-borders",
                                        current == (index + 1)
                                            ? "bg-action-default"
                                            : "bg-neutral-alt-bg"
                                    )}
                                />
                            ))
                            }
                        </div>
                        <ControlBtns />
                    </div>
                </Carousel>

                {/* <Marquee autoFill gradient={false} speed={40}>
                    <div className="flex items-center space-x-20 lg:space-x-12">
                    </div>
                </Marquee> */}
            </div>
        </section >
    );
};

export default WhatCanYouSell;  