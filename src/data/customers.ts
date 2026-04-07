/**
 * Mock customer database for billing system
 */

export interface Customer {
    readonly id: string;
    readonly name: string;
    readonly address: string;
    readonly phone?: string;
    readonly email?: string;
}

export const MOCK_CUSTOMERS: Customer[] = [
    {
        id: 'CUST-47382',
        name: 'Zenith Corporation',
        address: 'House #12, Road #5\nBlock B, Banani\nDhaka - 1213',
        phone: '01330950308',
        email: 'info@zenithcorp.com',
    },
    {
        id: 'CUST-61945',
        name: 'TechHub Limited',
        address: 'House #25, Road #11\nGulshan-2\nDhaka - 1212',
        phone: '+880 1923 456 789',
        email: 'contact@techhub.com',
    },
    {
        id: 'CUST-23847',
        name: 'Greenleaf Organics',
        address: 'Plot #45, Sector #7\nUttara Model Town\nDhaka - 1230',
        phone: '+880 1811 234 567',
        email: 'sales@greenleaf.com.bd',
    },
    {
        id: 'CUST-94756',
        name: 'Dhaka Event Management',
        address: 'Office #301, 3rd Floor\nBasundhara City, Panthapath\nDhaka - 1205',
        phone: '+880 1767 890 123',
        email: 'events@dhakaevent.com',
    },
    {
        id: 'CUST-58291',
        name: 'Skyline Publishers',
        address: 'Road #27, House #18\nDhanmondi R/A\nDhaka - 1209',
        phone: '+880 1555 123 456',
        email: 'info@skylinepub.com',
    },
    {
        id: 'CUST-71634',
        name: 'Bright Future School',
        address: 'House #8, Road #14\nMohammadpur\nDhaka - 1207',
        phone: '+880 1888 999 000',
        email: 'admin@brightfuture.edu.bd',
    },
    {
        id: 'CUST-85920',
        name: 'Metro Retail Chain',
        address: 'Plot #15, Road #4\nBaridhara DOHS\nDhaka - 1229',
        phone: '+880 1999 777 888',
        email: 'procurement@metroretail.com',
    },
    {
        id: 'CUST-42678',
        name: 'Golden Harvest Agro',
        address: 'House #55, Road #8\nNikunja-2\nDhaka - 1229',
        phone: '+880 1733 555 666',
        email: 'info@goldenharvestagro.com',
    },
    {
        id: 'CUST-96543',
        name: 'Artistic Media',
        address: 'Flat #6B, Building #10\nKalabagan\nDhaka - 1205',
        phone: '+880 1611 333 444',
        email: 'creative@artisticmedia.bd',
    },
    {
        id: 'CUST-33821',
        name: 'City Bank Limited',
        address: 'City Bank Building\n136 Gulshan Avenue\nGulshan-1, Dhaka - 1212',
        phone: '+880 1234 567 890',
        email: 'corporate@citybank.com.bd',
    },
];
