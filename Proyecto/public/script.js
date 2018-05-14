$(function() {
  const tasks = JSON.parse(localStorage.getItem("todos")) || [];
  //console.log(guid());

  const updateLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  };

  const posIndex = hash => {
    return tasks.findIndex(v => v.id === hash);
  };

  const deleteTask = indice => {
    const newIndex = posIndex(indice);
    swal(
      {
        title: "¿Estás Segur@?",
        text: `¿Deseas eliminar el elemento "${tasks[newIndex].name}"?`,
        type: "info",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Si, lo deseo",
        cancelButtonText: "No, cancelar",
        closeOnConfirm: true,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          tasks.splice(newIndex, 1);
          $(`#newtask_${indice}`).hide("slow", function(e) {
            $(this).remove();
          });
          updateLocalStorage();
          swal({
            title: "Proceso realizado",
            text: "Se ha eliminado el elemento",
            type: "success"
          });
        } else {
          swal({
            title: "Cancelar",
            text: "Se ha cancelado la acción",
            timer: 2000,
            type: "error"
          });
        }
      }
    );
  };

  const addTask = (task, indice, finish = false) => {
    updateLocalStorage();
    $("#tasks").append(
      `<div id='newtask_${indice}' style="text-decoration : ${
        finish ? "line-through" : "none"
      }">${task} - <a href="#" id="delete_${indice}">Eliminar</a> </div> </div>`
    );
    $(`#delete_${indice}`).click(function(e) {
      //console.log(this.id.split("_")[1]);
      deleteTask(this.id.split("_")[1]);
    });
   
  };

  const loadTask = () => {
    for (let i = 1; i <= tasks.length; i++) {
      addTask(tasks[i - 1].name, tasks[i - 1].id, tasks[i - 1].finish);
    }
  };

  loadTask();

  /*
  text-decoration: line-through;
  */

  const validateTask = elementos => {
    const haveA = elementos[0] === "A" ;
    return (
      (elementos[1] === "c" || elementos[1] === "l" ||elementos[1] === "m"||elementos[1] === "r"||elementos[1] === "s"||elementos[1] === "t"||elementos[1] === "u" ||elementos[1] === "g")  
    );
    const haveB = elementos[0] === "B" ;
    return (
      (elementos[1] === "a" || elementos[1] === "e" ||elementos[1] === "k"||elementos[1] === "i"||elementos[1] === "h"||elementos[1] === "r")  
    );
    const haveC = elementos[0] === "C" ;
    return (
      (elementos[1] === "d" || elementos[1] === "a" ||elementos[1] === "f"||elementos[1] === ""||elementos[1] === "s"||elementos[1] === "l"||elementos[1] === "o"||elementos[1] === "u"||elementos[1] === "r"||elementos[1] === "m")  
    );
    const haveD = elementos[0] === "D" ;
    return (
      (elementos[1] === "s" || elementos[1] === "y" ||elementos[1] === "v") 
    );
    const haveE = elementos[0] === "E" ;
    return (
      (elementos[1] === "s" || elementos[1] === "r" ||elementos[1] === "u") 
    );
    const haveF = elementos[0] === "F" ;
    return (
      (elementos[1] === "m" || elementos[1] === "i" ||elementos[1] === ""||elementos[1] === "r") 
    );
    const haveG = elementos[0] === "G" ;
    return (
      (elementos[1] === "d" || elementos[1] === "a" ||elementos[1] === "e") 
    );
    const haveH = elementos[0] === "H" ;
    return (
      (elementos[1] === "f" || elementos[1] === "s" ||elementos[1] === "e"||elementos[1] === ""||elementos[1] === "o") 
    );
    const haveI = elementos[0] === "I" ;
    return (
      (elementos[1] === "n" || elementos[1] === "r" ||elementos[1] === "") 
    );
    const haveL = elementos[0] === "L" ;
    return (
      (elementos[1] === "a" || elementos[1] === "r" ||elementos[1] === "i"||elementos[1] === "v"||elementos[1] === "u") 
    );
    const haveI = elementos[0] === "I" ;
    return (
      (elementos[1] === "n" || elementos[1] === "r" ||elementos[1] === "") 
    );
    const haveM = elementos[0] === "M" ;
    return (
      (elementos[1] === "g" || elementos[1] === "n" ||elementos[1] === "t"||elementos[1] === "d"||elementos[1] === "o"||elementos[1] === "c") 
    );
    const haveN = elementos[0] === "N" ;
    return (
      (elementos[1] === "d" || elementos[1] === "e" ||elementos[1] === "p"||elementos[1] === "h"||elementos[1] === "b"||elementos[1] === "i"||elementos[1] === "" ||elementos[1] === "a") 
    );
    const haveO = elementos[0] === "O" ;
    return (
      (elementos[1] === "" || elementos[1] === "g" ||elementos[1] === "s") 
    );
    const haveP = elementos[0] === "P" ;
    return (
      (elementos[1] === "d" || elementos[1] === "t" ||elementos[1] === "b"||elementos[1] === "h"||elementos[1] === "u"||elementos[1] === "o"||elementos[1] === "r"||elementos[1] === "m"||elementos[1] === "a") 
    );
    const haveR = elementos[0] === "R" ;
    return (
      (elementos[1] === "a" || elementos[1] === "e" ||elementos[1] === "n"||elementos[1] === "h"||elementos[1] === "b"||elementos[1] === "g"||elementos[1] === "u" ||elementos[1] === "f") 
    );
    const haveS = elementos[0] === "S" ;
    return (
      (elementos[1] === "" || elementos[1] === "g" ||elementos[1] === "m" ||elementos[1] === "e" ||elementos[1] === "i") 
    );
    const haveT = elementos[0] === "T" ;
    return (
      (elementos[1] === "a" || elementos[1] === "e" ||elementos[1] === "c"||elementos[1] === "s"||elementos[1] === "b"||elementos[1] === "i"||elementos[1] === "m" ||elementos[1] === "l"  ||elementos[1] === "h") 
    );
  };

  function countElementos(elementos) {
    let numElementos = 0;
    if (elementos.length !== 0) {
      for (let i = 0; i < elementos.length; i++) {
       
        numElementos += +validateElementos(elementos[i]);
      }
    }
    return numElementos;
  }





  $("#saveTask").click(e => {
    //Validar que el campo no esté vacío...
    const $newTask = $("#task").val();
    if ($newTask.length !== 0) {
      const idTask = guid();
      tasks.push({
        id: idTask,
        name: $newTask,
        finish: false
      });
      addTask($newTask, idTask);
      $("#task")
        .val("")
        .focus();     
    } else {
      $("#task").focus();
      
      swal({
        title: "Error",
        text: "Por favor escribe una elemento",
        type: "error"
      });
    }
    //Validar que SOLO ME CUENTE LOS ELEMENTOS

    const $newElementos = $("#elementos").val();
    if ($newElementos.length <=2) {
      tasks.push($newElementos);
      $("#tasks").append(`<div>${$newElementos}</div>`);
      $("#elementos")
        .val("")
        .focus();
      $("#numElementos").html(
        `Número de Elementos encontrados : ${countSmileyElementos(tasks)}`);
      } }
);

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  }
});


