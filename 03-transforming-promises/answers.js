/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    promise.then((value) => {
      try {
        resolve(transformer(value));
      } catch (err) {
        reject(err);
      }
    });
    promise.catch((error) => {
      reject(error);
    });
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */

function squarePromise(numberPromise) {
  return numberPromise.then((result) => {
    const number = Number(result);
    if (isNaN(number)) {
      throw `Cannot convert '${result}' to a number!`;
    }
    return number ** 2;
  });
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(() => {
    return 0;
  });
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(success, failure);
}
function success(value) {
  throw value;
}
function failure(error) {
  return error;
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
