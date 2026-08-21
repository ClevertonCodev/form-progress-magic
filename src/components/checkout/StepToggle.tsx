import { FileText, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  step: 1 | 2;
  onChange: (step: 1 | 2) => void;
  formsEnabled: boolean;
}

const tabs = [
  { id: 1 as const, label: "Termos de uso", icon: FileText },
  { id: 2 as const, label: "Preenchimento", icon: Users },
];

export function StepToggle({ step, onChange, formsEnabled }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Etapas da compra"
      className="relative grid w-full grid-cols-2 gap-1 rounded-[var(--ds-v2-radius-pill)] border border-border bg-secondary p-1 sm:max-w-md"
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-[var(--ds-v2-radius-pill)] bg-card shadow-ds-md transition-transform duration-300 ease-out",
          step === 2 && "translate-x-[calc(100%+0.25rem)]",
        )}
      />
      {tabs.map((tab) => {
        const active = step === tab.id;
        const disabled = tab.id === 2 && !formsEnabled;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active}
            disabled={disabled}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative z-10 flex items-center justify-center gap-2 rounded-[var(--ds-v2-radius-pill)] px-4 py-2 text-sm font-semibold transition-colors",
              active ? "text-primary" : "text-muted-foreground hover:text-foreground",
              disabled && "cursor-not-allowed opacity-50 hover:text-muted-foreground",
            )}
          >
            <tab.icon className="size-4" aria-hidden />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
