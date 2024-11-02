document.addEventListener('DOMContentLoaded', function() {
    var options = {
      valueNames: ['title', 'year'],
      listClass: 'papers-list'
    };
    var paperList = new List('papers', options);
  
    document.getElementById('sort').addEventListener('change', function() {
      var sortBy = this.value;
      paperList.sort(sortBy, { order: "asc" });
    });
  });
  