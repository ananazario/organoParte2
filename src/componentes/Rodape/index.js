import './rodape.css'

const Rodape = () => {
    return (
        <footer>
            <div className="redesSociais">
                <img src="/imagens/facebook.png" alt="Logo Facebook" />
                <img src="/imagens/twitter.png" alt="Logo Twitter" />
                <img src="/imagens/instagram.png" alt="Logo Instagram" />
            </div>
            <div className="logo">
                <img src="/imagens/logo.png" alt="Logo da Alura" />
            </div>
            <div className="frase">
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}

export default Rodape