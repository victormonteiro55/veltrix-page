import Logo from "./Logo";

const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <Logo />
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Veltrix Page. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
