"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Container from "@/components/Container/Container";
import NurseryDetails from "@/components/Footer/NurseryDetails";
import CloudsVector from "@/components/CloudsVector/CloudsVector";
import { type Nursery } from "@/gql/sanity/codegen";
import { useGlobalContext } from "@/context/GlobalContext";
import type { Maybe } from "@/gql/sanity/codegen";
import type { TypedObject } from "@portabletext/types";
import KiteSvg from "@/icons/kiteSvg";
import StarsSvg from "@/icons/starsSvg";
import { usePathname } from "next/navigation";
import Form from "@/components/Form/Form";

type Props = {
  title?: Maybe<string>;
  text?: TypedObject | TypedObject[];
};

const Locations = ({ title }: Props) => {
  const { nurseries } = useGlobalContext();

  const pathname = usePathname();
  const slug = pathname.split("/").at(-1) as string;

  const selectedNursery = nurseries?.find(
    nursery => nursery?.slug?.current === slug,
  );

  return (
    <div className="relative overflow-hidden pb-20 md:pb-40">
      <CloudsVector
        fill="white"
        classes="absolute w-[200%] lg:w-[150%] 3xl:w-full top-1"
      />
      <CloudsVector
        classes="absolute top-4 w-[200%] lg:w-[150%] 3xl:w-full text-taupe"
        fillOpacity={1}
      />
      <div className="from-taupe to-cream 3xl:top-30 4xl:top-40 5xl:top-44 xs:top-20 relative top-16 z-10 w-full bg-linear-to-b sm:top-24 md:top-30 xl:top-40">
        <Container classes="max-w-(--breakpoint-xl)">
          <div className="relative z-1 py-10">
            <div className="flex flex-col justify-center gap-6 pb-10 text-center">
              <Typography
                variant={TypeVariant.H3}
                component={TypeComponent.p}
                bold
              >
                {title ?? "Our Locations"}
              </Typography>

              <Typography
                variant={TypeVariant.Body1}
                component={TypeComponent.p}
              >
                Find all the contact details you need to get in touch with us
              </Typography>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {selectedNursery ? (
                <>
                  <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-10 xl:p-14">
                    <div className="flex flex-col items-center gap-3 text-center">
                      <Typography
                        variant={TypeVariant.H3}
                        component={TypeComponent.p}
                        bold
                      >
                        {selectedNursery.title}
                      </Typography>
                      <Typography
                        variant={TypeVariant.H6}
                        component={TypeComponent.p}
                      >
                        {selectedNursery.location}
                      </Typography>
                    </div>

                    <div className="mt-6 flex flex-col md:max-w-4/5">
                      <NurseryDetails
                        title=""
                        subtitle=""
                        address={selectedNursery.address ?? ""}
                        phone={selectedNursery.phoneNumber ?? ""}
                        email={selectedNursery.email ?? ""}
                        buttonClasses="button-green font-sans mx-auto md:mx-0"
                        mapsLink={selectedNursery?.mapsLink}
                        directionsLink={selectedNursery?.directionsLink}
                        centered
                        showMapButton
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 rounded-3xl bg-white p-10 text-center xl:p-14">
                    <Typography
                      variant={TypeVariant.H3}
                      component={TypeComponent.p}
                      bold
                    >
                      Contact {selectedNursery.location}
                    </Typography>

                    <Typography
                      variant={TypeVariant.Body2}
                      component={TypeComponent.p}
                    >
                      Complete our short form and we&apos;ll get back to you as
                      soon as possible.
                    </Typography>

                    <Form formId="replace-me" />
                  </div>
                </>
              ) : (
                <>
                  {nurseries &&
                    nurseries.length > 0 &&
                    nurseries.map((nursery: Nursery, i: number) => {
                      return (
                        <div
                          className="flex flex-col items-center rounded-3xl bg-white p-10 xl:p-14"
                          key={nursery.title}
                        >
                          <div className="flex flex-col items-center gap-3 text-center">
                            <Typography
                              variant={TypeVariant.H3}
                              component={TypeComponent.p}
                              bold
                              classes="opacity-80 hover:opacity-100"
                            >
                              <a
                                href={`our-nurseries/${nursery?.slug?.current}`}
                              >
                                {nursery.title}
                              </a>
                            </Typography>
                            <Typography
                              variant={TypeVariant.H6}
                              component={TypeComponent.p}
                            >
                              {nursery.location}
                            </Typography>
                          </div>

                          <div className="mt-6 flex flex-col md:max-w-4/5">
                            <NurseryDetails
                              title=""
                              subtitle=""
                              address={nursery.address ?? ""}
                              phone={nursery.phoneNumber ?? ""}
                              email={nursery.email ?? ""}
                              buttonClasses={`${i === 0 ? "button-green" : "button-blue"} font-sans mx-auto md:mx-0`}
                              mapsLink={nursery?.mapsLink}
                              directionsLink={nursery?.directionsLink}
                              centered
                              showMapButton
                            />
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
          </div>
        </Container>
        <KiteSvg classes="absolute top-[2.4%] left-[5%] pointer-events-none" />
        <StarsSvg
          classes="absolute top-[2.4%] right-[5%] pointer-events-none"
          stroke="white"
        />
        <StarsSvg classes="absolute top-[50%] left-[5%] pointer-events-none" />
      </div>
    </div>
  );
};

export default Locations;
