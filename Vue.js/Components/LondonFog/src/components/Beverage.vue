<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else/>
    <Contents>
      <template v-slot:milk>
        <Foam/>
      </template>
      <template v-slot:vanilla>
        <Vanilla />
      </template>
      <template v-slot:tea>
        <Tea />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Vanilla from "./Vanilla.vue";
import Tea from "./Tea.vue";
import Foam from "./Foam.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
}
defineProps<Props>();

</script>

