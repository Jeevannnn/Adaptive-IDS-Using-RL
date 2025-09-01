import { navItems } from '../data';

export const renderHeader = (activePage: string): HTMLElement => {
    const header = document.createElement('header');
    header.className = 'header';
    const pageTitle = navItems.find(item => item.id === activePage)?.label || 'Dashboard';
    header.innerHTML = `
        <button class="hamburger-menu" aria-label="Open menu">
            <span class="material-symbols-outlined">menu</span>
        </button>
        <h2 class="header-title">${pageTitle}</h2>
        <div class="header-actions">
            
            <div class="user-profile">
                <img src="/assets/admin.png" alt="Admin user avatar">
                <span>Admin</span>
            </div>
        </div>
    `;
    return header;
};
