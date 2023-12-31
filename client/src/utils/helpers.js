export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('shop-shop', 1);
    let db, tx, store;
    request.onupgradeneeded = function (e) {
      const db = request.result;
      db.createObjectStore('products', { keyPath: '_id' });
      db.createObjectStore('categories', { keyPath: '_id' });
      db.createObjectStore('users', { keyPath: '_id' });
      db.createObjectStore('order', { keyPath: '_id' });
    };
    request.onerror = function (e) {
      console.log('Error found');
    };
    switch (method) {
      case 'put':
        store.put(object);
        resolve(object);
        break;
      case 'get':
        const all = store.getAll();
        all.onsuccess = function () {
          resolve(all.result);
        };
        break;
      case 'delete':
        store.delete(object._id);
        break;
      default:
        console.log('No valid method');
        break;
    }
    tx.oncomplete = function () {
      db.close();
    };
  });
}
