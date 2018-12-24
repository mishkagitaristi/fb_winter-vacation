var Timeline = {
    getStatuses: function() {
        console.log('Statuses',Statuses);
    },
    addStatus: function() {
        Statuses.push({
            'name': 'Giorgi Parunov',
            'text' : 'Second Text'
        })
    }
}