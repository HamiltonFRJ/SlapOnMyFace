const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />)

function App(){
    return <div>
        <header>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Sobre mim
                </li>
                <li>
                    Curriculo 
                </li>
                <li>
                    <Button />  
                </li>
            </ul>
        </header>
    </div>;
}

function Button(){
    return <button>SlapOnMyFace</button>
}