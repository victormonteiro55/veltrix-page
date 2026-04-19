import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Search, Check } from "lucide-react";
import { LANGUAGES, RTL_LANGS } from "@/lib/languages";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const current = useMemo(
    () => LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0],
    [i18n.language]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LANGUAGES;
    return LANGUAGES.filter(
      (l) => l.name.toLowerCase().includes(q) || l.code.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.has(lang) ? "rtl" : "ltr";
  }, [i18n.language]);

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
    setQuery("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={t("langPicker.label") as string}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-background/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{current.flag} {current.name}</span>
          <span className="sm:hidden">{current.flag}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-72 p-2 bg-popover border-border"
      >
        <div className="relative mb-2">
          <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("langPicker.search") as string}
            className="pl-8 h-9 bg-secondary border-border"
            autoFocus
          />
        </div>
        <ScrollArea className="h-72">
          <ul className="space-y-0.5 pr-2">
            {filtered.map((l) => {
              const active = l.code === i18n.language;
              return (
                <li key={l.code}>
                  <button
                    type="button"
                    onClick={() => handleSelect(l.code)}
                    className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-md text-sm transition ${
                      active
                        ? "bg-primary/15 text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <span className="text-base leading-none">{l.flag}</span>
                    <span className="flex-1 text-left truncate">{l.name}</span>
                    <span className="text-[10px] uppercase tracking-wider opacity-60">{l.code}</span>
                    {active && <Check className="w-3.5 h-3.5 text-primary" />}
                  </button>
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="px-3 py-6 text-center text-sm text-muted-foreground">—</li>
            )}
          </ul>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
