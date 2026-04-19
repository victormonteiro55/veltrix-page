import { useTranslation } from "react-i18next";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Veltrix Page. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
