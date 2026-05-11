import Title from "@/components/Title";
import { contactPageData, profileData } from "@/constants/portfolioData";
import { getLinkedUser } from "@/utils/utils";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contactLinks = [
  {
    label: "Email",
    value: profileData.email,
    href: `mailto:${profileData.email}`,
    icon: faEnvelope,
  },
  {
    label: "LinkedIn",
    value: `linkedin.com/in/${getLinkedUser(profileData.linkedUrl)}`,
    href: profileData.linkedUrl,
    icon: faLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/DHK2001",
    href: profileData.githubUrl,
    icon: faGithub,
  },
];

export default function Contact() {
  return (
    <section className="flex min-h-[calc(100dvh-10rem)] w-full flex-col justify-center gap-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--cards)] px-4 py-2 text-sm font-medium text-[color:var(--secondary-text)] shadow-sm">
            {contactPageData.badge}
          </div>
          <Title text={contactPageData.title} classname="text-left" />
          <p className="max-w-2xl text-base leading-7 text-[color:var(--secondary-text)]">
            {contactPageData.description}
          </p>
        </div>

        <div className="grid gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center gap-4 rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--primary)] hover:shadow-[0_10px_30px_var(--shadow-color)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[color:var(--primary)] text-[color:var(--button-text)]">
                <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[color:var(--secondary-text)]">
                  {link.label}
                </span>
                <span className="block truncate text-base font-bold text-[color:var(--primary-text)] group-hover:text-[color:var(--highlight)]">
                  {link.value}
                </span>
              </span>
            </a>
          ))}
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
