import { AlertsState, IncidentsState } from "../types";

export const renderPagination = (totalItems: number, state: AlertsState | IncidentsState, isIncidentsPage = false): HTMLElement => {
    const pagination = document.createElement('div');
    pagination.className = 'pagination-controls';

    const { currentPage, itemsPerPage } = state;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    pagination.innerHTML = `
        <span class="page-info">Showing ${startItem}-${endItem} of ${totalItems}</span>
        <div class="page-buttons">
            <button class="pagination-btn" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''} aria-label="Previous page">
                <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button class="pagination-btn" data-page="${currentPage + 1}" ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''} aria-label="Next page">
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    `;
    return pagination;
};
