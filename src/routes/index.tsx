import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, Lock, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepToggle } from "@/components/checkout/StepToggle";
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
  const [step, setStep] = useState<1 | 2>(1);
  const [accepted, setAccepted] = useState(false);
  const [openIds, setOpenIds] = useState<string[]>(passengers.map((p) => p.id));
  const [values, setValues] = useState<Record<string, PassengerValues>>({});

  // Paginação dos formulários
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(passengers.length / itemsPerPage);
  const currentPassengers = passengers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Toggle de apresentação para simular diferentes fluxos
  type PresentationMode = "form-a" | "form-b" | "no-form";
  const [mode, setMode] = useState<PresentationMode>("form-a");

  const progress = useMemo(
    () => passengers.map((p) => passengerProgress(p, values[p.id] ?? {})),
    [values],
  );
  const completedCount = progress.filter((p) => p.complete).length;
  const allComplete = completedCount === passengers.length;
  const showStepToggle = mode !== "no-form" && accepted;

  const update = (pid: string, fieldId: string, value: string) =>
    setValues((prev) => ({ ...prev, [pid]: { ...(prev[pid] ?? {}), [fieldId]: value } }));

  // Ao aceitar os termos, a tela desliza sozinha para o preenchimento, se houver formulário.
  useEffect(() => {
    if (!accepted || mode === "no-form") return;
    const t = setTimeout(() => {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 550);
    return () => clearTimeout(t);
  }, [accepted, mode]);

  return (
    <div className="min-h-screen pb-28">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <span className="text-sm font-bold tracking-tight text-gradient-brand">Paytour</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-full border border-border bg-secondary p-1 text-xs">
              <button
                className={cn("rounded-full px-3 py-1 font-medium transition-colors", mode === "form-a" ? "bg-background shadow-sm" : "text-muted-foreground")}
                onClick={() => setMode("form-a")}
              >
                Opção 1
              </button>
              <button
                className={cn("rounded-full px-3 py-1 font-medium transition-colors", mode === "form-b" ? "bg-background shadow-sm" : "text-muted-foreground")}
                onClick={() => {
                  setMode("form-b");
                  setStep(1);
                }}
              >
                Opção 2
              </button>
              <button
                className={cn("rounded-full px-3 py-1 font-medium transition-colors", mode === "no-form" ? "bg-background shadow-sm" : "text-muted-foreground")}
                onClick={() => {
                  setMode("no-form");
                  setStep(1); // Garante que volta pra tela de termos
                }}
              >
                Sem Formulário
              </button>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Lock className="size-3.5" aria-hidden /> Compra segura
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              {step === 1 ? "Termos de uso e resumo da compra" : "Dados dos passageiros"}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {step === 1
                ? "Leia e aceite os termos — a próxima etapa abre automaticamente."
                : `Preencha os dados de cada passageiro. ${completedCount} de ${passengers.length} concluídos.`}
            </p>
          </div>
          {showStepToggle && <StepToggle step={step} onChange={setStep} formsEnabled={accepted} />}
        </div>

        {step === 1 ? (
          <div
            key="terms"
            className={cn(
              "mt-6 animate-in fade-in slide-in-from-left-4 duration-300",
              mode === "form-b" ? "block" : "grid gap-6 lg:grid-cols-[1.4fr_1fr]"
            )}
          >
            <TermsStep accepted={accepted} onAcceptedChange={setAccepted} />
            {mode !== "form-b" && <OrderSummary />}
          </div>
        ) : (
          <div
            key="forms"
            className="mt-6 animate-in space-y-6 fade-in slide-in-from-right-4 duration-300"
          >
            {mode === "form-b" && <OrderSummary />}

            <div className="space-y-4">
              {currentPassengers.map((p) => (
                <PassengerCard
                  key={p.id}
                  passenger={p}
                  values={values[p.id] ?? {}}
                  open={openIds.includes(p.id)}
                  onToggle={() =>
                    setOpenIds((prev) =>
                      prev.includes(p.id) ? prev.filter((id) => id !== p.id) : [...prev, p.id]
                    )
                  }
                  onChange={(field, value) => update(p.id, field, value)}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border pt-4">
                <span className="text-sm font-medium text-muted-foreground">
                  {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, passengers.length)} de {passengers.length} passageiros
                </span>
                
                <div className="flex items-center gap-1.5">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3 gap-1 text-muted-foreground hover:text-foreground"
                    disabled={currentPage === 1}
                    onClick={() => {
                      setCurrentPage((p) => Math.max(1, p - 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <ChevronLeft className="size-4" aria-hidden /> Anterior
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={cn(
                        "h-8 min-w-8 rounded-md text-sm font-medium transition-colors",
                        currentPage === page 
                          ? "bg-primary text-primary-foreground" 
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3 gap-1 text-muted-foreground hover:text-foreground"
                    disabled={currentPage === totalPages}
                    onClick={() => {
                      setCurrentPage((p) => Math.min(totalPages, p + 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Próxima <ChevronRight className="size-4" aria-hidden />
                  </Button>
                </div>
              </div>
            )}

            <Button variant="ghost" onClick={() => setStep(1)} className="mt-6 text-muted-foreground">
              <ArrowLeft className="size-4" aria-hidden /> Voltar aos termos
            </Button>
          </div>
        )}
      </main>

      <footer className="fixed inset-x-0 bottom-0 border-t border-border bg-card/95 backdrop-blur z-50">
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
                  ? mode !== "no-form" ? "Termos aceitos — abrindo o formulário…" : "Termos aceitos"
                  : "Aceite os termos de uso para continuar"
                : allComplete
                  ? "Todos os passageiros preenchidos"
                  : `Faltam ${passengers.length - completedCount} passageiro(s)`}
            </span>

            <Button 
              size="lg" 
              disabled={step === 1 ? (mode !== "no-form" ? true : !accepted) : !allComplete} 
              className="min-w-52"
            >
              <ShoppingCart className="size-4" aria-hidden /> Adicionar no carrinho
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

