export const columns = [
    {
        name: 'User',
        selector: 'user',
        sortable: true,
    },
    {
        name: 'Domain',
        selector: 'domain',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Disk Used',
        selector: 'diskused',
        sortable: true,
    }
] 

export const customStyles = {
    rows: {
        style: {
            minHeight: '72px',
            borderBottomColor: '#f2f2f2',
            '&:hover': {
                backgroundColor: '#ececff',
                cursor: 'pointer',
            }
        },
    },
    headRow: {
        style: {            
            background: '#6c7ae0',
        },
    },
    headCells: {
        style: {
            color: '#ffffff',
            fontSize: '16px',
        },
    },
    cells: {
        style: {     
            color: '#666666',
            fontSize: '16px',
        },
    },
};

export const domainWhiteList = [
    "booster.gazri.net",
    "gazri.net",
    "hii.gazri.com",
    "rebox.gazri.com"
]

export const apiDomain = process.env.API_DOMAIN
