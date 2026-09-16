"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const stats = [
  { value: "30+", label: "Projetos entregues" },
  { value: "8+", label: "Anos de experiência" },
  { value: "90%", label: "Clientes satisfeitos" },
];

export default function AboutSection() {
  return (
    <section className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-24 bg-card/20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <p className="sys-tag mb-3 sm:mb-4 text-[10px] sm:text-xs">
          QUEM SOMOS
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text + Stats */}
          <div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95]">
              TECNOLOGIA COM<br />
              <span className="text-primary">PROPÓSITO HUMANO.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-lg">
              Sou Sidney Máximo, desenvolvedor especializado em soluções digitais
              e sistemas sob medida. Acredito que toda empresa, independente do
              tamanho, merece uma presença online profissional, acessível e que
              realmente funcione no dia a dia.
            </p>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-lg">
              Crio sites e sistemas pensados para facilitar a vida do dono do
              negócio — sem termos técnicos, sem complicações, com foco total
              em resultados práticos.
            </p>

            {/* Stats Grid */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-px bg-border">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background p-4 sm:p-6 text-center"
                >
                  <p className="font-display text-3xl sm:text-5xl text-primary leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-4">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Fale comigo:
              </span>
              <a
                href="https://wa.me/5582920009519"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp (82) 92000-9519"
                className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary px-3 py-2"
              >
                <FaWhatsapp className="size-4 text-green" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/xxsrmaximoxx"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram @xxsrmaximoxx"
                className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary px-3 py-2"
              >
                <FaInstagram className="size-4" />
                @xxsrmaximoxx
              </a>
              <a
                href="mailto:sidney@maximosistemas.com"
                aria-label="Email sidney@maximosistemas.com"
                className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary px-3 py-2"
              >
                <Mail className="size-4" />
                E-mail
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative corner elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />

              {/* Photo area */}
              <div
                className="w-full aspect-4/5 border border-border bg-muted relative overflow-hidden"
                aria-label="Foto do fundador"
              >
                <Image
                  src="/images/Foto profissional.PNG"
                  alt="Sidney Máximo"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 bg-primary/10 border-t border-primary/30 py-2 text-center">
                  <span className="font-mono text-[9px] text-primary tracking-widest">
                    MAXIMOSISTEMAS / MACEIÓ – AL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

