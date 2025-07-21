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
export const OurRoomsLayout = ({ title }: Props) => {
  const { staff, nurseries } = useGlobalContext();

  const filteredStaff = staff?.filter(
    staff =>
      staff.name === "Sarah" ||
      staff.name === "Shellby" ||
      staff.name === "Paula",
  );

  return (
    <PageWrapper>
      <main className="">
        <div className="scalloped-top relative mt-8">
          <div className="from-taupe to-cream relative bg-gradient-to-b">
            <Container>
              Our Rooms - {title}
              {/* <ReviewCards /> */}
            </Container>
          </div>
        </div>
        Gallery goes here.
      </main>
    </PageWrapper>
  );
};

export default OurRoomsLayout;
