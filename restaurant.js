//Arrays for Table Numbers and Time slots to populate the drop-down boxes
let tables = ["Table_1", "Table_2", "Table_3", "Table_4", "Table_5"];
let slots = ["11AM", "12PM", "1PM", "2PM", "3PM", "7PM","8PM","9PM"];
let loaded = false;
let bookingId = 1;
let map = [];
let tableSlotMap = [];
let tablesSelect;
let slotsSelect;

// Function that is used to ad ros to a table which displays bookings data from localstorage
function addRow(data) {
    var table = document.getElementById('recordtable');
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
   cell1.innerHTML = cell1.innerHTML +data.name;
   cell2.innerHTML = cell2.innerHTML +data.mobile;
   cell3.innerHTML = cell3.innerHTML +data.table;
   cell4.innerHTML = cell4.innerHTML +data.slot;
}

//Wipe out all rows before loading. This done to avoid appending rows repeatedly to the table
function removeRow() {
  var table = document.getElementById('recordtable');
  var rowCount = table.rows.length;
for (var i = i; i < rowCount; i++) {
    table.deleteRow(i);
}
 
}
// Load Tables and slots data. The drop-downs are loaded with data from arrays
// The data is not loaded on load of the page. The tables and slots data are loaded on clicking a button

function loadTables() {
  tablesSelect = document.getElementById('tableno');
  slotsSelect = document.getElementById('slot');
    if(loaded == false){
     
    for (x = 0; x < tables.length; x++) {
      let opt = document.createElement("option");
      opt.text = tables[x];
      tablesSelect.appendChild(opt);
    }
    loadSlots();
    loaded = true;
    let bookbtn = document.getElementById('bookbtn');
    bookbtn.innerHTML = "SAVE BOOKING";
} else {
    mySave();
}
tablesSelect.addEventListener("change", doTrick.bind(this));
  }

  function loadSlots() {
    
    for (x = 0; x < slots.length; x++) {
      let opt = document.createElement("option");
      opt.text = slots[x];
      slotsSelect.appendChild(opt);
    }
  }
  loadTables();
  loadSlots();
  
  // Store the bookings to localstorage
  // The data from local storage is first retrived, the new booking is added and it is stored in localstorage again
  // The data is stored as an array of objects called booking
  // The booking object takes 4 arguments (name,mobile,table,slot)
  // The bookings are stored in localstorage item "myContent" 
  // The table-timeslot mapping is stored in localstorage item "myMapping" 
  function mySave() {
    let name = document.getElementById("bname").value;
    let mobile = document.getElementById("mobile").value;
      let tableno = document.getElementById("tableno").value;
      let slot = document.getElementById("slot").value;
      let booking1 = new booking(name,mobile,tableno,slot);
      let ms = new mapSlot(tableno,slot);
    if(map.length <= 0 ){     
      map[0] = booking1;
      let jsonData = JSON.stringify(map);
      localStorage.removeItem("myContent");
    localStorage.setItem("myContent", jsonData);   
    }else{
      let something = localStorage.getItem("myContent");
      map = JSON.parse(something);
      let size = map.length;
      map[size] = booking1;
      let jsonData = JSON.stringify(map);
      localStorage.removeItem("myContent");
    localStorage.setItem("myContent", jsonData);
    }

    // Storage of table-slots
    if(tableSlotMap.length <= 0 ){     
      tableSlotMap[0] = ms;
      let jsonData = JSON.stringify(tableSlotMap);
      localStorage.removeItem("myMapping");
    localStorage.setItem("myMapping", jsonData);   
    }else{
      let something = localStorage.getItem("myMapping");
      tableSlotMap = JSON.parse(something);
      let size = tableSlotMap.length;
      tableSlotMap[size] = ms;
      let jsonData = JSON.stringify(tableSlotMap);
    localStorage.setItem("myMapping", jsonData);
    }
    ///

    // storeMapping(tableno,slot);
    document.getElementById("bname").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("msg").innerHTML = "Hi "+name+". "+tableno+" is booked for you for "+slot+" slot";
  }

  function myLoad() {
    removeRow();
    var mydata = localStorage.getItem("myContent");
    let parsedData = JSON.parse(mydata);
    for (let i = 0; i < parsedData.length; i++) {
      addRow(parsedData[i]);
  }

  // display Table-slot map
  var myslots = localStorage.getItem("myMapping");
  let slotsData = JSON.parse(myslots);
  for (let i = 0; i < slotsData.length; i++) {
    console.log(slotsData[i].table+" : "+slotsData[i].slot);
}

  }
  function booking(name1,mobile1,table1,slot1) {
    let name = "", table = "",slot="",mobile="";
    this.name = name1;
    this.mobile = mobile1;
    this.table= table1;
    this.slot= slot1;
    }
    function mapSlot(table1,slot1) {
      let table = "",slot="";
      this.table= table1;
    this.slot= slot1;
    }
    function storeMapping(t1,s1) {
      console.log("Storing slots : "+t1+"  : "+s1);
      let ms = new mapSlot(t1,s1);
      let something = localStorage.getItem("myMapping");
      if(something != null){
        tableSlotMap = JSON.parse(something);
      let size = tableSlotMap.length;
      tableSlotMap[size] = ms;
      let jsonData = JSON.stringify(tableSlotMap);
      localStorage.setItem("myMapping",jsonData);
      }else{
        let ms = new mapSlot(t1,s1);
        tableSlotMap[0] = ms;
      let jsonData = JSON.stringify(tableSlotMap);

      localStorage.setItem("myMapping",jsonData);

      }
    }
    function clearBookings() {
      localStorage.removeItem("myContent");

    }
    function doTrick() {
      console.log("Function doTrick called!!");
      removeOptions(slotsSelect);
    
      let selection = tablesSelect.value;
      
      populateToSelectBoxOnChange(selection);
    }

    function populateToSelectBoxOnChange(selection) {
      console.log("SELECTED = "+selection);
        isClicked = true;
      // Array of data for options
       // display Table-slot map
  var myslots = localStorage.getItem("myMapping");
  let slotsData = JSON.parse(myslots);
  let myArray =[];
  let z=0;
  for(let i=0;i<slotsData.length;i++){
    if(slotsData[i].table == selection){
    myArray[z] = slotsData[i].slot;
    z++;
    }
    z++;
  }
  for(let x=0;x<myArray.length;x++){
    console.log(myArray[x]);
  }
  /////
  console.log("STORED DATA = "+myArray);
      // Loop through the data and create options
      for (var i = 0; i < slots.length; i++) {
        var option = document.createElement("option");
         if(selection != null){
        if (myArray.includes(slots[i])) {
          option.disabled = true;
          option.text = slots[i];
          option.value = slots[i];
        } else {
          option.text = slots[i];
          option.value = slots[i];
        }
    
        slotsSelect.add(option);
           } else {
            option.text = slots[i];
            option.value = slots[i];
           }
      }
    }
    function removeOptions(selectElement) {
      var i,
        L = selectElement.options.length - 1;
      for (i = L; i >= 0; i--) {
        selectElement.remove(i);
      }
    }