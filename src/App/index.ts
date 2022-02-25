import './App.scss';

export function App($app: HTMLElement) {
    this.$app = $app;

    $app.innerHTML = `
        <div class="App">
            <div class="greet">
                Hello, My Vanila JS!
            </div>
        </div>
    `;
}