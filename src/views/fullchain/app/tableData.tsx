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
      title: '应用名称',
      dataIndex: 'appName',
    },
    {
      title: '应用数',
      dataIndex: 'appNumber',
    },
    {
      title: '平均耗时(ms)',
      dataIndex: 'pjhs',
    },
    {
      title: '最大耗时(ms)',
      dataIndex: 'zdhs',
    },
    {
      title: 'qps',
      dataIndex: 'qps',
    },
    {
      title: '调用次数',
      dataIndex: 'dycs',
    },
    {
      title: '系统成功率(%)',
      dataIndex: 'xtcgl',
    },
    {
      title: '业务成功率(%)',
      dataIndex: 'ywcgl',
    },
  ];
}
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: 'sysName',
        label: '业务系统',
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'appName',
        label: '应用名称',
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'date',
        label: '时间范围',
        component: 'RangePicker',
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
// tab的list
export const settingList = [
  {
    key: '1',
    tab: '应用概览',
  },
  {
    key: '2',
    tab: '外部服务',
  },
  {
    key: '3',
    tab: 'TOP接口',
  },
  {
    key: '4',
    tab: 'JVM监控',
  },
  {
    key: '5',
    tab: '操作系统监控',
  },
];
