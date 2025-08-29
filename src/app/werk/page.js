"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/navigation";

import Breadcrumb from '@/components/Breadcrumb';

import ProjectFetcher from '@/components/ProjectsFetcher';
import { urlFor } from '@/lib/sanity';

export default function Werk() {
  const router = useRouter();

  return (
      <div className="container-fluid">
        <section className="container mx-auto my-[50px] xl:my-[100px] px-4 xl:px-0">
          <Breadcrumb />
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-4xl md:text-6xl leading-[1.2] font-semibold text-black">Ons werk</h2>
            </div>
            <div className="col-span-12 md:col-start-9 md:col-span-4">
              {/* <p className="mt-4 font-medium text-base md:text-lg">Hoe mogen we jou in beeld brengen? Je kan Beeldkameraden gebruiken bij:</p> */}
            </div>
          </div>
        </section>
      
        <div className="container mx-auto my-[50px] xl:my-[100px] px-4 xl:px-0">
          <div className="">
            <ProjectFetcher>
                {(projects) => (
                  <div className="grid grid-cols-12 gap-4">
                    {projects.map((project, index) => (
                      <Link className="col-span-12 md:col-span-6 cursor-pointer" key={index} href={`/werk/${project.slug}`} passHref>
                        <div className="flex flex-col gap-4 xl:gap-4">
                          
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
                                                className="object-cover object-center transition duration-300 ease-in-out hover:scale-102"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                         
                          <div className="grid content-between py-2 xl:py-6">
                            <div className="space-y-4">
                              <h1 className="text-2xl xl:text-4xl font-medium">{project.title}</h1>
                              <div className="flex flex-row">
                                <p className="text-base xl:text-lg font-medium">{project.client}</p>
                                <span className="px-2">-</span>
                                <p className="text-base xl:text-lg font-medium">{project.category?.name}</p>
                              </div>
                            </div>
                            {/* <div className="space-y-4">
                              <div className="font-medium uppercase text-sm md:text-md mt-16 xl:mt-0 group">
                                <span className="px-[30px] py-[10px] text-black border-2 border-[#262626] transition duration-300 ease-in-out bg-white"></span>
                              </div>                             
                            </div> */}
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
