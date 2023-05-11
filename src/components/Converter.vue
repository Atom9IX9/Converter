<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
          v-model="baseCurrency"
          :label="baseCurrency ? 'selected' : 'select'"
          :items="currencies"
          item-title="title"
          item-value="code"
          @update:model-value="updateCompareOptions"
        >
        </v-select>
        <v-text-field
          type="number"
          variant="solo-filled"
          v-model.number="baseCurrencyNumber"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-select
          v-model="currency"
          label="in"
          :items="availableCurrencies"
          item-title="title"
          item-value="code"
          @update:model-value="updateCompareOptions"
          >fff</v-select
        >
        <v-text-field
          variant="solo-filled"
          v-model.number="currencyNumber"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn @click="compareCurrencies">get</v-btn>
  </v-container>
</template>

<script>
import { useCurrencies } from "@/hooks/useCurrencies";
import { ref } from "vue";

export default {
  data() {
    return {
      baseCurrencyNumber: 0,
      currencyNumber: 0,
    };
  },
  computed: {
    // todo: export this logic to useCurrencies()
    currencies() {
      return Object.keys(this.currenciesArray).map((key) => ({
        title: `${this.currenciesArray[key].name} (${this.currenciesArray[key].code})`,
        code: this.currenciesArray[key].code,
      }));
    },
    availableCurrencies() {
      return this.currencies.filter((c) => c.code !== this.baseCurrency);
    },
  },
  setup(props) {
    const baseCurrency = ref("");
    const currency = ref("");

    const { data, getComparedCurrencies, getCurrencies, currenciesArray } =
      useCurrencies();

    return {
      course: data,
      getComparedCurrencies,
      baseCurrency,
      currency,
      getCurrencies,
      currenciesArray,
    };
  },
  methods: {
    updateCompareOptions() {
      this.getComparedCurrencies(this.baseCurrency, this.currency);
      this.$emit("baseCurrencySelected", this.baseCurrency);
      this.$emit("currencySelected", this.currency);
    },
    compareCurrencies() {
      this.getComparedCurrencies(this.baseCurrency, this.currency);
      this.currencyNumber = this.course * this.baseCurrencyNumber;
    },
  },
  mounted() {
    this.getCurrencies();
  },
};
</script>

<style scoped></style>
