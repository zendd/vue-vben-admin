<template>
  <div>
    <BasicModal
      v-bind="$attrs"
      @register="register"
      title="拓扑图"
      :width="1000"
      @visible-change="handleVisibleChange"
    >
      <div class="pt-3px pr-3px">
        <div id="container"></div>
      </div>
    </BasicModal>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { useForm } from '/@/components/Form/index';
  import { topoData } from './topoData';
  import G6 from '@antv/g6';

  export default defineComponent({
    components: { BasicModal },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const modelRef = ref({});
      const [
        registerForm,
        {
          // setFieldsValue,
          // setProps
        },
      ] = useForm({
        labelWidth: 120,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      function onDataReceive(data) {
        getTopo();
        console.log('Data Received', data);
        // 方式1;
        // setFieldsValue({
        //   field2: data.data,
        //   field1: data.info,
        // });

        // // 方式2
        modelRef.value = { field2: data.data, field1: data.info };

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }

      function getTopo() {
        const container = document.getElementById('container');
        const width = container.scrollWidth;
        const height = container.scrollHeight || 700;
        const graph = new G6.Graph({
          container: 'container',
          width,
          height,
          modes: {
            default: ['drag-canvas', 'drag-node'],
          },
          layout: {
            type: 'fruchterman',
            gravity: 5,
            speed: 5,
            // for rendering after each iteration
            tick: () => {
              graph.refreshPositions();
            },
          },
          animate: true,
          defaultNode: {
            size: 30,
          },
        });
        graph.data(topoData);
        graph.render();

        if (typeof window !== 'undefined')
          window.onresize = () => {
            if (!graph || graph.get('destroyed')) return;
            if (!container || !container.scrollWidth || !container.scrollHeight) return;
            graph.changeSize(container.scrollWidth, container.scrollHeight);
          };
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return { register, registerForm, model: modelRef, handleVisibleChange };
    },
  });
</script>
