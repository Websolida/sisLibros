Template.listaPosts.helpers({
   posts: function () {
       return Posts.find();
   }
});