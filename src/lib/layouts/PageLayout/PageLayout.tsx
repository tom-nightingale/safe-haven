"use client";

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Container from "@/components/Container/Container";
import ReviewCards from "@/components/ReviewCards/ReviewCards";
import MeetTheTeam from "@/components/MeetTheTeam/MeetTheTeam";
import OurRooms from "@/components/CardList/CardList";
import { useGlobalContext } from "@/context/GlobalContext";
import Locations from "@/components/Locations/Locations";

type Props = {
  title?: string;
};
export const PageLayout = ({ title }: Props) => {
  const { nurseries } = useGlobalContext();

  return (
    <PageWrapper>
      <main className="">
        <div className="scalloped-top relative mt-8">
          <div className="from-taupe to-cream relative bg-gradient-to-b">
            <Container>
              Page - {title}
              <ReviewCards />
            </Container>
          </div>
        </div>
        {/* <div className="scalloped-bottom relative mb-20">
          <div className="from-taupe to-cream relative bg-gradient-to-t py-20"></div>
        </div> */}
        {/* <Container>
          <MeetTheTeam profiles={filteredStaff} />
        </Container> */}
        Gallery goes here.
      </main>
    </PageWrapper>
  );
};

export default PageLayout;
