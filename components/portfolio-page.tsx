"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Scissors,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Sun,
  Utensils,
  X,
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AgentParticleCanvas } from "@/components/landing/agent-particle-canvas";

const navItems = [
  ["Início", "#inicio"],
  ["Soluções", "#solucoes"],
  ["Demonstrações", "#demonstracoes"],
  ["Como funciona", "#como-funciona"],
  ["Contato", "#contato"],
];

const targetAudiences = [
  {
    icon: Utensils,
    title: "Lanchonetes & Restaurantes",
    description:
      "Cardápio online, localização, horários e pedidos pelo WhatsApp em um só lugar, sem taxas por pedido.",
    badge: "DELIVERY & BALCÃO",
  },
  {
    icon: Scissors,
    title: "Barbearias",
    description:
      "Serviços, preços, fotos dos cortes e informações claras para facilitar novos agendamentos todos os dias.",
    badge: "AGENDAMENTO FÁCIL",
  },
  {
    icon: Sparkles,
    title: "Salões e profissionais autônomos",
    description:
      "Apresente seu trabalho com fotos de qualidade, tire dúvidas frequentes e receba contatos diretos no seu celular.",
    badge: "PORTFÓLIO & CONTATO",
  },
  {
    icon: Store,
    title: "Pequenos negócios & Serviços",
    description:
      "Uma página profissional para explicar o que você faz, passar credibilidade e transformar visitas em oportunidades.",
    badge: "PRESENÇA DIGITAL",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Mais confiança",
    description: "Apresente sua empresa com visual profissional e passe segurança imediata para quem não te conhece.",
  },
  {
    icon: Phone,
    title: "Contato fácil",
    description: "Deixe botão de WhatsApp, localização no mapa e horários de funcionamento sempre à mão.",
  },
  {
    icon: FileText,
    title: "Informação organizada",
    description: "Mostre serviços, preços, fotos e diferenciais de forma rápida, sem o cliente precisar perguntar o básico.",
  },
  {
    icon: Smartphone,
    title: "Acesso pelo celular",
    description: "Mais de 80% dos acessos vêm de smartphones. Seu site carrega rápido e com navegação suave.",
  },
  {
    icon: Layers,
    title: "Solução sob medida",
    description: "Construa apenas o que seu negócio realmente precisa, sem mensalidades abusivas ou funções inúteis.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Página profissional",
    description:
      "Uma página completa com apresentação do seu negócio, serviços, fotos, localização, horários e botão de contato.",
    idealFor: "Ideal para empresas locais, profissionais autônomos e prestadores de serviços.",
    formGoal: "apresentar minha empresa",
  },
  {
    number: "02",
    title: "Cardápio ou catálogo online",
    description:
      "Organize seus produtos ou serviços com fotos, preços e categorias, facilitando o atendimento e pedidos pelo WhatsApp.",
    idealFor: "Ideal para lanchonetes, restaurantes, confeitarias e comércios locais.",
    formGoal: "criar cardápio ou catálogo",
  },
  {
    number: "03",
    title: "Sistema sob medida",
    description:
      "Quando seu negócio precisa de uma ferramenta específica para organizar agendamentos, clientes ou rotinas diárias.",
    idealFor: "Ideal para negócios que querem automatizar processos e ganhar tempo.",
    formGoal: "criar um sistema personalizado",
  },
];

