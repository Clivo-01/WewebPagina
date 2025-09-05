import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"table_ai/:param":{"outputDir":"./table_ai/:param","lang":"en","cacheVersion":62,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/table_ai/:param/"},{"rel":"alternate","hreflang":"en","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/table_ai/:param/"}]},"dashboard":{"outputDir":"./dashboard","lang":"en","cacheVersion":62,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/dashboard/"},{"rel":"alternate","hreflang":"en","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/dashboard/"}]},"ad/:param":{"outputDir":"./ad/:param","lang":"en","cacheVersion":62,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/ad/:param/"},{"rel":"alternate","hreflang":"en","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/ad/:param/"}]},"nueva-contrasena":{"outputDir":"./nueva-contrasena","lang":"en","cacheVersion":62,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/nueva-contrasena/"},{"rel":"alternate","hreflang":"en","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/nueva-contrasena/"}]},"email-verification":{"outputDir":"./email-verification","lang":"en","cacheVersion":62,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/email-verification/"},{"rel":"alternate","hreflang":"en","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/email-verification/"}]},"registro_invitado":{"outputDir":"./registro_invitado","lang":"en","cacheVersion":62,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/registro_invitado/"},{"rel":"alternate","hreflang":"en","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/registro_invitado/"}]},"home":{"outputDir":"./home","lang":"en","cacheVersion":62,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/home/"},{"rel":"alternate","hreflang":"en","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/home/"}]},"index":{"outputDir":"./","lang":"en","cacheVersion":62,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/"}]},"dashboard-users/:param":{"outputDir":"./dashboard-users/:param","lang":"en","cacheVersion":62,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/dashboard-users/:param/"},{"rel":"alternate","hreflang":"en","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/dashboard-users/:param/"}]},"redireccion":{"outputDir":"./redireccion","lang":"en","cacheVersion":62,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/redireccion/"},{"rel":"alternate","hreflang":"en","href":"https://a30c65ba-aa7b-4b4e-9e3f-bb901c09f813.weweb-preview.io/redireccion/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
