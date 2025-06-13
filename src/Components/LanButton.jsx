import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import esFlag from "../assets/Flags/spain.svg";
import ukFlag from "../assets/Flags/uk.svg";
import frFlag from "../assets/Flags/fr.svg";

const flags = [
  { code: "es", img: esFlag, alt: "Español" },
  { code: "en", img: ukFlag, alt: "English" },
  { code: "fr", img: frFlag, alt: "Français" },
];

export default function FlagSelector() {
  const { i18n } = useTranslation();
  const [selectedFlag, setSelectedFlag] = useState(flags.find(f => f.code === i18n.language) || flags[1]);

  const handleFlagClick = (flag) => {
    setSelectedFlag(flag);
    i18n.changeLanguage(flag.code).then(() => {
      window.location.reload(); // Force page reload to apply language changes
    });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light">
        <img src={selectedFlag.img} alt={selectedFlag.alt} style={{ width: "32px", height: "20px" }} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {flags.map((flag) => (
          <Dropdown.Item key={flag.code} onClick={() => handleFlagClick(flag)}>
            <img src={flag.img} alt={flag.alt} style={{ width: "32px", height: "20px", marginRight: "8px" }} />
            {flag.alt}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
