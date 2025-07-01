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
};

const NurseryDetails = ({
  title,
  subtitle,
  address,
  phone,
  email,
  buttonClasses = "button-lilac",
}: Props) => {
  return (
    <>
      <Typography
        variant={TypeVariant.H5}
        component={TypeComponent.p}
        classes="mb-4 xl:mb-7.5"
      >
        {title}
      </Typography>

      <div className="grid gap-3 xl:gap-5">
        <Typography
          variant={TypeVariant.Body1}
          component={TypeComponent.p}
          classes=""
        >
          {subtitle}
        </Typography>
        <Typography
          variant={TypeVariant.Body1}
          component={TypeComponent.p}
          classes="flex gap-2"
        >
          <span className="mt-1">
            <FaMapMarkerAlt />
          </span>
          <span dangerouslySetInnerHTML={{ __html: address }} />
        </Typography>
        <Typography
          variant={TypeVariant.Body1}
          component={TypeComponent.p}
          classes="flex gap-2 items-center"
        >
          <span className="rotate-90">
            <FaPhone />
          </span>
          <Button
            href={`tel:${phone}`}
            newTab
            label={phone}
            variant={TypeVariant.Body1}
          />
        </Typography>

        <Typography
          variant={TypeVariant.Body1}
          component={TypeComponent.p}
          classes="flex gap-2 items-center"
        >
          <FaEnvelope />
          <Button
            href={`mailto:${email}`}
            newTab
            label={email}
            variant={TypeVariant.Body1}
          />
        </Typography>

        <Button
          label="Get Directions"
          classes={`button-primary mr-auto mt-5 ${buttonClasses}`}
        />
      </div>
    </>
  );
};

export default NurseryDetails;
