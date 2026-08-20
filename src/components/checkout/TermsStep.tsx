import { useEffect, useRef, useState } from "react";
import { ArrowDown, CheckCircle2, FileText } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { termsParagraphs } from "@/lib/checkout-data";

interface Props {
  accepted: boolean;
  onAcceptedChange: (v: boolean) => void;
}

export function TermsStep({ accepted, onAcceptedChange }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [readToEnd, setReadToEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      const ratio = max <= 0 ? 1 : el.scrollTop / max;
      setProgress(Math.min(1, Math.max(0, ratio)));
      if (ratio > 0.97) setReadToEnd(true);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="surface-card overflow-hidden">
      <header className="flex items-center gap-3 border-b border-border px-5 py-4">
        <span className="flex size-9 items-center justify-center rounded-[var(--ds-v2-radius-md)] bg-accent text-accent-foreground">
          <FileText className="size-4" aria-hidden />
        </span>
        <div>
          <h2 className="text-base font-semibold tracking-tight text-foreground">Termos e condições de uso</h2>
          <p className="text-xs text-muted-foreground">Leia até o final para liberar a próxima etapa</p>
        </div>
      </header>

      <div className="relative">
        <div
          ref={scrollRef}
          tabIndex={0}
          className="max-h-[22rem] space-y-4 overflow-y-auto px-5 py-5 text-sm leading-relaxed text-secondary-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {termsParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="flex items-center gap-2 pt-2 text-xs font-medium text-success">
            <CheckCircle2 className="size-4" aria-hidden /> Fim dos termos.
          </p>
        </div>

        {!readToEnd && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-card to-transparent pb-3 pt-10">
            <span className="pointer-events-auto flex items-center gap-1.5 rounded-[var(--ds-v2-radius-pill)] bg-foreground/90 px-3 py-1.5 text-xs font-medium text-primary-foreground">
              <ArrowDown className="size-3.5 animate-bounce" aria-hidden /> Role para ler até o final
            </span>
          </div>
        )}
      </div>

      <div className="h-1 bg-border">
        <div
          className="h-full bg-gradient-brand transition-[width] duration-150"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      <label
        htmlFor="accept-terms"
        className={cn(
          "flex cursor-pointer items-center gap-3 border-t border-border px-5 py-4 transition-colors",
          accepted ? "bg-success-surface" : readToEnd ? "bg-surface-subtle" : "bg-secondary/60",
        )}
      >
        <Switch
          id="accept-terms"
          checked={accepted}
          disabled={!readToEnd}
          onCheckedChange={onAcceptedChange}
          aria-describedby="accept-terms-hint"
        />
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-foreground">Li e aceito os termos de uso</span>
          <span
            id="accept-terms-hint"
            className={cn("block text-xs", readToEnd ? "text-muted-foreground" : "text-warning")}
          >
            {accepted
              ? "Obrigado! Você já pode seguir para os dados dos passageiros."
              : readToEnd
                ? "Ative para confirmar o aceite."
                : "Use a barra de rolagem para ler os termos até o final."}
          </span>
        </span>
      </label>
    </section>
  );
}
