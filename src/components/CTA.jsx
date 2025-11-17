import { ArrowRight, Mic } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 text-white overflow-hidden relative">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Comece a transcrever em minutos</h2>
              <p className="mt-3 text-white/90">Teste gratuitamente com 60 minutos de transcrição. Sem cartão de crédito.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <a href="#" className="inline-flex items-center gap-2 bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50">
                <Mic className="h-5 w-5" /> Criar conta grátis
              </a>
              <a href="/test" className="inline-flex items-center gap-2 bg-transparent border border-white/40 text-white px-5 py-3 rounded-lg hover:bg-white/10">
                Verificar backend <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
