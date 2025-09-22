import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"a30c65ba-aa7b-4b4e-9e3f-bb901c09f813","homePageId":"e73845ea-d516-4bb9-996d-c6c619a50e32","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"16f54082-a357-4f82-81e7-ddb5bcf924e7","linkId":"16f54082-a357-4f82-81e7-ddb5bcf924e7","name":"dash-carpeta","folder":null,"paths":{"en":"dash-carpeta/{{ido|}}/{{idc|}}","default":"dash-carpeta/{{ido|}}/{{idc|}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"e24e5b47-9081-4c6c-a2ea-988af57d3e63","sectionTitle":"Top Nav","linkId":"eacf84fe-c0e0-46d2-94cc-d410683d476a"},{"uid":"64504eea-1d94-46a0-b6c5-88e908a46151","sectionTitle":"Container","linkId":"157f35d7-db37-4691-9cc3-c1ed991b46a0"},{"uid":"07958d7d-a10f-4c72-adf3-7b3872eb0d1b","sectionTitle":"Sidemenu","linkId":"dbf4e1b2-a575-4d9f-9806-bc6169f7d90e"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"32edcafe-7da1-4b2d-b5af-5d05434df286","linkId":"32edcafe-7da1-4b2d-b5af-5d05434df286","name":"Table_AI","folder":null,"paths":{"en":"table_ai/{{ID|}}","default":"table_ai/{{ID|}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"1f1d9751-0ca6-4e2d-82c9-598e0e3ef276","sectionTitle":"Top","linkId":"d52a0cf5-3692-4875-bbd5-fc465810217c"},{"uid":"aa074935-0144-4078-8efb-2c73412476ed","sectionTitle":"Wave Background Section","linkId":"df9f6276-21d7-42f2-a2b4-cff103c0f0d2"},{"uid":"5acc9376-46b1-49ee-8c51-1fc3c8e754a6","sectionTitle":"Main Container Section","linkId":"85d33fc1-be1d-4714-9d1e-4868e23a0d22"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"dd1552dd-af09-4b07-8a06-d77c067202d8","linkId":"dd1552dd-af09-4b07-8a06-d77c067202d8","name":"dash-papelera","folder":null,"paths":{"en":"dash-papelera/{{ido|}}","default":"dash-papelera/{{ido|}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"091caec6-ff86-4c54-aa21-a116e562b15d","sectionTitle":"Top Nav","linkId":"31d5b3e9-709e-4b27-9e34-ad5d9b2ca273"},{"uid":"6b65d4de-8522-435e-b79c-1938fb5e701e","sectionTitle":"Container","linkId":"b04f2c80-4f27-42b4-8b21-f146ee27dabf"},{"uid":"6f7efec2-4d00-4a80-a1f3-dfc5fe5b5492","sectionTitle":"Sidemenu","linkId":"b973cdec-e838-424c-a85b-a96b120eecf1"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"bda8f956-22c7-4652-b1d8-57f8221002bb","linkId":"bda8f956-22c7-4652-b1d8-57f8221002bb","name":"Dashboard","folder":null,"paths":{"en":"dashboard","default":"dashboard"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"bfac46f4-97f4-4b4c-8b3a-8e6db7972b87","sectionTitle":"Top Navigation Bar","linkId":"41e08af8-a530-4b0e-bb20-a78d38df0d0e"},{"uid":"7b894231-ed30-42a8-b8d8-343b6aa82fd7","sectionTitle":"Section","linkId":"38923062-fe9b-402a-bda7-7c61fd900228"},{"uid":"8043b98b-5692-4dbe-ac93-c8d234bb24de","sectionTitle":"Main Content","linkId":"5cccd6b9-27a4-456f-8a11-60e228b3d563"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"75581a32-eec4-4488-bffd-3140f19cc95d","linkId":"75581a32-eec4-4488-bffd-3140f19cc95d","name":"Olvido contraseña New","folder":"New/","paths":{"en":"ad/{{id|}}","default":"ad/{{id|}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"b6d63b44-ef35-4fc1-9612-fd4c558b1018","sectionTitle":"Reset password","linkId":"c5a0ef41-f7a2-4b10-b5cb-3b9212da0bb1"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"130406cc-3e34-49ec-b841-441260fa1939","linkId":"130406cc-3e34-49ec-b841-441260fa1939","name":"Nueva Contraseña New","folder":"New/","paths":{"en":"nueva-contrasena","default":"nueva-contrasena"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"d6aaa274-7fcb-41c8-99c3-ba2a9221b170","sectionTitle":"Change password","linkId":"e78694ac-8c9f-41b9-b738-42564a29788e"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"48e6b003-62d0-4543-8ec0-1ed56e6ba004","linkId":"48e6b003-62d0-4543-8ec0-1ed56e6ba004","name":"Registro New","folder":"New/","paths":{"en":"email-verification","default":"email-verification"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"093a3b44-438b-40d5-86bc-d08b131de821","sectionTitle":"Sign up","linkId":"b89f0665-12db-4118-b882-aedd02de0106"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c8e752f5-bf51-48ec-a11e-5034796257fd","linkId":"c8e752f5-bf51-48ec-a11e-5034796257fd","name":"Registro_Invitado","folder":"New/","paths":{"en":"registro_invitado","default":"registro_invitado"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"3dd13b5a-ad9f-45ab-94e6-d28264ebad44","sectionTitle":"Sign up","linkId":"cfc15ec6-5dd0-4136-99f0-731c51feb7d9"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f9c3ed87-98b6-4178-a670-3508759fdb1b","linkId":"f9c3ed87-98b6-4178-a670-3508759fdb1b","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"acd727f3-79b5-49c8-9585-0083a314a1cf","sectionTitle":"Wave Background Section","linkId":"fe2f305c-ba4d-4313-8ef6-b35183bf82ed"},{"uid":"9cd3730a-cc75-42eb-9c4a-9122920da3fc","sectionTitle":"Main Container Section","linkId":"1cb27937-feb2-4809-b703-7ab313fc1cc1"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e73845ea-d516-4bb9-996d-c6c619a50e32","linkId":"e73845ea-d516-4bb9-996d-c6c619a50e32","name":"Login New","folder":"New/","paths":{"en":"login-new","default":"login-new"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"21d43366-aa83-48c0-968d-96b70f86f7e8","sectionTitle":"Login","linkId":"359c0d6c-3dac-4731-9dd2-29d1c02fe7cc"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"983cedbf-a325-40cb-96c5-0803019d9a50","linkId":"983cedbf-a325-40cb-96c5-0803019d9a50","name":"CarpetasUnidad","folder":null,"paths":{"en":"carpetasunidad/{{id|}}","default":"carpetasunidad/{{id|}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"46e225fe-d057-4e5e-b380-3758a4d56c06","sectionTitle":"Top Nav","linkId":"b16f2748-a491-4610-b013-f9b1db677dd1"},{"uid":"36c935c8-434f-4d9e-aa8d-3b8d05862b5a","sectionTitle":"Container","linkId":"87f47a2c-016e-4960-86d0-0ade573b93e0"},{"uid":"eae74b4b-a83b-404e-954c-b42261d640f3","sectionTitle":"Sidemenu","linkId":"c710587d-f08c-4566-9619-c50c50203de7"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"40c588d4-1d5d-48f4-aa9e-a9bd97451228","linkId":"40c588d4-1d5d-48f4-aa9e-a9bd97451228","name":"Dashboard-users","folder":null,"paths":{"en":"dashboard-users/{{id|}}","default":"dashboard-users/{{id|}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a8072a44-6bd4-454f-8523-8de2d545dfe2","sectionTitle":"Top Navigation Bar","linkId":"2fc23bb9-d90c-4b4d-a0ae-68c6b116c09d"},{"uid":"5a4b205f-7635-46d4-b704-ebfe78f1a4dd","sectionTitle":"Left Sidebar","linkId":"daa317f9-cc6b-4234-93d6-09a9f9d8c88b"},{"uid":"c5b4aa6a-2cae-4a4c-8fd3-d406d1739421","sectionTitle":"Section","linkId":"32d888ce-11b5-4885-a182-fd5d48b1651e"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c4a436e3-16a0-49c0-9157-5f32cbec83e4","linkId":"c4a436e3-16a0-49c0-9157-5f32cbec83e4","name":"SideMenu","folder":null,"paths":{"en":"sidemenu/{{id|}}","default":"sidemenu/{{id|}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"c7dd977e-a24d-495c-9b51-1e122c7cad2e","sectionTitle":"Top Nav","linkId":"dd1c51e6-50e7-4bb0-9e4a-0be32e2bacc9"},{"uid":"a52696fe-5c7b-42e9-87d1-4fd761f2cd09","sectionTitle":"Container","linkId":"d38b15ba-2078-4dca-b114-566752d1a962"},{"uid":"c127faa8-c2fc-42b9-a9d9-f5de90f16cea","sectionTitle":"Sidemenu","linkId":"9f3a0357-11f4-4c9f-9772-d0b1581de7bf"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"72670b0b-a666-4f50-95c1-9999ae66d033","linkId":"72670b0b-a666-4f50-95c1-9999ae66d033","name":"Redireccion","folder":null,"paths":{"en":"redireccion","default":"redireccion"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"531c4dcd-e28d-45d5-97f0-3cd3eef739a1","sectionTitle":"Section","linkId":"dea51fc2-c312-4e4f-a69e-102cf87a3e58"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9","name":"CSV","namespace":"csv"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"8bc1b5c9-29e4-4269-becb-a2e1a8de9127","name":"WeWeb Email","namespace":"wewebEmail"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 73;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
