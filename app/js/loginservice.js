angular.module('myApp')
  .factory('LoginService', ['$firebase', '$firebaseSimpleLogin',
    function($firebase, $firebaseSimpleLogin ){

      // this is just a reference to a firebase location
      var userRef = new Firebase('https://plentyapp.firebaseio.com/users');
      console.log()
      return {
        fblogin : function(callback) {
        //test communciation
          var auth = $firebaseSimpleLogin(userRef); 
          // login object returned with user prop if user is logged in
          console.log('auth', auth);
          auth.$login('facebook')
            .then(function(user){
                console.log('Logged in as:', user);
              }, function(error){
                console.log('Login failed:', error);
              });
        // var auth = new FirebaseSimpleLogin(userRef, function(error, user) {
        //   console.log('auth called');
        //   if (error) {
        //     // an error occurred while attempting login
        //     console.log('error', error);
        //   } else if (user) {
        //     // user authenticated with Firebase
        //     console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
        //     console.log('user object:', user);
        //   } else {
        //     // user is logged out
        //   }
        // });
        // console.log('in fblogin before auth', auth);
        // auth.login('facebook');
      },

        twitterLogin : function() {
          var auth = $firebaseSimpleLogin(userRef); // login object returned with user prop if user is logged in
          console.log('twitter before', auth.user);
          auth.$login('twitter');
          console.log('twitter after', auth.user);
        },

        emailLogin : function(email, password, callback){
          auth.$login('password', {
            email: email,
            password: password})
              .then(function(user) {
                console.log('Logged in as: ', user.uid);
              }, function(error) {
                console.error('Login failed: ', error);
              });
        },
       
        createAccount: function(email, pass, callback) {
          var auth = $firebaseSimpleLogin(userRef); // login object returned with user prop if user is logged in   
          console.log('trying to createAccount auth', auth.$createUser);
          auth.$createUser(email, pass)
            .then(function(user) { 
              console.log('user', user);
              callback && callback(null, user) }, callback);
          },
        }
    
  }]);






    
