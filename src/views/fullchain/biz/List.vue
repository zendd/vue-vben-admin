<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleAdd">新建业务系统</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
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
    <ModalInfo @register="registerInfo" />
    <ModalTopo @register="registerTopo" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { demoListApi } from '/@/api/fullchain/biz';
  import { useModal } from '/@/components/Modal';
  import ModalInfo from './ModalInfo.vue';
  import ModalTopo from './ModalTopo.vue';

  export default defineComponent({
    components: { BasicTable, TableAction, ModalInfo, ModalTopo },
    setup() {
      const [registerInfo, { openModal: openModalInfo }] = useModal();
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
        openModalInfo(true, {
          data: 'content',
          info: 'Info',
        });
      }
      function handleAdd() {
        openModalInfo(true, {
          data: 'content',
          info: 'Info',
        });
      }
      return {
        registerTable,
        getFormValues,
        handleDelete,
        registerInfo,
        openModalInfo,
        registerTopo,
        openModalTopo,
        handleEdit,
        handleAdd,
        handleView,
      };
    },
  });
</script>
