import { siteGroups } from '../data/sites';
import { SearchEngine, searchEngineUrls } from '../types/search';

class NavigationApp {
  private currentEngine: SearchEngine = 'baidu';
  private searchInput: HTMLInputElement | null = null;
  private searchBtn: HTMLButtonElement | null = null;
  private navigationContainer: HTMLElement | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    this.searchInput = document.getElementById('searchInput') as HTMLInputElement;
    this.searchBtn = document.getElementById('searchBtn') as HTMLButtonElement;
    this.navigationContainer = document.getElementById('navigationContainer');

    this.setupSearchEngine();
    this.setupSearchInput();
    this.renderNavigation();
  }

  private setupSearchEngine(): void {
    const engineButtons = document.querySelectorAll('.engine-btn');
    
    engineButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // 移除所有 active 类
        engineButtons.forEach(b => b.classList.remove('active'));
        // 添加 active 类到当前按钮
        btn.classList.add('active');
        
        const engine = (btn as HTMLElement).dataset.engine as SearchEngine;
        if (engine) {
          this.currentEngine = engine;
        }
      });
    });
  }

  private setupSearchInput(): void {
    if (!this.searchInput || !this.searchBtn) return;

    const performSearch = () => {
      const query = this.searchInput?.value.trim();
      if (!query) return;

      const searchUrl = searchEngineUrls[this.currentEngine] + encodeURIComponent(query);
      window.open(searchUrl, '_blank');
      
      // 清空输入框
      if (this.searchInput) {
        this.searchInput.value = '';
      }
    };

    // 点击搜索按钮
    this.searchBtn.addEventListener('click', performSearch);

    // 回车键搜索
    this.searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }

  private renderNavigation(): void {
    if (!this.navigationContainer) return;

    siteGroups.forEach(group => {
      const groupElement = this.createGroupElement(group);
      this.navigationContainer?.appendChild(groupElement);
    });
  }

  private createGroupElement(group: typeof siteGroups[0]): HTMLElement {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'site-group';
    groupDiv.setAttribute('data-group-id', group.id);

    // 分组标题
    const titleElement = document.createElement('h2');
    titleElement.className = 'group-title';
    titleElement.textContent = group.name;
    groupDiv.appendChild(titleElement);

    // 网站列表
    const sitesContainer = document.createElement('div');
    sitesContainer.className = 'sites-container';

    group.sites.forEach(site => {
      const siteElement = this.createSiteElement(site);
      sitesContainer.appendChild(siteElement);
    });

    groupDiv.appendChild(sitesContainer);
    return groupDiv;
  }

  private createSiteElement(site: typeof siteGroups[0]['sites'][0]): HTMLElement {
    const siteDiv = document.createElement('div');
    siteDiv.className = 'site-item';
    siteDiv.setAttribute('data-site-id', site.id);

    const icon = document.createElement('img');
    icon.className = 'site-icon';
    icon.src = site.icon;
    icon.alt = site.name;
    icon.onerror = () => {
      // 如果图标加载失败，使用默认图标
      icon.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="%23ddd"/><text x="16" y="20" font-size="12" text-anchor="middle" fill="%23999">?</text></svg>';
    };

    const name = document.createElement('span');
    name.className = 'site-name';
    name.textContent = site.name;

    siteDiv.appendChild(icon);
    siteDiv.appendChild(name);

    // 点击打开新标签页
    siteDiv.addEventListener('click', () => {
      window.open(site.url, '_blank');
    });

    return siteDiv;
  }
}

// 当 DOM 加载完成后初始化应用
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new NavigationApp();
  });
} else {
  new NavigationApp();
}

