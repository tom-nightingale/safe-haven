import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Container from "@/components/Container/Container";
import NurseryDetails from "@/components/Footer/NurseryDetails";
// import Image from "next/image";
// import config from "@/config/config";
import CloudsVector from "@/components/CloudsVector/CloudsVector";

const Locations = () => {
  return (
    <>
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
          <div className="py-10">
            <div className="flex flex-col justify-center gap-6 pb-10 text-center">
              <Typography variant={TypeVariant.H3} component={TypeComponent.p}>
                Our Locations
              </Typography>

              <Typography
                variant={TypeVariant.Body1}
                component={TypeComponent.p}
              >
                Find all the contact details you need to get in touch with us
              </Typography>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center rounded-3xl bg-white p-10 xl:p-14">
                <div className="flex flex-col items-center gap-3 text-center">
                  <Typography
                    variant={TypeVariant.H4}
                    component={TypeComponent.p}
                  >
                    Safe Haven Day Nursery & The Den
                  </Typography>
                  <Typography
                    variant={TypeVariant.H6}
                    component={TypeComponent.p}
                  >
                    Mansfield Woodhouse
                  </Typography>
                </div>

                <div className="mt-6 flex flex-col md:max-w-4/5">
                  <NurseryDetails
                    title=""
                    subtitle=""
                    address="43 Church Street, South Normanton, DE55 2BT"
                    phone="01773 000 000"
                    email="info@safehavennursery.co.uk"
                    buttonClasses="button-peach font-sans mx-auto md:mx-0"
                    centered
                    showMapButton
                  />
                </div>
              </div>

              <div className="flex flex-col items-center rounded-3xl bg-white p-10 xl:p-14">
                <div className="flex flex-col items-center gap-3 text-center">
                  <Typography
                    variant={TypeVariant.H4}
                    component={TypeComponent.p}
                  >
                    Safe Haven At <br />
                    The Old School House
                  </Typography>
                  <Typography
                    variant={TypeVariant.H6}
                    component={TypeComponent.p}
                  >
                    South Normanton
                  </Typography>
                </div>

                <div className="mt-6 flex flex-col md:max-w-4/5">
                  <NurseryDetails
                    title=""
                    subtitle=""
                    address="43 Church Street, South Normanton, DE55 2BT"
                    phone="01773 000 000"
                    email="info@safehavennursery.co.uk"
                    buttonClasses="button-peach font-sans mx-auto md:mx-0"
                    centered
                    showMapButton
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Locations;
