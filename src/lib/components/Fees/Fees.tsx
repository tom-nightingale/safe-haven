import type { Fee as FeeType, Link, Maybe } from "@/gql/sanity/codegen";
import Typography, {
  TypeComponent,
  TypeVariant,
} from "../Typography/Typography";
import Container from "@/components/Container/Container";
import ScallopedTop from "@/components/ScallopedTop/ScallopedTop";
import StarsSvg from "@/icons/starsSvg";
import RocketSvg from "@/icons/rocketSvg";
import ScallopedBottom from "@/components/ScallopedBottom/ScallopedBottom";
import Button from "@/components/Button/Button";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  title: Maybe<string>;
  subtitle?: Maybe<string>;
  fees: Maybe<Maybe<FeeType>[]>;
  scallopedTop?: Maybe<boolean>;
  scallopedBottom?: Maybe<boolean>;
  links?: Maybe<Maybe<Link>[]>;
  reverseLayout?: Maybe<boolean>;
};

const FeesInner = ({ title, subtitle, fees, links, reverseLayout }: Props) => {
  return (
    <div
      className={`relative z-10 flex flex-col items-center xl:flex-row xl:justify-between ${reverseLayout && "xl:flex-row-reverse"}`}
    >
      <div className={`flex flex-col items-center`}>
        <Typography variant={TypeVariant.H3} component={TypeComponent.p} bold>
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant={TypeVariant.Button1}
            component={TypeComponent.p}
            classes="mt-2"
            bold
          >
            {subtitle}
          </Typography>
        )}

        {links && links?.length > 0 && (
          <div className="mt-4 hidden xl:block">
            <Button
              classes="button-primary button-peach inline-block"
              href={links[0]?.href}
              label={links[0]?.label}
              iconRight={<FaArrowRight />}
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-12 py-10 md:grid-cols-2 lg:grid-cols-3">
        {fees?.map((fee, idx) => (
          <div
            key={fee?._key}
            className={`relative ${idx % 2 === 0 ? "-rotate-2" : "rotate-2"}`}
          >
            <span className="bg-peach/40 pointer-events-none absolute top-1 -left-1 z-0 block h-full w-full rounded-3xl"></span>
            <div className="relative z-10 flex h-full w-full flex-col items-center overflow-hidden rounded-3xl bg-white p-4">
              <Typography
                variant={TypeVariant.H4}
                component={TypeComponent.p}
                bold
              >
                {fee?.label}
              </Typography>
              <Typography
                variant={TypeVariant.Body1}
                component={TypeComponent.p}
              >
                {fee?.cost}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      {links && links?.length > 0 && (
        <div className="mt-4 block xl:hidden">
          <Button
            classes="button-primary button-peach inline-block"
            href={links[0]?.href}
            label={links[0]?.label}
            iconRight={<FaArrowRight />}
          />
        </div>
      )}
    </div>
  );
};

const Fees = ({
  title,
  subtitle,
  fees,
  links,
  scallopedTop,
  scallopedBottom,
  reverseLayout,
}: Props) => {
  return (
    <div className="relative">
      {scallopedTop ? (
        <ScallopedTop>
          {scallopedBottom ? (
            <ScallopedBottom>
              <Container classes="relative max-w-(--breakpoint-xl)">
                <FeesInner
                  fees={fees}
                  title={title}
                  subtitle={subtitle}
                  links={links}
                  reverseLayout={reverseLayout}
                />
                <StarsSvg classes="absolute top-[15%] left[10%] pointer-events-none z-0" />
                <RocketSvg classes="absolute top-1/2 right-[2.5%] pointer-events-none z-0" />
              </Container>
            </ScallopedBottom>
          ) : (
            <Container classes="relative max-w-(--breakpoint-xl)">
              <FeesInner
                fees={fees}
                title={title}
                subtitle={subtitle}
                links={links}
                reverseLayout={reverseLayout}
              />
              <StarsSvg classes="absolute top-[15%] left[10%] pointer-events-none z-0" />
              <RocketSvg classes="absolute top-1/2 right-[2.5%] pointer-events-none z-0" />
            </Container>
          )}
        </ScallopedTop>
      ) : scallopedBottom ? (
        <ScallopedBottom>
          <Container classes="relative max-w-(--breakpoint-xl)">
            <FeesInner
              fees={fees}
              title={title}
              subtitle={subtitle}
              links={links}
              reverseLayout={reverseLayout}
            />
            <StarsSvg classes="absolute top-[15%] left[10%] pointer-events-none z-0" />
            <RocketSvg classes="absolute top-1/2 right-[2.5%] pointer-events-none z-0" />
          </Container>
        </ScallopedBottom>
      ) : (
        <Container classes="relative max-w-(--breakpoint-xl)">
          <FeesInner
            fees={fees}
            title={title}
            subtitle={subtitle}
            links={links}
            reverseLayout={reverseLayout}
          />
          <StarsSvg classes="absolute top-[15%] left[10%] pointer-events-none z-0" />
          <RocketSvg classes="absolute top-1/2 right-[2.5%] pointer-events-none z-0" />
        </Container>
      )}
    </div>
  );
};

export default Fees;
