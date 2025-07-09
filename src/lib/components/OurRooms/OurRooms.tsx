"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import { type Image } from "@/gql/sanity/codegen";

type Room = {
  href: string;
  image: Image;
  title: string;
  subtitle: string;
  containerClass?: string;
  shadowClass?: string;
  buttonText?: string;
  buttonStyle?: "full" | "icon-only";
  buttonClass?: string;
  style?: "profile" | "full";
};
type Props = {
  rooms: Room[];
};

const OurRooms = ({ rooms }: Props) => {
  return (
    <div className="scalloped-top relative mt-8">
      <div className="from-taupe to-cream relative bg-gradient-to-b py-10 xl:py-15">
        <Container>
          <div className="flex flex-col justify-center gap-6 text-center">
            <Typography variant={TypeVariant.H2} component={TypeComponent.h2}>
              Our Rooms
            </Typography>
            <Typography variant={TypeVariant.Body1} component={TypeComponent.p}>
              All of our rooms are specially designed with your child in mind
            </Typography>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-15 xl:grid-cols-4">
            {rooms.map(room => {
              return <Card key={room.title} {...room} />;
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurRooms;
