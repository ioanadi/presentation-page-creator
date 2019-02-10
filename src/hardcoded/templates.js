import style from '@/hardcoded/template-standard-style.js';

export default [
	`<!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>Theme 1</title>
                <style>` + style.standardStyle + `</style>
            </head>
            <body>
                <header>Header</header>
                <div class="section big-section">Big Section</div>
                <div class="section big-section">Big Section</div>
                <footer>Footer</footer>
            </body>
        </html>`,

	`<!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>Theme 2</title>
                <style>` + style.standardStyle + `</style>
            </head>
            <body>
                <header>Header</header>
                <div class="sections-row">
                    <div class="section">Section</div>
                    <div class="section">Section</div>
                    <div class="section">Section</div>
                </div>
            <footer>Footer</footer>
            </body>
        </html>`,

	`<!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>Theme 3</title>
                <style>` + style.standardStyle + `</style>
            </head>
            <body>
                <header>Header</header>
                <div class="sections-row">
                    <div class="sections-column">
                        <div class="section">Section</div>
                        <div class="section">Section</div>
                        <div class="section">Section</div>
                    </div>
                    <div class="sections-column">
                        <div class="section">Section</div>
                        <div class="section">Section</div>
                        <div class="section">Section</div>
                    </div>
                </div>
            <footer>Footer</footer>
            </body>
        </html>`,

];
