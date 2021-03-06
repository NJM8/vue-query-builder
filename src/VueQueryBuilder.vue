<template>
  <div class="vue-query-builder">
    <query-builder-group
      :index="0"
      :query.sync="query"
      :rule-types="ruleTypes"
      :rules="mergedRules"
      :max-depth="maxDepth"
      :depth="depth"
      :styled="styled"
      :labels="mergedLabels"
      type="query-builder-group"
      @enter-pressed="$emit('enter-pressed')"
    />
  </div>
</template>

<script>
// move this line up for local style testing
//  <style src="./styles/app.css"></style>

/* eslint-disable */
import QueryBuilderGroup from "./components/QueryBuilderGroup.vue";
import deepClone from "./utilities.js";

var defaultLabels = {
  matchType: "Match Type",
  matchTypeAll: "All",
  matchTypeAny: "Any",
  addRule: "Add Rule",
  removeRule: "&times;",
  addGroup: "Add Group",
  removeGroup: "&times;",
  textInputPlaceholder: "value"
};

export default {
  name: "vue-query-builder",

  components: {
    QueryBuilderGroup
  },

  props: {
    rules: Array,
    labels: {
      type: Object,
      default() {
        return defaultLabels;
      }
    },
    styled: {
      type: Boolean,
      default: true
    },
    maxDepth: {
      type: Number,
      default: 3,
      validator: function(value) {
        return value >= 1;
      }
    },
    value: Object
  },

  data() {
    return {
      depth: 1,
      query: {
        logicalOperator: "All",
        children: []
      },
      ruleTypes: {
        text: {
          operators: [
            "contains",
            "does not contain",
            "equals",
            "does not equal",
            "is empty",
            "is not empty",
            "begins with",
            "ends with"
          ],
          inputType: "text",
          id: "text-field"
        },
        numeric: {
          operators: ["=", "<>", "<", "<=", ">", ">="],
          inputType: "number",
          id: "number-field"
        },
        custom: {
          operators: [],
          inputType: "text",
          id: "custom-field"
        },
        radio: {
          operators: [],
          choices: [],
          inputType: "radio",
          id: "radio-field"
        },
        checkbox: {
          operators: [],
          choices: [],
          inputType: "checkbox",
          id: "checkbox-field"
        },
        select: {
          operators: ["=", "<>"],
          choices: [],
          inputType: "select",
          id: "select-field"
        },
        "multi-select": {
          operators: ["="],
          choices: [],
          inputType: "select",
          id: "multi-select-field"
        }
      }
    };
  },

  computed: {
    mergedLabels() {
      return Object.assign({}, defaultLabels, this.labels);
    },

    mergedRules() {
      var mergedRules = [];
      var vm = this;

      vm.rules.forEach(function(rule) {
        if (typeof vm.ruleTypes[rule.type] !== "undefined") {
          mergedRules.push(Object.assign({}, vm.ruleTypes[rule.type], rule));
        } else {
          mergedRules.push(rule);
        }
      });

      return mergedRules;
    }
  },

  mounted() {
    this.$watch(
      "query",
      newQuery => {
        this.$emit("input", deepClone(newQuery));
      },
      {
        deep: true
      }
    );

    if (typeof this.$options.propsData.value !== "undefined") {
      this.query = Object.assign(this.query, this.$options.propsData.value);
    }
  }
};
</script>
