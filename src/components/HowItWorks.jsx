import { Mic, AudioLines, FileText, Send } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Mic,
      title: 'Capte o áudio',
      desc: 'Conecte o microfone do consultório e inicie a captação com um clique.'
    },
    {
      icon: AudioLines,
      title: 'Transcreva em tempo real',
      desc: 'Texto aparece instantaneamente com identificação de falantes e correções automáticas.'
    },
    {
      icon: FileText,
      title: 'Gere a documentação',
      desc: 'Resumos, campos estruturados e modelos prontos para o prontuário.'
    },
    {
      icon: Send,
      title: 'Exporte e integre',
      desc: 'Envie para seu sistema de prontuário, e-mail ou baixe em PDF.'
    },
  ]

  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Como funciona</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-700 flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">Etapa {i+1}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
