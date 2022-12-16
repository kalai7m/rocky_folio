import React from "react";
import { ReactComponent as Fb } from "../../assets/media/facebook.svg";
import { ReactComponent as Insta } from "../../assets/media/instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/media/linkedin.svg";
import { ReactComponent as Mail } from "../../assets/media/mail.svg";
import { ReactComponent as Dribble } from "../../assets/media/dribble.svg";
import { ReactComponent as Behance } from "../../assets/media/behance.svg";
import { media } from "../../constants";

const Media = () => {
  const mediaLink = [
    // {
    //   icon: <Fb className="h-7 w-7 sm:h-9 sm:w-9" />,
    //   link: media.facebook,
    //   label: "Facebook",
    // },
    {
      icon: <Insta className="h-7 w-7 sm:h-9 sm:w-9" />,
      link: media.instagram,
      label: "Instagram",
    },
    {
      icon: <LinkedIn className="h-7 w-7 sm:h-9 sm:w-9" />,
      link: media.linkedin,
      label: "Linked In",
    },
    {
      icon: <Dribble className="h-7 w-7 sm:h-9 sm:w-9" />,
      link: media.dribble,
      label: "Dribble",
    },
    {
      icon: <Behance className="h-7 w-7 sm:h-9 sm:w-9" />,
      link: media.behance,
      label: "Behance",
    },
    {
      icon: <Mail className="h-7 w-7 sm:h-9 sm:w-9" />,
      link: media.mail,
      label: "e-mail",
    },
  ];
  return (
    <ul className="flex items-center space-x-4">
      {mediaLink.map(({ icon, link }, index) => (
        <li key={index} data-aos="flip-left">
          <a href={link} target="_blank">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Media;
