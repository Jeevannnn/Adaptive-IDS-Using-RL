import { Alert } from '../types';
import { statCards, recentAlerts } from '../data';
import { createTrafficChart } from '../components/Chart';
import Chart from 'chart.js/auto';

const renderStatCards = (): string => {
    return statCards.map(card => `
        <div class="card stat-card">
            <div class="stat-card-icon ${card.colorClass}">
                <span class="material-symbols-outlined">${card.icon}</span>
            </div>
            <div class="stat-card-info">
                <h3>${card.value}</h3>
                <p>${card.title}</p>
            </div>
        </div>
    `).join('');
};

const renderRecentAlerts = (): string => {
    const priorityClasses: Record<Alert['priority'], string> = {
        Critical: 'priority-critical',
        High: 'priority-high',
        Medium: 'priority-medium',
        Low: 'priority-low',
    };

    return `
        <div class="card col-span-2">
            <div class="card-header">
                <h3 class="card-title">Recent High-Priority Alerts</h3>
            </div>
            <ul class="alert-list">
                ${recentAlerts.slice(0, 4).map(alert => `
                    <li class="alert-item">
                        <div class="priority-indicator ${priorityClasses[alert.priority]}"></div>
                        <div class="alert-details">
                            <p>${alert.description}</p>
                            <span>Source: ${alert.source}</span>
                        </div>
                        <time class="alert-time">${new Date(alert.timestamp).toLocaleTimeString()}</time>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
};

export const renderDashboard = (): HTMLElement => {
    const main = document.createElement('main');
    main.className = 'main-content';
    main.innerHTML = `
        <div class="grid-container grid-cols-4">
            ${renderStatCards()}
            <div class="card col-span-2">
                <div class="card-header">
                    <h3 class="card-title">Real-time Network Traffic</h3>
                </div>
                <canvas id="trafficChart"></canvas>
            </div>
            ${renderRecentAlerts()}
        </div>
    `;
    setTimeout(() => {
      createTrafficChart();
    }, 10);
    return main;
};

