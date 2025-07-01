import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";

const Copyright = () => {
  return (
    <>
      <Typography
        variant={TypeVariant.Body1}
        component={TypeComponent.p}
        classes=""
      >
        &copy; Safe Haven Day Nursery {new Date().getFullYear()}. All Rights
        Reserved.
      </Typography>
      <Typography
        variant={TypeVariant.Body1}
        component={TypeComponent.p}
        classes=""
      >
        Registration Number: 08385000
      </Typography>
    </>
  );
};

export default Copyright;
