const ages = (persons1) => {
  const final = {};
  for (const name in persons1) {
    final[name] = persons1[name].died - persons1[name].born;
  }
  return final;
};

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons));
 
