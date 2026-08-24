import { useState } from "react";
import { Check, CopyCheck, PenLine, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  passengerCount: number;
  activityLabel?: string;
  onCopy: () => void;
}

export function RepeatDataCard({ passengerCount, activityLabel = "primeira atividade", onCopy }: Props) {
  const [state, setState] = useState<"idle" | "copied" | "manual">("idle");

  return (
    <section
      className={cn(
        "surface-card relative overflow-hidden p-5 sm:p-6 transition-shadow",
        state === "copied" && "shadow-ds-md",
      )}
    >
      {/* brilho decorativo */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-gradient-brand-subtle opacity-70 blur-2xl"
      />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
        <span
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-[var(--ds-v2-radius-lg)] transition-colors",
            state === "copied" ? "bg-success text-primary-foreground" : "bg-gradient-brand text-primary-foreground",
          )}
        >
          {state === "copied" ? (
            <Check className="size-6" aria-hidden />
          ) : (
            <CopyCheck className="size-6" aria-hidden />
          )}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {state === "copied" ? "Dados replicados com sucesso" : "Ganhe tempo: repetir dados?"}
            </h3>
            {state === "idle" && (
              <span className="inline-flex items-center gap-1 rounded-[var(--ds-v2-radius-pill)] bg-info-surface px-2 py-0.5 text-[0.6875rem] font-semibold text-info">
                <Sparkles className="size-3" aria-hidden /> Atalho
              </span>
            )}
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            {state === "copied" ? (
              <>Você pode revisar e ajustar qualquer passageiro abaixo.</>
            ) : state === "manual" ? (
              <>Sem problemas — preencha os passageiros abaixo do seu jeito.</>
            ) : (
              <>
                Usamos os dados já preenchidos na {activityLabel} para completar{" "}
                <span className="inline-flex items-center gap-1 font-medium text-foreground">
                  <Users className="size-3.5" aria-hidden /> {passengerCount} passageiros
                </span>{" "}
                desta atividade.
              </>
            )}
          </p>
        </div>

        {state === "idle" && (
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
            <Button
              size="sm"
              className="h-10 px-4"
              onClick={() => {
                onCopy();
                setState("copied");
              }}
            >
              <CopyCheck className="size-4" aria-hidden /> Repetir dados
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-10 px-4 text-muted-foreground"
              onClick={() => setState("manual")}
            >
              <PenLine className="size-4" aria-hidden /> Preencher do zero
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
