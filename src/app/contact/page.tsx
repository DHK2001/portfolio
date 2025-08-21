import Title from "@/components/Title";
import { profileData } from "@/constants/infoExample";
import { getLinkedUser } from "@/utils/utils";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-6 px-4">
      <Title text="Contact Me" />

      <div className="flex flex-col gap-4 items-center">
        <a
          href={`mailto:${profileData.email}`}
          className="flex items-center gap-2 text-[var(--primary)] hover:underline"
        >
          <FontAwesomeIcon icon={faMailForward} size="lg" className="h-5 w-5" />
          {profileData.email}
        </a>

        <a
          href={profileData.linkedUrl}
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--primary)] hover:underline"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" className="h-5 w-5" />
          linkedin.com/in/{getLinkedUser(profileData.linkedUrl)}
        </a>
      </div>
    </div>
  );
}
