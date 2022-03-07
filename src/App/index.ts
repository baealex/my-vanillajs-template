import style from './App.module.scss';

export function App($app: HTMLElement) {
    this.$app = $app;

    $app.innerHTML = `
        <div class="${style.App}">
            <div class="${style.greet}">
                Hello, My Vanila JS!
            </div>
        </div>
    `;
}