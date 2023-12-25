export const API_URLS = {
    saveSendEmails: {
        endpoint: 'save',
        method: 'POST'
    },
    getReceivedEmails: {
        endpoint: 'inbox',
        method: 'GET'
    },
    getSentEmails: {
        endpoint: 'sentemails',
        method: 'GET'
    },
    toggleStarredEmail: {
        endpoint: 'starred',
        method: 'POST'
    },
    getStarredEmails: {
        endpoint: 'starreddisplay',
        method: 'GET'
    },
    unToggleStarredEmail: {
        endpoint: 'unstarred',
        method: 'POST'
    },
    deleteEmails: {
        endpoint: 'delete',
        method: 'PUT'
    },
    moveEmailsToBin: {
        endpoint: 'bin',
        method: 'POST'
    }
}