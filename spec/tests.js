(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Bug = function Bug(params) {
  params = params || {};

  this.status = 'normal';
  this.color = params.color;
  this.swat = function () {
    this.status = 'mean';
  };
};

exports['default'] = Bug;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bug = require('./bug');

var _bug2 = _interopRequireDefault(_bug);

(function () {
  'use strict';
  var bug = new _bug2['default']();

  describe('My Bug Object', function () {

    describe('Creating a new bug', function () {
      it('should create a new instance', function () {
        expect(bug instanceof _bug2['default']).to.equal(true);
      });

      it('should have a status that is a string', function () {
        expect(bug).to.have.property('status');
      });

      it('should be normal by default', function () {
        expect(bug.status).to.equal('normal');
      });

      it('should be mean after I swat it', function () {
        expect(bug.status).to.equal('normal');
        bug.swat();
        expect(bug.status).to.equal('mean');
      });
    });
  });
})();

},{"./bug":1}]},{},[2])


//# sourceMappingURL=tests.js.map
