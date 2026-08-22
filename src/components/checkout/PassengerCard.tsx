import { Check, ChevronDown, CircleAlert } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { countries, type Passenger, type PassengerField } from "@/lib/checkout-data";

export type PassengerValues = Record<string, string>;

interface Props {
  passenger: Passenger;
  values: PassengerValues;
  open: boolean;
  disabled: boolean;
  onToggle: () => void;
  onChange: (fieldId: string, value: string) => void;
}

export function maskValue(type: PassengerField["type"], raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (type === "cpf") {
    return digits
      .slice(0, 11)
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
  }
  if (type === "phone") {
    const d = digits.slice(0, 11);
    if (d.length <= 10) return d.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
    return d.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
  }
  return raw;
}

export function isFieldValid(field: PassengerField, value: string) {
  const v = (value ?? "").trim();
  if (!field.required) return true;
  if (!v) return false;
  if (field.type === "cpf") return v.replace(/\D/g, "").length === 11;
  if (field.type === "phone") return v.replace(/\D/g, "").length >= 10;
  if (field.type === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  return v.length >= 2;
}

export function passengerProgress(passenger: Passenger, values: PassengerValues) {
  const required = passenger.fields.filter((f) => f.required);
  const filled = required.filter((f) => isFieldValid(f, values[f.id] ?? "")).length;
  return { filled, total: required.length, complete: filled === required.length };
}

export function PassengerCard({ passenger, values, open, disabled, onToggle, onChange }: Props) {
  const { filled, total, complete } = passengerProgress(passenger, values);
  const discounted = passenger.kind === "com-desconto";

  return (
    <section className={cn("surface-card overflow-hidden transition-shadow", open && "shadow-ds-md")}>
      <button
        type="button"
        onClick={onToggle}
        disabled={disabled}
        aria-expanded={open}
        aria-disabled={disabled}
        className={cn(
          "flex w-full items-center gap-3 px-5 py-4 text-left transition-colors",
          disabled ? "cursor-not-allowed opacity-60" : "hover:bg-surface-subtle",
        )}
      >
        <span
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors",
            complete ? "bg-success text-primary-foreground" : "bg-accent text-accent-foreground",
          )}
        >
          {complete ? <Check className="size-4" aria-hidden /> : passenger.index}
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-foreground">Passageiro(a) {passenger.index}</span>
            <span
              className={cn(
                "rounded-[var(--ds-v2-radius-pill)] px-2 py-0.5 text-[0.6875rem] font-medium",
                discounted
                  ? "bg-info-surface text-info"
                  : "bg-secondary text-muted-foreground",
              )}
            >
              {passenger.priceLabel}
            </span>
          </span>
          <span
            className={cn(
              "mt-0.5 block text-xs",
              complete ? "text-success" : "text-muted-foreground",
            )}
          >
            {complete ? "Dados completos" : `${filled} de ${total} campos obrigatórios preenchidos`}
          </span>
        </span>

        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {open && (
        <div className="grid gap-4 border-t border-border px-5 py-5 sm:grid-cols-2">
          {passenger.fields.map((field) => {
            const value = values[field.id] ?? "";
            const touched = value.length > 0;
            const valid = isFieldValid(field, value);
            const showError = touched && !valid;

            return (
              <div
                key={field.id}
                className={cn("space-y-1.5", field.type === "text" && "sm:col-span-2")}
              >
                <Label htmlFor={`${passenger.id}-${field.id}`} className="text-xs font-semibold text-foreground">
                  {field.label}
                  {field.required && <span className="ml-0.5 text-destructive">*</span>}
                </Label>

                {field.type === "country" ? (
                  <select
                    id={`${passenger.id}-${field.id}`}
                    value={value || "BR"}
                    onChange={(e) => onChange(field.id, e.target.value)}
                    className="h-11 w-full rounded-[var(--ds-v2-radius-md)] border border-input bg-card px-3 text-sm text-foreground outline-none transition focus:border-ring focus:shadow-[var(--ds-v2-shadow-focus)]"
                  >
                    {countries.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Input
                    id={`${passenger.id}-${field.id}`}
                    value={value}
                    inputMode={field.type === "cpf" || field.type === "phone" ? "numeric" : undefined}
                    placeholder={field.placeholder}
                    onChange={(e) => onChange(field.id, maskValue(field.type, e.target.value))}
                    className={cn(
                      "h-11 rounded-[var(--ds-v2-radius-md)] bg-card text-sm transition focus-visible:shadow-[var(--ds-v2-shadow-focus)]",
                      showError && "border-destructive",
                      touched && valid && "border-success-border bg-success-surface",
                    )}
                  />
                )}

                {showError && (
                  <p className="flex items-center gap-1 text-xs text-destructive">
                    <CircleAlert className="size-3.5" aria-hidden /> Preencha este campo corretamente.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
