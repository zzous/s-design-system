
// 지원하는 HTTP 메서드 목록
const supportedMethods = ['get', 'post', 'put', 'delete', 'patch']

const resolveStandardApiUrl = (url, accountId, tenantId) => {

  let resolvedUrl = url

  // accountId가 없는 경우 '/accounts/{accountId}' 부분을 제거 (끝에 슬래시 제거)
  if (!accountId) {
    resolvedUrl = resolvedUrl.replace(/\/accounts\/\{accountId\}/, '')
  }
  // tenantId가 없는 경우 '/tenants/{tenantId}' 부분을 제거 (끝에 슬래시 제거)
  if (!tenantId) {
    resolvedUrl = resolvedUrl.replace(/\/tenants\/\{tenantId\}/, '')
  }
  // 남은 URL 템플릿 변수를 실제 값으로 치환
  resolvedUrl = resolvedUrl.replace(/\{(\w+)\}/g, (_, key) => {
    return (
      {
        accountId,
        tenantId,
      }[key] ?? `{${key}}`
    )
  })

  return resolvedUrl
}

const createRequest = (service, method, accountId, tenantId) => {
  // 메서드 유효성 검사
  if (!supportedMethods.includes(method)) {
    throw new Error(`Unsupported HTTP method: ${method}. Supported methods are: ${supportedMethods.join(', ')}`)
  }

  return (url, ...args) => {
    const resolvedUrl = resolveStandardApiUrl(url, accountId, tenantId)
    return service[method](resolvedUrl, ...args)
  }
}

export default createRequest
