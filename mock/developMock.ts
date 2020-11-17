import { Request, Response } from 'express';

const contactList = (req: Request, res: Response) => {
  // const item = {
  // name: '陈建',
  // jobStatus: 0,
  // account: '12345',
  // tel: '18780071650',
  // accountActivate: 0,
  // entryTime: '2019-10-10',
  // role: 0,
  // houseNumber: 100,
  // mermberNumber: 100,
  // outerTime: '',
  // };

  const list = Array(200)
    .fill(1)
    .map((value, index) => {
      const tempData = {
        houseNumber: (index + 1) * 50,
        jobStatus: index % 2,
        entryTime: '2019-10-10',
        name: index % 2 ? '陈建' : '张s',
        accountActivate: index % 2,
        role: index % 2,
        tel: '18780071650',
        account: `${index}548`,
        outerTime: '2020-05-03',
        Id: index,
      };
      return tempData;
    });

  res.json(list);
};

export default {
  'POST /dev/query/contact/list': contactList,
};
