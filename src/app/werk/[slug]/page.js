"use client";

import { useParams } from "next/navigation";
import SingleFetcher from '@/components/SingleFetcher';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

export default function Werk() {
    const { slug } = useParams(); 

    return (
        <div className="container mx-auto">
            <SingleFetcher slug={slug}>
                {(project) => (
                    <div className="">
                        <div className="container mx-auto my-[50px] xl:my-[100px] px-4 md:px-0">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-12 md:col-span-6 space-y-12 pr-12">
                                    <h1 className="text-2xl md:text-5xl leading-[1.2] font-semibold text-black">{project.title}</h1>
                                    <p className="mt-4 font-regular text-base md:text-md">Hoe mogen we jou in beeld brengen? Je kan Beeldkameraden gebruiken bij:</p>
                                </div>
                                <div className="col-span-12 md:col-span-6 md:col-start-7">

                                    {/* Hero afbeeldingen tonen */}
                                    {project.pageBuilder
                                    ?.filter((section) => section._type === "hero")
                                    .map((section) => (
                                        <div key={section._key} className="">
                                            {section.image?.asset?.url && (
                                                <div className="relative w-full aspect-video rounded-md overflow-hidden">
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

                        {/* Gallery afbeeldingen tonen */}
                        {project.pageBuilder
                        ?.filter((section) => section._type === "gallery")
                        .map((section) => (
                            <div key={section._key} className="mt-6">
                            {section.images?.length > 0 && (
                                <div className="flex w-full">
                                <div className="flex flex-row justify-stretch gap-4 w-full">
                                    {section.images.map((img) => (
                                    <div key={img.asset._id || img.asset.url} className="w-full">
                                        <div className="relative w-full aspect-video overflow-hidden rounded-md">
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
                )}
            </SingleFetcher>
        </div>
    );
}
