import React, { useState } from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { Modal } from './Modal';

export const TruthBadge: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40 text-xs font-medium transition-all duration-200 cursor-pointer shadow-sm shadow-emerald-500/5 group"
        title="Click to view Truth-First & Zero Fabrication Statement"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span>100% Authentic & Evidence-Based Profile</span>
        <Info className="w-3 h-3 text-emerald-500/70" />
      </button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
            <span>Zero Fabrication & Truth-First Policy</span>
          </div>
        }
      >
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            This portfolio is built on a strict <strong className="text-white">Zero Fabrication</strong> foundation. Every skill level, project description, and technical claim reflects genuine hands-on experience and academic coursework.
          </p>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Verified Facts
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
              <li><strong className="text-slate-100">Identity:</strong> Kajal Maurya — BCA / Computer Applications student & developer.</li>
              <li><strong className="text-slate-100">Real Skills:</strong> Categorized by truthful proficiency tags (Hands-on, Working Knowledge, Project Experience, Learning, Exploring).</li>
              <li><strong className="text-slate-100">Real Projects:</strong> FlowPilot AI (Multi-agent), Jarvis AI (Voice/Automation), Karya Pharmacy (Course/Student portal prototype), Academic Labs.</li>
              <li><strong className="text-slate-100">Zero Exaggeration:</strong> No fake user counts, no fabricated corporate logos, no artificial years of experience.</li>
            </ul>
          </div>
          <p className="text-xs text-slate-400">
            “The portfolio must feel impressive because of the quality of engineering, architecture, and projects — not fabricated claims.”
          </p>
        </div>
      </Modal>
    </>
  );
};
