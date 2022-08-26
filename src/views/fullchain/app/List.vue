<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'appName'">
          <a-button type="link" @click="appNameClick(column, record, text)">{{ text }}</a-button>
        </template>
        <template v-else-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '查看拓扑图',
                icon: 'akar-icons:zoom-in',
                // codicon:zoom-in
                onClick: handleView.bind(null, record, column),
              },
              {
                label: '编辑',
                icon: 'ic:outline-mode-edit-outline',
                onClick: handleEdit.bind(null, record, column),
              },
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record, column),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ModalTopo @register="registerTopo" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { demoListApi } from '/@/api/fullchain/biz';
  import { useModal } from '/@/components/Modal';
  import ModalTopo from './ModalTopo.vue';
  import { router } from '/@/router';

  export default defineComponent({
    components: { BasicTable, TableAction, ModalTopo },
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
        actionColumn: {
          width: 300,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }
      function handleView(record: Recordable, column: BasicColumn) {
        console.log('点击了删除record', record);
        console.log('点击了删除column', column);
        openModalTopo(true, {
          data: 'content',
          info: 'Info',
        });
      }
      function handleDelete(record: Recordable, column: BasicColumn) {
        console.log('点击了删除record', record);
        console.log('点击了删除column', column);
      }
      function handleEdit(record: Recordable, column: BasicColumn) {
        console.log('点击了删除record', record);
        console.log('点击了删除column', column);
        // openModalInfo(true, {
        //   data: 'content',
        //   info: 'Info',
        // });
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
        handleDelete,
        registerTopo,
        openModalTopo,
        handleEdit,
        handleView,
        appNameClick,
      };
    },
  });
</script>
