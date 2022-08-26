<template>
  <div class="mb-4">
    <Card>
      <BasicForm @register="register" @submit="handleSubmit" />
    </Card>

    <Card
      :tab-list="settingList"
      v-bind="$attrs"
      :active-tab-key="activeKey"
      @tab-change="onTabChange"
    >
      <template v-if="activeKey === '1'">
        <div class="md:flex enter-y">
          <VisitAnalysis class="md:w-1/2 w-full" :title="'响应时间(ms)'" />
          <VisitAnalysis class="md:w-1/2 w-full" :title="'请求数'" />
        </div>
        <div class="md:flex enter-y">
          <VisitAnalysis class="md:w-1/2 w-full" :title="'系统错误数'" />
          <VisitAnalysis class="md:w-1/2 w-full" :title="'业务错误数'" />
        </div>
      </template>
      <template v-if="activeKey === '2'">
        <VisitAnalysis />
      </template>
      <template v-if="activeKey === '3'">
        <VisitAnalysis />
      </template>
      <template v-if="activeKey === '4'">
        <VisitAnalysis />
      </template>
      <template v-if="activeKey === '5'">
        <VisitAnalysis />
      </template>
    </Card>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  // import { getBasicColumns, getFormConfig } from './tableData';
  import { settingList } from './tableData';
  import VisitAnalysis from './VisitAnalysis.vue';

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '业务系统',
      colProps: {
        span: 8,
      },
      rules: [{ required: true }],
    },
    {
      field: 'field2',
      component: 'Input',
      label: '应用',
      colProps: {
        span: 8,
      },
      rules: [{ required: true }],
    },
    {
      field: 'field3',
      component: 'Input',
      label: '实例',
      colProps: {
        span: 8,
      },
      rules: [{ required: true }],
    },
  ];
  export default defineComponent({
    components: { VisitAnalysis, BasicForm, Card },
    setup() {
      const activeKey = ref('1');
      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        activeKey,
        settingList,
        register,
        setProps,
        handleSubmit: (values: any) => {
          console.log('click search,values:' + JSON.stringify(values));
        },
        onTabChange(key) {
          activeKey.value = key;
        },
      };
    },
  });
</script>
