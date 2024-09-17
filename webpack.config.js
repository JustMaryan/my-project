import path from 'path';
import { fileURLToPath } from 'url';
import { buildWebpack } from './config/webpack/buildWebpack.js';

// Отримуємо __filename і __dirname у форматі ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {
    const options = {
        input: path.resolve(__dirname, 'src'),  // Абсолютний шлях до input
        output: path.resolve(__dirname, 'dist'),  // Абсолютний шлях до output
        //* Передаємо точки входу до javascript
        entry: {
            index: path.resolve(__dirname, 'src/js/index'),  // Абсолютний шлях до entry
            lib: path.resolve(__dirname, 'src/js/lib'),  // Абсолютний шлях до entry
            // app: path.resolve(__dirname, 'src/js/app'),
        },
        //* Передаємо точки входу для html
        html: [
            {
                template: path.resolve(__dirname, 'src/index.html'),  // Абсолютний шлях до шаблону HTML
                filename: 'index.html',
                chunks: ['index'], // Вказуємо необхідні js файли для підключення сторінки
            },
            {
                template: path.resolve(__dirname, 'src/pages/lib.html'),  // Абсолютний шлях до шаблону HTML
                filename: 'pages/lib.html',
                chunks: ['lib'], // Вказуємо необхідні js файли для підключення сторінки
            },
        ],
        fonts: path.resolve(__dirname, 'fonts'),
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
    };

    // Викликаємо buildWebpack з правильними параметрами
    const config = buildWebpack(options);

    return config;
}
