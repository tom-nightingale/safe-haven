"use client";

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Container from "@/components/Container/Container";
import ReviewCards from "@/components/ReviewCards/ReviewCards";
import MeetTheTeam from "@/components/MeetTheTeam/MeetTheTeam";
import OurRooms from "@/components/OurRooms/OurRooms";
import { useGlobalContext } from "@/context/GlobalContext";
import Locations from "@/components/Locations/Locations";
import type { Staff, Page } from "@/gql/sanity/codegen";

type Props = {
  staff?: Staff[];
  rooms?: Page[];
  page?: Page;
};
export const HomeLayout = ({ staff, rooms, page }: Props) => {
  const { nurseries } = useGlobalContext();

  const filteredRooms = (rooms ?? [])
    .filter(room => room?.slug?.current !== "the-den")
    .map(room => ({
      ...room,
      title: room?.title?.split("(")[0],
      subtitle: `(${room?.title?.split("(")[1]}`,
      buttonText: "View Room",
      href: `/our-rooms/${room?.slug?.current}`,
    }));
  console.log("filteredRooms", filteredRooms);
  return (
    <PageWrapper>
      <main className="">
        <OurRooms rooms={filteredRooms} />
        <Container>Main content</Container>
        <div className="scalloped-bottom relative mb-20">
          <div className="from-taupe to-cream relative bg-gradient-to-t py-20">
            <Container>
              <ReviewCards />
            </Container>
          </div>
        </div>
        <Container>
          <MeetTheTeam profiles={staff} />
        </Container>
        <Locations nurseries={nurseries} />
        Gallery goes here.
      </main>
    </PageWrapper>
  );
};

export default HomeLayout;
