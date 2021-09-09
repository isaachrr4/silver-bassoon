const indexedDB = window.indexedDB;

let db;
const request = indexedDB.open('silver-bassoon budget', 1);

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  db.createObjectStore('new_budget', { autoIncrement: true });
};

request.onsuccess = function(event) {
    db = event.target.result;
    if (navigator.onLine) {
      uploadTransaction();
    }
  };

  request.onerror = function(event) {
    console.log(event.target.errorCode);
  };