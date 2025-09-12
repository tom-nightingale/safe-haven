import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Button from "@/components/Button/Button";
import { Maybe } from "@/gql/sanity/codegen";
import FancyLink from "@/components/FancyLink/FancyLink";

type Props = {
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  email: string;
  buttonClasses?: string;
  centered?: boolean;
  showMapButton?: boolean;
  mapsLink?: string | Maybe<string>;
  directionsLink?: string | Maybe<string>;
  slug?: string | Maybe<string>;
};

const NurseryDetails = ({
  title,
  subtitle,
  address,
  phone,
  email,
  buttonClasses = "button-lilac",
  centered = false,
  showMapButton = false,
  mapsLink,
  directionsLink,
  slug,
}: Props) => {
  return (
    <>
      {slug && title && (
        <FancyLink url={`our-nurseries/${slug}`}>
          <Typography
            variant={TypeVariant.H5}
            component={TypeComponent.p}
            classes="mb-4 xl:mb-7.5 hover:text-peach transition-all duration-200"
            bold
          >
            {title}
          </Typography>
        </FancyLink>
      )}
      {!slug && title && (
        <Typography
          variant={TypeVariant.H5}
          component={TypeComponent.p}
          classes="mb-4 xl:mb-7.5"
          bold
        >
          {title}
        </Typography>
      )}

      <div className="grid w-full grid-cols-1 gap-3 xl:gap-5">
        {subtitle && (
          <Typography variant={TypeVariant.Body1} component={TypeComponent.p}>
            {subtitle}
          </Typography>
        )}
        <Typography
          variant={TypeVariant.Body1}
          component={TypeComponent.p}
          classes={`flex gap-2 items-start ${centered ? "justify-center items-start text-center" : ""}`}
        >
          <span className={`${centered ? "relative left-1" : ""} mt-1`}>
            <FaMapMarkerAlt />
          </span>
          <span dangerouslySetInnerHTML={{ __html: address }} />
        </Typography>
        <Typography
          variant={TypeVariant.Body1}
          component={TypeComponent.p}
          classes={`flex gap-2 items-center ${centered ? "justify-center text-center" : ""}`}
        >
          <span className="rotate-90">
            <FaPhone />
          </span>
          <Button
            href={`tel:${phone}`}
            newTab
            label={phone}
            variant={TypeVariant.Body1}
            classes="button-link"
          />
        </Typography>

        <Typography
          variant={TypeVariant.Body1}
          component={TypeComponent.p}
          classes={`flex font-sans gap-2 items-center ${centered ? "justify-center text-center" : ""}`}
        >
          <FaEnvelope />
          <Button
            href={`mailto:${email}`}
            newTab
            label={email}
            variant={TypeVariant.Body1}
            classes="button-link text-sm xs:text-body-1"
          />
        </Typography>

        <div className="flex flex-col items-center justify-center md:flex-row md:gap-4">
          <Button
            href={directionsLink}
            newTab
            label="Get Directions"
            classes={`button-primary mr-auto mt-5 ${buttonClasses}`}
          />

          {showMapButton && (
            <Button
              href={mapsLink}
              newTab
              label="View Map"
              classes={`button-primary button-outline button-outline-blue mr-auto mt-5 ${buttonClasses}`}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default NurseryDetails;
