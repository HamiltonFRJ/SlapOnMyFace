console.log('Hello World');

function App(){
    return <div>
        <h1>Aplicativo React</h1>
        <Button />
    </div>;
}

function Button(){
    const [total, setTotal] = React.useState(0);
    return <button onClick={() => setTotal(total + 1)}>Adicionar {total}</button>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />)