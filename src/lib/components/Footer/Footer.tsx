"use client";

import Container from "@/components/Container/Container";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { FaPhone, FaFacebook } from "react-icons/fa";
import Image from "next/legacy/image";
import Copyright from "./Copyright";
import NurseryDetails from "./NurseryDetails";
import { type Navigation } from "@/gql/sanity/codegen";
import Button from "@/components/Button/Button";
import config from "@/config/config";
import { type Nursery } from "@/gql/sanity/codegen";
import { useGlobalContext } from "@/context/GlobalContext";

type Props = {
  primaryNav?: Navigation;
  secondaryNav?: Navigation;
  nurseries?: Nursery[];
};

const Footer = ({ primaryNav, secondaryNav }: Props) => {
  const navColumn1 = [
    ...(primaryNav?.sections ?? []),
    ...(secondaryNav?.sections?.slice(0, 1) ?? []),
  ];

  const navColumn2 = [...(secondaryNav?.sections?.slice(1) ?? [])];

  const { nurseries } = useGlobalContext();

  return (
    <div className="scalloped-top relative mt-8">
      <div className="from-taupe to-cream relative bg-gradient-to-b">
        <Container>
          <div className="border-taupe grid grid-cols-1 gap-10 border-b-2 py-12 pb-48 lg:grid-cols-2 lg:py-20 lg:pb-40 xl:grid-cols-12 xl:py-24">
            <div className="4xl:col-span-3 grid gap-8 xl:col-span-5 2xl:col-span-4">
              <div className="flex flex-col gap-4">
                <Typography
                  variant={TypeVariant.H3}
                  component={TypeComponent.p}
                  bold
                >
                  Need more information or want to book a tour?
                </Typography>

                <Typography
                  variant={TypeVariant.Body1}
                  component={TypeComponent.p}
                >
                  Contact us today to speak to our friendly staff
                </Typography>
              </div>

              <div className="xs:grid-cols-2 xs:gap-4 grid grid-cols-1 gap-4 xl:grid-cols-12">
                {nurseries &&
                  nurseries.length > 0 &&
                  nurseries.map((nursery: Nursery) => (
                    <div
                      className="flex flex-col justify-center xl:col-span-6"
                      key={nursery.title}
                    >
                      <Typography
                        variant={TypeVariant.Body1}
                        component={TypeComponent.p}
                        classes="font-medium"
                      >
                        {nursery.location}
                      </Typography>
                      <Typography
                        variant={TypeVariant.Body1}
                        component={TypeComponent.p}
                        classes="flex gap-2 items-center"
                      >
                        <span className="text-peach inline-block rotate-90">
                          <FaPhone />
                        </span>
                        <Button
                          href={`tel:${nursery.phoneNumber}`}
                          newTab
                          label={nursery.phoneNumber ?? ""}
                          variant={TypeVariant.Body1}
                          classes="button button-link"
                        />
                      </Typography>
                    </div>
                  ))}
              </div>
            </div>
            <div className="grid grid-cols-12 items-start gap-4 rounded-3xl bg-white px-7 py-10 md:items-center lg:col-span-1 xl:col-span-5 xl:col-start-7">
              <div className="col-span-8 grid gap-7 md:col-span-9">
                <Typography
                  variant={TypeVariant.H4}
                  component={TypeComponent.p}
                  bold
                >
                  Keeping up to date with your child&lsquo;s progress
                </Typography>

                <Typography
                  variant={TypeVariant.Body1}
                  component={TypeComponent.p}
                  classes="hidden md:block"
                >
                  It&lsquo;s important to us that you share your child&lsquo;s
                  learning experiences and that you get to be apart of their
                  time at Nursery.
                </Typography>

                <Button
                  label="Log in to ParentAdmin"
                  newTab
                  variant={TypeVariant.Body1}
                  classes="text-pink !text-left !font-sans !font-bold opacity-90 hover:opacity-100"
                  href="https://uk.parentadmin.com/login.php"
                />
              </div>
              <div className="col-span-4 flex justify-center md:col-span-3">
                <Image
                  src="/parent-admin.jpg"
                  width={128}
                  height={111}
                  loading="lazy"
                  alt="Parent Admin"
                />
              </div>
            </div>
          </div>
        </Container>
        <div className="absolute -bottom-[0.325rem] left-1/2 z-0 -translate-x-1/2 xl:left-2/5">
          <Image
            src="/house-blocks.png"
            width={155}
            height={157}
            loading="lazy"
            alt={config.COMPANY_NAME}
          />
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="py-8 lg:py-20 xl:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-16">
            <div className="xl:col-span-5">
              <Typography
                variant={TypeVariant.H5}
                component={TypeComponent.p}
                bold
                classes="mb-4 xl:mb-7.5"
              >
                Explore
              </Typography>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex flex-col items-start gap-3 xl:gap-5">
                  {navColumn1.map(item => {
                    return (
                      <Button
                        key={item?.target?.slug?.current}
                        href={`/${item?.target?.slug?.current ?? ""}`}
                        label={item?.target?.title}
                        variant={TypeVariant.Button2}
                        classes="button button-link text-sm"
                      />
                    );
                  })}
                </div>
                <div className="flex flex-col items-start gap-3 xl:gap-5">
                  {navColumn2.map(item => {
                    return (
                      <Button
                        key={item?.target?.slug?.current}
                        href={`/${item?.target?.slug?.current ?? ""}`}
                        label={item?.target?.title}
                        variant={TypeVariant.Button2}
                        classes="button button-link text-sm"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="xl:col-span-3">
              <Typography
                variant={TypeVariant.H5}
                component={TypeComponent.p}
                classes="mb-4 xl:mb-7.5"
                bold
              >
                Social
              </Typography>

              <Typography
                variant={TypeVariant.Body1}
                component={TypeComponent.p}
              >
                <a
                  href="https://www.facebook.com/SafeHavenDayNursery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-link flex w-full items-center gap-2"
                >
                  <FaFacebook /> Follow us on Facebook
                </a>
              </Typography>
            </div>

            {nurseries &&
              nurseries.length > 0 &&
              nurseries.map((nursery: any, i) => (
                <div
                  className={` ${i === 0 ? "sm:border-taupe sm:border-r" : ""} col-span-2 md:col-span-1 xl:col-span-4`}
                  key={nursery.title}
                >
                  <NurseryDetails
                    title={nursery.location}
                    subtitle={nursery.title}
                    address={nursery.address}
                    phone={nursery.phoneNumber}
                    email={nursery.email}
                    mapsLink={nursery?.mapsLink}
                    directionsLink={nursery?.directionsLink}
                    buttonClasses={
                      i !== 0 ? "bg-peach text-white" : "bg-lilac text-white"
                    }
                    slug={nursery.slug?.current}
                  />
                </div>
              ))}
          </div>
          <div className="mt-8">
            <Copyright />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
