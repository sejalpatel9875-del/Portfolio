import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { servicesData } from '../../data/services';
import { Layout, Code2, Bot, Sliders, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-5 h-5 text-blue-400" />,
    Code2: <Code2 className="w-5 h-5 text-purple-400" />,
    Bot: <Bot className="w-5 h-5 text-cyan-400" />,
    Sliders: <Sliders className="w-5 h-5 text-rose-400" />,
  };

  const handleInquiry = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Solutions"
          title="Services & Capabilities"
          description="High-impact web development and automation services engineered to solve business bottlenecks and elevate your brand."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 md:p-8 rounded-2xl builder-glass border border-white/10 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {iconMap[service.icon] || <Sparkles className="w-5 h-5 text-blue-400" />}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-display text-slate-100 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                    {service.description}
                  </p>
                </div>

                {/* Client Outcome Box */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Client Outcome:</span>
                  </span>
                  <p className="text-xs text-slate-300">
                    {service.clientOutcome}
                  </p>
                </div>

                {/* Scope Checklist */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                    Typical Scope Includes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.typicalScope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={() => handleInquiry(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-blue-600/20 text-slate-200 hover:text-blue-300 border border-white/10 hover:border-blue-500/30 text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
