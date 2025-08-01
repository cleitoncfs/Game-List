import { useState } from "react";
import { retornarJogos, buscarJogo } from "./components/servico";
import ItemJogos from "./components/ItemJogos";
import "./App.css";

function App() {
    const [todosJogos, setTodosJogos] = useState(retornarJogos());
    const [listaJogos, setListaJogos] = useState(todosJogos);
    const [textoBusca, setTextoBusca] = useState("");

    const handleFiltrarJogoPlataforma = (plataforma) => {
        setListaJogos(
            todosJogos.filter((jogo) => jogo.plataforma === plataforma)
        );
        setTextoBusca("");
    };

    const handleFiltrarFavoritos = () => {
        const favoritos = todosJogos.filter((jogo) => jogo.favorito);
        setListaJogos(favoritos);
        setTextoBusca("");
    };

    const handleLimparFiltro = () => {
        setListaJogos(todosJogos);
        setTextoBusca("");
    };

    const handleBuscarJogo = (textoDigitado) => {
        setTextoBusca(textoDigitado);
        setListaJogos(buscarJogo(textoDigitado, todosJogos));
    };

    const marcarFavorito = (idDoJogo) => {
        const novaLista = todosJogos.map((jogo) =>
            jogo.id === idDoJogo ? { ...jogo, favorito: !jogo.favorito } : jogo
        );
        setTodosJogos(novaLista);
        setListaJogos(novaLista);
    };

    return (
        <div className="app-wrapper">
            <div className="container_principal">
                <h2>🎮 Lista de Jogos Exclusivos</h2>

                <div className="container_btns">
                    <button
                        className="btn xbox"
                        onClick={() => handleFiltrarJogoPlataforma("xbox")}
                    >
                        <img src="/src/assets/xbox-logo.png" alt="Xbox" /> Xbox
                    </button>
                    <button
                        className="btn playstation"
                        onClick={() =>
                            handleFiltrarJogoPlataforma("playstation")
                        }
                    >
                        <img
                            src="/src/assets/playstation-logo.jpg"
                            alt="PlayStation"
                        />{" "}
                        PlayStation
                    </button>
                    <button
                        className="btn nintendo"
                        onClick={() => handleFiltrarJogoPlataforma("nintendo")}
                    >
                        <img
                            src="/src/assets/nintendo-logo.jpg"
                            alt="Nintendo"
                        />{" "}
                        Nintendo
                    </button>
                    <button
                        className="btn favoritos"
                        onClick={handleFiltrarFavoritos}
                    >
                        <img src="/src/assets/estrela.png" alt="Favoritos" />{" "}
                        Favoritos
                    </button>
                    <button className="btn limpar" onClick={handleLimparFiltro}>
                        <img src="/src/assets/lixo.png" alt="Limpar Filtro" />{" "}
                        Limpar Filtro
                    </button>
                </div>
            </div>

            <div className="container_input">
                <div className="campo_busca">
                    <img src="/src/assets/lupa.png" alt="Buscar" />
                    <input
                        type="text"
                        value={textoBusca}
                        onChange={(e) => handleBuscarJogo(e.target.value)}
                        placeholder="Pesquise um jogo ou plataforma"
                    />
                </div>
            </div>

            <div className="container_cards">
                {listaJogos.length > 0 ? (
                    listaJogos.map((jogo) => (
                        <ItemJogos
                            key={jogo.id}
                            nome={jogo.nome}
                            plataforma={jogo.plataforma}
                            favorito={jogo.favorito}
                            aoMarcarFavorito={() => marcarFavorito(jogo.id)}
                        />
                    ))
                ) : (
                    <div className="mensagem_vazia">
                        <span role="img" aria-label="triste">
                            😢
                        </span>
                        <p>Nenhum jogo encontrado</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
