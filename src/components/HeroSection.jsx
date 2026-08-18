import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus, Compass, Target, Award, TrendingUp, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenICP }) {
  return (
    <section className="relative z-0 flex min-h-[90vh] lg:min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0e1015] pt-28 pb-16 lg:py-32">
      
      {/* 21st.dev Lamp / Conic Glow Effect Background */}
      <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center pointer-events-none">
        <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />

        {/* Main Glow em tom de Laranja Converte+ (#ff5823) */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-[#ff5823]/60 opacity-80 blur-3xl" />

        {/* Lamp Effect Motion */}
        <motion.div
          initial={{ width: "8rem" }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ width: "16rem" }}
          className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-[#ff5823]/60 blur-2xl"
        />

        {/* Top Line Motion */}
        <motion.div
          initial={{ width: "15rem" }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ width: "30rem" }}
          className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-[#ff5823]/60"
        />

        {/* Left Gradient Cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#ff5823]/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-[#0e1015] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-[#0e1015] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Gradient Cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#ff5823]/60 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-[#0e1015] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-[#0e1015] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Grid Layout: Stacked on Mobile, 60/40 on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-6 text-left relative z-10">
            
            {/* Eyebrow Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(255,88,35,0.2)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Tráfego pago + branding para marcas que já vendem</span>
            </motion.div>

            {/* Headline com Animação da 21st.dev (Framermotion) */}
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]"
            >
              Clientes chegando todos os dias, <br />
              <span className="text-[#ff5823]">sem depender de indicação.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl"
            >
              Você já tem um bom produto e clientes que confiam em você. A gente estrutura sua presença digital e traz as pessoas certas, de forma previsível, para o seu site e o seu WhatsApp.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="pt-2 space-y-3"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenICP}
                  className="btn-orange w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-orange-500/30 cursor-pointer min-h-[48px]"
                >
                  <span>Fazer diagnóstico grátis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#metodo"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#151821] hover:bg-[#1c202c] border border-white/10 text-white font-bold text-sm text-center transition-all flex items-center justify-center gap-2 min-h-[48px]"
                >
                  Ver como funciona
                </a>
              </div>

              {/* Microcopy */}
              <p className="text-xs text-gray-400 font-medium pt-1">
                5 perguntas. Resposta dos fundadores em até 24h. Sem compromisso.
              </p>
            </motion.div>

          </div>

          {/* Right Column: 3D Orbit Graphic ("A Rodinha com Iluminação 21st.dev") */}
          <div className="lg:col-span-5 flex items-center justify-center relative py-6 sm:py-10">
            
            {/* Canvas da Rodinha */}
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] flex items-center justify-center select-none scale-[0.92] sm:scale-100">
              
              {/* Anéis Concêntricos */}
              <div className="absolute inset-2 sm:inset-4 rounded-full border border-white/10" />
              <div className="absolute inset-10 sm:inset-12 rounded-full border border-dashed border-[#ff5823]/35" />
              <div className="absolute inset-16 sm:inset-20 rounded-full border border-white/5" />

              {/* Símbolo Central '+' */}
              <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-[#ff5823] to-[#ff7a4a] p-[2px] shadow-[0_0_40px_rgba(255,88,35,0.45)]">
                <div className="w-full h-full bg-[#151821] rounded-[22px] flex items-center justify-center">
                  <Plus className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff5823] stroke-[3.5]" />
                </div>
              </div>

              {/* ROTATING ORBIT CONTAINER */}
              <div className="absolute inset-0 z-30 animate-spin-slow motion-reduce:animate-none pointer-events-none">
                
                {/* Node 1: Top (Base Digital) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 sm:h-9 px-3 sm:px-4 rounded-2xl bg-[#151821] border border-[#ff5823]/60 shadow-xl flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff5823]" />
                  <span>Base Digital</span>
                </div>

                {/* Node 2: Right (Meta & Google Ads) */}
                <div className="absolute top-1/2 -right-3 sm:-right-5 -translate-y-1/2 h-8 sm:h-9 px-3 sm:px-4 rounded-2xl bg-[#151821] border border-[#ff5823]/60 shadow-xl flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff5823]" />
                  <span>Meta & Google</span>
                </div>

                {/* Node 3: Bottom (Branding Forte) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-8 sm:h-9 px-3 sm:px-4 rounded-2xl bg-[#151821] border border-[#ff5823]/60 shadow-xl flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff5823]" />
                  <span>Branding Forte</span>
                </div>

                {/* Node 4: Left (Escala Previsível) */}
                <div className="absolute top-1/2 -left-3 sm:-left-5 -translate-y-1/2 h-8 sm:h-9 px-3 sm:px-4 rounded-2xl bg-[#151821] border border-[#ff5823]/60 shadow-xl flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff5823]" />
                  <span>Escala Previsível</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
