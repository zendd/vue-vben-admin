import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '序号',
      dataIndex: 'id',
      fixed: 'left',
      width: 100,
    },
    {
      title: '系统名称',
      dataIndex: 'sysName',
    },
    {
      title: '应用数',
      dataIndex: 'appNumber',
    },
    {
      title: '描述',
      dataIndex: 'decs',
    },
    {
      title: '编号',
      dataIndex: 'no',
      sorter: true,
      defaultHidden: true,
    },
    {
      title: '启动时间',
      sorter: true,
      dataIndex: 'beginTime',
    },
  ];
}
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: 'sysName',
        label: '系统名称',
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}
export function getBasicData() {
  return (() => {
    const arr: any = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `${index}`,
        name: 'John Brown',
        age: `1${index}`,
        no: `${index + 10}`,
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
      });
    }
    return arr;
  })();
}

export function getTransferData2() {
  return (() => {
    const arr: any = [];
    const keys = [];
    // const mData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        keys.push(data.key);
      }
      arr.push(data);
    }
    return arr;
  })();
}

export const getTransferData = () => {
  const arr: any = [];
  const keys = [];
  // const mData = [];
  for (let i = 0; i < 20; i++) {
    const data = {
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      chosen: Math.random() * 2 > 1,
    };
    if (data.chosen) {
      keys.push(data.key);
    }
    arr.push(data);
  }
  return arr;
};
export const topoData = {
  nodes: [
    {
      id: '0',
      label: '0',
      cluster: 'a',
    },
    {
      id: '1',
      label: '1',
      cluster: 'a',
    },
    {
      id: '2',
      label: '2',
      cluster: 'a',
    },
    {
      id: '3',
      label: '3',
      cluster: 'a',
    },
    {
      id: '4',
      label: '4',
      cluster: 'a',
    },
    {
      id: '5',
      label: '5',
      cluster: 'a',
    },
    {
      id: '6',
      label: '6',
      cluster: 'a',
    },
    {
      id: '7',
      label: '7',
      cluster: 'a',
    },
    {
      id: '8',
      label: '8',
      cluster: 'a',
    },
    {
      id: '9',
      label: '9',
      cluster: 'a',
    },
    {
      id: '10',
      label: '10',
      cluster: 'a',
    },
    {
      id: '11',
      label: '11',
      cluster: 'a',
    },
    {
      id: '12',
      label: '12',
      cluster: 'a',
    },
    {
      id: '13',
      label: '13',
      cluster: 'b',
    },
    {
      id: '14',
      label: '14',
      cluster: 'b',
    },
    {
      id: '15',
      label: '15',
      cluster: 'b',
    },
    {
      id: '16',
      label: '16',
      cluster: 'b',
    },
    {
      id: '17',
      label: '17',
      cluster: 'b',
    },
    {
      id: '18',
      label: '18',
      cluster: 'c',
    },
    {
      id: '19',
      label: '19',
      cluster: 'c',
    },
    {
      id: '20',
      label: '20',
      cluster: 'c',
    },
    {
      id: '21',
      label: '21',
      cluster: 'c',
    },
    {
      id: '22',
      label: '22',
      cluster: 'c',
    },
    {
      id: '23',
      label: '23',
      cluster: 'c',
    },
    {
      id: '24',
      label: '24',
      cluster: 'c',
    },
    {
      id: '25',
      label: '25',
      cluster: 'c',
    },
    {
      id: '26',
      label: '26',
      cluster: 'c',
    },
    {
      id: '27',
      label: '27',
      cluster: 'c',
    },
    {
      id: '28',
      label: '28',
      cluster: 'c',
    },
    {
      id: '29',
      label: '29',
      cluster: 'c',
    },
    {
      id: '30',
      label: '30',
      cluster: 'c',
    },
    {
      id: '31',
      label: '31',
      cluster: 'd',
    },
    {
      id: '32',
      label: '32',
      cluster: 'd',
    },
    {
      id: '33',
      label: '33',
      cluster: 'd',
    },
  ],
  edges: [
    {
      source: '0',
      label: 'edge 1',
      target: '1',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '2',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '3',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '4',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '5',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '7',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '8',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '9',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '10',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '11',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '13',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '14',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '15',
    },
    {
      source: '0',
      label: 'edge 1',
      target: '16',
    },
    {
      source: '2',
      label: 'edge 1',
      target: '3',
    },
    {
      source: '4',
      label: 'edge 1',
      target: '5',
    },
    {
      source: '4',
      label: 'edge 1',
      target: '6',
    },
    {
      source: '5',
      label: 'edge 1',
      target: '6',
    },
    {
      source: '7',
      label: 'edge 1',
      target: '13',
    },
    {
      source: '8',
      label: 'edge 1',
      target: '14',
    },
    {
      source: '9',
      label: 'edge 1',
      target: '10',
    },
    {
      source: '10',
      label: 'edge 1',
      target: '22',
    },
    {
      source: '10',
      label: 'edge 1',
      target: '14',
    },
    {
      source: '10',
      label: 'edge 1',
      target: '12',
    },
    {
      source: '10',
      label: 'edge 1',
      target: '24',
    },
    {
      source: '10',
      label: 'edge 1',
      target: '21',
    },
    {
      source: '10',
      label: 'edge 1',
      target: '20',
    },
    {
      source: '11',
      label: 'edge 1',
      target: '24',
    },
    {
      source: '11',
      label: 'edge 1',
      target: '22',
    },
    {
      source: '11',
      label: 'edge 1',
      target: '14',
    },
    {
      source: '12',
      label: 'edge 1',
      target: '13',
    },
    {
      source: '16',
      label: 'edge 1',
      target: '17',
    },
    {
      source: '16',
      label: 'edge 1',
      target: '18',
    },
    {
      source: '16',
      label: 'edge 1',
      target: '21',
    },
    {
      source: '16',
      label: 'edge 1',
      target: '22',
    },
    {
      source: '17',
      label: 'edge 1',
      target: '18',
    },
    {
      source: '17',
      label: 'edge 1',
      target: '20',
    },
    {
      source: '18',
      label: 'edge 1',
      target: '19',
    },
    {
      source: '19',
      label: 'edge 1',
      target: '20',
    },
    {
      source: '19',
      label: 'edge 1',
      target: '33',
    },
    {
      source: '19',
      label: 'edge 1',
      target: '22',
    },
    {
      source: '19',
      label: 'edge 1',
      target: '23',
    },
    {
      source: '20',
      label: 'edge 1',
      target: '21',
    },
    {
      source: '21',
      label: 'edge 1',
      target: '22',
    },
    {
      source: '22',
      label: 'edge 1',
      target: '24',
    },
    {
      source: '22',
      label: 'edge 1',
      target: '25',
    },
    {
      source: '22',
      label: 'edge 1',
      target: '26',
    },
    {
      source: '22',
      label: 'edge 1',
      target: '23',
    },
    {
      source: '22',
      label: 'edge 1',
      target: '28',
    },
    {
      source: '22',
      label: 'edge 1',
      target: '30',
    },
    {
      source: '22',
      label: 'edge 1',
      target: '31',
    },
    {
      source: '22',
      label: 'edge 1',
      target: '32',
    },
    {
      source: '22',
      label: 'edge 1',
      target: '33',
    },
    {
      source: '23',
      label: 'edge 1',
      target: '28',
    },
    {
      source: '23',
      label: 'edge 1',
      target: '27',
    },
    {
      source: '23',
      label: 'edge 1',
      target: '29',
    },
    {
      source: '23',
      label: 'edge 1',
      target: '30',
    },
    {
      source: '23',
      label: 'edge 1',
      target: '31',
    },
    {
      source: '23',
      label: 'edge 1',
      target: '33',
    },
    {
      source: '32',
      label: 'edge 1',
      target: '33',
    },
  ],
};
