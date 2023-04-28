export interface IPoema {
    id: number;
    titulo: string;
    autor: string;
    conteudo: string; //lista de string por estrofe?
    imagem: string;
}


export const poemas: IPoema[] = [
    { id: 1, titulo: "Poeminho do contra", autor: "Mario Quintana", conteudo: "Todos estes que aí estão\nAtravancando o meu caminho,\nEles passarão.\nEu passarinho!", imagem: "" },
    { id: 2, titulo: "O Elefantinho", autor: "Vinícius de Moraes", conteudo: "Onde vais, elefantinho\nCorrendo pelo caminho\nAssim tão desconsolado?\nAndas perdido, bichinho\nEspetaste o pé no espinho\nQue sentes, pobre coitado?\n— Estou com um medo danado\nEncontrei um passarinho", imagem: "" },
    { id: 3, titulo: "Leilão de jardim", autor: "Cecília Meireles", conteudo: "Quem me compra um jardim com flores?\nBorboletas de muitas cores,\nlavadeiras e passarinhos,\novos verdes e azuis nos ninhos?\nQuem me compra este caracol?\nQuem me compra um raio de sol?\nUm lagarto entre o muro e a hera,\numa estátua da Primavera?\nQuem me compra este formigueiro?\nE este sapo, que é jardineiro?\nE a cigarra e a sua canção?\nE o grilinho dentro do chão?\n(Este é o meu leilão.)", imagem: "" },
    { id: 4, titulo: "Todas as coisas", autor: "Arnaldo Antunes", conteudo: "Todas as coisas\ndo mundo não\ncabem numa\nideia. Mas tu-\ndo cabe numa\npalavra, nesta\npalavra tudo.", imagem: "" },
    { id: 5, titulo: "O Eco", autor: "Cecília Meireles", conteudo: "O menino pergunta ao eco\nOnde é que ele se esconde.\nMas o eco só responde: Onde? Onde?\nO menino também lhe pede:\nEco, vem passear comigo!\n\nMas não sabe se o eco é amigo\nou inimigo.\nPois só lhe ouve dizer: Migo!", imagem: "" },
]