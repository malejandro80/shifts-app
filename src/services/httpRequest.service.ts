/** @format */

const urlBase = 'http://localhost:3000/api/'

const readUrl = (url = '') =>
  url.startsWith('http://') || url.startsWith('https://')
    ? url
    : `${urlBase}/${url}`

const get = (url = '', headers = {}) =>
  fetch(readUrl(url), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  }).then(response => response.json())

const post = (url = '', body = {}, headers = {}) =>
  fetch(readUrl(url), {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  }).then(response => response.json())

const put = (url = '', body = {}, headers = {}) =>
  fetch(readUrl(url), {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  }).then(response => response.json())

const del = (url = '', headers = {}) =>
  fetch(readUrl(url), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  }).then(response => response.json())

export { get, post, put, del }
