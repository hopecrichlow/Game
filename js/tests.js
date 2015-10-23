import Bug from './bug';

(function() {
  'use strict';
  
  describe('My Bug Object', function() {

    describe('Creating a new bug', function() {
      it('should create a new instance', function() {
        let bug = new Bug();
        expect(bug instanceof Bug).to.equal(true);
      });
    describe('Creating a new bug', function() {
      it('should create a new instance', function() {
        let bug = new Bug();
        expect(bug instanceof Bug).to.equal(true);
      });
    });
  });

}()); 
