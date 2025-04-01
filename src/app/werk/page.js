"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/navigation";


import ProjectFetcher from '@/components/ProjectsFetcher';
import { urlFor } from '@/lib/sanity';

export default function Werk() {
  const router = useRouter();

  return (
      <div className="container-fluid">
        <section className="container mx-auto my-[50px] xl:my-[100px] px-4 md:px-0">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-4xl md:text-6xl leading-[1.2] font-semibold text-black">Ons werk</h2>
            </div>
            <div className="col-span-12 md:col-start-9 md:col-span-4">
              {/* <p className="mt-4 font-medium text-base md:text-lg">Hoe mogen we jou in beeld brengen? Je kan Beeldkameraden gebruiken bij:</p> */}
            </div>
          </div>
        </section>
      
        <div className="container mx-auto my-[50px] xl:my-[100px] px-4 md:px-0">
          <div className="">
            <ProjectFetcher>
                {(projects) => (
                  <div className="grid grid-cols-12 gap-4">
                    {projects.map((project, index) => (
                      <Link className="col-span-12 border-t-2 border-[#D5D5D5] pt-5 cursor-pointer" key={index} href={`/werk/${project.slug}`} passHref>
                        <div className="flex flex-row gap-8">
                          <div className="w-1/2">
                            {project.pageBuilder?.map((section) => (
                              <div className="flex" key={section._key}>
                                {section._type === "hero" && section.image?.asset?.url && (                                
                                    <img
                                      src={urlFor(section.image.asset.url).url()}
                                      alt={section.heading}
                                      className="w-full h-auto aspect-video object-cover object-center rounded-md"
                                    />                                                              
                                )}
                              </div>                            
                            ))}
                          </div>
                          <div className="w-1/2 grid content-between py-6">
                            <div className="space-y-4">
                              <h1 className="text-4xl font-medium">{project.title}</h1>
                              <p className="text-xl font-medium">{project.client}</p>
                            </div>
                            <div className="space-y-4">
                              <div className="font-medium uppercase text-sm md:text-md mt-16 xl:mt-0 group">
                                <span className="px-[30px] py-[10px] text-black border-2 border-[#262626] transition duration-300 ease-in-out bg-white">{project.category?.name}</span>
                              </div>                             
                            </div>
                          </div>                               
                        </div>               
                    </Link>
                  ))}
                </div>
              )}
            </ProjectFetcher>
          </div>
        </div>
    </div>
  );
}
