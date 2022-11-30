// Styled components
import { DiscordIcon, GitHubIcon } from "../StyledComponents";
import { MailIcon, StyledFooter, StyledP } from "./StyledFooter";

// Libraries
import { useTranslation } from "react-i18next";

// Hooks
import { useContext } from "react";
import { DarkModeContext } from "../../contextState/DarkModeContext";

export const Footer = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <StyledFooter light={!darkMode ? true : false} name="contact">
      <div>
        <StyledP light={!darkMode ? true : false}>
          {t("Nav Contact me")}
        </StyledP>
      </div>

      <div>
        <a href="mailto: thomas.kodehode@gmail.com">
          <MailIcon />
        </a>
      </div>

      <div>
        <StyledP light={!darkMode ? true : false}>{t("Footer Text")}</StyledP>
      </div>

      <div>
        <a
          href={"https://github.com/hftjutyir"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <GitHubIcon />
        </a>
        <a
          href={"https://discordapp.com/users/1004669422696402974"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <DiscordIcon />
        </a>
      </div>
    </StyledFooter>
  );
};
