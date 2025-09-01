export type NavItem = {
    id: string;
    label: string;
    icon: string;
};

export type StatCardData = {
    title: string;
    value: string;
    icon: string;
    colorClass: string;
};

export type Alert = {
    id: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    description: string;
    source: string;
    timestamp: string;
    status: 'New' | 'Acknowledged' | 'Resolved';
    type?: string;
    confidence?: number;
};

export type Incident = {
    id: string;
    title: string;
    status: 'Open' | 'Under Investigation' | 'Resolved' | 'Closed';
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
    assignedTo: string;
    createdAt: string;
    lastUpdatedAt: string;
    relatedAlertIds: string[];
    summary: string;
    description?: string;
    affectedSystems?: number;
    alertsCount?: number;
};

export type AlertsState = {
    currentPage: number;
    itemsPerPage: number;
    sortColumn: keyof Alert;
    sortDirection: 'asc' | 'desc';
    filters: {
        priority: 'all' | Alert['priority'];
        status: 'all' | Alert['status'];
        search: string;
    };
};

export type IncidentsState = {
    currentPage: number;
    itemsPerPage: number;
    sortColumn: keyof Incident;
    sortDirection: 'asc' | 'desc';
    filters: {
        severity: 'all' | Incident['severity'];
        status: 'all' | Incident['status'];
        search: string;
    };
    expandedIncidentId: string | null;
};
