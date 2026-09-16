"use client";

import { Star } from "lucide-react";

interface Testimonial {
  initials: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  niche: string;
}

const testimonials: Testimonial[] = [
  {
    initials: "CM",
    name: "Carlos Mendes",
    role: "Dono — Burger House",
    niche: "LANCHONETE",
    rating: 5,
    text: "Antes os clientes ficavam perguntando o cardápio no WhatsApp o tempo todo. Agora tenho um site com tudo organizado e recebo os pedidos direto. Valeu cada centavo.",
  },
  {
    initials: "RP",
    name: "Rafael Pinheiro",
    role: "Proprietário — Barbearia Estilo",
    niche: "BARBEARIA",
    rating: 5,
    text: "O Sidney entregou exatamente o que eu precisava: um site bonito, rápido no celular e com botão de agendamento. Meu movimento aumentou porque os clientes encontram tudo fácil.",
  },
  {
    initials: "AM",
    name: "Ana Moura",
    role: "Proprietária — Studio Ana M.",
    niche: "SALÃO DE BELEZA",
    rating: 5,
    text: "Profissional demais! Explicou tudo com clareza, não usou termos difíceis e entregou no prazo. Minhas clientes adoram o site e eu consigo mostrar meu trabalho de forma elegante.",
  },
  {
    initials: "FO",
    name: "Fernanda Oliveira",
    role: "Confeiteira Autônoma",
    niche: "CONFEITARIA",
    rating: 5,
    text: "Tinha medo de investir em site achando que era caro demais. O Sidney me orientou certinho, o resultado ficou lindo e já recebi encomendas pelo site na primeira semana.",
  },
  {
    initials: "MS",
    name: "Marcos Souza",
    role: "Gestor — Clínica Saúde Total",
    niche: "CLÍNICA",
    rating: 5,
    text: "Rápido, profissional e comunicativo. O site ficou com uma aparência séria e moderna, algo que transmite confiança para nossos pacientes desde o primeiro acesso.",
  },
  {
    initials: "LF",
    name: "Luciana Ferreira",
    role: "Proprietária — Espaço Bella",
    niche: "ESTÉTICA",
    rating: 5,
    text: "Desde que lancei o site, minha agenda ficou muito mais cheia. As clientes chegam já sabendo os preços e os serviços, então o atendimento fica muito mais rápido e tranquilo.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="size-3.5 fill-primary text-primary"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-24 bg-card/20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <p className="sys-tag mb-3 sm:mb-4 text-[10px] sm:text-xs">
            O QUE DIZEM NOSSOS CLIENTES
          </p>
          <h2 className="max-w-3xl font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95]">
            RESULTADOS QUE<br />
            <span className="text-primary">FALAM POR SI.</span>
          </h2>
          <p className="mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Clientes reais que transformaram sua presença digital com a MaximoSistemas
            e viram resultados concretos no dia a dia do negócio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-background p-6 sm:p-7 flex flex-col justify-between group transition-colors hover:bg-muted"
            >
              <div>
                {/* Niche badge */}
                <span className="inline-block font-mono text-[9px] tracking-widest text-primary mb-4 uppercase">
                  {t.niche}
                </span>

                {/* Quote */}
                <blockquote className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="size-10 shrink-0 bg-primary/10 border border-primary/30 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="font-display text-sm text-primary">{t.initials}</span>
                </div>

                <div className="min-w-0">
                  <p className="font-display text-base text-foreground leading-tight truncate">
                    {t.name}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground truncate">
                    {t.role}
                  </p>
                  <div className="mt-1">
                    <StarRating count={t.rating} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            Seja o próximo negócio a ter resultados como esses.{" "}
            <a
              href="#contato"
              className="text-primary hover:underline"
            >
              Fale com a gente →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

