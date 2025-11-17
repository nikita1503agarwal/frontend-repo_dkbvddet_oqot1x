import { Mic, Shield, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-200">
              <Sparkles className="h-3.5 w-3.5" /> Novo • Transcrição em tempo real
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Transcreva consultas médicas em tempo real com precisão
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Nosso sistema capta a conversa entre médico e paciente e gera a documentação automaticamente, economizando tempo e reduzindo erros.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition-colors">
                <Mic className="h-5 w-5" /> Começar agora
              </a>
              <a href="#features" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-5 py-3 rounded-lg border border-slate-200">
                Ver recursos
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                Segurança e LGPD
              </div>
              <div>Português-BR otimizado</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl border border-slate-200 bg-white shadow-sm p-4">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <Mic className="h-7 w-7" />
                  </div>
                  <p className="mt-3 font-medium text-slate-800">Demonstração de captação de voz</p>
                  <p className="text-sm text-slate-600">Baixa latência • Alta fidelidade • Speaker diarization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
