import { CalendarDays, Clock, Sparkles, Tag } from "lucide-react";
import { cartItems, discountedTotal, subtotal } from "@/lib/checkout-data";

export function OrderSummary() {
  return (
    <aside className="surface-card overflow-hidden">
      <header className="flex items-center gap-2 border-b border-border bg-gradient-brand-subtle px-5 py-4">
        <Sparkles className="size-4 text-accent-foreground" aria-hidden />
        <h2 className="text-sm font-semibold tracking-tight text-accent-foreground">Resumo da compra</h2>
      </header>

      <div className="space-y-5 px-5 py-5">
        {cartItems.map((item) => (
          <div key={item.id} className="space-y-4">
            <h3 className="text-base font-semibold text-foreground">{item.name}</h3>

            <dl className="space-y-1.5">
              {item.lines.map((line) => (
                <div key={line.label} className="flex items-baseline justify-between gap-4 text-sm">
                  <dt className="text-muted-foreground">{line.label}</dt>
                  <dd className="font-medium text-foreground tabular-nums">{line.value}</dd>
                </div>
              ))}
            </dl>

            <div className="grid grid-cols-3 gap-2 rounded-[var(--ds-v2-radius-lg)] bg-secondary p-3">
              <Meta icon={<CalendarDays className="size-3.5" />} label="Data" value={item.date} />
              <Meta icon={<Clock className="size-3.5" />} label="Horário" value={item.time} />
              <Meta icon={<Tag className="size-3.5" />} label="Opcionais" value={item.optional} />
            </div>
          </div>
        ))}
      </div>

      <footer className="space-y-2 border-t border-border bg-surface-subtle px-5 py-4">
        <div className="flex items-baseline justify-between text-sm">
          <span className="font-medium text-muted-foreground">Subtotal</span>
          <span className="text-base font-semibold text-foreground tabular-nums">{subtotal}</span>
        </div>
        <div className="flex items-baseline justify-between gap-3 rounded-[var(--ds-v2-radius-md)] border border-success-border bg-success-surface px-3 py-2">
          <span className="text-xs font-medium leading-snug text-success">
            No depósito em conta, Pix ou Pix parcelado
          </span>
          <span className="text-base font-bold text-success tabular-nums">{discountedTotal}</span>
        </div>
      </footer>
    </aside>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="space-y-1">
      <span className="flex items-center gap-1 text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
        {icon}
        {label}
      </span>
      <span className="block text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}
