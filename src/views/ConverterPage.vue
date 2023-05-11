<template>
  <div>
    <Converter
      @currencySelected="setCurrency"
      @baseCurrencySelected="setBaseCurrency"
    />
  </div>
</template>

<script>
import Converter from "@/components/Converter.vue";

export default {
  data() {
    return {
      currency: "",
      baseCurrency: "",
    };
  },
  components: {
    Converter,
  },
  methods: {
    setCurrency(newValue) {
      this.currency = newValue;
    },
    setBaseCurrency(newValue) {
      this.baseCurrency = newValue;
    },
  },
};
</script>

<style scoped></style>
