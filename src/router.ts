import { createRouter } from 'elit/router';
import { reactive } from 'elit/state';
import type { VNode } from 'elit';
import { HomePage } from './pages/HomePage';
import { InstallationPage } from './pages/InstallationPage';
import { QuickStartPage } from './pages/QuickStartPage';
import { DocsPage } from './pages/DocsPage';
import { UsagePage } from './pages/UsagePage';
import { ScriptsPage } from './pages/ScriptsPage';
import { ApiPage } from './pages/ApiPage.ts';

const routes = [
  { path: '/', component: HomePage },
  { path: '/installation', component: InstallationPage },
  { path: '/quick-start', component: QuickStartPage },
  { path: '/docs', component: DocsPage },
  { path: '/usage', component: UsagePage },
  { path: '/scripts', component: ScriptsPage },
  { path: '/api', component: ApiPage }
];

const routerOptions = {
  mode: 'hash' as const,
  base: '/script-db',
  routes
};

// Initialize router
export const router = createRouter(routerOptions);

// Create RouterView component with reactive
export const RouterView = (): VNode => {
  return reactive(router.currentRoute, (location) => {
    const match = routes.find(r => r.path === location.path);
    if (match) {
      return match.component();
    }
    // 404 fallback
    return { tagName: 'div', props: {}, children: ['404 - Not Found'] } as VNode;
  });
};