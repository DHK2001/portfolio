import Title from "@/components/Title";
import { profileData } from "@/constants/infoExample";
import { getLinkedUser } from "@/utils/utils";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center px-4">
      <Title text="Contact Me" />

      <div className="mt-8 flex flex-col gap-6 w-full max-w-md">
        <a
          href={`mailto:${profileData.email}`}
          className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--cards)] text-[var(--cards-text)] shadow-md
              cursor-pointer transition-transform duration-300 ease-in-out
              hover:shadow-[0_6px_20px_var(--shadow-color)] hover:-translate-y-2"
        >
          <span className="flex items-center justify-center h-10 w-10 rounded-full bg-[var(--primary)] text-[var(--button-text)]">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="h-5 w-5" />
          </span>
          <span className="truncate">{profileData.email}</span>
        </a>

        <a
          href={profileData.linkedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--cards)] text-[var(--cards-text)] shadow-md
              cursor-pointer transition-transform duration-300 ease-in-out
              hover:shadow-[0_6px_20px_var(--shadow-color)] hover:-translate-y-2"
        >
          <span className="flex items-center justify-center h-10 w-10 rounded-full bg-[var(--primary)] text-[var(--button-text)]">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="h-5 w-5" />
          </span>
          <span className="truncate">
            linkedin.com/in/{getLinkedUser(profileData.linkedUrl)}
          </span>
        </a>
      </div>
    </div>
  );
}
