const getContainersURL = ({
  hostname = 'https://catalogserver.vercel.app',
  appName,
  version,
  platform,
}) => {
  return `${hostname}/${appName}?platform=${platform}&appVersion=${version}`;
};

export default getContainersURL;
