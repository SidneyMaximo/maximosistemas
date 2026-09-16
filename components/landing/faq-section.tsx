"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Qual é o valor para criar um site?",
    answer:
      "Os valores variam conforme o tipo de projeto. Uma página profissional começa a partir de R$ 800, um cardápio ou catálogo a partir de R$ 1.500, e sistemas sob medida são orçados após uma conversa para entender suas necessidades. Entre em contato sem compromisso para receber uma proposta personalizada.",
  },
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer:
      "Projetos mais simples, como uma página profissional ou cardápio, costumam ficar prontos em 7 a 14 dias úteis após o recebimento de todas as informações e materiais do cliente. Sistemas mais complexos têm prazo definido no início do projeto.",
  },
  {
    question: "Preciso entender de tecnologia para contratar?",
    answer:
      "Não! Você foca no seu negócio e nós cuidamos de toda a parte técnica: hospedagem, domínio, programação e publicação. Explicamos tudo de forma clara e simples, sem jargões complicados.",
  },
  {
    question: "O site funciona bem no celular?",
    answer:
      "Sim, todos os projetos são desenvolvidos com foco prioritário em dispositivos móveis (mobile-first). Mais de 80% dos acessos vêm de smartphones, então garantimos que o site carrega rápido e funciona perfeitamente em qualquer tamanho de tela.",
  },
  {
    question: "Posso atualizar o conteúdo do site depois?",
    answer:
      "Sim. Para atualizações pontuais, você pode acionar nosso suporte. Para quem precisa de manutenção frequente, temos planos mensais (Básico, Profissional e Premium) que incluem atualizações ilimitadas ou prioritárias, dependendo do plano escolhido.",
  },
  {
    question: "O que acontece com o domínio e a hospedagem?",
    answer:
      "Orientamos você na compra do domínio (seu endereço na internet, ex: seunegocio.com.br) e cuidamos da configuração e hospedagem. Você fica como proprietário do domínio e nós gerenciamos toda a infraestrutura técnica.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-24 bg-card/20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          {/* Left — Header */}
          <div>
            <p className="sys-tag mb-3 sm:mb-4 text-[10px] sm:text-xs">
              DÚVIDAS FREQUENTES
            </p>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95]">
              PERGUNTAS<br />
              <span className="text-primary">E RESPOSTAS.</span>
            </h2>
            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-sm">
              Respondemos as dúvidas mais comuns de quem está pensando em investir
              em um site para o seu negócio.
            </p>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-mono text-xs text-muted-foreground mb-3">
                Não encontrou sua resposta?
              </p>
              <a
                href="https://wa.me/5582920009519?text=Olá%2C%20MaximoSistemas!%20Tenho%20uma%20dúvida%20sobre%20a%20criação%20de%20um%20site."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary px-4 py-3 font-mono text-[10px] font-semibold tracking-widest text-primary-foreground hover:opacity-90 transition-opacity"
                aria-label="Perguntar pelo WhatsApp"
              >
                PERGUNTAR NO WHATSAPP →
              </a>
            </div>
          </div>

          {/* Right — Accordion */}
          <div>
            <dl className="divide-y divide-border">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index}>
                    <dt>
                      <button
                        type="button"
                        onClick={() => toggle(index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-primary group"
                      >
                        <span className="font-display text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors pr-2">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`size-5 shrink-0 text-primary transition-transform duration-200 mt-0.5 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </dt>
                    <dd
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 pb-5" : "max-h-0"
                      }`}
                      aria-hidden={!isOpen}
                    >
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

