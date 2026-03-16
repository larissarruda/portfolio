import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Copywriting = ({ darkMode }) => {
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0)
  const [currentSection, setCurrentSection] = useState('objetivo')
  const [currentPage, setCurrentPage] = useState(1)

  const portfolio = [
    {
      id: 1,
      file: '/Pensao.mp4',
      title: 'Adv - pensão',
      totalPages: 3,
      objetivo: `Educar o público sobre as regras de pagamento de pensão alimentícia, esclarecendo dúvidas comuns e orientando sobre os direitos e deveres relacionados a esse tema. 
      
      O conteúdo visa informar os direitos dos filhos de receberem mesmo após os 18 anos, desde que estejam estudando ou não possam se sustentar, e também orientar os responsáveis sobre a necessidade de solicitar a exoneração judicial para encerrar o pagamento da pensão. 
      
      A escolha do ambiente de supermercado e a linguagem acessível buscam tornar o conteúdo mais próximo do público, facilitando a compreensão e engajamento.`,
      roteiro: `🎥 Cena 1 –
📍 Visual: Mariana com um carrinho de supermercado falando:

Até quando precisa pagar pensão?

Você provavelmente tem essa dúvida e até o final desse eu vou te explicar tudo!"

🎥 Cena 2 –
📍 Visual: Mariana na área do hortifrutti escolhendo frutas
"Enquanto o filho for menor de idade, o pagamento da pensão é obrigatório. Isso não tem discussão."

🎥 Cena 3 –
📍 Visual: Mariana colocando produtos no carrinho, como arroz ou feijão
"Após os 18 anos, a pensão pode continuar se o filho ainda estiver estudando (seja ensino superior, curso técnico ou curso profissionalizante ) ou se não puder se sustentar sozinho."

🎥 Cena 4 –
📍 Visual: Mariana segurando um papel com os dizeres abaixo em formato de lista de compras
”Mas então quando que a pensão pode ser encerrada?
✔️ O filho se forma e consegue se sustentar;
✔️ Ele se torna financeiramente independente;
✔️ Ou em casos de mudança significativa na vida de quem paga."
"Mas atenção: você não pode simplesmente parar de pagar! É preciso pedir a exoneração de pensão judicialmente — e cada caso é analisado de forma individual."

🎥 Cena 5 –
Visual: Mariana indo para a fila do caixa

**"**Essas regrinhas evitam muita dor de cabeça — pra quem paga e pra quem recebe.
E ó… se eu fosse você, já deixava o gostei pra esse vídeo chegar a mais pessoas que precisam aprender sobre pensão.
`,
      preview: '/Pensao.jpg'
    },
    {
      id: 2,
      file: '/Brainrot.mp4',
      title: 'Psi - Brainrot',
      totalPages: 3,
      objetivo: `O objetivo deste conteúdo é conscientizar os pais sobre os efeitos negativos do consumo excessivo de conteúdos rápidos e altamente estimulantes. 
      
      O vídeo busca informar sobre os riscos associados a esse tipo de conteúdo, como dificuldade de concentração, estresse, ansiedade e aversão a atividades que exigem foco e paciência. 
      
      A ambientação em um parque e a linguagem acessível visam tornar o conteúdo mais próximo do público, facilitando a compreensão e engajamento, além de oferecer orientações práticas para os pais controlarem o tempo de tela dos filhos e incentivarem atividades mais saudáveis.`,
      roteiro: `Cena 1
📍 Visual: Camila sentada na grama de algum parque em tom sério,
Fala:: “CUIDADO: Você está apodrecendo a mente do seu filho!”
Fala: "Você já ouviu falar em brain rot?
”Brain rot são conteúdo rápidos, onde não há estimulo algum de aprendizado ou raciocínio”
”É como se o cérebro da criança entrasse em modo automático, só recebendo estímulo sem precisar pensar.”

Cena 2
📍 Visual: Camila mostrando no celular um vídeo super colorido e agitado (tipo YouTube Kids)
Fala:
"Esse bombardeio de estímulos pode se transformar em um vício.
A criança se acostuma com a gratificação a cada vídeo e, aos poucos, perde o interesse por qualquer coisa que exija um pouco mais de foco e paciência."
"Cortes rápidos, muita cor e música repetitiva, prendem a atenção, mas também podem causar :
✔️ Dificuldade de concentração
✔️ Estresse
✔️ Ansiedade
✔️ Aversão a filmes, aulas ou até conversas

Cena 3
📍 Visual: Camila com tom firme, mas acolhedor, enquanto anda no parque e fala:
"As telas fazem parte da nossa rotina, mas o excesso é o que traz esses efeitos.
A criança não tem maturidade pra dosar — quem define os limites é você.
Defina horários, locais e momentos em que o celular ou tablet pode ser usado. Seja firme e fale sério mas claro, sem violências."

"Hoje já existem ferramentas no próprio celular que ajudam a controlar o tempo de uso.
Além disso, estimule seu filho a brincar ao ar livre, ler livros, jogar cartas ou jogos de tabuleiro.
Sua companhia, exemplo e atenção são as coisas mais importantes que ele pode receber."

Cena 5
📍 Visual: Camila olhando direto pra câmera, tom acolhedor em pé a céu aberto
Fala: "A mente da sua criança está em formação.
E tudo que ela consome agora influencia em quem ela será amanhã.
Se esse conteúdo te fez pensar, salva e compartilha com quem também se preocupa com o futuro das crianças."
`,
      preview: '/Brainrot.jpg'
    },
    {
      id: 3,
      file: '/Netflix.mp4',
      title: 'Caso Netflix',
      totalPages: 3,
      objetivo: `O objetivo deste conteúdo é alertar as PMEs sobre os riscos ocultos de tributação de serviços digitais, usando o caso da Netflix como exemplo. O vídeo busca educar os empresários sobre a importância de entender as regras fiscais relacionadas a serviços digitais, destacando que o risco de autuação não depende do tamanho da empresa, mas sim dos processos internos.

O conteúdo visa informar sobre as consequências de uma autuação fiscal, que vão além do pagamento de impostos, incluindo impactos no valuation, provisões e balanço da empresa. 

A ambientação em um escritório e a linguagem acessível buscam tornar o conteúdo mais próximo do público empresarial, facilitando a compreensão e engajamento.`,
      roteiro: `ROTEIRO
1️⃣ Gancho de abertura • Tela mostrando a manchete. • Tópico: “Quando uma big tech toma um ‘spoiler’ de R$ 3,4 bi… você sabe o que isso significa pro seu negócio?” 

2️⃣ O que realmente aconteceu • Disputa por interpretação de tributação de serviços digitais. • Serviço nasce fora, cliente paga aqui → risco invisível explode depois. 

3️⃣ O ponto crítico • Fisco brasileiro é agressivo com operações digitais. • PME acha que não tem risco porque “não é multinacional”. • Erro: risco não depende de tamanho, depende de processo. 

4️⃣ O impacto real • Além do imposto: mexe no valuation, afeta provisões, distorce balanço, prejudica investidores 

5️⃣ O aviso indireto • Se uma empresa global, com times jurídicos e fiscais gigantescos, erra… O que acontece com quem só olha imposto no fechamento do mês? 

6️⃣ A CTA • CTA verbal/tela: “Se você acha que isso não pode acontecer na sua empresa… eu tenho um alerta pra te dar.” 👉 Comenta se você quer que eu destrinche o que esse caso ensina para PMEs. [“Esse caso da Netflix não é exceção. É um sinal. E tem muita empresa brasileira prestes a levar o mesmo tombo sem nem perceber.”] - opcional
`,
      preview: '/Netflix.jpg'
    }
  ]

  const nextPage = () => {
    setCurrentPage((prev) =>
      prev < portfolio[currentPdfIndex].totalPages ? prev + 1 : prev
    )
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const goToPdf = (index) => {
    setCurrentPdfIndex(index)
    setCurrentPage(1)
    setCurrentSection('objetivo')
  }

  const toggleSection = (direction) => {
    if (direction === 'next') {
      setCurrentSection((prev) => (prev === 'objetivo' ? 'roteiro' : 'objetivo'))
    } else {
      setCurrentSection((prev) => (prev === 'roteiro' ? 'objetivo' : 'roteiro'))
    }
  }

  const currentItem = portfolio[currentPdfIndex]
  const isVideo = currentItem.file.toLowerCase().endsWith('.mp4')

  return (
    <div className="w-full py-12 px-4 bg-[#242834] rounded-lg shadow-lg relative">
      <div className="max-w-5xl mx-auto relative grid grid-cols-2 gap-6">
        <div className="relative overflow-hidden rounded-lg shadow-2xl p-8 bg-[#1f2230] text-white">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => toggleSection('prev')}
              className="bg-white/70 hover:bg-white text-gray-900 h-8 w-8 flex items-center justify-center rounded-full transition-all hover:scale-110"
            >
              <ChevronLeft size={16} />
            </button>
            <h2 className="text-2xl font-bold capitalize">{currentSection}</h2>
            <button
              onClick={() => toggleSection('next')}
              className="bg-white/70 hover:bg-white text-gray-900 h-8 w-8 flex items-center justify-center rounded-full transition-all hover:scale-110"
            >
              <ChevronRight size={16} />
            </button>
          </div>
          <p className="whitespace-pre-line text-lg leading-relaxed">
            {portfolio[currentPdfIndex][currentSection]}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-2xl">
          {isVideo ? (
            <video
              key={`${currentPdfIndex}-${currentPage}`}
              controls
              className="w-full h-[600px] border-none overflow-hidden bg-black"
              title={`${currentItem.title} - Vídeo`}
            >
              <source src={currentItem.file} type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          ) : (
            <iframe
              key={`${currentPdfIndex}-${currentPage}`}
              src={`${currentItem.file}#page=${currentPage}&toolbar=0&navpanes=0`}
              className="w-full h-[600px] border-none overflow-hidden block"
              title={`${currentItem.title} - PDF`}
            />
          )}

          {!isVideo && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                onClick={prevPage}
                className="bg-white/80 hover:bg-white text-gray-900 px-4 py-2 rounded-full transition-all hover:scale-105"
              >
                Página anterior
              </button>
              <button
                onClick={nextPage}
                className="bg-white/80 hover:bg-white text-gray-900 px-4 py-2 rounded-full transition-all hover:scale-105"
              >
                Próxima página
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <div className="text-gray-300 text-sm bg-black/50 px-4 py-2 rounded-full">
          {isVideo
            ? `Vídeo ${currentPdfIndex + 1} / ${portfolio.length} — ${currentItem.title}`
            : `PDF ${currentPdfIndex + 1} / ${portfolio.length} — ${currentSection} — Página ${currentPage} / ${currentItem.totalPages}`}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {portfolio.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToPdf(index)}
            className={`relative h-24 w-32 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
              index === currentPdfIndex ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {item.file.toLowerCase().endsWith('.mp4') ? (
              item.preview ? (
                <img
                  src={item.preview}
                  alt={`Preview ${item.title}`}
                  className="w-full h-full object-cover pointer-events-none"
                />
              ) : (
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover border-none overflow-hidden block pointer-events-none"
                >
                  <source src={item.file} type="video/mp4" />
                </video>
              )
            ) : (
              <iframe
                src={`${item.file}#page=1&toolbar=0&navpanes=0`}
                className="w-full h-full border-none overflow-hidden block pointer-events-none"
                title={`Miniatura ${item.title}`}
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1">
              {item.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Copywriting