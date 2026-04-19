import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#precos", label: "Preços" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <a href="#top" aria-label="Veltrix Page"><Logo /></a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button asChild variant="default" className="bg-gradient-primary hover:opacity-90 shadow-glow">
            <a href="#precos">Começar agora</a>
          </Button>
        </div>
        <button
          aria-label="Abrir menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95">
          <ul className="container mx-auto py-4 space-y-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1 text-muted-foreground hover:text-foreground">{l.label}</a>
              </li>
            ))}
            <li>
              <Button asChild className="w-full bg-gradient-primary">
                <a href="#precos" onClick={() => setOpen(false)}>Começar agora</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
