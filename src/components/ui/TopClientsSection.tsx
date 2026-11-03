import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Database, 
  Zap, 
  Activity, 
  Globe2 
} from 'lucide-react';

interface Client {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  bgGradient: string;
}

const clients: Client[] = [
  {
    name: "Vertex Global",
    category: "Enterprise Cloud",
    icon: Cloud,
    color: "text-blue-600",
    bgGradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    name: "NovaPath Tech",
    category: "AI & Platform",
    icon: Cpu,
    color: "text-indigo-600",
    bgGradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    name: "CyberShield Systems",
    category: "Cybersecurity",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bgGradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    name: "FinScale Capital",
    category: "Fintech Core",
    icon: Building2,
    color: "text-amber-600",
    bgGradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    name: "Synapse Health",
    category: "HealthTech",
    icon: Activity,
    color: "text-rose-600",
    bgGradient: "from-rose-500/20 to-pink-500/20"
  },
  {
    name: "OmniData Corp",
    category: "Data Infrastructure",
    icon: Database,
    color: "text-cyan-600",
    bgGradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    name: "Terra Energy",
    category: "Clean Grid",
    icon: Zap,
    color: "text-teal-600",
    bgGradient: "from-teal-500/20 to-emerald-500/20"
  },
  {
    name: "AeroSphere Logistics",
    category: "Supply Chain",
    icon: Globe2,
    color: "text-sky-600",
    bgGradient: "from-sky-500/20 to-indigo-500/20"
  }
];

export default function TopClientsSection() {
  return (
    <section className="py-20 bg-[#070E1E] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-bold uppercase tracking-[0.25em] text-slate-600 text-xs sm:text-sm md:text-base">
            Our Top Clients
          </h2>
        </motion.div>

        {/* Responsive Flex Row of Logo Cards */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {clients.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-gray-100/95 hover:bg-white rounded-xl shadow-md shadow-black/20 flex items-center pl-4 pr-14 py-3.5 min-w-[260px] sm:min-w-[280px] max-w-[340px] flex-1 transition-colors duration-300"
                style={{
                  maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)'
                }}
              >
                {/* 56px rounded-square logo icon on the left */}
                <div className={`w-[56px] h-[56px] min-w-[56px] min-h-[56px] rounded-xl bg-gradient-to-br ${client.bgGradient} bg-white flex items-center justify-center border border-slate-200/80 shadow-sm mr-4 flex-shrink-0`}>
                  <IconComponent className={client.color} size={28} />
                </div>

                {/* Company name in bold uppercase slate-gray-700 text */}
                <div className="text-left overflow-hidden">
                  <span className="block font-bold uppercase text-slate-700 text-sm tracking-wider leading-tight">
                    {client.name}
                  </span>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mt-0.5">
                    {client.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
