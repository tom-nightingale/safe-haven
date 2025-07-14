import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Button from "@/components/Button/Button";

type Props = {
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  email: string;
  buttonClasses?: string;
  centered?: boolean;
  showMapButton?: boolean;
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
}: Props) => {
  return (
    <>
      {title && (
        <Typography
          variant={TypeVariant.H5}
          component={TypeComponent.p}
          classes="mb-4 xl:mb-7.5"
        >
          {title}
        </Typography>
      )}

      <div className="grid gap-3 xl:gap-5">
        {subtitle && (
          <Typography
            variant={TypeVariant.Body1}
            component={TypeComponent.p}
            classes=""
          >
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
            classes="!font-sans"
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
            classes="!font-sans"
          />
        </Typography>

        <div className="flex flex-col items-center justify-center md:flex-row md:gap-4">
          <Button
            href="/"
            newTab
            label="Get Directions"
            classes={`button-primary mr-auto mt-5 ${buttonClasses}`}
          />

          {showMapButton && (
            <Button
              href="/"
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
