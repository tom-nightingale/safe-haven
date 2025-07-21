"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import type { Staff, Maybe, Link } from "@/gql/sanity/codegen";
import type { TypedObject } from "@portabletext/types";
import { PortableText } from "@portabletext/react";

type Props = {
  title?: Maybe<string>;
  text?: TypedObject | TypedObject[];
  links?: Maybe<Maybe<Link>[]>;
  profiles?: Maybe<Maybe<Staff>[]> | undefined | null;
};

const MeetTheTeam = ({ title, text, links, profiles }: Props) => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10">
        {(title || text || links) && (
          <div className="flex flex-col justify-center gap-6 text-center md:col-span-12 xl:col-span-4 xl:text-left">
            <Typography
              variant={TypeVariant.H3}
              component={TypeComponent.p}
              bold
            >
              {title}
            </Typography>

            {text && (
              <Typography
                variant={TypeVariant.Body1}
                component={TypeComponent.span}
              >
                <PortableText value={text} />
              </Typography>
            )}

            <div className="mx-auto xl:mx-0">
              {links && links.length > 0 && (
                <>
                  {links.map(link => {
                    return (
                      <Button
                        key={link?.label}
                        classes="inline-block button-primary button-peach"
                        label={link?.label}
                        href={link?.href}
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
        )}
        <div className="col-span-1 grid md:col-span-12 md:grid-cols-12 md:gap-6 xl:col-span-8">
          {profiles &&
            profiles.length > 0 &&
            profiles.map((profile, i) => {
              return (
                <div className="md:col-span-4" key={profile?.name}>
                  <Card
                    href="/"
                    image={profile?.profileImage?.image}
                    title={profile?.name}
                    subtitle={profile?.jobTitle}
                    buttonStyle="icon-only"
                    containerClass={
                      i === 0 ? "bg-green" : i === 1 ? "bg-lilac" : "bg-yellow"
                    }
                    shadowClass={
                      i === 0
                        ? "bg-green/10"
                        : i === 1
                          ? "bg-lilac/10"
                          : "bg-yellow/10"
                    }
                    imageFit="contain"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </Container>
  );
};

export default MeetTheTeam;
