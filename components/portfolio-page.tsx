"use client";

import Image from "next/image";
import { ArrowUpRight, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AgentParticleCanvas } from "@/components/landing/agent-particle-canvas";
import { AnimatedSphere } from "@/components/landing/animated-sphere";
import { AnimatedTetrahedron } from "@/components/landing/animated-tetrahedron";
import { AnimatedWave } from "@/components/landing/animated-wave";

const navItems = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Processo", "#processo"],
  ["Portfólio", "#portfolio"],
  ["Contato", "#contato"],
];

const services = [
  ["01", "Produtos digitais", "Interfaces rápidas, acessíveis e pensadas para transformar ideias em experiências que as pessoas querem usar."],
  ["02", "Sites que convertem", "Landing pages e sites institucionais com estratégia, design e código — do primeiro wireframe ao deploy."],
  ["03", "Sistemas sob medida", "Dashboards, ferramentas internas e plataformas personalizadas para simplificar operações reais."],
  ["04", "Evolução contínua", "Manutenção, performance e novas funcionalidades para o produto continuar crescendo com segurança."],
];

const projects = [
  {
    name: "DR. DIOGO GONZAGA",
    type: "Site Institucional & Clínica Médica",
    description: "Plataforma digital para centro médico com interface moderna, agendamento facilitado e navegação focada em conversão.",
    color: "green",
    href: "https://clinica-dr-diogo.vercel.app/",
    isExternal: true,
    badge: "AO VIVO",
  },
  {
    name: "NOVA / Dashboard",
    type: "Produto digital & SaaS",
    description: "Painel operacional para acompanhar métricas, KPIs e tomar decisões estratégicas com clareza em tempo real.",
    color: "blue",
    href: "#contato",
    isExternal: false,
    badge: "CASE",
  },
  {
    name: "PULSE / Plataforma",
    type: "Sistema sob medida",
    description: "Fluxo centralizado para reduzir tarefas operacionais manuais e conectar equipes com máxima produtividade.",
    color: "white",
    href: "#contato",
    isExternal: false,
    badge: "CASE",
  },
];

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme !== "light";

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      {/* Header & Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        {/* Top announcement bar */}
        <div className="mx-auto flex h-7 sm:h-8 max-w-7xl items-center justify-between border-b border-border px-4 sm:px-6 font-mono text-[9px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground md:px-10">
          <span className="truncate">DEV.PORTFOLIO / BUILD 2026</span>
          <span className="flex items-center gap-1.5 shrink-0">
            <b className="text-green text-[8px] sm:text-[10px]">●</b>
            <span className="hidden xs:inline sm:inline">DISPONÍVEL PARA NOVOS PROJETOS</span>
            <span className="inline xs:hidden sm:hidden">DISPONÍVEL</span>
          </span>
        </div>

        {/* Main Navbar */}
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-10">
          <a href="#inicio" className="group flex items-center gap-2.5 sm:gap-3">
            <div className="relative flex size-8 sm:size-9 shrink-0 items-center justify-center overflow-hidden rounded border border-primary/40 bg-black/70 p-1 shadow-[0_0_15px_rgba(33,150,243,0.3)] transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]">
              <Image
                src="/images/logo/logo.png"
                alt="Logo MaximoSistemas"
                width={36}
                height={36}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-display-normal text-lg sm:text-xl tracking-[0.12em] sm:tracking-[0.16em]">
              MAXIMOSISTEMAS
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
              >
                {label.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label={mounted ? `Ativar modo ${isDark ? "claro" : "escuro"}` : "Alternar tema"}
              title={mounted ? `Modo ${isDark ? "claro" : "escuro"}` : "Alternar tema"}
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex size-8 sm:size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {mounted && (isDark ? <Sun className="size-4" /> : <Moon className="size-4" />)}
              <span className="sr-only">Alternar entre modo claro e escuro</span>
            </button>

            <a
              href="#contato"
              className="hidden sm:inline-flex bg-primary px-3.5 sm:px-4 py-2 font-mono text-[10px] sm:text-[11px] font-semibold tracking-widest text-primary-foreground transition-opacity hover:opacity-90 md:block"
            >
              VAMOS CONVERSAR →
            </a>

            {/* Mobile hamburger button */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex size-8 sm:size-9 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <nav className="border-t border-border bg-background/98 px-4 sm:px-6 py-4 backdrop-blur-lg md:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-border/50 py-3 font-mono text-xs sm:text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {label.toUpperCase()}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-3 flex flex-col gap-3">
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="w-full bg-primary py-3 text-center font-mono text-xs font-semibold tracking-widest text-primary-foreground"
              >
                VAMOS CONVERSAR →
              </a>
              <div className="flex justify-center gap-4 pt-2 text-muted-foreground">
                <a
                  href="https://wa.me/5582920009519"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-primary p-2"
                >
                  <FaWhatsapp className="size-5" />
                </a>
                <a
                  href="https://www.instagram.com/xxsrmaximoxx"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-primary p-2"
                >
                  <FaInstagram className="size-5" />
                </a>
                <a
                  href="mailto:sidney@maximosistemas.com"
                  aria-label="Email"
                  className="hover:text-primary p-2"
                >
                  <Mail className="size-5" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative flex min-h-[92vh] sm:min-h-screen items-center border-b border-border px-4 sm:px-6 md:px-10 pb-16 pt-24 sm:pt-32 md:pt-36"
      >
        <div className="absolute inset-0 opacity-70 pointer-events-none">
          <AgentParticleCanvas />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="sys-tag mb-4 sm:mb-8 text-[10px] sm:text-xs">
              DESENVOLVEDOR FULL-STACK · BRASIL
            </p>
            <h1 className="max-w-4xl font-display text-5xl sm:text-7xl md:text-8xl lg:text-[clamp(4.5rem,8.5vw,9.5rem)] leading-[0.88] sm:leading-[0.84] tracking-[-0.03em]">
              IDEIAS<br />
              <span className="text-primary">EM PRODUTO.</span>
            </h1>
            <p className="mt-6 sm:mt-9 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Eu construo sites, sistemas e experiências digitais que unem estratégia, design e tecnologia para resolver problemas de verdade.
            </p>
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#portfolio"
                className="w-full sm:w-auto text-center justify-center bg-primary px-6 py-3.5 sm:py-4 font-mono text-xs font-semibold tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
              >
                VER PORTFÓLIO <ArrowUpRight className="ml-1.5 inline h-4 w-4" />
              </a>
              <a
                href="#contato"
                className="w-full sm:w-auto text-center justify-center border border-border-bright px-6 py-3.5 sm:py-4 font-mono text-xs tracking-widest transition-colors hover:border-primary hover:text-primary"
              >
                INICIAR UM PROJETO
              </a>
            </div>
          </div>
          <div className="relative h-60 sm:h-72 lg:h-80 w-full flex items-center justify-center">
            <AnimatedSphere />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <p className="sys-tag mb-3 sm:mb-5 text-[10px] sm:text-xs">O QUE EU FAÇO</p>
              <h2 className="max-w-2xl font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
                DO CONCEITO<br />
                <span className="text-primary">AO CÓDIGO.</span>
              </h2>
            </div>
            <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Soluções digitais sob medida para marcas, startups e negócios que querem sair do lugar.
            </p>
          </div>
          <div className="grid border-t border-border grid-cols-1 md:grid-cols-2">
            {services.map(([number, title, text]) => (
              <article key={number} className="row-hover border-b border-border p-5 sm:p-7 md:p-8">
                <span className="font-mono text-xs text-primary">{number}</span>
                <h3 className="mt-6 sm:mt-10 font-display text-2xl sm:text-3xl md:text-4xl">{title}</h3>
                <p className="mt-3 sm:mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="grid border-b border-border grid-cols-1 md:grid-cols-2">
        <div className="border-b border-border md:border-b-0 md:border-r p-5 sm:p-8 md:p-12 flex flex-col justify-between">
          <div>
            <p className="sys-tag mb-4 sm:mb-8 text-[10px] sm:text-xs">COMO TRABALHO</p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] sm:leading-[0.88]">
              CLAREZA<br />
              ANTES DE<br />
              <span className="text-primary">CODAR.</span>
            </h2>
          </div>
        </div>
        <div className="relative min-h-[340px] sm:min-h-[380px] overflow-hidden p-5 sm:p-8 md:p-12">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <AnimatedWave />
          </div>
          <div className="relative z-10 space-y-6 sm:space-y-8">
            {[
              ["01", "Descoberta", "Entendo o contexto, os objetivos e o que precisa ser resolvido."],
              ["02", "Estratégia", "Organizo prioridades, escopo e uma direção visual funcional."],
              ["03", "Construção", "Desenvolvo em ciclos curtos, com comunicação transparente."],
              ["04", "Entrega", "Publico, documento e acompanho a evolução do produto."],
            ].map(([n, t, d]) => (
              <div key={n} className="flex gap-4 sm:gap-5">
                <span className="font-mono text-xs sm:text-sm text-primary pt-0.5">{n}</span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl">{t}</h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="sys-tag mb-3 sm:mb-5 text-[10px] sm:text-xs">TRABALHOS SELECIONADOS</p>
          <div className="mb-10 sm:mb-14 flex flex-col justify-between gap-3 sm:gap-5 md:flex-row md:items-end">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] sm:leading-[0.86]">
              PROJETOS<br />
              <span className="text-primary">COM PROPÓSITO.</span>
            </h2>
            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Uma seleção demonstrativa de produtos e experiências que posso construir com você.
            </p>
          </div>
          <div className="grid gap-px bg-border grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.name} className="group bg-background p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <a
                    href={project.href}
                    target={project.isExternal ? "_blank" : undefined}
                    rel={project.isExternal ? "noreferrer" : undefined}
                    className="block"
                  >
                    <div
                      className={`relative mb-5 sm:mb-7 flex h-48 sm:h-56 items-center justify-center overflow-hidden border border-border transition-colors group-hover:border-primary/60 ${
                        project.color === "blue"
                          ? "bg-primary/10"
                          : project.color === "green"
                          ? "bg-green/10"
                          : "bg-card"
                      }`}
                    >
                      {index === 0 ? (
                        <AnimatedTetrahedron />
                      ) : index === 1 ? (
                        <AnimatedWave />
                      ) : (
                        <AnimatedSphere />
                      )}
                      <span className="absolute left-3 top-3 font-mono text-[9px] sm:text-[10px] text-muted-foreground">
                        0{index + 1} / {project.badge}
                      </span>
                      {project.isExternal && (
                        <span className="absolute right-3 top-3 inline-flex items-center gap-1 bg-green/20 border border-green/40 px-2 py-0.5 font-mono text-[9px] text-green">
                          <b className="size-1.5 rounded-full bg-green animate-pulse" /> ONLINE
                        </span>
                      )}
                    </div>
                  </a>
                  <p className="font-mono text-[9px] sm:text-[10px] tracking-widest text-primary">
                    {project.type.toUpperCase()}
                  </p>
                  <h3 className="mt-2 sm:mt-3 font-display text-2xl sm:text-3xl">
                    <a
                      href={project.href}
                      target={project.isExternal ? "_blank" : undefined}
                      rel={project.isExternal ? "noreferrer" : undefined}
                      className="hover:text-primary transition-colors"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.href}
                  target={project.isExternal ? "_blank" : undefined}
                  rel={project.isExternal ? "noreferrer" : undefined}
                  className="mt-5 sm:mt-6 inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-widest text-foreground transition-colors group-hover:text-primary"
                >
                  {project.isExternal ? "ACESSAR SITE AO VIVO" : "VER PROJETO"} <ArrowUpRight className="h-3 w-3" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Differential Section */}
      <section className="grid border-b border-border grid-cols-1 md:grid-cols-2">
        <div className="border-b border-border p-5 sm:p-8 md:border-b-0 md:border-r md:p-12">
          <p className="sys-tag mb-4 sm:mb-8 text-[10px] sm:text-xs">STACK PRINCIPAL</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Figma", "Git"].map(
              (item) => (
                <span
                  key={item}
                  className="border border-border-bright px-3 sm:px-4 py-2 sm:py-3 font-mono text-[11px] sm:text-xs text-muted-foreground"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
        <div className="p-5 sm:p-8 md:p-12">
          <p className="sys-tag mb-4 sm:mb-8 text-[10px] sm:text-xs">O DIFERENCIAL</p>
          <h2 className="max-w-xl font-display text-4xl sm:text-5xl md:text-6xl leading-[0.9]">
            TECNOLOGIA<br />
            <span className="text-primary">COM INTENÇÃO.</span>
          </h2>
          <p className="mt-5 sm:mt-7 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
            Código bem escrito é só o começo. Meu foco é criar experiências rápidas, fáceis de entender e alinhadas ao que o seu negócio precisa.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative overflow-hidden px-4 sm:px-6 md:px-10 py-20 sm:py-28">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="sys-tag mb-4 sm:mb-7 text-[10px] sm:text-xs">VAMOS CONSTRUIR</p>
          <h2 className="max-w-5xl font-display text-5xl sm:text-7xl md:text-8xl lg:text-[clamp(4.5rem,9vw,9rem)] leading-[0.84] sm:leading-[0.82] break-words">
            TEM UM PROJETO?<br />
            <span className="text-primary">FALA COMIGO.</span>
          </h2>

          <div className="mt-10 sm:mt-12 flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border border-border p-4 sm:p-6 bg-card/40 backdrop-blur-sm">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">WhatsApp</p>
                <a
                  className="font-mono text-xs sm:text-sm text-foreground hover:text-primary transition-colors block truncate"
                  href="https://wa.me/5582920009519"
                  target="_blank"
                  rel="noreferrer"
                >
                  (82) 92000-9519
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">Instagram</p>
                <a
                  className="font-mono text-xs sm:text-sm text-foreground hover:text-primary transition-colors block truncate"
                  href="https://www.instagram.com/xxsrmaximoxx"
                  target="_blank"
                  rel="noreferrer"
                >
                  @xxsrmaximoxx
                </a>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">E-mail</p>
                <a
                  className="font-mono text-xs sm:text-sm text-foreground hover:text-primary transition-colors block break-all"
                  href="mailto:sidney@maximosistemas.com"
                >
                  sidney@maximosistemas.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="mailto:sidney@maximosistemas.com"
                className="w-full sm:w-auto text-center bg-primary px-7 py-4 sm:py-5 font-mono text-xs font-semibold tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
              >
                ENVIAR UMA MENSAGEM →
              </a>
              <div className="flex gap-3 justify-center sm:justify-start">
                <a
                  href="https://www.instagram.com/xxsrmaximoxx"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram @xxsrmaximoxx"
                  className="border border-border-bright p-3.5 sm:p-4 hover:border-primary hover:text-primary transition-colors"
                >
                  <FaInstagram className="size-5" aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/5582920009519"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp (82) 92000-9519"
                  className="border border-border-bright p-3.5 sm:p-4 hover:border-primary hover:text-primary transition-colors"
                >
                  <FaWhatsapp className="size-5" aria-hidden="true" />
                </a>
                <a
                  href="mailto:sidney@maximosistemas.com"
                  aria-label="E-mail sidney@maximosistemas.com"
                  className="border border-border-bright p-3.5 sm:p-4 hover:border-primary hover:text-primary transition-colors"
                >
                  <Mail className="size-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 sm:px-6 md:px-10 py-6 sm:py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 font-mono text-[9px] sm:text-[10px] tracking-widest text-muted-foreground text-center sm:text-left md:flex-row">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded border border-primary/40 bg-black/70 p-0.5 shadow-[0_0_10px_rgba(33,150,243,0.25)]">
              <Image
                src="/images/logo/logo-192.png"
                alt="Logo MaximoSistemas"
                width={24}
                height={24}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="truncate">© 2026 MAXIMOSISTEMAS — DESENVOLVIMENTO DIGITAL</span>
          </div>
          <span>FEITO COM CÓDIGO, CAFÉ E CURIOSIDADE.</span>
        </div>
      </footer>
    </main>
  );
}
