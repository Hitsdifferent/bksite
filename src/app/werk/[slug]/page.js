"use client";

import { useParams } from "next/navigation";
import SingleFetcher from '@/components/SingleFetcher';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

import Breadcrumb from '@/components/Breadcrumb';
import Cta from "@/components/Cta";

export default function Werk() {
    const { slug } = useParams(); 

    return (
        <>
        <div className="container mx-auto">
            <SingleFetcher slug={slug}>
                {(project) => (
                    <div className="">
                        <div className="container mx-auto my-[50px] xl:my-[100px] px-4 xl:px-0">
                            <Breadcrumb />
                            <div className="grid grid-cols-12 space-y-12 xl:space-y-0 gap-4">
                                <div className="col-span-12 xl:col-span-6 xl:pr-12">
                                    <h1 className="text-2xl md:text-5xl leading-[1.2] font-semibold text-black pb-8">{project.title}</h1>
                                    <div className="flex items-center py-4">
                                        <div className="flex flex-col space-y-4 w-1/3">
                                            <p className="text-sm md:text-sm font-medium text-zinc-600">Klant</p>
                                            <p className="text-sm md:text-sm font-medium">{project.client}</p>
                                        </div>
                                        <div className="flex flex-col space-y-4 w-1/3">
                                            <p className="text-sm md:text-sm font-medium text-zinc-600">Service</p>
                                            <p className="text-sm md:text-sm font-medium">{project.category?.name}</p>
                                        </div>             
                                    </div>
                                    <div className="flex w-7/8 xl:w-4/5 pt-16">
                                        <p className="font-regular text-base md:text-md leading-[1.5]">{project.Description}</p>
                                    </div>
                                </div>
                                <div className="col-span-12  xl:col-span-6 xl:col-start-7">

                                    {/* Hero afbeeldingen tonen */}
                                    {project.pageBuilder
                                    ?.filter((section) => section._type === "hero")
                                    .map((section) => (
                                        <div key={section._key} className="">
                                            {section.image?.asset?.url && (
                                                <div className="relative w-full aspect-video overflow-hidden">
                                                    <Image
                                                        src={section.image.asset.url}
                                                        alt={section.heading || "Hero image"}
                                                        fill
                                                        className="object-cover object-center"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                        <div className="container mx-auto my-[50px] xl:my-[100px] px-4 xl:px-0">              
                            {/* Gallery afbeeldingen tonen */}
                            {project.pageBuilder
                            ?.filter((section) => section._type === "gallery")
                            .map((section) => (
                                <div key={section._key} className="mt-6">
                                    {section.images?.length > 0 && (
                                        <div className="flex w-full">
                                            <div className="flex flex-col md:flex-row justify-stretch gap-4 w-full">
                                                {section.images.map((img) => (
                                                    <div key={img.asset._id || img.asset.url} className="w-full">
                                                        <div className="relative w-full aspect-video overflow-hidden">
                                                            <Image
                                                                src={img.asset.url}
                                                                alt="Gallery image"
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </SingleFetcher>
        </div>
        <Cta />
    </>
    );
    
}
