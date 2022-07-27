const getUniqueId = () => {
  return Math.floor(new Date().getTime() / 1000);
}

export default getUniqueId;