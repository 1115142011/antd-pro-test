import request from '@/utils/request';

interface ListParam {
  pageSize?: number;
  pageNo?: number;
  [key: string]: any;
}
export async function getContactList(params: ListParam) {
  return request('/dev/query/contact/list', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
