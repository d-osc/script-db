import { div, main as mainEl } from 'elit/el';
import { mount } from 'elit/dom'
import type { VNode } from 'elit';
import { RouterView } from './router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { styles } from './styleNames';
import { initStyles } from './styles';

// Initialize all styles
initStyles();

// Main app component
const App = (): VNode => {
  return div({ class: styles.appContainer },
    Header(),
    mainEl({ class: styles.mainContent },
      div({ class: styles.page },
        RouterView()
      )
    ),
    Footer()
  );
};

// Mount app
const appElement = document.getElementById('app');
if (appElement) {
  mount(appElement, App());
}
