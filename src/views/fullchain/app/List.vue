<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'appName'">
          <a-button type="link" @click="appNameClick(column, record, text)">{{ text }}</a-button>
        </template>
      </template>
    </BasicTable>
    <ModalTopo @register="registerTopo" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { demoListApi } from '/@/api/fullchain/app';
  import { useModal } from '/@/components/Modal';
  import ModalTopo from './ModalTopo.vue';
  import { router } from '/@/router';

  export default defineComponent({
    components: { BasicTable, ModalTopo },
    setup() {
      const [registerTopo, { openModal: openModalTopo }] = useModal();
      const [registerTable, { getForm }] = useTable({
        title: '搜索结果',
        api: demoListApi,
        columns: getBasicColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: false,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
        bordered: true,
      });

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }
      function appNameClick(record: Recordable, column: BasicColumn, text: string) {
        console.log('点击了删除record', record);
        console.log('点击了删除column', column);
        console.log('点击了删除text', text);
        router.push('app-detail');
      }
      return {
        registerTable,
        getFormValues,
        registerTopo,
        openModalTopo,
        appNameClick,
      };
    },
  });
</script>