const conceptualDemos = [
  {
    id: "lanchonete",
    niche: "LANCHONETES & FAST-FOOD",
    name: "Burger & Brasa",
    conceptType: "DEMONSTRAÇÃO CONCEITUAL",
    problemSolved:
      "Fim do cardápio em PDF pesado e de difícil leitura. O cliente navega por categorias (Hambúrgueres, Bebidas, Combos), vê fotos reais e clica para enviar o pedido montado direto no WhatsApp.",
    features: ["Cardápio com fotos e valores", "Botão de pedido direto no WhatsApp", "Horário de funcionamento em tempo real", "Mapa e taxa de entrega"],
  },
  {
    id: "barbearia",
    niche: "BARBEARIAS & ESTILO",
    name: "Navalha Nobre Barbearia",
    conceptType: "DEMONSTRAÇÃO CONCEITUAL",
    problemSolved:
      "Clientes que não sabem os preços ou horários agora encontram tabela completa de serviços (Corte, Barba, Acabamento, Tratamentos), fotos dos trabalhos e botão direto para agendamento.",
    features: ["Tabela de serviços e preços", "Galeria de cortes recentes", "Link rápido para agendamento", "Localização com rota fácil"],
  },
  {
    id: "salao",
    niche: "SALÃO DE BELEZA & ESTÉTICA",
    name: "Studio Bella & Estética",
    conceptType: "DEMONSTRAÇÃO CONCEITUAL",
    problemSolved:
      "Apresentação sofisticada de procedimentos de estética, cabelo e unhas com fotos de antes e depois, dúvidas frequentes respondidas e canal direto para orçamentos e agendamentos.",
    features: ["Portfólio de procedimentos", "Avaliações e dúvidas frequentes", "Agendamento pelo WhatsApp", "Endereço e comodidades do espaço"],
  },
];

const realProjects = [
  {
    name: "DR. DIOGO GONZAGA",
    type: "Site Institucional & Clínica Médica",
    description:
      "Plataforma digital completa para centro médico e clínica de cirurgia plástica com interface moderna, agendamento facilitado e navegação focada em conversão.",
    href: "https://clinica-dr-diogo.vercel.app/",
    badge: "PROJETO REAL NO AR",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Conversa inicial",
    description: "Entendemos seu negócio, seus objetivos e o que seus clientes mais precisam encontrar.",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Organizamos as informações, as páginas e a melhor forma de apresentar sua empresa com clareza.",
  },
  {
    number: "03",
    title: "Criação",
    description: "Desenvolvemos uma solução visual, rápida e adaptada ao celular e ao estilo do seu negócio.",
  },
  {
    number: "04",
    title: "Publicação",
    description: "Colocamos o site no ar no seu domínio e orientamos você sobre como divulgar e usar.",
  },
];

