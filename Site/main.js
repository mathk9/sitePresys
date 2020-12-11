document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'up'
    });
  });

  function openForm() {
    document.getElementById("cadForm").style.display = "block";
  }

  function clearForm() {
    document.getElementById("nome").value = "";
    document.getElementById("senha").value = "";
  }

  function closeForm() {
    document.getElementById("cadForm").style.display = "none";
  }

