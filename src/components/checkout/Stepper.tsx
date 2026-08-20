import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, label: "Termos e resumo" },
  { id: 2, label: "Dados dos passageiros" },
  { id: 3, label: "Pagamento" },
];

export function Stepper({ current }: { current: number }) {
  return (
    <nav aria-label="Etapas da compra">
      <ol className="flex items-center gap-3">
        {steps.map((step, i) => {
          const done = step.id < current;
          const active = step.id === current;
          return (
            <li key={step.id} className="flex flex-1 items-center gap-3">
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <span
                  className={cn(
                    "h-1.5 w-full rounded-[var(--ds-v2-radius-pill)] transition-colors",
                    done && "bg-success",
                    active && "bg-gradient-brand",
                    !done && !active && "bg-border",
                  )}
                />
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-full text-[0.625rem] font-semibold",
                      done && "bg-success text-primary-foreground",
                      active && "bg-primary text-primary-foreground",
                      !done && !active && "bg-secondary text-muted-foreground",
                    )}
                  >
                    {done ? <Check className="size-3" aria-hidden /> : step.id}
                  </span>
                  <span
                    className={cn(
                      "truncate text-xs font-medium sm:text-sm",
                      active ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {step.label}
                  </span>
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
