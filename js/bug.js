let Bug = function(params) {
  params = params || {};

  this.status = 'normal';
  this.color = params.color;
  this.swat = function() {
    this.status = 'mean';
  };
};

export default Bug;