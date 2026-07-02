// ==========================================
// ARQUIVO GESTOR DE TRÁFEGO E CONFIG. GERAIS
// ==========================================

const CONFIG = {
    // 1. DADOS DA EMPRESA E ATENDIMENTO
    empresa: {
        nome1: "PREST",
        nome2: "CAMP", // Aparece em destaque (com a cor primária)
        whatsapp: "5519988232162" // Apenas números
    },

    // 2. OPÇÕES DE PISOS E PREÇOS (O Select será populado sozinho no HTML)
    pisos: [
        { categoria: "Pisos Laminados", nome: "Piso Laminado (Completo)", preco: 95.90 },
        { categoria: "Pisos Vinílicos", nome: "Piso Vinílico (Completo)", preco: 139.90 }
    ],

    // 3. OPÇÕES DE PISO ATUAL (Select 1)
    opcoesPisoAtual: [
        { valor: "Contrapiso", texto: "Contrapiso (Cimento)" },
        { valor: "Cerâmica", texto: "Cerâmica / Porcelanato" },
        { valor: "Madeira", texto: "Madeira / Taco" },
        { valor: "Outro", texto: "Outro / Não sei" }
    ],

    // 4. BÔNUS E INCLUSÕES NO ORÇAMENTO (Aparece no final, no modal)
    // Laminado: rodapés até 7cm, mantas, perfis, colas e calafetadores, instalação
    // Vinílico: rodapés até 7cm, massa de preparação, colas e calafetadores, instalação
    bonus: [
        { titulo: "Rodapé até 7cm (branco ou na cor)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Materiais (cola, manta, perfis)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Instalação Profissional", subtitulo: "INCLUSO", strike: "", gratis: true }
    ]
};
