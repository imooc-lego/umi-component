import request from './request';

export function getSiteInfo() {
  return request({
    url: '/api/v1/componentSite',
  });
}

export function getComponentList(params) {
  return request({
    url: '/api/v1/components',
    params,
  });
}

export function getComponentItem(id) {
  return request({
    url: `/api/v1/components/${id}`,
  });
}
