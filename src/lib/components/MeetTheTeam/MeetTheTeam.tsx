"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import { type Image } from "@/gql/sanity/codegen";
import Button from "@/components/Button/Button";

type Profile = {
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
  profiles: Profile[];
};

const MeetTheTeam = ({ profiles }: Props) => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10">
        <div className="flex flex-col justify-center gap-6 text-center md:col-span-12 xl:col-span-4 xl:text-left">
          <Typography variant={TypeVariant.H3} component={TypeComponent.p}>
            Meet The Team
          </Typography>

          <Typography variant={TypeVariant.Body1} component={TypeComponent.p}>
            Morbi eget feugiat purus. Praesent feug iat porta congue. Nulla in
            iaculis eros. Curabitur imperdiet purus nulla
          </Typography>

          <div className="mx-auto xl:mx-0">
            <Button
              classes="inline-block bg-red-500 button-primary button-peach"
              label="See Full Team"
              href="/"
            />
          </div>
        </div>
        <div className="col-span-1 grid md:col-span-12 md:grid-cols-12 md:gap-6 xl:col-span-8">
          {profiles.map(profile => {
            return (
              <div className="md:col-span-4" key={profile.title}>
                <Card {...profile} />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default MeetTheTeam;
