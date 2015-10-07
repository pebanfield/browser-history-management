(function () {
  'use strict';

  describe('browser history', function () {



    describe('onpopstate', function () {

      var navCount, localHistory;

      beforeEach(function(done) {
        setTimeout(function() {
          navCount=0;
          localHistory=[];
          done();
        }, 500);
      });

      it("should fire when location is changed (sanity check test)", function(done) {
        window.onpopstate = function(event) {
          console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
          navCount++;
          if(navCount === 3){
            expect(window.location.hash).toBe('#HomePage');
            done();
          }

        };
        window.location.href = '#initialize';
        window.location.href = '#page';
        window.location.href = '#HomePage';
      });


      it("should allow back/forward detection", function(done) {
        window.onpopstate = function(event) {
          console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
          var secondLastPage = localHistory[localHistory.length-2];
          if(window.location.hash === secondLastPage){ //BACK
            expect(true).toBe(true);
            done();
          } else { //FORWARD
            localHistory.push(window.location.hash);
          }
          if(navCount === 3){
            expect(window.location.hash).toBe('#HomePage');
            done();
          }

        };
        window.location.href = '#initialize';
        window.location.href = '#page';
        window.location.href = '#HomePage';
        window.location.href = '#CategoryPage';
        window.location.href = '#SectionPage';
        window.location.href = '#CategoryPage';
      });

      // use cases to test for
      // 1. A user selects a media item to play
      // #PlayerPage #PlayerLoadingPage #PlayerPage is incorrectly detected as backward navigation

      // 2. If you check for #PlayerPage how do you allow a user to actually back navigate from either
      // PlayerPage or PlayerLoadingPage?

      it("should differentiate user initiated navigation versus framework navigation", function(done) {
        window.onpopstate = function(event) {
          console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
          var secondLastPage = localHistory[localHistory.length-2];
          if(window.location.hash === secondLastPage){ //BACK
            expect(true).toBe(true);
            done();
          } else { //FORWARD
            localHistory.push(window.location.hash);
          }
          if(navCount === 3){
            expect(window.location.hash).toBe('#HomePage');
            done();
          }

        };
        window.location.href = '#initialize';
        window.location.href = '#page';
        window.location.href = '#HomePage';
        window.location.href = '#CategoryPage';
        window.location.href = '#SectionPage';
        window.location.href = '#DetailsPage';
        window.location.href = '#PlayerPage';
        window.location.href = '#PlayerLoadingPage';
        window.location.href = '#PlayerPage';
      });

    });
  });
})();
