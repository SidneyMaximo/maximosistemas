"use client";

import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    id: "01",
    tag: "ORQUESTRAÇÃO",
    title: "ENXAMES\nMULTIAGENTE",
    desc: "Publique frotas de agentes especializados que colaboram, delegam e se coordenam. O JARVIS gerencia grafos de tarefas, resolve dependências e direciona o trabalho ao agente certo — automaticamente.",
    stat: { v: "10K+", l: "concurrent agents" },
  },
  {
    id: "02",
    tag: "COGNIÇÃO",
    title: "RACIOCÍNIO DE\nLONGO PRAZO",
    desc: "Memória persistente, ciclos reflexivos e planejamento em várias etapas. Não são respostas únicas — são agentes que mantêm o contexto por horas, dias e fluxos complexos.",
    stat: { v: "∞", l: "context retention" },
  },
  {
    id: "03",
    tag: "EXECUÇÃO",
    title: "CAMADA DE\nFERRAMENTAS E API",
    desc: "Dê mãos aos seus agentes. Navegue na web, chame APIs, escreva e execute código, consulte bancos de dados e acione seu stack — com retries, rate limiting e auditoria completa.",
    stat: { v: "200+", l: "native tool integrations" },
  },
  {
    id: "04",
    tag: "SEGURANÇA",
    title: "SANDBOX\nZERO-TRUST",
    desc: "Cada ação do agente é isolada, controlada por políticas e auditada criptograficamente. Defina escopos de permissão com criptografia ponta a ponta e padrão empresarial desde o primeiro dia.",
    stat: { v: "SOC2", l: "type II certified" },
  },
];

function FeatureRow({ f, index }: { f: typeof FEATURES[0]; index: number }) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group border-b border-[#1e1e1e] transition-all duration-500 row-hover ${
        vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="grid grid-cols-[56px_1fr] lg:grid-cols-[56px_260px_1fr_160px] gap-0">
        {/* Number col */}
        <div className="border-r border-[#1e1e1e] p-5 flex items-start pt-6">
          <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">{f.id}</span>
        </div>

        {/* Tag + Title */}
        <div className="border-r border-[#1e1e1e] p-6 flex flex-col gap-3">
          <span className="sys-tag text-[9px]">{f.tag}</span>
          <h3 className="font-display text-3xl lg:text-4xl leading-[0.9] text-[#f2ede6] group-hover:text-[#2196f3] transition-colors duration-300 whitespace-pre-line">
            {f.title}
          </h3>
        </div>

        {/* Description */}
        <div className="col-span-2 lg:col-span-1 border-r border-[#1e1e1e] p-6 flex items-center">
          <p className="text-sm text-[#5a5a5a] leading-relaxed max-w-lg">{f.desc}</p>
        </div>

        {/* Stat */}
        <div className="hidden lg:flex flex-col items-end justify-center p-6">
          <div className="font-display text-4xl text-[#2196f3]">{f.stat.v}</div>
          <div className="font-mono text-[9px] text-[#3a3a3a] tracking-widest mt-1 text-right">{f.stat.l}</div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="features" className="relative border-t border-[#1e1e1e] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header row */}
        <div
          ref={ref}
          className={`grid grid-cols-[56px_1fr] lg:grid-cols-[56px_260px_1fr_160px] border-b border-[#1e1e1e] transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="border-r border-[#1e1e1e] p-5" />
          <div className="col-span-2 lg:col-span-3 p-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <span className="sys-tag mb-4 block">CAPACIDADES</span>
              <h2 className="font-display text-6xl lg:text-8xl text-[#f2ede6] leading-[0.88] tracking-tight">
                O QUE O JARVIS<br />
                <span className="text-[#3a3a3a]" style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>
                  FAZ
                </span>
              </h2>
            </div>
            <p className="font-mono text-[10px] text-[#3a3a3a] tracking-widest max-w-[200px] text-right hidden lg:block">
              FOUR CORE MODULES &nbsp;/ &nbsp;ENTERPRISE-GRADE &nbsp;/ &nbsp;PRODUCTION-READY
            </p>
          </div>
        </div>

        {/* Feature rows */}
        {FEATURES.map((f, i) => (
          <FeatureRow key={f.id} f={f} index={i} />
        ))}

        {/* CTA row */}
        <div className="grid grid-cols-[56px_1fr] border-b border-[#1e1e1e]">
          <div className="border-r border-[#1e1e1e]" />
          <div className="p-6 flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#3a3a3a]">VIEW ALL CAPACIDADES IN DOCS →</span>
            <a href="#" className="font-mono text-xs text-[#2196f3] hover:underline tracking-wider">EXPLORAR SDK</a>
          </div>
        </div>
      </div>
    </section>
  );
}
