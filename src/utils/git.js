export function getGitUrl(item) {
  return `https://${item.git_type}.com/${item.git_login}/${item.classname}`;
}

export function getNpmUrl(item, version) {
  if (version) {
    return `https://www.npmjs.com/package/${item.classname}/v/${version}`;
  } else {
    return `https://www.npmjs.com/package/${item.classname}`;
  }
}

export function getPreviewUrl({ name, version, path, file }) {
  return `https://imooc-component.youbaobao.xyz/${name}${encodeURIComponent('@')}${version}/${path}/${file}`;
}
