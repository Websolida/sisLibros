var postData = [
    {
        title: 'Introducion Telerecord',
        url: 'http://www.google.com'
    },
    {
        title: 'Diario Libre',
        url: 'http://www.google.com'
    },
    {
        title: 'Listin Diario',
        url: 'http://www.google.com'
    }
];

Template.listaPosts.helpers({
   posts: postData
});