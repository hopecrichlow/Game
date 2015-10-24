import Bug from './bug';

(function() {
  'use strict';
  let bug = new Bug();

  describe('My Bug Object', function() {

    describe('Creating a new bug', function() {
      it('should create a new instance', function() {
        expect(bug instanceof Bug).to.equal(true);
      });

      it('should have a status that is a string', function() {
        expect(bug).to.have.property('status');
      });

      it('should should be normal by default', function() {
        expect(bug.status).to.equal('normal');
      });


    });
  });
}()); 
