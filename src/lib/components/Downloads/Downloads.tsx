import ScallopedTop from "@/components/ScallopedTop/ScallopedTop";
import Container from "@/components/Container/Container";
import { Maybe, type FileBlock } from "@/gql/sanity/codegen";
import Button from "@/components/Button/Button";
import { FaDownload } from "react-icons/fa6";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";

type Props = {
  downloads: Maybe<Array<Maybe<FileBlock>>>;
};

const Downloads = ({ downloads }: Props) => {
  const shadowClasses = [
    "bg-green/40",
    "bg-lilac/40",
    "bg-yellow/40",
    "bg-blue/40",
    "bg-peach/40",
  ];

  const backgroundClasses = [
    "bg-green",
    "bg-lilac",
    "bg-yellow",
    "bg-blue",
    "bg-peach",
  ];

  const iconClasses = [
    "text-green",
    "text-lilac",
    "text-yellow",
    "text-blue",
    "text-peach",
  ];

  return (
    <div className="relative">
      <ScallopedTop>
        <Container>
          <div className="flex flex-wrap justify-center gap-10 py-10">
            {downloads &&
              downloads.length > 0 &&
              downloads.map((file, i) => {
                return (
                  <div
                    className={`group relative grow-0 basis-full rounded-3xl p-4 md:basis-[calc(50%-2.5rem)] lg:basis-[calc(33.333%-2.5rem)] xl:basis-[calc(25%-2.5rem)] ${backgroundClasses[i % backgroundClasses.length]}`}
                    key={file?.file?.asset?.url}
                  >
                    <div
                      className={`pointer-events-none absolute -top-2 -left-2 z-0 h-full w-full rounded-3xl transition-all duration-200 group-hover:-top-1 group-hover:-left-1 ${shadowClasses[i % shadowClasses.length]}`}
                    ></div>
                    <a
                      className="relative z-1 flex items-center gap-4"
                      href={file?.file?.asset?.url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span
                        className={`rounded-full bg-white p-1 ${iconClasses[i % iconClasses.length]}`}
                      >
                        <Button
                          classes={`p-3 button-outline button-icon-only`}
                          iconOnly
                          label={`Download ${file?.label}`}
                          icon={<FaDownload />}
                        />
                      </span>

                      <Typography
                        variant={TypeVariant.Button2}
                        component={TypeComponent.span}
                        classes="text-white"
                        bold
                      >
                        {file?.label}
                      </Typography>
                    </a>
                  </div>
                );
              })}
          </div>
        </Container>
      </ScallopedTop>
    </div>
  );
};

export default Downloads;
