"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import { type Image } from "@/gql/sanity/codegen";
import { CardImageType } from "@/utils/propTypes";

type Room = {
  href: string;
  image?: Image;
  title: string | undefined;
  subtitle: string;
  containerClass?: string;
  shadowClass?: string;
  buttonText?: string;
  buttonStyle?: "full" | "icon-only";
  buttonClass?: string;
  style?: CardImageType;
};
type Props = {
  rooms: Room[];
};

const OurRooms = ({ rooms }: Props) => {
  const bgColors = ["bg-green", "bg-lilac", "bg-yellow", "bg-blue"];
  const buttonClasses = [
    "button-outline-green text-green",
    "button-outline-lilac text-lilac",
    "button-outline-yellow text-yellow",
    "button-outline-blue text-blue",
  ];
  const shadowClasses = [
    "bg-green/10",
    "bg-lilac/10",
    "bg-yellow/10",
    "bg-blue/10",
  ];

  console.log("rooms", rooms);
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
            {rooms.map((room, i) => {
              return (
                <Card
                  style={CardImageType.FULL}
                  key={room.title}
                  {...room}
                  containerClass={bgColors[i] || "bg-blue"}
                  buttonClass={
                    buttonClasses[i] || "button-outline-blue text-blue"
                  }
                  shadowClass={shadowClasses[i] || "bg-blue/10"}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurRooms;
