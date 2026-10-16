const ipToInt = (ip = '127.0.0.1') => {
  const [b1, b2, b3, b4] = ip.split('.').map(Number);
  return (b1 << 24) + (b2 << 16) + (b3 << 8) + b4;
};
console.log(ipToInt('192.168.1.10'));