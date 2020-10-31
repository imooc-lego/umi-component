import { setLocale, getLocale } from 'umi-plugin-locale';
import 'antd/dist/antd.css';

const { search } = window.location;
const match = search.match(/locale=([^&]*)&?/);
if (match && match.length > 1) {
  setLocale(match[1]);
}
console.log(getLocale());

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
