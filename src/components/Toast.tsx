import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border transition-all animate-bounce-slow"
      style={{
        background: '#442D1C',
        borderColor: '#84592B',
        color: '#E8D1A7',
        boxShadow: '0 20px 40px rgba(68,45,28,0.3)'
      }}>
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
      ) : (
        <Info className="w-5 h-5 text-amber-300 shrink-0" />
      )}
      <span className="text-sm font-semibold">{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors text-[#E8D1A7]/70 hover:text-[#E8D1A7]"
        aria-label="Close notification"
      >
        <X size={15} />
      </button>
    </div>
  );
};
