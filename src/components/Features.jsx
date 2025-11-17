import { FileText, Clock, ShieldCheck, Languages, Sparkles, Cpu } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: 'Prontuário automático',
      desc: 'Gera resumos estruturados, SOAP notes e laudos a partir da conversa.'
    },
    {
      icon: Clock,
      title: 'Tempo real',
      desc: 'Transcrição de baixa latência com atualização contínua durante a consulta.'
    },
    {
      icon: ShieldCheck,
      title: 'Segurança e compliance',
      desc: 'Criptografia de ponta a ponta e conformidade com LGPD/HIPAA.'
    },
    {
      icon: Languages,
      title: 'Especializado em saúde',
      desc: 'Vocabulário médico e nomes de fármacos otimizados para PT-BR.'
    },
    {
      icon: Cpu,
      title: 'Integrações',
      desc: 'Integra com sistemas de clínica e agenda via API.'
    },
    {
      icon: Sparkles,
      title: 'AI assistiva',
      desc: 'Sugestões de condutas, ICD-10 e geração de pedidos e receitas.'
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Recursos que fazem a diferença</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
          Pensado para o consultório moderno: produtividade, segurança e qualidade de atendimento.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
