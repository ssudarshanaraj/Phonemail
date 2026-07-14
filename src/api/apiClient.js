const BASE_URL = import.meta.env.VITE_API_BASE_URL

// Shared request helper. Resolves with the parsed JSON body on success and
// throws an Error with a user-displayable message on failure. Note: this API
// reports failures as HTTP 200 with { status: false, message } in the body.
async function request(path, { method = 'GET', body, headers } = {}) {
  let res
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })
  } catch {
    throw new Error('Could not reach the server. Please check your connection and try again.')
  }

  let data = null
  try {
    data = await res.json()
  } catch {
    data = null
  }

  const succeeded = res.ok && (data ? data.status !== false : true)
  if (!succeeded) {
    const msg =
      (data && (data.message || data.error || data.detail)) ||
      `Request failed (${res.status} ${res.statusText})`
    throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg))
  }
  return data
}

export const api = {
  get: (path, options) => request(path, { ...options, method: 'GET' }),
  post: (path, body, options) => request(path, { ...options, method: 'POST', body }),
  put: (path, body, options) => request(path, { ...options, method: 'PUT', body }),
  delete: (path, options) => request(path, { ...options, method: 'DELETE' }),
}
