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

      it('should be normal by default', function() {
        expect(bug.status).to.equal('normal');
      });

      it('should be mean after I swat it', function() {
        expect(bug.status).to.equal('normal');
        bug.swat();
        expect(bug.status).to.equal('mean');
      });


    });
  });
}()); 
