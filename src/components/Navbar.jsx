import { useState } from 'react'
import { Menu, X, Mic, Stethoscope } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-800">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center">
              <Stethoscope className="h-5 w-5" />
            </div>
            MediTranscribe
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900 transition-colors">Recursos</a>
            <a href="#how" className="hover:text-slate-900 transition-colors">Como funciona</a>
            <a href="#cta" className="hover:text-slate-900 transition-colors">Começar</a>
          </nav>

          <div className="hidden md:flex">
            <a href="#cta" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Mic className="h-4 w-4" /> Experimente grátis
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2 text-sm text-slate-700">
              <a href="#features" className="px-2 py-2 rounded hover:bg-slate-100">Recursos</a>
              <a href="#how" className="px-2 py-2 rounded hover:bg-slate-100">Como funciona</a>
              <a href="#cta" className="px-2 py-2 rounded hover:bg-slate-100">Começar</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
