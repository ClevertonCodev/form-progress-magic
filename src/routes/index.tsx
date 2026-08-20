import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Lock, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stepper } from "@/components/checkout/Stepper";
import { TermsStep } from "@/components/checkout/TermsStep";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { PassengerCard, passengerProgress, type PassengerValues } from "@/components/checkout/PassengerCard";
import { passengers, subtotal } from "@/lib/checkout-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Checkout Paytour — Termos e dados dos passageiros" },
      {
        name: "description",
        content:
          "Finalize sua reserva em duas etapas: aceite os termos de uso e confira o resumo, depois preencha os dados dos passageiros.",
      },
      { property: "og:title", content: "Checkout Paytour — Termos e dados dos passageiros" },
      {
        property: "og:description",
        content:
          "Fluxo de compra em duas etapas: termos de uso e resumo do carrinho, depois o preenchimento dos passageiros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const [step, setStep] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [openId, setOpenId] = useState<string | null>(passengers[0].id);
  const [values, setValues] = useState<Record<string, PassengerValues>>({});

  const progress = useMemo(
    () => passengers.map((p) => passengerProgress(p, values[p.id] ?? {})),
    [values],
  );
  const completedCount = progress.filter((p) => p.complete).length;
  const allComplete = completedCount === passengers.length;

  const update = (pid: string, fieldId: string, value: string) =>
    setValues((prev) => ({ ...prev, [pid]: { ...(prev[pid] ?? {}), [fieldId]: value } }));

  const goToForms = () => {
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pb-28">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <span className="text-sm font-bold tracking-tight text-gradient-brand">Paytour</span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Lock className="size-3.5" aria-hidden /> Compra segura
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Stepper current={step} />

        <h1 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">
          {step === 1 ? "Termos de uso e resumo da compra" : "Dados dos passageiros"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {step === 1
            ? "Confira o que você está comprando e aceite os termos para continuar."
            : `Preencha os dados de cada passageiro. ${completedCount} de ${passengers.length} concluídos.`}
        </p>

        {step === 1 ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <TermsStep accepted={accepted} onAcceptedChange={setAccepted} />
            <OrderSummary />
          </div>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4">
              {passengers.map((p) => (
                <PassengerCard
                  key={p.id}
                  passenger={p}
                  values={values[p.id] ?? {}}
                  open={openId === p.id}
                  onToggle={() => setOpenId(openId === p.id ? null : p.id)}
                  onChange={(field, value) => update(p.id, field, value)}
                />
              ))}
            </div>
            <div className="space-y-4 lg:sticky lg:top-6 lg:self-start">
              <OrderSummary />
              <Button
                variant="ghost"
                onClick={() => setStep(1)}
                className="w-full text-muted-foreground"
              >
                <ArrowLeft className="size-4" aria-hidden /> Voltar aos termos
              </Button>
            </div>
          </div>
        )}
      </main>

      <footer className="fixed inset-x-0 bottom-0 border-t border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div>
            <span className="block text-xs font-medium text-muted-foreground">Subtotal</span>
            <span className="text-lg font-bold text-foreground tabular-nums">{subtotal}</span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={cn(
                "hidden text-xs font-medium sm:block",
                step === 1
                  ? accepted
                    ? "text-success"
                    : "text-warning"
                  : allComplete
                    ? "text-success"
                    : "text-warning",
              )}
            >
              {step === 1
                ? accepted
                  ? "Termos aceitos"
                  : "Aceite os termos de uso para continuar"
                : allComplete
                  ? "Todos os passageiros preenchidos"
                  : `Faltam ${passengers.length - completedCount} passageiro(s)`}
            </span>

            {step === 1 ? (
              <Button size="lg" disabled={!accepted} onClick={goToForms} className="min-w-52">
                Continuar <ArrowRight className="size-4" aria-hidden />
              </Button>
            ) : (
              <Button size="lg" disabled={!allComplete} className="min-w-52">
                <ShoppingCart className="size-4" aria-hidden /> Adicionar no carrinho
              </Button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
