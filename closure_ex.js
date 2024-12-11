function parent() {
  parent = 3;
  console.log("==== 1 ===", parent);

  function child() {
    console.log("=== 2 ====", parent);

    function grandChild() {
      console.log("=== 3 ====", parent);
    }

    grandChild();
  }

  child();
}

parent();
