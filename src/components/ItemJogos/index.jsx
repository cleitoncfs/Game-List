import estilos from "./ItemJogos.module.css";
import xboxLogo from "../../assets/xbox-logo.png";
import playstationLogo from "../../assets/playstation-logo.jpg";
import nintendoLogo from "../../assets/nintendo-logo.jpg";

export default function ItemJogos({
    nome,
    plataforma,
    favorito,
    aoMarcarFavorito,
}) {
    const logo =
        plataforma === "xbox"
            ? xboxLogo
            : plataforma === "playstation"
            ? playstationLogo
            : nintendoLogo;

    return (
        <div className={`${estilos.card} ${favorito ? estilos.favorito : ""}`}>
            <figure>
                <img src={logo} alt={`Logo da plataforma ${plataforma}`} />
            </figure>

            <div className={estilos.cardInfo}>
                <div>
                    <p>{nome}</p>
                    <small style={{ opacity: 0.7 }}>
                        {plataforma.toUpperCase()}
                    </small>
                </div>

                <button
                    className={estilos.botaoFavorito}
                    onClick={aoMarcarFavorito}
                >
                    {favorito ? "⭐ Favorito" : "☆ Marcar como favorito"}
                </button>
            </div>
        </div>
    );
}
