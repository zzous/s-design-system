// Proxy 설정을 위한 전처리
const DEVOPS_PREFIX = import.meta.env.VITE_DEVOPS_K8S_SERVICE

export const GET_PROJECT_LIST = `${DEVOPS_PREFIX}/project/list` // 프로젝트 목록
export const GET_PROJECT = `${DEVOPS_PREFIX}/project/{projectId}` // 프로젝트 상세
export const PUT_PROJECT = `${DEVOPS_PREFIX}/project/{projectId}` // 프로젝트 수정
export const POST_PROJECT = `${DEVOPS_PREFIX}/project` // 프로젝트 생성
export const DELETE_PROJECT = `${DEVOPS_PREFIX}/project/{projectId}` // 프로젝트 삭제