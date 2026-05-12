import Title from "@/components/Title";
import { contactPageData, profileData } from "@/constants/portfolioData";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconByType = {
  email: faEnvelope,
  linkedin: faLinkedin,
  github: faGithub,
};

const hrefByType = {
  email: `mailto:${profileData.email}`,
  linkedin: profileData.linkedUrl,
  github: profileData.githubUrl,
};

export default function Contact() {
  return (
    <section className="flex min-h-0 w-full flex-col justify-start gap-8 lg:min-h-[calc(100dvh-10rem)] lg:justify-center lg:gap-10">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <div className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--cards)] px-4 py-2 text-sm font-medium text-[color:var(--secondary-text)] shadow-sm">
            {contactPageData.badge}
          </div>
          <Title
            text={contactPageData.title}
            classname="text-center lg:text-left"
          />
          <p className="max-w-2xl text-base leading-7 text-[color:var(--secondary-text)]">
            {contactPageData.description}
          </p>
        </div>

        <div className="grid gap-4">
          {contactPageData.links.map((link) => {
            const href = hrefByType[link.type as keyof typeof hrefByType];
            const icon = iconByType[link.type as keyof typeof iconByType];
            if (!href || !icon) return null;

            return (
              <a
                key={link.label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center gap-3 rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--primary)] hover:shadow-[0_10px_30px_var(--shadow-color)] sm:gap-4 sm:p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[color:var(--primary)] text-[color:var(--button-text)] sm:h-12 sm:w-12">
                  <FontAwesomeIcon
                    icon={icon}
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-[color:var(--secondary-text)]">
                    {link.label}
                  </span>
                  <span className="block truncate text-sm font-bold text-[color:var(--primary-text)] group-hover:text-[color:var(--highlight)] sm:text-base">
                    {link.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase text-[color:var(--secondary-text)]">
          {contactPageData.availabilityTitle}
        </p>
        <p className="mt-2 text-base leading-7 text-[color:var(--primary-text)]">
          {contactPageData.availabilityDescription}
        </p>
      </div>
    </section>
  );
}
