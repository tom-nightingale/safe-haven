"use client";

import { Maybe, StaffSection } from "@/gql/sanity/codegen";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import GridStaffSection from "@/components/GridStaff/GridStaffSection/GridStaffSection";
import CloudsVector from "@/components/CloudsVector/CloudsVector";

type Props = {
  staffSections: Maybe<Maybe<StaffSection>[]>;
};

const GridGallery = ({ staffSections }: Props) => {
  return (
    <>
      <div className="relative overflow-hidden pb-20 md:pb-30 lg:pb-40">
        <CloudsVector
          fill="white"
          classes="absolute w-[200%] lg:w-[150%] 3xl:w-full top-1"
        />
        <CloudsVector
          classes="absolute top-4 w-[200%] lg:w-[150%] 3xl:w-full text-taupe"
          fillOpacity={1}
        />
        <div className="from-taupe to-cream 3xl:top-30 4xl:top-40 5xl:top-44 xs:top-20 relative top-16 z-10 w-full bg-linear-to-b sm:top-24 md:top-30 xl:top-40">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-4 py-12 pb-16">
              {staffSections?.map((section, index) => {
                return (
                  <Button
                    key={index}
                    label={section?.title}
                    classes="button-primary button-blue !px-4 !py-4 !pb-[1.1rem]"
                    href={`#${section?.title?.replaceAll(" ", "").toLowerCase() as string}`}
                  />
                );
              })}
            </div>
          </Container>

          {staffSections
            ?.slice(0, 1)
            .map((section, index) => (
              <GridStaffSection
                key={section?._key}
                section={section}
                index={index}
              />
            ))}
        </div>
      </div>

      {staffSections
        ?.slice(1)
        .map((section, index) => (
          <GridStaffSection
            key={section?._key}
            section={section}
            index={index + 1}
          />
        ))}
    </>
  );
};

export default GridGallery;
