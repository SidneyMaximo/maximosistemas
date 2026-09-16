"use client";

import { CheckCircle2, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  badge?: string;
  whatsappMsg: string;
  cta: string;
}

const plans: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    price: 150,
    period: "/mês",
    description: "Ideal para quem precisa manter o site sempre atualizado e funcionando.",
    features: [
      "Manutenção mensal do site",
      "Atualização de textos e imagens",
      "Suporte via WhatsApp",
      "Monitoramento de disponibilidade",
      "Backup mensal",
    ],
    highlight: false,
    whatsappMsg: "Olá, MaximoSistemas! Tenho interesse no Plano Básico de Serviços Contínuos (R$ 150/mês). Pode me dar mais detalhes?",
    cta: "CONTRATAR BÁSICO",
  },
  {
    id: "profissional",
    name: "Profissional",
    price: 350,
    period: "/mês",
    description: "A escolha certa para negócios que querem crescer com suporte completo.",
    features: [
      "Tudo do plano Básico",
      "Atualizações ilimitadas de conteúdo",
      "Adição de novas seções e páginas",
      "Otimização de velocidade (SEO)",
      "Relatório mensal de acesso",
      "Prioridade no atendimento",
    ],
    highlight: true,
    badge: "MAIS POPULAR",
    whatsappMsg: "Olá, MaximoSistemas! Tenho interesse no Plano Profissional de Serviços Contínuos (R$ 350/mês). Pode me dar mais detalhes?",
    cta: "CONTRATAR PROFISSIONAL",
  },
  {
    id: "premium",
    name: "Premium",
    price: 800,
    period: "/mês",
    description: "Para negócios que exigem evolução constante e suporte estratégico.",
    features: [
      "Tudo do plano Profissional",
      "Desenvolvimento de novas funcionalidades",
      "Integrações com sistemas externos",
      "Consultoria mensal de estratégia digital",
      "Atendimento prioritário 7 dias/semana",
      "Criação de campanhas e landing pages",
    ],
    highlight: false,
    whatsappMsg: "Olá, MaximoSistemas! Tenho interesse no Plano Premium de Serviços Contínuos (R$ 800/mês). Pode me dar mais detalhes?",
    cta: "CONTRATAR PREMIUM",
  },
];

export default function ContinuousServices() {
  return (
    <section className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <p className="sys-tag mb-3 sm:mb-4 text-[10px] sm:text-xs">
              SERVIÇOS CONTÍNUOS
            </p>
            <h2 className="max-w-2xl font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95]">
              SEU SITE SEMPRE<br />
              <span className="text-primary">ATUALIZADO E NO AR.</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Planos mensais para manter seu site funcionando perfeitamente,
            com suporte dedicado e atualizações contínuas.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col justify-between p-6 sm:p-8 transition-all ${
                plan.highlight
                  ? "bg-primary/5 border border-primary/40 shadow-[0_0_40px_rgba(33,150,243,0.08)]"
                  : "bg-background border border-transparent"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-primary px-3 py-1 font-mono text-[9px] font-semibold tracking-widest text-primary-foreground">
                    <Zap className="size-2.5" aria-hidden="true" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Plan name */}
                <p className="font-mono text-[10px] tracking-widest text-primary uppercase mb-2">
                  Plano
                </p>
                <h3 className="font-display text-3xl sm:text-4xl text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 mb-6 pb-6 border-b border-border flex items-end gap-1">
                  <span className="font-mono text-xs text-muted-foreground self-start mt-2">R$</span>
                  <span className="font-display text-5xl sm:text-6xl text-foreground leading-none">
                    {plan.price}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground mb-1">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle2
                        className="size-3.5 text-primary shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href={`https://wa.me/5582920009519?text=${encodeURIComponent(plan.whatsappMsg)}`}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3.5 font-mono text-[10px] sm:text-[11px] font-semibold tracking-widest transition-opacity hover:opacity-90 ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground"
                    : "border border-border-bright text-foreground hover:border-primary hover:text-primary"
                }`}
                aria-label={`Contratar ${plan.name} pelo WhatsApp`}
              >
                <FaWhatsapp className="size-4" aria-hidden="true" />
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center font-mono text-[10px] text-muted-foreground">
          * Planos mensais com renovação automática. Cancele quando quiser, sem multa.
        </p>
      </div>
    </section>
  );
}

