import Container from "@/components/Container/Container";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { FaPhone, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Copyright from "./Copyright";
import NurseryDetails from "./NurseryDetails";
import { type Navigation } from "@/gql/sanity/codegen";
import FancyLink from "@/components/FancyLink/FancyLink";
import Button from "@/components/Button/Button";
import config from "@/config/config";

type Props = {
  primaryNav?: Navigation;
  secondaryNav?: Navigation;
};

// @TODO - Update with the nursery details from Sanity
const Footer = ({ primaryNav, secondaryNav }: Props) => {
  const navColumn1 = [
    ...(primaryNav?.sections ?? []),
    ...(secondaryNav?.sections?.slice(0, 1) ?? []),
  ];

  const navColumn2 = [...(secondaryNav?.sections?.slice(1) ?? [])];
  return (
    <div className="scalloped-top relative mt-8">
      <div className="from-taupe to-cream relative bg-gradient-to-b">
        <Container>
          <div className="border-taupe grid grid-cols-1 gap-10 border-b-2 py-8 pb-48 lg:grid-cols-2 lg:py-20 lg:pb-40 xl:grid-cols-12 xl:py-24">
            <div className="3xl:col-span-3 grid gap-8 xl:col-span-4">
              <div className="flex flex-col gap-4">
                <Typography
                  variant={TypeVariant.H4}
                  component={TypeComponent.p}
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
                <div className="flex flex-col justify-center xl:col-span-6">
                  <Typography
                    variant={TypeVariant.Body1}
                    component={TypeComponent.p}
                    classes="font-medium"
                  >
                    Mansfield Woodhouse
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
                      href={`tel:01623480554`}
                      newTab
                      label="01623 480 554"
                      variant={TypeVariant.Body1}
                    />
                  </Typography>
                </div>

                <div className="flex flex-col justify-center xl:col-span-6">
                  <Typography
                    variant={TypeVariant.Body1}
                    component={TypeComponent.p}
                    classes="font-medium"
                  >
                    South Normanton
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
                      href={`tel:01773000000`}
                      newTab
                      label="01773 000 000"
                      variant={TypeVariant.Body1}
                    />
                  </Typography>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 items-center gap-4 rounded-3xl bg-white px-7 py-10 lg:col-span-1 xl:col-span-5 xl:col-start-7">
              <div className="col-span-8 grid gap-7 md:col-span-9">
                <Typography
                  variant={TypeVariant.H4}
                  component={TypeComponent.p}
                >
                  Keeping up to date with your child&lsquo;s progress
                </Typography>

                <Typography
                  variant={TypeVariant.Body1}
                  component={TypeComponent.p}
                >
                  It&lsquo;s important to us that you share your child&lsquo;s
                  learning experiences and that you get to be apart of their
                  time at Nursery.
                </Typography>

                <Button
                  label="Log in to ParentAdmin"
                  newTab
                  variant={TypeVariant.Body1}
                  classes="text-pink !font-sans !font-bold"
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
        <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 xl:left-2/5">
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
                classes="mb-4 xl:mb-7.5"
              >
                Explore
              </Typography>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex flex-col items-start gap-3 xl:gap-5">
                  {navColumn1.map(item => {
                    return (
                      <FancyLink
                        key={item?.target?.slug?.current}
                        url={item?.target?.slug?.current ?? ""}
                      >
                        {item?.target?.title}
                      </FancyLink>
                    );
                  })}
                </div>
                <div className="flex flex-col items-start gap-3 xl:gap-5">
                  {navColumn2.map(item => {
                    return (
                      <FancyLink
                        key={item?.target?.slug?.current}
                        url={item?.target?.slug?.current ?? ""}
                      >
                        {item?.target?.title}
                      </FancyLink>
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
              >
                Social
              </Typography>

              <Typography
                variant={TypeVariant.Body1}
                component={TypeComponent.p}
                classes="flex items-center gap-2"
              >
                <FaFacebook /> Follow us on Facebook
              </Typography>
            </div>

            <div className="sm:border-taupe sm:border-r xl:col-span-4">
              <NurseryDetails
                title="Mansfield Woodhouse"
                subtitle="Safe Haven Day Nursery & The Den"
                address="61 High Street <br /> Mansfield Woodhouse <br /> NG19 8BB"
                phone="01623 480 554"
                email="info@safehavennursery.co.uk"
              />
            </div>

            <div className="xl:col-span-4">
              <NurseryDetails
                title="South Normanton"
                subtitle="Safe Haven at The Old School House"
                address="43 Church Street <br /> South Normanton <br /> DE55 2BT"
                phone="01773 000 000"
                email="info@safehavennursery.co.uk"
                buttonClasses="button-peach"
              />
            </div>
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