const differentials = [
  {
    title: "Comunicação clara",
    description: "Sem termos técnicos complicados. Falamos a língua do seu negócio do início ao fim.",
  },
  {
    title: "Solução pensada para o negócio",
    description: "Não criamos páginas genéricas: cada botão e informação tem o objetivo de atrair novos clientes.",
  },
  {
    title: "Foco em experiência no celular",
    description: "Layout fluido e rápido, desenhado prioritariamente para quem acessa pelo smartphone.",
  },
  {
    title: "Suporte para evolução futura",
    description: "Seu negócio cresceu? Seu site pode receber novas páginas, cardápios e funções sem complicações.",
  },
  {
    title: "Atendimento próximo e transparente",
    description: "Você fala diretamente com quem planeja e desenvolve seu projeto, com prazos claros e suporte direto.",
  },
];

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    segment: "Lanchonete / Restaurante",
    city: "",
    goal: "apresentar minha empresa",
    contact: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme !== "light";

  const handleSelectGoal = (goalValue: string) => {
    setFormData((prev) => ({ ...prev, goal: goalValue }));
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      alert("Por favor, preencha seu nome e um contato (WhatsApp ou e-mail).");
      return;
    }

    const message = `*Olá, MaximoSistemas! Gostaria de um orçamento para o meu negócio.*%0A%0A` +
      `👤 *Nome:* ${encodeURIComponent(formData.name)}%0A` +
      `🏢 *Negócio:* ${encodeURIComponent(formData.businessName || "Não informado")}%0A` +
      `🏷️ *Segmento:* ${encodeURIComponent(formData.segment)}%0A` +
      `📍 *Cidade/Região:* ${encodeURIComponent(formData.city || "Não informado")}%0A` +
      `🎯 *Objetivo do site:* ${encodeURIComponent(formData.goal)}%0A` +
      `📱 *Contato:* ${encodeURIComponent(formData.contact)}`;

    const whatsappUrl = `https://wa.me/5582920009519?text=${message}`;
    setFormSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      alert("Por favor, preencha seu nome e um contato (WhatsApp ou e-mail).");
      return;
    }

    const subject = encodeURIComponent(`Solicitação de Site - ${formData.businessName || formData.name}`);
    const body = encodeURIComponent(
      `Olá, Sidney / MaximoSistemas!\n\n` +
      `Gostaria de uma orientação e orçamento para criação de um site.\n\n` +
      `Nome: ${formData.name}\n` +
      `Negócio: ${formData.businessName}\n` +
      `Segmento: ${formData.segment}\n` +
      `Cidade: ${formData.city}\n` +
      `Objetivo: ${formData.goal}\n` +
      `Contato: ${formData.contact}\n`
    );

    setFormSubmitted(true);
    window.location.href = `mailto:sidney@maximosistemas.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      {/* ── 1. CABEÇALHO & NAVBAR ─────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        {/* Top announcement bar */}
        <div className="mx-auto flex h-7 sm:h-8 max-w-7xl items-center justify-between border-b border-border px-4 sm:px-6 font-mono text-[9px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground md:px-10">
          <span className="truncate">MAXIMOSISTEMAS / SITES PARA PEQUENOS NEGÓCIOS</span>
          <span className="flex items-center gap-1.5 shrink-0">
            <b className="text-green text-[8px] sm:text-[10px]">●</b>
            <span className="hidden xs:inline sm:inline">DISPONÍVEL PARA NOVOS CLIENTES</span>
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
            <div className="flex flex-col">
              <span className="font-display-normal text-base sm:text-xl tracking-[0.12em] sm:tracking-[0.16em] leading-tight">
                MAXIMOSISTEMAS
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] text-muted-foreground tracking-widest uppercase">
                Sites & Soluções Web
              </span>
            </div>
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
              QUERO MEU SITE →
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
                QUERO MEU SITE →
              </a>
              <div className="flex justify-center gap-4 pt-2 text-muted-foreground">
                <a
                  href="https://wa.me/5582920009519"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp (82) 92000-9519"
                  className="hover:text-primary p-2"
                >
                  <FaWhatsapp className="size-5" />
                </a>
                <a
                  href="https://www.instagram.com/xxsrmaximoxx"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram @xxsrmaximoxx"
                  className="hover:text-primary p-2"
                >
                  <FaInstagram className="size-5" />
                </a>
                <a
                  href="mailto:sidney@maximosistemas.com"
                  aria-label="Email sidney@maximosistemas.com"
                  className="hover:text-primary p-2"
                >
                  <Mail className="size-5" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* ── 2. HERO PRINCIPAL ─────────────────────────────── */}
      <section
        id="inicio"
        className="relative flex min-h-[92vh] sm:min-h-screen items-center border-b border-border px-4 sm:px-6 md:px-10 pb-16 pt-24 sm:pt-32 md:pt-36"
      >
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <AgentParticleCanvas />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="sys-tag mb-4 sm:mb-6 text-[10px] sm:text-xs">
              SITES & SISTEMAS PARA PEQUENOS NEGÓCIOS
            </p>
            <h1 className="max-w-3xl font-display text-4xl sm:text-6xl md:text-7xl lg:text-[clamp(3.2rem,6.2vw,5.6rem)] leading-[0.95] sm:leading-[0.90] tracking-[-0.02em]">
              SITES QUE AJUDAM<br />
              PEQUENOS NEGÓCIOS A<br />
              <span className="text-primary">CONSEGUIR MAIS CLIENTES.</span>
            </h1>
            <p className="mt-5 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Criamos sites profissionais para lanchonetes, barbearias, salões e negócios locais. Mostre seus serviços, facilite o contato e ajude mais pessoas a encontrarem sua empresa.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#contato"
                className="w-full sm:w-auto text-center justify-center bg-primary px-6 py-3.5 sm:py-4 font-mono text-xs font-semibold tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
              >
                QUERO UM SITE PARA MEU NEGÓCIO →
              </a>
              <a
                href="#demonstracoes"
                className="w-full sm:w-auto text-center justify-center border border-border-bright px-6 py-3.5 sm:py-4 font-mono text-xs tracking-widest transition-colors hover:border-primary hover:text-primary"
              >
                VER EXEMPLOS
              </a>
            </div>
            {/* Quick trust metrics */}
            <div className="mt-10 pt-6 border-t border-border/70 flex flex-wrap gap-6 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green" />
                <span>100% Adaptado para Celular</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green" />
                <span>Botão de WhatsApp Integrado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green" />
                <span>Sem Jargões Técnicos</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="relative w-full flex items-center justify-center">
            <div className="w-full max-w-md border border-border bg-card/80 p-4 sm:p-5 backdrop-blur-md shadow-2xl relative">
              {/* Mockup Topbar */}
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 rounded-full bg-red/80" />
                  <div className="size-2.5 rounded-full bg-primary/80" />
                  <div className="size-2.5 rounded-full bg-green/80" />
                  <span className="ml-2 font-mono text-[10px] text-muted-foreground truncate">
                    exemplo-negocio-local.com.br
                  </span>
                </div>
                <span className="font-mono text-[9px] bg-primary/20 text-primary px-2 py-0.5 border border-primary/30">
                  ILUSTRAÇÃO
                </span>
              </div>

              {/* Mockup Content: Local Business Preview */}
              <div className="space-y-3">
                {/* Header Mockup */}
                <div className="bg-muted p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-display text-sm">
                      BB
                    </div>
                    <div>
                      <p className="font-display text-sm leading-none">Burger & Brasa Artesanal</p>
                      <p className="text-[10px] text-muted-foreground font-mono flex items-center gap-1 mt-0.5">
                        <span className="size-1.5 rounded-full bg-green animate-pulse" /> Aberto agora até 23h
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-primary font-semibold">★ 4.9</span>
                </div>

                {/* Cardápio Item Mockup */}
                <div className="border border-border/80 p-3 bg-background/50 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display text-base">Smash Burger Duplo</h4>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        2x blend de 90g, queijo cheddar derretido, bacon crocante e molho especial no pão brioche.
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold text-primary shrink-0 ml-2">R$ 28,90</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[9px] font-mono text-muted-foreground">Mais pedido da semana</span>
                    <span className="inline-flex items-center gap-1 bg-green/20 text-green px-2 py-1 text-[10px] font-mono font-medium">
                      <FaWhatsapp className="size-3" /> Pedir no WhatsApp
                    </span>
                  </div>
                </div>

                {/* Services/Barbershop or Local Info */}
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div className="border border-border p-2 bg-muted/40 flex items-center gap-2">
                    <MapPin className="size-3.5 text-primary shrink-0" />
                    <span className="truncate">Centro da Cidade</span>
                  </div>
                  <div className="border border-border p-2 bg-muted/40 flex items-center gap-2">
                    <Clock className="size-3.5 text-primary shrink-0" />
                    <span className="truncate">Entrega em 30-45min</span>
                  </div>
                </div>

                {/* Direct Call to Action Inside Mockup */}
                <div className="p-2.5 bg-primary/10 border border-primary/30 text-center">
                  <p className="font-mono text-[10px] text-primary">
                    SEU CLIENTE ENCONTRA TUDO FÁCIL E RÁPIDO NO CELULAR
                  </p>
                </div>
              </div>

              <p className="mt-3 text-center font-mono text-[9px] text-muted-foreground">
                * Prévia ilustrativa de interface prática para negócio local
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. IDENTIFICAÇÃO DO PÚBLICO (4 NICHOS) ────────── */}
      <section className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <p className="sys-tag mb-3 sm:mb-4 text-[10px] sm:text-xs">PARA QUEM É A MAXIMOSISTEMAS</p>
              <h2 className="max-w-2xl font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95]">
                SEU NEGÓCIO MERECE<br />
                UMA PRESENÇA PROFISSIONAL<br />
                <span className="text-primary">NA INTERNET.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Se seus clientes ainda precisam procurar informações espalhadas em redes sociais ou perguntar pelo WhatsApp, um site próprio pode deixar tudo mais simples e transmitir mais confiança.
            </p>
          </div>

          <div className="grid border-t border-border grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {targetAudiences.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <article
                  key={audience.title}
                  className="row-hover border-b lg:border-b-0 lg:border-r last:border-r-0 border-border p-5 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded border border-border bg-card flex items-center justify-center text-primary">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-[9px] text-muted-foreground tracking-widest">
                        0{idx + 1}
                      </span>
                    </div>
                    <span className="mt-4 inline-block font-mono text-[9px] tracking-wider text-primary">
                      {audience.badge}
                    </span>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl leading-tight">
                      {audience.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {audience.description}
                    </p>
                  </div>
                  <a
                    href="#contato"
                    className="mt-6 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-primary hover:underline"
                  >
                    SOLICITAR ESSE TIPO →
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. BENEFÍCIOS ─────────────────────────────────── */}
      <section className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-24 bg-card/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-14">
            <p className="sys-tag mb-3 sm:mb-4 text-[10px] sm:text-xs">VANTAGENS REAIS</p>
            <h2 className="max-w-3xl font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95]">
              MAIS DO QUE UM SITE:<br />
              <span className="text-primary">UMA PORTA DE ENTRADA PARA NOVOS CLIENTES.</span>
            </h2>
            <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Investir em um site não precisa ser complicado. Veja como ele trabalha a favor do seu comércio ou serviço todos os dias:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-background p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="size-9 rounded border border-border bg-card flex items-center justify-center text-primary mb-4">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                  <span className="mt-6 font-mono text-[9px] text-muted-foreground tracking-widest">
                    PILAR 0{idx + 1}
                  </span>
                </div>
              );
            })}
            <div className="bg-primary/10 border border-primary/20 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                  Sem promessas falsas
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
                  Transparência e foco no que funciona
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Não prometemos fórmulas mágicas. Entregamos uma presença sólida, rápida e profissional para valorizar seu negócio.
                </p>
              </div>
              <a
                href="#contato"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-widest text-primary hover:underline"
              >
                QUERO COMEÇAR AGORA →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SEÇÃO DE SOLUÇÕES ───────────────────────────── */}
      <section id="solucoes" className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <p className="sys-tag mb-3 sm:mb-4 text-[10px] sm:text-xs">O QUE FAZEMOS</p>
              <h2 className="max-w-2xl font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95]">
                O QUE PODEMOS CRIAR<br />
                <span className="text-primary">PARA O SEU NEGÓCIO.</span>
              </h2>
            </div>
            <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Soluções diretas ao ponto, com valores acessíveis e desenhadas para a realidade de quem empreende.
            </p>
          </div>

          <div className="grid border-t border-border grid-cols-1 md:grid-cols-3">
            {solutions.map((sol) => (
              <article key={sol.number} className="row-hover border-b md:border-b-0 md:border-r last:border-r-0 border-border p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-primary">{sol.number}</span>
                  <h3 className="mt-6 font-display text-2xl sm:text-3xl md:text-4xl">{sol.title}</h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {sol.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-border/60">
                    <p className="font-mono text-[10px] text-muted-foreground">
                      💡 {sol.idealFor}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectGoal(sol.formGoal)}
                  className="mt-8 inline-flex items-center gap-2 bg-card border border-border px-4 py-3 font-mono text-[10px] tracking-widest text-foreground hover:border-primary hover:text-primary transition-colors text-left"
                >
                  QUERO SABER MAIS <ArrowUpRight className="size-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SEÇÃO DE DEMONSTRAÇÕES & PORTFÓLIO ──────────── */}
      <section id="demonstracoes" className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="sys-tag mb-3 sm:mb-4 text-[10px] sm:text-xs">DEMONSTRAÇÕES VISUAIS</p>
          <div className="mb-10 sm:mb-14 flex flex-col justify-between gap-3 sm:gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95]">
                VEJA COMO SUA PRESENÇA<br />
                <span className="text-primary">ONLINE PODE FICAR.</span>
              </h2>
            </div>
            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Exemplos conceituais criados para mostrar a estrutura, facilidade de uso e apelo visual para cada segmento.
            </p>
          </div>

          {/* 3 Conceptual Demos */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {conceptualDemos.map((demo) => (
              <article
                key={demo.id}
                className="group border border-border bg-card p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-primary/60"
              >
                <div>
                  {/* Demo Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                    <span className="font-mono text-[9px] text-primary tracking-widest">
                      {demo.niche}
                    </span>
                    <span className="inline-block bg-muted px-2 py-0.5 font-mono text-[8px] sm:text-[9px] text-muted-foreground border border-border">
                      {demo.conceptType}
                    </span>
                  </div>

                  {/* Simulated Visual Canvas */}
                  <div className="relative mb-5 flex h-44 sm:h-48 items-center justify-center overflow-hidden border border-border bg-background p-4 text-center">
                    <div className="space-y-2">
                      <div className="size-10 mx-auto rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                        {demo.id === "lanchonete" ? (
                          <Utensils className="size-5" />
                        ) : demo.id === "barbearia" ? (
                          <Scissors className="size-5" />
                        ) : (
                          <Sparkles className="size-5" />
                        )}
                      </div>
                      <h4 className="font-display text-xl text-foreground">{demo.name}</h4>
                      <p className="font-mono text-[9px] text-muted-foreground">
                        Prévia visual otimizada para mobile
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-foreground">
                    {demo.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {demo.problemSolved}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {demo.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                        <CheckCircle2 className="size-3 text-primary shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectGoal(`Quero um site no estilo ${demo.name}`)}
                  className="mt-6 inline-flex items-center justify-between border border-border px-4 py-3 font-mono text-[10px] tracking-widest text-foreground hover:border-primary hover:text-primary transition-colors w-full"
                >
                  <span>SOLICITAR UMA IDEIA SEMELHANTE</span>
                  <ArrowUpRight className="size-3.5" />
                </button>
              </article>
            ))}
          </div>

          {/* ── Subseção de Projetos Reais ────────────────────── */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="sys-tag mb-2 text-[10px] sm:text-xs">PROJETOS EM PRODUÇÃO</p>
                <h3 className="font-display text-2xl sm:text-4xl">
                  PROJETOS E EXPERIÊNCIAS
                </h3>
              </div>
              <p className="text-xs font-mono text-muted-foreground">
                Projetos reais desenvolvidos pela MaximoSistemas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {realProjects.map((proj) => (
                <article
                  key={proj.name}
                  className="border border-border bg-card p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-green/20 border-b border-l border-green/40 px-2.5 py-1 font-mono text-[9px] text-green flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-green animate-pulse" />
                    {proj.badge}
                  </div>

                  <div className="pt-4">
                    <p className="font-mono text-[10px] tracking-widest text-primary mb-1">
                      {proj.type.toUpperCase()}
                    </p>
                    <h4 className="font-display text-2xl sm:text-3xl text-foreground">
                      {proj.name}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {proj.description}
                    </p>
                  </div>

                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-primary px-4 py-3 font-mono text-[10px] sm:text-[11px] font-semibold tracking-widest text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    ACESSAR SITE AO VIVO <ArrowUpRight className="size-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. SEÇÃO DE PROCESSO (COMO FUNCIONA) ───────────── */}
      <section id="como-funciona" className="grid border-b border-border grid-cols-1 md:grid-cols-2">
        <div className="border-b border-border md:border-b-0 md:border-r p-6 sm:p-10 md:p-14 flex flex-col justify-between">
          <div>
            <p className="sys-tag mb-4 sm:mb-6 text-[10px] sm:text-xs">PASSO A PASSO</p>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95]">
              COMO FUNCIONA<br />
              DO PRIMEIRO CONTATO<br />
              <span className="text-primary">AO SITE NO AR.</span>
            </h2>
            <p className="mt-6 text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-md">
              Você não precisa se preocupar com servidores, configurações complicadas ou código. Cuidamos de todas as etapas para você receber seu site pronto para divulgar.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-xs font-semibold tracking-widest text-primary-foreground hover:opacity-90 transition-opacity"
            >
              COMEÇAR PELO PASSO 01 →
            </a>
          </div>
        </div>

        <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center space-y-8 bg-card/20">
          {processSteps.map((step) => (
            <div key={step.number} className="flex gap-4 sm:gap-6 items-start">
              <span className="font-mono text-sm sm:text-base text-primary pt-0.5 shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl">{step.title}</h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. SEÇÃO DE DIFERENCIAIS ───────────────────────── */}
      <section className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-14">
            <p className="sys-tag mb-3 sm:mb-4 text-[10px] sm:text-xs">POR QUE A MAXIMOSISTEMAS</p>
            <h2 className="max-w-3xl font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95]">
              TECNOLOGIA SIMPLES PARA<br />
              <span className="text-primary">RESOLVER PROBLEMAS REAIS.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
              Você não precisa entender de programação para ter uma presença digital profissional. A MaximoSistemas cuida da parte técnica para que você possa se concentrar no seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {differentials.map((diff, i) => (
              <div key={diff.title} className="bg-background p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-primary mb-3 block">0{i + 1}</span>
                  <h3 className="font-display text-2xl sm:text-3xl text-foreground">
                    {diff.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CHAMADA FINAL PARA AÇÃO (CTA) ───────────────── */}
      <section className="border-b border-border px-4 sm:px-6 md:px-10 py-16 sm:py-20 bg-card/40">
        <div className="mx-auto max-w-7xl text-center flex flex-col items-center">
          <p className="sys-tag mb-4 text-[10px] sm:text-xs">PRIMEIRO PASSO</p>
          <h2 className="max-w-4xl font-display text-4xl sm:text-6xl md:text-7xl leading-[0.92]">
            VAMOS COLOCAR SEU NEGÓCIO<br />
            <span className="text-primary">NA INTERNET?</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            Conte um pouco sobre sua empresa e receba uma orientação inicial sobre o tipo de site que faz sentido para você.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/5582920009519?text=Ol%C3%A1%2C%20MaximoSistemas!%20Gostaria%20de%20falar%20sobre%20um%20projeto%20de%20site%20para%20o%20meu%20neg%C3%B3cio."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 font-mono text-xs font-semibold tracking-widest text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <FaWhatsapp className="size-4" /> FALAR SOBRE MEU PROJETO
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center border border-border-bright px-7 py-4 font-mono text-xs tracking-widest transition-colors hover:border-primary hover:text-primary"
            >
              SOLICITAR UMA IDEIA PARA MEU NEGÓCIO
            </a>
          </div>
        </div>
      </section>

      {/* ── 10. FORMULÁRIO DE CONTATO & CANAIS DIRETOS ────── */}
      <section id="contato" className="relative overflow-hidden px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-12">
            <p className="sys-tag mb-3 text-[10px] sm:text-xs">FORMULÁRIO DE CONTATO</p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9]">
              FALE COM A <span className="text-primary">MAXIMOSISTEMAS</span>
            </h2>
            <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Preencha os dados abaixo para receber uma orientação personalizada para o seu comércio, salão, barbearia ou serviço.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
            {/* The Form */}
            <div className="border border-border bg-card p-6 sm:p-8 backdrop-blur-md">
              {formSubmitted && (
                <div className="mb-6 border border-green/40 bg-green/10 p-4 font-mono text-xs text-green flex items-center gap-2">
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>Mensagem preparada com sucesso! Se a janela não abriu, você pode clicar diretamente nos canais ao lado.</span>
                </div>
              )}

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-border bg-background px-3.5 py-2.5 font-sans text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Nome do seu Negócio
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Barbearia Silva / Hamburgueria 10"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full border border-border bg-background px-3.5 py-2.5 font-sans text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Segmento do Negócio
                    </label>
                    <select
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                      className="w-full border border-border bg-background px-3.5 py-2.5 font-sans text-sm focus:border-primary focus:outline-none text-foreground"
                    >
                      <option value="Lanchonete / Restaurante">Lanchonete / Restaurante</option>
                      <option value="Barbearia">Barbearia</option>
                      <option value="Salão de Beleza / Estética">Salão de Beleza / Estética</option>
                      <option value="Profissional Autônomo">Profissional Autônomo</option>
                      <option value="Comércio Local">Comércio Local</option>
                      <option value="Outro Segmento">Outro Segmento</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Cidade ou Região
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Maceió - AL"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full border border-border bg-background px-3.5 py-2.5 font-sans text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Principal Objetivo do Site
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full border border-border bg-background px-3.5 py-2.5 font-sans text-sm focus:border-primary focus:outline-none text-foreground"
                  >
                    <option value="apresentar minha empresa">Apresentar minha empresa</option>
                    <option value="divulgar serviços">Divulgar serviços</option>
                    <option value="criar cardápio ou catálogo">Criar cardápio ou catálogo</option>
                    <option value="receber agendamentos">Receber agendamentos</option>
                    <option value="criar um sistema personalizado">Criar um sistema personalizado</option>
                    <option value="ainda não sei e quero orientação">Ainda não sei e quero orientação</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Seu WhatsApp ou E-mail *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: (82) 99999-9999 ou seu@email.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full border border-border bg-background px-3.5 py-2.5 font-sans text-sm focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="flex-1 bg-primary px-5 py-3.5 font-mono text-xs font-semibold tracking-widest text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="size-4" /> ENVIAR PELO WHATSAPP
                  </button>
                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="border border-border-bright px-5 py-3.5 font-mono text-xs tracking-widest text-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="size-4" /> ENVIAR POR E-MAIL
                  </button>
                </div>
              </form>
            </div>

            {/* Direct Channels */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="border border-border p-6 bg-card">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
                  Canais Diretos de Contato
                </p>
                <div className="space-y-4">
                  <div className="border-b border-border pb-3">
                    <p className="font-mono text-[10px] uppercase text-muted-foreground">WhatsApp Direto</p>
                    <a
                      href="https://wa.me/5582920009519"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-base sm:text-lg text-foreground hover:text-primary transition-colors flex items-center gap-2 mt-1"
                    >
                      <FaWhatsapp className="text-green size-4" /> (82) 92000-9519
                    </a>
                  </div>

                  <div className="border-b border-border pb-3">
                    <p className="font-mono text-[10px] uppercase text-muted-foreground">Instagram</p>
                    <a
                      href="https://www.instagram.com/xxsrmaximoxx"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-sm sm:text-base text-foreground hover:text-primary transition-colors flex items-center gap-2 mt-1"
                    >
                      <FaInstagram className="size-4" /> @xxsrmaximoxx
                    </a>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase text-muted-foreground">E-mail Comercial</p>
                    <a
                      href="mailto:sidney@maximosistemas.com"
                      className="font-mono text-sm sm:text-base text-foreground hover:text-primary transition-colors flex items-center gap-2 mt-1 break-all"
                    >
                      <Mail className="size-4" /> sidney@maximosistemas.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="border border-border p-6 bg-card/60">
                <h4 className="font-display text-xl mb-1">Atendimento Transparente</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Respondemos rapidamente para tirar dúvidas, dar sugestões para o seu negócio e elaborar uma proposta sem compromisso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. RODAPÉ ────────────────────────────────────── */}
      <footer className="border-t border-border px-4 sm:px-6 md:px-10 py-6 sm:py-8">
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
            <span className="truncate">© 2026 MAXIMOSISTEMAS — SITES PARA PEQUENOS NEGÓCIOS</span>
          </div>
          <span>SITES PROFISSIONAIS, CARDÁPIOS E SISTEMAS SOB MEDIDA.</span>
        </div>
      </footer>
    </main>
  );
}
